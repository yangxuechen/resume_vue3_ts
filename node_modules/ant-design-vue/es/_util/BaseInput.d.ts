declare const BaseInput: import("vue").DefineComponent<{
    value: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
}, {
    inputRef: any;
    focus: () => void;
    blur: () => void;
    handleChange: (e: Event) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("input" | "change")[], "input" | "change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    value?: unknown;
} & {
    value: string;
} & {}> & {
    onChange?: (...args: any[]) => any;
    onInput?: (...args: any[]) => any;
}, {
    value: string;
}>;
export default BaseInput;
