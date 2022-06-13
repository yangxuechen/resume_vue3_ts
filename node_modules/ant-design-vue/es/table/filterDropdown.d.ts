import type { Key } from '../_util/type';
declare const _default: import("vue").DefineComponent<{
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
}, {
    neverShown: boolean;
    sSelectedKeys: unknown[];
    sKeyPathOfSelectedItem: {};
    sVisible: any;
    sValueKeys: {};
}, unknown, {}, {
    getDropdownVisible(): boolean;
    setSelectedKeys({ selectedKeys }: {
        selectedKeys: any;
    }): void;
    setVisible(visible: boolean): void;
    handleClearFilters(): void;
    handleConfirm(): void;
    onVisibleChange(visible: boolean): void;
    handleMenuItemClick(info: {
        keyPath: Key[];
        key: Key;
    }): void;
    hasSubMenu(): any;
    confirmFilter2(): void;
    renderMenus(items: any): any;
    renderFilterIcon(): import("vue").VNode<any, any, {
        [key: string]: any;
    }>;
    renderMenuItem(item: any): JSX.Element;
}, {
    methods: {
        setState(state: {}, callback: any): void;
        __emit(...args: any[]): void;
    };
}, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    locale?: unknown;
    selectedKeys?: unknown;
    column?: unknown;
    confirmFilter?: unknown;
    prefixCls?: unknown;
    dropdownPrefixCls?: unknown;
    getPopupContainer?: unknown;
    handleFilter?: unknown;
} & {
    prefixCls: string;
    column: {
        [key: string]: any;
    };
    dropdownPrefixCls: string;
    selectedKeys: unknown[];
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
    confirmFilter?: (...args: any[]) => any;
    handleFilter?: (...args: any[]) => any;
}>, {
    getPopupContainer: (...args: any[]) => any;
    prefixCls: string;
    column: {
        [key: string]: any;
    };
    dropdownPrefixCls: string;
    selectedKeys: unknown[];
    confirmFilter: (...args: any[]) => any;
    handleFilter: (...args: any[]) => any;
}>;
export default _default;
