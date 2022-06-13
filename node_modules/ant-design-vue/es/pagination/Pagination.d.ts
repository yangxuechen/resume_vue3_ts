import type { ExtractPropTypes } from 'vue';
export declare const paginationProps: () => {
    total: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
    defaultCurrent: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
    disabled: import("vue-types").VueTypeValidableDef<boolean>;
    current: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
    defaultPageSize: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
    pageSize: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
    hideOnSinglePage: import("vue-types").VueTypeValidableDef<boolean>;
    showSizeChanger: import("vue-types").VueTypeValidableDef<boolean>;
    pageSizeOptions: import("vue-types").VueTypeDef<(string | number)[]>;
    buildOptionText: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    showSizeChange: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    showQuickJumper: import("vue-types").VueTypeDef<boolean | {
        [key: string]: any;
    }>;
    showTotal: import("vue-types").VueTypeValidableDef<any>;
    size: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    simple: import("vue-types").VueTypeValidableDef<boolean>;
    locale: import("vue-types").VueTypeValidableDef<{
        [key: string]: any;
    }> & {
        default: () => {
            [key: string]: any;
        };
    };
    prefixCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    selectPrefixCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    itemRender: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    role: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    showLessItems: import("vue-types").VueTypeValidableDef<boolean>;
    onChange: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    onShowSizeChange: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    'onUpdate:current': import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    'onUpdate:pageSize': import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
};
export declare const paginationConfig: () => {
    position: import("vue-types").VueTypeDef<"both" | "bottom" | "top">;
    total: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
    defaultCurrent: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
    disabled: import("vue-types").VueTypeValidableDef<boolean>;
    current: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
    defaultPageSize: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
    pageSize: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
    hideOnSinglePage: import("vue-types").VueTypeValidableDef<boolean>;
    showSizeChanger: import("vue-types").VueTypeValidableDef<boolean>;
    pageSizeOptions: import("vue-types").VueTypeDef<(string | number)[]>;
    buildOptionText: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    showSizeChange: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    showQuickJumper: import("vue-types").VueTypeDef<boolean | {
        [key: string]: any;
    }>;
    showTotal: import("vue-types").VueTypeValidableDef<any>;
    size: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    simple: import("vue-types").VueTypeValidableDef<boolean>;
    locale: import("vue-types").VueTypeValidableDef<{
        [key: string]: any;
    }> & {
        default: () => {
            [key: string]: any;
        };
    };
    prefixCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    selectPrefixCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    itemRender: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    role: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    showLessItems: import("vue-types").VueTypeValidableDef<boolean>;
    onChange: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    onShowSizeChange: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    'onUpdate:current': import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    'onUpdate:pageSize': import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
};
export declare type PaginationProps = Partial<ExtractPropTypes<ReturnType<typeof paginationProps>>>;
export declare type PaginationConfig = Partial<ExtractPropTypes<ReturnType<typeof paginationConfig>>>;
declare const _default: import("vue").DefineComponent<{
    total: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
    defaultCurrent: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
    disabled: import("vue-types").VueTypeValidableDef<boolean>;
    current: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
    defaultPageSize: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
    pageSize: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
    hideOnSinglePage: import("vue-types").VueTypeValidableDef<boolean>;
    showSizeChanger: import("vue-types").VueTypeValidableDef<boolean>;
    pageSizeOptions: import("vue-types").VueTypeDef<(string | number)[]>;
    buildOptionText: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    showSizeChange: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    showQuickJumper: import("vue-types").VueTypeDef<boolean | {
        [key: string]: any;
    }>;
    showTotal: import("vue-types").VueTypeValidableDef<any>;
    size: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    simple: import("vue-types").VueTypeValidableDef<boolean>;
    locale: import("vue-types").VueTypeValidableDef<{
        [key: string]: any;
    }> & {
        default: () => {
            [key: string]: any;
        };
    };
    prefixCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    selectPrefixCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    itemRender: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    role: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    showLessItems: import("vue-types").VueTypeValidableDef<boolean>;
    onChange: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    onShowSizeChange: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    'onUpdate:current': import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    'onUpdate:pageSize': import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
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
}, unknown, {}, {
    getIconsProps(prefixCls: string): {
        prevIcon: JSX.Element;
        nextIcon: JSX.Element;
        jumpPrevIcon: JSX.Element;
        jumpNextIcon: JSX.Element;
    };
    renderPagination(contextLocale: object): JSX.Element;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "showSizeChange" | "update:current" | "update:pageSize")[], "change" | "showSizeChange" | "update:current" | "update:pageSize", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    total?: unknown;
    defaultCurrent?: unknown;
    disabled?: unknown;
    current?: unknown;
    defaultPageSize?: unknown;
    pageSize?: unknown;
    hideOnSinglePage?: unknown;
    showSizeChanger?: unknown;
    pageSizeOptions?: unknown;
    buildOptionText?: unknown;
    showSizeChange?: unknown;
    showQuickJumper?: unknown;
    showTotal?: unknown;
    size?: unknown;
    simple?: unknown;
    locale?: unknown;
    prefixCls?: unknown;
    selectPrefixCls?: unknown;
    itemRender?: unknown;
    role?: unknown;
    showLessItems?: unknown;
    onChange?: unknown;
    onShowSizeChange?: unknown;
    'onUpdate:current'?: unknown;
    'onUpdate:pageSize'?: unknown;
} & {
    locale: {
        [key: string]: any;
    };
    prefixCls: string;
    role: string;
    size: string;
    current: number;
    total: number;
    defaultCurrent: number;
    defaultPageSize: number;
    pageSize: number;
    selectPrefixCls: string;
} & {
    onChange?: (...args: any[]) => any;
    disabled?: boolean;
    hideOnSinglePage?: boolean;
    showSizeChanger?: boolean;
    pageSizeOptions?: (string | number)[];
    buildOptionText?: (...args: any[]) => any;
    showSizeChange?: (...args: any[]) => any;
    showQuickJumper?: boolean | {
        [key: string]: any;
    };
    showTotal?: any;
    simple?: boolean;
    itemRender?: (...args: any[]) => any;
    showLessItems?: boolean;
    onShowSizeChange?: (...args: any[]) => any;
    "onUpdate:current"?: (...args: any[]) => any;
    "onUpdate:pageSize"?: (...args: any[]) => any;
}> & {
    onChange?: (...args: any[]) => any;
    onShowSizeChange?: (...args: any[]) => any;
    "onUpdate:current"?: (...args: any[]) => any;
    "onUpdate:pageSize"?: (...args: any[]) => any;
}, {
    locale: {
        [key: string]: any;
    };
    prefixCls: string;
    onChange: (...args: any[]) => any;
    role: string;
    size: string;
    current: number;
    total: number;
    defaultCurrent: number;
    defaultPageSize: number;
    pageSize: number;
    buildOptionText: (...args: any[]) => any;
    showSizeChange: (...args: any[]) => any;
    selectPrefixCls: string;
    itemRender: (...args: any[]) => any;
    onShowSizeChange: (...args: any[]) => any;
    "onUpdate:current": (...args: any[]) => any;
    "onUpdate:pageSize": (...args: any[]) => any;
}>;
export default _default;
