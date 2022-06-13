declare const IDialogPropTypes: {
    keyboard: import("vue-types").VueTypeValidableDef<boolean>;
    mask: import("vue-types").VueTypeValidableDef<boolean>;
    afterClose: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    closable: import("vue-types").VueTypeValidableDef<boolean>;
    maskClosable: import("vue-types").VueTypeValidableDef<boolean>;
    visible: import("vue-types").VueTypeValidableDef<boolean>;
    destroyOnClose: import("vue-types").VueTypeValidableDef<boolean>;
    mousePosition: import("vue-types").VueTypeLooseShape<{
        x: (number | ((props: Record<string, unknown>) => number)) & number;
        y: (number | ((props: Record<string, unknown>) => number)) & number;
    }>;
    title: import("vue-types").VueTypeValidableDef<any>;
    footer: import("vue-types").VueTypeValidableDef<any>;
    transitionName: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    maskTransitionName: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    animation: import("vue-types").VueTypeValidableDef<any>;
    maskAnimation: import("vue-types").VueTypeValidableDef<any>;
    wrapStyle: import("vue-types").VueTypeValidableDef<{
        [key: string]: any;
    }> & {
        default: () => {
            [key: string]: any;
        };
    };
    bodyStyle: import("vue-types").VueTypeValidableDef<{
        [key: string]: any;
    }> & {
        default: () => {
            [key: string]: any;
        };
    };
    maskStyle: import("vue-types").VueTypeValidableDef<{
        [key: string]: any;
    }> & {
        default: () => {
            [key: string]: any;
        };
    };
    prefixCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    wrapClassName: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    width: import("vue-types").VueTypeDef<string | number>;
    height: import("vue-types").VueTypeDef<string | number>;
    zIndex: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
    bodyProps: import("vue-types").VueTypeValidableDef<any>;
    maskProps: import("vue-types").VueTypeValidableDef<any>;
    wrapProps: import("vue-types").VueTypeValidableDef<any>;
    getContainer: import("vue-types").VueTypeValidableDef<any>;
    dialogStyle: import("vue-types").VueTypeValidableDef<{
        [key: string]: any;
    }> & {
        default: () => {
            [key: string]: any;
        };
    };
    dialogClass: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    closeIcon: import("vue-types").VueTypeValidableDef<any>;
    forceRender: import("vue-types").VueTypeValidableDef<boolean>;
    getOpenCount: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    focusTriggerAfterClose: import("vue-types").VueTypeValidableDef<boolean>;
    onClose: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
};
export declare type MouseEventHandler = (payload: MouseEvent) => void;
export interface PreviewProps extends Omit<typeof IDialogPropTypes, 'onClose'> {
    onClose?: (e: Element) => void;
    src?: string;
    alt?: string;
}
declare const Preview: import("vue").DefineComponent<{
    keyboard: import("vue-types").VueTypeValidableDef<boolean>;
    mask: import("vue-types").VueTypeValidableDef<boolean>;
    afterClose: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    closable: import("vue-types").VueTypeValidableDef<boolean>;
    maskClosable: import("vue-types").VueTypeValidableDef<boolean>;
    visible: import("vue-types").VueTypeValidableDef<boolean>;
    destroyOnClose: import("vue-types").VueTypeValidableDef<boolean>;
    mousePosition: import("vue-types").VueTypeLooseShape<{
        x: (number | ((props: Record<string, unknown>) => number)) & number;
        y: (number | ((props: Record<string, unknown>) => number)) & number;
    }>;
    title: import("vue-types").VueTypeValidableDef<any>;
    footer: import("vue-types").VueTypeValidableDef<any>;
    transitionName: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    maskTransitionName: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    animation: import("vue-types").VueTypeValidableDef<any>;
    maskAnimation: import("vue-types").VueTypeValidableDef<any>;
    wrapStyle: import("vue-types").VueTypeValidableDef<{
        [key: string]: any;
    }> & {
        default: () => {
            [key: string]: any;
        };
    };
    bodyStyle: import("vue-types").VueTypeValidableDef<{
        [key: string]: any;
    }> & {
        default: () => {
            [key: string]: any;
        };
    };
    maskStyle: import("vue-types").VueTypeValidableDef<{
        [key: string]: any;
    }> & {
        default: () => {
            [key: string]: any;
        };
    };
    prefixCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    wrapClassName: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    width: import("vue-types").VueTypeDef<string | number>;
    height: import("vue-types").VueTypeDef<string | number>;
    zIndex: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
    bodyProps: import("vue-types").VueTypeValidableDef<any>;
    maskProps: import("vue-types").VueTypeValidableDef<any>;
    wrapProps: import("vue-types").VueTypeValidableDef<any>;
    getContainer: import("vue-types").VueTypeValidableDef<any>;
    dialogStyle: import("vue-types").VueTypeValidableDef<{
        [key: string]: any;
    }> & {
        default: () => {
            [key: string]: any;
        };
    };
    dialogClass: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    closeIcon: import("vue-types").VueTypeValidableDef<any>;
    forceRender: import("vue-types").VueTypeValidableDef<boolean>;
    getOpenCount: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    focusTriggerAfterClose: import("vue-types").VueTypeValidableDef<boolean>;
    onClose: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    src: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    alt: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("close" | "afterClose")[], "close" | "afterClose", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    keyboard?: unknown;
    mask?: unknown;
    afterClose?: unknown;
    closable?: unknown;
    maskClosable?: unknown;
    visible?: unknown;
    destroyOnClose?: unknown;
    mousePosition?: unknown;
    title?: unknown;
    footer?: unknown;
    transitionName?: unknown;
    maskTransitionName?: unknown;
    animation?: unknown;
    maskAnimation?: unknown;
    wrapStyle?: unknown;
    bodyStyle?: unknown;
    maskStyle?: unknown;
    prefixCls?: unknown;
    wrapClassName?: unknown;
    width?: unknown;
    height?: unknown;
    zIndex?: unknown;
    bodyProps?: unknown;
    maskProps?: unknown;
    wrapProps?: unknown;
    getContainer?: unknown;
    dialogStyle?: unknown;
    dialogClass?: unknown;
    closeIcon?: unknown;
    forceRender?: unknown;
    getOpenCount?: unknown;
    focusTriggerAfterClose?: unknown;
    onClose?: unknown;
    src?: unknown;
    alt?: unknown;
} & {
    prefixCls: string;
    transitionName: string;
    zIndex: number;
    maskTransitionName: string;
    bodyStyle: {
        [key: string]: any;
    };
    src: string;
    alt: string;
    maskStyle: {
        [key: string]: any;
    };
    wrapStyle: {
        [key: string]: any;
    };
    wrapClassName: string;
    dialogStyle: {
        [key: string]: any;
    };
    dialogClass: string;
} & {
    footer?: any;
    title?: any;
    mask?: boolean;
    onClose?: (...args: any[]) => any;
    keyboard?: boolean;
    visible?: boolean;
    width?: string | number;
    height?: string | number;
    animation?: any;
    forceRender?: boolean;
    maskClosable?: boolean;
    maskAnimation?: any;
    closable?: boolean;
    afterClose?: (...args: any[]) => any;
    getContainer?: any;
    closeIcon?: any;
    destroyOnClose?: boolean;
    mousePosition?: {
        x: (number | ((props: Record<string, unknown>) => number)) & number;
        y: (number | ((props: Record<string, unknown>) => number)) & number;
    };
    bodyProps?: any;
    maskProps?: any;
    wrapProps?: any;
    getOpenCount?: (...args: any[]) => any;
    focusTriggerAfterClose?: boolean;
}> & {
    onClose?: (...args: any[]) => any;
    onAfterClose?: (...args: any[]) => any;
}, {
    prefixCls: string;
    onClose: (...args: any[]) => any;
    transitionName: string;
    zIndex: number;
    maskTransitionName: string;
    bodyStyle: {
        [key: string]: any;
    };
    afterClose: (...args: any[]) => any;
    src: string;
    alt: string;
    maskStyle: {
        [key: string]: any;
    };
    wrapStyle: {
        [key: string]: any;
    };
    wrapClassName: string;
    dialogStyle: {
        [key: string]: any;
    };
    dialogClass: string;
    getOpenCount: (...args: any[]) => any;
}>;
export default Preview;
