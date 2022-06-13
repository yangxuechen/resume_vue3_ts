declare var _default: import("vue").DefineComponent<any, any, {
    visible: boolean;
}, {}, {
    getEventNode(): HTMLElement | (Window & typeof globalThis);
    getOffset(): {
        top: any;
        bottom: any;
        left: any;
        right: any;
    };
    lazyLoadHandler(): void;
    detachListeners(): void;
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
