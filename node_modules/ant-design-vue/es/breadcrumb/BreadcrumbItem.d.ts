import type { ExtractPropTypes } from 'vue';
declare const breadcrumbItemProps: {
    prefixCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    href: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    separator: import("vue-types").VueTypeValidableDef<any>;
    overlay: import("vue-types").VueTypeValidableDef<any>;
};
export declare type BreadcrumbItemProps = Partial<ExtractPropTypes<typeof breadcrumbItemProps>>;
declare const _default: import("vue").DefineComponent<{
    prefixCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    href: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    separator: import("vue-types").VueTypeValidableDef<any>;
    overlay: import("vue-types").VueTypeValidableDef<any>;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    prefixCls?: unknown;
    href?: unknown;
    separator?: unknown;
    overlay?: unknown;
} & {
    prefixCls: string;
    href: string;
} & {
    overlay?: any;
    separator?: any;
}>, {
    prefixCls: string;
    href: string;
}>;
export default _default;
