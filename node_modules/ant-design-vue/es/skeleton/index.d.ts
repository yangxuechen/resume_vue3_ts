import type { Plugin } from 'vue';
import SkeletonButton from './Button';
import SkeletonInput from './Input';
import SkeletonImage from './Image';
import SkeletonAvatar from './Avatar';
export { SkeletonProps, skeletonProps } from './Skeleton';
export { SkeletonButton, SkeletonAvatar, SkeletonInput, SkeletonImage };
declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{} | {
            [x: string]: any;
        }> & Omit<(Readonly<{
            [x: string]: any;
        }> | Readonly<{
            [x: string]: unknown;
        } & {
            [x: string]: any;
        } & {
            [x: number]: any;
        }>) & (import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<{
            [x: string]: any;
        } | ({
            [x: string]: unknown;
        } & {
            [x: string]: any;
        } & {
            [x: number]: any;
        })>), never>;
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
            [x: string]: any;
        }> | Readonly<{
            [x: string]: unknown;
        } & {
            [x: string]: any;
        } & {
            [x: number]: any;
        }>, () => JSX.Element | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[], unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {} | {
            [x: string]: any;
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
    } & (Readonly<{
        [x: string]: any;
    }> | Readonly<{
        [x: string]: unknown;
    } & {
        [x: string]: any;
    } & {
        [x: number]: any;
    }>) & import("vue").ShallowUnwrapRef<() => JSX.Element | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[]> & {} & {} & import("vue").ComponentCustomProperties & Readonly<{
        [x: string]: any;
    } | ({
        [x: string]: unknown;
    } & {
        [x: string]: any;
    } & {
        [x: number]: any;
    })>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<{
    [x: string]: any;
}> | Readonly<{
    [x: string]: unknown;
} & {
    [x: string]: any;
} & {
    [x: number]: any;
}>, () => JSX.Element | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>[], unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {} | {
    [x: string]: any;
}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Plugin & {
    readonly Button: typeof SkeletonButton;
    readonly Avatar: typeof SkeletonAvatar;
    readonly Input: typeof SkeletonInput;
    readonly Image: typeof SkeletonImage;
};
export default _default;
