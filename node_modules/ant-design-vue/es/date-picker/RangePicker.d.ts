import moment from 'moment';
declare type RangePickerValue = undefined[] | null[] | [moment.Moment] | [undefined, moment.Moment] | [moment.Moment, undefined] | [null, moment.Moment] | [moment.Moment, null] | [moment.Moment, moment.Moment];
export declare type RangePickerPresetRange = RangePickerValue | (() => RangePickerValue);
export interface RangePickerState {
    sValue?: RangePickerValue;
    sShowDate?: RangePickerValue;
    sOpen?: boolean;
    sHoverValue?: RangePickerValue;
}
declare const _default: import("vue").DefineComponent<{
    tagPrefixCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    value: {
        type: import("vue").PropType<import("./props").RangePickerValue>;
    };
    defaultValue: {
        type: import("vue").PropType<import("./props").RangePickerValue>;
    };
    defaultPickerValue: {
        type: import("vue").PropType<import("./props").RangePickerValue>;
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
}, {
    configProvider: {
        getTargetContainer?: () => HTMLElement;
        getPopupContainer?: (triggerNode: HTMLElement) => HTMLElement;
        prefixCls?: string;
        getPrefixCls?: (suffixCls?: string, customizePrefixCls?: string) => string;
        renderEmpty?: typeof import("../config-provider/renderEmpty").default;
        transformCellText?: (tableProps: import("../table/interface").TransformCellTextProps) => any;
        csp?: unknown;
        autoInsertSpaceInButton?: boolean;
        locale?: {
            locale: string;
            Pagination?: {
                constructor: Function;
                toString: () => string;
                toLocaleString: () => string;
                valueOf: () => Object;
                hasOwnProperty: (v: PropertyKey) => boolean;
                isPrototypeOf: (v: Object) => boolean;
                propertyIsEnumerable: (v: PropertyKey) => boolean;
            };
            DatePicker?: {
                constructor: Function;
                toString: () => string;
                toLocaleString: () => string;
                valueOf: () => Object;
                hasOwnProperty: (v: PropertyKey) => boolean;
                isPrototypeOf: (v: Object) => boolean;
                propertyIsEnumerable: (v: PropertyKey) => boolean;
            };
            TimePicker?: {
                constructor: Function;
                toString: () => string;
                toLocaleString: () => string;
                valueOf: () => Object;
                hasOwnProperty: (v: PropertyKey) => boolean;
                isPrototypeOf: (v: Object) => boolean;
                propertyIsEnumerable: (v: PropertyKey) => boolean;
            };
            Calendar?: {
                constructor: Function;
                toString: () => string;
                toLocaleString: () => string;
                valueOf: () => Object;
                hasOwnProperty: (v: PropertyKey) => boolean;
                isPrototypeOf: (v: Object) => boolean;
                propertyIsEnumerable: (v: PropertyKey) => boolean;
            };
            Table?: {
                constructor: Function;
                toString: () => string;
                toLocaleString: () => string;
                valueOf: () => Object;
                hasOwnProperty: (v: PropertyKey) => boolean;
                isPrototypeOf: (v: Object) => boolean;
                propertyIsEnumerable: (v: PropertyKey) => boolean;
            };
            Modal?: {
                okText: string;
                cancelText: string;
                justOkText: string;
            };
            Popconfirm?: {
                constructor: Function;
                toString: () => string;
                toLocaleString: () => string;
                valueOf: () => Object;
                hasOwnProperty: (v: PropertyKey) => boolean;
                isPrototypeOf: (v: Object) => boolean;
                propertyIsEnumerable: (v: PropertyKey) => boolean;
            };
            Transfer?: {
                constructor: Function;
                toString: () => string;
                toLocaleString: () => string;
                valueOf: () => Object;
                hasOwnProperty: (v: PropertyKey) => boolean;
                isPrototypeOf: (v: Object) => boolean;
                propertyIsEnumerable: (v: PropertyKey) => boolean;
            };
            Select?: {
                constructor: Function;
                toString: () => string;
                toLocaleString: () => string;
                valueOf: () => Object;
                hasOwnProperty: (v: PropertyKey) => boolean;
                isPrototypeOf: (v: Object) => boolean;
                propertyIsEnumerable: (v: PropertyKey) => boolean;
            };
            Upload?: {
                constructor: Function;
                toString: () => string;
                toLocaleString: () => string;
                valueOf: () => Object;
                hasOwnProperty: (v: PropertyKey) => boolean;
                isPrototypeOf: (v: Object) => boolean;
                propertyIsEnumerable: (v: PropertyKey) => boolean;
            };
            Form?: {
                optional?: string;
                defaultValidateMessages: {
                    default?: string | (() => string);
                    required?: string | (() => string);
                    enum?: string | (() => string);
                    whitespace?: string | (() => string);
                    date?: {
                        format?: string | (() => string);
                        parse?: string | (() => string);
                        invalid?: string | (() => string);
                    };
                    types?: {
                        string?: string | (() => string);
                        method?: string | (() => string);
                        array?: string | (() => string);
                        object?: string | (() => string);
                        number?: string | (() => string);
                        date?: string | (() => string);
                        boolean?: string | (() => string);
                        integer?: string | (() => string);
                        float?: string | (() => string);
                        regexp?: string | (() => string);
                        email?: string | (() => string);
                        url?: string | (() => string);
                        hex?: string | (() => string);
                    };
                    string?: {
                        len?: string | (() => string);
                        min?: string | (() => string);
                        max?: string | (() => string);
                        range?: string | (() => string);
                    };
                    number?: {
                        len?: string | (() => string);
                        min?: string | (() => string);
                        max?: string | (() => string);
                        range?: string | (() => string);
                    };
                    array?: {
                        len?: string | (() => string);
                        min?: string | (() => string);
                        max?: string | (() => string);
                        range?: string | (() => string);
                    };
                    pattern?: {
                        mismatch?: string | (() => string);
                    };
                };
            };
            Image?: {
                preview: string;
            };
        };
        pageHeader?: {
            ghost: boolean;
        };
        componentSize?: import("../config-provider").SizeType;
        direction?: "ltr" | "rtl";
        space?: {
            size: number | import("../config-provider").SizeType;
        };
        virtual?: boolean;
        dropdownMatchSelectWidth?: boolean;
        form?: unknown;
    };
    picker: any;
    sTagPrefixCls: any;
    sPrefixCls: string;
}, RangePickerState, {}, {
    setValue(value: RangePickerValue, hidePanel?: boolean): void;
    savePicker(node: any): void;
    clearSelection(e: any): void;
    clearHoverValue(): void;
    handleChange(value: RangePickerValue): void;
    handleOpenChange(open: boolean): void;
    handleShowDateChange(showDate: boolean): void;
    handleHoverChange(hoverValue: any): void;
    handleRangeMouseLeave(): void;
    handleCalendarInputSelect(value: RangePickerValue): void;
    handleRangeClick(value: RangePickerPresetRange): void;
    onMouseEnter(e: MouseEvent): void;
    onMouseLeave(e: MouseEvent): void;
    focus(): void;
    blur(): void;
    renderFooter(): JSX.Element[];
}, {
    methods: {
        setState(state: {}, callback: any): void;
        __emit(...args: any[]): void;
    };
}, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    tagPrefixCls?: unknown;
    value?: unknown;
    defaultValue?: unknown;
    defaultPickerValue?: unknown;
    timePicker?: unknown;
    showTime?: unknown;
    ranges?: unknown;
    placeholder?: unknown;
    mode?: unknown;
    separator?: unknown;
    disabledTime?: unknown;
    showToday?: unknown;
    renderExtraFooter?: unknown;
    onChange?: unknown;
    onCalendarChange?: unknown;
    onOk?: unknown;
    onPanelChange?: unknown;
    onMouseenter?: unknown;
    onMouseleave?: unknown;
    name?: unknown;
    transitionName?: unknown;
    prefixCls?: unknown;
    inputPrefixCls?: unknown;
    format?: unknown;
    disabled?: unknown;
    allowClear?: unknown;
    suffixIcon?: unknown;
    popupStyle?: unknown;
    dropdownClassName?: unknown;
    locale?: unknown;
    localeCode?: unknown;
    size?: unknown;
    getCalendarContainer?: unknown;
    open?: unknown;
    disabledDate?: unknown;
    dateRender?: unknown;
    pickerClass?: unknown;
    pickerInputClass?: unknown;
    autofocus?: unknown;
    tabindex?: unknown;
    align?: unknown;
    inputReadOnly?: unknown;
    valueFormat?: unknown;
    onOpenChange?: unknown;
    onFocus?: unknown;
    onBlur?: unknown;
} & {
    name: string;
    prefixCls: string;
    align: {
        [key: string]: any;
    };
    transitionName: string;
    dropdownClassName: string;
    popupStyle: {
        [key: string]: any;
    };
    inputPrefixCls: string;
    valueFormat: string;
    tagPrefixCls: string;
    ranges: {
        [key: string]: any;
    };
    localeCode: string;
    pickerClass: string;
    pickerInputClass: string;
} & {
    value?: import("./props").RangePickerValue;
    locale?: any;
    format?: any;
    onFocus?: (...args: any[]) => any;
    onBlur?: (...args: any[]) => any;
    onChange?: (...args: any[]) => any;
    onMouseenter?: (...args: any[]) => any;
    onMouseleave?: (...args: any[]) => any;
    tabindex?: string | number;
    size?: "default" | "small" | "large";
    open?: boolean;
    separator?: any;
    disabled?: boolean;
    mode?: string | string[];
    autofocus?: boolean;
    placeholder?: string[];
    defaultValue?: import("./props").RangePickerValue;
    allowClear?: boolean;
    suffixIcon?: any;
    onOpenChange?: (...args: any[]) => any;
    disabledDate?: (...args: any[]) => any;
    onPanelChange?: (...args: any[]) => any;
    showToday?: boolean;
    defaultPickerValue?: import("./props").RangePickerValue;
    timePicker?: any;
    showTime?: boolean | {
        [key: string]: any;
    };
    disabledTime?: (...args: any[]) => any;
    renderExtraFooter?: any;
    onCalendarChange?: (...args: any[]) => any;
    onOk?: (...args: any[]) => any;
    getCalendarContainer?: (...args: any[]) => any;
    dateRender?: any;
    inputReadOnly?: boolean;
}>, {
    name: string;
    prefixCls: string;
    onFocus: (...args: any[]) => any;
    onBlur: (...args: any[]) => any;
    onChange: (...args: any[]) => any;
    onMouseenter: (...args: any[]) => any;
    onMouseleave: (...args: any[]) => any;
    align: {
        [key: string]: any;
    };
    transitionName: string;
    dropdownClassName: string;
    popupStyle: {
        [key: string]: any;
    };
    onOpenChange: (...args: any[]) => any;
    inputPrefixCls: string;
    disabledDate: (...args: any[]) => any;
    valueFormat: string;
    onPanelChange: (...args: any[]) => any;
    tagPrefixCls: string;
    ranges: {
        [key: string]: any;
    };
    disabledTime: (...args: any[]) => any;
    onCalendarChange: (...args: any[]) => any;
    onOk: (...args: any[]) => any;
    localeCode: string;
    getCalendarContainer: (...args: any[]) => any;
    pickerClass: string;
    pickerInputClass: string;
}>;
export default _default;
