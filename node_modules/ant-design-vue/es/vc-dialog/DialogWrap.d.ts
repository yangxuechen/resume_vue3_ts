export default DialogWrap;
declare const DialogWrap: import("vue").DefineComponent<{
    visible: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
    keyboard: import("vue-types").VueTypeValidableDef<boolean>;
    mask: import("vue-types").VueTypeValidableDef<boolean>;
    afterClose: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    closable: import("vue-types").VueTypeValidableDef<boolean>;
    maskClosable: import("vue-types").VueTypeValidableDef<boolean>;
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
}, any, any, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    visible?: unknown;
    keyboard?: unknown;
    mask?: unknown;
    afterClose?: unknown;
    closable?: unknown;
    maskClosable?: unknown;
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
} & {
    prefixCls: string;
    visible: boolean;
    transitionName: string;
    zIndex: number;
    maskTransitionName: string;
    bodyStyle: {
        [key: string]: any;
    };
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
}>, {
    prefixCls: string;
    onClose: (...args: any[]) => any;
    visible: boolean;
    transitionName: string;
    zIndex: number;
    maskTransitionName: string;
    bodyStyle: {
        [key: string]: any;
    };
    afterClose: (...args: any[]) => any;
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
