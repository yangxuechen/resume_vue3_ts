import type { PropType } from 'vue';
import type { VueNode } from '../_util/type';
import type moment from 'moment';
import type { RadioChangeEvent } from '../radio/interface';
export interface RenderHeader {
    value: moment.Moment;
    onChange?: (value: moment.Moment) => void;
    type: string;
    onTypeChange: (type: string) => void;
}
export declare type HeaderRender = (headerRender: RenderHeader) => VueNode;
export declare const HeaderProps: {
    prefixCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    locale: import("vue-types").VueTypeValidableDef<any>;
    fullscreen: import("vue-types").VueTypeValidableDef<boolean>;
    yearSelectOffset: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
    yearSelectTotal: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
    type: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    value: {
        type: PropType<moment.Moment>;
    };
    validRange: {
        type: PropType<moment.Moment[]>;
    };
    headerRender: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    onValueChange: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    onTypeChange: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
};
declare const _default: import("vue").DefineComponent<{
    yearSelectOffset: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    } & {
        default: number;
    };
    yearSelectTotal: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    } & {
        default: number;
    };
    prefixCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    locale: import("vue-types").VueTypeValidableDef<any>;
    fullscreen: import("vue-types").VueTypeValidableDef<boolean>;
    type: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    value: {
        type: PropType<moment.Moment>;
    };
    validRange: {
        type: PropType<moment.Moment[]>;
    };
    headerRender: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    onValueChange: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    onTypeChange: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
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
    calendarHeaderNode: any;
}, unknown, {}, {
    getYearSelectElement(prefixCls: string, year: number): JSX.Element;
    getMonthSelectElement(prefixCls: string, month: number, months: string[]): JSX.Element;
    onYearChange(year: string): void;
    onMonthChange(month: string): void;
    onInternalTypeChange(e: RadioChangeEvent): void;
    triggerTypeChange(val: string): void;
    getMonthYearSelections(getPrefixCls: any): {
        yearReactNode: any;
        monthReactNode: any;
    };
    getTypeSwitch(): JSX.Element;
    triggerValueChange(...args: any[]): void;
    saveCalendarHeaderNode(node: HTMLElement): void;
    headerRenderCustom(headerRender: HeaderRender): VueNode;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    yearSelectOffset?: unknown;
    yearSelectTotal?: unknown;
    prefixCls?: unknown;
    locale?: unknown;
    fullscreen?: unknown;
    type?: unknown;
    value?: unknown;
    validRange?: unknown;
    headerRender?: unknown;
    onValueChange?: unknown;
    onTypeChange?: unknown;
} & {
    type: string;
    prefixCls: string;
    yearSelectOffset: number;
    yearSelectTotal: number;
} & {
    value?: moment.Moment;
    locale?: any;
    fullscreen?: boolean;
    validRange?: moment.Moment[];
    headerRender?: (...args: any[]) => any;
    onValueChange?: (...args: any[]) => any;
    onTypeChange?: (...args: any[]) => any;
}>, {
    type: string;
    prefixCls: string;
    yearSelectOffset: number;
    yearSelectTotal: number;
    headerRender: (...args: any[]) => any;
    onValueChange: (...args: any[]) => any;
    onTypeChange: (...args: any[]) => any;
}>;
export default _default;
