import type { ExtractPropTypes } from 'vue';
declare type ColSpanType = number | string;
export interface ColSize {
    span?: ColSpanType;
    order?: ColSpanType;
    offset?: ColSpanType;
    push?: ColSpanType;
    pull?: ColSpanType;
}
export declare const colSize: import("vue-types").VueTypeLooseShape<ColSize>;
declare const colProps: {
    span: import("vue-types").VueTypeDef<string | number>;
    order: import("vue-types").VueTypeDef<string | number>;
    offset: import("vue-types").VueTypeDef<string | number>;
    push: import("vue-types").VueTypeDef<string | number>;
    pull: import("vue-types").VueTypeDef<string | number>;
    xs: import("vue-types").VueTypeDef<string | number | ColSize>;
    sm: import("vue-types").VueTypeDef<string | number | ColSize>;
    md: import("vue-types").VueTypeDef<string | number | ColSize>;
    lg: import("vue-types").VueTypeDef<string | number | ColSize>;
    xl: import("vue-types").VueTypeDef<string | number | ColSize>;
    xxl: import("vue-types").VueTypeDef<string | number | ColSize>;
    prefixCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    flex: import("vue-types").VueTypeDef<string | number>;
};
export declare type ColProps = Partial<ExtractPropTypes<typeof colProps>>;
declare const _default: import("vue").DefineComponent<{
    span: import("vue-types").VueTypeDef<string | number>;
    order: import("vue-types").VueTypeDef<string | number>;
    offset: import("vue-types").VueTypeDef<string | number>;
    push: import("vue-types").VueTypeDef<string | number>;
    pull: import("vue-types").VueTypeDef<string | number>;
    xs: import("vue-types").VueTypeDef<string | number | ColSize>;
    sm: import("vue-types").VueTypeDef<string | number | ColSize>;
    md: import("vue-types").VueTypeDef<string | number | ColSize>;
    lg: import("vue-types").VueTypeDef<string | number | ColSize>;
    xl: import("vue-types").VueTypeDef<string | number | ColSize>;
    xxl: import("vue-types").VueTypeDef<string | number | ColSize>;
    prefixCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    flex: import("vue-types").VueTypeDef<string | number>;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
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
    xxl?: string | number | ColSize;
    xl?: string | number | ColSize;
    lg?: string | number | ColSize;
    md?: string | number | ColSize;
    sm?: string | number | ColSize;
    xs?: string | number | ColSize;
    pull?: string | number;
}>, {
    prefixCls: string;
}>;
export default _default;
