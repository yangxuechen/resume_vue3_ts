import moment from 'moment';
interface WeekPickerState {
    _open?: boolean;
    _value?: moment.Moment | null;
}
declare const _default: import("vue").DefineComponent<{
    placeholder: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    value: {
        type: import("vue").PropType<import("./props").PickerValue>;
    };
    defaultValue: {
        type: import("vue").PropType<import("./props").PickerValue>;
    };
    defaultPickerValue: {
        type: import("vue").PropType<import("./props").PickerValue>;
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
    prevState: WeekPickerState;
    input: any;
    sPrefixCls: any;
}, WeekPickerState, {}, {
    saveInput(node: any): void;
    weekDateRender({ current }: {
        current: any;
    }): JSX.Element;
    handleChange(value: moment.Moment | null): void;
    handleOpenChange(open: boolean): void;
    clearSelection(e: MouseEvent): void;
    focus(): void;
    blur(): void;
    renderFooter(...args: any[]): JSX.Element;
}, {
    methods: {
        setState(state: {}, callback: any): void;
        __emit(...args: any[]): void;
    };
}, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    placeholder?: unknown;
    value?: unknown;
    defaultValue?: unknown;
    defaultPickerValue?: unknown;
    renderExtraFooter?: unknown;
    onChange?: unknown;
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
    showToday?: unknown;
    dateRender?: unknown;
    pickerClass?: unknown;
    pickerInputClass?: unknown;
    timePicker?: unknown;
    autofocus?: unknown;
    tagPrefixCls?: unknown;
    tabindex?: unknown;
    align?: unknown;
    inputReadOnly?: unknown;
    valueFormat?: unknown;
    onOpenChange?: unknown;
    onFocus?: unknown;
    onBlur?: unknown;
    onMouseenter?: unknown;
    onMouseleave?: unknown;
} & {
    name: string;
    prefixCls: string;
    align: {
        [key: string]: any;
    };
    placeholder: string;
    transitionName: string;
    dropdownClassName: string;
    popupStyle: {
        [key: string]: any;
    };
    inputPrefixCls: string;
    valueFormat: string;
    tagPrefixCls: string;
    localeCode: string;
    pickerClass: string;
    pickerInputClass: string;
} & {
    value?: import("./props").PickerValue;
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
    disabled?: boolean;
    autofocus?: boolean;
    defaultValue?: import("./props").PickerValue;
    allowClear?: boolean;
    suffixIcon?: any;
    onOpenChange?: (...args: any[]) => any;
    disabledDate?: (...args: any[]) => any;
    showToday?: boolean;
    defaultPickerValue?: import("./props").PickerValue;
    timePicker?: any;
    renderExtraFooter?: any;
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
    placeholder: string;
    transitionName: string;
    dropdownClassName: string;
    popupStyle: {
        [key: string]: any;
    };
    onOpenChange: (...args: any[]) => any;
    inputPrefixCls: string;
    disabledDate: (...args: any[]) => any;
    valueFormat: string;
    tagPrefixCls: string;
    localeCode: string;
    getCalendarContainer: (...args: any[]) => any;
    pickerClass: string;
    pickerInputClass: string;
}>;
export default _default;
