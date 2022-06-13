import type { ColumnProps } from './interface';
export declare const defaultTableProps: {
    prefixCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    dropdownPrefixCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    rowSelection: import("vue-types").VueTypeDef<{
        [key: string]: any;
    } | {
        type: "checkbox" | "radio";
        selectedRowKeys: unknown[] | (() => unknown[]);
        getCheckboxProps: any;
        selections: boolean | import("vue-types/dist/types").DefaultFactory<unknown[]>;
        hideDefaultSelections: (boolean | ((props: Record<string, unknown>) => boolean)) & boolean;
        fixed: (boolean | ((props: Record<string, unknown>) => boolean)) & boolean;
        columnWidth: string | number;
        selectWay: "onSelect" | "onSelectMultiple" | "onSelectAll" | "onSelectInvert";
        columnTitle: any;
    }>;
    pagination: import("vue-types").VueTypeDef<boolean | Partial<{
        position?: unknown;
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
        position?: "both" | "bottom" | "top";
    }>>;
    size: import("vue-types").VueTypeDef<"default" | "small" | "middle" | "large">;
    dataSource: import("vue-types").VueTypeValidableDef<unknown[]> & {
        default: () => unknown[];
    };
    components: import("vue-types").VueTypeValidableDef<{
        [key: string]: any;
    }> & {
        default: () => {
            [key: string]: any;
        };
    };
    columns: {
        type: import("vue").PropType<ColumnProps>;
    };
    rowKey: import("vue-types").VueTypeDef<any>;
    rowClassName: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    expandedRowRender: import("vue-types").VueTypeValidableDef<any>;
    defaultExpandAllRows: import("vue-types").VueTypeValidableDef<boolean>;
    defaultExpandedRowKeys: import("vue-types").VueTypeValidableDef<unknown[]> & {
        default: () => unknown[];
    };
    expandedRowKeys: import("vue-types").VueTypeValidableDef<unknown[]> & {
        default: () => unknown[];
    };
    expandIconAsCell: import("vue-types").VueTypeValidableDef<boolean>;
    expandIconColumnIndex: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
    expandRowByClick: import("vue-types").VueTypeValidableDef<boolean>;
    loading: import("vue-types").VueTypeDef<boolean | {
        prefixCls: (string | ((props: Record<string, unknown>) => string)) & string;
        spinning: (boolean | ((props: Record<string, unknown>) => boolean)) & boolean;
        size: "default" | "small" | "large";
        wrapperClassName: (string | ((props: Record<string, unknown>) => string)) & string;
        tip: (string | ((props: Record<string, unknown>) => string)) & string;
        delay: (number | ((props: Record<string, unknown>) => number)) & number;
        indicator: any;
    }>;
    locale: import("vue-types").VueTypeLooseShape<{
        filterTitle: (string | ((props: Record<string, unknown>) => string)) & string;
        filterConfirm: any;
        filterReset: any;
        emptyText: any;
        selectAll: any;
        selectInvert: any;
        sortTitle: (string | ((props: Record<string, unknown>) => string)) & string;
        expand: (string | ((props: Record<string, unknown>) => string)) & string;
        collapse: (string | ((props: Record<string, unknown>) => string)) & string;
    }>;
    indentSize: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
    customRow: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    customHeaderRow: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    useFixedHeader: import("vue-types").VueTypeValidableDef<boolean>;
    bordered: import("vue-types").VueTypeValidableDef<boolean>;
    showHeader: import("vue-types").VueTypeValidableDef<boolean>;
    footer: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    title: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    scroll: {
        type: import("vue").PropType<{
            x?: string | number | boolean;
            y?: string | number | boolean;
            scrollToFirstRowOnChange?: boolean;
        }>;
    };
    childrenColumnName: import("vue-types").VueTypeDef<string | unknown[]>;
    bodyStyle: import("vue-types").VueTypeValidableDef<import("vue").CSSProperties>;
    sortDirections: {
        type: import("vue").PropType<import("./interface").SortOrder[]>;
    };
    tableLayout: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    getPopupContainer: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    expandIcon: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    transformCellText: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    onExpandedRowsChange: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    onExpand: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    onChange: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    onRowClick: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
};
declare const _default: import("vue").DefineComponent<{
    prefixCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    dropdownPrefixCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    rowSelection: import("vue-types").VueTypeDef<{
        [key: string]: any;
    } | {
        type: "checkbox" | "radio";
        selectedRowKeys: unknown[] | (() => unknown[]);
        getCheckboxProps: any;
        selections: boolean | import("vue-types/dist/types").DefaultFactory<unknown[]>;
        hideDefaultSelections: (boolean | ((props: Record<string, unknown>) => boolean)) & boolean;
        fixed: (boolean | ((props: Record<string, unknown>) => boolean)) & boolean;
        columnWidth: string | number;
        selectWay: "onSelect" | "onSelectMultiple" | "onSelectAll" | "onSelectInvert";
        columnTitle: any;
    }>;
    pagination: import("vue-types").VueTypeDef<boolean | Partial<{
        position?: unknown;
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
        position?: "both" | "bottom" | "top";
    }>>;
    size: import("vue-types").VueTypeDef<"default" | "small" | "middle" | "large">;
    dataSource: import("vue-types").VueTypeValidableDef<unknown[]> & {
        default: () => unknown[];
    };
    components: import("vue-types").VueTypeValidableDef<{
        [key: string]: any;
    }> & {
        default: () => {
            [key: string]: any;
        };
    };
    columns: {
        type: import("vue").PropType<ColumnProps>;
    };
    rowKey: import("vue-types").VueTypeDef<any>;
    rowClassName: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    expandedRowRender: import("vue-types").VueTypeValidableDef<any>;
    defaultExpandAllRows: import("vue-types").VueTypeValidableDef<boolean>;
    defaultExpandedRowKeys: import("vue-types").VueTypeValidableDef<unknown[]> & {
        default: () => unknown[];
    };
    expandedRowKeys: import("vue-types").VueTypeValidableDef<unknown[]> & {
        default: () => unknown[];
    };
    expandIconAsCell: import("vue-types").VueTypeValidableDef<boolean>;
    expandIconColumnIndex: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
    expandRowByClick: import("vue-types").VueTypeValidableDef<boolean>;
    loading: import("vue-types").VueTypeDef<boolean | {
        prefixCls: (string | ((props: Record<string, unknown>) => string)) & string;
        spinning: (boolean | ((props: Record<string, unknown>) => boolean)) & boolean;
        size: "default" | "small" | "large";
        wrapperClassName: (string | ((props: Record<string, unknown>) => string)) & string;
        tip: (string | ((props: Record<string, unknown>) => string)) & string;
        delay: (number | ((props: Record<string, unknown>) => number)) & number;
        indicator: any;
    }>;
    locale: import("vue-types").VueTypeLooseShape<{
        filterTitle: (string | ((props: Record<string, unknown>) => string)) & string;
        filterConfirm: any;
        filterReset: any;
        emptyText: any;
        selectAll: any;
        selectInvert: any;
        sortTitle: (string | ((props: Record<string, unknown>) => string)) & string;
        expand: (string | ((props: Record<string, unknown>) => string)) & string;
        collapse: (string | ((props: Record<string, unknown>) => string)) & string;
    }>;
    indentSize: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
    customRow: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    customHeaderRow: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    useFixedHeader: import("vue-types").VueTypeValidableDef<boolean>;
    bordered: import("vue-types").VueTypeValidableDef<boolean>;
    showHeader: import("vue-types").VueTypeValidableDef<boolean>;
    footer: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    title: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    scroll: {
        type: import("vue").PropType<{
            x?: string | number | boolean;
            y?: string | number | boolean;
            scrollToFirstRowOnChange?: boolean;
        }>;
    };
    childrenColumnName: import("vue-types").VueTypeDef<string | unknown[]>;
    bodyStyle: import("vue-types").VueTypeValidableDef<import("vue").CSSProperties>;
    sortDirections: {
        type: import("vue").PropType<import("./interface").SortOrder[]>;
    };
    tableLayout: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    getPopupContainer: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    expandIcon: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    transformCellText: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    onExpandedRowsChange: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    onExpand: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    onChange: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    onRowClick: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
}, {
    vcTable: any;
    checkboxPropsCache: {};
    store: {
        selectedRowKeys: any;
        selectionDirty: boolean;
    };
    configProvider: {
        getTargetContainer?: () => HTMLElement;
        getPopupContainer?: (triggerNode: HTMLElement) => HTMLElement;
        prefixCls?: string;
        getPrefixCls?: (suffixCls?: string, customizePrefixCls?: string) => string;
        renderEmpty?: typeof import("../config-provider/renderEmpty").default;
        transformCellText?: (tableProps: import("./interface").TransformCellTextProps) => any;
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
}, any, {}, {
    setTableRef(table: any): void;
    getCheckboxPropsByItem(item: any, index: any): any;
    getDefaultSelection(): any;
    getDefaultPagination(props: any): any;
    getSortOrderColumns(columns: any): any;
    getDefaultFilters(columns: any): any;
    getDefaultSortOrder(columns: any): any;
    getSortStateFromColumns(columns: any): {
        sSortColumn: any;
        sSortOrder: any;
    };
    getMaxCurrent(total: any): any;
    getRecordKey(record: any, index: any): any;
    getSorterFn(state: any): (a: any, b: any) => any;
    getCurrentPageData(): any;
    getFlatData(): any[];
    getFlatCurrentPageData(): any[];
    getLocalData(state: any, filter?: boolean): any;
    onRow(prefixCls: any, record: any, index: any): any;
    setSelectedRowKeys(selectedRowKeys: any, selectionInfo: any): void;
    generatePopupContainerFunc(getPopupContainer: any): any;
    scrollToFirstRow(): void;
    isSameColumn(a: any, b: any): boolean;
    handleFilter(column: any, nextFilters: any): void;
    handleSelect(record: any, rowIndex: any, e: any): void;
    handleRadioSelect(record: any, rowIndex: any, e: any): void;
    handleSelectRow(selectionKey: any, index: any, onSelectFunc: any): any;
    handlePageChange(current: any, ...otherArguments: any[]): void;
    handleShowSizeChange(current: any, pageSize: any): void;
    toggleSortOrder(column: any): void;
    hasPagination(props: any): boolean;
    isSortColumn(column: any): boolean;
    prepareParamsArguments(state: any, column: any): any[];
    findColumn(myKey: any): any;
    recursiveSort(data: any, sorterFn: any): any;
    renderExpandIcon(prefixCls: string): any;
    renderPagination(prefixCls: any, paginationPosition: any): JSX.Element;
    renderSelectionBox(type: any): ({ record, index }: {
        record: any;
        index: any;
    }) => JSX.Element;
    renderRowSelection({ prefixCls, locale, getPopupContainer }: {
        prefixCls: any;
        locale: any;
        getPopupContainer: any;
    }): any;
    renderColumnsDropdown({ prefixCls, dropdownPrefixCls, columns, locale, getPopupContainer }: {
        prefixCls: any;
        dropdownPrefixCls: any;
        columns: any;
        locale: any;
        getPopupContainer: any;
    }): any;
    renderColumnTitle(title: any): any;
    renderTable({ prefixCls, renderEmpty, dropdownPrefixCls, contextLocale, getPopupContainer: contextGetPopupContainer, transformCellText, }: {
        prefixCls: any;
        renderEmpty: any;
        dropdownPrefixCls: any;
        contextLocale: any;
        getPopupContainer: any;
        transformCellText: any;
    }): JSX.Element;
}, {
    methods: {
        setState(state: {}, callback: any): void;
        __emit(...args: any[]): void;
    };
}, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    prefixCls?: unknown;
    dropdownPrefixCls?: unknown;
    rowSelection?: unknown;
    pagination?: unknown;
    size?: unknown;
    dataSource?: unknown;
    components?: unknown;
    columns?: unknown;
    rowKey?: unknown;
    rowClassName?: unknown;
    expandedRowRender?: unknown;
    defaultExpandAllRows?: unknown;
    defaultExpandedRowKeys?: unknown;
    expandedRowKeys?: unknown;
    expandIconAsCell?: unknown;
    expandIconColumnIndex?: unknown;
    expandRowByClick?: unknown;
    loading?: unknown;
    locale?: unknown;
    indentSize?: unknown;
    customRow?: unknown;
    customHeaderRow?: unknown;
    useFixedHeader?: unknown;
    bordered?: unknown;
    showHeader?: unknown;
    footer?: unknown;
    title?: unknown;
    scroll?: unknown;
    childrenColumnName?: unknown;
    bodyStyle?: unknown;
    sortDirections?: unknown;
    tableLayout?: unknown;
    getPopupContainer?: unknown;
    expandIcon?: unknown;
    transformCellText?: unknown;
    onExpandedRowsChange?: unknown;
    onExpand?: unknown;
    onChange?: unknown;
    onRowClick?: unknown;
} & {
    prefixCls: string;
    components: {
        [key: string]: any;
    };
    dropdownPrefixCls: string;
    dataSource: unknown[];
    defaultExpandedRowKeys: unknown[];
    expandedRowKeys: unknown[];
    expandIconColumnIndex: number;
    indentSize: number;
    tableLayout: string;
} & {
    locale?: {
        filterTitle: (string | ((props: Record<string, unknown>) => string)) & string;
        filterConfirm: any;
        filterReset: any;
        emptyText: any;
        selectAll: any;
        selectInvert: any;
        sortTitle: (string | ((props: Record<string, unknown>) => string)) & string;
        expand: (string | ((props: Record<string, unknown>) => string)) & string;
        collapse: (string | ((props: Record<string, unknown>) => string)) & string;
    };
    getPopupContainer?: (...args: any[]) => any;
    transformCellText?: (...args: any[]) => any;
    footer?: (...args: any[]) => any;
    title?: (...args: any[]) => any;
    onChange?: (...args: any[]) => any;
    scroll?: unknown;
    size?: "default" | "small" | "middle" | "large";
    loading?: boolean | {
        prefixCls: (string | ((props: Record<string, unknown>) => string)) & string;
        spinning: (boolean | ((props: Record<string, unknown>) => boolean)) & boolean;
        size: "default" | "small" | "large";
        wrapperClassName: (string | ((props: Record<string, unknown>) => string)) & string;
        tip: (string | ((props: Record<string, unknown>) => string)) & string;
        delay: (number | ((props: Record<string, unknown>) => number)) & number;
        indicator: any;
    };
    bordered?: boolean;
    pagination?: boolean | Partial<{
        position?: unknown;
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
        position?: "both" | "bottom" | "top";
    }>;
    sortDirections?: import("./interface").SortOrder[];
    rowSelection?: {
        [key: string]: any;
    } | {
        type: "checkbox" | "radio";
        selectedRowKeys: unknown[] | (() => unknown[]);
        getCheckboxProps: any;
        selections: boolean | import("vue-types/dist/types").DefaultFactory<unknown[]>;
        hideDefaultSelections: (boolean | ((props: Record<string, unknown>) => boolean)) & boolean;
        fixed: (boolean | ((props: Record<string, unknown>) => boolean)) & boolean;
        columnWidth: string | number;
        selectWay: "onSelect" | "onSelectMultiple" | "onSelectAll" | "onSelectInvert";
        columnTitle: any;
    };
    columns?: unknown;
    rowKey?: any;
    rowClassName?: (...args: any[]) => any;
    expandedRowRender?: any;
    defaultExpandAllRows?: boolean;
    expandIconAsCell?: boolean;
    expandRowByClick?: boolean;
    customRow?: (...args: any[]) => any;
    customHeaderRow?: (...args: any[]) => any;
    useFixedHeader?: boolean;
    showHeader?: boolean;
    childrenColumnName?: string | unknown[];
    bodyStyle?: import("vue").CSSProperties;
    expandIcon?: (...args: any[]) => any;
    onExpandedRowsChange?: (...args: any[]) => any;
    onExpand?: (...args: any[]) => any;
    onRowClick?: (...args: any[]) => any;
}>, {
    getPopupContainer: (...args: any[]) => any;
    prefixCls: string;
    transformCellText: (...args: any[]) => any;
    footer: (...args: any[]) => any;
    title: (...args: any[]) => any;
    onChange: (...args: any[]) => any;
    components: {
        [key: string]: any;
    };
    dropdownPrefixCls: string;
    dataSource: unknown[];
    rowClassName: (...args: any[]) => any;
    defaultExpandedRowKeys: unknown[];
    expandedRowKeys: unknown[];
    expandIconColumnIndex: number;
    indentSize: number;
    customRow: (...args: any[]) => any;
    customHeaderRow: (...args: any[]) => any;
    tableLayout: string;
    expandIcon: (...args: any[]) => any;
    onExpandedRowsChange: (...args: any[]) => any;
    onExpand: (...args: any[]) => any;
    onRowClick: (...args: any[]) => any;
}>;
export default _default;
