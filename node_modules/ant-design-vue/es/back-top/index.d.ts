import type { ExtractPropTypes, PropType } from 'vue';
import { nextTick } from 'vue';
export declare const backTopProps: {
    visibilityHeight: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    } & {
        default: number;
    };
    duration: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    } & {
        default: number;
    };
    target: PropType<() => HTMLElement | Window | Document>;
    prefixCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    onClick: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
};
export declare type BackTopProps = Partial<ExtractPropTypes<typeof backTopProps>>;
declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            prefixCls: string;
            onClick: (...args: any[]) => any;
            duration: number;
            visibilityHeight: number;
        }> & Omit<Readonly<{
            visibilityHeight?: unknown;
            duration?: unknown;
            target?: unknown;
            prefixCls?: unknown;
            onClick?: unknown;
        } & {
            prefixCls: string;
            duration: number;
            visibilityHeight: number;
        } & {
            onClick?: (...args: any[]) => any;
            target?: () => Window | HTMLElement | Document;
        }> & {
            onClick?: (...args: any[]) => any;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "prefixCls" | "onClick" | "duration" | "visibilityHeight">;
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
        $emit: (event: "click", ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<{
            visibilityHeight?: unknown;
            duration?: unknown;
            target?: unknown;
            prefixCls?: unknown;
            onClick?: unknown;
        } & {
            prefixCls: string;
            duration: number;
            visibilityHeight: number;
        } & {
            onClick?: (...args: any[]) => any;
            target?: () => Window | HTMLElement | Document;
        }> & {
            onClick?: (...args: any[]) => any;
        }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "click"[], string, {
            prefixCls: string;
            onClick: (...args: any[]) => any;
            duration: number;
            visibilityHeight: number;
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
        $nextTick: typeof nextTick;
        $watch(source: string | Function, cb: Function, options?: import("vue").WatchOptions<boolean>): import("vue").WatchStopHandle;
    } & Readonly<{
        visibilityHeight?: unknown;
        duration?: unknown;
        target?: unknown;
        prefixCls?: unknown;
        onClick?: unknown;
    } & {
        prefixCls: string;
        duration: number;
        visibilityHeight: number;
    } & {
        onClick?: (...args: any[]) => any;
        target?: () => Window | HTMLElement | Document;
    }> & {
        onClick?: (...args: any[]) => any;
    } & import("vue").ShallowUnwrapRef<() => JSX.Element> & {} & {} & import("vue").ComponentCustomProperties;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<{
    visibilityHeight?: unknown;
    duration?: unknown;
    target?: unknown;
    prefixCls?: unknown;
    onClick?: unknown;
} & {
    prefixCls: string;
    duration: number;
    visibilityHeight: number;
} & {
    onClick?: (...args: any[]) => any;
    target?: () => Window | HTMLElement | Document;
}> & {
    onClick?: (...args: any[]) => any;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "click"[], "click", {
    prefixCls: string;
    onClick: (...args: any[]) => any;
    duration: number;
    visibilityHeight: number;
}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("@vue/runtime-core").Plugin;
export default _default;
