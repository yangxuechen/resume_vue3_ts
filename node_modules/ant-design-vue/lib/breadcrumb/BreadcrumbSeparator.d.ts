import type { ExtractPropTypes } from 'vue';
declare const breadcrumbSeparatorProps: {
    prefixCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
};
export declare type BreadcrumbSeparatorProps = Partial<ExtractPropTypes<typeof breadcrumbSeparatorProps>>;
declare const _default: import("vue").DefineComponent<{
    prefixCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    prefixCls?: unknown;
} & {
    prefixCls: string;
} & {}>, {
    prefixCls: string;
}>;
export default _default;
