import type { RadioChangeEvent } from '../radio/interface';
export interface DataSourceItem {
    key: string;
    title: string;
    description?: string;
    disabled?: boolean;
}
export declare const TransferListProps: {
    prefixCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    titleText: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    dataSource: import("vue-types").VueTypeDef<{
        key: (string | ((props: Record<string, unknown>) => string)) & string;
        title: (string | ((props: Record<string, unknown>) => string)) & string;
        description: (string | ((props: Record<string, unknown>) => string)) & string;
        disabled: (boolean | ((props: Record<string, unknown>) => boolean)) & boolean;
    }[]>;
    filter: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    filterOption: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    checkedKeys: import("vue-types").VueTypeDef<string[]>;
    handleFilter: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    handleSelect: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    handleSelectAll: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    handleClear: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    renderItem: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    showSearch: import("vue-types").VueTypeValidableDef<boolean>;
    searchPlaceholder: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    notFoundContent: import("vue-types").VueTypeValidableDef<any>;
    itemUnit: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    itemsUnit: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    body: import("vue-types").VueTypeValidableDef<any>;
    renderList: import("vue-types").VueTypeValidableDef<any>;
    footer: import("vue-types").VueTypeValidableDef<any>;
    lazy: import("vue-types").VueTypeDef<boolean | {
        [key: string]: any;
    }>;
    disabled: import("vue-types").VueTypeValidableDef<boolean>;
    direction: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    showSelectAll: import("vue-types").VueTypeValidableDef<boolean>;
    onItemSelect: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    onItemSelectAll: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    onScroll: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
};
declare const _default: import("vue").DefineComponent<{
    prefixCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    titleText: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    dataSource: import("vue-types").VueTypeDef<{
        key: (string | ((props: Record<string, unknown>) => string)) & string;
        title: (string | ((props: Record<string, unknown>) => string)) & string;
        description: (string | ((props: Record<string, unknown>) => string)) & string;
        disabled: (boolean | ((props: Record<string, unknown>) => boolean)) & boolean;
    }[]>;
    filter: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    filterOption: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    checkedKeys: import("vue-types").VueTypeDef<string[]>;
    handleFilter: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    handleSelect: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    handleSelectAll: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    handleClear: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    renderItem: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    showSearch: import("vue-types").VueTypeValidableDef<boolean>;
    searchPlaceholder: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    notFoundContent: import("vue-types").VueTypeValidableDef<any>;
    itemUnit: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    itemsUnit: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    body: import("vue-types").VueTypeValidableDef<any>;
    renderList: import("vue-types").VueTypeValidableDef<any>;
    footer: import("vue-types").VueTypeValidableDef<any>;
    lazy: import("vue-types").VueTypeDef<boolean | {
        [key: string]: any;
    }>;
    disabled: import("vue-types").VueTypeValidableDef<boolean>;
    direction: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    showSelectAll: import("vue-types").VueTypeValidableDef<boolean>;
    onItemSelect: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    onItemSelectAll: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    onScroll: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
}, {
    timer: any;
    triggerScrollTimer: any;
    scrollEvent: any;
}, {
    filterValue: string;
}, {}, {
    handleScroll(e: Event): void;
    getCheckStatus(filteredItems: DataSourceItem[]): "none" | "all" | "part";
    getFilteredItems(dataSource: DataSourceItem[], filterValue: string): {
        filteredItems: any[];
        filteredRenderItems: any[];
    };
    getListBody(prefixCls: string, searchPlaceholder: string, filterValue: string, filteredItems: DataSourceItem[], notFoundContent: unknown, bodyDom: unknown, filteredRenderItems: unknown, checkedKeys: string[], renderList: Function, showSearch: boolean, disabled: boolean): unknown;
    getCheckBox(filteredItems: DataSourceItem[], showSelectAll: boolean, disabled: boolean): JSX.Element;
    _handleSelect(selectedItem: DataSourceItem): void;
    _handleFilter(e: RadioChangeEvent): void;
    _handleClear(e: Event): void;
    matchFilter(text: string, item: DataSourceItem): any;
    renderItemHtml(item: DataSourceItem): {
        renderedText: any;
        renderedEl: any;
        item: DataSourceItem;
    };
    filterNull(arr: unknown[]): unknown[];
}, {
    methods: {
        setState(state: {}, callback: any): void;
        __emit(...args: any[]): void;
    };
}, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    prefixCls?: unknown;
    titleText?: unknown;
    dataSource?: unknown;
    filter?: unknown;
    filterOption?: unknown;
    checkedKeys?: unknown;
    handleFilter?: unknown;
    handleSelect?: unknown;
    handleSelectAll?: unknown;
    handleClear?: unknown;
    renderItem?: unknown;
    showSearch?: unknown;
    searchPlaceholder?: unknown;
    notFoundContent?: unknown;
    itemUnit?: unknown;
    itemsUnit?: unknown;
    body?: unknown;
    renderList?: unknown;
    footer?: unknown;
    lazy?: unknown;
    disabled?: unknown;
    direction?: unknown;
    showSelectAll?: unknown;
    onItemSelect?: unknown;
    onItemSelectAll?: unknown;
    onScroll?: unknown;
} & {
    filter: string;
    prefixCls: string;
    direction: string;
    titleText: string;
    searchPlaceholder: string;
    itemUnit: string;
    itemsUnit: string;
} & {
    body?: any;
    footer?: any;
    onScroll?: (...args: any[]) => any;
    disabled?: boolean;
    notFoundContent?: any;
    renderItem?: (...args: any[]) => any;
    filterOption?: (...args: any[]) => any;
    showSearch?: boolean;
    dataSource?: {
        key: (string | ((props: Record<string, unknown>) => string)) & string;
        title: (string | ((props: Record<string, unknown>) => string)) & string;
        description: (string | ((props: Record<string, unknown>) => string)) & string;
        disabled: (boolean | ((props: Record<string, unknown>) => boolean)) & boolean;
    }[];
    lazy?: boolean | {
        [key: string]: any;
    };
    handleSelect?: (...args: any[]) => any;
    handleFilter?: (...args: any[]) => any;
    handleClear?: (...args: any[]) => any;
    onItemSelect?: (...args: any[]) => any;
    onItemSelectAll?: (...args: any[]) => any;
    checkedKeys?: string[];
    handleSelectAll?: (...args: any[]) => any;
    renderList?: any;
    showSelectAll?: boolean;
}>, {
    filter: string;
    prefixCls: string;
    direction: string;
    onScroll: (...args: any[]) => any;
    renderItem: (...args: any[]) => any;
    filterOption: (...args: any[]) => any;
    handleSelect: (...args: any[]) => any;
    handleFilter: (...args: any[]) => any;
    handleClear: (...args: any[]) => any;
    onItemSelect: (...args: any[]) => any;
    onItemSelectAll: (...args: any[]) => any;
    titleText: string;
    handleSelectAll: (...args: any[]) => any;
    searchPlaceholder: string;
    itemUnit: string;
    itemsUnit: string;
}>;
export default _default;
