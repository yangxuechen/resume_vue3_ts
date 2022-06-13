import type { PropType, ExtractPropTypes, HTMLAttributes } from 'vue';
import FormItem from './FormItem';
import type { Options } from 'scroll-into-view-if-needed';
import type { VueNode } from '../_util/type';
import type { SizeType } from '../config-provider';
import useForm from './useForm';
export declare type RequiredMark = boolean | 'optional';
export declare type FormLayout = 'horizontal' | 'inline' | 'vertical';
export declare type ValidationRule = {
    /** validation error message */
    message?: VueNode;
    /** built-in validation type, available options: https://github.com/yiminghe/async-validator#type */
    type?: string;
    /** indicates whether field is required */
    required?: boolean;
    /** treat required fields that only contain whitespace as errors */
    whitespace?: boolean;
    /** validate the exact length of a field */
    len?: number;
    /** validate the min length of a field */
    min?: number;
    /** validate the max length of a field */
    max?: number;
    /** validate the value from a list of possible values */
    enum?: string | string[];
    /** validate from a regular expression */
    pattern?: RegExp;
    /** transform a value before validation */
    transform?: (value: any) => any;
    /** custom validate function (Note: callback must be called) */
    validator?: (rule: any, value: any, callback: any, source?: any, options?: any) => any;
    trigger?: string;
};
export declare const formProps: {
    layout: import("vue-types").VueTypeDef<"inline" | "horizontal" | "vertical">;
    labelCol: {
        type: PropType<Partial<{
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
            xxl?: string | number | import("../grid/Col").ColSize;
            xl?: string | number | import("../grid/Col").ColSize;
            lg?: string | number | import("../grid/Col").ColSize;
            md?: string | number | import("../grid/Col").ColSize;
            sm?: string | number | import("../grid/Col").ColSize;
            xs?: string | number | import("../grid/Col").ColSize;
            pull?: string | number;
        }> & HTMLAttributes>;
    };
    wrapperCol: {
        type: PropType<Partial<{
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
            xxl?: string | number | import("../grid/Col").ColSize;
            xl?: string | number | import("../grid/Col").ColSize;
            lg?: string | number | import("../grid/Col").ColSize;
            md?: string | number | import("../grid/Col").ColSize;
            sm?: string | number | import("../grid/Col").ColSize;
            xs?: string | number | import("../grid/Col").ColSize;
            pull?: string | number;
        }> & HTMLAttributes>;
    };
    colon: import("vue-types").VueTypeValidableDef<boolean>;
    labelAlign: import("vue-types").VueTypeDef<"left" | "right">;
    prefixCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    requiredMark: {
        type: PropType<"" | RequiredMark>;
        default: any;
    };
    /** @deprecated Will warning in future branch. Pls use `requiredMark` instead. */
    hideRequiredMark: import("vue-types").VueTypeValidableDef<boolean>;
    model: import("vue-types").VueTypeValidableDef<{
        [key: string]: any;
    }> & {
        default: () => {
            [key: string]: any;
        };
    };
    rules: {
        type: PropType<{
            [k: string]: ValidationRule | ValidationRule[];
        }>;
    };
    validateMessages: import("vue-types").VueTypeValidableDef<{
        [key: string]: any;
    }> & {
        default: () => {
            [key: string]: any;
        };
    };
    validateOnRuleChange: import("vue-types").VueTypeValidableDef<boolean>;
    scrollToFirstError: {
        type: PropType<boolean | Options<any>>;
    };
    onSubmit: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    onFinish: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    onFinishFailed: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    name: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    validateTrigger: {
        type: PropType<string | string[]>;
    };
    size: {
        type: PropType<SizeType>;
    };
};
export declare type FormProps = Partial<ExtractPropTypes<typeof formProps>>;
declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            name: string;
            prefixCls: string;
            onSubmit: (...args: any[]) => any;
            requiredMark: "" | RequiredMark;
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
            size?: SizeType;
            labelCol?: unknown;
            labelAlign?: "left" | "right";
            colon?: boolean;
            requiredMark?: "" | RequiredMark;
            wrapperCol?: unknown;
            rules?: {
                [k: string]: ValidationRule | ValidationRule[];
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
            size?: SizeType;
            labelCol?: unknown;
            labelAlign?: "left" | "right";
            colon?: boolean;
            requiredMark?: "" | RequiredMark;
            wrapperCol?: unknown;
            rules?: {
                [k: string]: ValidationRule | ValidationRule[];
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
            requiredMark: "" | RequiredMark;
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
        size?: SizeType;
        labelCol?: unknown;
        labelAlign?: "left" | "right";
        colon?: boolean;
        requiredMark?: "" | RequiredMark;
        wrapperCol?: unknown;
        rules?: {
            [k: string]: ValidationRule | ValidationRule[];
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
    size?: SizeType;
    labelCol?: unknown;
    labelAlign?: "left" | "right";
    colon?: boolean;
    requiredMark?: "" | RequiredMark;
    wrapperCol?: unknown;
    rules?: {
        [k: string]: ValidationRule | ValidationRule[];
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
    requiredMark: "" | RequiredMark;
    model: {
        [key: string]: any;
    };
    validateMessages: {
        [key: string]: any;
    };
    onFinish: (...args: any[]) => any;
    onFinishFailed: (...args: any[]) => any;
}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & {
    readonly Item: typeof FormItem;
    readonly useForm: typeof useForm;
};
export default _default;
