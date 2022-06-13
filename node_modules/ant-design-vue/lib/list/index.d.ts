import type { Plugin, ExtractPropTypes, PropType } from 'vue';
import Item from './Item';
import ItemMeta from './ItemMeta';
export { ListItemProps } from './Item';
export { ListItemMetaProps } from './ItemMeta';
export declare type ColumnType = 'gutter' | 'column' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
export declare const ListGridType: {
    gutter: import("vue-types").VueTypeDef<number | number[]>;
    column: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
    xs: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
    sm: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
    md: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
    lg: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
    xl: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
    xxl: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
};
export declare const ListSize: ["small", "default", "large"];
export declare type ListItemLayout = 'horizontal' | 'vertical';
export declare const listProps: {
    bordered: import("vue-types").VueTypeValidableDef<boolean>;
    dataSource: import("vue-types").VueTypeValidableDef<unknown[]> & {
        default: () => unknown[];
    };
    extra: import("vue-types").VueTypeValidableDef<any>;
    grid: import("vue-types").VueTypeLooseShape<{
        gutter: number | import("vue-types/dist/types").DefaultFactory<number[]>;
        column: (number | ((props: Record<string, unknown>) => number)) & number;
        xs: (number | ((props: Record<string, unknown>) => number)) & number;
        sm: (number | ((props: Record<string, unknown>) => number)) & number;
        md: (number | ((props: Record<string, unknown>) => number)) & number;
        lg: (number | ((props: Record<string, unknown>) => number)) & number;
        xl: (number | ((props: Record<string, unknown>) => number)) & number;
        xxl: (number | ((props: Record<string, unknown>) => number)) & number;
    }>;
    itemLayout: import("vue-types").VueTypeDef<"horizontal" | "vertical">;
    loading: import("vue-types").VueTypeDef<boolean | {
        [key: string]: any;
    }>;
    loadMore: import("vue-types").VueTypeValidableDef<any>;
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
    prefixCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    rowKey: import("vue-types").VueTypeValidableDef<any>;
    renderItem: import("vue-types").VueTypeValidableDef<any>;
    size: import("vue-types").VueTypeDef<"default" | "small" | "large">;
    split: import("vue-types").VueTypeValidableDef<boolean>;
    header: import("vue-types").VueTypeValidableDef<any>;
    footer: import("vue-types").VueTypeValidableDef<any>;
    locale: {
        type: PropType<ListLocale>;
    };
};
export interface ListLocale {
    emptyText: any;
}
export declare type ListProps = Partial<ExtractPropTypes<typeof listProps>>;
export { ItemMeta as ListItemMeta, Item as ListItem };
declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            prefixCls: string;
            dataSource: unknown[];
        }> & Omit<Readonly<{
            bordered?: unknown;
            dataSource?: unknown;
            extra?: unknown;
            grid?: unknown;
            itemLayout?: unknown;
            loading?: unknown;
            loadMore?: unknown;
            pagination?: unknown;
            prefixCls?: unknown;
            rowKey?: unknown;
            renderItem?: unknown;
            size?: unknown;
            split?: unknown;
            header?: unknown;
            footer?: unknown;
            locale?: unknown;
        } & {
            prefixCls: string;
            dataSource: unknown[];
        } & {
            locale?: ListLocale;
            footer?: any;
            header?: any;
            size?: "default" | "small" | "large";
            grid?: {
                gutter: number | import("vue-types/dist/types").DefaultFactory<number[]>;
                column: (number | ((props: Record<string, unknown>) => number)) & number;
                xs: (number | ((props: Record<string, unknown>) => number)) & number;
                sm: (number | ((props: Record<string, unknown>) => number)) & number;
                md: (number | ((props: Record<string, unknown>) => number)) & number;
                lg: (number | ((props: Record<string, unknown>) => number)) & number;
                xl: (number | ((props: Record<string, unknown>) => number)) & number;
                xxl: (number | ((props: Record<string, unknown>) => number)) & number;
            };
            renderItem?: any;
            split?: boolean;
            loading?: boolean | {
                [key: string]: any;
            };
            extra?: any;
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
            rowKey?: any;
            itemLayout?: "horizontal" | "vertical";
            loadMore?: any;
        }> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "prefixCls" | "dataSource">;
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
            bordered?: unknown;
            dataSource?: unknown;
            extra?: unknown;
            grid?: unknown;
            itemLayout?: unknown;
            loading?: unknown;
            loadMore?: unknown;
            pagination?: unknown;
            prefixCls?: unknown;
            rowKey?: unknown;
            renderItem?: unknown;
            size?: unknown;
            split?: unknown;
            header?: unknown;
            footer?: unknown;
            locale?: unknown;
        } & {
            prefixCls: string;
            dataSource: unknown[];
        } & {
            locale?: ListLocale;
            footer?: any;
            header?: any;
            size?: "default" | "small" | "large";
            grid?: {
                gutter: number | import("vue-types/dist/types").DefaultFactory<number[]>;
                column: (number | ((props: Record<string, unknown>) => number)) & number;
                xs: (number | ((props: Record<string, unknown>) => number)) & number;
                sm: (number | ((props: Record<string, unknown>) => number)) & number;
                md: (number | ((props: Record<string, unknown>) => number)) & number;
                lg: (number | ((props: Record<string, unknown>) => number)) & number;
                xl: (number | ((props: Record<string, unknown>) => number)) & number;
                xxl: (number | ((props: Record<string, unknown>) => number)) & number;
            };
            renderItem?: any;
            split?: boolean;
            loading?: boolean | {
                [key: string]: any;
            };
            extra?: any;
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
            rowKey?: any;
            itemLayout?: "horizontal" | "vertical";
            loadMore?: any;
        }>, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
            prefixCls: string;
            dataSource: unknown[];
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
        bordered?: unknown;
        dataSource?: unknown;
        extra?: unknown;
        grid?: unknown;
        itemLayout?: unknown;
        loading?: unknown;
        loadMore?: unknown;
        pagination?: unknown;
        prefixCls?: unknown;
        rowKey?: unknown;
        renderItem?: unknown;
        size?: unknown;
        split?: unknown;
        header?: unknown;
        footer?: unknown;
        locale?: unknown;
    } & {
        prefixCls: string;
        dataSource: unknown[];
    } & {
        locale?: ListLocale;
        footer?: any;
        header?: any;
        size?: "default" | "small" | "large";
        grid?: {
            gutter: number | import("vue-types/dist/types").DefaultFactory<number[]>;
            column: (number | ((props: Record<string, unknown>) => number)) & number;
            xs: (number | ((props: Record<string, unknown>) => number)) & number;
            sm: (number | ((props: Record<string, unknown>) => number)) & number;
            md: (number | ((props: Record<string, unknown>) => number)) & number;
            lg: (number | ((props: Record<string, unknown>) => number)) & number;
            xl: (number | ((props: Record<string, unknown>) => number)) & number;
            xxl: (number | ((props: Record<string, unknown>) => number)) & number;
        };
        renderItem?: any;
        split?: boolean;
        loading?: boolean | {
            [key: string]: any;
        };
        extra?: any;
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
        rowKey?: any;
        itemLayout?: "horizontal" | "vertical";
        loadMore?: any;
    }> & import("vue").ShallowUnwrapRef<() => JSX.Element> & {} & {} & import("vue").ComponentCustomProperties;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<{
    bordered?: unknown;
    dataSource?: unknown;
    extra?: unknown;
    grid?: unknown;
    itemLayout?: unknown;
    loading?: unknown;
    loadMore?: unknown;
    pagination?: unknown;
    prefixCls?: unknown;
    rowKey?: unknown;
    renderItem?: unknown;
    size?: unknown;
    split?: unknown;
    header?: unknown;
    footer?: unknown;
    locale?: unknown;
} & {
    prefixCls: string;
    dataSource: unknown[];
} & {
    locale?: ListLocale;
    footer?: any;
    header?: any;
    size?: "default" | "small" | "large";
    grid?: {
        gutter: number | import("vue-types/dist/types").DefaultFactory<number[]>;
        column: (number | ((props: Record<string, unknown>) => number)) & number;
        xs: (number | ((props: Record<string, unknown>) => number)) & number;
        sm: (number | ((props: Record<string, unknown>) => number)) & number;
        md: (number | ((props: Record<string, unknown>) => number)) & number;
        lg: (number | ((props: Record<string, unknown>) => number)) & number;
        xl: (number | ((props: Record<string, unknown>) => number)) & number;
        xxl: (number | ((props: Record<string, unknown>) => number)) & number;
    };
    renderItem?: any;
    split?: boolean;
    loading?: boolean | {
        [key: string]: any;
    };
    extra?: any;
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
    rowKey?: any;
    itemLayout?: "horizontal" | "vertical";
    loadMore?: any;
}>, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
    prefixCls: string;
    dataSource: unknown[];
}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Plugin & {
    readonly Item: typeof Item & {
        readonly Meta: typeof ItemMeta;
    };
};
export default _default;
