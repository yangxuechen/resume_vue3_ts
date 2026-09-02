import httpClient from "./Axios";

export interface LoginParams {
  username: string;
  password: string;
}

export interface LoginUser {
  username?: string;
  [key: string]: unknown;
}

export interface LoginResponse {
  token?: string;
  username?: string;
  user?: LoginUser;
}

export const login = (data: LoginParams) =>
  httpClient.post<LoginResponse>("/users/login", data, { skipAuth: true });
