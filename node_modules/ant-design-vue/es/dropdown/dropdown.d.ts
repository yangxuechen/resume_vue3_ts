import type { VNode, ExtractPropTypes } from 'vue';
declare const dropdownProps: {
    trigger: {
        type: import("vue").PropType<"click" | "contextmenu" | "hover" | ("click" | "contextmenu" | "hover")[]>;
        default: string;
    };
    overlay: import("vue-types").VueTypeValidableDef<any>;
    visible: import("vue-types").VueTypeValidableDef<boolean>;
    disabled: import("vue-types").VueTypeValidableDef<boolean>;
    align: import("vue-types").VueTypeValidableDef<{
        [key: string]: any;
    }> & {
        default: () => {
            [key: string]: any;
        };
    };
    getPopupContainer: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    prefixCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    transitionName: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    placement: import("vue-types").VueTypeDef<"bottomRight" | "bottomLeft" | "topLeft" | "topRight" | "topCenter" | "bottomCenter">;
    overlayClassName: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    overlayStyle: import("vue-types").VueTypeValidableDef<import("vue").CSSProperties>;
    forceRender: import("vue-types").VueTypeValidableDef<boolean>;
    mouseEnterDelay: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
    mouseLeaveDelay: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
    openClassName: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    minOverlayWidthMatchTrigger: import("vue-types").VueTypeValidableDef<boolean>;
};
export declare type DropdownProps = Partial<ExtractPropTypes<typeof dropdownProps>>;
declare const Dropdown: import("vue").DefineComponent<{
    prefixCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    mouseEnterDelay: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    } & {
        default: number;
    };
    mouseLeaveDelay: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    } & {
        default: number;
    };
    placement: import("vue-types").VueTypeDef<"bottomRight" | "bottomLeft" | "topLeft" | "topRight" | "topCenter" | "bottomCenter"> & {
        default: "bottomRight" | "bottomLeft" | "topLeft" | "topRight" | "topCenter" | "bottomCenter";
    };
    onVisibleChange: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    'onUpdate:visible': import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    trigger: {
        type: import("vue").PropType<"click" | "contextmenu" | "hover" | ("click" | "contextmenu" | "hover")[]>;
        default: string;
    };
    overlay: import("vue-types").VueTypeValidableDef<any>;
    visible: import("vue-types").VueTypeValidableDef<boolean>;
    disabled: import("vue-types").VueTypeValidableDef<boolean>;
    align: import("vue-types").VueTypeValidableDef<{
        [key: string]: any;
    }> & {
        default: () => {
            [key: string]: any;
        };
    };
    getPopupContainer: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    transitionName: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    overlayClassName: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    overlayStyle: import("vue-types").VueTypeValidableDef<import("vue").CSSProperties>;
    forceRender: import("vue-types").VueTypeValidableDef<boolean>;
    openClassName: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    minOverlayWidthMatchTrigger: import("vue-types").VueTypeValidableDef<boolean>;
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
    popupRef: any;
}, unknown, {}, {
    savePopupRef(ref: VNode): void;
    getTransitionName(): any;
    renderOverlay(prefixCls: string): any;
    handleVisibleChange(val: boolean): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("visibleChange" | "update:visible")[], "visibleChange" | "update:visible", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    prefixCls?: unknown;
    mouseEnterDelay?: unknown;
    mouseLeaveDelay?: unknown;
    placement?: unknown;
    onVisibleChange?: unknown;
    'onUpdate:visible'?: unknown;
    trigger?: unknown;
    overlay?: unknown;
    visible?: unknown;
    disabled?: unknown;
    align?: unknown;
    getPopupContainer?: unknown;
    transitionName?: unknown;
    overlayClassName?: unknown;
    overlayStyle?: unknown;
    forceRender?: unknown;
    openClassName?: unknown;
    minOverlayWidthMatchTrigger?: unknown;
} & {
    prefixCls: string;
    align: {
        [key: string]: any;
    };
    transitionName: string;
    mouseEnterDelay: number;
    mouseLeaveDelay: number;
    trigger: "click" | "contextmenu" | "hover" | ("click" | "contextmenu" | "hover")[];
    placement: "bottomRight" | "bottomLeft" | "topLeft" | "topRight" | "topCenter" | "bottomCenter";
    overlayClassName: string;
    openClassName: string;
} & {
    getPopupContainer?: (...args: any[]) => any;
    visible?: boolean;
    overlay?: any;
    disabled?: boolean;
    onVisibleChange?: (...args: any[]) => any;
    forceRender?: boolean;
    overlayStyle?: import("vue").CSSProperties;
    "onUpdate:visible"?: (...args: any[]) => any;
    minOverlayWidthMatchTrigger?: boolean;
}> & {
    onVisibleChange?: (...args: any[]) => any;
    "onUpdate:visible"?: (...args: any[]) => any;
}, {
    getPopupContainer: (...args: any[]) => any;
    prefixCls: string;
    align: {
        [key: string]: any;
    };
    onVisibleChange: (...args: any[]) => any;
    transitionName: string;
    mouseEnterDelay: number;
    mouseLeaveDelay: number;
    trigger: "click" | "contextmenu" | "hover" | ("click" | "contextmenu" | "hover")[];
    placement: "bottomRight" | "bottomLeft" | "topLeft" | "topRight" | "topCenter" | "bottomCenter";
    overlayClassName: string;
    openClassName: string;
    "onUpdate:visible": (...args: any[]) => any;
}>;
export default Dropdown;
