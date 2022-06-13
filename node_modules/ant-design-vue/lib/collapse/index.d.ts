import type { Plugin } from 'vue';
import CollapsePanel from './CollapsePanel';
export type { CollapseProps } from './Collapse';
export type { CollapsePanelProps } from './CollapsePanel';
export { CollapsePanel };
declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            prefixCls: string;
            onChange: (...args: any[]) => any;
            bordered: boolean;
            expandIcon: (...args: any[]) => any;
            "onUpdate:activeKey": (...args: any[]) => any;
            openAnimation: {
                [key: string]: any;
            };
            expandIconPosition: "left" | "right";
        }> & Omit<Readonly<{
            prefixCls?: unknown;
            activeKey?: unknown;
            defaultActiveKey?: unknown;
            accordion?: unknown;
            destroyInactivePanel?: unknown;
            bordered?: unknown;
            expandIcon?: unknown;
            openAnimation?: unknown;
            expandIconPosition?: unknown;
            'onUpdate:activeKey'?: unknown;
            onChange?: unknown;
        } & {
            prefixCls: string;
            bordered: boolean;
            openAnimation: {
                [key: string]: any;
            };
            expandIconPosition: "left" | "right";
        } & {
            onChange?: (...args: any[]) => any;
            expandIcon?: (...args: any[]) => any;
            activeKey?: string | number | (string | number)[];
            "onUpdate:activeKey"?: (...args: any[]) => any;
            defaultActiveKey?: string | number | (string | number)[];
            accordion?: boolean;
            destroyInactivePanel?: boolean;
        }> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "prefixCls" | "onChange" | "bordered" | "expandIcon" | "onUpdate:activeKey" | "openAnimation" | "expandIconPosition">;
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
            activeKey?: unknown;
            defaultActiveKey?: unknown;
            accordion?: unknown;
            destroyInactivePanel?: unknown;
            bordered?: unknown;
            expandIcon?: unknown;
            openAnimation?: unknown;
            expandIconPosition?: unknown;
            'onUpdate:activeKey'?: unknown;
            onChange?: unknown;
        } & {
            prefixCls: string;
            bordered: boolean;
            openAnimation: {
                [key: string]: any;
            };
            expandIconPosition: "left" | "right";
        } & {
            onChange?: (...args: any[]) => any;
            expandIcon?: (...args: any[]) => any;
            activeKey?: string | number | (string | number)[];
            "onUpdate:activeKey"?: (...args: any[]) => any;
            defaultActiveKey?: string | number | (string | number)[];
            accordion?: boolean;
            destroyInactivePanel?: boolean;
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
        }, unknown, {}, {
            renderExpandIcon(panelProps: import("./Collapse").PanelProps, prefixCls: string): any;
            handleChange(activeKey: string | number | (string | number)[]): void;
        }, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
            prefixCls: string;
            onChange: (...args: any[]) => any;
            bordered: boolean;
            expandIcon: (...args: any[]) => any;
            "onUpdate:activeKey": (...args: any[]) => any;
            openAnimation: {
                [key: string]: any;
            };
            expandIconPosition: "left" | "right";
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
        activeKey?: unknown;
        defaultActiveKey?: unknown;
        accordion?: unknown;
        destroyInactivePanel?: unknown;
        bordered?: unknown;
        expandIcon?: unknown;
        openAnimation?: unknown;
        expandIconPosition?: unknown;
        'onUpdate:activeKey'?: unknown;
        onChange?: unknown;
    } & {
        prefixCls: string;
        bordered: boolean;
        openAnimation: {
            [key: string]: any;
        };
        expandIconPosition: "left" | "right";
    } & {
        onChange?: (...args: any[]) => any;
        expandIcon?: (...args: any[]) => any;
        activeKey?: string | number | (string | number)[];
        "onUpdate:activeKey"?: (...args: any[]) => any;
        defaultActiveKey?: string | number | (string | number)[];
        accordion?: boolean;
        destroyInactivePanel?: boolean;
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
    }> & {} & {} & {
        renderExpandIcon(panelProps: import("./Collapse").PanelProps, prefixCls: string): any;
        handleChange(activeKey: string | number | (string | number)[]): void;
    } & import("vue").ComponentCustomProperties;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<{
    prefixCls?: unknown;
    activeKey?: unknown;
    defaultActiveKey?: unknown;
    accordion?: unknown;
    destroyInactivePanel?: unknown;
    bordered?: unknown;
    expandIcon?: unknown;
    openAnimation?: unknown;
    expandIconPosition?: unknown;
    'onUpdate:activeKey'?: unknown;
    onChange?: unknown;
} & {
    prefixCls: string;
    bordered: boolean;
    openAnimation: {
        [key: string]: any;
    };
    expandIconPosition: "left" | "right";
} & {
    onChange?: (...args: any[]) => any;
    expandIcon?: (...args: any[]) => any;
    activeKey?: string | number | (string | number)[];
    "onUpdate:activeKey"?: (...args: any[]) => any;
    defaultActiveKey?: string | number | (string | number)[];
    accordion?: boolean;
    destroyInactivePanel?: boolean;
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
}, unknown, {}, {
    renderExpandIcon(panelProps: import("./Collapse").PanelProps, prefixCls: string): any;
    handleChange(activeKey: string | number | (string | number)[]): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
    prefixCls: string;
    onChange: (...args: any[]) => any;
    bordered: boolean;
    expandIcon: (...args: any[]) => any;
    "onUpdate:activeKey": (...args: any[]) => any;
    openAnimation: {
        [key: string]: any;
    };
    expandIconPosition: "left" | "right";
}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Plugin & {
    readonly Panel: typeof CollapsePanel;
};
export default _default;
