declare const _default: import("vue").DefineComponent<{
    renderedText: import("vue-types").VueTypeValidableDef<any>;
    renderedEl: import("vue-types").VueTypeValidableDef<any>;
    item: import("vue-types").VueTypeValidableDef<any>;
    lazy: import("vue-types").VueTypeDef<boolean | {
        [key: string]: any;
    }>;
    checked: import("vue-types").VueTypeValidableDef<boolean>;
    prefixCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    disabled: import("vue-types").VueTypeValidableDef<boolean>;
    onClick: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
}, unknown, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    renderedText?: unknown;
    renderedEl?: unknown;
    item?: unknown;
    lazy?: unknown;
    checked?: unknown;
    prefixCls?: unknown;
    disabled?: unknown;
    onClick?: unknown;
} & {
    prefixCls: string;
} & {
    item?: any;
    onClick?: (...args: any[]) => any;
    disabled?: boolean;
    lazy?: boolean | {
        [key: string]: any;
    };
    checked?: boolean;
    renderedText?: any;
    renderedEl?: any;
}>, {
    prefixCls: string;
    onClick: (...args: any[]) => any;
}>;
export default _default;
