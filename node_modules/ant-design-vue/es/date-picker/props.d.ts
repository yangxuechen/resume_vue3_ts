import type { PropType } from 'vue';
import type moment from 'moment';
export declare type PickerValue = moment.Moment | undefined | null | string;
export declare type RangePickerValue = undefined[] | null[] | [moment.Moment | string] | [undefined, moment.Moment | string] | [moment.Moment | string, undefined] | [null, moment.Moment | string] | [moment.Moment | string, null] | [moment.Moment, moment.Moment] | [string, string];
export declare const PickerProps: {
    name: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    transitionName: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    prefixCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    inputPrefixCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    format: import("vue-types").VueTypeDef<any>;
    disabled: import("vue-types").VueTypeValidableDef<boolean>;
    allowClear: import("vue-types").VueTypeValidableDef<boolean>;
    suffixIcon: import("vue-types").VueTypeValidableDef<any>;
    popupStyle: import("vue-types").VueTypeValidableDef<{
        [key: string]: any;
    }> & {
        default: () => {
            [key: string]: any;
        };
    };
    dropdownClassName: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    locale: import("vue-types").VueTypeValidableDef<any>;
    localeCode: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    size: import("vue-types").VueTypeDef<"default" | "small" | "large">;
    getCalendarContainer: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    open: import("vue-types").VueTypeValidableDef<boolean>;
    disabledDate: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    showToday: import("vue-types").VueTypeValidableDef<boolean>;
    dateRender: import("vue-types").VueTypeValidableDef<any>;
    pickerClass: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    pickerInputClass: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    timePicker: import("vue-types").VueTypeValidableDef<any>;
    autofocus: import("vue-types").VueTypeValidableDef<boolean>;
    tagPrefixCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    tabindex: import("vue-types").VueTypeDef<string | number>;
    align: import("vue-types").VueTypeValidableDef<{
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
    inputReadOnly: import("vue-types").VueTypeValidableDef<boolean>;
    valueFormat: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    onOpenChange: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    onFocus: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    onBlur: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    onMouseenter: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    onMouseleave: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
};
export declare const SinglePickerProps: {
    value: {
        type: PropType<PickerValue>;
    };
    defaultValue: {
        type: PropType<PickerValue>;
    };
    defaultPickerValue: {
        type: PropType<PickerValue>;
    };
    renderExtraFooter: import("vue-types").VueTypeValidableDef<any>;
    placeholder: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    onChange: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
};
export declare const DatePickerProps: {
    showTime: import("vue-types").VueTypeDef<boolean | {
        [key: string]: any;
    }>;
    open: import("vue-types").VueTypeValidableDef<boolean>;
    disabledTime: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    mode: import("vue-types").VueTypeDef<"date" | "time" | "year" | "month" | "decade">;
    onOpenChange: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    onPanelChange: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    onOk: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    value: {
        type: PropType<PickerValue>;
    };
    defaultValue: {
        type: PropType<PickerValue>;
    };
    defaultPickerValue: {
        type: PropType<PickerValue>;
    };
    renderExtraFooter: import("vue-types").VueTypeValidableDef<any>;
    placeholder: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    onChange: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    name: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    transitionName: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    prefixCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    inputPrefixCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    format: import("vue-types").VueTypeDef<any>;
    disabled: import("vue-types").VueTypeValidableDef<boolean>;
    allowClear: import("vue-types").VueTypeValidableDef<boolean>;
    suffixIcon: import("vue-types").VueTypeValidableDef<any>;
    popupStyle: import("vue-types").VueTypeValidableDef<{
        [key: string]: any;
    }> & {
        default: () => {
            [key: string]: any;
        };
    };
    dropdownClassName: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    locale: import("vue-types").VueTypeValidableDef<any>;
    localeCode: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    size: import("vue-types").VueTypeDef<"default" | "small" | "large">;
    getCalendarContainer: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    disabledDate: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    showToday: import("vue-types").VueTypeValidableDef<boolean>;
    dateRender: import("vue-types").VueTypeValidableDef<any>;
    pickerClass: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    pickerInputClass: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    timePicker: import("vue-types").VueTypeValidableDef<any>;
    autofocus: import("vue-types").VueTypeValidableDef<boolean>;
    tagPrefixCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    tabindex: import("vue-types").VueTypeDef<string | number>;
    align: import("vue-types").VueTypeValidableDef<{
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
    inputReadOnly: import("vue-types").VueTypeValidableDef<boolean>;
    valueFormat: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    onFocus: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    onBlur: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    onMouseenter: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    onMouseleave: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
};
export declare const MonthPickerProps: {
    placeholder: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    monthCellContentRender: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    value: {
        type: PropType<PickerValue>;
    };
    defaultValue: {
        type: PropType<PickerValue>;
    };
    defaultPickerValue: {
        type: PropType<PickerValue>;
    };
    renderExtraFooter: import("vue-types").VueTypeValidableDef<any>;
    onChange: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    name: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    transitionName: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    prefixCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    inputPrefixCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    format: import("vue-types").VueTypeDef<any>;
    disabled: import("vue-types").VueTypeValidableDef<boolean>;
    allowClear: import("vue-types").VueTypeValidableDef<boolean>;
    suffixIcon: import("vue-types").VueTypeValidableDef<any>;
    popupStyle: import("vue-types").VueTypeValidableDef<{
        [key: string]: any;
    }> & {
        default: () => {
            [key: string]: any;
        };
    };
    dropdownClassName: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    locale: import("vue-types").VueTypeValidableDef<any>;
    localeCode: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    size: import("vue-types").VueTypeDef<"default" | "small" | "large">;
    getCalendarContainer: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    open: import("vue-types").VueTypeValidableDef<boolean>;
    disabledDate: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    showToday: import("vue-types").VueTypeValidableDef<boolean>;
    dateRender: import("vue-types").VueTypeValidableDef<any>;
    pickerClass: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    pickerInputClass: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    timePicker: import("vue-types").VueTypeValidableDef<any>;
    autofocus: import("vue-types").VueTypeValidableDef<boolean>;
    tagPrefixCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    tabindex: import("vue-types").VueTypeDef<string | number>;
    align: import("vue-types").VueTypeValidableDef<{
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
    inputReadOnly: import("vue-types").VueTypeValidableDef<boolean>;
    valueFormat: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    onOpenChange: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    onFocus: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    onBlur: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    onMouseenter: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    onMouseleave: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
};
export declare const RangePickerProps: {
    tagPrefixCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    value: {
        type: PropType<RangePickerValue>;
    };
    defaultValue: {
        type: PropType<RangePickerValue>;
    };
    defaultPickerValue: {
        type: PropType<RangePickerValue>;
    };
    timePicker: import("vue-types").VueTypeValidableDef<any>;
    showTime: import("vue-types").VueTypeDef<boolean | {
        [key: string]: any;
    }>;
    ranges: import("vue-types").VueTypeValidableDef<{
        [key: string]: any;
    }> & {
        default: () => {
            [key: string]: any;
        };
    };
    placeholder: import("vue-types").VueTypeDef<string[]>;
    mode: import("vue-types").VueTypeDef<string | string[]>;
    separator: import("vue-types").VueTypeValidableDef<any>;
    disabledTime: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    showToday: import("vue-types").VueTypeValidableDef<boolean>;
    renderExtraFooter: import("vue-types").VueTypeValidableDef<any>;
    onChange: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    onCalendarChange: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    onOk: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    onPanelChange: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    onMouseenter: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    onMouseleave: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    name: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    transitionName: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    prefixCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    inputPrefixCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    format: import("vue-types").VueTypeDef<any>;
    disabled: import("vue-types").VueTypeValidableDef<boolean>;
    allowClear: import("vue-types").VueTypeValidableDef<boolean>;
    suffixIcon: import("vue-types").VueTypeValidableDef<any>;
    popupStyle: import("vue-types").VueTypeValidableDef<{
        [key: string]: any;
    }> & {
        default: () => {
            [key: string]: any;
        };
    };
    dropdownClassName: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    locale: import("vue-types").VueTypeValidableDef<any>;
    localeCode: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    size: import("vue-types").VueTypeDef<"default" | "small" | "large">;
    getCalendarContainer: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    open: import("vue-types").VueTypeValidableDef<boolean>;
    disabledDate: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    dateRender: import("vue-types").VueTypeValidableDef<any>;
    pickerClass: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    pickerInputClass: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    autofocus: import("vue-types").VueTypeValidableDef<boolean>;
    tabindex: import("vue-types").VueTypeDef<string | number>;
    align: import("vue-types").VueTypeValidableDef<{
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
    inputReadOnly: import("vue-types").VueTypeValidableDef<boolean>;
    valueFormat: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    onOpenChange: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    onFocus: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    onBlur: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
};
export declare const WeekPickerProps: {
    placeholder: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    value: {
        type: PropType<PickerValue>;
    };
    defaultValue: {
        type: PropType<PickerValue>;
    };
    defaultPickerValue: {
        type: PropType<PickerValue>;
    };
    renderExtraFooter: import("vue-types").VueTypeValidableDef<any>;
    onChange: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    name: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    transitionName: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    prefixCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    inputPrefixCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    format: import("vue-types").VueTypeDef<any>;
    disabled: import("vue-types").VueTypeValidableDef<boolean>;
    allowClear: import("vue-types").VueTypeValidableDef<boolean>;
    suffixIcon: import("vue-types").VueTypeValidableDef<any>;
    popupStyle: import("vue-types").VueTypeValidableDef<{
        [key: string]: any;
    }> & {
        default: () => {
            [key: string]: any;
        };
    };
    dropdownClassName: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    locale: import("vue-types").VueTypeValidableDef<any>;
    localeCode: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    size: import("vue-types").VueTypeDef<"default" | "small" | "large">;
    getCalendarContainer: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    open: import("vue-types").VueTypeValidableDef<boolean>;
    disabledDate: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    showToday: import("vue-types").VueTypeValidableDef<boolean>;
    dateRender: import("vue-types").VueTypeValidableDef<any>;
    pickerClass: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    pickerInputClass: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    timePicker: import("vue-types").VueTypeValidableDef<any>;
    autofocus: import("vue-types").VueTypeValidableDef<boolean>;
    tagPrefixCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    tabindex: import("vue-types").VueTypeDef<string | number>;
    align: import("vue-types").VueTypeValidableDef<{
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
    inputReadOnly: import("vue-types").VueTypeValidableDef<boolean>;
    valueFormat: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    onOpenChange: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    onFocus: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    onBlur: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    onMouseenter: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    onMouseleave: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
};
