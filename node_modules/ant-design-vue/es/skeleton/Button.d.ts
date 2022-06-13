import type { SkeletonElementProps } from './Element';
export interface SkeletonButtonProps extends Omit<SkeletonElementProps, 'size'> {
    size?: 'large' | 'small' | 'default';
}
declare const SkeletonButton: import("vue").DefineComponent<{
    size: import("vue-types").VueTypeDef<"default" | "small" | "large">;
    prefixCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    shape: import("vue-types").VueTypeDef<"circle" | "round" | "square">;
    active: import("vue-types").VueTypeValidableDef<boolean>;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    size?: unknown;
    prefixCls?: unknown;
    shape?: unknown;
    active?: unknown;
} & {
    prefixCls: string;
} & {
    size?: "default" | "small" | "large";
    active?: boolean;
    shape?: "circle" | "round" | "square";
}>, {
    prefixCls: string;
}>;
export default SkeletonButton;
