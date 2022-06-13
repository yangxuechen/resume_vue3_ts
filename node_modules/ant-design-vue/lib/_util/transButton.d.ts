declare const TransButton: import("vue").DefineComponent<{
    noStyle: import("vue-types").VueTypeValidableDef<boolean>;
    onClick: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    disabled: import("vue-types").VueTypeValidableDef<boolean>;
    autofocus: import("vue-types").VueTypeValidableDef<boolean>;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    noStyle?: unknown;
    onClick?: unknown;
    disabled?: unknown;
    autofocus?: unknown;
} & {} & {
    onClick?: (...args: any[]) => any;
    disabled?: boolean;
    autofocus?: boolean;
    noStyle?: boolean;
}>, {
    onClick: (...args: any[]) => any;
}>;
export default TransButton;
