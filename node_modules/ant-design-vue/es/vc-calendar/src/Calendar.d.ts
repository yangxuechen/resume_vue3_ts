export default Calendar;
declare const Calendar: import("vue").DefineComponent<{
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
    format: import("vue-types").VueTypeDef<any>;
    visible: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
    prefixCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    defaultValue: import("vue-types").VueTypeValidableDef<{
        [key: string]: any;
    }> & {
        default: () => {
            [key: string]: any;
        };
    };
    value: import("vue-types").VueTypeValidableDef<{
        [key: string]: any;
    }> & {
        default: () => {
            [key: string]: any;
        };
    };
    selectedValue: import("vue-types").VueTypeValidableDef<{
        [key: string]: any;
    }> & {
        default: () => {
            [key: string]: any;
        };
    };
    defaultSelectedValue: import("vue-types").VueTypeValidableDef<{
        [key: string]: any;
    }> & {
        default: () => {
            [key: string]: any;
        };
    };
    mode: import("vue-types").VueTypeDef<string>;
    showDateInput: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
    showWeekNumber: import("vue-types").VueTypeValidableDef<boolean>;
    showToday: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
    showOk: import("vue-types").VueTypeValidableDef<boolean>;
    timePicker: import("vue-types").VueTypeValidableDef<any>;
    dateInputPlaceholder: import("vue-types").VueTypeValidableDef<any>;
    disabledDate: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    disabledTime: import("vue-types").VueTypeValidableDef<any>;
    dateRender: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
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
    clearIcon: import("vue-types").VueTypeValidableDef<any>;
    focusablePanel: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
    inputMode: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    inputReadOnly: import("vue-types").VueTypeValidableDef<boolean>;
    monthCellRender: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    monthCellContentRender: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
}, any, {
    sMode: string;
    sValue: moment.Moment;
    sSelectedValue: {
        [key: string]: any;
    };
}, {}, {
    onPanelChange(value: any, mode: any): void;
    onKeyDown(event: any): 1;
    onClear(): void;
    onOk(): void;
    onDateInputChange(value: any): void;
    onDateInputSelect(value: any): void;
    onDateTableSelect(value: any): void;
    onToday(): void;
    onBlur(event: any): void;
    getRootDOMNode(): any;
    openTimePicker(): void;
    closeTimePicker(): void;
    goTime(direction: any, unit: any): void;
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
} | {
    mixins: {
        methods: {
            setState(state: {}, callback: any): void;
            __emit(...args: any[]): void;
        };
    }[];
    inheritAttrs: boolean;
    name: string;
    props: {
        value: import("vue-types").VueTypeDef<any>;
        defaultValue: import("vue-types").VueTypeDef<any>;
    };
    data(): {
        sValue: any;
        sSelectedValue: any;
    };
    watch: {
        value(val: any): void;
        selectedValue(val: any): void;
    };
    methods: {
        onSelect(value: any, cause: any): void;
        renderRoot(newProps: any): JSX.Element;
        setSelectedValue(selectedValue: any, cause: any): void;
        setValue(value: any): void;
        isAllowedDate(value: any): boolean;
    };
}, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    locale?: unknown;
    format?: unknown;
    visible?: unknown;
    prefixCls?: unknown;
    defaultValue?: unknown;
    value?: unknown;
    selectedValue?: unknown;
    defaultSelectedValue?: unknown;
    mode?: unknown;
    showDateInput?: unknown;
    showWeekNumber?: unknown;
    showToday?: unknown;
    showOk?: unknown;
    timePicker?: unknown;
    dateInputPlaceholder?: unknown;
    disabledDate?: unknown;
    disabledTime?: unknown;
    dateRender?: unknown;
    renderFooter?: unknown;
    renderSidebar?: unknown;
    clearIcon?: unknown;
    focusablePanel?: unknown;
    inputMode?: unknown;
    inputReadOnly?: unknown;
    monthCellRender?: unknown;
    monthCellContentRender?: unknown;
} & {
    value: {
        [key: string]: any;
    };
    locale: {
        [key: string]: any;
    };
    prefixCls: string;
    visible: boolean;
    defaultValue: {
        [key: string]: any;
    };
    selectedValue: {
        [key: string]: any;
    };
    defaultSelectedValue: {
        [key: string]: any;
    };
    showToday: boolean;
    showDateInput: boolean;
    focusablePanel: boolean;
    inputMode: string;
} & {
    format?: any;
    mode?: string;
    clearIcon?: any;
    monthCellRender?: (...args: any[]) => any;
    disabledDate?: (...args: any[]) => any;
    renderFooter?: (...args: any[]) => any;
    renderSidebar?: (...args: any[]) => any;
    timePicker?: any;
    disabledTime?: any;
    dateRender?: (...args: any[]) => any;
    inputReadOnly?: boolean;
    dateInputPlaceholder?: any;
    showOk?: boolean;
    showWeekNumber?: boolean;
    monthCellContentRender?: (...args: any[]) => any;
}>, {
    value: {
        [key: string]: any;
    };
    locale: {
        [key: string]: any;
    };
    prefixCls: string;
    visible: boolean;
    defaultValue: {
        [key: string]: any;
    };
    monthCellRender: (...args: any[]) => any;
    disabledDate: (...args: any[]) => any;
    selectedValue: {
        [key: string]: any;
    };
    defaultSelectedValue: {
        [key: string]: any;
    };
    renderFooter: (...args: any[]) => any;
    renderSidebar: (...args: any[]) => any;
    showToday: boolean;
    dateRender: (...args: any[]) => any;
    showDateInput: boolean;
    focusablePanel: boolean;
    inputMode: string;
    monthCellContentRender: (...args: any[]) => any;
}>;
import moment from "moment";
