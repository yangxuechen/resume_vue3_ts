declare var _default: import("vue").DefineComponent<{
    destroyInactiveTabPane: import("vue-types").VueTypeValidableDef<boolean>;
    renderTabBar: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    } & {
        required: true;
    };
    renderTabContent: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    } & {
        required: true;
    };
    navWrapper: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    } & {
        default: (...args: any[]) => any;
    };
    children: import("vue-types").VueTypeValidableDef<any> & {
        default: any;
    };
    prefixCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    tabBarPosition: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    activeKey: import("vue-types").VueTypeDef<string | number>;
    defaultActiveKey: import("vue-types").VueTypeDef<string | number>;
    direction: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    tabBarGutter: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
}, {
    state: {
        _activeKey: string | number;
    };
}, any, {}, {
    onTabClick(activeKey: any, e: any): void;
    onNavKeyDown(e: any): void;
    onScroll({ target, currentTarget }: {
        target: any;
        currentTarget: any;
    }): void;
    setSentinelStart(node: any): void;
    setSentinelEnd(node: any): void;
    setPanelSentinelStart(node: any): void;
    setPanelSentinelEnd(node: any): void;
    setActiveKey(activeKey: any): void;
    getNextActiveKey(next: any): any;
    updateSentinelContext(): void;
}, {
    methods: {
        setState(state: {}, callback: any): void;
        __emit(...args: any[]): void;
    };
}, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    destroyInactiveTabPane?: unknown;
    renderTabBar?: unknown;
    renderTabContent?: unknown;
    navWrapper?: unknown;
    children?: unknown;
    prefixCls?: unknown;
    tabBarPosition?: unknown;
    activeKey?: unknown;
    defaultActiveKey?: unknown;
    direction?: unknown;
    tabBarGutter?: unknown;
} & {
    prefixCls: string;
    direction: string;
    tabBarPosition: string;
    tabBarGutter: number;
} & {
    children?: any;
    activeKey?: string | number;
    renderTabBar?: (...args: any[]) => any;
    destroyInactiveTabPane?: boolean;
    defaultActiveKey?: string | number;
    renderTabContent?: (...args: any[]) => any;
    navWrapper?: (...args: any[]) => any;
}>, {
    children: any;
    prefixCls: string;
    direction: string;
    tabBarPosition: string;
    renderTabBar: (...args: any[]) => any;
    tabBarGutter: number;
    renderTabContent: (...args: any[]) => any;
    navWrapper: (...args: any[]) => any;
}>;
export default _default;
