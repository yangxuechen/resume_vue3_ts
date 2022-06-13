import type { ExtractPropTypes } from 'vue';
export declare const listItemMetaProps: {
    avatar: import("vue-types").VueTypeValidableDef<any>;
    description: import("vue-types").VueTypeValidableDef<any>;
    prefixCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    title: import("vue-types").VueTypeValidableDef<any>;
};
export declare type ListItemMetaProps = Partial<ExtractPropTypes<typeof listItemMetaProps>>;
declare const _default: import("vue").DefineComponent<{
    avatar: import("vue-types").VueTypeValidableDef<any>;
    description: import("vue-types").VueTypeValidableDef<any>;
    prefixCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    title: import("vue-types").VueTypeValidableDef<any>;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    avatar?: unknown;
    description?: unknown;
    prefixCls?: unknown;
    title?: unknown;
} & {
    prefixCls: string;
} & {
    title?: any;
    description?: any;
    avatar?: any;
}>, {
    prefixCls: string;
}>;
export default _default;
