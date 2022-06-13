import type { CSSProperties, VNodeTypes } from 'vue';
declare type NoticeType = 'info' | 'success' | 'error' | 'warning' | 'loading';
export interface ThenableArgument {
    (val: any): void;
}
export interface MessageType {
    (): void;
    then: (fill: ThenableArgument, reject: ThenableArgument) => Promise<void>;
    promise: Promise<void>;
}
export interface MessageArgsProps {
    content: VNodeTypes;
    duration: number | null;
    type: NoticeType;
    onClose?: () => void;
    icon?: VNodeTypes;
    key?: string | number;
    style?: CSSProperties;
    class?: string;
}
declare type ConfigDuration = number | (() => void);
declare type JointContent = VNodeTypes | MessageArgsProps;
export declare type ConfigOnClose = () => void;
export interface ConfigOptions {
    top?: string;
    duration?: number;
    prefixCls?: string;
    getContainer?: () => HTMLElement;
    transitionName?: string;
    maxCount?: number;
}
export interface MessageApi {
    info(content: JointContent, duration?: ConfigDuration, onClose?: ConfigOnClose): MessageType;
    success(content: JointContent, duration?: ConfigDuration, onClose?: ConfigOnClose): MessageType;
    error(content: JointContent, duration?: ConfigDuration, onClose?: ConfigOnClose): MessageType;
    warn(content: JointContent, duration?: ConfigDuration, onClose?: ConfigOnClose): MessageType;
    warning(content: JointContent, duration?: ConfigDuration, onClose?: ConfigOnClose): MessageType;
    loading(content: JointContent, duration?: ConfigDuration, onClose?: ConfigOnClose): MessageType;
    open(args: MessageArgsProps): MessageType;
    config(options: ConfigOptions): void;
    destroy(): void;
}
declare const _default: MessageApi;
export default _default;
