import type { VNodeTypes, CSSProperties } from 'vue';
export declare type NotificationPlacement = 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight';
export declare type IconType = 'success' | 'info' | 'error' | 'warning';
export interface ConfigProps {
    top?: string | number;
    bottom?: string | number;
    duration?: number;
    placement?: NotificationPlacement;
    getContainer?: () => HTMLElement;
    closeIcon?: VNodeTypes;
}
declare function setNotificationConfig(options: ConfigProps): void;
export interface NotificationArgsProps {
    message: VNodeTypes;
    description?: VNodeTypes;
    btn?: VNodeTypes;
    key?: string;
    onClose?: () => void;
    duration?: number | null;
    icon?: VNodeTypes;
    placement?: NotificationPlacement;
    style?: CSSProperties;
    prefixCls?: string;
    class?: string;
    readonly type?: IconType;
    onClick?: () => void;
    top?: string;
    bottom?: string;
    getContainer?: () => HTMLElement;
    closeIcon?: VNodeTypes;
}
declare function notice(args: NotificationArgsProps): void;
declare const apiBase: {
    open: typeof notice;
    close(key: string): void;
    config: typeof setNotificationConfig;
    destroy(): void;
};
declare type NotificationApi = typeof apiBase & Record<IconType | 'warn', (args: Omit<NotificationArgsProps, 'type'>) => void>;
declare const api: NotificationApi;
export default api;
