declare var _default: import("vue").DefineComponent<any, any, {}, {}, {
    defaultHandle({ index, directives, className, style, ...restProps }: {
        [x: string]: any;
        index: any;
        directives: any;
        className: any;
        style: any;
    }): JSX.Element;
    onMouseDown(e: any): void;
    onTouchStart(e: any): void;
    onFocus(e: any): void;
    onBlur(e: any): void;
    onMouseUp(): void;
    onMouseMove(e: any): void;
    onTouchMove(e: any): void;
    onKeyDown(e: any): void;
    onClickMarkLabel(e: any, value: any): void;
    getSliderStart(): any;
    getSliderLength(): any;
    addDocumentTouchEvents(): void;
    addDocumentMouseEvents(): void;
    removeDocumentEvents(): void;
    focus(): void;
    blur(): void;
    calcValue(offset: any): number;
    calcValueByPos(position: any): any;
    calcOffset(value: any): number;
    saveSlider(slider: any): void;
    saveHandle(index: any, handle: any): void;
}, any, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
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
