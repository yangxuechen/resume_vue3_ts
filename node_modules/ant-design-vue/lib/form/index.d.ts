import type { Plugin } from 'vue';
import Form, { formProps } from './Form';
import FormItem, { formItemProps } from './FormItem';
import useForm from './useForm';
export type { FormProps } from './Form';
export type { FormItemProps } from './FormItem';
export { FormItem, formItemProps, formProps, useForm };
declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            name: string;
            prefixCls: string;
            onSubmit: (...args: any[]) => any;
            requiredMark: "" | import("./Form").RequiredMark;
            model: {
                [key: string]: any;
            };
            validateMessages: {
                [key: string]: any;
            };
            onFinish: (...args: any[]) => any;
            onFinishFailed: (...args: any[]) => any;
        }> & Omit<Readonly<{
            layout?: unknown;
            labelCol?: unknown;
            wrapperCol?: unknown;
            colon?: unknown;
            labelAlign?: unknown;
            prefixCls?: unknown;
            requiredMark?: unknown;
            hideRequiredMark?: unknown;
            model?: unknown;
            rules?: unknown;
            validateMessages?: unknown;
            validateOnRuleChange?: unknown;
            scrollToFirstError?: unknown;
            onSubmit?: unknown;
            onFinish?: unknown;
            onFinishFailed?: unknown;
            name?: unknown;
            validateTrigger?: unknown;
            size?: unknown;
        } & {
            name: string;
            prefixCls: string;
            model: {
                [key: string]: any;
            };
            validateMessages: {
                [key: string]: any;
            };
        } & {
            validateTrigger?: string | string[];
            onSubmit?: (...args: any[]) => any;
            layout?: "inline" | "horizontal" | "vertical";
            size?: import("../config-provider").SizeType;
            labelCol?: unknown;
            labelAlign?: "left" | "right";
            colon?: boolean;
            requiredMark?: "" | import("./Form").RequiredMark;
            wrapperCol?: unknown;
            rules?: {
                [k: string]: import("./Form").ValidationRule | import("./Form").ValidationRule[];
            };
            hideRequiredMark?: boolean;
            validateOnRuleChange?: boolean;
            scrollToFirstError?: unknown;
            onFinish?: (...args: any[]) => any;
            onFinishFailed?: (...args: any[]) => any;
        }> & {
            onSubmit?: (...args: any[]) => any;
            onFinish?: (...args: any[]) => any;
            onFinishFailed?: (...args: any[]) => any;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "name" | "prefixCls" | "onSubmit" | "requiredMark" | "model" | "validateMessages" | "onFinish" | "onFinishFailed">;
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
        $emit: (event: "submit" | "finishFailed" | "finish", ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<{
            layout?: unknown;
            labelCol?: unknown;
            wrapperCol?: unknown;
            colon?: unknown;
            labelAlign?: unknown;
            prefixCls?: unknown;
            requiredMark?: unknown;
            hideRequiredMark?: unknown;
            model?: unknown;
            rules?: unknown;
            validateMessages?: unknown;
            validateOnRuleChange?: unknown;
            scrollToFirstError?: unknown;
            onSubmit?: unknown;
            onFinish?: unknown;
            onFinishFailed?: unknown;
            name?: unknown;
            validateTrigger?: unknown;
            size?: unknown;
        } & {
            name: string;
            prefixCls: string;
            model: {
                [key: string]: any;
            };
            validateMessages: {
                [key: string]: any;
            };
        } & {
            validateTrigger?: string | string[];
            onSubmit?: (...args: any[]) => any;
            layout?: "inline" | "horizontal" | "vertical";
            size?: import("../config-provider").SizeType;
            labelCol?: unknown;
            labelAlign?: "left" | "right";
            colon?: boolean;
            requiredMark?: "" | import("./Form").RequiredMark;
            wrapperCol?: unknown;
            rules?: {
                [k: string]: import("./Form").ValidationRule | import("./Form").ValidationRule[];
            };
            hideRequiredMark?: boolean;
            validateOnRuleChange?: boolean;
            scrollToFirstError?: unknown;
            onFinish?: (...args: any[]) => any;
            onFinishFailed?: (...args: any[]) => any;
        }> & {
            onSubmit?: (...args: any[]) => any;
            onFinish?: (...args: any[]) => any;
            onFinishFailed?: (...args: any[]) => any;
        }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("submit" | "finishFailed" | "finish")[], string, {
            name: string;
            prefixCls: string;
            onSubmit: (...args: any[]) => any;
            requiredMark: "" | import("./Form").RequiredMark;
            model: {
                [key: string]: any;
            };
            validateMessages: {
                [key: string]: any;
            };
            onFinish: (...args: any[]) => any;
            onFinishFailed: (...args: any[]) => any;
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
        layout?: unknown;
        labelCol?: unknown;
        wrapperCol?: unknown;
        colon?: unknown;
        labelAlign?: unknown;
        prefixCls?: unknown;
        requiredMark?: unknown;
        hideRequiredMark?: unknown;
        model?: unknown;
        rules?: unknown;
        validateMessages?: unknown;
        validateOnRuleChange?: unknown;
        scrollToFirstError?: unknown;
        onSubmit?: unknown;
        onFinish?: unknown;
        onFinishFailed?: unknown;
        name?: unknown;
        validateTrigger?: unknown;
        size?: unknown;
    } & {
        name: string;
        prefixCls: string;
        model: {
            [key: string]: any;
        };
        validateMessages: {
            [key: string]: any;
        };
    } & {
        validateTrigger?: string | string[];
        onSubmit?: (...args: any[]) => any;
        layout?: "inline" | "horizontal" | "vertical";
        size?: import("../config-provider").SizeType;
        labelCol?: unknown;
        labelAlign?: "left" | "right";
        colon?: boolean;
        requiredMark?: "" | import("./Form").RequiredMark;
        wrapperCol?: unknown;
        rules?: {
            [k: string]: import("./Form").ValidationRule | import("./Form").ValidationRule[];
        };
        hideRequiredMark?: boolean;
        validateOnRuleChange?: boolean;
        scrollToFirstError?: unknown;
        onFinish?: (...args: any[]) => any;
        onFinishFailed?: (...args: any[]) => any;
    }> & {
        onSubmit?: (...args: any[]) => any;
        onFinish?: (...args: any[]) => any;
        onFinishFailed?: (...args: any[]) => any;
    } & import("vue").ShallowUnwrapRef<() => JSX.Element> & {} & {} & import("vue").ComponentCustomProperties;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<{
    layout?: unknown;
    labelCol?: unknown;
    wrapperCol?: unknown;
    colon?: unknown;
    labelAlign?: unknown;
    prefixCls?: unknown;
    requiredMark?: unknown;
    hideRequiredMark?: unknown;
    model?: unknown;
    rules?: unknown;
    validateMessages?: unknown;
    validateOnRuleChange?: unknown;
    scrollToFirstError?: unknown;
    onSubmit?: unknown;
    onFinish?: unknown;
    onFinishFailed?: unknown;
    name?: unknown;
    validateTrigger?: unknown;
    size?: unknown;
} & {
    name: string;
    prefixCls: string;
    model: {
        [key: string]: any;
    };
    validateMessages: {
        [key: string]: any;
    };
} & {
    validateTrigger?: string | string[];
    onSubmit?: (...args: any[]) => any;
    layout?: "inline" | "horizontal" | "vertical";
    size?: import("../config-provider").SizeType;
    labelCol?: unknown;
    labelAlign?: "left" | "right";
    colon?: boolean;
    requiredMark?: "" | import("./Form").RequiredMark;
    wrapperCol?: unknown;
    rules?: {
        [k: string]: import("./Form").ValidationRule | import("./Form").ValidationRule[];
    };
    hideRequiredMark?: boolean;
    validateOnRuleChange?: boolean;
    scrollToFirstError?: unknown;
    onFinish?: (...args: any[]) => any;
    onFinishFailed?: (...args: any[]) => any;
}> & {
    onSubmit?: (...args: any[]) => any;
    onFinish?: (...args: any[]) => any;
    onFinishFailed?: (...args: any[]) => any;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("submit" | "finishFailed" | "finish")[], "submit" | "finishFailed" | "finish", {
    name: string;
    prefixCls: string;
    onSubmit: (...args: any[]) => any;
    requiredMark: "" | import("./Form").RequiredMark;
    model: {
        [key: string]: any;
    };
    validateMessages: {
        [key: string]: any;
    };
    onFinish: (...args: any[]) => any;
    onFinishFailed: (...args: any[]) => any;
}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & {
    readonly Item: import("vue").DefineComponent<{
        id: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        };
        htmlFor: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        };
        prefixCls: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        };
        label: import("vue-types").VueTypeValidableDef<import("../_util/type").VueNode>;
        help: import("vue-types").VueTypeValidableDef<import("../_util/type").VueNode>;
        extra: import("vue-types").VueTypeValidableDef<import("../_util/type").VueNode>;
        labelCol: {
            type: import("vue").PropType<Partial<{
                span?: unknown;
                order?: unknown;
                offset?: unknown;
                push?: unknown;
                pull?: unknown;
                xs?: unknown;
                sm?: unknown;
                md?: unknown;
                lg?: unknown;
                xl?: unknown;
                xxl?: unknown;
                prefixCls?: unknown;
                flex?: unknown;
            } & {
                prefixCls: string;
            } & {
                span?: string | number;
                push?: string | number;
                flex?: string | number;
                offset?: string | number;
                order?: string | number;
                xxl?: string | number | import("../grid").ColSize;
                xl?: string | number | import("../grid").ColSize;
                lg?: string | number | import("../grid").ColSize;
                md?: string | number | import("../grid").ColSize;
                sm?: string | number | import("../grid").ColSize;
                xs?: string | number | import("../grid").ColSize;
                pull?: string | number;
            }>>;
        };
        wrapperCol: {
            type: import("vue").PropType<Partial<{
                span?: unknown;
                order?: unknown;
                offset?: unknown;
                push?: unknown;
                pull?: unknown;
                xs?: unknown;
                sm?: unknown;
                md?: unknown;
                lg?: unknown;
                xl?: unknown;
                xxl?: unknown;
                prefixCls?: unknown;
                flex?: unknown;
            } & {
                prefixCls: string;
            } & {
                span?: string | number;
                push?: string | number;
                flex?: string | number;
                offset?: string | number;
                order?: string | number;
                xxl?: string | number | import("../grid").ColSize;
                xl?: string | number | import("../grid").ColSize;
                lg?: string | number | import("../grid").ColSize;
                md?: string | number | import("../grid").ColSize;
                sm?: string | number | import("../grid").ColSize;
                xs?: string | number | import("../grid").ColSize;
                pull?: string | number;
            }>>;
        };
        hasFeedback: import("vue-types").VueTypeValidableDef<boolean> & {
            default: boolean;
        };
        colon: import("vue-types").VueTypeValidableDef<boolean>;
        labelAlign: import("vue-types").VueTypeDef<"left" | "right">;
        prop: {
            type: import("vue").PropType<string | number | string[] | number[]>;
        };
        name: {
            type: import("vue").PropType<string | number | string[] | number[]>;
        };
        rules: import("vue-types").VueTypeDef<unknown[] | {
            [key: string]: any;
        }>;
        autoLink: import("vue-types").VueTypeValidableDef<boolean> & {
            default: boolean;
        };
        required: import("vue-types").VueTypeValidableDef<boolean>;
        validateFirst: import("vue-types").VueTypeValidableDef<boolean>;
        validateStatus: import("vue-types").VueTypeDef<"" | "validating" | "error" | "success" | "warning">;
        validateTrigger: {
            type: import("vue").PropType<string | string[]>;
        };
        messageVariables: {
            type: import("vue").PropType<Record<string, string>>;
        };
        hidden: BooleanConstructor;
    }, () => JSX.Element, unknown, {}, {}, {
        methods: {
            setState(state: {}, callback: any): void;
            __emit(...args: any[]): void;
        };
    }, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
        id?: unknown;
        htmlFor?: unknown;
        prefixCls?: unknown;
        label?: unknown;
        help?: unknown;
        extra?: unknown;
        labelCol?: unknown;
        wrapperCol?: unknown;
        hasFeedback?: unknown;
        colon?: unknown;
        labelAlign?: unknown;
        prop?: unknown;
        name?: unknown;
        rules?: unknown;
        autoLink?: unknown;
        required?: unknown;
        validateFirst?: unknown;
        validateStatus?: unknown;
        validateTrigger?: unknown;
        messageVariables?: unknown;
        hidden?: unknown;
    } & {
        prefixCls: string;
        hidden: boolean;
        id: string;
        htmlFor: string;
        hasFeedback: boolean;
        autoLink: boolean;
    } & {
        name?: string | number | string[] | number[];
        required?: boolean;
        validateTrigger?: string | string[];
        label?: import("../_util/type").VueNode;
        help?: import("../_util/type").VueNode;
        labelCol?: unknown;
        labelAlign?: "left" | "right";
        colon?: boolean;
        extra?: import("../_util/type").VueNode;
        validateStatus?: "" | "validating" | "error" | "success" | "warning";
        wrapperCol?: unknown;
        prop?: string | number | string[] | number[];
        rules?: unknown[] | {
            [key: string]: any;
        };
        validateFirst?: boolean;
        messageVariables?: Record<string, string>;
    }>, {
        prefixCls: string;
        hidden: boolean;
        id: string;
        htmlFor: string;
        hasFeedback: boolean;
        autoLink: boolean;
    }>;
    readonly useForm: typeof useForm;
} & Plugin & {
    readonly Item: typeof Form.Item;
    readonly useForm: typeof useForm;
};
export default _default;
