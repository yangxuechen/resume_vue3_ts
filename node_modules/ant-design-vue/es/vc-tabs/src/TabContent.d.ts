declare var _default: import("vue").DefineComponent<{
    animated: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
    animatedWithMargin: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
    prefixCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    activeKey: import("vue-types").VueTypeDef<string | number>;
    tabBarPosition: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    direction: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    destroyInactiveTabPane: import("vue-types").VueTypeValidableDef<boolean>;
    children: import("vue-types").VueTypeValidableDef<any>;
}, any, any, {
    classes(): {
        [x: string]: boolean;
        [x: number]: boolean;
    };
}, {
    getTabPanes(children: any): any[];
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    animated?: unknown;
    animatedWithMargin?: unknown;
    prefixCls?: unknown;
    activeKey?: unknown;
    tabBarPosition?: unknown;
    direction?: unknown;
    destroyInactiveTabPane?: unknown;
    children?: unknown;
} & {
    prefixCls: string;
    direction: string;
    tabBarPosition: string;
    animated: boolean;
    animatedWithMargin: boolean;
} & {
    children?: any;
    activeKey?: string | number;
    destroyInactiveTabPane?: boolean;
}>, {
    prefixCls: string;
    direction: string;
    tabBarPosition: string;
    animated: boolean;
    animatedWithMargin: boolean;
}>;
export default _default;
