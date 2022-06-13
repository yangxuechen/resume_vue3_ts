declare var _default: import("vue").DefineComponent<{
    minOverlayWidthMatchTrigger: import("vue-types").VueTypeValidableDef<boolean>;
    prefixCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    transitionName: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    overlayClassName: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    openClassName: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    animation: import("vue-types").VueTypeValidableDef<any>;
    align: import("vue-types").VueTypeValidableDef<{
        [key: string]: any;
    }> & {
        default: () => {
            [key: string]: any;
        };
    };
    overlayStyle: import("vue-types").VueTypeValidableDef<{
        [key: string]: any;
    }> & {
        default: () => {
            [key: string]: any;
        };
    } & {
        default: () => {
            [key: string]: any;
        };
    };
    placement: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    overlay: import("vue-types").VueTypeValidableDef<any>;
    trigger: import("vue-types").VueTypeDef<string | string[]> & {
        default: string | (() => string[]);
    };
    alignPoint: import("vue-types").VueTypeValidableDef<boolean>;
    showAction: import("vue-types").VueTypeValidableDef<unknown[]> & {
        default: () => unknown[];
    };
    hideAction: import("vue-types").VueTypeValidableDef<unknown[]> & {
        default: () => unknown[];
    };
    getPopupContainer: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    visible: import("vue-types").VueTypeValidableDef<boolean>;
    defaultVisible: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
    mouseEnterDelay: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    } & {
        default: number;
    };
    mouseLeaveDelay: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    } & {
        default: number;
    };
}, any, {
    sVisible: boolean;
}, {}, {
    onClick(e: any): void;
    onVisibleChange(visible: any): void;
    getMinOverlayWidthMatchTrigger(): any;
    getOverlayElement(): any;
    getMenuElement(): import("vue").VNode<any, any, {
        [key: string]: any;
    }>;
    getMenuElementOrLambda(): import("vue").VNode<any, any, {
        [key: string]: any;
    }> | (() => import("vue").VNode<any, any, {
        [key: string]: any;
    }>);
    getPopupDomNode(): any;
    getOpenClassName(): string;
    afterVisibleChange(visible: any): void;
    renderChildren(): any[] | import("vue").VNode<any, any, {
        [key: string]: any;
    }>;
    saveTrigger(node: any): void;
}, {
    methods: {
        setState(state: {}, callback: any): void;
        __emit(...args: any[]): void;
    };
}, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    minOverlayWidthMatchTrigger?: unknown;
    prefixCls?: unknown;
    transitionName?: unknown;
    overlayClassName?: unknown;
    openClassName?: unknown;
    animation?: unknown;
    align?: unknown;
    overlayStyle?: unknown;
    placement?: unknown;
    overlay?: unknown;
    trigger?: unknown;
    alignPoint?: unknown;
    showAction?: unknown;
    hideAction?: unknown;
    getPopupContainer?: unknown;
    visible?: unknown;
    defaultVisible?: unknown;
    mouseEnterDelay?: unknown;
    mouseLeaveDelay?: unknown;
} & {
    prefixCls: string;
    align: {
        [key: string]: any;
    };
    transitionName: string;
    showAction: unknown[];
    hideAction: unknown[];
    mouseEnterDelay: number;
    mouseLeaveDelay: number;
    trigger: string | string[];
    defaultVisible: boolean;
    placement: string;
    overlayStyle: {
        [key: string]: any;
    };
    overlayClassName: string;
    openClassName: string;
} & {
    getPopupContainer?: (...args: any[]) => any;
    visible?: boolean;
    overlay?: any;
    animation?: any;
    alignPoint?: boolean;
    minOverlayWidthMatchTrigger?: boolean;
}>, {
    getPopupContainer: (...args: any[]) => any;
    prefixCls: string;
    align: {
        [key: string]: any;
    };
    transitionName: string;
    showAction: unknown[];
    hideAction: unknown[];
    mouseEnterDelay: number;
    mouseLeaveDelay: number;
    trigger: string | string[];
    defaultVisible: boolean;
    placement: string;
    overlayStyle: {
        [key: string]: any;
    };
    overlayClassName: string;
    openClassName: string;
}>;
export default _default;
