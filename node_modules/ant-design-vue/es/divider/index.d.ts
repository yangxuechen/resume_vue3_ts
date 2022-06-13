import type { ExtractPropTypes, PropType } from 'vue';
export declare const dividerProps: {
    prefixCls: StringConstructor;
    type: {
        type: PropType<"" | "horizontal" | "vertical">;
        default: string;
    };
    dashed: {
        type: BooleanConstructor;
        default: boolean;
    };
    orientation: {
        type: PropType<"left" | "right" | "center">;
        default: string;
    };
    plain: {
        type: BooleanConstructor;
        default: boolean;
    };
};
export declare type DividerProps = Partial<ExtractPropTypes<typeof dividerProps>>;
declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            type: "" | "horizontal" | "vertical";
            dashed: boolean;
            orientation: "left" | "right" | "center";
            plain: boolean;
        }> & Omit<Readonly<{
            prefixCls?: unknown;
            type?: unknown;
            dashed?: unknown;
            orientation?: unknown;
            plain?: unknown;
        } & {
            type: "" | "horizontal" | "vertical";
            dashed: boolean;
            orientation: "left" | "right" | "center";
            plain: boolean;
        } & {
            prefixCls?: string;
        }> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "type" | "dashed" | "orientation" | "plain">;
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
            type?: unknown;
            dashed?: unknown;
            orientation?: unknown;
            plain?: unknown;
        } & {
            type: "" | "horizontal" | "vertical";
            dashed: boolean;
            orientation: "left" | "right" | "center";
            plain: boolean;
        } & {
            prefixCls?: string;
        }>, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
            type: "" | "horizontal" | "vertical";
            dashed: boolean;
            orientation: "left" | "right" | "center";
            plain: boolean;
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
        type?: unknown;
        dashed?: unknown;
        orientation?: unknown;
        plain?: unknown;
    } & {
        type: "" | "horizontal" | "vertical";
        dashed: boolean;
        orientation: "left" | "right" | "center";
        plain: boolean;
    } & {
        prefixCls?: string;
    }> & import("vue").ShallowUnwrapRef<() => JSX.Element> & {} & {} & import("vue").ComponentCustomProperties;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<{
    prefixCls?: unknown;
    type?: unknown;
    dashed?: unknown;
    orientation?: unknown;
    plain?: unknown;
} & {
    type: "" | "horizontal" | "vertical";
    dashed: boolean;
    orientation: "left" | "right" | "center";
    plain: boolean;
} & {
    prefixCls?: string;
}>, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
    type: "" | "horizontal" | "vertical";
    dashed: boolean;
    orientation: "left" | "right" | "center";
    plain: boolean;
}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("@vue/runtime-core").Plugin;
export default _default;
