import type { ExtractPropTypes } from 'vue';
export declare const pageHeaderProps: {
    backIcon: import("vue-types").VueTypeValidableDef<import("../_util/type").VueNode>;
    prefixCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    title: import("vue-types").VueTypeValidableDef<import("../_util/type").VueNode>;
    subTitle: import("vue-types").VueTypeValidableDef<import("../_util/type").VueNode>;
    breadcrumb: import("vue-types").VueTypeValidableDef<{
        [key: string]: any;
    }> & {
        default: () => {
            [key: string]: any;
        };
    };
    tags: import("vue-types").VueTypeValidableDef<any>;
    footer: import("vue-types").VueTypeValidableDef<import("../_util/type").VueNode>;
    extra: import("vue-types").VueTypeValidableDef<import("../_util/type").VueNode>;
    avatar: import("vue-types").VueTypeValidableDef<{
        [key: string]: any;
    }> & {
        default: () => {
            [key: string]: any;
        };
    };
    ghost: import("vue-types").VueTypeValidableDef<boolean>;
    onBack: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
};
export declare type PageHeaderProps = Partial<ExtractPropTypes<typeof pageHeaderProps>>;
declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            prefixCls: string;
            avatar: {
                [key: string]: any;
            };
            breadcrumb: {
                [key: string]: any;
            };
            onBack: (...args: any[]) => any;
        }> & Omit<Readonly<{
            backIcon?: unknown;
            prefixCls?: unknown;
            title?: unknown;
            subTitle?: unknown;
            breadcrumb?: unknown;
            tags?: unknown;
            footer?: unknown;
            extra?: unknown;
            avatar?: unknown;
            ghost?: unknown;
            onBack?: unknown;
        } & {
            prefixCls: string;
            avatar: {
                [key: string]: any;
            };
            breadcrumb: {
                [key: string]: any;
            };
        } & {
            footer?: import("../_util/type").VueNode;
            title?: import("../_util/type").VueNode;
            tags?: any;
            extra?: import("../_util/type").VueNode;
            ghost?: boolean;
            backIcon?: import("../_util/type").VueNode;
            subTitle?: import("../_util/type").VueNode;
            onBack?: (...args: any[]) => any;
        }> & {
            onBack?: (...args: any[]) => any;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "prefixCls" | "avatar" | "breadcrumb" | "onBack">;
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
        $emit: (event: "back", ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<{
            backIcon?: unknown;
            prefixCls?: unknown;
            title?: unknown;
            subTitle?: unknown;
            breadcrumb?: unknown;
            tags?: unknown;
            footer?: unknown;
            extra?: unknown;
            avatar?: unknown;
            ghost?: unknown;
            onBack?: unknown;
        } & {
            prefixCls: string;
            avatar: {
                [key: string]: any;
            };
            breadcrumb: {
                [key: string]: any;
            };
        } & {
            footer?: import("../_util/type").VueNode;
            title?: import("../_util/type").VueNode;
            tags?: any;
            extra?: import("../_util/type").VueNode;
            ghost?: boolean;
            backIcon?: import("../_util/type").VueNode;
            subTitle?: import("../_util/type").VueNode;
            onBack?: (...args: any[]) => any;
        }> & {
            onBack?: (...args: any[]) => any;
        }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "back"[], string, {
            prefixCls: string;
            avatar: {
                [key: string]: any;
            };
            breadcrumb: {
                [key: string]: any;
            };
            onBack: (...args: any[]) => any;
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
        backIcon?: unknown;
        prefixCls?: unknown;
        title?: unknown;
        subTitle?: unknown;
        breadcrumb?: unknown;
        tags?: unknown;
        footer?: unknown;
        extra?: unknown;
        avatar?: unknown;
        ghost?: unknown;
        onBack?: unknown;
    } & {
        prefixCls: string;
        avatar: {
            [key: string]: any;
        };
        breadcrumb: {
            [key: string]: any;
        };
    } & {
        footer?: import("../_util/type").VueNode;
        title?: import("../_util/type").VueNode;
        tags?: any;
        extra?: import("../_util/type").VueNode;
        ghost?: boolean;
        backIcon?: import("../_util/type").VueNode;
        subTitle?: import("../_util/type").VueNode;
        onBack?: (...args: any[]) => any;
    }> & {
        onBack?: (...args: any[]) => any;
    } & import("vue").ShallowUnwrapRef<() => JSX.Element> & {} & {} & import("vue").ComponentCustomProperties;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<{
    backIcon?: unknown;
    prefixCls?: unknown;
    title?: unknown;
    subTitle?: unknown;
    breadcrumb?: unknown;
    tags?: unknown;
    footer?: unknown;
    extra?: unknown;
    avatar?: unknown;
    ghost?: unknown;
    onBack?: unknown;
} & {
    prefixCls: string;
    avatar: {
        [key: string]: any;
    };
    breadcrumb: {
        [key: string]: any;
    };
} & {
    footer?: import("../_util/type").VueNode;
    title?: import("../_util/type").VueNode;
    tags?: any;
    extra?: import("../_util/type").VueNode;
    ghost?: boolean;
    backIcon?: import("../_util/type").VueNode;
    subTitle?: import("../_util/type").VueNode;
    onBack?: (...args: any[]) => any;
}> & {
    onBack?: (...args: any[]) => any;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "back"[], "back", {
    prefixCls: string;
    avatar: {
        [key: string]: any;
    };
    breadcrumb: {
        [key: string]: any;
    };
    onBack: (...args: any[]) => any;
}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("@vue/runtime-core").Plugin;
export default _default;
