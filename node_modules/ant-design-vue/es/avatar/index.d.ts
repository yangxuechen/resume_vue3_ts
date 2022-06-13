import type { Plugin } from 'vue';
import Group from './Group';
export { AvatarProps, AvatarSize, avatarProps } from './Avatar';
export { AvatarGroupProps } from './Group';
export { Group as AvatarGroup };
declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            prefixCls: string;
            size: import("./Avatar").AvatarSize;
            shape: "circle" | "square";
            src: string;
            srcset: string;
            alt: string;
            gap: number;
            draggable: boolean;
        }> & Omit<Readonly<{
            prefixCls?: unknown;
            shape?: unknown;
            size?: unknown;
            src?: unknown;
            srcset?: unknown;
            icon?: unknown;
            alt?: unknown;
            gap?: unknown;
            draggable?: unknown;
            loadError?: unknown;
        } & {
            prefixCls: string;
            size: import("./Avatar").AvatarSize;
            shape: "circle" | "square";
            src: string;
            srcset: string;
            alt: string;
            gap: number;
            draggable: boolean;
        } & {
            icon?: import("../_util/type").VueNode;
            loadError?: () => boolean;
        }> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "prefixCls" | "size" | "shape" | "src" | "srcset" | "alt" | "gap" | "draggable">;
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
            shape?: unknown;
            size?: unknown;
            src?: unknown;
            srcset?: unknown;
            icon?: unknown;
            alt?: unknown;
            gap?: unknown;
            draggable?: unknown;
            loadError?: unknown;
        } & {
            prefixCls: string;
            size: import("./Avatar").AvatarSize;
            shape: "circle" | "square";
            src: string;
            srcset: string;
            alt: string;
            gap: number;
            draggable: boolean;
        } & {
            icon?: import("../_util/type").VueNode;
            loadError?: () => boolean;
        }>, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
            prefixCls: string;
            size: import("./Avatar").AvatarSize;
            shape: "circle" | "square";
            src: string;
            srcset: string;
            alt: string;
            gap: number;
            draggable: boolean;
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
        shape?: unknown;
        size?: unknown;
        src?: unknown;
        srcset?: unknown;
        icon?: unknown;
        alt?: unknown;
        gap?: unknown;
        draggable?: unknown;
        loadError?: unknown;
    } & {
        prefixCls: string;
        size: import("./Avatar").AvatarSize;
        shape: "circle" | "square";
        src: string;
        srcset: string;
        alt: string;
        gap: number;
        draggable: boolean;
    } & {
        icon?: import("../_util/type").VueNode;
        loadError?: () => boolean;
    }> & import("vue").ShallowUnwrapRef<() => JSX.Element> & {} & {} & import("vue").ComponentCustomProperties;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<{
    prefixCls?: unknown;
    shape?: unknown;
    size?: unknown;
    src?: unknown;
    srcset?: unknown;
    icon?: unknown;
    alt?: unknown;
    gap?: unknown;
    draggable?: unknown;
    loadError?: unknown;
} & {
    prefixCls: string;
    size: import("./Avatar").AvatarSize;
    shape: "circle" | "square";
    src: string;
    srcset: string;
    alt: string;
    gap: number;
    draggable: boolean;
} & {
    icon?: import("../_util/type").VueNode;
    loadError?: () => boolean;
}>, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
    prefixCls: string;
    size: import("./Avatar").AvatarSize;
    shape: "circle" | "square";
    src: string;
    srcset: string;
    alt: string;
    gap: number;
    draggable: boolean;
}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Plugin & {
    readonly Group: typeof Group;
};
export default _default;
