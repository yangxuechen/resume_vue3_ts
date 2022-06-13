declare var _default: import("vue").DefineComponent<{
    prefixCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    wrapperStyle: import("vue-types").VueTypeValidableDef<{
        [key: string]: any;
    }> & {
        default: () => {
            [key: string]: any;
        };
    };
    itemWidth: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    active: import("vue-types").VueTypeValidableDef<boolean>;
    disabled: import("vue-types").VueTypeValidableDef<boolean>;
    status: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    iconPrefix: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    icon: import("vue-types").VueTypeValidableDef<any>;
    adjustMarginRight: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    stepNumber: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    stepIndex: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
    description: import("vue-types").VueTypeValidableDef<any>;
    title: import("vue-types").VueTypeValidableDef<any>;
    subTitle: import("vue-types").VueTypeValidableDef<any>;
    progressDot: import("vue-types").VueTypeDef<any>;
    tailContent: import("vue-types").VueTypeValidableDef<any>;
    icons: import("vue-types").VueTypeLooseShape<{
        finish: any;
        error: any;
    }>;
    onClick: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    onStepClick: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
}, any, any, {}, {
    onItemClick(...args: any[]): void;
    renderIconNode(): JSX.Element;
}, {
    methods: {
        setState(state: {}, callback: any): void;
        __emit(...args: any[]): void;
    };
}, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    prefixCls?: unknown;
    wrapperStyle?: unknown;
    itemWidth?: unknown;
    active?: unknown;
    disabled?: unknown;
    status?: unknown;
    iconPrefix?: unknown;
    icon?: unknown;
    adjustMarginRight?: unknown;
    stepNumber?: unknown;
    stepIndex?: unknown;
    description?: unknown;
    title?: unknown;
    subTitle?: unknown;
    progressDot?: unknown;
    tailContent?: unknown;
    icons?: unknown;
    onClick?: unknown;
    onStepClick?: unknown;
} & {
    prefixCls: string;
    itemWidth: string;
    status: string;
    wrapperStyle: {
        [key: string]: any;
    };
    iconPrefix: string;
    adjustMarginRight: string;
    stepNumber: string;
    stepIndex: number;
} & {
    icon?: any;
    title?: any;
    onClick?: (...args: any[]) => any;
    description?: any;
    active?: boolean;
    disabled?: boolean;
    subTitle?: any;
    progressDot?: any;
    icons?: {
        finish: any;
        error: any;
    };
    tailContent?: any;
    onStepClick?: (...args: any[]) => any;
}>, {
    prefixCls: string;
    onClick: (...args: any[]) => any;
    itemWidth: string;
    status: string;
    wrapperStyle: {
        [key: string]: any;
    };
    iconPrefix: string;
    adjustMarginRight: string;
    stepNumber: string;
    stepIndex: number;
    onStepClick: (...args: any[]) => any;
}>;
export default _default;
