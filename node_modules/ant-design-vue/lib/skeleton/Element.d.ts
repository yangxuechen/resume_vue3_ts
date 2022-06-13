import type { ExtractPropTypes, FunctionalComponent } from 'vue';
export declare const skeletonElementProps: () => {
    prefixCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    size: import("vue-types").VueTypeDef<number | "default" | "small" | "large">;
    shape: import("vue-types").VueTypeDef<"circle" | "round" | "square">;
    active: import("vue-types").VueTypeValidableDef<boolean>;
};
export declare type SkeletonElementProps = Partial<ExtractPropTypes<ReturnType<typeof skeletonElementProps>>>;
declare const Element: FunctionalComponent<SkeletonElementProps>;
export default Element;
