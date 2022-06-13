import type { ExtractPropTypes } from 'vue';
export declare const skeletonTitleProps: {
    prefixCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    width: import("vue-types").VueTypeDef<string | number>;
};
export declare type SkeletonTitleProps = Partial<ExtractPropTypes<typeof skeletonTitleProps>>;
declare const SkeletonTitle: import("vue").DefineComponent<{
    prefixCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    width: import("vue-types").VueTypeDef<string | number>;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    prefixCls?: unknown;
    width?: unknown;
} & {
    prefixCls: string;
} & {
    width?: string | number;
}>, {
    prefixCls: string;
}>;
export default SkeletonTitle;
