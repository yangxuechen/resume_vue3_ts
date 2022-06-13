import type { VNodeTypes, PropType, VNode, ExtractPropTypes } from 'vue';
export interface CardTabListType {
    key: string;
    tab: VNodeTypes;
    slots?: {
        tab: string;
    };
    disabled?: boolean;
}
export declare type CardType = 'inner';
declare const cardProps: {
    prefixCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    title: import("vue-types").VueTypeValidableDef<import("../_util/type").VueNode>;
    extra: import("vue-types").VueTypeValidableDef<import("../_util/type").VueNode>;
    bordered: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
    bodyStyle: import("vue-types").VueTypeValidableDef<import("vue").CSSProperties>;
    headStyle: import("vue-types").VueTypeValidableDef<import("vue").CSSProperties>;
    loading: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
    hoverable: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
    type: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    size: import("vue-types").VueTypeDef<"default" | "small">;
    actions: import("vue-types").VueTypeValidableDef<import("../_util/type").VueNode>;
    tabList: {
        type: PropType<CardTabListType[]>;
    };
    tabBarExtraContent: import("vue-types").VueTypeValidableDef<import("../_util/type").VueNode>;
    activeTabKey: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    defaultActiveTabKey: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    cover: import("vue-types").VueTypeValidableDef<import("../_util/type").VueNode>;
    onTabChange: {
        type: PropType<(key: string) => void>;
    };
};
export declare type CardProps = Partial<ExtractPropTypes<typeof cardProps>>;
declare const Card: import("vue").DefineComponent<{
    prefixCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    title: import("vue-types").VueTypeValidableDef<import("../_util/type").VueNode>;
    extra: import("vue-types").VueTypeValidableDef<import("../_util/type").VueNode>;
    bordered: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
    bodyStyle: import("vue-types").VueTypeValidableDef<import("vue").CSSProperties>;
    headStyle: import("vue-types").VueTypeValidableDef<import("vue").CSSProperties>;
    loading: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
    hoverable: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
    type: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    size: import("vue-types").VueTypeDef<"default" | "small">;
    actions: import("vue-types").VueTypeValidableDef<import("../_util/type").VueNode>;
    tabList: {
        type: PropType<CardTabListType[]>;
    };
    tabBarExtraContent: import("vue-types").VueTypeValidableDef<import("../_util/type").VueNode>;
    activeTabKey: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    defaultActiveTabKey: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    cover: import("vue-types").VueTypeValidableDef<import("../_util/type").VueNode>;
    onTabChange: {
        type: PropType<(key: string) => void>;
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
}, {
    widerPadding: boolean;
}, {}, {
    getAction(actions: VNodeTypes[]): JSX.Element[];
    triggerTabChange(key: string): void;
    isContainGrid(obj?: VNode[]): boolean;
}, {
    methods: {
        setState(state: {}, callback: any): void;
        __emit(...args: any[]): void;
    };
}, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    prefixCls?: unknown;
    title?: unknown;
    extra?: unknown;
    bordered?: unknown;
    bodyStyle?: unknown;
    headStyle?: unknown;
    loading?: unknown;
    hoverable?: unknown;
    type?: unknown;
    size?: unknown;
    actions?: unknown;
    tabList?: unknown;
    tabBarExtraContent?: unknown;
    activeTabKey?: unknown;
    defaultActiveTabKey?: unknown;
    cover?: unknown;
    onTabChange?: unknown;
} & {
    type: string;
    prefixCls: string;
    loading: boolean;
    bordered: boolean;
    hoverable: boolean;
    activeTabKey: string;
    defaultActiveTabKey: string;
} & {
    title?: import("../_util/type").VueNode;
    cover?: import("../_util/type").VueNode;
    size?: "default" | "small";
    extra?: import("../_util/type").VueNode;
    bodyStyle?: import("vue").CSSProperties;
    tabBarExtraContent?: import("../_util/type").VueNode;
    headStyle?: import("vue").CSSProperties;
    actions?: import("../_util/type").VueNode;
    tabList?: CardTabListType[];
    onTabChange?: (key: string) => void;
}>, {
    type: string;
    prefixCls: string;
    loading: boolean;
    bordered: boolean;
    hoverable: boolean;
    activeTabKey: string;
    defaultActiveTabKey: string;
}>;
export default Card;
