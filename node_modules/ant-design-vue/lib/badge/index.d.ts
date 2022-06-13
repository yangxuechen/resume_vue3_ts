import type { Plugin } from 'vue';
import Ribbon from './Ribbon';
export type { BadgeProps } from './Badge';
export { Ribbon as BadgeRibbon };
declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            prefixCls: string;
            title: string;
            color: string;
            size: "default" | "small";
            overflowCount: number;
            scrollNumberPrefixCls: string;
        }> & Omit<Readonly<{
            count?: unknown;
            showZero?: unknown;
            overflowCount?: unknown;
            dot?: unknown;
            prefixCls?: unknown;
            scrollNumberPrefixCls?: unknown;
            status?: unknown;
            size?: unknown;
            color?: unknown;
            text?: unknown;
            offset?: unknown;
            numberStyle?: unknown;
            title?: unknown;
        } & {
            prefixCls: string;
            title: string;
            color: string;
            size: "default" | "small";
            overflowCount: number;
            scrollNumberPrefixCls: string;
        } & {
            text?: import("../_util/type").VueNode;
            dot?: boolean;
            offset?: (string | number)[];
            count?: any;
            status?: "default" | "error" | "success" | "warning" | "processing";
            showZero?: boolean;
            numberStyle?: import("vue").CSSProperties;
        }> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "prefixCls" | "title" | "color" | "size" | "overflowCount" | "scrollNumberPrefixCls">;
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
            count?: unknown;
            showZero?: unknown;
            overflowCount?: unknown;
            dot?: unknown;
            prefixCls?: unknown;
            scrollNumberPrefixCls?: unknown;
            status?: unknown;
            size?: unknown;
            color?: unknown;
            text?: unknown;
            offset?: unknown;
            numberStyle?: unknown;
            title?: unknown;
        } & {
            prefixCls: string;
            title: string;
            color: string;
            size: "default" | "small";
            overflowCount: number;
            scrollNumberPrefixCls: string;
        } & {
            text?: import("../_util/type").VueNode;
            dot?: boolean;
            offset?: (string | number)[];
            count?: any;
            status?: "default" | "error" | "success" | "warning" | "processing";
            showZero?: boolean;
            numberStyle?: import("vue").CSSProperties;
        }>, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
            prefixCls: string;
            title: string;
            color: string;
            size: "default" | "small";
            overflowCount: number;
            scrollNumberPrefixCls: string;
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
        count?: unknown;
        showZero?: unknown;
        overflowCount?: unknown;
        dot?: unknown;
        prefixCls?: unknown;
        scrollNumberPrefixCls?: unknown;
        status?: unknown;
        size?: unknown;
        color?: unknown;
        text?: unknown;
        offset?: unknown;
        numberStyle?: unknown;
        title?: unknown;
    } & {
        prefixCls: string;
        title: string;
        color: string;
        size: "default" | "small";
        overflowCount: number;
        scrollNumberPrefixCls: string;
    } & {
        text?: import("../_util/type").VueNode;
        dot?: boolean;
        offset?: (string | number)[];
        count?: any;
        status?: "default" | "error" | "success" | "warning" | "processing";
        showZero?: boolean;
        numberStyle?: import("vue").CSSProperties;
    }> & import("vue").ShallowUnwrapRef<() => JSX.Element> & {} & {} & import("vue").ComponentCustomProperties;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<{
    count?: unknown;
    showZero?: unknown;
    overflowCount?: unknown;
    dot?: unknown;
    prefixCls?: unknown;
    scrollNumberPrefixCls?: unknown;
    status?: unknown;
    size?: unknown;
    color?: unknown;
    text?: unknown;
    offset?: unknown;
    numberStyle?: unknown;
    title?: unknown;
} & {
    prefixCls: string;
    title: string;
    color: string;
    size: "default" | "small";
    overflowCount: number;
    scrollNumberPrefixCls: string;
} & {
    text?: import("../_util/type").VueNode;
    dot?: boolean;
    offset?: (string | number)[];
    count?: any;
    status?: "default" | "error" | "success" | "warning" | "processing";
    showZero?: boolean;
    numberStyle?: import("vue").CSSProperties;
}>, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
    prefixCls: string;
    title: string;
    color: string;
    size: "default" | "small";
    overflowCount: number;
    scrollNumberPrefixCls: string;
}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Plugin & {
    readonly Ribbon: typeof Ribbon;
};
export default _default;
