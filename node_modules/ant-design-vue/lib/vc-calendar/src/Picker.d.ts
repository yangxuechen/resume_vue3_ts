export default Picker;
declare const Picker: import("vue").DefineComponent<{
    animation: import("vue-types").VueTypeDef<any>;
    disabled: import("vue-types").VueTypeValidableDef<boolean>;
    transitionName: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    format: import("vue-types").VueTypeDef<any>;
    getCalendarContainer: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    calendar: import("vue-types").VueTypeValidableDef<any>;
    open: import("vue-types").VueTypeValidableDef<boolean>;
    defaultOpen: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
    prefixCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    placement: import("vue-types").VueTypeValidableDef<any> & {
        default: any;
    };
    value: {
        validator(value: any): boolean;
    };
    defaultValue: {
        validator(value: any): boolean;
    };
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
    dropdownClassName: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    dateRender: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    children: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
}, any, {
    sOpen: boolean;
    sValue: unknown;
}, {}, {
    onCalendarKeyDown(event: any): void;
    onCalendarSelect(value: any, cause?: {}): void;
    onKeyDown(event: any): void;
    onCalendarOk(): void;
    onCalendarClear(): void;
    onCalendarBlur(): void;
    onVisibleChange(open: any): void;
    getCalendarElement(): import("vue").VNode<any, any, {
        [key: string]: any;
    }>;
    setOpen(open: any, callback: any): void;
    openCalendar(callback: any): void;
    closeCalendar(callback: any): void;
    focus(): void;
    focusCalendar(): void;
}, {
    methods: {
        setState(state: {}, callback: any): void;
        __emit(...args: any[]): void;
    };
}, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    animation?: unknown;
    disabled?: unknown;
    transitionName?: unknown;
    format?: unknown;
    getCalendarContainer?: unknown;
    calendar?: unknown;
    open?: unknown;
    defaultOpen?: unknown;
    prefixCls?: unknown;
    placement?: unknown;
    value?: unknown;
    defaultValue?: unknown;
    align?: unknown;
    dropdownClassName?: unknown;
    dateRender?: unknown;
    children?: unknown;
} & {
    prefixCls: string;
    align: {
        [key: string]: any;
    };
    transitionName: string;
    dropdownClassName: string;
    defaultOpen: boolean;
} & {
    value?: unknown;
    format?: any;
    children?: (...args: any[]) => any;
    open?: boolean;
    disabled?: boolean;
    animation?: any;
    defaultValue?: unknown;
    placement?: any;
    getCalendarContainer?: (...args: any[]) => any;
    dateRender?: (...args: any[]) => any;
    calendar?: any;
}>, {
    children: (...args: any[]) => any;
    prefixCls: string;
    align: {
        [key: string]: any;
    };
    transitionName: string;
    dropdownClassName: string;
    defaultOpen: boolean;
    placement: any;
    getCalendarContainer: (...args: any[]) => any;
    dateRender: (...args: any[]) => any;
}>;
