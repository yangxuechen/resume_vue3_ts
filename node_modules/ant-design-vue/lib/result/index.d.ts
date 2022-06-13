import type { Plugin, ExtractPropTypes } from 'vue';
import noFound from './noFound';
import serverError from './serverError';
import unauthorized from './unauthorized';
export declare const IconMap: {
    success: import("@ant-design/icons-vue/lib/icons/CheckCircleFilled").CheckCircleFilledIconType;
    error: import("@ant-design/icons-vue/lib/icons/CloseCircleFilled").CloseCircleFilledIconType;
    info: import("@ant-design/icons-vue/lib/icons/ExclamationCircleFilled").ExclamationCircleFilledIconType;
    warning: import("@ant-design/icons-vue/lib/icons/WarningFilled").WarningFilledIconType;
};
export declare const ExceptionMap: {
    '404': () => JSX.Element;
    '500': () => JSX.Element;
    '403': () => JSX.Element;
};
export declare const resultProps: {
    prefixCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    icon: import("vue-types").VueTypeValidableDef<any>;
    status: import("vue-types").VueTypeDef<"error" | "success" | "warning" | "info" | "404" | "403" | "500"> & {
        default: "error" | "success" | "warning" | "info" | "404" | "403" | "500";
    };
    title: import("vue-types").VueTypeValidableDef<any>;
    subTitle: import("vue-types").VueTypeValidableDef<any>;
    extra: import("vue-types").VueTypeValidableDef<any>;
};
export declare type ResultProps = Partial<ExtractPropTypes<typeof resultProps>>;
declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            prefixCls: string;
            status: "error" | "success" | "warning" | "info" | "404" | "403" | "500";
        }> & Omit<Readonly<{
            prefixCls?: unknown;
            icon?: unknown;
            status?: unknown;
            title?: unknown;
            subTitle?: unknown;
            extra?: unknown;
        } & {
            prefixCls: string;
            status: "error" | "success" | "warning" | "info" | "404" | "403" | "500";
        } & {
            icon?: any;
            title?: any;
            extra?: any;
            subTitle?: any;
        }> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "prefixCls" | "status">;
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
            icon?: unknown;
            status?: unknown;
            title?: unknown;
            subTitle?: unknown;
            extra?: unknown;
        } & {
            prefixCls: string;
            status: "error" | "success" | "warning" | "info" | "404" | "403" | "500";
        } & {
            icon?: any;
            title?: any;
            extra?: any;
            subTitle?: any;
        }>, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
            prefixCls: string;
            status: "error" | "success" | "warning" | "info" | "404" | "403" | "500";
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
        icon?: unknown;
        status?: unknown;
        title?: unknown;
        subTitle?: unknown;
        extra?: unknown;
    } & {
        prefixCls: string;
        status: "error" | "success" | "warning" | "info" | "404" | "403" | "500";
    } & {
        icon?: any;
        title?: any;
        extra?: any;
        subTitle?: any;
    }> & import("vue").ShallowUnwrapRef<() => JSX.Element> & {} & {} & import("vue").ComponentCustomProperties;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<{
    prefixCls?: unknown;
    icon?: unknown;
    status?: unknown;
    title?: unknown;
    subTitle?: unknown;
    extra?: unknown;
} & {
    prefixCls: string;
    status: "error" | "success" | "warning" | "info" | "404" | "403" | "500";
} & {
    icon?: any;
    title?: any;
    extra?: any;
    subTitle?: any;
}>, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
    prefixCls: string;
    status: "error" | "success" | "warning" | "info" | "404" | "403" | "500";
}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Plugin & {
    readonly PRESENTED_IMAGE_403: typeof unauthorized;
    readonly PRESENTED_IMAGE_404: typeof noFound;
    readonly PRESENTED_IMAGE_500: typeof serverError;
};
export default _default;
