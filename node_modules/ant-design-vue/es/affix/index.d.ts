import type { CSSProperties, ExtractPropTypes } from 'vue';
declare enum AffixStatus {
    None = 0,
    Prepare = 1
}
export interface AffixState {
    affixStyle?: CSSProperties;
    placeholderStyle?: CSSProperties;
    status: AffixStatus;
    lastAffix: boolean;
    prevTarget: Window | HTMLElement | null;
}
declare const affixProps: {
    /**
     * 距离窗口顶部达到指定偏移量后触发
     */
    offsetTop: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
    offset: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
    /** 距离窗口底部达到指定偏移量后触发 */
    offsetBottom: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
    /** 固定状态改变时触发的回调函数 */
    /** 设置 Affix 需要监听其滚动事件的元素，值为一个返回对应 DOM 元素的函数 */
    target: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    } & {
        default: (...args: any[]) => any;
    };
    prefixCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    onChange: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    onTestUpdatePosition: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
};
export declare type AffixProps = Partial<ExtractPropTypes<typeof affixProps>>;
declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            prefixCls: string;
            onChange: (...args: any[]) => any;
            offset: number;
            target: (...args: any[]) => any;
            offsetTop: number;
            offsetBottom: number;
            onTestUpdatePosition: (...args: any[]) => any;
        }> & Omit<Readonly<{
            offsetTop?: unknown;
            offset?: unknown;
            offsetBottom?: unknown;
            target?: unknown;
            prefixCls?: unknown;
            onChange?: unknown;
            onTestUpdatePosition?: unknown;
        } & {
            prefixCls: string;
            offset: number;
            offsetTop: number;
            offsetBottom: number;
        } & {
            onChange?: (...args: any[]) => any;
            target?: (...args: any[]) => any;
            onTestUpdatePosition?: (...args: any[]) => any;
        }> & {
            onChange?: (...args: any[]) => any;
            onTestUpdatePosition?: (...args: any[]) => any;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "prefixCls" | "onChange" | "offset" | "target" | "offsetTop" | "offsetBottom" | "onTestUpdatePosition">;
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
        $emit: (event: "change" | "testUpdatePosition", ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<{
            offsetTop?: unknown;
            offset?: unknown;
            offsetBottom?: unknown;
            target?: unknown;
            prefixCls?: unknown;
            onChange?: unknown;
            onTestUpdatePosition?: unknown;
        } & {
            prefixCls: string;
            offset: number;
            offsetTop: number;
            offsetBottom: number;
        } & {
            onChange?: (...args: any[]) => any;
            target?: (...args: any[]) => any;
            onTestUpdatePosition?: (...args: any[]) => any;
        }> & {
            onChange?: (...args: any[]) => any;
            onTestUpdatePosition?: (...args: any[]) => any;
        }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "testUpdatePosition")[], string, {
            prefixCls: string;
            onChange: (...args: any[]) => any;
            offset: number;
            target: (...args: any[]) => any;
            offsetTop: number;
            offsetBottom: number;
            onTestUpdatePosition: (...args: any[]) => any;
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
        offsetTop?: unknown;
        offset?: unknown;
        offsetBottom?: unknown;
        target?: unknown;
        prefixCls?: unknown;
        onChange?: unknown;
        onTestUpdatePosition?: unknown;
    } & {
        prefixCls: string;
        offset: number;
        offsetTop: number;
        offsetBottom: number;
    } & {
        onChange?: (...args: any[]) => any;
        target?: (...args: any[]) => any;
        onTestUpdatePosition?: (...args: any[]) => any;
    }> & {
        onChange?: (...args: any[]) => any;
        onTestUpdatePosition?: (...args: any[]) => any;
    } & import("vue").ShallowUnwrapRef<() => JSX.Element> & {} & {} & import("vue").ComponentCustomProperties;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<{
    offsetTop?: unknown;
    offset?: unknown;
    offsetBottom?: unknown;
    target?: unknown;
    prefixCls?: unknown;
    onChange?: unknown;
    onTestUpdatePosition?: unknown;
} & {
    prefixCls: string;
    offset: number;
    offsetTop: number;
    offsetBottom: number;
} & {
    onChange?: (...args: any[]) => any;
    target?: (...args: any[]) => any;
    onTestUpdatePosition?: (...args: any[]) => any;
}> & {
    onChange?: (...args: any[]) => any;
    onTestUpdatePosition?: (...args: any[]) => any;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "testUpdatePosition")[], "change" | "testUpdatePosition", {
    prefixCls: string;
    onChange: (...args: any[]) => any;
    offset: number;
    target: (...args: any[]) => any;
    offsetTop: number;
    offsetBottom: number;
    onTestUpdatePosition: (...args: any[]) => any;
}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("@vue/runtime-core").Plugin;
export default _default;
