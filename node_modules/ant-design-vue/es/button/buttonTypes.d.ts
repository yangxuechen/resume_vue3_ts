import type { ExtractPropTypes, PropType } from 'vue';
import type { SizeType } from '../config-provider';
declare const ButtonTypes: ["default", "primary", "ghost", "dashed", "link", "text"];
export declare type ButtonType = typeof ButtonTypes[number];
declare const ButtonShapes: ["circle", "round"];
export declare type ButtonShape = typeof ButtonShapes[number];
declare const ButtonHTMLTypes: ["submit", "button", "reset"];
export declare type ButtonHTMLType = typeof ButtonHTMLTypes[number];
export declare type LegacyButtonType = ButtonType | 'danger';
export declare function convertLegacyProps(type?: LegacyButtonType): ButtonProps;
declare const buttonProps: () => {
    prefixCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    type: import("vue-types").VueTypeDef<"default" | "link" | "text" | "dashed" | "ghost" | "primary">;
    htmlType: import("vue-types").VueTypeDef<"reset" | "button" | "submit"> & {
        default: "reset" | "button" | "submit";
    };
    shape: import("vue-types").VueTypeDef<"circle" | "round">;
    size: {
        type: PropType<SizeType>;
    };
    loading: {
        type: PropType<boolean | {
            delay?: number;
        }>;
        default: () => boolean | {
            delay?: number;
        };
    };
    disabled: import("vue-types").VueTypeValidableDef<boolean>;
    ghost: import("vue-types").VueTypeValidableDef<boolean>;
    block: import("vue-types").VueTypeValidableDef<boolean>;
    danger: import("vue-types").VueTypeValidableDef<boolean>;
    icon: import("vue-types").VueTypeValidableDef<import("../_util/type").VueNode>;
    href: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    target: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    title: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    onClick: {
        type: PropType<(event: MouseEvent) => void>;
    };
};
export declare type ButtonProps = Partial<ExtractPropTypes<ReturnType<typeof buttonProps>>>;
export default buttonProps;
