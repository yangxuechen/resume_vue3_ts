import type { SkeletonElementProps } from './Element';
export declare type SkeletonImageProps = Omit<SkeletonElementProps, 'size' | 'shape' | 'active'>;
declare const SkeletonImage: import("vue").DefineComponent<{
    prefixCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    size: import("vue-types").VueTypeDef<number | "default" | "small" | "large">;
    shape: import("vue-types").VueTypeDef<"circle" | "round" | "square">;
    active: import("vue-types").VueTypeValidableDef<boolean>;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    prefixCls?: unknown;
    size?: unknown;
    shape?: unknown;
    active?: unknown;
} & {
    prefixCls: string;
} & {
    size?: number | "default" | "small" | "large";
    active?: boolean;
    shape?: "circle" | "round" | "square";
}>, {
    prefixCls: string;
}>;
export default SkeletonImage;
