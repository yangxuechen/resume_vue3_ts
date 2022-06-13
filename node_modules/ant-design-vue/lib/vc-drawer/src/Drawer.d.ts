export default Drawer;
declare const Drawer: import("vue").DefineComponent<any, any, {
    sOpen: boolean;
    isOpenChange: any;
    passive: any;
    container: any;
}, {}, {
    domFocus(): void;
    onKeyDown(e: any): void;
    onMaskTouchEnd(e: any): void;
    onIconTouchEnd(e: any): void;
    onTouchEnd(e: any, close: any): void;
    onWrapperTransitionEnd(e: any): void;
    getDefault(props: any): void;
    getCurrentDrawerSome(): boolean;
    getSelfContainer(): any;
    getParentAndLevelDom(props: any): void;
    setLevelDomTransform(open: any, openTransition: any, placementName: any, value: any): void;
    getChildToRender(open: any): JSX.Element;
    getOpen(): boolean;
    getTouchParentScroll(root: any, currentTarget: any, differX: any, differY: any): any;
    removeStartHandler(e: any): void;
    removeMoveHandler(e: any): void;
    trnasitionEnd(e: any): void;
    defaultGetContainer(): HTMLDivElement;
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
