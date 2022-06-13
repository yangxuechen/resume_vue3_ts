declare var _default: import("vue").DefineComponent<{
    trigger: import("vue-types").VueTypeValidableDef<any> & {
        default: any;
    };
    defaultVisible: import("vue-types").VueTypeValidableDef<boolean>;
    visible: import("vue-types").VueTypeValidableDef<boolean>;
    placement: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    transitionName: import("vue-types").VueTypeDef<string | {
        [key: string]: any;
    }>;
    animation: import("vue-types").VueTypeValidableDef<any>;
    afterVisibleChange: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    } & {
        default: (...args: any[]) => any;
    };
    overlay: import("vue-types").VueTypeValidableDef<any>;
    overlayStyle: import("vue-types").VueTypeValidableDef<{
        [key: string]: any;
    }> & {
        default: () => {
            [key: string]: any;
        };
    };
    overlayClassName: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    prefixCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
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
    getTooltipContainer: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    destroyTooltipOnHide: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
    align: import("vue-types").VueTypeValidableDef<{
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
    arrowContent: import("vue-types").VueTypeValidableDef<any> & {
        default: any;
    };
    tipId: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    builtinPlacements: import("vue-types").VueTypeValidableDef<{
        [key: string]: any;
    }> & {
        default: () => {
            [key: string]: any;
        };
    };
    overlayInnerStyle: import("vue-types").VueTypeValidableDef<import("vue").CSSProperties>;
}, any, any, {}, {
    getPopupElement(): JSX.Element[];
    getPopupDomNode(): any;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    trigger?: unknown;
    defaultVisible?: unknown;
    visible?: unknown;
    placement?: unknown;
    transitionName?: unknown;
    animation?: unknown;
    afterVisibleChange?: unknown;
    overlay?: unknown;
    overlayStyle?: unknown;
    overlayClassName?: unknown;
    prefixCls?: unknown;
    mouseEnterDelay?: unknown;
    mouseLeaveDelay?: unknown;
    getTooltipContainer?: unknown;
    destroyTooltipOnHide?: unknown;
    align?: unknown;
    arrowContent?: unknown;
    tipId?: unknown;
    builtinPlacements?: unknown;
    overlayInnerStyle?: unknown;
} & {
    prefixCls: string;
    align: {
        [key: string]: any;
    };
    builtinPlacements: {
        [key: string]: any;
    };
    mouseEnterDelay: number;
    mouseLeaveDelay: number;
    placement: string;
    overlayStyle: {
        [key: string]: any;
    };
    overlayClassName: string;
    destroyTooltipOnHide: boolean;
    tipId: string;
} & {
    visible?: boolean;
    overlay?: any;
    animation?: any;
    transitionName?: string | {
        [key: string]: any;
    };
    trigger?: any;
    defaultVisible?: boolean;
    afterVisibleChange?: (...args: any[]) => any;
    getTooltipContainer?: (...args: any[]) => any;
    arrowContent?: any;
    overlayInnerStyle?: import("vue").CSSProperties;
}>, {
    prefixCls: string;
    align: {
        [key: string]: any;
    };
    builtinPlacements: {
        [key: string]: any;
    };
    mouseEnterDelay: number;
    mouseLeaveDelay: number;
    trigger: any;
    placement: string;
    overlayStyle: {
        [key: string]: any;
    };
    overlayClassName: string;
    destroyTooltipOnHide: boolean;
    afterVisibleChange: (...args: any[]) => any;
    getTooltipContainer: (...args: any[]) => any;
    arrowContent: any;
    tipId: string;
}>;
export default _default;
