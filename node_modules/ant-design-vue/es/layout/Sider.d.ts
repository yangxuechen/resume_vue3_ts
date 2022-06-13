import type { PropType, ExtractPropTypes, CSSProperties } from 'vue';
export declare type CollapseType = 'clickTrigger' | 'responsive';
export declare const siderProps: {
    prefixCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    collapsible: import("vue-types").VueTypeValidableDef<boolean>;
    collapsed: import("vue-types").VueTypeValidableDef<boolean>;
    defaultCollapsed: import("vue-types").VueTypeValidableDef<boolean>;
    reverseArrow: import("vue-types").VueTypeValidableDef<boolean>;
    zeroWidthTriggerStyle: import("vue-types").VueTypeValidableDef<CSSProperties>;
    trigger: import("vue-types").VueTypeValidableDef<import("../_util/type").VueNode>;
    width: import("vue-types").VueTypeDef<string | number>;
    collapsedWidth: import("vue-types").VueTypeDef<string | number>;
    breakpoint: import("vue-types").VueTypeDef<"xxl" | "xl" | "lg" | "md" | "sm" | "xs">;
    theme: import("vue-types").VueTypeDef<"dark" | "light"> & {
        default: "dark" | "light";
    };
    onBreakpoint: PropType<(broken: boolean) => void>;
    onCollapse: PropType<(collapsed: boolean, type: CollapseType) => void>;
};
export declare type SiderProps = Partial<ExtractPropTypes<typeof siderProps>>;
export interface SiderContextProps {
    sCollapsed?: boolean;
    collapsedWidth?: string | number;
}
declare const _default: import("vue").DefineComponent<{
    prefixCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    collapsible: import("vue-types").VueTypeValidableDef<boolean>;
    collapsed: import("vue-types").VueTypeValidableDef<boolean>;
    defaultCollapsed: import("vue-types").VueTypeValidableDef<boolean>;
    reverseArrow: import("vue-types").VueTypeValidableDef<boolean>;
    zeroWidthTriggerStyle: import("vue-types").VueTypeValidableDef<CSSProperties>;
    trigger: import("vue-types").VueTypeValidableDef<import("../_util/type").VueNode>;
    width: import("vue-types").VueTypeDef<string | number>;
    collapsedWidth: import("vue-types").VueTypeDef<string | number>;
    breakpoint: import("vue-types").VueTypeDef<"xxl" | "xl" | "lg" | "md" | "sm" | "xs">;
    theme: import("vue-types").VueTypeDef<"dark" | "light"> & {
        default: "dark" | "light";
    };
    onBreakpoint: PropType<(broken: boolean) => void>;
    onCollapse: PropType<(collapsed: boolean, type: CollapseType) => void>;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("collapse" | "breakpoint" | "update:collapsed")[], "collapse" | "breakpoint" | "update:collapsed", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    prefixCls?: unknown;
    collapsible?: unknown;
    collapsed?: unknown;
    defaultCollapsed?: unknown;
    reverseArrow?: unknown;
    zeroWidthTriggerStyle?: unknown;
    trigger?: unknown;
    width?: unknown;
    collapsedWidth?: unknown;
    breakpoint?: unknown;
    theme?: unknown;
    onBreakpoint?: unknown;
    onCollapse?: unknown;
} & {
    prefixCls: string;
    theme: "dark" | "light";
} & {
    width?: string | number;
    trigger?: import("../_util/type").VueNode;
    breakpoint?: "xxl" | "xl" | "lg" | "md" | "sm" | "xs";
    collapsible?: boolean;
    collapsed?: boolean;
    defaultCollapsed?: boolean;
    reverseArrow?: boolean;
    zeroWidthTriggerStyle?: CSSProperties;
    collapsedWidth?: string | number;
    onBreakpoint?: (broken: boolean) => void;
    onCollapse?: (collapsed: boolean, type: CollapseType) => void;
}> & {
    onBreakpoint?: (...args: any[]) => any;
    onCollapse?: (...args: any[]) => any;
    "onUpdate:collapsed"?: (...args: any[]) => any;
}, {
    prefixCls: string;
    theme: "dark" | "light";
}>;
export default _default;
