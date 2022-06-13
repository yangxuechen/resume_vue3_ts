import type { VNode } from 'vue';
export declare function hasPrefixSuffix(instance: any): boolean;
declare const ClearableLabeledInput: import("vue").DefineComponent<{
    prefixCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    inputType: import("vue-types").VueTypeDef<"input" | "text">;
    value: import("vue-types").VueTypeValidableDef<any>;
    defaultValue: import("vue-types").VueTypeValidableDef<any>;
    allowClear: import("vue-types").VueTypeValidableDef<boolean>;
    element: import("vue-types").VueTypeValidableDef<import("../_util/type").VueNode>;
    handleReset: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    disabled: import("vue-types").VueTypeValidableDef<boolean>;
    size: import("vue-types").VueTypeDef<"default" | "small" | "large">;
    suffix: import("vue-types").VueTypeValidableDef<import("../_util/type").VueNode>;
    prefix: import("vue-types").VueTypeValidableDef<import("../_util/type").VueNode>;
    addonBefore: import("vue-types").VueTypeValidableDef<import("../_util/type").VueNode>;
    addonAfter: import("vue-types").VueTypeValidableDef<import("../_util/type").VueNode>;
    readonly: import("vue-types").VueTypeValidableDef<boolean>;
    isFocused: import("vue-types").VueTypeValidableDef<boolean>;
}, unknown, unknown, {}, {
    renderClearIcon(prefixCls: string): JSX.Element;
    renderSuffix(prefixCls: string): JSX.Element;
    renderLabeledIcon(prefixCls: string, element: VNode): VNode;
    renderInputWithLabel(prefixCls: string, labeledElement: VNode): JSX.Element;
    renderTextAreaWithClearIcon(prefixCls: string, element: VNode): VNode<any, any, {
        [key: string]: any;
    }>;
    renderClearableLabeledInput(): any;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    prefixCls?: unknown;
    inputType?: unknown;
    value?: unknown;
    defaultValue?: unknown;
    allowClear?: unknown;
    element?: unknown;
    handleReset?: unknown;
    disabled?: unknown;
    size?: unknown;
    suffix?: unknown;
    prefix?: unknown;
    addonBefore?: unknown;
    addonAfter?: unknown;
    readonly?: unknown;
    isFocused?: unknown;
} & {
    prefixCls: string;
} & {
    element?: import("../_util/type").VueNode;
    value?: any;
    size?: "default" | "small" | "large";
    disabled?: boolean;
    suffix?: import("../_util/type").VueNode;
    defaultValue?: any;
    allowClear?: boolean;
    prefix?: import("../_util/type").VueNode;
    inputType?: "input" | "text";
    handleReset?: (...args: any[]) => any;
    addonBefore?: import("../_util/type").VueNode;
    addonAfter?: import("../_util/type").VueNode;
    readonly?: boolean;
    isFocused?: boolean;
}>, {
    prefixCls: string;
    handleReset: (...args: any[]) => any;
}>;
export default ClearableLabeledInput;
