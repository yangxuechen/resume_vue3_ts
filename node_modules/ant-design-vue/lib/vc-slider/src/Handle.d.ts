declare var _default: import("vue").DefineComponent<{
    prefixCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    vertical: import("vue-types").VueTypeValidableDef<boolean>;
    offset: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
    disabled: import("vue-types").VueTypeValidableDef<boolean>;
    min: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
    max: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
    value: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
    tabindex: import("vue-types").VueTypeDef<string | number>;
    reverse: import("vue-types").VueTypeValidableDef<boolean>;
}, any, {
    clickFocused: boolean;
}, {}, {
    setHandleRef(node: any): void;
    setClickFocus(focused: any): void;
    handleMouseUp(): void;
    handleBlur(e: any): void;
    handleKeyDown(): void;
    clickFocus(): void;
    focus(): void;
    blur(): void;
    handleMousedown(e: any): void;
}, {
    methods: {
        setState(state: {}, callback: any): void;
        __emit(...args: any[]): void;
    };
}, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    prefixCls?: unknown;
    vertical?: unknown;
    offset?: unknown;
    disabled?: unknown;
    min?: unknown;
    max?: unknown;
    value?: unknown;
    tabindex?: unknown;
    reverse?: unknown;
} & {
    value: number;
    max: number;
    min: number;
    prefixCls: string;
    offset: number;
} & {
    tabindex?: string | number;
    reverse?: boolean;
    vertical?: boolean;
    disabled?: boolean;
}>, {
    value: number;
    max: number;
    min: number;
    prefixCls: string;
    offset: number;
}>;
export default _default;
