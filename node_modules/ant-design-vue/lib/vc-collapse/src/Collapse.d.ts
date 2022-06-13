declare var _default: import("vue").DefineComponent<any, any, {
    currentOpenAnimations: any;
    stateActiveKey: any;
}, {}, {
    onClickItem(key: any): void;
    getNewChild(child: any, index: any): import("vue").VNode<any, any, {
        [key: string]: any;
    }>;
    getItems(): any[];
    setActiveKey(activeKey: any): void;
}, {
    methods: {
        setState(state: {}, callback: any): void;
        __emit(...args: any[]): void;
    };
}, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    [x: string]: any;
}> | Readonly<{
    [x: string]: unknown;
} & {
    [x: string]: any;
} & {
    [x: number]: any;
}>, {} | {
    [x: string]: any;
}>;
export default _default;
