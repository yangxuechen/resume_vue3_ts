// src/utils/request.ts
import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from "axios";
import { message } from "ant-design-vue";
import type { Router } from "vue-router";
import { baseUrl } from "@/env/index";
import { useStore } from "vuex";
// 响应数据结构
interface ApiResponse<T = any> {
  code: number;
  data: T;
  message: string;
}

// 请求配置扩展
interface RequestConfig extends AxiosRequestConfig {
  showLoading?: boolean;
  showError?: boolean;
  skipAuth?: boolean;
}

// 创建 axios 实例
class HttpClient {
  private instance: AxiosInstance;
  private router?: Router;

  constructor() {
    this.instance = axios.create({
      baseURL: baseUrl,
      timeout: 30000, // 30秒超时
      headers: {
        'Content-Type': 'application/json',
      },
    });

    this.setupInterceptors();
  }

  // 设置路由器（避免循环依赖）
  setRouter(router: Router) {
    this.router = router;
  }

  private setupInterceptors() {
    // 请求拦截器
    this.instance.interceptors.request.use(
      this.handleRequest.bind(this),
      this.handleRequestError.bind(this)
    );

    // 响应拦截器
    this.instance.interceptors.response.use(
      this.handleResponse.bind(this),
      this.handleResponseError.bind(this)
    );
  }

  // 请求处理
  private handleRequest(config: InternalAxiosRequestConfig): InternalAxiosRequestConfig {
    // 清理空参数（GET 请求）
    if (config.params && config.method?.toLowerCase() === 'get') {
      config.params = this.cleanParams(config.params);
    }

    // 添加认证 Token
    const token = this.getToken();
    if (token && !(config as RequestConfig).skipAuth) {
      config.headers.Authorization = token;
    }

    // 添加请求时间戳防止缓存（可选）
    if (config.method?.toLowerCase() === 'get') {
      config.params = {
        ...config.params,
        _t: Date.now(),
      };
    }

    return config;
  }

  // 清理空参数
  private cleanParams(params: Record<string, any>): Record<string, any> {
    return Object.keys(params).reduce((acc, key) => {
      const value = params[key];
      if (value !== '' && value !== null && value !== undefined) {
        acc[key] = value;
      }
      return acc;
    }, {} as Record<string, any>);
  }

  // 获取 Token
  private getToken(): string | null {
    try {
      // 从 store 获取 token（需要动态导入避免循环依赖）
      const store = useStore?.();
      return store?.state?.token || localStorage.getItem('token') || null;
    } catch {
      return localStorage.getItem('token') || null;
    }
  }

  // 请求错误处理
  private handleRequestError(error: AxiosError): Promise<never> {
    console.error('请求错误:', error);
    return Promise.reject(error);
  }

  // 响应处理
  private handleResponse<T = any>(response: AxiosResponse<ApiResponse<T>>): T {
    const { data, status } = response;

    // HTTP 状态码检查
    if (status !== 200) {
      this.showError(`HTTP 错误: ${status}`);
      return Promise.reject(new Error(`HTTP ${status}`)) as any;
    }

    // 业务状态码检查
    const { code, message: msg, data: result } = data;

    if (code === 200) {
      return result as T;
    }

    // 处理特殊状态码
    this.handleBusinessError(code, msg);

    return Promise.reject(new Error(msg || '业务错误')) as any;
  }

  // 处理业务错误
  private handleBusinessError(code: number, message: string): void {
    switch (code) {
      case 401:
        // 未授权 - 跳转登录
        this.handleUnauthorized();
        break;
      case 403:
        this.showError('没有权限访问该资源');
        break;
      case 404:
        this.showError('请求的资源不存在');
        break;
      case 500:
        this.showError('服务器内部错误');
        break;
      default:
        if (message) {
          this.showError(message);
        }
        break;
    }
  }

  // 处理未授权
  private handleUnauthorized(): void {
    // 清除本地 token
    localStorage.removeItem('token');
    
    // 使用 Vuex 清除用户信息（如果可用）
    try {
      const store = useStore?.();
      if (store && store.dispatch) {
        store.dispatch('logout');
      }
    } catch {
      // 忽略 store 错误
    }

    // 跳转到登录页
    if (this.router) {
      this.router.replace({
        name: 'login',
        query: { redirect: this.router.currentRoute.value.fullPath },
      });
    } else {
      // 如果 router 未设置，使用 window.location
      window.location.href = '/login';
    }
  }

  // 响应错误处理
  private handleResponseError(error: AxiosError): Promise<never> {
    // 取消请求的错误不显示
    if (axios.isCancel(error)) {
      return Promise.reject(error);
    }

    let errorMessage = '网络错误，请稍后重试';

    if (error.response) {
      // 服务器返回了状态码
      const { status, data } = error.response;
      
      switch (status) {
        case 400:
          errorMessage = '请求参数错误';
          break;
        case 401:
          this.handleUnauthorized();
          errorMessage = '登录已过期，请重新登录';
          break;
        case 403:
          errorMessage = '没有权限访问';
          break;
        case 404:
          errorMessage = '接口不存在';
          break;
        case 500:
          errorMessage = '服务器内部错误';
          break;
        case 502:
          errorMessage = '网关错误';
          break;
        case 504:
          errorMessage = '网关超时';
          break;
        default:
          errorMessage = (data as any)?.message || `请求失败 (${status})`;
      }
    } else if (error.request) {
      // 请求已发出但没有收到响应
      if (error.code === 'ECONNABORTED') {
        errorMessage = '请求超时，请检查网络';
      } else {
        errorMessage = '网络连接失败，请检查网络设置';
      }
    } else {
      // 请求配置出错
      errorMessage = error.message || '请求配置错误';
    }

    this.showError(errorMessage);
    console.error('响应错误:', error);

    return Promise.reject(error);
  }

  // 显示错误信息
  private showError(text: string): void {
    // 防止重复显示相同错误
    const key = 'global_error';
    message.error({
      content: text,
      key,
      duration: 3,
    });
  }

  // 显示成功信息
  private showSuccess(text: string): void {
    message.success(text);
  }

  // 对外暴露的请求方法
  get<T = any>(url: string, config?: RequestConfig): Promise<T> {
    return this.instance.get<T>(url, config) as Promise<T>;
  }

  post<T = any>(url: string, data?: any, config?: RequestConfig): Promise<T> {
    return this.instance.post<T>(url, data, config) as Promise<T>;
  }

  put<T = any>(url: string, data?: any, config?: RequestConfig): Promise<T> {
    return this.instance.put<T>(url, data, config) as Promise<T>;
  }

  delete<T = any>(url: string, config?: RequestConfig): Promise<T> {
    return this.instance.delete<T>(url, config) as Promise<T>;
  }

  patch<T = any>(url: string, data?: any, config?: RequestConfig): Promise<T> {
    return this.instance.patch<T>(url, data, config) as Promise<T>;
  }

  // 下载文件
  download(url: string, data?: any, fileName?: string): Promise<void> {
    return this.instance.post(url, data, {
      responseType: 'blob',
    }).then((response) => {
      const blob = new Blob([response.data as BlobPart], {
        type: response.headers['content-type'] || 'application/octet-stream',
      });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = fileName || 'download';
      link.click();
      URL.revokeObjectURL(link.href);
    });
  }

  // 获取 axios 实例
  getInstance(): AxiosInstance {
    return this.instance;
  }
}

// 导出单例
const httpClient = new HttpClient();

// 导出便捷方法
export const request = httpClient.getInstance.bind(httpClient);
export const setRouter = httpClient.setRouter.bind(httpClient);

// 默认导出
export default httpClient;

// 类型导出
export type { RequestConfig, ApiResponse };