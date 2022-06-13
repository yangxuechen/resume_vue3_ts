export { TooltipProps } from './Tooltip';
declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {
            sVisible: boolean;
        };
        $props: Partial<{
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
        }> & Omit<Readonly<{
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
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "children" | "getPopupContainer" | "prefixCls" | "color" | "align" | "onVisibleChange" | "transitionName" | "builtinPlacements" | "mouseEnterDelay" | "mouseLeaveDelay" | "trigger" | "autoAdjustOverflow" | "placement" | "overlayStyle" | "overlayClassName" | "openClassName" | "arrowPointAtCenter" | "destroyTooltipOnHide" | "onUpdate:visible">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: import("vue").Slot;
        }>;
        $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>;
        $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>;
        $emit: (event: "visibleChange" | "update:visible", ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<{
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
        }, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("visibleChange" | "update:visible")[], string, {
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
        }> & {
            beforeCreate?: (() => void) | (() => void)[];
            created?: (() => void) | (() => void)[];
            beforeMount?: (() => void) | (() => void)[];
            mounted?: (() => void) | (() => void)[];
            beforeUpdate?: (() => void) | (() => void)[];
            updated?: (() => void) | (() => void)[];
            activated?: (() => void) | (() => void)[];
            deactivated?: (() => void) | (() => void)[];
            beforeDestroy?: (() => void) | (() => void)[];
            beforeUnmount?: (() => void) | (() => void)[];
            destroyed?: (() => void) | (() => void)[];
            unmounted?: (() => void) | (() => void)[];
            renderTracked?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[];
            renderTriggered?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[];
            errorCaptured?: ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>, info: string) => boolean | void)[];
        };
        $forceUpdate: () => void;
        $nextTick: typeof import("vue").nextTick;
        $watch(source: string | Function, cb: Function, options?: import("vue").WatchOptions<boolean>): import("vue").WatchStopHandle;
    } & Readonly<{
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
    } & import("vue").ShallowUnwrapRef<{
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
    }> & {
        sVisible: boolean;
    } & {} & {
        handleVisibleChange(visible: boolean): void;
        getPopupDomNode(): any;
        getPlacements(): any;
        getDisabledCompatibleChildren(ele: any): any;
        isNoTitle(): boolean;
        getOverlay(): any;
        onPopupAlign(domNode: HTMLElement, align: any): void;
    } & import("vue").ComponentCustomProperties;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<{
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
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("visibleChange" | "update:visible")[], "visibleChange" | "update:visible", {
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
}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("@vue/runtime-core").Plugin;
export default _default;
