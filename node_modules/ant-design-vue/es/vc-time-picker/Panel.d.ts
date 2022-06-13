export default Panel;
declare const Panel: import("vue").DefineComponent<{
    clearText: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    prefixCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    defaultOpenValue: {
        type: ObjectConstructor;
        default: () => moment.Moment;
    };
    value: import("vue-types").VueTypeValidableDef<any>;
    defaultValue: import("vue-types").VueTypeValidableDef<any>;
    placeholder: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    format: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    inputReadOnly: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
    disabledHours: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    } & {
        default: (...args: any[]) => any;
    };
    disabledMinutes: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    } & {
        default: (...args: any[]) => any;
    };
    disabledSeconds: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    } & {
        default: (...args: any[]) => any;
    };
    hideDisabledOptions: import("vue-types").VueTypeValidableDef<boolean>;
    allowEmpty: import("vue-types").VueTypeValidableDef<boolean>;
    showHour: import("vue-types").VueTypeValidableDef<boolean>;
    showMinute: import("vue-types").VueTypeValidableDef<boolean>;
    showSecond: import("vue-types").VueTypeValidableDef<boolean>;
    use12Hours: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
    hourStep: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
    minuteStep: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
    secondStep: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
    addon: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    } & {
        default: (...args: any[]) => any;
    };
    focusOnOpen: import("vue-types").VueTypeValidableDef<boolean>;
    clearIcon: import("vue-types").VueTypeValidableDef<any>;
}, any, {
    sValue: any;
    selectionRange: any[];
    currentSelectPanel: string;
}, {}, {
    onChange(newValue: any): void;
    onAmPmChange(ampm: any): void;
    onCurrentSelectPanelChange(currentSelectPanel: any): void;
    close(): void;
    onEsc(e: any): void;
    disabledHours2(): any;
    isAM(): boolean;
}, {
    methods: {
        setState(state: {}, callback: any): void;
        __emit(...args: any[]): void;
    };
}, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    clearText?: unknown;
    prefixCls?: unknown;
    defaultOpenValue?: unknown;
    value?: unknown;
    defaultValue?: unknown;
    placeholder?: unknown;
    format?: unknown;
    inputReadOnly?: unknown;
    disabledHours?: unknown;
    disabledMinutes?: unknown;
    disabledSeconds?: unknown;
    hideDisabledOptions?: unknown;
    allowEmpty?: unknown;
    showHour?: unknown;
    showMinute?: unknown;
    showSecond?: unknown;
    use12Hours?: unknown;
    hourStep?: unknown;
    minuteStep?: unknown;
    secondStep?: unknown;
    addon?: unknown;
    focusOnOpen?: unknown;
    clearIcon?: unknown;
} & {
    format: string;
    prefixCls: string;
    placeholder: string;
    inputReadOnly: boolean;
    use12Hours: boolean;
    hourStep: number;
    minuteStep: number;
    secondStep: number;
    clearText: string;
    defaultOpenValue: Record<string, any>;
} & {
    value?: any;
    defaultValue?: any;
    clearIcon?: any;
    hideDisabledOptions?: boolean;
    disabledHours?: (...args: any[]) => any;
    disabledMinutes?: (...args: any[]) => any;
    disabledSeconds?: (...args: any[]) => any;
    focusOnOpen?: boolean;
    allowEmpty?: boolean;
    addon?: (...args: any[]) => any;
    showHour?: boolean;
    showMinute?: boolean;
    showSecond?: boolean;
}>, {
    format: string;
    prefixCls: string;
    placeholder: string;
    inputReadOnly: boolean;
    disabledHours: (...args: any[]) => any;
    disabledMinutes: (...args: any[]) => any;
    disabledSeconds: (...args: any[]) => any;
    use12Hours: boolean;
    hourStep: number;
    minuteStep: number;
    secondStep: number;
    clearText: string;
    defaultOpenValue: Record<string, any>;
    addon: (...args: any[]) => any;
}>;
import moment from "moment";
