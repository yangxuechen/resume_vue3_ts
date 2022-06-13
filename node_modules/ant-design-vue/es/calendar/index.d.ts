import type { PropType } from 'vue';
import moment from 'moment';
declare const CalendarModeTypes: ["month", "year"];
export declare type CalendarMode = typeof CalendarModeTypes[number];
export declare const CalendarProps: {
    monthCellRender: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    dateCellRender: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    monthFullCellRender: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    dateFullCellRender: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    prefixCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    value: {
        validator(value: any): boolean;
    };
    defaultValue: {
        validator(value: any): boolean;
    };
    mode: import("vue-types").VueTypeDef<"year" | "month">;
    fullscreen: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
    locale: import("vue-types").VueTypeValidableDef<{
        [key: string]: any;
    }> & {
        default: () => {
            [key: string]: any;
        };
    } & {
        default: () => {
            [key: string]: any;
        };
    };
    disabledDate: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    validRange: {
        type: PropType<moment.Moment[]>;
    };
    headerRender: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    valueFormat: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    onPanelChange: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    onSelect: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    onChange: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    'onUpdate:value': import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
};
export { HeaderProps } from './Header';
declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {
            sValue: any;
            sMode: "year" | "month";
        };
        $props: Partial<{
            locale: {
                [key: string]: any;
            };
            prefixCls: string;
            onChange: (...args: any[]) => any;
            onSelect: (...args: any[]) => any;
            "onUpdate:value": (...args: any[]) => any;
            fullscreen: boolean;
            headerRender: (...args: any[]) => any;
            monthCellRender: (...args: any[]) => any;
            dateCellRender: (...args: any[]) => any;
            monthFullCellRender: (...args: any[]) => any;
            dateFullCellRender: (...args: any[]) => any;
            disabledDate: (...args: any[]) => any;
            valueFormat: string;
            onPanelChange: (...args: any[]) => any;
        }> & Omit<Readonly<{
            monthCellRender?: unknown;
            dateCellRender?: unknown;
            monthFullCellRender?: unknown;
            dateFullCellRender?: unknown;
            prefixCls?: unknown;
            value?: unknown;
            defaultValue?: unknown;
            mode?: unknown;
            fullscreen?: unknown;
            locale?: unknown;
            disabledDate?: unknown;
            validRange?: unknown;
            headerRender?: unknown;
            valueFormat?: unknown;
            onPanelChange?: unknown;
            onSelect?: unknown;
            onChange?: unknown;
            'onUpdate:value'?: unknown;
        } & {
            locale: {
                [key: string]: any;
            };
            prefixCls: string;
            fullscreen: boolean;
            valueFormat: string;
        } & {
            value?: unknown;
            onChange?: (...args: any[]) => any;
            onSelect?: (...args: any[]) => any;
            mode?: "year" | "month";
            defaultValue?: unknown;
            "onUpdate:value"?: (...args: any[]) => any;
            validRange?: moment.Moment[];
            headerRender?: (...args: any[]) => any;
            monthCellRender?: (...args: any[]) => any;
            dateCellRender?: (...args: any[]) => any;
            monthFullCellRender?: (...args: any[]) => any;
            dateFullCellRender?: (...args: any[]) => any;
            disabledDate?: (...args: any[]) => any;
            onPanelChange?: (...args: any[]) => any;
        }> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "locale" | "prefixCls" | "onChange" | "onSelect" | "onUpdate:value" | "fullscreen" | "headerRender" | "monthCellRender" | "dateCellRender" | "monthFullCellRender" | "dateFullCellRender" | "disabledDate" | "valueFormat" | "onPanelChange">;
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
            monthCellRender?: unknown;
            dateCellRender?: unknown;
            monthFullCellRender?: unknown;
            dateFullCellRender?: unknown;
            prefixCls?: unknown;
            value?: unknown;
            defaultValue?: unknown;
            mode?: unknown;
            fullscreen?: unknown;
            locale?: unknown;
            disabledDate?: unknown;
            validRange?: unknown;
            headerRender?: unknown;
            valueFormat?: unknown;
            onPanelChange?: unknown;
            onSelect?: unknown;
            onChange?: unknown;
            'onUpdate:value'?: unknown;
        } & {
            locale: {
                [key: string]: any;
            };
            prefixCls: string;
            fullscreen: boolean;
            valueFormat: string;
        } & {
            value?: unknown;
            onChange?: (...args: any[]) => any;
            onSelect?: (...args: any[]) => any;
            mode?: "year" | "month";
            defaultValue?: unknown;
            "onUpdate:value"?: (...args: any[]) => any;
            validRange?: moment.Moment[];
            headerRender?: (...args: any[]) => any;
            monthCellRender?: (...args: any[]) => any;
            dateCellRender?: (...args: any[]) => any;
            monthFullCellRender?: (...args: any[]) => any;
            dateFullCellRender?: (...args: any[]) => any;
            disabledDate?: (...args: any[]) => any;
            onPanelChange?: (...args: any[]) => any;
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
            sPrefixCls: any;
        }, {
            sValue: any;
            sMode: "year" | "month";
        }, {}, {
            onHeaderValueChange(value: moment.Moment): void;
            onHeaderTypeChange(mode: "year" | "month"): void;
            triggerPanelChange(value: moment.Moment, mode: "year" | "month"): void;
            triggerSelect(value: moment.Moment): void;
            setValue(value: moment.Moment, way: "select" | "changePanel"): void;
            getDateRange(validRange: [moment.Moment, moment.Moment], disabledDate?: (current: moment.Moment) => boolean): (current: moment.Moment) => boolean;
            getDefaultLocale(): any;
            monthCellRender2({ current: value }: {
                current: any;
            }): JSX.Element;
            dateCellRender2({ current: value }: {
                current: any;
            }): JSX.Element;
            renderCalendar(locale: any, localeCode: string): JSX.Element;
        }, {
            methods: {
                setState(state: {}, callback: any): void;
                __emit(...args: any[]): void;
            };
        }, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
            locale: {
                [key: string]: any;
            };
            prefixCls: string;
            onChange: (...args: any[]) => any;
            onSelect: (...args: any[]) => any;
            "onUpdate:value": (...args: any[]) => any;
            fullscreen: boolean;
            headerRender: (...args: any[]) => any;
            monthCellRender: (...args: any[]) => any;
            dateCellRender: (...args: any[]) => any;
            monthFullCellRender: (...args: any[]) => any;
            dateFullCellRender: (...args: any[]) => any;
            disabledDate: (...args: any[]) => any;
            valueFormat: string;
            onPanelChange: (...args: any[]) => any;
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
        monthCellRender?: unknown;
        dateCellRender?: unknown;
        monthFullCellRender?: unknown;
        dateFullCellRender?: unknown;
        prefixCls?: unknown;
        value?: unknown;
        defaultValue?: unknown;
        mode?: unknown;
        fullscreen?: unknown;
        locale?: unknown;
        disabledDate?: unknown;
        validRange?: unknown;
        headerRender?: unknown;
        valueFormat?: unknown;
        onPanelChange?: unknown;
        onSelect?: unknown;
        onChange?: unknown;
        'onUpdate:value'?: unknown;
    } & {
        locale: {
            [key: string]: any;
        };
        prefixCls: string;
        fullscreen: boolean;
        valueFormat: string;
    } & {
        value?: unknown;
        onChange?: (...args: any[]) => any;
        onSelect?: (...args: any[]) => any;
        mode?: "year" | "month";
        defaultValue?: unknown;
        "onUpdate:value"?: (...args: any[]) => any;
        validRange?: moment.Moment[];
        headerRender?: (...args: any[]) => any;
        monthCellRender?: (...args: any[]) => any;
        dateCellRender?: (...args: any[]) => any;
        monthFullCellRender?: (...args: any[]) => any;
        dateFullCellRender?: (...args: any[]) => any;
        disabledDate?: (...args: any[]) => any;
        onPanelChange?: (...args: any[]) => any;
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
        sPrefixCls: any;
    }> & {
        sValue: any;
        sMode: "year" | "month";
    } & {
        [x: string]: never;
    } & {
        setState(state: {}, callback: any): void;
        __emit(...args: any[]): void;
    } & {
        onHeaderValueChange(value: moment.Moment): void;
        onHeaderTypeChange(mode: "year" | "month"): void;
        triggerPanelChange(value: moment.Moment, mode: "year" | "month"): void;
        triggerSelect(value: moment.Moment): void;
        setValue(value: moment.Moment, way: "select" | "changePanel"): void;
        getDateRange(validRange: [moment.Moment, moment.Moment], disabledDate?: (current: moment.Moment) => boolean): (current: moment.Moment) => boolean;
        getDefaultLocale(): any;
        monthCellRender2({ current: value }: {
            current: any;
        }): JSX.Element;
        dateCellRender2({ current: value }: {
            current: any;
        }): JSX.Element;
        renderCalendar(locale: any, localeCode: string): JSX.Element;
    } & import("vue").ComponentCustomProperties;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<{
    monthCellRender?: unknown;
    dateCellRender?: unknown;
    monthFullCellRender?: unknown;
    dateFullCellRender?: unknown;
    prefixCls?: unknown;
    value?: unknown;
    defaultValue?: unknown;
    mode?: unknown;
    fullscreen?: unknown;
    locale?: unknown;
    disabledDate?: unknown;
    validRange?: unknown;
    headerRender?: unknown;
    valueFormat?: unknown;
    onPanelChange?: unknown;
    onSelect?: unknown;
    onChange?: unknown;
    'onUpdate:value'?: unknown;
} & {
    locale: {
        [key: string]: any;
    };
    prefixCls: string;
    fullscreen: boolean;
    valueFormat: string;
} & {
    value?: unknown;
    onChange?: (...args: any[]) => any;
    onSelect?: (...args: any[]) => any;
    mode?: "year" | "month";
    defaultValue?: unknown;
    "onUpdate:value"?: (...args: any[]) => any;
    validRange?: moment.Moment[];
    headerRender?: (...args: any[]) => any;
    monthCellRender?: (...args: any[]) => any;
    dateCellRender?: (...args: any[]) => any;
    monthFullCellRender?: (...args: any[]) => any;
    dateFullCellRender?: (...args: any[]) => any;
    disabledDate?: (...args: any[]) => any;
    onPanelChange?: (...args: any[]) => any;
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
    sPrefixCls: any;
}, {
    sValue: any;
    sMode: "year" | "month";
}, {}, {
    onHeaderValueChange(value: moment.Moment): void;
    onHeaderTypeChange(mode: "year" | "month"): void;
    triggerPanelChange(value: moment.Moment, mode: "year" | "month"): void;
    triggerSelect(value: moment.Moment): void;
    setValue(value: moment.Moment, way: "select" | "changePanel"): void;
    getDateRange(validRange: [moment.Moment, moment.Moment], disabledDate?: (current: moment.Moment) => boolean): (current: moment.Moment) => boolean;
    getDefaultLocale(): any;
    monthCellRender2({ current: value }: {
        current: any;
    }): JSX.Element;
    dateCellRender2({ current: value }: {
        current: any;
    }): JSX.Element;
    renderCalendar(locale: any, localeCode: string): JSX.Element;
}, {
    methods: {
        setState(state: {}, callback: any): void;
        __emit(...args: any[]): void;
    };
}, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
    locale: {
        [key: string]: any;
    };
    prefixCls: string;
    onChange: (...args: any[]) => any;
    onSelect: (...args: any[]) => any;
    "onUpdate:value": (...args: any[]) => any;
    fullscreen: boolean;
    headerRender: (...args: any[]) => any;
    monthCellRender: (...args: any[]) => any;
    dateCellRender: (...args: any[]) => any;
    monthFullCellRender: (...args: any[]) => any;
    dateFullCellRender: (...args: any[]) => any;
    disabledDate: (...args: any[]) => any;
    valueFormat: string;
    onPanelChange: (...args: any[]) => any;
}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("@vue/runtime-core").Plugin;
export default _default;
