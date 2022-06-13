import type { ExtractPropTypes } from 'vue';
declare const anchorLinkProps: {
    prefixCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    href: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    title: import("vue-types").VueTypeValidableDef<import("../_util/type").VueNode>;
    target: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
};
export declare type AnchorLinkProps = Partial<ExtractPropTypes<typeof anchorLinkProps>>;
declare const _default: import("vue").DefineComponent<{
    prefixCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    href: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    title: import("vue-types").VueTypeValidableDef<import("../_util/type").VueNode>;
    target: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    prefixCls?: unknown;
    href?: unknown;
    title?: unknown;
    target?: unknown;
} & {
    prefixCls: string;
    target: string;
    href: string;
} & {
    title?: import("../_util/type").VueNode;
}>, {
    prefixCls: string;
    target: string;
    href: string;
}>;
export default _default;
