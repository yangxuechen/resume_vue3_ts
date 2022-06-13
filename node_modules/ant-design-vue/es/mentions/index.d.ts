import type { PropType, VNodeTypes, Plugin, ExtractPropTypes } from 'vue';
import { nextTick } from 'vue';
export interface MentionsOptionProps {
    value: string;
    disabled: boolean;
    children: VNodeTypes;
    [key: string]: any;
}
declare const mentionsProps: {
    loading: import("vue-types").VueTypeValidableDef<boolean>;
    onFocus: {
        type: PropType<(e: FocusEvent) => void>;
    };
    onBlur: {
        type: PropType<(e: FocusEvent) => void>;
    };
    onSelect: {
        type: PropType<(option: MentionsOptionProps, prefix: string) => void>;
    };
    onChange: {
        type: PropType<(text: string) => void>;
    };
    autofocus: import("vue-types").VueTypeValidableDef<boolean>;
    prefix: import("vue-types").VueTypeDef<string | unknown[]>;
    prefixCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    value: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    defaultValue: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    disabled: import("vue-types").VueTypeValidableDef<boolean>;
    notFoundContent: import("vue-types").VueTypeValidableDef<import("../_util/type").VueNode>;
    split: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    transitionName: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    placement: import("vue-types").VueTypeDef<"bottom" | "top">;
    character: import("vue-types").VueTypeValidableDef<any>;
    characterRender: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    filterOption: {
        type: PropType<false | typeof import("../vc-mentions/src/util").filterOption>;
    };
    validateSearch: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    getPopupContainer: {
        type: PropType<() => HTMLElement>;
    };
};
export declare type MentionsProps = Partial<ExtractPropTypes<typeof mentionsProps>>;
export declare const MentionsOption: any;
declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {
            focused: boolean;
        };
        $props: Partial<{
            value: string;
            prefixCls: string;
            transitionName: string;
            split: string;
            defaultValue: string;
            characterRender: (...args: any[]) => any;
            validateSearch: (...args: any[]) => any;
        }> & Omit<Readonly<{
            loading?: unknown;
            onFocus?: unknown;
            onBlur?: unknown;
            onSelect?: unknown;
            onChange?: unknown;
            autofocus?: unknown;
            prefix?: unknown;
            prefixCls?: unknown;
            value?: unknown;
            defaultValue?: unknown;
            disabled?: unknown;
            notFoundContent?: unknown;
            split?: unknown;
            transitionName?: unknown;
            placement?: unknown;
            character?: unknown;
            characterRender?: unknown;
            filterOption?: unknown;
            validateSearch?: unknown;
            getPopupContainer?: unknown;
        } & {
            value: string;
            prefixCls: string;
            transitionName: string;
            split: string;
            defaultValue: string;
        } & {
            getPopupContainer?: () => HTMLElement;
            onFocus?: (e: FocusEvent) => void;
            onBlur?: (e: FocusEvent) => void;
            onChange?: (text: string) => void;
            onSelect?: (option: MentionsOptionProps, prefix: string) => void;
            disabled?: boolean;
            notFoundContent?: import("../_util/type").VueNode;
            filterOption?: false | typeof import("../vc-mentions/src/util").filterOption;
            autofocus?: boolean;
            loading?: boolean;
            placement?: "bottom" | "top";
            prefix?: string | unknown[];
            character?: any;
            characterRender?: (...args: any[]) => any;
            validateSearch?: (...args: any[]) => any;
        }> & {
            onFocus?: (...args: any[]) => any;
            onBlur?: (...args: any[]) => any;
            onChange?: (...args: any[]) => any;
            onSelect?: (...args: any[]) => any;
            "onUpdate:value"?: (...args: any[]) => any;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "value" | "prefixCls" | "transitionName" | "split" | "defaultValue" | "characterRender" | "validateSearch">;
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
        $emit: (event: "blur" | "change" | "focus" | "select" | "update:value", ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<{
            loading?: unknown;
            onFocus?: unknown;
            onBlur?: unknown;
            onSelect?: unknown;
            onChange?: unknown;
            autofocus?: unknown;
            prefix?: unknown;
            prefixCls?: unknown;
            value?: unknown;
            defaultValue?: unknown;
            disabled?: unknown;
            notFoundContent?: unknown;
            split?: unknown;
            transitionName?: unknown;
            placement?: unknown;
            character?: unknown;
            characterRender?: unknown;
            filterOption?: unknown;
            validateSearch?: unknown;
            getPopupContainer?: unknown;
        } & {
            value: string;
            prefixCls: string;
            transitionName: string;
            split: string;
            defaultValue: string;
        } & {
            getPopupContainer?: () => HTMLElement;
            onFocus?: (e: FocusEvent) => void;
            onBlur?: (e: FocusEvent) => void;
            onChange?: (text: string) => void;
            onSelect?: (option: MentionsOptionProps, prefix: string) => void;
            disabled?: boolean;
            notFoundContent?: import("../_util/type").VueNode;
            filterOption?: false | typeof import("../vc-mentions/src/util").filterOption;
            autofocus?: boolean;
            loading?: boolean;
            placement?: "bottom" | "top";
            prefix?: string | unknown[];
            character?: any;
            characterRender?: (...args: any[]) => any;
            validateSearch?: (...args: any[]) => any;
        }> & {
            onFocus?: (...args: any[]) => any;
            onBlur?: (...args: any[]) => any;
            onChange?: (...args: any[]) => any;
            onSelect?: (...args: any[]) => any;
            "onUpdate:value"?: (...args: any[]) => any;
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
        }, {
            focused: boolean;
        }, {}, {
            handleFocus(e: FocusEvent): void;
            handleBlur(e: FocusEvent): void;
            handleSelect(args_0: MentionsOptionProps, args_1: string): void;
            handleChange(val: string): void;
            getNotFoundContent(renderEmpty: typeof import("../config-provider/renderEmpty").default): any;
            getOptions(): any[] | JSX.Element;
            getFilterOption(): any;
            focus(): void;
            blur(): void;
        }, {
            methods: {
                setState(state: {}, callback: any): void;
                __emit(...args: any[]): void;
            };
        }, import("vue").ComponentOptionsMixin, ("blur" | "change" | "focus" | "select" | "update:value")[], string, {
            value: string;
            prefixCls: string;
            transitionName: string;
            split: string;
            defaultValue: string;
            characterRender: (...args: any[]) => any;
            validateSearch: (...args: any[]) => any;
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
        $nextTick: typeof nextTick;
        $watch(source: string | Function, cb: Function, options?: import("vue").WatchOptions<boolean>): import("vue").WatchStopHandle;
    } & Readonly<{
        loading?: unknown;
        onFocus?: unknown;
        onBlur?: unknown;
        onSelect?: unknown;
        onChange?: unknown;
        autofocus?: unknown;
        prefix?: unknown;
        prefixCls?: unknown;
        value?: unknown;
        defaultValue?: unknown;
        disabled?: unknown;
        notFoundContent?: unknown;
        split?: unknown;
        transitionName?: unknown;
        placement?: unknown;
        character?: unknown;
        characterRender?: unknown;
        filterOption?: unknown;
        validateSearch?: unknown;
        getPopupContainer?: unknown;
    } & {
        value: string;
        prefixCls: string;
        transitionName: string;
        split: string;
        defaultValue: string;
    } & {
        getPopupContainer?: () => HTMLElement;
        onFocus?: (e: FocusEvent) => void;
        onBlur?: (e: FocusEvent) => void;
        onChange?: (text: string) => void;
        onSelect?: (option: MentionsOptionProps, prefix: string) => void;
        disabled?: boolean;
        notFoundContent?: import("../_util/type").VueNode;
        filterOption?: false | typeof import("../vc-mentions/src/util").filterOption;
        autofocus?: boolean;
        loading?: boolean;
        placement?: "bottom" | "top";
        prefix?: string | unknown[];
        character?: any;
        characterRender?: (...args: any[]) => any;
        validateSearch?: (...args: any[]) => any;
    }> & {
        onFocus?: (...args: any[]) => any;
        onBlur?: (...args: any[]) => any;
        onChange?: (...args: any[]) => any;
        onSelect?: (...args: any[]) => any;
        "onUpdate:value"?: (...args: any[]) => any;
    } & import("vue").ShallowUnwrapRef<{
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
    }> & {
        focused: boolean;
    } & {
        [x: string]: never;
    } & {
        setState(state: {}, callback: any): void;
        __emit(...args: any[]): void;
    } & {
        handleFocus(e: FocusEvent): void;
        handleBlur(e: FocusEvent): void;
        handleSelect(args_0: MentionsOptionProps, args_1: string): void;
        handleChange(val: string): void;
        getNotFoundContent(renderEmpty: typeof import("../config-provider/renderEmpty").default): any;
        getOptions(): any[] | JSX.Element;
        getFilterOption(): any;
        focus(): void;
        blur(): void;
    } & import("vue").ComponentCustomProperties;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<{
    loading?: unknown;
    onFocus?: unknown;
    onBlur?: unknown;
    onSelect?: unknown;
    onChange?: unknown;
    autofocus?: unknown;
    prefix?: unknown;
    prefixCls?: unknown;
    value?: unknown;
    defaultValue?: unknown;
    disabled?: unknown;
    notFoundContent?: unknown;
    split?: unknown;
    transitionName?: unknown;
    placement?: unknown;
    character?: unknown;
    characterRender?: unknown;
    filterOption?: unknown;
    validateSearch?: unknown;
    getPopupContainer?: unknown;
} & {
    value: string;
    prefixCls: string;
    transitionName: string;
    split: string;
    defaultValue: string;
} & {
    getPopupContainer?: () => HTMLElement;
    onFocus?: (e: FocusEvent) => void;
    onBlur?: (e: FocusEvent) => void;
    onChange?: (text: string) => void;
    onSelect?: (option: MentionsOptionProps, prefix: string) => void;
    disabled?: boolean;
    notFoundContent?: import("../_util/type").VueNode;
    filterOption?: false | typeof import("../vc-mentions/src/util").filterOption;
    autofocus?: boolean;
    loading?: boolean;
    placement?: "bottom" | "top";
    prefix?: string | unknown[];
    character?: any;
    characterRender?: (...args: any[]) => any;
    validateSearch?: (...args: any[]) => any;
}> & {
    onFocus?: (...args: any[]) => any;
    onBlur?: (...args: any[]) => any;
    onChange?: (...args: any[]) => any;
    onSelect?: (...args: any[]) => any;
    "onUpdate:value"?: (...args: any[]) => any;
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
}, {
    focused: boolean;
}, {}, {
    handleFocus(e: FocusEvent): void;
    handleBlur(e: FocusEvent): void;
    handleSelect(args_0: MentionsOptionProps, args_1: string): void;
    handleChange(val: string): void;
    getNotFoundContent(renderEmpty: typeof import("../config-provider/renderEmpty").default): any;
    getOptions(): any[] | JSX.Element;
    getFilterOption(): any;
    focus(): void;
    blur(): void;
}, {
    methods: {
        setState(state: {}, callback: any): void;
        __emit(...args: any[]): void;
    };
}, import("vue").ComponentOptionsMixin, ("blur" | "change" | "focus" | "select" | "update:value")[], "select" | "blur" | "change" | "focus" | "update:value", {
    value: string;
    prefixCls: string;
    transitionName: string;
    split: string;
    defaultValue: string;
    characterRender: (...args: any[]) => any;
    validateSearch: (...args: any[]) => any;
}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Plugin & {
    readonly Option: any;
};
export default _default;
