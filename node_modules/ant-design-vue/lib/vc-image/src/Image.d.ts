import type { ImgHTMLAttributes, CSSProperties } from 'vue';
import PreviewGroup from './PreviewGroup';
export declare type GetContainer = string | HTMLElement | (() => HTMLElement);
export interface ImagePreviewType {
    visible?: boolean;
    onVisibleChange?: (value: boolean, prevValue: boolean) => void;
    getContainer?: GetContainer | false;
}
export interface ImagePropsType extends Omit<ImgHTMLAttributes, 'placeholder' | 'onClick'> {
    src?: string;
    wrapperClassName?: string;
    wrapperStyle?: CSSProperties;
    prefixCls?: string;
    previewPrefixCls?: string;
    placeholder?: boolean;
    fallback?: string;
    preview?: boolean | ImagePreviewType;
}
export declare const imageProps: {
    src: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    wrapperClassName: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    wrapperStyle: import("vue-types").VueTypeValidableDef<CSSProperties>;
    prefixCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    previewPrefixCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    placeholder: import("vue-types").VueTypeValidableDef<import("../../_util/type").VueNode>;
    fallback: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    preview: import("vue-types").VueTypeDef<boolean | {
        visible: (boolean | ((props: Record<string, unknown>) => boolean)) & boolean;
        onVisibleChange: any;
        getContainer: (props: Record<string, unknown>) => never;
    }> & {
        default: boolean | (() => {
            visible: (boolean | ((props: Record<string, unknown>) => boolean)) & boolean;
            onVisibleChange: any;
            getContainer: (props: Record<string, unknown>) => never;
        });
    };
};
declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            preview: boolean | {
                visible: (boolean | ((props: Record<string, unknown>) => boolean)) & boolean;
                onVisibleChange: any;
                getContainer: (props: Record<string, unknown>) => never;
            };
            prefixCls: string;
            wrapperClassName: string;
            src: string;
            previewPrefixCls: string;
            fallback: string;
        }> & Omit<Readonly<{
            src?: unknown;
            wrapperClassName?: unknown;
            wrapperStyle?: unknown;
            prefixCls?: unknown;
            previewPrefixCls?: unknown;
            placeholder?: unknown;
            fallback?: unknown;
            preview?: unknown;
        } & {
            preview: boolean | {
                visible: (boolean | ((props: Record<string, unknown>) => boolean)) & boolean;
                onVisibleChange: any;
                getContainer: (props: Record<string, unknown>) => never;
            };
            prefixCls: string;
            wrapperClassName: string;
            src: string;
            previewPrefixCls: string;
            fallback: string;
        } & {
            placeholder?: import("../../_util/type").VueNode;
            wrapperStyle?: CSSProperties;
        }> & {
            onClick?: (...args: any[]) => any;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "preview" | "prefixCls" | "wrapperClassName" | "src" | "previewPrefixCls" | "fallback">;
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
            src?: unknown;
            wrapperClassName?: unknown;
            wrapperStyle?: unknown;
            prefixCls?: unknown;
            previewPrefixCls?: unknown;
            placeholder?: unknown;
            fallback?: unknown;
            preview?: unknown;
        } & {
            preview: boolean | {
                visible: (boolean | ((props: Record<string, unknown>) => boolean)) & boolean;
                onVisibleChange: any;
                getContainer: (props: Record<string, unknown>) => never;
            };
            prefixCls: string;
            wrapperClassName: string;
            src: string;
            previewPrefixCls: string;
            fallback: string;
        } & {
            placeholder?: import("../../_util/type").VueNode;
            wrapperStyle?: CSSProperties;
        }> & {
            onClick?: (...args: any[]) => any;
        }, () => JSX.Element, unknown, {}, {}, {
            methods: {
                setState(state: {}, callback: any): void;
                __emit(...args: any[]): void;
            };
        }, import("vue").ComponentOptionsMixin, "click"[], string, {
            preview: boolean | {
                visible: (boolean | ((props: Record<string, unknown>) => boolean)) & boolean;
                onVisibleChange: any;
                getContainer: (props: Record<string, unknown>) => never;
            };
            prefixCls: string;
            wrapperClassName: string;
            src: string;
            previewPrefixCls: string;
            fallback: string;
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
        src?: unknown;
        wrapperClassName?: unknown;
        wrapperStyle?: unknown;
        prefixCls?: unknown;
        previewPrefixCls?: unknown;
        placeholder?: unknown;
        fallback?: unknown;
        preview?: unknown;
    } & {
        preview: boolean | {
            visible: (boolean | ((props: Record<string, unknown>) => boolean)) & boolean;
            onVisibleChange: any;
            getContainer: (props: Record<string, unknown>) => never;
        };
        prefixCls: string;
        wrapperClassName: string;
        src: string;
        previewPrefixCls: string;
        fallback: string;
    } & {
        placeholder?: import("../../_util/type").VueNode;
        wrapperStyle?: CSSProperties;
    }> & {
        onClick?: (...args: any[]) => any;
    } & import("vue").ShallowUnwrapRef<() => JSX.Element> & {} & {
        [x: string]: never;
    } & {
        setState(state: {}, callback: any): void;
        __emit(...args: any[]): void;
    } & import("vue").ComponentCustomProperties;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<{
    src?: unknown;
    wrapperClassName?: unknown;
    wrapperStyle?: unknown;
    prefixCls?: unknown;
    previewPrefixCls?: unknown;
    placeholder?: unknown;
    fallback?: unknown;
    preview?: unknown;
} & {
    preview: boolean | {
        visible: (boolean | ((props: Record<string, unknown>) => boolean)) & boolean;
        onVisibleChange: any;
        getContainer: (props: Record<string, unknown>) => never;
    };
    prefixCls: string;
    wrapperClassName: string;
    src: string;
    previewPrefixCls: string;
    fallback: string;
} & {
    placeholder?: import("../../_util/type").VueNode;
    wrapperStyle?: CSSProperties;
}> & {
    onClick?: (...args: any[]) => any;
}, () => JSX.Element, unknown, {}, {}, {
    methods: {
        setState(state: {}, callback: any): void;
        __emit(...args: any[]): void;
    };
}, import("vue").ComponentOptionsMixin, "click"[], "click", {
    preview: boolean | {
        visible: (boolean | ((props: Record<string, unknown>) => boolean)) & boolean;
        onVisibleChange: any;
        getContainer: (props: Record<string, unknown>) => never;
    };
    prefixCls: string;
    wrapperClassName: string;
    src: string;
    previewPrefixCls: string;
    fallback: string;
}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & {
    readonly PreviewGroup: typeof PreviewGroup;
};
export default _default;
