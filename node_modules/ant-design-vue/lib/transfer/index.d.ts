export declare type TransferDirection = 'left' | 'right';
export declare const TransferItem: {
    key: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    title: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    description: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    disabled: import("vue-types").VueTypeValidableDef<boolean>;
};
export declare const TransferProps: {
    prefixCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    dataSource: import("vue-types").VueTypeDef<{
        key: (string | ((props: Record<string, unknown>) => string)) & string;
        title: (string | ((props: Record<string, unknown>) => string)) & string;
        description: (string | ((props: Record<string, unknown>) => string)) & string;
        disabled: (boolean | ((props: Record<string, unknown>) => boolean)) & boolean;
    }[]>;
    disabled: import("vue-types").VueTypeValidableDef<boolean>;
    targetKeys: import("vue-types").VueTypeDef<string[]>;
    selectedKeys: import("vue-types").VueTypeDef<string[]>;
    render: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    listStyle: import("vue-types").VueTypeDef<any>;
    operationStyle: import("vue-types").VueTypeValidableDef<{
        [key: string]: any;
    }> & {
        default: () => {
            [key: string]: any;
        };
    };
    titles: import("vue-types").VueTypeDef<string[]>;
    operations: import("vue-types").VueTypeDef<string[]>;
    showSearch: import("vue-types").VueTypeValidableDef<boolean>;
    filterOption: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    searchPlaceholder: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    notFoundContent: import("vue-types").VueTypeValidableDef<any>;
    locale: import("vue-types").VueTypeValidableDef<{
        [key: string]: any;
    }> & {
        default: () => {
            [key: string]: any;
        };
    };
    rowKey: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    lazy: import("vue-types").VueTypeDef<boolean | {
        [key: string]: any;
    }>;
    showSelectAll: import("vue-types").VueTypeValidableDef<boolean>;
    children: import("vue-types").VueTypeValidableDef<any>;
    onChange: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    onSelectChange: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    onSearchChange: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    onSearch: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    onScroll: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
};
export interface TransferLocale {
    titles: string[];
    notFoundContent: string;
    searchPlaceholder: string;
    itemUnit: string;
    itemsUnit: string;
}
declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {
            leftFilter: string;
            rightFilter: string;
            sourceSelectedKeys: string[];
            targetSelectedKeys: string[];
        };
        $props: Partial<{
            locale: {
                [key: string]: any;
            };
            prefixCls: string;
            onChange: (...args: any[]) => any;
            onScroll: (...args: any[]) => any;
            filterOption: (...args: any[]) => any;
            onSearch: (...args: any[]) => any;
            rowKey: (...args: any[]) => any;
            searchPlaceholder: string;
            render: (...args: any[]) => any;
            operationStyle: {
                [key: string]: any;
            };
            onSelectChange: (...args: any[]) => any;
            onSearchChange: (...args: any[]) => any;
        }> & Omit<Readonly<{
            prefixCls?: unknown;
            dataSource?: unknown;
            disabled?: unknown;
            targetKeys?: unknown;
            selectedKeys?: unknown;
            render?: unknown;
            listStyle?: unknown;
            operationStyle?: unknown;
            titles?: unknown;
            operations?: unknown;
            showSearch?: unknown;
            filterOption?: unknown;
            searchPlaceholder?: unknown;
            notFoundContent?: unknown;
            locale?: unknown;
            rowKey?: unknown;
            lazy?: unknown;
            showSelectAll?: unknown;
            children?: unknown;
            onChange?: unknown;
            onSelectChange?: unknown;
            onSearchChange?: unknown;
            onSearch?: unknown;
            onScroll?: unknown;
        } & {
            locale: {
                [key: string]: any;
            };
            prefixCls: string;
            searchPlaceholder: string;
            operationStyle: {
                [key: string]: any;
            };
        } & {
            children?: any;
            onChange?: (...args: any[]) => any;
            onScroll?: (...args: any[]) => any;
            disabled?: boolean;
            notFoundContent?: any;
            filterOption?: (...args: any[]) => any;
            showSearch?: boolean;
            onSearch?: (...args: any[]) => any;
            dataSource?: {
                key: (string | ((props: Record<string, unknown>) => string)) & string;
                title: (string | ((props: Record<string, unknown>) => string)) & string;
                description: (string | ((props: Record<string, unknown>) => string)) & string;
                disabled: (boolean | ((props: Record<string, unknown>) => boolean)) & boolean;
            }[];
            rowKey?: (...args: any[]) => any;
            selectedKeys?: string[];
            lazy?: boolean | {
                [key: string]: any;
            };
            listStyle?: any;
            showSelectAll?: boolean;
            targetKeys?: string[];
            render?: (...args: any[]) => any;
            titles?: string[];
            operations?: string[];
            onSelectChange?: (...args: any[]) => any;
            onSearchChange?: (...args: any[]) => any;
        }> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "locale" | "prefixCls" | "onChange" | "onScroll" | "filterOption" | "onSearch" | "rowKey" | "searchPlaceholder" | "render" | "operationStyle" | "onSelectChange" | "onSearchChange">;
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
            dataSource?: unknown;
            disabled?: unknown;
            targetKeys?: unknown;
            selectedKeys?: unknown;
            render?: unknown;
            listStyle?: unknown;
            operationStyle?: unknown;
            titles?: unknown;
            operations?: unknown;
            showSearch?: unknown;
            filterOption?: unknown;
            searchPlaceholder?: unknown;
            notFoundContent?: unknown;
            locale?: unknown;
            rowKey?: unknown;
            lazy?: unknown;
            showSelectAll?: unknown;
            children?: unknown;
            onChange?: unknown;
            onSelectChange?: unknown;
            onSearchChange?: unknown;
            onSearch?: unknown;
            onScroll?: unknown;
        } & {
            locale: {
                [key: string]: any;
            };
            prefixCls: string;
            searchPlaceholder: string;
            operationStyle: {
                [key: string]: any;
            };
        } & {
            children?: any;
            onChange?: (...args: any[]) => any;
            onScroll?: (...args: any[]) => any;
            disabled?: boolean;
            notFoundContent?: any;
            filterOption?: (...args: any[]) => any;
            showSearch?: boolean;
            onSearch?: (...args: any[]) => any;
            dataSource?: {
                key: (string | ((props: Record<string, unknown>) => string)) & string;
                title: (string | ((props: Record<string, unknown>) => string)) & string;
                description: (string | ((props: Record<string, unknown>) => string)) & string;
                disabled: (boolean | ((props: Record<string, unknown>) => boolean)) & boolean;
            }[];
            rowKey?: (...args: any[]) => any;
            selectedKeys?: string[];
            lazy?: boolean | {
                [key: string]: any;
            };
            listStyle?: any;
            showSelectAll?: boolean;
            targetKeys?: string[];
            render?: (...args: any[]) => any;
            titles?: string[];
            operations?: string[];
            onSelectChange?: (...args: any[]) => any;
            onSearchChange?: (...args: any[]) => any;
        }>, {
            separatedDataSource: any;
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
            leftFilter: string;
            rightFilter: string;
            sourceSelectedKeys: string[];
            targetSelectedKeys: string[];
        }, {}, {
            getSelectedKeysName(direction: any): "sourceSelectedKeys" | "targetSelectedKeys";
            getTitles(transferLocale: TransferLocale): any;
            getLocale(transferLocale: TransferLocale, renderEmpty: typeof import("../config-provider/renderEmpty").default): any;
            updateState(): void;
            moveTo(direction: TransferDirection): void;
            moveToLeft(): void;
            moveToRight(): void;
            onItemSelectAll(direction: TransferDirection, selectedKeys: string[], checkAll: boolean): void;
            handleSelectAll(direction: any, filteredDataSource: any, checkAll: any): void;
            handleLeftSelectAll(filteredDataSource: any, checkAll: any): any;
            handleRightSelectAll(filteredDataSource: any, checkAll: any): any;
            onLeftItemSelectAll(selectedKeys: any, checkAll: any): any;
            onRightItemSelectAll(selectedKeys: any, checkAll: any): any;
            handleFilter(direction: any, e: any): void;
            handleLeftFilter(e: any): void;
            handleRightFilter(e: any): void;
            handleClear(direction: any): void;
            handleLeftClear(): void;
            handleRightClear(): void;
            onItemSelect(direction: any, selectedKey: any, checked: any): void;
            onLeftItemSelect(selectedKey: any, checked: any): any;
            onRightItemSelect(selectedKey: any, checked: any): any;
            handleScroll(direction: any, e: any): void;
            handleLeftScroll(e: any): void;
            handleRightScroll(e: any): void;
            handleSelectChange(direction: TransferDirection, holder: string[]): void;
            handleListStyle(listStyle: any, direction: any): any;
            separateDataSource(): {
                leftDataSource: any[];
                rightDataSource: any[];
            };
            renderTransfer(transferLocale: TransferLocale): JSX.Element;
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
            onScroll: (...args: any[]) => any;
            filterOption: (...args: any[]) => any;
            onSearch: (...args: any[]) => any;
            rowKey: (...args: any[]) => any;
            searchPlaceholder: string;
            render: (...args: any[]) => any;
            operationStyle: {
                [key: string]: any;
            };
            onSelectChange: (...args: any[]) => any;
            onSearchChange: (...args: any[]) => any;
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
        dataSource?: unknown;
        disabled?: unknown;
        targetKeys?: unknown;
        selectedKeys?: unknown;
        render?: unknown;
        listStyle?: unknown;
        operationStyle?: unknown;
        titles?: unknown;
        operations?: unknown;
        showSearch?: unknown;
        filterOption?: unknown;
        searchPlaceholder?: unknown;
        notFoundContent?: unknown;
        locale?: unknown;
        rowKey?: unknown;
        lazy?: unknown;
        showSelectAll?: unknown;
        children?: unknown;
        onChange?: unknown;
        onSelectChange?: unknown;
        onSearchChange?: unknown;
        onSearch?: unknown;
        onScroll?: unknown;
    } & {
        locale: {
            [key: string]: any;
        };
        prefixCls: string;
        searchPlaceholder: string;
        operationStyle: {
            [key: string]: any;
        };
    } & {
        children?: any;
        onChange?: (...args: any[]) => any;
        onScroll?: (...args: any[]) => any;
        disabled?: boolean;
        notFoundContent?: any;
        filterOption?: (...args: any[]) => any;
        showSearch?: boolean;
        onSearch?: (...args: any[]) => any;
        dataSource?: {
            key: (string | ((props: Record<string, unknown>) => string)) & string;
            title: (string | ((props: Record<string, unknown>) => string)) & string;
            description: (string | ((props: Record<string, unknown>) => string)) & string;
            disabled: (boolean | ((props: Record<string, unknown>) => boolean)) & boolean;
        }[];
        rowKey?: (...args: any[]) => any;
        selectedKeys?: string[];
        lazy?: boolean | {
            [key: string]: any;
        };
        listStyle?: any;
        showSelectAll?: boolean;
        targetKeys?: string[];
        render?: (...args: any[]) => any;
        titles?: string[];
        operations?: string[];
        onSelectChange?: (...args: any[]) => any;
        onSearchChange?: (...args: any[]) => any;
    }> & import("vue").ShallowUnwrapRef<{
        separatedDataSource: any;
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
        leftFilter: string;
        rightFilter: string;
        sourceSelectedKeys: string[];
        targetSelectedKeys: string[];
    } & {
        [x: string]: never;
    } & {
        setState(state: {}, callback: any): void;
        __emit(...args: any[]): void;
    } & {
        getSelectedKeysName(direction: any): "sourceSelectedKeys" | "targetSelectedKeys";
        getTitles(transferLocale: TransferLocale): any;
        getLocale(transferLocale: TransferLocale, renderEmpty: typeof import("../config-provider/renderEmpty").default): any;
        updateState(): void;
        moveTo(direction: TransferDirection): void;
        moveToLeft(): void;
        moveToRight(): void;
        onItemSelectAll(direction: TransferDirection, selectedKeys: string[], checkAll: boolean): void;
        handleSelectAll(direction: any, filteredDataSource: any, checkAll: any): void;
        handleLeftSelectAll(filteredDataSource: any, checkAll: any): any;
        handleRightSelectAll(filteredDataSource: any, checkAll: any): any;
        onLeftItemSelectAll(selectedKeys: any, checkAll: any): any;
        onRightItemSelectAll(selectedKeys: any, checkAll: any): any;
        handleFilter(direction: any, e: any): void;
        handleLeftFilter(e: any): void;
        handleRightFilter(e: any): void;
        handleClear(direction: any): void;
        handleLeftClear(): void;
        handleRightClear(): void;
        onItemSelect(direction: any, selectedKey: any, checked: any): void;
        onLeftItemSelect(selectedKey: any, checked: any): any;
        onRightItemSelect(selectedKey: any, checked: any): any;
        handleScroll(direction: any, e: any): void;
        handleLeftScroll(e: any): void;
        handleRightScroll(e: any): void;
        handleSelectChange(direction: TransferDirection, holder: string[]): void;
        handleListStyle(listStyle: any, direction: any): any;
        separateDataSource(): {
            leftDataSource: any[];
            rightDataSource: any[];
        };
        renderTransfer(transferLocale: TransferLocale): JSX.Element;
    } & import("vue").ComponentCustomProperties;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<{
    prefixCls?: unknown;
    dataSource?: unknown;
    disabled?: unknown;
    targetKeys?: unknown;
    selectedKeys?: unknown;
    render?: unknown;
    listStyle?: unknown;
    operationStyle?: unknown;
    titles?: unknown;
    operations?: unknown;
    showSearch?: unknown;
    filterOption?: unknown;
    searchPlaceholder?: unknown;
    notFoundContent?: unknown;
    locale?: unknown;
    rowKey?: unknown;
    lazy?: unknown;
    showSelectAll?: unknown;
    children?: unknown;
    onChange?: unknown;
    onSelectChange?: unknown;
    onSearchChange?: unknown;
    onSearch?: unknown;
    onScroll?: unknown;
} & {
    locale: {
        [key: string]: any;
    };
    prefixCls: string;
    searchPlaceholder: string;
    operationStyle: {
        [key: string]: any;
    };
} & {
    children?: any;
    onChange?: (...args: any[]) => any;
    onScroll?: (...args: any[]) => any;
    disabled?: boolean;
    notFoundContent?: any;
    filterOption?: (...args: any[]) => any;
    showSearch?: boolean;
    onSearch?: (...args: any[]) => any;
    dataSource?: {
        key: (string | ((props: Record<string, unknown>) => string)) & string;
        title: (string | ((props: Record<string, unknown>) => string)) & string;
        description: (string | ((props: Record<string, unknown>) => string)) & string;
        disabled: (boolean | ((props: Record<string, unknown>) => boolean)) & boolean;
    }[];
    rowKey?: (...args: any[]) => any;
    selectedKeys?: string[];
    lazy?: boolean | {
        [key: string]: any;
    };
    listStyle?: any;
    showSelectAll?: boolean;
    targetKeys?: string[];
    render?: (...args: any[]) => any;
    titles?: string[];
    operations?: string[];
    onSelectChange?: (...args: any[]) => any;
    onSearchChange?: (...args: any[]) => any;
}>, {
    separatedDataSource: any;
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
    leftFilter: string;
    rightFilter: string;
    sourceSelectedKeys: string[];
    targetSelectedKeys: string[];
}, {}, {
    getSelectedKeysName(direction: any): "sourceSelectedKeys" | "targetSelectedKeys";
    getTitles(transferLocale: TransferLocale): any;
    getLocale(transferLocale: TransferLocale, renderEmpty: typeof import("../config-provider/renderEmpty").default): any;
    updateState(): void;
    moveTo(direction: TransferDirection): void;
    moveToLeft(): void;
    moveToRight(): void;
    onItemSelectAll(direction: TransferDirection, selectedKeys: string[], checkAll: boolean): void;
    handleSelectAll(direction: any, filteredDataSource: any, checkAll: any): void;
    handleLeftSelectAll(filteredDataSource: any, checkAll: any): any;
    handleRightSelectAll(filteredDataSource: any, checkAll: any): any;
    onLeftItemSelectAll(selectedKeys: any, checkAll: any): any;
    onRightItemSelectAll(selectedKeys: any, checkAll: any): any;
    handleFilter(direction: any, e: any): void;
    handleLeftFilter(e: any): void;
    handleRightFilter(e: any): void;
    handleClear(direction: any): void;
    handleLeftClear(): void;
    handleRightClear(): void;
    onItemSelect(direction: any, selectedKey: any, checked: any): void;
    onLeftItemSelect(selectedKey: any, checked: any): any;
    onRightItemSelect(selectedKey: any, checked: any): any;
    handleScroll(direction: any, e: any): void;
    handleLeftScroll(e: any): void;
    handleRightScroll(e: any): void;
    handleSelectChange(direction: TransferDirection, holder: string[]): void;
    handleListStyle(listStyle: any, direction: any): any;
    separateDataSource(): {
        leftDataSource: any[];
        rightDataSource: any[];
    };
    renderTransfer(transferLocale: TransferLocale): JSX.Element;
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
    onScroll: (...args: any[]) => any;
    filterOption: (...args: any[]) => any;
    onSearch: (...args: any[]) => any;
    rowKey: (...args: any[]) => any;
    searchPlaceholder: string;
    render: (...args: any[]) => any;
    operationStyle: {
        [key: string]: any;
    };
    onSelectChange: (...args: any[]) => any;
    onSearchChange: (...args: any[]) => any;
}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("@vue/runtime-core").Plugin;
export default _default;
