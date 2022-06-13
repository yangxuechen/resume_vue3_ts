export default Test;
declare const Test: import("vue").DefineComponent<{}, {}, {
    destroy: boolean;
    value: string;
}, {}, {
    onChange(e: any): void;
    onDestroy(): void;
    onBlur(v: any): void;
    onFocus(): void;
    onSearch(val: any): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{} & {} & {}>, {}>;
