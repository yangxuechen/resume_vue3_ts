import type { Plugin } from 'vue';
import Countdown from './Countdown';
export type { StatisticProps } from './Statistic';
export declare const StatisticCountdown: any;
declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            format: string;
            prefixCls: string;
            onFinish: (...args: any[]) => any;
            decimalSeparator: string;
            precision: number;
            groupSeparator: string;
        }> & Omit<Readonly<{
            prefixCls?: unknown;
            decimalSeparator?: unknown;
            groupSeparator?: unknown;
            format?: unknown;
            value?: unknown;
            valueStyle?: unknown;
            valueRender?: unknown;
            formatter?: unknown;
            precision?: unknown;
            prefix?: unknown;
            suffix?: unknown;
            title?: unknown;
            onFinish?: unknown;
            loading?: unknown;
        } & {
            format: string;
            prefixCls: string;
            decimalSeparator: string;
            precision: number;
            groupSeparator: string;
        } & {
            value?: import("./utils").countdownValueType;
            title?: import("../_util/type").VueNode;
            suffix?: import("../_util/type").VueNode;
            loading?: boolean;
            onFinish?: (...args: any[]) => any;
            prefix?: import("../_util/type").VueNode;
            formatter?: any;
            valueStyle?: import("vue").CSSProperties;
            valueRender?: any;
        }> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "format" | "prefixCls" | "onFinish" | "decimalSeparator" | "precision" | "groupSeparator">;
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
            decimalSeparator?: unknown;
            groupSeparator?: unknown;
            format?: unknown;
            value?: unknown;
            valueStyle?: unknown;
            valueRender?: unknown;
            formatter?: unknown;
            precision?: unknown;
            prefix?: unknown;
            suffix?: unknown;
            title?: unknown;
            onFinish?: unknown;
            loading?: unknown;
        } & {
            format: string;
            prefixCls: string;
            decimalSeparator: string;
            precision: number;
            groupSeparator: string;
        } & {
            value?: import("./utils").countdownValueType;
            title?: import("../_util/type").VueNode;
            suffix?: import("../_util/type").VueNode;
            loading?: boolean;
            onFinish?: (...args: any[]) => any;
            prefix?: import("../_util/type").VueNode;
            formatter?: any;
            valueStyle?: import("vue").CSSProperties;
            valueRender?: any;
        }>, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
            format: string;
            prefixCls: string;
            onFinish: (...args: any[]) => any;
            decimalSeparator: string;
            precision: number;
            groupSeparator: string;
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
        decimalSeparator?: unknown;
        groupSeparator?: unknown;
        format?: unknown;
        value?: unknown;
        valueStyle?: unknown;
        valueRender?: unknown;
        formatter?: unknown;
        precision?: unknown;
        prefix?: unknown;
        suffix?: unknown;
        title?: unknown;
        onFinish?: unknown;
        loading?: unknown;
    } & {
        format: string;
        prefixCls: string;
        decimalSeparator: string;
        precision: number;
        groupSeparator: string;
    } & {
        value?: import("./utils").countdownValueType;
        title?: import("../_util/type").VueNode;
        suffix?: import("../_util/type").VueNode;
        loading?: boolean;
        onFinish?: (...args: any[]) => any;
        prefix?: import("../_util/type").VueNode;
        formatter?: any;
        valueStyle?: import("vue").CSSProperties;
        valueRender?: any;
    }> & import("vue").ShallowUnwrapRef<() => JSX.Element> & {} & {} & import("vue").ComponentCustomProperties;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<{
    prefixCls?: unknown;
    decimalSeparator?: unknown;
    groupSeparator?: unknown;
    format?: unknown;
    value?: unknown;
    valueStyle?: unknown;
    valueRender?: unknown;
    formatter?: unknown;
    precision?: unknown;
    prefix?: unknown;
    suffix?: unknown;
    title?: unknown;
    onFinish?: unknown;
    loading?: unknown;
} & {
    format: string;
    prefixCls: string;
    decimalSeparator: string;
    precision: number;
    groupSeparator: string;
} & {
    value?: import("./utils").countdownValueType;
    title?: import("../_util/type").VueNode;
    suffix?: import("../_util/type").VueNode;
    loading?: boolean;
    onFinish?: (...args: any[]) => any;
    prefix?: import("../_util/type").VueNode;
    formatter?: any;
    valueStyle?: import("vue").CSSProperties;
    valueRender?: any;
}>, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
    format: string;
    prefixCls: string;
    onFinish: (...args: any[]) => any;
    decimalSeparator: string;
    precision: number;
    groupSeparator: string;
}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Plugin & {
    readonly Countdown: typeof Countdown;
};
export default _default;
