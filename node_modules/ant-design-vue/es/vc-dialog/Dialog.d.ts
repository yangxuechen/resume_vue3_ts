declare var _default: import("vue").DefineComponent<any, any, {
    inTransition: boolean;
    titleId: string;
    dialogMouseDown: any;
}, {}, {
    getDialogWrap(): unknown;
    updatedCallback(visible: any): void;
    tryFocus(): void;
    onAnimateLeave(): void;
    onDialogMouseDown(): void;
    onMaskMouseUp(): void;
    onMaskClick(e: any): void;
    onKeydown(e: any): void;
    getDialogElement(): JSX.Element;
    getZIndexStyle(): {
        zIndex: any;
    };
    getWrapStyle(): any;
    getMaskStyle(): any;
    getMaskElement(): JSX.Element;
    getMaskTransitionName(): any;
    getTransitionName(): any;
    switchScrollingEffect(): void;
    close(e: any): void;
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
