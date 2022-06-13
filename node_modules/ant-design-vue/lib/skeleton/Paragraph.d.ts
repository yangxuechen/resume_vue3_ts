import type { ExtractPropTypes } from 'vue';
export declare const skeletonParagraphProps: {
    prefixCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    width: import("vue-types").VueTypeDef<string | number | (string | number)[]>;
    rows: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
};
export declare type SkeletonParagraphProps = Partial<ExtractPropTypes<typeof skeletonParagraphProps>>;
declare const SkeletonParagraph: import("vue").DefineComponent<{
    prefixCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    width: import("vue-types").VueTypeDef<string | number | (string | number)[]>;
    rows: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    prefixCls?: unknown;
    width?: unknown;
    rows?: unknown;
} & {
    prefixCls: string;
    rows: number;
} & {
    width?: string | number | (string | number)[];
}>, {
    prefixCls: string;
    rows: number;
}>;
export default SkeletonParagraph;
