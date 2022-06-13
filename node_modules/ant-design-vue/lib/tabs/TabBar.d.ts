import type { PropType } from 'vue';
declare const TabBar: import("vue").DefineComponent<{
    prefixCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    centered: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
    tabBarStyle: import("vue-types").VueTypeValidableDef<import("vue").CSSProperties>;
    tabBarExtraContent: import("vue-types").VueTypeValidableDef<import("../_util/type").VueNode>;
    type: import("vue-types").VueTypeDef<"line" | "card" | "editable-card">;
    tabPosition: import("vue-types").VueTypeDef<"left" | "right" | "bottom" | "top"> & {
        default: "left" | "right" | "bottom" | "top";
    };
    tabBarPosition: import("vue-types").VueTypeDef<"left" | "right" | "bottom" | "top">;
    size: import("vue-types").VueTypeDef<"default" | "small" | "large">;
    animated: {
        type: PropType<boolean | {
            inkBar: boolean;
            tabPane: boolean;
        }>;
        default: any;
    };
    renderTabBar: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    panels: import("vue-types").VueTypeValidableDef<unknown[]> & {
        default: () => unknown[];
    } & {
        default: () => unknown[];
    };
    activeKey: import("vue-types").VueTypeDef<string | number>;
    tabBarGutter: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
}, unknown, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    prefixCls?: unknown;
    centered?: unknown;
    tabBarStyle?: unknown;
    tabBarExtraContent?: unknown;
    type?: unknown;
    tabPosition?: unknown;
    tabBarPosition?: unknown;
    size?: unknown;
    animated?: unknown;
    renderTabBar?: unknown;
    panels?: unknown;
    activeKey?: unknown;
    tabBarGutter?: unknown;
} & {
    prefixCls: string;
    centered: boolean;
    tabPosition: "left" | "right" | "bottom" | "top";
    panels: unknown[];
    tabBarGutter: number;
} & {
    type?: "line" | "card" | "editable-card";
    size?: "default" | "small" | "large";
    activeKey?: string | number;
    tabBarStyle?: import("vue").CSSProperties;
    tabBarExtraContent?: import("../_util/type").VueNode;
    tabBarPosition?: "left" | "right" | "bottom" | "top";
    animated?: boolean | {
        inkBar: boolean;
        tabPane: boolean;
    };
    renderTabBar?: (...args: any[]) => any;
}>, {
    prefixCls: string;
    centered: boolean;
    tabPosition: "left" | "right" | "bottom" | "top";
    animated: boolean | {
        inkBar: boolean;
        tabPane: boolean;
    };
    renderTabBar: (...args: any[]) => any;
    panels: unknown[];
    tabBarGutter: number;
}>;
export default TabBar;
