import type { ExtractPropTypes } from 'vue';
declare const AlertTypes: ["success", "info", "warning", "error"];
export declare type AlertType = typeof AlertTypes[number];
declare const alertProps: {
    /**
     * Type of Alert styles, options: `success`, `info`, `warning`, `error`
     */
    type: import("vue-types").VueTypeDef<"error" | "success" | "warning" | "info">;
    /** Whether Alert can be closed */
    closable: import("vue-types").VueTypeValidableDef<boolean>;
    /** Close text to show */
    closeText: import("vue-types").VueTypeValidableDef<import("../_util/type").VueNode>;
    /** Content of Alert */
    message: import("vue-types").VueTypeValidableDef<import("../_util/type").VueNode>;
    /** Additional content of Alert */
    description: import("vue-types").VueTypeValidableDef<import("../_util/type").VueNode>;
    /** Trigger when animation ending of Alert */
    afterClose: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    } & {
        default: (...args: any[]) => any;
    };
    /** Whether to show icon */
    showIcon: import("vue-types").VueTypeValidableDef<boolean>;
    prefixCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    banner: import("vue-types").VueTypeValidableDef<boolean>;
    icon: import("vue-types").VueTypeValidableDef<import("../_util/type").VueNode>;
    onClose: import("vue-types").VueTypeValidableDef<import("../_util/type").VueNode>;
};
export declare type AlertProps = Partial<ExtractPropTypes<typeof alertProps>>;
declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            prefixCls: string;
            afterClose: (...args: any[]) => any;
        }> & Omit<Readonly<{
            type?: unknown;
            closable?: unknown;
            closeText?: unknown;
            message?: unknown;
            description?: unknown;
            afterClose?: unknown;
            showIcon?: unknown;
            prefixCls?: unknown;
            banner?: unknown;
            icon?: unknown;
            onClose?: unknown;
        } & {
            prefixCls: string;
        } & {
            icon?: import("../_util/type").VueNode;
            type?: "error" | "success" | "warning" | "info";
            message?: import("../_util/type").VueNode;
            description?: import("../_util/type").VueNode;
            onClose?: import("../_util/type").VueNode;
            closable?: boolean;
            closeText?: import("../_util/type").VueNode;
            afterClose?: (...args: any[]) => any;
            showIcon?: boolean;
            banner?: boolean;
        }> & {
            onClose?: (...args: any[]) => any;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "prefixCls" | "afterClose">;
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
        $emit: (event: "close", ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<{
            type?: unknown;
            closable?: unknown;
            closeText?: unknown;
            message?: unknown;
            description?: unknown;
            afterClose?: unknown;
            showIcon?: unknown;
            prefixCls?: unknown;
            banner?: unknown;
            icon?: unknown;
            onClose?: unknown;
        } & {
            prefixCls: string;
        } & {
            icon?: import("../_util/type").VueNode;
            type?: "error" | "success" | "warning" | "info";
            message?: import("../_util/type").VueNode;
            description?: import("../_util/type").VueNode;
            onClose?: import("../_util/type").VueNode;
            closable?: boolean;
            closeText?: import("../_util/type").VueNode;
            afterClose?: (...args: any[]) => any;
            showIcon?: boolean;
            banner?: boolean;
        }> & {
            onClose?: (...args: any[]) => any;
        }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "close"[], string, {
            prefixCls: string;
            afterClose: (...args: any[]) => any;
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
        type?: unknown;
        closable?: unknown;
        closeText?: unknown;
        message?: unknown;
        description?: unknown;
        afterClose?: unknown;
        showIcon?: unknown;
        prefixCls?: unknown;
        banner?: unknown;
        icon?: unknown;
        onClose?: unknown;
    } & {
        prefixCls: string;
    } & {
        icon?: import("../_util/type").VueNode;
        type?: "error" | "success" | "warning" | "info";
        message?: import("../_util/type").VueNode;
        description?: import("../_util/type").VueNode;
        onClose?: import("../_util/type").VueNode;
        closable?: boolean;
        closeText?: import("../_util/type").VueNode;
        afterClose?: (...args: any[]) => any;
        showIcon?: boolean;
        banner?: boolean;
    }> & {
        onClose?: (...args: any[]) => any;
    } & import("vue").ShallowUnwrapRef<() => JSX.Element> & {} & {} & import("vue").ComponentCustomProperties;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<{
    type?: unknown;
    closable?: unknown;
    closeText?: unknown;
    message?: unknown;
    description?: unknown;
    afterClose?: unknown;
    showIcon?: unknown;
    prefixCls?: unknown;
    banner?: unknown;
    icon?: unknown;
    onClose?: unknown;
} & {
    prefixCls: string;
} & {
    icon?: import("../_util/type").VueNode;
    type?: "error" | "success" | "warning" | "info";
    message?: import("../_util/type").VueNode;
    description?: import("../_util/type").VueNode;
    onClose?: import("../_util/type").VueNode;
    closable?: boolean;
    closeText?: import("../_util/type").VueNode;
    afterClose?: (...args: any[]) => any;
    showIcon?: boolean;
    banner?: boolean;
}> & {
    onClose?: (...args: any[]) => any;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "close"[], "close", {
    prefixCls: string;
    afterClose: (...args: any[]) => any;
}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("@vue/runtime-core").Plugin;
export default _default;
