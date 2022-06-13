import type { PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
    prefixCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    activeKey: import("vue-types").VueTypeDef<string | number>;
    defaultActiveKey: import("vue-types").VueTypeDef<string | number>;
    hideAdd: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
    centered: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
    tabBarStyle: import("vue-types").VueTypeValidableDef<{
        [key: string]: any;
    }> & {
        default: () => {
            [key: string]: any;
        };
    };
    tabBarExtraContent: import("vue-types").VueTypeValidableDef<any>;
    destroyInactiveTabPane: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
    type: import("vue-types").VueTypeDef<"line" | "card" | "editable-card">;
    tabPosition: import("vue-types").VueTypeDef<string> & {
        default: string;
    };
    size: import("vue-types").VueTypeDef<string>;
    animated: import("vue-types").VueTypeDef<boolean | {
        [key: string]: any;
    }>;
    tabBarGutter: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
    renderTabBar: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    onChange: {
        type: PropType<(activeKey: string) => void>;
    };
    onTabClick: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    onPrevClick: {
        type: PropType<(e: MouseEvent) => void>;
    };
    onNextClick: {
        type: PropType<(e: MouseEvent) => void>;
    };
    onEdit: {
        type: PropType<(targetKey: string | MouseEvent, action: 'add' | 'remove') => void>;
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
    removeTab(targetKey: string, e: MouseEvent): void;
    handleChange(activeKey: string): void;
    createNewTab(targetKey: MouseEvent): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "update:activeKey" | "edit")[], "change" | "update:activeKey" | "edit", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    prefixCls?: unknown;
    activeKey?: unknown;
    defaultActiveKey?: unknown;
    hideAdd?: unknown;
    centered?: unknown;
    tabBarStyle?: unknown;
    tabBarExtraContent?: unknown;
    destroyInactiveTabPane?: unknown;
    type?: unknown;
    tabPosition?: unknown;
    size?: unknown;
    animated?: unknown;
    tabBarGutter?: unknown;
    renderTabBar?: unknown;
    onChange?: unknown;
    onTabClick?: unknown;
    onPrevClick?: unknown;
    onNextClick?: unknown;
    onEdit?: unknown;
} & {
    prefixCls: string;
    centered: boolean;
    tabBarStyle: {
        [key: string]: any;
    };
    tabPosition: string;
    tabBarGutter: number;
    destroyInactiveTabPane: boolean;
    hideAdd: boolean;
} & {
    type?: "line" | "card" | "editable-card";
    onChange?: (activeKey: string) => void;
    onEdit?: (targetKey: string | MouseEvent, action: 'add' | 'remove') => void;
    size?: string;
    activeKey?: string | number;
    tabBarExtraContent?: any;
    animated?: boolean | {
        [key: string]: any;
    };
    renderTabBar?: (...args: any[]) => any;
    defaultActiveKey?: string | number;
    onTabClick?: (...args: any[]) => any;
    onPrevClick?: (e: MouseEvent) => void;
    onNextClick?: (e: MouseEvent) => void;
}> & {
    onChange?: (...args: any[]) => any;
    onEdit?: (...args: any[]) => any;
    "onUpdate:activeKey"?: (...args: any[]) => any;
}, {
    prefixCls: string;
    centered: boolean;
    tabBarStyle: {
        [key: string]: any;
    };
    tabPosition: string;
    renderTabBar: (...args: any[]) => any;
    tabBarGutter: number;
    destroyInactiveTabPane: boolean;
    hideAdd: boolean;
    onTabClick: (...args: any[]) => any;
}>;
export default _default;
