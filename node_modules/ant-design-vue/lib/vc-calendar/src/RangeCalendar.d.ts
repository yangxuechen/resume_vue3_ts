export default RangeCalendar;
declare const RangeCalendar: import("vue").DefineComponent<{
    locale: import("vue-types").VueTypeValidableDef<{
        [key: string]: any;
    }> & {
        default: () => {
            [key: string]: any;
        };
    } & {
        default: () => {
            [key: string]: any;
        };
    };
    visible: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
    prefixCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    dateInputPlaceholder: import("vue-types").VueTypeValidableDef<any>;
    seperator: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    defaultValue: import("vue-types").VueTypeValidableDef<any>;
    value: import("vue-types").VueTypeValidableDef<any>;
    hoverValue: import("vue-types").VueTypeValidableDef<any>;
    mode: import("vue-types").VueTypeDef<string[]>;
    showDateInput: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
    timePicker: import("vue-types").VueTypeValidableDef<any>;
    showOk: import("vue-types").VueTypeValidableDef<boolean>;
    showToday: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
    defaultSelectedValue: import("vue-types").VueTypeValidableDef<unknown[]> & {
        default: () => unknown[];
    } & {
        default: () => unknown[];
    };
    selectedValue: import("vue-types").VueTypeValidableDef<unknown[]> & {
        default: () => unknown[];
    };
    showClear: import("vue-types").VueTypeValidableDef<boolean>;
    showWeekNumber: import("vue-types").VueTypeValidableDef<boolean>;
    format: import("vue-types").VueTypeDef<any>;
    type: import("vue-types").VueTypeValidableDef<any> & {
        default: any;
    };
    disabledDate: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    disabledTime: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    } & {
        default: (...args: any[]) => any;
    };
    renderFooter: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    } & {
        default: (...args: any[]) => any;
    };
    renderSidebar: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    } & {
        default: (...args: any[]) => any;
    };
    dateRender: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    clearIcon: import("vue-types").VueTypeValidableDef<any>;
    inputReadOnly: import("vue-types").VueTypeValidableDef<boolean>;
}, any, {
    sSelectedValue: unknown[];
    prevSelectedValue: unknown[];
    firstSelectedValue: any;
    sHoverValue: any;
    sValue: any[];
    sShowTimePicker: boolean;
    sMode: string[];
    sPanelTriggerSource: string;
}, {}, {
    onDatePanelEnter(): void;
    onDatePanelLeave(): void;
    onSelect(value: any): void;
    onKeyDown(event: any): void;
    onDayHover(value: any): any[];
    onToday(): void;
    onOpenTimePicker(): void;
    onCloseTimePicker(): void;
    onOk(): void;
    onStartInputChange(...oargs: any[]): any;
    onEndInputChange(...oargs: any[]): any;
    onStartInputSelect(value: any): any;
    onEndInputSelect(value: any): any;
    onStartValueChange(leftValue: any): void;
    onEndValueChange(rightValue: any): void;
    onStartPanelChange(value: any, mode: any): void;
    onEndPanelChange(value: any, mode: any): void;
    getStartValue(): any;
    getEndValue(): any;
    getEndDisableTime(): any;
    isAllowedDateAndTime(selectedValue: any): boolean;
    isMonthYearPanelShow(mode: any): boolean;
    hasSelectedValue(): boolean;
    compare(v1: any, v2: any): any;
    fireSelectValueChange(selectedValue: any, direct: any, cause: any): void;
    fireValueChange(value: any): void;
    fireHoverValueChange(hoverValue: any): void;
    clear(): void;
    disabledStartTime(time: any): any;
    disabledEndTime(time: any): any;
    disabledStartMonth(month: any): any;
    disabledEndMonth(month: any): any;
}, {
    methods: {
        setState(state: {}, callback: any): void;
        __emit(...args: any[]): void;
    };
} | {
    methods: {
        getFormat(): any;
        focus(): void;
        saveFocusElement(focusElement: any): void;
        saveRoot(root: any): void;
    };
}, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    locale?: unknown;
    visible?: unknown;
    prefixCls?: unknown;
    dateInputPlaceholder?: unknown;
    seperator?: unknown;
    defaultValue?: unknown;
    value?: unknown;
    hoverValue?: unknown;
    mode?: unknown;
    showDateInput?: unknown;
    timePicker?: unknown;
    showOk?: unknown;
    showToday?: unknown;
    defaultSelectedValue?: unknown;
    selectedValue?: unknown;
    showClear?: unknown;
    showWeekNumber?: unknown;
    format?: unknown;
    type?: unknown;
    disabledDate?: unknown;
    disabledTime?: unknown;
    renderFooter?: unknown;
    renderSidebar?: unknown;
    dateRender?: unknown;
    clearIcon?: unknown;
    inputReadOnly?: unknown;
} & {
    locale: {
        [key: string]: any;
    };
    prefixCls: string;
    visible: boolean;
    selectedValue: unknown[];
    defaultSelectedValue: unknown[];
    showToday: boolean;
    seperator: string;
    showDateInput: boolean;
} & {
    value?: any;
    type?: any;
    format?: any;
    mode?: string[];
    defaultValue?: any;
    clearIcon?: any;
    disabledDate?: (...args: any[]) => any;
    renderFooter?: (...args: any[]) => any;
    renderSidebar?: (...args: any[]) => any;
    timePicker?: any;
    disabledTime?: (...args: any[]) => any;
    dateRender?: (...args: any[]) => any;
    inputReadOnly?: boolean;
    dateInputPlaceholder?: any;
    hoverValue?: any;
    showOk?: boolean;
    showClear?: boolean;
    showWeekNumber?: boolean;
}>, {
    type: any;
    locale: {
        [key: string]: any;
    };
    prefixCls: string;
    visible: boolean;
    disabledDate: (...args: any[]) => any;
    selectedValue: unknown[];
    defaultSelectedValue: unknown[];
    renderFooter: (...args: any[]) => any;
    renderSidebar: (...args: any[]) => any;
    showToday: boolean;
    disabledTime: (...args: any[]) => any;
    dateRender: (...args: any[]) => any;
    seperator: string;
    showDateInput: boolean;
}>;
