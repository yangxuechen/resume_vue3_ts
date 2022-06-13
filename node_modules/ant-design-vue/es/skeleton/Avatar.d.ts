import type { SkeletonElementProps } from './Element';
export interface AvatarProps extends Omit<SkeletonElementProps, 'shape'> {
    shape?: 'circle' | 'square';
}
export declare const avatarProps: {
    shape: import("vue-types").VueTypeDef<"circle" | "square">;
    prefixCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    size: import("vue-types").VueTypeDef<number | "default" | "small" | "large">;
    active: import("vue-types").VueTypeValidableDef<boolean>;
};
declare const SkeletonAvatar: import("vue").DefineComponent<{
    shape: import("vue-types").VueTypeDef<"circle" | "square">;
    prefixCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    size: import("vue-types").VueTypeDef<number | "default" | "small" | "large">;
    active: import("vue-types").VueTypeValidableDef<boolean>;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    shape?: unknown;
    prefixCls?: unknown;
    size?: unknown;
    active?: unknown;
} & {
    prefixCls: string;
} & {
    size?: number | "default" | "small" | "large";
    active?: boolean;
    shape?: "circle" | "square";
}>, {
    prefixCls: string;
}>;
export default SkeletonAvatar;
