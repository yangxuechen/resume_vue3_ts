export type { RowProps } from '../grid';
declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            prefixCls: string;
            gutter: number | {
                [key: string]: any;
            };
        }> & Omit<Readonly<{
            type?: unknown;
            align?: unknown;
            justify?: unknown;
            prefixCls?: unknown;
            gutter?: unknown;
            wrap?: unknown;
        } & {
            prefixCls: string;
            gutter: number | {
                [key: string]: any;
            };
        } & {
            type?: string;
            wrap?: boolean;
            justify?: "space-around" | "space-between" | "center" | "end" | "start";
            align?: "middle" | "stretch" | "bottom" | "top";
        }> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "prefixCls" | "gutter">;
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
            type?: unknown;
            align?: unknown;
            justify?: unknown;
            prefixCls?: unknown;
            gutter?: unknown;
            wrap?: unknown;
        } & {
            prefixCls: string;
            gutter: number | {
                [key: string]: any;
            };
        } & {
            type?: string;
            wrap?: boolean;
            justify?: "space-around" | "space-between" | "center" | "end" | "start";
            align?: "middle" | "stretch" | "bottom" | "top";
        }>, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
            prefixCls: string;
            gutter: number | {
                [key: string]: any;
            };
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
        type?: unknown;
        align?: unknown;
        justify?: unknown;
        prefixCls?: unknown;
        gutter?: unknown;
        wrap?: unknown;
    } & {
        prefixCls: string;
        gutter: number | {
            [key: string]: any;
        };
    } & {
        type?: string;
        wrap?: boolean;
        justify?: "space-around" | "space-between" | "center" | "end" | "start";
        align?: "middle" | "stretch" | "bottom" | "top";
    }> & import("vue").ShallowUnwrapRef<() => JSX.Element> & {} & {} & import("vue").ComponentCustomProperties;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<{
    type?: unknown;
    align?: unknown;
    justify?: unknown;
    prefixCls?: unknown;
    gutter?: unknown;
    wrap?: unknown;
} & {
    prefixCls: string;
    gutter: number | {
        [key: string]: any;
    };
} & {
    type?: string;
    wrap?: boolean;
    justify?: "space-around" | "space-between" | "center" | "end" | "start";
    align?: "middle" | "stretch" | "bottom" | "top";
}>, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
    prefixCls: string;
    gutter: number | {
        [key: string]: any;
    };
}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("@vue/runtime-core").Plugin;
export default _default;
