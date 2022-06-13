declare var _default: import("vue").DefineComponent<{
    type: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    prefixCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    iconPrefix: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    direction: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    labelPlacement: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    status: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    size: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    progressDot: import("vue-types").VueTypeDef<any>;
    initial: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    } & {
        default: number;
    };
    current: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    } & {
        default: number;
    };
    icons: import("vue-types").VueTypeLooseShape<{
        finish: any;
        error: any;
    }>;
    canClick: import("vue-types").VueTypeValidableDef<boolean>;
}, any, {
    flexSupported: boolean;
    lastStepOffsetWidth: number;
}, {}, {
    onStepClick(next: any): void;
    calcStepOffsetWidth(): void;
}, {
    methods: {
        setState(state: {}, callback: any): void;
        __emit(...args: any[]): void;
    };
}, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    type?: unknown;
    prefixCls?: unknown;
    iconPrefix?: unknown;
    direction?: unknown;
    labelPlacement?: unknown;
    status?: unknown;
    size?: unknown;
    progressDot?: unknown;
    initial?: unknown;
    current?: unknown;
    icons?: unknown;
    canClick?: unknown;
} & {
    type: string;
    prefixCls: string;
    direction: string;
    initial: number;
    size: string;
    current: number;
    status: string;
    iconPrefix: string;
    labelPlacement: string;
} & {
    progressDot?: any;
    icons?: {
        finish: any;
        error: any;
    };
    canClick?: boolean;
}>, {
    type: string;
    prefixCls: string;
    direction: string;
    initial: number;
    size: string;
    current: number;
    status: string;
    iconPrefix: string;
    labelPlacement: string;
}>;
export default _default;
