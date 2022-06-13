import type { Plugin } from 'vue';
import BreadcrumbItem from './BreadcrumbItem';
import BreadcrumbSeparator from './BreadcrumbSeparator';
export type { BreadcrumbProps } from './Breadcrumb';
export type { BreadcrumbItemProps } from './BreadcrumbItem';
export type { BreadcrumbSeparatorProps } from './BreadcrumbSeparator';
export { BreadcrumbItem, BreadcrumbSeparator };
declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            prefixCls: string;
        }> & Omit<Readonly<{
            prefixCls?: unknown;
            routes?: unknown;
            params?: unknown;
            separator?: unknown;
            itemRender?: unknown;
        } & {
            prefixCls: string;
        } & {
            separator?: any;
            itemRender?: (opt: {
                route: import("./Breadcrumb").Route;
                params: unknown;
                routes: import("./Breadcrumb").Route[];
                paths: string[];
            }) => import("../_util/type").VueNode;
            routes?: import("./Breadcrumb").Route[];
            params?: any;
        }> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "prefixCls">;
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
            routes?: unknown;
            params?: unknown;
            separator?: unknown;
            itemRender?: unknown;
        } & {
            prefixCls: string;
        } & {
            separator?: any;
            itemRender?: (opt: {
                route: import("./Breadcrumb").Route;
                params: unknown;
                routes: import("./Breadcrumb").Route[];
                paths: string[];
            }) => import("../_util/type").VueNode;
            routes?: import("./Breadcrumb").Route[];
            params?: any;
        }>, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
            prefixCls: string;
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
        routes?: unknown;
        params?: unknown;
        separator?: unknown;
        itemRender?: unknown;
    } & {
        prefixCls: string;
    } & {
        separator?: any;
        itemRender?: (opt: {
            route: import("./Breadcrumb").Route;
            params: unknown;
            routes: import("./Breadcrumb").Route[];
            paths: string[];
        }) => import("../_util/type").VueNode;
        routes?: import("./Breadcrumb").Route[];
        params?: any;
    }> & import("vue").ShallowUnwrapRef<() => JSX.Element> & {} & {} & import("vue").ComponentCustomProperties;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<{
    prefixCls?: unknown;
    routes?: unknown;
    params?: unknown;
    separator?: unknown;
    itemRender?: unknown;
} & {
    prefixCls: string;
} & {
    separator?: any;
    itemRender?: (opt: {
        route: import("./Breadcrumb").Route;
        params: unknown;
        routes: import("./Breadcrumb").Route[];
        paths: string[];
    }) => import("../_util/type").VueNode;
    routes?: import("./Breadcrumb").Route[];
    params?: any;
}>, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
    prefixCls: string;
}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Plugin & {
    readonly Item: typeof BreadcrumbItem;
    readonly Separator: typeof BreadcrumbSeparator;
};
export default _default;
