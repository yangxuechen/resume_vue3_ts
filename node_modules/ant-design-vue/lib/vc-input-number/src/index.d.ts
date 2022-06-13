declare var _default: import("vue").DefineComponent<any, any, {
    inputValue: any;
    sValue: any;
    focused: never;
}, {}, {
    updatedFunc(): void;
    onKeyDown(e: any, ...args: any[]): void;
    onKeyUp(e: any, ...args: any[]): void;
    onTrigger(e: any): false;
    onChange(e: any): void;
    onFocus(...args: any[]): void;
    onBlur(...args: any[]): void;
    getCurrentValidValue(value: any): any;
    getRatio(e: any): number;
    getValueFromEvent(e: any): any;
    getValidValue(value: any, min?: any, max?: any): any;
    setValue(v: any, callback: any): number;
    getPrecision(value: any): number;
    getMaxPrecision(currentValue: any, ratio?: number): number;
    getPrecisionFactor(currentValue: any, ratio?: number): number;
    getInputDisplayValue(state: any): any;
    recordCursorPosition(): void;
    fixCaret(start: any, end: any): void;
    restoreByAfter(str: any): boolean;
    partRestoreByAfter(str: any): any;
    focus(): void;
    blur(): void;
    formatWrapper(num: any): any;
    toPrecisionAsStep(num: any): any;
    isNotCompleteNumber(num: any): boolean;
    toNumber(num: any): any;
    upStep(val: any, rat: any): any;
    downStep(val: any, rat: any): any;
    stepFn(type: any, e: any, ratio: number, recursive: any): void;
    stop(): void;
    down(e: any, ratio: any, recursive: any): void;
    up(e: any, ratio: any, recursive: any): void;
    handleInputClick(): void;
    saveUp(node: any): void;
    saveDown(node: any): void;
    saveInput(node: any): void;
    onCompositionstart(e: any): void;
    onCompositionend(e: any): void;
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
