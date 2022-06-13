declare const Input: import("vue").DefineComponent<{
    inputRef: import("vue-types").VueTypeValidableDef<any>;
    prefixCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    id: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    inputElement: import("vue-types").VueTypeValidableDef<any>;
    disabled: import("vue-types").VueTypeValidableDef<boolean>;
    autofocus: import("vue-types").VueTypeValidableDef<boolean>;
    autocomplete: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    editable: import("vue-types").VueTypeValidableDef<boolean>;
    accessibilityIndex: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
    value: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    open: import("vue-types").VueTypeValidableDef<boolean>;
    tabindex: import("vue-types").VueTypeDef<string | number>;
    /** Pass accessibility props to input */
    attrs: import("vue-types").VueTypeValidableDef<{
        [key: string]: any;
    }> & {
        default: () => {
            [key: string]: any;
        };
    };
    onKeydown: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    onMousedown: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    onChange: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    onPaste: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    onCompositionstart: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    onCompositionend: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    onFocus: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    onBlur: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
}, {
    blurTimeout: any;
    VCSelectContainerEvent: any;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    inputRef?: unknown;
    prefixCls?: unknown;
    id?: unknown;
    inputElement?: unknown;
    disabled?: unknown;
    autofocus?: unknown;
    autocomplete?: unknown;
    editable?: unknown;
    accessibilityIndex?: unknown;
    value?: unknown;
    open?: unknown;
    tabindex?: unknown;
    attrs?: unknown;
    onKeydown?: unknown;
    onMousedown?: unknown;
    onChange?: unknown;
    onPaste?: unknown;
    onCompositionstart?: unknown;
    onCompositionend?: unknown;
    onFocus?: unknown;
    onBlur?: unknown;
} & {
    value: string;
    prefixCls: string;
    attrs: {
        [key: string]: any;
    };
    id: string;
    autocomplete: string;
    accessibilityIndex: number;
} & {
    onPaste?: (...args: any[]) => any;
    onCompositionend?: (...args: any[]) => any;
    onCompositionstart?: (...args: any[]) => any;
    onFocus?: (...args: any[]) => any;
    onBlur?: (...args: any[]) => any;
    onChange?: (...args: any[]) => any;
    onKeydown?: (...args: any[]) => any;
    onMousedown?: (...args: any[]) => any;
    tabindex?: string | number;
    open?: boolean;
    disabled?: boolean;
    inputRef?: any;
    inputElement?: any;
    autofocus?: boolean;
    editable?: boolean;
}>, {
    value: string;
    prefixCls: string;
    onPaste: (...args: any[]) => any;
    onCompositionend: (...args: any[]) => any;
    onCompositionstart: (...args: any[]) => any;
    onFocus: (...args: any[]) => any;
    onBlur: (...args: any[]) => any;
    onChange: (...args: any[]) => any;
    onKeydown: (...args: any[]) => any;
    onMousedown: (...args: any[]) => any;
    attrs: {
        [key: string]: any;
    };
    id: string;
    autocomplete: string;
    accessibilityIndex: number;
}>;
export default Input;
