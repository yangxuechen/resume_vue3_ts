import type { AvatarSize } from './Avatar';
import type { PropType, ExtractPropTypes, CSSProperties } from 'vue';
declare const groupProps: {
    prefixCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    maxCount: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
    maxStyle: {
        type: PropType<CSSProperties>;
        default: () => CSSProperties;
    };
    maxPopoverPlacement: import("vue-types").VueTypeDef<"bottom" | "top"> & {
        default: "bottom" | "top";
    };
    size: {
        type: PropType<AvatarSize>;
        default: () => AvatarSize;
    };
};
export declare type AvatarGroupProps = Partial<ExtractPropTypes<typeof groupProps>> & {
    size?: AvatarSize;
};
declare const Group: import("vue").DefineComponent<{
    prefixCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    maxCount: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
    maxStyle: {
        type: PropType<CSSProperties>;
        default: () => CSSProperties;
    };
    maxPopoverPlacement: import("vue-types").VueTypeDef<"bottom" | "top"> & {
        default: "bottom" | "top";
    };
    size: {
        type: PropType<AvatarSize>;
        default: () => AvatarSize;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    prefixCls?: unknown;
    maxCount?: unknown;
    maxStyle?: unknown;
    maxPopoverPlacement?: unknown;
    size?: unknown;
} & {
    prefixCls: string;
    size: AvatarSize;
    maxCount: number;
    maxStyle: CSSProperties;
    maxPopoverPlacement: "bottom" | "top";
} & {}>, {
    prefixCls: string;
    size: AvatarSize;
    maxCount: number;
    maxStyle: CSSProperties;
    maxPopoverPlacement: "bottom" | "top";
}>;
export default Group;
