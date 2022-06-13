import type { PropType, ExtractPropTypes, ComputedRef } from 'vue';
import type { InternalNamePath, RuleError, ValidateOptions } from './interface';
import type { ValidationRule } from './Form';
declare const ValidateStatuses: ["success", "warning", "error", "validating", ""];
export declare type ValidateStatus = typeof ValidateStatuses[number];
export interface FieldExpose {
    fieldValue: ComputedRef<any>;
    fieldId: ComputedRef<any>;
    fieldName: ComputedRef<any>;
    resetField: () => void;
    clearValidate: () => void;
    namePath: ComputedRef<InternalNamePath>;
    rules?: ComputedRef<ValidationRule[]>;
    validateRules: (options: ValidateOptions) => Promise<void> | Promise<RuleError[]>;
}
export declare const formItemProps: {
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
        }>>;
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
        }>>;
    };
    hasFeedback: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
    colon: import("vue-types").VueTypeValidableDef<boolean>;
    labelAlign: import("vue-types").VueTypeDef<"left" | "right">;
    prop: {
        type: PropType<string | number | string[] | number[]>;
    };
    name: {
        type: PropType<string | number | string[] | number[]>;
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
        type: PropType<string | string[]>;
    };
    messageVariables: {
        type: PropType<Record<string, string>>;
    };
    hidden: BooleanConstructor;
};
export declare type FormItemProps = Partial<ExtractPropTypes<typeof formItemProps>>;
declare const _default: import("vue").DefineComponent<{
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
        }>>;
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
        }>>;
    };
    hasFeedback: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
    colon: import("vue-types").VueTypeValidableDef<boolean>;
    labelAlign: import("vue-types").VueTypeDef<"left" | "right">;
    prop: {
        type: PropType<string | number | string[] | number[]>;
    };
    name: {
        type: PropType<string | number | string[] | number[]>;
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
        type: PropType<string | string[]>;
    };
    messageVariables: {
        type: PropType<Record<string, string>>;
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
export default _default;
