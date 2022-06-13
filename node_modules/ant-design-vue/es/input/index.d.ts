import type { Plugin } from 'vue';
import Group from './Group';
import Search from './Search';
import TextArea from './TextArea';
import Password from './Password';
export { Group as InputGroup, Search as InputSearch, TextArea as Textarea, Password as InputPassword, };
declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {
            stateValue: string | number;
            isFocused: boolean;
        };
        $props: Partial<{
            name: string;
            type: string;
            prefixCls: string;
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
        }> & Omit<Readonly<{
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
        }> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "name" | "type" | "prefixCls" | "onFocus" | "onBlur" | "onChange" | "onInput" | "onKeydown" | "onKeyup" | "onUpdate:value" | "inputPrefixCls" | "lazy" | "maxlength" | "onPressEnter">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: import("vue").Slot;
        }>;
        $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>;
        $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>;
        $emit: (event: string, ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<{
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
        }>, {
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
            removePasswordTimeout: any;
            input: any;
            clearableInput: any;
        }, {
            stateValue: string | number;
            isFocused: boolean;
        }, {}, {
            handleInputFocus(e: Event): void;
            handleInputBlur(e: Event): void;
            focus(): void;
            blur(): void;
            select(): void;
            saveClearableInput(input: HTMLInputElement): void;
            saveInput(input: HTMLInputElement): void;
            setValue(value: string | number, callback?: Function): void;
            triggerChange(e: Event): void;
            handleReset(e: Event): void;
            renderInput(prefixCls: string, { addonBefore, addonAfter }: {
                addonBefore: any;
                addonAfter: any;
            }): import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>;
            clearPasswordValueAttribute(): void;
            handleChange(e: Event): void;
            handleKeyDown(e: KeyboardEvent): void;
        }, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
            name: string;
            type: string;
            prefixCls: string;
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
        }> & {
            beforeCreate?: (() => void) | (() => void)[];
            created?: (() => void) | (() => void)[];
            beforeMount?: (() => void) | (() => void)[];
            mounted?: (() => void) | (() => void)[];
            beforeUpdate?: (() => void) | (() => void)[];
            updated?: (() => void) | (() => void)[];
            activated?: (() => void) | (() => void)[];
            deactivated?: (() => void) | (() => void)[];
            beforeDestroy?: (() => void) | (() => void)[];
            beforeUnmount?: (() => void) | (() => void)[];
            destroyed?: (() => void) | (() => void)[];
            unmounted?: (() => void) | (() => void)[];
            renderTracked?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[];
            renderTriggered?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[];
            errorCaptured?: ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>, info: string) => boolean | void)[];
        };
        $forceUpdate: () => void;
        $nextTick: typeof import("vue").nextTick;
        $watch(source: string | Function, cb: Function, options?: import("vue").WatchOptions<boolean>): import("vue").WatchStopHandle;
    } & Readonly<{
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
    }> & import("vue").ShallowUnwrapRef<{
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
        removePasswordTimeout: any;
        input: any;
        clearableInput: any;
    }> & {
        stateValue: string | number;
        isFocused: boolean;
    } & {} & {
        handleInputFocus(e: Event): void;
        handleInputBlur(e: Event): void;
        focus(): void;
        blur(): void;
        select(): void;
        saveClearableInput(input: HTMLInputElement): void;
        saveInput(input: HTMLInputElement): void;
        setValue(value: string | number, callback?: Function): void;
        triggerChange(e: Event): void;
        handleReset(e: Event): void;
        renderInput(prefixCls: string, { addonBefore, addonAfter }: {
            addonBefore: any;
            addonAfter: any;
        }): import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>;
        clearPasswordValueAttribute(): void;
        handleChange(e: Event): void;
        handleKeyDown(e: KeyboardEvent): void;
    } & import("vue").ComponentCustomProperties;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<{
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
}>, {
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
    removePasswordTimeout: any;
    input: any;
    clearableInput: any;
}, {
    stateValue: string | number;
    isFocused: boolean;
}, {}, {
    handleInputFocus(e: Event): void;
    handleInputBlur(e: Event): void;
    focus(): void;
    blur(): void;
    select(): void;
    saveClearableInput(input: HTMLInputElement): void;
    saveInput(input: HTMLInputElement): void;
    setValue(value: string | number, callback?: Function): void;
    triggerChange(e: Event): void;
    handleReset(e: Event): void;
    renderInput(prefixCls: string, { addonBefore, addonAfter }: {
        addonBefore: any;
        addonAfter: any;
    }): import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>;
    clearPasswordValueAttribute(): void;
    handleChange(e: Event): void;
    handleKeyDown(e: KeyboardEvent): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
    name: string;
    type: string;
    prefixCls: string;
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
}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Plugin & {
    readonly Group: typeof Group;
    readonly Search: typeof Search;
    readonly TextArea: typeof TextArea;
    readonly Password: typeof Password;
};
export default _default;
