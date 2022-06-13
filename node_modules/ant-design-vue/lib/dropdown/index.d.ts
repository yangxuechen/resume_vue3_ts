import type { Plugin } from 'vue';
import DropdownButton from './dropdown-button';
export type { DropdownProps } from './dropdown';
export type { DropdownButtonProps } from './dropdown-button';
export { DropdownButton };
declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
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
        }> & Omit<Readonly<{
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
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "getPopupContainer" | "prefixCls" | "align" | "onVisibleChange" | "transitionName" | "mouseEnterDelay" | "mouseLeaveDelay" | "trigger" | "placement" | "overlayClassName" | "openClassName" | "onUpdate:visible">;
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
            savePopupRef(ref: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>): void;
            getTransitionName(): any;
            renderOverlay(prefixCls: string): any;
            handleVisibleChange(val: boolean): void;
        }, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("visibleChange" | "update:visible")[], string, {
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
        popupRef: any;
    }> & {} & {} & {
        savePopupRef(ref: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>): void;
        getTransitionName(): any;
        renderOverlay(prefixCls: string): any;
        handleVisibleChange(val: boolean): void;
    } & import("vue").ComponentCustomProperties;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<{
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
    savePopupRef(ref: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>): void;
    getTransitionName(): any;
    renderOverlay(prefixCls: string): any;
    handleVisibleChange(val: boolean): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("visibleChange" | "update:visible")[], "visibleChange" | "update:visible", {
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
}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Plugin & {
    readonly Button: typeof DropdownButton;
};
export default _default;
