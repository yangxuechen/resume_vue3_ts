import type { VNodeTypes } from 'vue';
export declare type SliderValue = number | [number, number];
interface HandleGeneratorInfo {
    value: number;
    dragging: boolean;
    index: number;
    rest: any[];
}
export declare type HandleGeneratorFn = (config: {
    tooltipPrefixCls?: string;
    prefixCls?: string;
    info: HandleGeneratorInfo;
}) => VNodeTypes;
export declare const SliderProps: () => {
    prefixCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    tooltipPrefixCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    range: import("vue-types").VueTypeValidableDef<boolean>;
    reverse: import("vue-types").VueTypeValidableDef<boolean>;
    min: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
    max: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
    step: import("vue-types").VueTypeValidableDef<any>;
    marks: import("vue-types").VueTypeValidableDef<{
        [key: string]: any;
    }> & {
        default: () => {
            [key: string]: any;
        };
    };
    dots: import("vue-types").VueTypeValidableDef<boolean>;
    value: import("vue-types").VueTypeDef<number | number[]>;
    defaultValue: import("vue-types").VueTypeDef<number | number[]>;
    included: import("vue-types").VueTypeValidableDef<boolean>;
    disabled: import("vue-types").VueTypeValidableDef<boolean>;
    vertical: import("vue-types").VueTypeValidableDef<boolean>;
    tipFormatter: import("vue-types").VueTypeDef<any>;
    tooltipVisible: import("vue-types").VueTypeValidableDef<boolean>;
    tooltipPlacement: import("vue-types").VueTypeDef<"left" | "right" | "bottom" | "top" | "bottomRight" | "bottomLeft" | "topLeft" | "topRight" | "leftTop" | "leftBottom" | "rightTop" | "rightBottom"> & {
        default: "left" | "right" | "bottom" | "top" | "bottomRight" | "bottomLeft" | "topLeft" | "topRight" | "leftTop" | "leftBottom" | "rightTop" | "rightBottom";
    };
    getTooltipPopupContainer: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    onChange: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    onAfterChange: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
};
declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {
            visibles: {};
        };
        $props: Partial<{
            max: number;
            min: number;
            prefixCls: string;
            onChange: (...args: any[]) => any;
            tooltipPrefixCls: string;
            marks: {
                [key: string]: any;
            };
            tooltipPlacement: "left" | "right" | "bottom" | "top" | "bottomRight" | "bottomLeft" | "topLeft" | "topRight" | "leftTop" | "leftBottom" | "rightTop" | "rightBottom";
            getTooltipPopupContainer: (...args: any[]) => any;
            onAfterChange: (...args: any[]) => any;
        }> & Omit<Readonly<{
            prefixCls?: unknown;
            tooltipPrefixCls?: unknown;
            range?: unknown;
            reverse?: unknown;
            min?: unknown;
            max?: unknown;
            step?: unknown;
            marks?: unknown;
            dots?: unknown;
            value?: unknown;
            defaultValue?: unknown;
            included?: unknown;
            disabled?: unknown;
            vertical?: unknown;
            tipFormatter?: unknown;
            tooltipVisible?: unknown;
            tooltipPlacement?: unknown;
            getTooltipPopupContainer?: unknown;
            onChange?: unknown;
            onAfterChange?: unknown;
        } & {
            max: number;
            min: number;
            prefixCls: string;
            tooltipPrefixCls: string;
            marks: {
                [key: string]: any;
            };
            tooltipPlacement: "left" | "right" | "bottom" | "top" | "bottomRight" | "bottomLeft" | "topLeft" | "topRight" | "leftTop" | "leftBottom" | "rightTop" | "rightBottom";
        } & {
            value?: number | number[];
            range?: boolean;
            onChange?: (...args: any[]) => any;
            reverse?: boolean;
            vertical?: boolean;
            disabled?: boolean;
            defaultValue?: number | number[];
            step?: any;
            dots?: boolean;
            included?: boolean;
            tipFormatter?: any;
            tooltipVisible?: boolean;
            getTooltipPopupContainer?: (...args: any[]) => any;
            onAfterChange?: (...args: any[]) => any;
        }> & {
            onChange?: (...args: any[]) => any;
            "onUpdate:value"?: (...args: any[]) => any;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "max" | "min" | "prefixCls" | "onChange" | "tooltipPrefixCls" | "marks" | "tooltipPlacement" | "getTooltipPopupContainer" | "onAfterChange">;
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
        $emit: (event: "change" | "update:value", ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<{
            prefixCls?: unknown;
            tooltipPrefixCls?: unknown;
            range?: unknown;
            reverse?: unknown;
            min?: unknown;
            max?: unknown;
            step?: unknown;
            marks?: unknown;
            dots?: unknown;
            value?: unknown;
            defaultValue?: unknown;
            included?: unknown;
            disabled?: unknown;
            vertical?: unknown;
            tipFormatter?: unknown;
            tooltipVisible?: unknown;
            tooltipPlacement?: unknown;
            getTooltipPopupContainer?: unknown;
            onChange?: unknown;
            onAfterChange?: unknown;
        } & {
            max: number;
            min: number;
            prefixCls: string;
            tooltipPrefixCls: string;
            marks: {
                [key: string]: any;
            };
            tooltipPlacement: "left" | "right" | "bottom" | "top" | "bottomRight" | "bottomLeft" | "topLeft" | "topRight" | "leftTop" | "leftBottom" | "rightTop" | "rightBottom";
        } & {
            value?: number | number[];
            range?: boolean;
            onChange?: (...args: any[]) => any;
            reverse?: boolean;
            vertical?: boolean;
            disabled?: boolean;
            defaultValue?: number | number[];
            step?: any;
            dots?: boolean;
            included?: boolean;
            tipFormatter?: any;
            tooltipVisible?: boolean;
            getTooltipPopupContainer?: (...args: any[]) => any;
            onAfterChange?: (...args: any[]) => any;
        }> & {
            onChange?: (...args: any[]) => any;
            "onUpdate:value"?: (...args: any[]) => any;
        }, {
            vcSlider: any;
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
            visibles: {};
        }, {}, {
            toggleTooltipVisible(index: number, visible: boolean): void;
            handleWithTooltip(tooltipPrefixCls: string, prefixCls: string, { value, dragging, index, ...restProps }: HandleGeneratorInfo): VNodeTypes;
            saveSlider(node: any): void;
            focus(): void;
            blur(): void;
            handleChange(val: SliderValue): void;
        }, {
            methods: {
                setState(state: {}, callback: any): void;
                __emit(...args: any[]): void;
            };
        }, import("vue").ComponentOptionsMixin, ("change" | "update:value")[], string, {
            max: number;
            min: number;
            prefixCls: string;
            onChange: (...args: any[]) => any;
            tooltipPrefixCls: string;
            marks: {
                [key: string]: any;
            };
            tooltipPlacement: "left" | "right" | "bottom" | "top" | "bottomRight" | "bottomLeft" | "topLeft" | "topRight" | "leftTop" | "leftBottom" | "rightTop" | "rightBottom";
            getTooltipPopupContainer: (...args: any[]) => any;
            onAfterChange: (...args: any[]) => any;
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
        tooltipPrefixCls?: unknown;
        range?: unknown;
        reverse?: unknown;
        min?: unknown;
        max?: unknown;
        step?: unknown;
        marks?: unknown;
        dots?: unknown;
        value?: unknown;
        defaultValue?: unknown;
        included?: unknown;
        disabled?: unknown;
        vertical?: unknown;
        tipFormatter?: unknown;
        tooltipVisible?: unknown;
        tooltipPlacement?: unknown;
        getTooltipPopupContainer?: unknown;
        onChange?: unknown;
        onAfterChange?: unknown;
    } & {
        max: number;
        min: number;
        prefixCls: string;
        tooltipPrefixCls: string;
        marks: {
            [key: string]: any;
        };
        tooltipPlacement: "left" | "right" | "bottom" | "top" | "bottomRight" | "bottomLeft" | "topLeft" | "topRight" | "leftTop" | "leftBottom" | "rightTop" | "rightBottom";
    } & {
        value?: number | number[];
        range?: boolean;
        onChange?: (...args: any[]) => any;
        reverse?: boolean;
        vertical?: boolean;
        disabled?: boolean;
        defaultValue?: number | number[];
        step?: any;
        dots?: boolean;
        included?: boolean;
        tipFormatter?: any;
        tooltipVisible?: boolean;
        getTooltipPopupContainer?: (...args: any[]) => any;
        onAfterChange?: (...args: any[]) => any;
    }> & {
        onChange?: (...args: any[]) => any;
        "onUpdate:value"?: (...args: any[]) => any;
    } & import("vue").ShallowUnwrapRef<{
        vcSlider: any;
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
        visibles: {};
    } & {
        [x: string]: never;
    } & {
        setState(state: {}, callback: any): void;
        __emit(...args: any[]): void;
    } & {
        toggleTooltipVisible(index: number, visible: boolean): void;
        handleWithTooltip(tooltipPrefixCls: string, prefixCls: string, { value, dragging, index, ...restProps }: HandleGeneratorInfo): VNodeTypes;
        saveSlider(node: any): void;
        focus(): void;
        blur(): void;
        handleChange(val: SliderValue): void;
    } & import("vue").ComponentCustomProperties;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<{
    prefixCls?: unknown;
    tooltipPrefixCls?: unknown;
    range?: unknown;
    reverse?: unknown;
    min?: unknown;
    max?: unknown;
    step?: unknown;
    marks?: unknown;
    dots?: unknown;
    value?: unknown;
    defaultValue?: unknown;
    included?: unknown;
    disabled?: unknown;
    vertical?: unknown;
    tipFormatter?: unknown;
    tooltipVisible?: unknown;
    tooltipPlacement?: unknown;
    getTooltipPopupContainer?: unknown;
    onChange?: unknown;
    onAfterChange?: unknown;
} & {
    max: number;
    min: number;
    prefixCls: string;
    tooltipPrefixCls: string;
    marks: {
        [key: string]: any;
    };
    tooltipPlacement: "left" | "right" | "bottom" | "top" | "bottomRight" | "bottomLeft" | "topLeft" | "topRight" | "leftTop" | "leftBottom" | "rightTop" | "rightBottom";
} & {
    value?: number | number[];
    range?: boolean;
    onChange?: (...args: any[]) => any;
    reverse?: boolean;
    vertical?: boolean;
    disabled?: boolean;
    defaultValue?: number | number[];
    step?: any;
    dots?: boolean;
    included?: boolean;
    tipFormatter?: any;
    tooltipVisible?: boolean;
    getTooltipPopupContainer?: (...args: any[]) => any;
    onAfterChange?: (...args: any[]) => any;
}> & {
    onChange?: (...args: any[]) => any;
    "onUpdate:value"?: (...args: any[]) => any;
}, {
    vcSlider: any;
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
    visibles: {};
}, {}, {
    toggleTooltipVisible(index: number, visible: boolean): void;
    handleWithTooltip(tooltipPrefixCls: string, prefixCls: string, { value, dragging, index, ...restProps }: HandleGeneratorInfo): VNodeTypes;
    saveSlider(node: any): void;
    focus(): void;
    blur(): void;
    handleChange(val: SliderValue): void;
}, {
    methods: {
        setState(state: {}, callback: any): void;
        __emit(...args: any[]): void;
    };
}, import("vue").ComponentOptionsMixin, ("change" | "update:value")[], "change" | "update:value", {
    max: number;
    min: number;
    prefixCls: string;
    onChange: (...args: any[]) => any;
    tooltipPrefixCls: string;
    marks: {
        [key: string]: any;
    };
    tooltipPlacement: "left" | "right" | "bottom" | "top" | "bottomRight" | "bottomLeft" | "topLeft" | "topRight" | "leftTop" | "leftBottom" | "rightTop" | "rightBottom";
    getTooltipPopupContainer: (...args: any[]) => any;
    onAfterChange: (...args: any[]) => any;
}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("@vue/runtime-core").Plugin;
export default _default;
