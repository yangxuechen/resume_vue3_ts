declare var _default: import("vue").DefineComponent<any, any, {
    active: boolean;
}, {}, {
    triggerEvent(type: any, isActive: any, ev: any): void;
    onTouchStart(e: any): void;
    onTouchMove(e: any): void;
    onTouchEnd(e: any): void;
    onTouchCancel(e: any): void;
    onMouseDown(e: any): void;
    onMouseUp(e: any): void;
    onMouseLeave(e: any): void;
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
