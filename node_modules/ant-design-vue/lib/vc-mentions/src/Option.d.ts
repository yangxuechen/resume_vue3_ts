export namespace OptionProps {
    const value: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    const disabled: import("vue-types").VueTypeValidableDef<boolean>;
    const children: import("vue-types").VueTypeValidableDef<any>;
}
declare var _default: import("vue").DefineComponent<{
    value: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    disabled: import("vue-types").VueTypeValidableDef<boolean>;
    children: import("vue-types").VueTypeValidableDef<any>;
}, any, any, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    value?: unknown;
    disabled?: unknown;
    children?: unknown;
} & {
    value: string;
} & {
    children?: any;
    disabled?: boolean;
}>, {
    value: string;
}>;
export default _default;
