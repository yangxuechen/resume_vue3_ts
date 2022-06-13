import type { ExtractPropTypes, PropType } from 'vue';
import { nextTick } from 'vue';
export declare const SwitchSizes: ["small", "default"];
declare type CheckedType = boolean | string | number;
declare const switchProps: {
    prefixCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    size: import("vue-types").VueTypeDef<"default" | "small">;
    disabled: import("vue-types").VueTypeValidableDef<boolean>;
    checkedChildren: import("vue-types").VueTypeValidableDef<import("../_util/type").VueNode>;
    unCheckedChildren: import("vue-types").VueTypeValidableDef<import("../_util/type").VueNode>;
    tabindex: import("vue-types").VueTypeDef<string | number>;
    autofocus: import("vue-types").VueTypeValidableDef<boolean>;
    loading: import("vue-types").VueTypeValidableDef<boolean>;
    checked: import("vue-types").VueTypeDef<string | number | boolean>;
    checkedValue: import("vue-types").VueTypeDef<string | number | boolean> & {
        default: string | number | boolean;
    };
    unCheckedValue: import("vue-types").VueTypeDef<string | number | boolean> & {
        default: string | number | boolean;
    };
    onChange: {
        type: PropType<(checked: CheckedType, e: Event) => void>;
    };
    onClick: {
        type: PropType<(checked: CheckedType, e: Event) => void>;
    };
    onKeydown: {
        type: PropType<(e: Event) => void>;
    };
    onMouseup: {
        type: PropType<(e: Event) => void>;
    };
    'onUpdate:checked': {
        type: PropType<(checked: CheckedType) => void>;
    };
};
export declare type SwitchProps = Partial<ExtractPropTypes<typeof switchProps>>;
declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            prefixCls: string;
            checkedValue: string | number | boolean;
            unCheckedValue: string | number | boolean;
        }> & Omit<Readonly<{
            prefixCls?: unknown;
            size?: unknown;
            disabled?: unknown;
            checkedChildren?: unknown;
            unCheckedChildren?: unknown;
            tabindex?: unknown;
            autofocus?: unknown;
            loading?: unknown;
            checked?: unknown;
            checkedValue?: unknown;
            unCheckedValue?: unknown;
            onChange?: unknown;
            onClick?: unknown;
            onKeydown?: unknown;
            onMouseup?: unknown;
            'onUpdate:checked'?: unknown;
        } & {
            prefixCls: string;
            checkedValue: string | number | boolean;
            unCheckedValue: string | number | boolean;
        } & {
            onChange?: (checked: CheckedType, e: Event) => void;
            onKeydown?: (e: Event) => void;
            onClick?: (checked: CheckedType, e: Event) => void;
            onMouseup?: (e: Event) => void;
            tabindex?: string | number;
            size?: "default" | "small";
            disabled?: boolean;
            autofocus?: boolean;
            loading?: boolean;
            checked?: string | number | boolean;
            "onUpdate:checked"?: (checked: CheckedType) => void;
            checkedChildren?: import("../_util/type").VueNode;
            unCheckedChildren?: import("../_util/type").VueNode;
        }> & {
            onChange?: (...args: any[]) => any;
            onKeydown?: (...args: any[]) => any;
            onClick?: (...args: any[]) => any;
            onMouseup?: (...args: any[]) => any;
            "onUpdate:checked"?: (...args: any[]) => any;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "prefixCls" | "checkedValue" | "unCheckedValue">;
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
        $emit: (event: "change" | "click" | "keydown" | "mouseup" | "update:checked", ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<{
            prefixCls?: unknown;
            size?: unknown;
            disabled?: unknown;
            checkedChildren?: unknown;
            unCheckedChildren?: unknown;
            tabindex?: unknown;
            autofocus?: unknown;
            loading?: unknown;
            checked?: unknown;
            checkedValue?: unknown;
            unCheckedValue?: unknown;
            onChange?: unknown;
            onClick?: unknown;
            onKeydown?: unknown;
            onMouseup?: unknown;
            'onUpdate:checked'?: unknown;
        } & {
            prefixCls: string;
            checkedValue: string | number | boolean;
            unCheckedValue: string | number | boolean;
        } & {
            onChange?: (checked: CheckedType, e: Event) => void;
            onKeydown?: (e: Event) => void;
            onClick?: (checked: CheckedType, e: Event) => void;
            onMouseup?: (e: Event) => void;
            tabindex?: string | number;
            size?: "default" | "small";
            disabled?: boolean;
            autofocus?: boolean;
            loading?: boolean;
            checked?: string | number | boolean;
            "onUpdate:checked"?: (checked: CheckedType) => void;
            checkedChildren?: import("../_util/type").VueNode;
            unCheckedChildren?: import("../_util/type").VueNode;
        }> & {
            onChange?: (...args: any[]) => any;
            onKeydown?: (...args: any[]) => any;
            onClick?: (...args: any[]) => any;
            onMouseup?: (...args: any[]) => any;
            "onUpdate:checked"?: (...args: any[]) => any;
        }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "click" | "keydown" | "mouseup" | "update:checked")[], string, {
            prefixCls: string;
            checkedValue: string | number | boolean;
            unCheckedValue: string | number | boolean;
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
        $nextTick: typeof nextTick;
        $watch(source: string | Function, cb: Function, options?: import("vue").WatchOptions<boolean>): import("vue").WatchStopHandle;
    } & Readonly<{
        prefixCls?: unknown;
        size?: unknown;
        disabled?: unknown;
        checkedChildren?: unknown;
        unCheckedChildren?: unknown;
        tabindex?: unknown;
        autofocus?: unknown;
        loading?: unknown;
        checked?: unknown;
        checkedValue?: unknown;
        unCheckedValue?: unknown;
        onChange?: unknown;
        onClick?: unknown;
        onKeydown?: unknown;
        onMouseup?: unknown;
        'onUpdate:checked'?: unknown;
    } & {
        prefixCls: string;
        checkedValue: string | number | boolean;
        unCheckedValue: string | number | boolean;
    } & {
        onChange?: (checked: CheckedType, e: Event) => void;
        onKeydown?: (e: Event) => void;
        onClick?: (checked: CheckedType, e: Event) => void;
        onMouseup?: (e: Event) => void;
        tabindex?: string | number;
        size?: "default" | "small";
        disabled?: boolean;
        autofocus?: boolean;
        loading?: boolean;
        checked?: string | number | boolean;
        "onUpdate:checked"?: (checked: CheckedType) => void;
        checkedChildren?: import("../_util/type").VueNode;
        unCheckedChildren?: import("../_util/type").VueNode;
    }> & {
        onChange?: (...args: any[]) => any;
        onKeydown?: (...args: any[]) => any;
        onClick?: (...args: any[]) => any;
        onMouseup?: (...args: any[]) => any;
        "onUpdate:checked"?: (...args: any[]) => any;
    } & import("vue").ShallowUnwrapRef<() => JSX.Element> & {} & {} & import("vue").ComponentCustomProperties;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<{
    prefixCls?: unknown;
    size?: unknown;
    disabled?: unknown;
    checkedChildren?: unknown;
    unCheckedChildren?: unknown;
    tabindex?: unknown;
    autofocus?: unknown;
    loading?: unknown;
    checked?: unknown;
    checkedValue?: unknown;
    unCheckedValue?: unknown;
    onChange?: unknown;
    onClick?: unknown;
    onKeydown?: unknown;
    onMouseup?: unknown;
    'onUpdate:checked'?: unknown;
} & {
    prefixCls: string;
    checkedValue: string | number | boolean;
    unCheckedValue: string | number | boolean;
} & {
    onChange?: (checked: CheckedType, e: Event) => void;
    onKeydown?: (e: Event) => void;
    onClick?: (checked: CheckedType, e: Event) => void;
    onMouseup?: (e: Event) => void;
    tabindex?: string | number;
    size?: "default" | "small";
    disabled?: boolean;
    autofocus?: boolean;
    loading?: boolean;
    checked?: string | number | boolean;
    "onUpdate:checked"?: (checked: CheckedType) => void;
    checkedChildren?: import("../_util/type").VueNode;
    unCheckedChildren?: import("../_util/type").VueNode;
}> & {
    onChange?: (...args: any[]) => any;
    onKeydown?: (...args: any[]) => any;
    onClick?: (...args: any[]) => any;
    onMouseup?: (...args: any[]) => any;
    "onUpdate:checked"?: (...args: any[]) => any;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "click" | "keydown" | "mouseup" | "update:checked")[], "change" | "click" | "keydown" | "mouseup" | "update:checked", {
    prefixCls: string;
    checkedValue: string | number | boolean;
    unCheckedValue: string | number | boolean;
}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("@vue/runtime-core").Plugin;
export default _default;
