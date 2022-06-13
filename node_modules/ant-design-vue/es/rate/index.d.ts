import type { ExtractPropTypes } from 'vue';
export declare const rateProps: {
    prefixCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    count: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
    value: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
    allowHalf: import("vue-types").VueTypeValidableDef<boolean>;
    allowClear: import("vue-types").VueTypeValidableDef<boolean>;
    tooltips: import("vue-types").VueTypeDef<string[]>;
    disabled: import("vue-types").VueTypeValidableDef<boolean>;
    character: import("vue-types").VueTypeValidableDef<any>;
    autofocus: import("vue-types").VueTypeValidableDef<boolean>;
    tabindex: import("vue-types").VueTypeDef<string | number>;
    direction: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
};
export declare type RateProps = Partial<ExtractPropTypes<typeof rateProps>>;
declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{} | {
            [x: string]: any;
        }> & Omit<({} & (Readonly<{
            [x: string]: any;
        } | ({
            [x: string]: unknown;
        } & {
            [x: string]: any;
        } & {
            [x: number]: any;
        })> & {
            onFocus?: (...args: any[]) => any;
            onBlur?: (...args: any[]) => any;
            onChange?: (...args: any[]) => any;
            onKeydown?: (...args: any[]) => any;
            "onUpdate:value"?: (...args: any[]) => any;
            onHoverChange?: (...args: any[]) => any;
        })) & (import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<{
            [x: string]: any;
        } | ({
            [x: string]: unknown;
        } & {
            [x: string]: any;
        } & {
            [x: number]: any;
        })> & {
            onFocus?: (...args: any[]) => any;
            onBlur?: (...args: any[]) => any;
            onChange?: (...args: any[]) => any;
            onKeydown?: (...args: any[]) => any;
            "onUpdate:value"?: (...args: any[]) => any;
            onHoverChange?: (...args: any[]) => any;
        }), never>;
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
        $emit: (event: "blur" | "change" | "focus" | "keydown" | "update:value" | "hoverChange", ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<{
            [x: string]: any;
        } | ({
            [x: string]: unknown;
        } & {
            [x: string]: any;
        } & {
            [x: number]: any;
        })> & {
            onFocus?: (...args: any[]) => any;
            onBlur?: (...args: any[]) => any;
            onChange?: (...args: any[]) => any;
            onKeydown?: (...args: any[]) => any;
            "onUpdate:value"?: (...args: any[]) => any;
            onHoverChange?: (...args: any[]) => any;
        }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("blur" | "change" | "focus" | "keydown" | "update:value" | "hoverChange")[], string, {} | {
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
    } | ({
        [x: string]: unknown;
    } & {
        [x: string]: any;
    } & {
        [x: number]: any;
    })> & {
        onFocus?: (...args: any[]) => any;
        onBlur?: (...args: any[]) => any;
        onChange?: (...args: any[]) => any;
        onKeydown?: (...args: any[]) => any;
        "onUpdate:value"?: (...args: any[]) => any;
        onHoverChange?: (...args: any[]) => any;
    }) & import("vue").ShallowUnwrapRef<() => JSX.Element> & {} & {} & import("vue").ComponentCustomProperties & Readonly<{
        [x: string]: any;
    } | ({
        [x: string]: unknown;
    } & {
        [x: string]: any;
    } & {
        [x: number]: any;
    })> & {
        onFocus?: (...args: any[]) => any;
        onBlur?: (...args: any[]) => any;
        onChange?: (...args: any[]) => any;
        onKeydown?: (...args: any[]) => any;
        "onUpdate:value"?: (...args: any[]) => any;
        onHoverChange?: (...args: any[]) => any;
    };
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<{
    [x: string]: any;
} | ({
    [x: string]: unknown;
} & {
    [x: string]: any;
} & {
    [x: number]: any;
})> & {
    onFocus?: (...args: any[]) => any;
    onBlur?: (...args: any[]) => any;
    onChange?: (...args: any[]) => any;
    onKeydown?: (...args: any[]) => any;
    "onUpdate:value"?: (...args: any[]) => any;
    onHoverChange?: (...args: any[]) => any;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("blur" | "change" | "focus" | "keydown" | "update:value" | "hoverChange")[], "blur" | "change" | "focus" | "keydown" | "update:value" | "hoverChange", {} | {
    [x: string]: any;
}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("@vue/runtime-core").Plugin;
export default _default;
