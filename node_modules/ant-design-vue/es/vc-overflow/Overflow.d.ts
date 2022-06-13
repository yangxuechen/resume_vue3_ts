import type { HTMLAttributes } from 'vue';
import type { Key, VueNode } from '../_util/type';
import RawItem from './RawItem';
declare const RESPONSIVE: "responsive";
declare const INVALIDATE: "invalidate";
export interface OverflowProps<ItemType> extends HTMLAttributes {
    prefixCls?: string;
    data?: ItemType[];
    itemKey?: Key;
    /** Used for `responsive`. It will limit render node to avoid perf issue */
    itemWidth?: number;
    renderItem?: (item: ItemType) => VueNode;
    /** @private Do not use in your production. Render raw node that need wrap Item by developer self */
    renderRawItem?: (item: ItemType, index: number) => VueNode;
    maxCount?: number | typeof RESPONSIVE | typeof INVALIDATE;
    renderRest?: VueNode | ((omittedItems: ItemType[]) => VueNode);
    /** @private Do not use in your production. Render raw node that need wrap Item by developer self */
    renderRawRest?: (omittedItems: ItemType[]) => VueNode;
    suffix?: VueNode;
    component?: any;
    itemComponent?: any;
    /** @private This API may be refactor since not well design */
    onVisibleChange?: (visibleCount: number) => void;
    /** When set to `full`, ssr will render full items by default and remove at client side */
    ssr?: 'full';
}
declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            itemWidth: number;
        }> & Omit<Readonly<{
            prefixCls?: unknown;
            data?: unknown;
            itemKey?: unknown;
            itemWidth?: unknown;
            renderItem?: unknown;
            renderRawItem?: unknown;
            maxCount?: unknown;
            renderRest?: unknown;
            renderRawRest?: unknown;
            suffix?: unknown;
            component?: unknown;
            itemComponent?: unknown;
            onVisibleChange?: unknown;
            ssr?: unknown;
        } & {
            itemWidth: number;
        } & {
            prefixCls?: string;
            data?: unknown[];
            itemKey?: Key | ((item: any) => Key);
            component?: string;
            renderItem?: (item: any) => VueNode;
            onVisibleChange?: (visibleCount: number) => void;
            renderRawItem?: (item: any, index: number) => VueNode;
            maxCount?: number | "responsive" | "invalidate";
            renderRest?: (items: any[]) => VueNode;
            renderRawRest?: (items: any[]) => VueNode;
            suffix?: any;
            itemComponent?: any;
            ssr?: "full";
        }> & {
            onVisibleChange?: (...args: any[]) => any;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "itemWidth">;
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
        $emit: (event: "visibleChange", ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<{
            prefixCls?: unknown;
            data?: unknown;
            itemKey?: unknown;
            itemWidth?: unknown;
            renderItem?: unknown;
            renderRawItem?: unknown;
            maxCount?: unknown;
            renderRest?: unknown;
            renderRawRest?: unknown;
            suffix?: unknown;
            component?: unknown;
            itemComponent?: unknown;
            onVisibleChange?: unknown;
            ssr?: unknown;
        } & {
            itemWidth: number;
        } & {
            prefixCls?: string;
            data?: unknown[];
            itemKey?: Key | ((item: any) => Key);
            component?: string;
            renderItem?: (item: any) => VueNode;
            onVisibleChange?: (visibleCount: number) => void;
            renderRawItem?: (item: any, index: number) => VueNode;
            maxCount?: number | "responsive" | "invalidate";
            renderRest?: (items: any[]) => VueNode;
            renderRawRest?: (items: any[]) => VueNode;
            suffix?: any;
            itemComponent?: any;
            ssr?: "full";
        }> & {
            onVisibleChange?: (...args: any[]) => any;
        }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "visibleChange"[], string, {
            itemWidth: number;
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
        data?: unknown;
        itemKey?: unknown;
        itemWidth?: unknown;
        renderItem?: unknown;
        renderRawItem?: unknown;
        maxCount?: unknown;
        renderRest?: unknown;
        renderRawRest?: unknown;
        suffix?: unknown;
        component?: unknown;
        itemComponent?: unknown;
        onVisibleChange?: unknown;
        ssr?: unknown;
    } & {
        itemWidth: number;
    } & {
        prefixCls?: string;
        data?: unknown[];
        itemKey?: Key | ((item: any) => Key);
        component?: string;
        renderItem?: (item: any) => VueNode;
        onVisibleChange?: (visibleCount: number) => void;
        renderRawItem?: (item: any, index: number) => VueNode;
        maxCount?: number | "responsive" | "invalidate";
        renderRest?: (items: any[]) => VueNode;
        renderRawRest?: (items: any[]) => VueNode;
        suffix?: any;
        itemComponent?: any;
        ssr?: "full";
    }> & {
        onVisibleChange?: (...args: any[]) => any;
    } & import("vue").ShallowUnwrapRef<() => JSX.Element> & {} & {} & import("vue").ComponentCustomProperties;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<{
    prefixCls?: unknown;
    data?: unknown;
    itemKey?: unknown;
    itemWidth?: unknown;
    renderItem?: unknown;
    renderRawItem?: unknown;
    maxCount?: unknown;
    renderRest?: unknown;
    renderRawRest?: unknown;
    suffix?: unknown;
    component?: unknown;
    itemComponent?: unknown;
    onVisibleChange?: unknown;
    ssr?: unknown;
} & {
    itemWidth: number;
} & {
    prefixCls?: string;
    data?: unknown[];
    itemKey?: Key | ((item: any) => Key);
    component?: string;
    renderItem?: (item: any) => VueNode;
    onVisibleChange?: (visibleCount: number) => void;
    renderRawItem?: (item: any, index: number) => VueNode;
    maxCount?: number | "responsive" | "invalidate";
    renderRest?: (items: any[]) => VueNode;
    renderRawRest?: (items: any[]) => VueNode;
    suffix?: any;
    itemComponent?: any;
    ssr?: "full";
}> & {
    onVisibleChange?: (...args: any[]) => any;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "visibleChange"[], "visibleChange", {
    itemWidth: number;
}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & {
    readonly Item: typeof RawItem;
    readonly RESPONSIVE: typeof RESPONSIVE;
    readonly INVALIDATE: typeof INVALIDATE;
};
export default _default;
