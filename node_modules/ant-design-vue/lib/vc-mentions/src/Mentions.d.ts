declare var _default: import("vue").DefineComponent<{}, {}, {
    _value: any;
    measuring: boolean;
    measureLocation: number;
    measureText: any;
    measurePrefix: string;
    activeIndex: number;
    isFocus: boolean;
}, {}, {
    triggerChange(value: any): void;
    onChange({ target: { value, composing }, isComposing }: {
        target: {
            value: any;
            composing: any;
        };
        isComposing: any;
    }): void;
    onKeyDown(event: any): void;
    /**
     * When to start measure:
     * 1. When user press `prefix`
     * 2. When measureText !== prevMeasureText
     *  - If measure hit
     *  - If measuring
     *
     * When to stop measure:
     * 1. Selection is out of range
     * 2. Contains `space`
     * 3. ESC or select one
     */
    onKeyUp(event: any): void;
    onInputFocus(event: any): void;
    onInputBlur(event: any): void;
    onDropdownFocus(): void;
    onDropdownBlur(): void;
    onFocus(event: any): void;
    onBlur(event: any): void;
    selectOption(option: any): void;
    setActiveIndex(activeIndex: any): void;
    getOptions(measureText: any): {
        children: any;
    }[];
    startMeasure(measureText: any, measurePrefix: any, measureLocation: any): void;
    stopMeasure(callback: any): void;
    focus(): void;
    blur(): void;
}, {
    methods: {
        setState(state: {}, callback: any): void;
        __emit(...args: any[]): void;
    };
}, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{} & {} & {}>, {}>;
export default _default;
