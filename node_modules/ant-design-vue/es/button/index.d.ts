import type { Plugin } from 'vue';
import ButtonGroup from './button-group';
import type { ButtonProps, ButtonShape, ButtonType } from './buttonTypes';
import type { ButtonGroupProps } from './button-group';
import type { SizeType as ButtonSize } from '../config-provider';
export type { ButtonProps, ButtonShape, ButtonType, ButtonGroupProps, ButtonSize };
export { ButtonGroup };
declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            prefixCls: string;
            title: string;
            target: string;
            loading: boolean | {
                delay?: number;
            };
            href: string;
            htmlType: "reset" | "button" | "submit";
        }> & Omit<Readonly<{
            prefixCls?: unknown;
            type?: unknown;
            htmlType?: unknown;
            shape?: unknown;
            size?: unknown;
            loading?: unknown;
            disabled?: unknown;
            ghost?: unknown;
            block?: unknown;
            danger?: unknown;
            icon?: unknown;
            href?: unknown;
            target?: unknown;
            title?: unknown;
            onClick?: unknown;
        } & {
            prefixCls: string;
            title: string;
            target: string;
            loading: boolean | {
                delay?: number;
            };
            href: string;
            htmlType: "reset" | "button" | "submit";
        } & {
            icon?: import("../_util/type").VueNode;
            type?: "default" | "link" | "text" | "dashed" | "ghost" | "primary";
            onClick?: (event: MouseEvent) => void;
            size?: ButtonSize;
            block?: boolean;
            disabled?: boolean;
            ghost?: boolean;
            danger?: boolean;
            shape?: "circle" | "round";
        }> & {
            onClick?: (...args: any[]) => any;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "prefixCls" | "title" | "target" | "loading" | "href" | "htmlType">;
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
            prefixCls?: unknown;
            type?: unknown;
            htmlType?: unknown;
            shape?: unknown;
            size?: unknown;
            loading?: unknown;
            disabled?: unknown;
            ghost?: unknown;
            block?: unknown;
            danger?: unknown;
            icon?: unknown;
            href?: unknown;
            target?: unknown;
            title?: unknown;
            onClick?: unknown;
        } & {
            prefixCls: string;
            title: string;
            target: string;
            loading: boolean | {
                delay?: number;
            };
            href: string;
            htmlType: "reset" | "button" | "submit";
        } & {
            icon?: import("../_util/type").VueNode;
            type?: "default" | "link" | "text" | "dashed" | "ghost" | "primary";
            onClick?: (event: MouseEvent) => void;
            size?: ButtonSize;
            block?: boolean;
            disabled?: boolean;
            ghost?: boolean;
            danger?: boolean;
            shape?: "circle" | "round";
        }> & {
            onClick?: (...args: any[]) => any;
        }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "click"[], string, {
            prefixCls: string;
            title: string;
            target: string;
            loading: boolean | {
                delay?: number;
            };
            href: string;
            htmlType: "reset" | "button" | "submit";
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
        htmlType?: unknown;
        shape?: unknown;
        size?: unknown;
        loading?: unknown;
        disabled?: unknown;
        ghost?: unknown;
        block?: unknown;
        danger?: unknown;
        icon?: unknown;
        href?: unknown;
        target?: unknown;
        title?: unknown;
        onClick?: unknown;
    } & {
        prefixCls: string;
        title: string;
        target: string;
        loading: boolean | {
            delay?: number;
        };
        href: string;
        htmlType: "reset" | "button" | "submit";
    } & {
        icon?: import("../_util/type").VueNode;
        type?: "default" | "link" | "text" | "dashed" | "ghost" | "primary";
        onClick?: (event: MouseEvent) => void;
        size?: ButtonSize;
        block?: boolean;
        disabled?: boolean;
        ghost?: boolean;
        danger?: boolean;
        shape?: "circle" | "round";
    }> & {
        onClick?: (...args: any[]) => any;
    } & import("vue").ShallowUnwrapRef<() => JSX.Element> & {} & {} & import("vue").ComponentCustomProperties;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<{
    prefixCls?: unknown;
    type?: unknown;
    htmlType?: unknown;
    shape?: unknown;
    size?: unknown;
    loading?: unknown;
    disabled?: unknown;
    ghost?: unknown;
    block?: unknown;
    danger?: unknown;
    icon?: unknown;
    href?: unknown;
    target?: unknown;
    title?: unknown;
    onClick?: unknown;
} & {
    prefixCls: string;
    title: string;
    target: string;
    loading: boolean | {
        delay?: number;
    };
    href: string;
    htmlType: "reset" | "button" | "submit";
} & {
    icon?: import("../_util/type").VueNode;
    type?: "default" | "link" | "text" | "dashed" | "ghost" | "primary";
    onClick?: (event: MouseEvent) => void;
    size?: ButtonSize;
    block?: boolean;
    disabled?: boolean;
    ghost?: boolean;
    danger?: boolean;
    shape?: "circle" | "round";
}> & {
    onClick?: (...args: any[]) => any;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "click"[], "click", {
    prefixCls: string;
    title: string;
    target: string;
    loading: boolean | {
        delay?: number;
    };
    href: string;
    htmlType: "reset" | "button" | "submit";
}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Plugin & {
    readonly Group: typeof ButtonGroup;
};
export default _default;
