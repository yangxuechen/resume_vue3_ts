export type { ColProps } from '../grid';
declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            prefixCls: string;
        }> & Omit<Readonly<{
            span?: unknown;
            order?: unknown;
            offset?: unknown;
            push?: unknown;
            pull?: unknown;
            xs?: unknown;
            sm?: unknown;
            md?: unknown;
            lg?: unknown;
            xl?: unknown;
            xxl?: unknown;
            prefixCls?: unknown;
            flex?: unknown;
        } & {
            prefixCls: string;
        } & {
            span?: string | number;
            push?: string | number;
            flex?: string | number;
            offset?: string | number;
            order?: string | number;
            xxl?: string | number | import("../grid").ColSize;
            xl?: string | number | import("../grid").ColSize;
            lg?: string | number | import("../grid").ColSize;
            md?: string | number | import("../grid").ColSize;
            sm?: string | number | import("../grid").ColSize;
            xs?: string | number | import("../grid").ColSize;
            pull?: string | number;
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
            span?: unknown;
            order?: unknown;
            offset?: unknown;
            push?: unknown;
            pull?: unknown;
            xs?: unknown;
            sm?: unknown;
            md?: unknown;
            lg?: unknown;
            xl?: unknown;
            xxl?: unknown;
            prefixCls?: unknown;
            flex?: unknown;
        } & {
            prefixCls: string;
        } & {
            span?: string | number;
            push?: string | number;
            flex?: string | number;
            offset?: string | number;
            order?: string | number;
            xxl?: string | number | import("../grid").ColSize;
            xl?: string | number | import("../grid").ColSize;
            lg?: string | number | import("../grid").ColSize;
            md?: string | number | import("../grid").ColSize;
            sm?: string | number | import("../grid").ColSize;
            xs?: string | number | import("../grid").ColSize;
            pull?: string | number;
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
        span?: unknown;
        order?: unknown;
        offset?: unknown;
        push?: unknown;
        pull?: unknown;
        xs?: unknown;
        sm?: unknown;
        md?: unknown;
        lg?: unknown;
        xl?: unknown;
        xxl?: unknown;
        prefixCls?: unknown;
        flex?: unknown;
    } & {
        prefixCls: string;
    } & {
        span?: string | number;
        push?: string | number;
        flex?: string | number;
        offset?: string | number;
        order?: string | number;
        xxl?: string | number | import("../grid").ColSize;
        xl?: string | number | import("../grid").ColSize;
        lg?: string | number | import("../grid").ColSize;
        md?: string | number | import("../grid").ColSize;
        sm?: string | number | import("../grid").ColSize;
        xs?: string | number | import("../grid").ColSize;
        pull?: string | number;
    }> & import("vue").ShallowUnwrapRef<() => JSX.Element> & {} & {} & import("vue").ComponentCustomProperties;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<{
    span?: unknown;
    order?: unknown;
    offset?: unknown;
    push?: unknown;
    pull?: unknown;
    xs?: unknown;
    sm?: unknown;
    md?: unknown;
    lg?: unknown;
    xl?: unknown;
    xxl?: unknown;
    prefixCls?: unknown;
    flex?: unknown;
} & {
    prefixCls: string;
} & {
    span?: string | number;
    push?: string | number;
    flex?: string | number;
    offset?: string | number;
    order?: string | number;
    xxl?: string | number | import("../grid").ColSize;
    xl?: string | number | import("../grid").ColSize;
    lg?: string | number | import("../grid").ColSize;
    md?: string | number | import("../grid").ColSize;
    sm?: string | number | import("../grid").ColSize;
    xs?: string | number | import("../grid").ColSize;
    pull?: string | number;
}>, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
    prefixCls: string;
}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("@vue/runtime-core").Plugin;
export default _default;
