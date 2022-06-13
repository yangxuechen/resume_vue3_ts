import type { PropType, ExtractPropTypes } from 'vue';
import type { SizeType } from '../config-provider';
export declare type SpaceSize = SizeType | number;
declare const spaceProps: {
    prefixCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    size: {
        type: PropType<SpaceSize | [SpaceSize, SpaceSize]>;
    };
    direction: import("vue-types").VueTypeDef<"horizontal" | "vertical"> & {
        default: "horizontal" | "vertical";
    };
    align: import("vue-types").VueTypeDef<"center" | "end" | "start" | "baseline">;
    wrap: import("vue-types").VueTypeValidableDef<boolean>;
};
export declare type SpaceProps = Partial<ExtractPropTypes<typeof spaceProps>>;
declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            prefixCls: string;
            direction: "horizontal" | "vertical";
        }> & Omit<Readonly<{
            prefixCls?: unknown;
            size?: unknown;
            direction?: unknown;
            align?: unknown;
            wrap?: unknown;
        } & {
            prefixCls: string;
            direction: "horizontal" | "vertical";
        } & {
            size?: SpaceSize | [SpaceSize, SpaceSize];
            wrap?: boolean;
            align?: "center" | "end" | "start" | "baseline";
        }> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "prefixCls" | "direction">;
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
            size?: unknown;
            direction?: unknown;
            align?: unknown;
            wrap?: unknown;
        } & {
            prefixCls: string;
            direction: "horizontal" | "vertical";
        } & {
            size?: SpaceSize | [SpaceSize, SpaceSize];
            wrap?: boolean;
            align?: "center" | "end" | "start" | "baseline";
        }>, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
            prefixCls: string;
            direction: "horizontal" | "vertical";
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
        size?: unknown;
        direction?: unknown;
        align?: unknown;
        wrap?: unknown;
    } & {
        prefixCls: string;
        direction: "horizontal" | "vertical";
    } & {
        size?: SpaceSize | [SpaceSize, SpaceSize];
        wrap?: boolean;
        align?: "center" | "end" | "start" | "baseline";
    }> & import("vue").ShallowUnwrapRef<() => JSX.Element> & {} & {} & import("vue").ComponentCustomProperties;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<{
    prefixCls?: unknown;
    size?: unknown;
    direction?: unknown;
    align?: unknown;
    wrap?: unknown;
} & {
    prefixCls: string;
    direction: "horizontal" | "vertical";
} & {
    size?: SpaceSize | [SpaceSize, SpaceSize];
    wrap?: boolean;
    align?: "center" | "end" | "start" | "baseline";
}>, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
    prefixCls: string;
    direction: "horizontal" | "vertical";
}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("@vue/runtime-core").Plugin;
export default _default;
