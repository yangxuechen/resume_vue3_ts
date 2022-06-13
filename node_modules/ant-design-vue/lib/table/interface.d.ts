import type { ExtractPropTypes, PropType, UnwrapRef } from 'vue';
declare const PaginationProps: {
    total: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
    defaultCurrent: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
    disabled: import("vue-types").VueTypeValidableDef<boolean>;
    current: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
    defaultPageSize: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
    pageSize: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
    hideOnSinglePage: import("vue-types").VueTypeValidableDef<boolean>;
    showSizeChanger: import("vue-types").VueTypeValidableDef<boolean>;
    pageSizeOptions: import("vue-types").VueTypeDef<(string | number)[]>;
    buildOptionText: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    showSizeChange: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    showQuickJumper: import("vue-types").VueTypeDef<boolean | {
        [key: string]: any;
    }>;
    showTotal: import("vue-types").VueTypeValidableDef<any>;
    size: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    simple: import("vue-types").VueTypeValidableDef<boolean>;
    locale: import("vue-types").VueTypeValidableDef<{
        [key: string]: any;
    }> & {
        default: () => {
            [key: string]: any;
        };
    };
    prefixCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    selectPrefixCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    itemRender: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    role: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    showLessItems: import("vue-types").VueTypeValidableDef<boolean>;
    onChange: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    onShowSizeChange: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    'onUpdate:current': import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    'onUpdate:pageSize': import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
};
export declare type CompareFn<T> = (a: T, b: T, sortOrder?: SortOrder) => number;
export declare const ColumnFilterItem: import("vue-types").VueTypeLooseShape<{
    text: (string | ((props: Record<string, unknown>) => string)) & string;
    value: (string | ((props: Record<string, unknown>) => string)) & string;
    children: unknown[] | (() => unknown[]);
}>;
export declare const columnProps: {
    title: import("vue-types").VueTypeValidableDef<import("../_util/type").VueNode>;
    key: import("vue-types").VueTypeDef<string | number>;
    dataIndex: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    customRender: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    customCell: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    customHeaderCell: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    align: import("vue-types").VueTypeDef<"left" | "right" | "center">;
    ellipsis: import("vue-types").VueTypeValidableDef<boolean>;
    filters: import("vue-types").VueTypeDef<{
        text: (string | ((props: Record<string, unknown>) => string)) & string;
        value: (string | ((props: Record<string, unknown>) => string)) & string;
        children: unknown[] | (() => unknown[]);
    }[]>;
    onFilter: {
        type: PropType<(value: any, record: any) => boolean>;
    };
    filterMultiple: import("vue-types").VueTypeValidableDef<boolean>;
    filterDropdown: import("vue-types").VueTypeValidableDef<any>;
    filterDropdownVisible: import("vue-types").VueTypeValidableDef<boolean>;
    onFilterDropdownVisibleChange: {
        type: PropType<(visible: boolean) => void>;
    };
    sorter: import("vue-types").VueTypeDef<any>;
    defaultSortOrder: import("vue-types").VueTypeDef<"descend" | "ascend">;
    colSpan: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
    width: import("vue-types").VueTypeDef<string | number>;
    className: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    fixed: import("vue-types").VueTypeDef<boolean | "left" | "right">;
    filterIcon: import("vue-types").VueTypeValidableDef<any>;
    filteredValue: import("vue-types").VueTypeValidableDef<unknown[]> & {
        default: () => unknown[];
    };
    filtered: import("vue-types").VueTypeValidableDef<boolean>;
    defaultFilteredValue: import("vue-types").VueTypeValidableDef<unknown[]> & {
        default: () => unknown[];
    };
    sortOrder: import("vue-types").VueTypeDef<boolean | "descend" | "ascend">;
    sortDirections: import("vue-types").VueTypeValidableDef<unknown[]> & {
        default: () => unknown[];
    };
};
export declare type ColumnProps = Partial<ExtractPropTypes<typeof columnProps>> & {
    slots?: {
        title?: string;
        filterIcon?: string;
        filterDropdown?: string;
        customRender?: string;
        [key: string]: string | undefined;
    };
};
export interface TableComponents {
    table?: any;
    header?: {
        wrapper?: any;
        row?: any;
        cell?: any;
    };
    body?: {
        wrapper?: any;
        row?: any;
        cell?: any;
    };
}
export declare const TableLocale: import("vue-types").VueTypeLooseShape<{
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
export declare const RowSelectionType: import("vue-types").VueTypeDef<"checkbox" | "radio">;
export declare const tableRowSelection: {
    type: import("vue-types").VueTypeDef<"checkbox" | "radio">;
    selectedRowKeys: import("vue-types").VueTypeValidableDef<unknown[]> & {
        default: () => unknown[];
    };
    getCheckboxProps: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    selections: import("vue-types").VueTypeDef<boolean | unknown[]>;
    hideDefaultSelections: import("vue-types").VueTypeValidableDef<boolean>;
    fixed: import("vue-types").VueTypeValidableDef<boolean>;
    columnWidth: import("vue-types").VueTypeDef<string | number>;
    selectWay: import("vue-types").VueTypeDef<"onSelect" | "onSelectMultiple" | "onSelectAll" | "onSelectInvert">;
    columnTitle: import("vue-types").VueTypeValidableDef<any>;
};
export declare type SortOrder = 'descend' | 'ascend';
export declare const tableProps: {
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
        type: PropType<ColumnProps>;
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
        type: PropType<{
            x?: boolean | number | string;
            y?: boolean | number | string;
            scrollToFirstRowOnChange?: boolean;
        }>;
    };
    childrenColumnName: import("vue-types").VueTypeDef<string | unknown[]>;
    bodyStyle: import("vue-types").VueTypeValidableDef<import("vue").CSSProperties>;
    sortDirections: {
        type: PropType<SortOrder[]>;
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
export declare type TableRowSelection = Partial<ExtractPropTypes<typeof tableRowSelection>>;
export declare type TableProps = Partial<ExtractPropTypes<typeof tableProps>>;
export interface TableStateFilters {
    [key: string]: string[];
}
export interface TableState {
    pagination?: Partial<ExtractPropTypes<typeof PaginationProps>>;
    filters?: TableStateFilters;
    sortColumn?: ColumnProps | null;
    sortOrder?: SortOrder;
    columns?: ColumnProps[];
}
export interface TransformCellTextProps {
    text: any;
    column: ColumnProps;
    record: any;
    index: number;
}
export declare type TableStore = UnwrapRef<{
    selectedRowKeys: any[];
    selectionDirty: boolean;
}>;
export declare const SelectionCheckboxAllProps: {
    propsSymbol: import("vue-types").VueTypeValidableDef<any>;
    store: import("vue-types").VueTypeValidableDef<any>;
    locale: import("vue-types").VueTypeValidableDef<any>;
    disabled: import("vue-types").VueTypeValidableDef<boolean>;
    getCheckboxPropsByItem: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    getRecordKey: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    data: import("vue-types").VueTypeValidableDef<unknown[]> & {
        default: () => unknown[];
    };
    prefixCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    hideDefaultSelections: import("vue-types").VueTypeValidableDef<boolean>;
    selections: import("vue-types").VueTypeDef<boolean | unknown[]>;
    getPopupContainer: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    onSelect: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
};
export declare const SelectionBoxProps: {
    store: import("vue-types").VueTypeValidableDef<any>;
    type: import("vue-types").VueTypeDef<"checkbox" | "radio">;
    defaultSelection: import("vue-types").VueTypeValidableDef<unknown[]> & {
        default: () => unknown[];
    };
    rowIndex: import("vue-types").VueTypeDef<string | number>;
    name: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    disabled: import("vue-types").VueTypeValidableDef<boolean>;
    id: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
};
export declare const FilterMenuProps: {
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
    selectedKeys: import("vue-types").VueTypeValidableDef<unknown[]> & {
        default: () => unknown[];
    };
    column: import("vue-types").VueTypeValidableDef<{
        [key: string]: any;
    }> & {
        default: () => {
            [key: string]: any;
        };
    };
    confirmFilter: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    prefixCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    dropdownPrefixCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    getPopupContainer: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    handleFilter: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
};
export {};
