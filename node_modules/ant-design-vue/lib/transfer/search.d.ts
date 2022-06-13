export declare const TransferSearchProps: {
    prefixCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    placeholder: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    value: import("vue-types").VueTypeValidableDef<any>;
    handleClear: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    disabled: import("vue-types").VueTypeValidableDef<boolean>;
    onChange: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
};
declare const _default: import("vue").DefineComponent<{
    prefixCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    placeholder: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    value: import("vue-types").VueTypeValidableDef<any>;
    handleClear: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    disabled: import("vue-types").VueTypeValidableDef<boolean>;
    onChange: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
}, unknown, unknown, {}, {
    handleChange(e: Event): void;
    handleClear2(e: Event): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    prefixCls?: unknown;
    placeholder?: unknown;
    value?: unknown;
    handleClear?: unknown;
    disabled?: unknown;
    onChange?: unknown;
} & {
    prefixCls: string;
    placeholder: string;
} & {
    value?: any;
    onChange?: (...args: any[]) => any;
    disabled?: boolean;
    handleClear?: (...args: any[]) => any;
}>, {
    prefixCls: string;
    onChange: (...args: any[]) => any;
    placeholder: string;
    handleClear: (...args: any[]) => any;
}>;
export default _default;
