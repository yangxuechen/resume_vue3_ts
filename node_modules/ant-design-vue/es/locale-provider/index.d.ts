import type { VNode } from 'vue';
import type { ModalLocale } from '../modal/locale';
import type { ValidateMessages } from '../form/interface';
export interface Locale {
    locale: string;
    Pagination?: Object;
    DatePicker?: Object;
    TimePicker?: Object;
    Calendar?: Object;
    Table?: Object;
    Modal?: ModalLocale;
    Popconfirm?: Object;
    Transfer?: Object;
    Select?: Object;
    Upload?: Object;
    Form?: {
        optional?: string;
        defaultValidateMessages: ValidateMessages;
    };
    Image?: {
        preview: string;
    };
}
export interface LocaleProviderProps {
    locale: Locale;
    children?: VNode | VNode[];
    ANT_MARK__?: string;
}
export declare const ANT_MARK = "internalMark";
declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            ANT_MARK__: string;
        }> & Omit<Readonly<{
            locale?: unknown;
            ANT_MARK__?: unknown;
        } & {
            ANT_MARK__: string;
        } & {
            locale?: Locale;
        }> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "ANT_MARK__">;
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
            locale?: unknown;
            ANT_MARK__?: unknown;
        } & {
            ANT_MARK__: string;
        } & {
            locale?: Locale;
        }>, () => VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[], unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
            ANT_MARK__: string;
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
        locale?: unknown;
        ANT_MARK__?: unknown;
    } & {
        ANT_MARK__: string;
    } & {
        locale?: Locale;
    }> & import("vue").ShallowUnwrapRef<() => VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[]> & {} & {} & import("vue").ComponentCustomProperties;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<{
    locale?: unknown;
    ANT_MARK__?: unknown;
} & {
    ANT_MARK__: string;
} & {
    locale?: Locale;
}>, () => VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>[], unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
    ANT_MARK__: string;
}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("@vue/runtime-core").Plugin;
export default _default;
