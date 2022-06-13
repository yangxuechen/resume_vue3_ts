import type { ExtractPropTypes } from 'vue';
import type { VueNode } from '../_util/type';
export declare const commentProps: {
    actions: import("vue-types").VueTypeValidableDef<unknown[]> & {
        default: () => unknown[];
    };
    /** The element to display as the comment author. */
    author: import("vue-types").VueTypeValidableDef<VueNode>;
    /** The element to display as the comment avatar - generally an antd Avatar */
    avatar: import("vue-types").VueTypeValidableDef<VueNode>;
    /** The main content of the comment */
    content: import("vue-types").VueTypeValidableDef<VueNode>;
    /** Comment prefix defaults to '.ant-comment' */
    prefixCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    /** A datetime element containing the time to be displayed */
    datetime: import("vue-types").VueTypeValidableDef<VueNode>;
};
export declare type CommentProps = Partial<ExtractPropTypes<typeof commentProps>>;
declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            prefixCls: string;
            actions: unknown[];
        }> & Omit<Readonly<{
            actions?: unknown;
            author?: unknown;
            avatar?: unknown;
            content?: unknown;
            prefixCls?: unknown;
            datetime?: unknown;
        } & {
            prefixCls: string;
            actions: unknown[];
        } & {
            content?: VueNode;
            avatar?: VueNode;
            author?: VueNode;
            datetime?: VueNode;
        }> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "prefixCls" | "actions">;
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
            actions?: unknown;
            author?: unknown;
            avatar?: unknown;
            content?: unknown;
            prefixCls?: unknown;
            datetime?: unknown;
        } & {
            prefixCls: string;
            actions: unknown[];
        } & {
            content?: VueNode;
            avatar?: VueNode;
            author?: VueNode;
            datetime?: VueNode;
        }>, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
            prefixCls: string;
            actions: unknown[];
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
        actions?: unknown;
        author?: unknown;
        avatar?: unknown;
        content?: unknown;
        prefixCls?: unknown;
        datetime?: unknown;
    } & {
        prefixCls: string;
        actions: unknown[];
    } & {
        content?: VueNode;
        avatar?: VueNode;
        author?: VueNode;
        datetime?: VueNode;
    }> & import("vue").ShallowUnwrapRef<() => JSX.Element> & {} & {} & import("vue").ComponentCustomProperties;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<{
    actions?: unknown;
    author?: unknown;
    avatar?: unknown;
    content?: unknown;
    prefixCls?: unknown;
    datetime?: unknown;
} & {
    prefixCls: string;
    actions: unknown[];
} & {
    content?: VueNode;
    avatar?: VueNode;
    author?: VueNode;
    datetime?: VueNode;
}>, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
    prefixCls: string;
    actions: unknown[];
}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("@vue/runtime-core").Plugin;
export default _default;
