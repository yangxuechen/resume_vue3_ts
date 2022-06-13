import type { Plugin } from 'vue';
import Sider from './Sider';
export { BasicProps as LayoutProps } from './layout';
export { SiderProps } from './Sider';
export declare const LayoutHeader: import("vue").DefineComponent<{
    prefixCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    hasSider: import("vue-types").VueTypeValidableDef<boolean>;
    tagName: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    prefixCls?: unknown;
    hasSider?: unknown;
    tagName?: unknown;
} & {
    prefixCls: string;
    tagName: string;
} & {
    hasSider?: boolean;
}>, {
    prefixCls: string;
    tagName: string;
}>;
export declare const LayoutFooter: import("vue").DefineComponent<{
    prefixCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    hasSider: import("vue-types").VueTypeValidableDef<boolean>;
    tagName: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    prefixCls?: unknown;
    hasSider?: unknown;
    tagName?: unknown;
} & {
    prefixCls: string;
    tagName: string;
} & {
    hasSider?: boolean;
}>, {
    prefixCls: string;
    tagName: string;
}>;
export declare const LayoutSider: any;
export declare const LayoutContent: import("vue").DefineComponent<{
    prefixCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    hasSider: import("vue-types").VueTypeValidableDef<boolean>;
    tagName: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    prefixCls?: unknown;
    hasSider?: unknown;
    tagName?: unknown;
} & {
    prefixCls: string;
    tagName: string;
} & {
    hasSider?: boolean;
}>, {
    prefixCls: string;
    tagName: string;
}>;
declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            prefixCls: string;
            tagName: string;
        }> & Omit<Readonly<{
            prefixCls?: unknown;
            hasSider?: unknown;
            tagName?: unknown;
        } & {
            prefixCls: string;
            tagName: string;
        } & {
            hasSider?: boolean;
        }> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "prefixCls" | "tagName">;
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
            hasSider?: unknown;
            tagName?: unknown;
        } & {
            prefixCls: string;
            tagName: string;
        } & {
            hasSider?: boolean;
        }>, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
            prefixCls: string;
            tagName: string;
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
        hasSider?: unknown;
        tagName?: unknown;
    } & {
        prefixCls: string;
        tagName: string;
    } & {
        hasSider?: boolean;
    }> & import("vue").ShallowUnwrapRef<() => JSX.Element> & {} & {} & import("vue").ComponentCustomProperties;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<{
    prefixCls?: unknown;
    hasSider?: unknown;
    tagName?: unknown;
} & {
    prefixCls: string;
    tagName: string;
} & {
    hasSider?: boolean;
}>, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
    prefixCls: string;
    tagName: string;
}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & {
    readonly Header: import("vue").DefineComponent<{
        prefixCls: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        };
        hasSider: import("vue-types").VueTypeValidableDef<boolean>;
        tagName: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        };
    }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
        prefixCls?: unknown;
        hasSider?: unknown;
        tagName?: unknown;
    } & {
        prefixCls: string;
        tagName: string;
    } & {
        hasSider?: boolean;
    }>, {
        prefixCls: string;
        tagName: string;
    }>;
    readonly Footer: import("vue").DefineComponent<{
        prefixCls: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        };
        hasSider: import("vue-types").VueTypeValidableDef<boolean>;
        tagName: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        };
    }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
        prefixCls?: unknown;
        hasSider?: unknown;
        tagName?: unknown;
    } & {
        prefixCls: string;
        tagName: string;
    } & {
        hasSider?: boolean;
    }>, {
        prefixCls: string;
        tagName: string;
    }>;
    readonly Content: import("vue").DefineComponent<{
        prefixCls: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        };
        hasSider: import("vue-types").VueTypeValidableDef<boolean>;
        tagName: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        };
    }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
        prefixCls?: unknown;
        hasSider?: unknown;
        tagName?: unknown;
    } & {
        prefixCls: string;
        tagName: string;
    } & {
        hasSider?: boolean;
    }>, {
        prefixCls: string;
        tagName: string;
    }>;
} & Plugin & {
    readonly Sider: typeof Sider;
};
export default _default;
