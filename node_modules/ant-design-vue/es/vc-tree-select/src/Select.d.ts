export default Select;
declare const Select: import("vue").DefineComponent<any, any, any, {}, {
    getDerivedState(nextProps: any, prevState: any): {
        _prevProps: any;
        _init: boolean;
    };
    onSelectorFocus(): void;
    onSelectorBlur(): void;
    onComponentKeyDown(event: any): void;
    onDeselect(wrappedValue: any, node: any, nodeEventInfo: any): void;
    onSelectorClear(event: any): void;
    onMultipleSelectorRemove(event: any, removeValue: any): void;
    onValueTrigger(isAdd: any, nodeList: any, nodeEventInfo: any, nodeExtraInfo: any): void;
    onTreeNodeSelect(_: any, nodeEventInfo: any): void;
    onTreeNodeCheck(_: any, nodeEventInfo: any): void;
    onDropdownVisibleChange(open: any): void;
    onSearchInputChange(event: any): void;
    onSearchInputKeyDown(event: any): void;
    onChoiceAnimationLeave(): void;
    setPopupRef(popup: any): void;
    /**
     * Only update the value which is not in props
     */
    setUncontrolledState(state: any): false;
    setOpenState(open: any, byTrigger?: boolean): void;
    isMultiple(): boolean;
    isLabelInValue(): any;
    isSearchValueControlled(): boolean;
    forcePopupAlign(): void;
    delayForcePopupAlign(): void;
    /**
     * 1. Update state valueList.
     * 2. Fire `onChange` event to user.
     */
    triggerChange(missValueList: any, valueList: any, extraInfo?: {}): void;
    focus(): void;
    blur(): void;
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
