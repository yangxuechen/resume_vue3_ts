export { paginationProps, PaginationProps, PaginationConfig, paginationConfig } from './Pagination';
declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            locale: {
                [key: string]: any;
            };
            prefixCls: string;
            onChange: (...args: any[]) => any;
            role: string;
            size: string;
            current: number;
            total: number;
            defaultCurrent: number;
            defaultPageSize: number;
            pageSize: number;
            buildOptionText: (...args: any[]) => any;
            showSizeChange: (...args: any[]) => any;
            selectPrefixCls: string;
            itemRender: (...args: any[]) => any;
            onShowSizeChange: (...args: any[]) => any;
            "onUpdate:current": (...args: any[]) => any;
            "onUpdate:pageSize": (...args: any[]) => any;
        }> & Omit<Readonly<{
            total?: unknown;
            defaultCurrent?: unknown;
            disabled?: unknown;
            current?: unknown;
            defaultPageSize?: unknown;
            pageSize?: unknown;
            hideOnSinglePage?: unknown;
            showSizeChanger?: unknown;
            pageSizeOptions?: unknown;
            buildOptionText?: unknown;
            showSizeChange?: unknown;
            showQuickJumper?: unknown;
            showTotal?: unknown;
            size?: unknown;
            simple?: unknown;
            locale?: unknown;
            prefixCls?: unknown;
            selectPrefixCls?: unknown;
            itemRender?: unknown;
            role?: unknown;
            showLessItems?: unknown;
            onChange?: unknown;
            onShowSizeChange?: unknown;
            'onUpdate:current'?: unknown;
            'onUpdate:pageSize'?: unknown;
        } & {
            locale: {
                [key: string]: any;
            };
            prefixCls: string;
            role: string;
            size: string;
            current: number;
            total: number;
            defaultCurrent: number;
            defaultPageSize: number;
            pageSize: number;
            selectPrefixCls: string;
        } & {
            onChange?: (...args: any[]) => any;
            disabled?: boolean;
            hideOnSinglePage?: boolean;
            showSizeChanger?: boolean;
            pageSizeOptions?: (string | number)[];
            buildOptionText?: (...args: any[]) => any;
            showSizeChange?: (...args: any[]) => any;
            showQuickJumper?: boolean | {
                [key: string]: any;
            };
            showTotal?: any;
            simple?: boolean;
            itemRender?: (...args: any[]) => any;
            showLessItems?: boolean;
            onShowSizeChange?: (...args: any[]) => any;
            "onUpdate:current"?: (...args: any[]) => any;
            "onUpdate:pageSize"?: (...args: any[]) => any;
        }> & {
            onChange?: (...args: any[]) => any;
            onShowSizeChange?: (...args: any[]) => any;
            "onUpdate:current"?: (...args: any[]) => any;
            "onUpdate:pageSize"?: (...args: any[]) => any;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "locale" | "prefixCls" | "onChange" | "role" | "size" | "current" | "total" | "defaultCurrent" | "defaultPageSize" | "pageSize" | "buildOptionText" | "showSizeChange" | "selectPrefixCls" | "itemRender" | "onShowSizeChange" | "onUpdate:current" | "onUpdate:pageSize">;
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
        $emit: (event: "change" | "showSizeChange" | "update:current" | "update:pageSize", ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<{
            total?: unknown;
            defaultCurrent?: unknown;
            disabled?: unknown;
            current?: unknown;
            defaultPageSize?: unknown;
            pageSize?: unknown;
            hideOnSinglePage?: unknown;
            showSizeChanger?: unknown;
            pageSizeOptions?: unknown;
            buildOptionText?: unknown;
            showSizeChange?: unknown;
            showQuickJumper?: unknown;
            showTotal?: unknown;
            size?: unknown;
            simple?: unknown;
            locale?: unknown;
            prefixCls?: unknown;
            selectPrefixCls?: unknown;
            itemRender?: unknown;
            role?: unknown;
            showLessItems?: unknown;
            onChange?: unknown;
            onShowSizeChange?: unknown;
            'onUpdate:current'?: unknown;
            'onUpdate:pageSize'?: unknown;
        } & {
            locale: {
                [key: string]: any;
            };
            prefixCls: string;
            role: string;
            size: string;
            current: number;
            total: number;
            defaultCurrent: number;
            defaultPageSize: number;
            pageSize: number;
            selectPrefixCls: string;
        } & {
            onChange?: (...args: any[]) => any;
            disabled?: boolean;
            hideOnSinglePage?: boolean;
            showSizeChanger?: boolean;
            pageSizeOptions?: (string | number)[];
            buildOptionText?: (...args: any[]) => any;
            showSizeChange?: (...args: any[]) => any;
            showQuickJumper?: boolean | {
                [key: string]: any;
            };
            showTotal?: any;
            simple?: boolean;
            itemRender?: (...args: any[]) => any;
            showLessItems?: boolean;
            onShowSizeChange?: (...args: any[]) => any;
            "onUpdate:current"?: (...args: any[]) => any;
            "onUpdate:pageSize"?: (...args: any[]) => any;
        }> & {
            onChange?: (...args: any[]) => any;
            onShowSizeChange?: (...args: any[]) => any;
            "onUpdate:current"?: (...args: any[]) => any;
            "onUpdate:pageSize"?: (...args: any[]) => any;
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
        }, unknown, {}, {
            getIconsProps(prefixCls: string): {
                prevIcon: JSX.Element;
                nextIcon: JSX.Element;
                jumpPrevIcon: JSX.Element;
                jumpNextIcon: JSX.Element;
            };
            renderPagination(contextLocale: object): JSX.Element;
        }, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "showSizeChange" | "update:current" | "update:pageSize")[], string, {
            locale: {
                [key: string]: any;
            };
            prefixCls: string;
            onChange: (...args: any[]) => any;
            role: string;
            size: string;
            current: number;
            total: number;
            defaultCurrent: number;
            defaultPageSize: number;
            pageSize: number;
            buildOptionText: (...args: any[]) => any;
            showSizeChange: (...args: any[]) => any;
            selectPrefixCls: string;
            itemRender: (...args: any[]) => any;
            onShowSizeChange: (...args: any[]) => any;
            "onUpdate:current": (...args: any[]) => any;
            "onUpdate:pageSize": (...args: any[]) => any;
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
        total?: unknown;
        defaultCurrent?: unknown;
        disabled?: unknown;
        current?: unknown;
        defaultPageSize?: unknown;
        pageSize?: unknown;
        hideOnSinglePage?: unknown;
        showSizeChanger?: unknown;
        pageSizeOptions?: unknown;
        buildOptionText?: unknown;
        showSizeChange?: unknown;
        showQuickJumper?: unknown;
        showTotal?: unknown;
        size?: unknown;
        simple?: unknown;
        locale?: unknown;
        prefixCls?: unknown;
        selectPrefixCls?: unknown;
        itemRender?: unknown;
        role?: unknown;
        showLessItems?: unknown;
        onChange?: unknown;
        onShowSizeChange?: unknown;
        'onUpdate:current'?: unknown;
        'onUpdate:pageSize'?: unknown;
    } & {
        locale: {
            [key: string]: any;
        };
        prefixCls: string;
        role: string;
        size: string;
        current: number;
        total: number;
        defaultCurrent: number;
        defaultPageSize: number;
        pageSize: number;
        selectPrefixCls: string;
    } & {
        onChange?: (...args: any[]) => any;
        disabled?: boolean;
        hideOnSinglePage?: boolean;
        showSizeChanger?: boolean;
        pageSizeOptions?: (string | number)[];
        buildOptionText?: (...args: any[]) => any;
        showSizeChange?: (...args: any[]) => any;
        showQuickJumper?: boolean | {
            [key: string]: any;
        };
        showTotal?: any;
        simple?: boolean;
        itemRender?: (...args: any[]) => any;
        showLessItems?: boolean;
        onShowSizeChange?: (...args: any[]) => any;
        "onUpdate:current"?: (...args: any[]) => any;
        "onUpdate:pageSize"?: (...args: any[]) => any;
    }> & {
        onChange?: (...args: any[]) => any;
        onShowSizeChange?: (...args: any[]) => any;
        "onUpdate:current"?: (...args: any[]) => any;
        "onUpdate:pageSize"?: (...args: any[]) => any;
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
    }> & {} & {} & {
        getIconsProps(prefixCls: string): {
            prevIcon: JSX.Element;
            nextIcon: JSX.Element;
            jumpPrevIcon: JSX.Element;
            jumpNextIcon: JSX.Element;
        };
        renderPagination(contextLocale: object): JSX.Element;
    } & import("vue").ComponentCustomProperties;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<{
    total?: unknown;
    defaultCurrent?: unknown;
    disabled?: unknown;
    current?: unknown;
    defaultPageSize?: unknown;
    pageSize?: unknown;
    hideOnSinglePage?: unknown;
    showSizeChanger?: unknown;
    pageSizeOptions?: unknown;
    buildOptionText?: unknown;
    showSizeChange?: unknown;
    showQuickJumper?: unknown;
    showTotal?: unknown;
    size?: unknown;
    simple?: unknown;
    locale?: unknown;
    prefixCls?: unknown;
    selectPrefixCls?: unknown;
    itemRender?: unknown;
    role?: unknown;
    showLessItems?: unknown;
    onChange?: unknown;
    onShowSizeChange?: unknown;
    'onUpdate:current'?: unknown;
    'onUpdate:pageSize'?: unknown;
} & {
    locale: {
        [key: string]: any;
    };
    prefixCls: string;
    role: string;
    size: string;
    current: number;
    total: number;
    defaultCurrent: number;
    defaultPageSize: number;
    pageSize: number;
    selectPrefixCls: string;
} & {
    onChange?: (...args: any[]) => any;
    disabled?: boolean;
    hideOnSinglePage?: boolean;
    showSizeChanger?: boolean;
    pageSizeOptions?: (string | number)[];
    buildOptionText?: (...args: any[]) => any;
    showSizeChange?: (...args: any[]) => any;
    showQuickJumper?: boolean | {
        [key: string]: any;
    };
    showTotal?: any;
    simple?: boolean;
    itemRender?: (...args: any[]) => any;
    showLessItems?: boolean;
    onShowSizeChange?: (...args: any[]) => any;
    "onUpdate:current"?: (...args: any[]) => any;
    "onUpdate:pageSize"?: (...args: any[]) => any;
}> & {
    onChange?: (...args: any[]) => any;
    onShowSizeChange?: (...args: any[]) => any;
    "onUpdate:current"?: (...args: any[]) => any;
    "onUpdate:pageSize"?: (...args: any[]) => any;
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
}, unknown, {}, {
    getIconsProps(prefixCls: string): {
        prevIcon: JSX.Element;
        nextIcon: JSX.Element;
        jumpPrevIcon: JSX.Element;
        jumpNextIcon: JSX.Element;
    };
    renderPagination(contextLocale: object): JSX.Element;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "showSizeChange" | "update:current" | "update:pageSize")[], "change" | "showSizeChange" | "update:current" | "update:pageSize", {
    locale: {
        [key: string]: any;
    };
    prefixCls: string;
    onChange: (...args: any[]) => any;
    role: string;
    size: string;
    current: number;
    total: number;
    defaultCurrent: number;
    defaultPageSize: number;
    pageSize: number;
    buildOptionText: (...args: any[]) => any;
    showSizeChange: (...args: any[]) => any;
    selectPrefixCls: string;
    itemRender: (...args: any[]) => any;
    onShowSizeChange: (...args: any[]) => any;
    "onUpdate:current": (...args: any[]) => any;
    "onUpdate:pageSize": (...args: any[]) => any;
}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("@vue/runtime-core").Plugin;
export default _default;
