import type { Plugin } from 'vue';
import { AnchorProps } from './Anchor';
import AnchorLink, { AnchorLinkProps } from './AnchorLink';
export { AnchorLinkProps, AnchorProps, AnchorLink, AnchorLink as Link };
declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            prefixCls: string;
            onChange: (...args: any[]) => any;
            onClick: (...args: any[]) => any;
            offsetTop: number;
            affix: boolean;
            getContainer: (...args: any[]) => any;
            bounds: number;
            showInkInFixed: boolean;
            wrapperClass: string;
            getCurrentAnchor: (...args: any[]) => any;
            targetOffset: number;
        }> & Omit<Readonly<{
            prefixCls?: unknown;
            offsetTop?: unknown;
            bounds?: unknown;
            affix?: unknown;
            showInkInFixed?: unknown;
            getContainer?: unknown;
            wrapperClass?: unknown;
            wrapperStyle?: unknown;
            getCurrentAnchor?: unknown;
            targetOffset?: unknown;
            onChange?: unknown;
            onClick?: unknown;
        } & {
            prefixCls: string;
            offsetTop: number;
            affix: boolean;
            bounds: number;
            showInkInFixed: boolean;
            wrapperClass: string;
            targetOffset: number;
        } & {
            onChange?: (...args: any[]) => any;
            onClick?: (...args: any[]) => any;
            getContainer?: (...args: any[]) => any;
            wrapperStyle?: import("vue").CSSProperties;
            getCurrentAnchor?: (...args: any[]) => any;
        }> & {
            onChange?: (...args: any[]) => any;
            onClick?: (...args: any[]) => any;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "prefixCls" | "onChange" | "onClick" | "offsetTop" | "affix" | "getContainer" | "bounds" | "showInkInFixed" | "wrapperClass" | "getCurrentAnchor" | "targetOffset">;
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
        $emit: (event: "change" | "click", ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<{
            prefixCls?: unknown;
            offsetTop?: unknown;
            bounds?: unknown;
            affix?: unknown;
            showInkInFixed?: unknown;
            getContainer?: unknown;
            wrapperClass?: unknown;
            wrapperStyle?: unknown;
            getCurrentAnchor?: unknown;
            targetOffset?: unknown;
            onChange?: unknown;
            onClick?: unknown;
        } & {
            prefixCls: string;
            offsetTop: number;
            affix: boolean;
            bounds: number;
            showInkInFixed: boolean;
            wrapperClass: string;
            targetOffset: number;
        } & {
            onChange?: (...args: any[]) => any;
            onClick?: (...args: any[]) => any;
            getContainer?: (...args: any[]) => any;
            wrapperStyle?: import("vue").CSSProperties;
            getCurrentAnchor?: (...args: any[]) => any;
        }> & {
            onChange?: (...args: any[]) => any;
            onClick?: (...args: any[]) => any;
        }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "click")[], string, {
            prefixCls: string;
            onChange: (...args: any[]) => any;
            onClick: (...args: any[]) => any;
            offsetTop: number;
            affix: boolean;
            getContainer: (...args: any[]) => any;
            bounds: number;
            showInkInFixed: boolean;
            wrapperClass: string;
            getCurrentAnchor: (...args: any[]) => any;
            targetOffset: number;
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
        offsetTop?: unknown;
        bounds?: unknown;
        affix?: unknown;
        showInkInFixed?: unknown;
        getContainer?: unknown;
        wrapperClass?: unknown;
        wrapperStyle?: unknown;
        getCurrentAnchor?: unknown;
        targetOffset?: unknown;
        onChange?: unknown;
        onClick?: unknown;
    } & {
        prefixCls: string;
        offsetTop: number;
        affix: boolean;
        bounds: number;
        showInkInFixed: boolean;
        wrapperClass: string;
        targetOffset: number;
    } & {
        onChange?: (...args: any[]) => any;
        onClick?: (...args: any[]) => any;
        getContainer?: (...args: any[]) => any;
        wrapperStyle?: import("vue").CSSProperties;
        getCurrentAnchor?: (...args: any[]) => any;
    }> & {
        onChange?: (...args: any[]) => any;
        onClick?: (...args: any[]) => any;
    } & import("vue").ShallowUnwrapRef<() => JSX.Element> & {} & {} & import("vue").ComponentCustomProperties;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<{
    prefixCls?: unknown;
    offsetTop?: unknown;
    bounds?: unknown;
    affix?: unknown;
    showInkInFixed?: unknown;
    getContainer?: unknown;
    wrapperClass?: unknown;
    wrapperStyle?: unknown;
    getCurrentAnchor?: unknown;
    targetOffset?: unknown;
    onChange?: unknown;
    onClick?: unknown;
} & {
    prefixCls: string;
    offsetTop: number;
    affix: boolean;
    bounds: number;
    showInkInFixed: boolean;
    wrapperClass: string;
    targetOffset: number;
} & {
    onChange?: (...args: any[]) => any;
    onClick?: (...args: any[]) => any;
    getContainer?: (...args: any[]) => any;
    wrapperStyle?: import("vue").CSSProperties;
    getCurrentAnchor?: (...args: any[]) => any;
}> & {
    onChange?: (...args: any[]) => any;
    onClick?: (...args: any[]) => any;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "click")[], "change" | "click", {
    prefixCls: string;
    onChange: (...args: any[]) => any;
    onClick: (...args: any[]) => any;
    offsetTop: number;
    affix: boolean;
    getContainer: (...args: any[]) => any;
    bounds: number;
    showInkInFixed: boolean;
    wrapperClass: string;
    getCurrentAnchor: (...args: any[]) => any;
    targetOffset: number;
}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Plugin & {
    readonly Link: typeof AnchorLink;
};
export default _default;
