import type { ExtractPropTypes } from 'vue';
declare const tooltipProps: {
    title: import("vue-types").VueTypeValidableDef<import("../_util/type").VueNode>;
    trigger: import("vue-types").VueTypeDef<"click" | "contextmenu" | "focus" | "hover" | ("click" | "contextmenu" | "focus" | "hover")[]> & {
        default: "click" | "contextmenu" | "focus" | "hover" | (() => ("click" | "contextmenu" | "focus" | "hover")[]);
    };
    visible: import("vue-types").VueTypeValidableDef<boolean>;
    defaultVisible: import("vue-types").VueTypeValidableDef<boolean>;
    placement: import("vue-types").VueTypeDef<"left" | "right" | "bottom" | "top" | "bottomRight" | "bottomLeft" | "topLeft" | "topRight" | "leftTop" | "leftBottom" | "rightTop" | "rightBottom"> & {
        default: "left" | "right" | "bottom" | "top" | "bottomRight" | "bottomLeft" | "topLeft" | "topRight" | "leftTop" | "leftBottom" | "rightTop" | "rightBottom";
    };
    color: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    transitionName: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    overlayStyle: import("vue-types").VueTypeValidableDef<{
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
    overlayClassName: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    openClassName: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
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
    getPopupContainer: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    arrowPointAtCenter: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
    autoAdjustOverflow: import("vue-types").VueTypeDef<boolean | {
        [key: string]: any;
    }> & {
        default: boolean | (() => {
            [key: string]: any;
        });
    };
    destroyTooltipOnHide: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
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
    builtinPlacements: import("vue-types").VueTypeValidableDef<{
        [key: string]: any;
    }> & {
        default: () => {
            [key: string]: any;
        };
    };
    children: import("vue-types").VueTypeValidableDef<unknown[]> & {
        default: () => unknown[];
    };
    onVisibleChange: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    'onUpdate:visible': import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
};
export declare type TooltipProps = Partial<ExtractPropTypes<typeof tooltipProps>>;
declare const _default: import("vue").DefineComponent<{
    title: import("vue-types").VueTypeValidableDef<import("../_util/type").VueNode>;
    trigger: import("vue-types").VueTypeDef<"click" | "contextmenu" | "focus" | "hover" | ("click" | "contextmenu" | "focus" | "hover")[]> & {
        default: "click" | "contextmenu" | "focus" | "hover" | (() => ("click" | "contextmenu" | "focus" | "hover")[]);
    };
    visible: import("vue-types").VueTypeValidableDef<boolean>;
    defaultVisible: import("vue-types").VueTypeValidableDef<boolean>;
    placement: import("vue-types").VueTypeDef<"left" | "right" | "bottom" | "top" | "bottomRight" | "bottomLeft" | "topLeft" | "topRight" | "leftTop" | "leftBottom" | "rightTop" | "rightBottom"> & {
        default: "left" | "right" | "bottom" | "top" | "bottomRight" | "bottomLeft" | "topLeft" | "topRight" | "leftTop" | "leftBottom" | "rightTop" | "rightBottom";
    };
    color: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    transitionName: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    overlayStyle: import("vue-types").VueTypeValidableDef<{
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
    overlayClassName: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    openClassName: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
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
    getPopupContainer: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    arrowPointAtCenter: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
    autoAdjustOverflow: import("vue-types").VueTypeDef<boolean | {
        [key: string]: any;
    }> & {
        default: boolean | (() => {
            [key: string]: any;
        });
    };
    destroyTooltipOnHide: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
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
    builtinPlacements: import("vue-types").VueTypeValidableDef<{
        [key: string]: any;
    }> & {
        default: () => {
            [key: string]: any;
        };
    };
    children: import("vue-types").VueTypeValidableDef<unknown[]> & {
        default: () => unknown[];
    };
    onVisibleChange: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    'onUpdate:visible': import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
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
}, {
    sVisible: boolean;
}, {}, {
    handleVisibleChange(visible: boolean): void;
    getPopupDomNode(): any;
    getPlacements(): any;
    getDisabledCompatibleChildren(ele: any): any;
    isNoTitle(): boolean;
    getOverlay(): any;
    onPopupAlign(domNode: HTMLElement, align: any): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("visibleChange" | "update:visible")[], "visibleChange" | "update:visible", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    title?: unknown;
    trigger?: unknown;
    visible?: unknown;
    defaultVisible?: unknown;
    placement?: unknown;
    color?: unknown;
    transitionName?: unknown;
    overlayStyle?: unknown;
    overlayClassName?: unknown;
    openClassName?: unknown;
    prefixCls?: unknown;
    mouseEnterDelay?: unknown;
    mouseLeaveDelay?: unknown;
    getPopupContainer?: unknown;
    arrowPointAtCenter?: unknown;
    autoAdjustOverflow?: unknown;
    destroyTooltipOnHide?: unknown;
    align?: unknown;
    builtinPlacements?: unknown;
    children?: unknown;
    onVisibleChange?: unknown;
    'onUpdate:visible'?: unknown;
} & {
    children: unknown[];
    prefixCls: string;
    color: string;
    align: {
        [key: string]: any;
    };
    transitionName: string;
    builtinPlacements: {
        [key: string]: any;
    };
    mouseEnterDelay: number;
    mouseLeaveDelay: number;
    trigger: "click" | "contextmenu" | "focus" | "hover" | ("click" | "contextmenu" | "focus" | "hover")[];
    autoAdjustOverflow: boolean | {
        [key: string]: any;
    };
    placement: "left" | "right" | "bottom" | "top" | "bottomRight" | "bottomLeft" | "topLeft" | "topRight" | "leftTop" | "leftBottom" | "rightTop" | "rightBottom";
    overlayStyle: {
        [key: string]: any;
    };
    overlayClassName: string;
    openClassName: string;
    arrowPointAtCenter: boolean;
    destroyTooltipOnHide: boolean;
} & {
    getPopupContainer?: (...args: any[]) => any;
    title?: import("../_util/type").VueNode;
    visible?: boolean;
    onVisibleChange?: (...args: any[]) => any;
    defaultVisible?: boolean;
    "onUpdate:visible"?: (...args: any[]) => any;
}> & {
    onVisibleChange?: (...args: any[]) => any;
    "onUpdate:visible"?: (...args: any[]) => any;
}, {
    children: unknown[];
    getPopupContainer: (...args: any[]) => any;
    prefixCls: string;
    color: string;
    align: {
        [key: string]: any;
    };
    onVisibleChange: (...args: any[]) => any;
    transitionName: string;
    builtinPlacements: {
        [key: string]: any;
    };
    mouseEnterDelay: number;
    mouseLeaveDelay: number;
    trigger: "click" | "contextmenu" | "focus" | "hover" | ("click" | "contextmenu" | "focus" | "hover")[];
    autoAdjustOverflow: boolean | {
        [key: string]: any;
    };
    placement: "left" | "right" | "bottom" | "top" | "bottomRight" | "bottomLeft" | "topLeft" | "topRight" | "leftTop" | "leftBottom" | "rightTop" | "rightBottom";
    overlayStyle: {
        [key: string]: any;
    };
    overlayClassName: string;
    openClassName: string;
    arrowPointAtCenter: boolean;
    destroyTooltipOnHide: boolean;
    "onUpdate:visible": (...args: any[]) => any;
}>;
export default _default;
