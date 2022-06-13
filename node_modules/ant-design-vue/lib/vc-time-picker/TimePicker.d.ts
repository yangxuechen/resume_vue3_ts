declare var _default: import("vue").DefineComponent<any, any, {
    sOpen: never;
    sValue: never;
}, {}, {
    onPanelChange(value: any): void;
    onAmPmChange(ampm: any): void;
    onClear(event: any): void;
    onVisibleChange(open: any): void;
    onEsc(): void;
    onKeyDown(e: any): void;
    onKeyDown2(e: any): void;
    setValue(value: any): void;
    getFormat(): string;
    getPanelElement(): JSX.Element;
    getPopupClassName(): string;
    setOpen(open: any): void;
    focus(): void;
    blur(): void;
    onFocus(e: any): void;
    onBlur(e: any): void;
    renderClearButton(): import("vue").VNode<any, any, {
        [key: string]: any;
    }>;
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
