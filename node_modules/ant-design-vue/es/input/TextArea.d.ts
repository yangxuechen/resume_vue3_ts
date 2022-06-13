declare const _default: import("vue").DefineComponent<{
    autosize: import("vue-types").VueTypeDef<boolean | {
        [key: string]: any;
    }>;
    autoSize: import("vue-types").VueTypeDef<boolean | {
        [key: string]: any;
    }>;
    showCount: import("vue-types").VueTypeValidableDef<boolean>;
    onCompositionstart: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    onCompositionend: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    prefixCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    inputPrefixCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    defaultValue: import("vue-types").VueTypeDef<string | number>;
    value: import("vue-types").VueTypeDef<string | number>;
    placeholder: {
        type: import("vue").PropType<string | number>;
    };
    type: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    name: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    size: {
        type: import("vue").PropType<import("../config-provider").SizeType>;
    };
    disabled: import("vue-types").VueTypeValidableDef<boolean>;
    readonly: import("vue-types").VueTypeValidableDef<boolean>;
    addonBefore: import("vue-types").VueTypeValidableDef<import("../_util/type").VueNode>;
    addonAfter: import("vue-types").VueTypeValidableDef<import("../_util/type").VueNode>;
    prefix: import("vue-types").VueTypeValidableDef<import("../_util/type").VueNode>;
    suffix: import("vue-types").VueTypeValidableDef<import("../_util/type").VueNode>;
    autofocus: import("vue-types").VueTypeValidableDef<boolean>;
    allowClear: import("vue-types").VueTypeValidableDef<boolean>;
    lazy: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
    maxlength: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
    loading: import("vue-types").VueTypeValidableDef<boolean>;
    onPressEnter: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    onKeydown: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    onKeyup: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    onFocus: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    onBlur: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    onChange: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    onInput: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    'onUpdate:value': import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
}, {
    configProvider: {
        getTargetContainer?: () => HTMLElement;
        getPopupContainer?: (triggerNode: HTMLElement) => HTMLElement;
        prefixCls?: string;
        getPrefixCls?: (suffixCls?: string, customizePrefixCls?: string) => string;
        renderEmpty?: typeof import("../config-provider/renderEmpty").default;
        transformCellText?: (tableProps: import("../table/interface").TransformCellTextProps) => any;
        csp?: unknown;
        autoInsertSpaceInButton?: boolean;
        locale?: {
            locale: string;
            Pagination?: {
                constructor: Function;
                toString: () => string;
                toLocaleString: () => string;
                valueOf: () => Object;
                hasOwnProperty: (v: PropertyKey) => boolean;
                isPrototypeOf: (v: Object) => boolean;
                propertyIsEnumerable: (v: PropertyKey) => boolean;
            };
            DatePicker?: {
                constructor: Function;
                toString: () => string;
                toLocaleString: () => string;
                valueOf: () => Object;
                hasOwnProperty: (v: PropertyKey) => boolean;
                isPrototypeOf: (v: Object) => boolean;
                propertyIsEnumerable: (v: PropertyKey) => boolean;
            };
            TimePicker?: {
                constructor: Function;
                toString: () => string;
                toLocaleString: () => string;
                valueOf: () => Object;
                hasOwnProperty: (v: PropertyKey) => boolean;
                isPrototypeOf: (v: Object) => boolean;
                propertyIsEnumerable: (v: PropertyKey) => boolean;
            };
            Calendar?: {
                constructor: Function;
                toString: () => string;
                toLocaleString: () => string;
                valueOf: () => Object;
                hasOwnProperty: (v: PropertyKey) => boolean;
                isPrototypeOf: (v: Object) => boolean;
                propertyIsEnumerable: (v: PropertyKey) => boolean;
            };
            Table?: {
                constructor: Function;
                toString: () => string;
                toLocaleString: () => string;
                valueOf: () => Object;
                hasOwnProperty: (v: PropertyKey) => boolean;
                isPrototypeOf: (v: Object) => boolean;
                propertyIsEnumerable: (v: PropertyKey) => boolean;
            };
            Modal?: {
                okText: string;
                cancelText: string;
                justOkText: string;
            };
            Popconfirm?: {
                constructor: Function;
                toString: () => string;
                toLocaleString: () => string;
                valueOf: () => Object;
                hasOwnProperty: (v: PropertyKey) => boolean;
                isPrototypeOf: (v: Object) => boolean;
                propertyIsEnumerable: (v: PropertyKey) => boolean;
            };
            Transfer?: {
                constructor: Function;
                toString: () => string;
                toLocaleString: () => string;
                valueOf: () => Object;
                hasOwnProperty: (v: PropertyKey) => boolean;
                isPrototypeOf: (v: Object) => boolean;
                propertyIsEnumerable: (v: PropertyKey) => boolean;
            };
            Select?: {
                constructor: Function;
                toString: () => string;
                toLocaleString: () => string;
                valueOf: () => Object;
                hasOwnProperty: (v: PropertyKey) => boolean;
                isPrototypeOf: (v: Object) => boolean;
                propertyIsEnumerable: (v: PropertyKey) => boolean;
            };
            Upload?: {
                constructor: Function;
                toString: () => string;
                toLocaleString: () => string;
                valueOf: () => Object;
                hasOwnProperty: (v: PropertyKey) => boolean;
                isPrototypeOf: (v: Object) => boolean;
                propertyIsEnumerable: (v: PropertyKey) => boolean;
            };
            Form?: {
                optional?: string;
                defaultValidateMessages: {
                    default?: string | (() => string);
                    required?: string | (() => string);
                    enum?: string | (() => string);
                    whitespace?: string | (() => string);
                    date?: {
                        format?: string | (() => string);
                        parse?: string | (() => string);
                        invalid?: string | (() => string);
                    };
                    types?: {
                        string?: string | (() => string);
                        method?: string | (() => string);
                        array?: string | (() => string);
                        object?: string | (() => string);
                        number?: string | (() => string);
                        date?: string | (() => string);
                        boolean?: string | (() => string);
                        integer?: string | (() => string);
                        float?: string | (() => string);
                        regexp?: string | (() => string);
                        email?: string | (() => string);
                        url?: string | (() => string);
                        hex?: string | (() => string);
                    };
                    string?: {
                        len?: string | (() => string);
                        min?: string | (() => string);
                        max?: string | (() => string);
                        range?: string | (() => string);
                    };
                    number?: {
                        len?: string | (() => string);
                        min?: string | (() => string);
                        max?: string | (() => string);
                        range?: string | (() => string);
                    };
                    array?: {
                        len?: string | (() => string);
                        min?: string | (() => string);
                        max?: string | (() => string);
                        range?: string | (() => string);
                    };
                    pattern?: {
                        mismatch?: string | (() => string);
                    };
                };
            };
            Image?: {
                preview: string;
            };
        };
        pageHeader?: {
            ghost: boolean;
        };
        componentSize?: import("../config-provider").SizeType;
        direction?: "ltr" | "rtl";
        space?: {
            size: number | import("../config-provider").SizeType;
        };
        virtual?: boolean;
        dropdownMatchSelectWidth?: boolean;
        form?: unknown;
    };
    resizableTextArea: any;
    clearableInput: any;
}, {
    stateValue: string | number;
}, {}, {
    setValue(value: string, callback?: Function): void;
    handleKeyDown(e: KeyboardEvent): void;
    triggerChange(e: Event): void;
    handleChange(e: Event): void;
    focus(): void;
    blur(): void;
    saveTextArea(resizableTextArea: any): void;
    saveClearableInput(clearableInput: HTMLTextAreaElement): void;
    handleReset(e: Event): void;
    renderTextArea(prefixCls: string): JSX.Element;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    autosize?: unknown;
    autoSize?: unknown;
    showCount?: unknown;
    onCompositionstart?: unknown;
    onCompositionend?: unknown;
    prefixCls?: unknown;
    inputPrefixCls?: unknown;
    defaultValue?: unknown;
    value?: unknown;
    placeholder?: unknown;
    type?: unknown;
    name?: unknown;
    size?: unknown;
    disabled?: unknown;
    readonly?: unknown;
    addonBefore?: unknown;
    addonAfter?: unknown;
    prefix?: unknown;
    suffix?: unknown;
    autofocus?: unknown;
    allowClear?: unknown;
    lazy?: unknown;
    maxlength?: unknown;
    loading?: unknown;
    onPressEnter?: unknown;
    onKeydown?: unknown;
    onKeyup?: unknown;
    onFocus?: unknown;
    onBlur?: unknown;
    onChange?: unknown;
    onInput?: unknown;
    'onUpdate:value'?: unknown;
} & {
    name: string;
    type: string;
    prefixCls: string;
    inputPrefixCls: string;
    lazy: boolean;
    maxlength: number;
} & {
    value?: string | number;
    onCompositionend?: (...args: any[]) => any;
    onCompositionstart?: (...args: any[]) => any;
    onFocus?: (...args: any[]) => any;
    onBlur?: (...args: any[]) => any;
    onChange?: (...args: any[]) => any;
    onInput?: (...args: any[]) => any;
    onKeydown?: (...args: any[]) => any;
    onKeyup?: (...args: any[]) => any;
    size?: import("../config-provider").SizeType;
    disabled?: boolean;
    autofocus?: boolean;
    suffix?: import("../_util/type").VueNode;
    placeholder?: string | number;
    defaultValue?: string | number;
    allowClear?: boolean;
    loading?: boolean;
    "onUpdate:value"?: (...args: any[]) => any;
    prefix?: import("../_util/type").VueNode;
    addonBefore?: import("../_util/type").VueNode;
    addonAfter?: import("../_util/type").VueNode;
    readonly?: boolean;
    onPressEnter?: (...args: any[]) => any;
    autosize?: boolean | {
        [key: string]: any;
    };
    autoSize?: boolean | {
        [key: string]: any;
    };
    showCount?: boolean;
}>, {
    name: string;
    type: string;
    prefixCls: string;
    onCompositionend: (...args: any[]) => any;
    onCompositionstart: (...args: any[]) => any;
    onFocus: (...args: any[]) => any;
    onBlur: (...args: any[]) => any;
    onChange: (...args: any[]) => any;
    onInput: (...args: any[]) => any;
    onKeydown: (...args: any[]) => any;
    onKeyup: (...args: any[]) => any;
    "onUpdate:value": (...args: any[]) => any;
    inputPrefixCls: string;
    lazy: boolean;
    maxlength: number;
    onPressEnter: (...args: any[]) => any;
}>;
export default _default;
