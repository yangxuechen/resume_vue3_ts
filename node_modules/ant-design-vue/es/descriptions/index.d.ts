import type { Ref, PropType, VNode, HTMLAttributes, ExtractPropTypes, Plugin, CSSProperties, InjectionKey } from 'vue';
import type { Breakpoint } from '../_util/responsiveObserve';
export declare const DescriptionsItemProps: {
    prefixCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    label: import("vue-types").VueTypeValidableDef<any>;
    span: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
};
declare const descriptionsItemProp: {
    prefixCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    label: import("vue-types").VueTypeValidableDef<import("../_util/type").VueNode>;
    labelStyle: import("vue-types").VueTypeValidableDef<CSSProperties>;
    contentStyle: import("vue-types").VueTypeValidableDef<CSSProperties>;
    span: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    } & {
        default: number;
    };
};
export declare type DescriptionsItemProp = Partial<ExtractPropTypes<typeof descriptionsItemProp>>;
export declare const DescriptionsItem: import("vue").DefineComponent<{
    prefixCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    label: import("vue-types").VueTypeValidableDef<import("../_util/type").VueNode>;
    labelStyle: import("vue-types").VueTypeValidableDef<CSSProperties>;
    contentStyle: import("vue-types").VueTypeValidableDef<CSSProperties>;
    span: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    } & {
        default: number;
    };
}, () => VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>[], unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    prefixCls?: unknown;
    label?: unknown;
    labelStyle?: unknown;
    contentStyle?: unknown;
    span?: unknown;
} & {
    prefixCls: string;
    span: number;
} & {
    label?: import("../_util/type").VueNode;
    labelStyle?: CSSProperties;
    contentStyle?: CSSProperties;
}>, {
    prefixCls: string;
    span: number;
}>;
declare const descriptionsProps: {
    prefixCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    bordered: import("vue-types").VueTypeValidableDef<boolean>;
    size: import("vue-types").VueTypeDef<"default" | "small" | "middle"> & {
        default: "default" | "small" | "middle";
    };
    title: import("vue-types").VueTypeValidableDef<import("../_util/type").VueNode>;
    extra: import("vue-types").VueTypeValidableDef<import("../_util/type").VueNode>;
    column: {
        type: PropType<number | Partial<Record<Breakpoint, number>>>;
        default: () => number | Partial<Record<Breakpoint, number>>;
    };
    layout: import("vue-types").VueTypeDef<"horizontal" | "vertical">;
    colon: import("vue-types").VueTypeValidableDef<boolean>;
    labelStyle: import("vue-types").VueTypeValidableDef<CSSProperties>;
    contentStyle: import("vue-types").VueTypeValidableDef<CSSProperties>;
};
export declare type DescriptionsProps = HTMLAttributes & Partial<ExtractPropTypes<typeof descriptionsProps>>;
export interface DescriptionsContextProp {
    labelStyle?: Ref<CSSProperties>;
    contentStyle?: Ref<CSSProperties>;
}
export declare const descriptionsContext: InjectionKey<DescriptionsContextProp>;
declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            prefixCls: string;
            column: number | Partial<Record<Breakpoint, number>>;
            size: "default" | "small" | "middle";
        }> & Omit<Readonly<{
            prefixCls?: unknown;
            bordered?: unknown;
            size?: unknown;
            title?: unknown;
            extra?: unknown;
            column?: unknown;
            layout?: unknown;
            colon?: unknown;
            labelStyle?: unknown;
            contentStyle?: unknown;
        } & {
            prefixCls: string;
            column: number | Partial<Record<Breakpoint, number>>;
            size: "default" | "small" | "middle";
        } & {
            title?: import("../_util/type").VueNode;
            layout?: "horizontal" | "vertical";
            colon?: boolean;
            extra?: import("../_util/type").VueNode;
            bordered?: boolean;
            labelStyle?: CSSProperties;
            contentStyle?: CSSProperties;
        }> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "prefixCls" | "column" | "size">;
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
            bordered?: unknown;
            size?: unknown;
            title?: unknown;
            extra?: unknown;
            column?: unknown;
            layout?: unknown;
            colon?: unknown;
            labelStyle?: unknown;
            contentStyle?: unknown;
        } & {
            prefixCls: string;
            column: number | Partial<Record<Breakpoint, number>>;
            size: "default" | "small" | "middle";
        } & {
            title?: import("../_util/type").VueNode;
            layout?: "horizontal" | "vertical";
            colon?: boolean;
            extra?: import("../_util/type").VueNode;
            bordered?: boolean;
            labelStyle?: CSSProperties;
            contentStyle?: CSSProperties;
        }>, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
            prefixCls: string;
            column: number | Partial<Record<Breakpoint, number>>;
            size: "default" | "small" | "middle";
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
        bordered?: unknown;
        size?: unknown;
        title?: unknown;
        extra?: unknown;
        column?: unknown;
        layout?: unknown;
        colon?: unknown;
        labelStyle?: unknown;
        contentStyle?: unknown;
    } & {
        prefixCls: string;
        column: number | Partial<Record<Breakpoint, number>>;
        size: "default" | "small" | "middle";
    } & {
        title?: import("../_util/type").VueNode;
        layout?: "horizontal" | "vertical";
        colon?: boolean;
        extra?: import("../_util/type").VueNode;
        bordered?: boolean;
        labelStyle?: CSSProperties;
        contentStyle?: CSSProperties;
    }> & import("vue").ShallowUnwrapRef<() => JSX.Element> & {} & {} & import("vue").ComponentCustomProperties;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<{
    prefixCls?: unknown;
    bordered?: unknown;
    size?: unknown;
    title?: unknown;
    extra?: unknown;
    column?: unknown;
    layout?: unknown;
    colon?: unknown;
    labelStyle?: unknown;
    contentStyle?: unknown;
} & {
    prefixCls: string;
    column: number | Partial<Record<Breakpoint, number>>;
    size: "default" | "small" | "middle";
} & {
    title?: import("../_util/type").VueNode;
    layout?: "horizontal" | "vertical";
    colon?: boolean;
    extra?: import("../_util/type").VueNode;
    bordered?: boolean;
    labelStyle?: CSSProperties;
    contentStyle?: CSSProperties;
}>, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
    prefixCls: string;
    column: number | Partial<Record<Breakpoint, number>>;
    size: "default" | "small" | "middle";
}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Plugin & {
    readonly Item: typeof DescriptionsItem;
};
export default _default;
