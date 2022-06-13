import type { HTMLAttributes, PropType, ExtractPropTypes, Plugin } from 'vue';
import type { LiteralUnion } from '../_util/type';
import CheckableTag from './CheckableTag';
declare const tagProps: {
    prefixCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    color: {
        type: PropType<LiteralUnion<"default" | "blue" | "cyan" | "gold" | "green" | "lime" | "magenta" | "orange" | "pink" | "purple" | "red" | "yellow" | "error" | "success" | "warning" | "processing" | "geekblue" | "volcano", string>>;
    };
    closable: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
    closeIcon: import("vue-types").VueTypeValidableDef<import("../_util/type").VueNode>;
    visible: import("vue-types").VueTypeValidableDef<boolean>;
    onClose: {
        type: PropType<(e: MouseEvent) => void>;
    };
    icon: import("vue-types").VueTypeValidableDef<import("../_util/type").VueNode>;
};
export declare type TagProps = HTMLAttributes & Partial<ExtractPropTypes<typeof tagProps>>;
export { CheckableTag };
declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            prefixCls: string;
            closable: boolean;
        }> & Omit<Readonly<{
            prefixCls?: unknown;
            color?: unknown;
            closable?: unknown;
            closeIcon?: unknown;
            visible?: unknown;
            onClose?: unknown;
            icon?: unknown;
        } & {
            prefixCls: string;
            closable: boolean;
        } & {
            icon?: import("../_util/type").VueNode;
            onClose?: (e: MouseEvent) => void;
            visible?: boolean;
            color?: LiteralUnion<"default" | "blue" | "cyan" | "gold" | "green" | "lime" | "magenta" | "orange" | "pink" | "purple" | "red" | "yellow" | "error" | "success" | "warning" | "processing" | "geekblue" | "volcano", string>;
            closeIcon?: import("../_util/type").VueNode;
        }> & {
            onClose?: (...args: any[]) => any;
            "onUpdate:visible"?: (...args: any[]) => any;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "prefixCls" | "closable">;
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
        $emit: (event: "close" | "update:visible", ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<{
            prefixCls?: unknown;
            color?: unknown;
            closable?: unknown;
            closeIcon?: unknown;
            visible?: unknown;
            onClose?: unknown;
            icon?: unknown;
        } & {
            prefixCls: string;
            closable: boolean;
        } & {
            icon?: import("../_util/type").VueNode;
            onClose?: (e: MouseEvent) => void;
            visible?: boolean;
            color?: LiteralUnion<"default" | "blue" | "cyan" | "gold" | "green" | "lime" | "magenta" | "orange" | "pink" | "purple" | "red" | "yellow" | "error" | "success" | "warning" | "processing" | "geekblue" | "volcano", string>;
            closeIcon?: import("../_util/type").VueNode;
        }> & {
            onClose?: (...args: any[]) => any;
            "onUpdate:visible"?: (...args: any[]) => any;
        }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("close" | "update:visible")[], string, {
            prefixCls: string;
            closable: boolean;
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
        color?: unknown;
        closable?: unknown;
        closeIcon?: unknown;
        visible?: unknown;
        onClose?: unknown;
        icon?: unknown;
    } & {
        prefixCls: string;
        closable: boolean;
    } & {
        icon?: import("../_util/type").VueNode;
        onClose?: (e: MouseEvent) => void;
        visible?: boolean;
        color?: LiteralUnion<"default" | "blue" | "cyan" | "gold" | "green" | "lime" | "magenta" | "orange" | "pink" | "purple" | "red" | "yellow" | "error" | "success" | "warning" | "processing" | "geekblue" | "volcano", string>;
        closeIcon?: import("../_util/type").VueNode;
    }> & {
        onClose?: (...args: any[]) => any;
        "onUpdate:visible"?: (...args: any[]) => any;
    } & import("vue").ShallowUnwrapRef<() => JSX.Element> & {} & {} & import("vue").ComponentCustomProperties;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<{
    prefixCls?: unknown;
    color?: unknown;
    closable?: unknown;
    closeIcon?: unknown;
    visible?: unknown;
    onClose?: unknown;
    icon?: unknown;
} & {
    prefixCls: string;
    closable: boolean;
} & {
    icon?: import("../_util/type").VueNode;
    onClose?: (e: MouseEvent) => void;
    visible?: boolean;
    color?: LiteralUnion<"default" | "blue" | "cyan" | "gold" | "green" | "lime" | "magenta" | "orange" | "pink" | "purple" | "red" | "yellow" | "error" | "success" | "warning" | "processing" | "geekblue" | "volcano", string>;
    closeIcon?: import("../_util/type").VueNode;
}> & {
    onClose?: (...args: any[]) => any;
    "onUpdate:visible"?: (...args: any[]) => any;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("close" | "update:visible")[], "close" | "update:visible", {
    prefixCls: string;
    closable: boolean;
}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Plugin & {
    readonly CheckableTag: typeof CheckableTag;
};
export default _default;
