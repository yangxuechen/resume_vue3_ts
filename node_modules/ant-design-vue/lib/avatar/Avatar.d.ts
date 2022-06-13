import type { VueNode } from '../_util/type';
import type { ExtractPropTypes, PropType } from 'vue';
import type { ScreenSizeMap } from '../_util/responsiveObserve';
export declare type AvatarSize = 'large' | 'small' | 'default' | number | ScreenSizeMap;
export declare const avatarProps: {
    prefixCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    shape: import("vue-types").VueTypeDef<"circle" | "square"> & {
        default: "circle" | "square";
    };
    size: {
        type: PropType<AvatarSize>;
        default: () => AvatarSize;
    };
    src: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    /** Srcset of image avatar */
    srcset: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    icon: import("vue-types").VueTypeValidableDef<VueNode>;
    alt: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    gap: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
    draggable: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
    loadError: {
        type: PropType<() => boolean>;
    };
};
export declare type AvatarProps = Partial<ExtractPropTypes<typeof avatarProps>>;
declare const Avatar: import("vue").DefineComponent<{
    prefixCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    shape: import("vue-types").VueTypeDef<"circle" | "square"> & {
        default: "circle" | "square";
    };
    size: {
        type: PropType<AvatarSize>;
        default: () => AvatarSize;
    };
    src: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    /** Srcset of image avatar */
    srcset: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    icon: import("vue-types").VueTypeValidableDef<VueNode>;
    alt: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    gap: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
    draggable: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
    loadError: {
        type: PropType<() => boolean>;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    prefixCls?: unknown;
    shape?: unknown;
    size?: unknown;
    src?: unknown;
    srcset?: unknown;
    icon?: unknown;
    alt?: unknown;
    gap?: unknown;
    draggable?: unknown;
    loadError?: unknown;
} & {
    prefixCls: string;
    size: AvatarSize;
    shape: "circle" | "square";
    src: string;
    srcset: string;
    alt: string;
    gap: number;
    draggable: boolean;
} & {
    icon?: VueNode;
    loadError?: () => boolean;
}>, {
    prefixCls: string;
    size: AvatarSize;
    shape: "circle" | "square";
    src: string;
    srcset: string;
    alt: string;
    gap: number;
    draggable: boolean;
}>;
export default Avatar;
