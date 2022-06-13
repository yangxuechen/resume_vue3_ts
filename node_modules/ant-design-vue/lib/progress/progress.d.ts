import { ProgressStatuses } from './props';
declare const _default: import("vue").DefineComponent<{
    prefixCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    type: import("vue-types").VueTypeDef<"circle" | "line" | "dashboard">;
    percent: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
    successPercent: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
    format: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    status: import("vue-types").VueTypeDef<"normal" | "active" | "success" | "exception">;
    showInfo: import("vue-types").VueTypeValidableDef<boolean>;
    strokeWidth: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
    strokeLinecap: import("vue-types").VueTypeDef<string>;
    strokeColor: import("vue-types").VueTypeDef<string | {
        [key: string]: any;
    }>;
    trailColor: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    width: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
    gapDegree: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
    gapPosition: import("vue-types").VueTypeDef<"left" | "right" | "bottom" | "top">;
    size: import("vue-types").VueTypeDef<"default" | "small">;
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
}, unknown, {}, {
    getPercentNumber(): number;
    getProgressStatus(): any;
    renderProcessInfo(prefixCls: string, progressStatus: typeof ProgressStatuses[number]): JSX.Element;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    prefixCls?: unknown;
    type?: unknown;
    percent?: unknown;
    successPercent?: unknown;
    format?: unknown;
    status?: unknown;
    showInfo?: unknown;
    strokeWidth?: unknown;
    strokeLinecap?: unknown;
    strokeColor?: unknown;
    trailColor?: unknown;
    width?: unknown;
    gapDegree?: unknown;
    gapPosition?: unknown;
    size?: unknown;
} & {
    prefixCls: string;
    width: number;
    strokeWidth: number;
    percent: number;
    successPercent: number;
    trailColor: string;
    gapDegree: number;
} & {
    type?: "circle" | "line" | "dashboard";
    format?: (...args: any[]) => any;
    size?: "default" | "small";
    status?: "normal" | "active" | "success" | "exception";
    strokeLinecap?: string;
    showInfo?: boolean;
    strokeColor?: string | {
        [key: string]: any;
    };
    gapPosition?: "left" | "right" | "bottom" | "top";
}>, {
    format: (...args: any[]) => any;
    prefixCls: string;
    width: number;
    strokeWidth: number;
    percent: number;
    successPercent: number;
    trailColor: string;
    gapDegree: number;
}>;
export default _default;
