import type { ExtractPropTypes } from 'vue';
export declare const skeletonProps: {
    active: import("vue-types").VueTypeValidableDef<boolean>;
    loading: import("vue-types").VueTypeValidableDef<boolean>;
    prefixCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    avatar: import("vue-types").VueTypeDef<string | boolean | object>;
    title: import("vue-types").VueTypeDef<string | boolean | {
        prefixCls: (string | ((props: Record<string, unknown>) => string)) & string;
        width: string | number;
    }>;
    paragraph: import("vue-types").VueTypeDef<string | boolean | {
        prefixCls: (string | ((props: Record<string, unknown>) => string)) & string;
        width: string | number | import("vue-types/dist/types").DefaultFactory<(string | number)[]>;
        rows: (number | ((props: Record<string, unknown>) => number)) & number;
    }>;
};
export declare type SkeletonProps = Partial<ExtractPropTypes<typeof skeletonProps>>;
declare const Skeleton: import("vue").DefineComponent<any, () => JSX.Element | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>[], unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    [x: string]: any;
}> | Readonly<{
    [x: string]: unknown;
} & {
    [x: string]: any;
} & {
    [x: number]: any;
}>, {} | {
    [x: string]: any;
}>;
export default Skeleton;
