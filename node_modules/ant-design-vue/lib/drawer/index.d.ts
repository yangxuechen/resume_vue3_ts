import { nextTick } from 'vue';
declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {
            sPush: boolean;
        };
        $props: Partial<{
            prefixCls: string;
            mask: boolean;
            onClose: (...args: any[]) => any;
            keyboard: boolean;
            width: string | number;
            height: string | number;
            zIndex: number;
            maskClosable: boolean;
            bodyStyle: {
                [key: string]: any;
            };
            placement: "left" | "right" | "bottom" | "top";
            "onUpdate:visible": (...args: any[]) => any;
            afterVisibleChange: (...args: any[]) => any;
            level: any;
            closable: boolean;
            maskStyle: {
                [key: string]: any;
            };
            wrapStyle: {
                [key: string]: any;
            };
            headerStyle: {
                [key: string]: any;
            };
            drawerStyle: {
                [key: string]: any;
            };
            wrapClassName: string;
        }> & Omit<Readonly<{
            closable?: unknown;
            destroyOnClose?: unknown;
            getContainer?: unknown;
            maskClosable?: unknown;
            mask?: unknown;
            maskStyle?: unknown;
            wrapStyle?: unknown;
            bodyStyle?: unknown;
            headerStyle?: unknown;
            drawerStyle?: unknown;
            title?: unknown;
            visible?: unknown;
            width?: unknown;
            height?: unknown;
            zIndex?: unknown;
            prefixCls?: unknown;
            placement?: unknown;
            level?: unknown;
            wrapClassName?: unknown;
            handle?: unknown;
            afterVisibleChange?: unknown;
            keyboard?: unknown;
            onClose?: unknown;
            'onUpdate:visible'?: unknown;
        } & {
            prefixCls: string;
            mask: boolean;
            keyboard: boolean;
            width: string | number;
            height: string | number;
            zIndex: number;
            maskClosable: boolean;
            bodyStyle: {
                [key: string]: any;
            };
            placement: "left" | "right" | "bottom" | "top";
            closable: boolean;
            maskStyle: {
                [key: string]: any;
            };
            wrapStyle: {
                [key: string]: any;
            };
            headerStyle: {
                [key: string]: any;
            };
            drawerStyle: {
                [key: string]: any;
            };
            wrapClassName: string;
        } & {
            title?: import("../_util/type").VueNode;
            onClose?: (...args: any[]) => any;
            visible?: boolean;
            "onUpdate:visible"?: (...args: any[]) => any;
            afterVisibleChange?: (...args: any[]) => any;
            level?: any;
            getContainer?: any;
            destroyOnClose?: boolean;
            handle?: import("../_util/type").VueNode;
        }> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "prefixCls" | "mask" | "onClose" | "keyboard" | "width" | "height" | "zIndex" | "maskClosable" | "bodyStyle" | "placement" | "onUpdate:visible" | "afterVisibleChange" | "level" | "closable" | "maskStyle" | "wrapStyle" | "headerStyle" | "drawerStyle" | "wrapClassName">;
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
        $emit: (event: string, ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<{
            closable?: unknown;
            destroyOnClose?: unknown;
            getContainer?: unknown;
            maskClosable?: unknown;
            mask?: unknown;
            maskStyle?: unknown;
            wrapStyle?: unknown;
            bodyStyle?: unknown;
            headerStyle?: unknown;
            drawerStyle?: unknown;
            title?: unknown;
            visible?: unknown;
            width?: unknown;
            height?: unknown;
            zIndex?: unknown;
            prefixCls?: unknown;
            placement?: unknown;
            level?: unknown;
            wrapClassName?: unknown;
            handle?: unknown;
            afterVisibleChange?: unknown;
            keyboard?: unknown;
            onClose?: unknown;
            'onUpdate:visible'?: unknown;
        } & {
            prefixCls: string;
            mask: boolean;
            keyboard: boolean;
            width: string | number;
            height: string | number;
            zIndex: number;
            maskClosable: boolean;
            bodyStyle: {
                [key: string]: any;
            };
            placement: "left" | "right" | "bottom" | "top";
            closable: boolean;
            maskStyle: {
                [key: string]: any;
            };
            wrapStyle: {
                [key: string]: any;
            };
            headerStyle: {
                [key: string]: any;
            };
            drawerStyle: {
                [key: string]: any;
            };
            wrapClassName: string;
        } & {
            title?: import("../_util/type").VueNode;
            onClose?: (...args: any[]) => any;
            visible?: boolean;
            "onUpdate:visible"?: (...args: any[]) => any;
            afterVisibleChange?: (...args: any[]) => any;
            level?: any;
            getContainer?: any;
            destroyOnClose?: boolean;
            handle?: import("../_util/type").VueNode;
        }>, {
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
            destroyClose: boolean;
            preVisible: boolean;
            parentDrawer: any;
        }, {
            sPush: boolean;
        }, {}, {
            domFocus(): void;
            close(e: Event): void;
            push(): void;
            pull(): void;
            onDestroyTransitionEnd(): void;
            getDestroyOnClose(): boolean;
            getPushTransform(placement?: "left" | "right" | "bottom" | "top"): string;
            getRcDrawerStyle(): any;
            renderHeader(prefixCls: string): JSX.Element;
            renderCloseIcon(prefixCls: string): JSX.Element;
            renderBody(prefixCls: string): JSX.Element;
        }, {
            methods: {
                setState(state: {}, callback: any): void;
                __emit(...args: any[]): void;
            };
        }, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
            prefixCls: string;
            mask: boolean;
            onClose: (...args: any[]) => any;
            keyboard: boolean;
            width: string | number;
            height: string | number;
            zIndex: number;
            maskClosable: boolean;
            bodyStyle: {
                [key: string]: any;
            };
            placement: "left" | "right" | "bottom" | "top";
            "onUpdate:visible": (...args: any[]) => any;
            afterVisibleChange: (...args: any[]) => any;
            level: any;
            closable: boolean;
            maskStyle: {
                [key: string]: any;
            };
            wrapStyle: {
                [key: string]: any;
            };
            headerStyle: {
                [key: string]: any;
            };
            drawerStyle: {
                [key: string]: any;
            };
            wrapClassName: string;
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
        $nextTick: typeof nextTick;
        $watch(source: string | Function, cb: Function, options?: import("vue").WatchOptions<boolean>): import("vue").WatchStopHandle;
    } & Readonly<{
        closable?: unknown;
        destroyOnClose?: unknown;
        getContainer?: unknown;
        maskClosable?: unknown;
        mask?: unknown;
        maskStyle?: unknown;
        wrapStyle?: unknown;
        bodyStyle?: unknown;
        headerStyle?: unknown;
        drawerStyle?: unknown;
        title?: unknown;
        visible?: unknown;
        width?: unknown;
        height?: unknown;
        zIndex?: unknown;
        prefixCls?: unknown;
        placement?: unknown;
        level?: unknown;
        wrapClassName?: unknown;
        handle?: unknown;
        afterVisibleChange?: unknown;
        keyboard?: unknown;
        onClose?: unknown;
        'onUpdate:visible'?: unknown;
    } & {
        prefixCls: string;
        mask: boolean;
        keyboard: boolean;
        width: string | number;
        height: string | number;
        zIndex: number;
        maskClosable: boolean;
        bodyStyle: {
            [key: string]: any;
        };
        placement: "left" | "right" | "bottom" | "top";
        closable: boolean;
        maskStyle: {
            [key: string]: any;
        };
        wrapStyle: {
            [key: string]: any;
        };
        headerStyle: {
            [key: string]: any;
        };
        drawerStyle: {
            [key: string]: any;
        };
        wrapClassName: string;
    } & {
        title?: import("../_util/type").VueNode;
        onClose?: (...args: any[]) => any;
        visible?: boolean;
        "onUpdate:visible"?: (...args: any[]) => any;
        afterVisibleChange?: (...args: any[]) => any;
        level?: any;
        getContainer?: any;
        destroyOnClose?: boolean;
        handle?: import("../_util/type").VueNode;
    }> & import("vue").ShallowUnwrapRef<{
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
        destroyClose: boolean;
        preVisible: boolean;
        parentDrawer: any;
    }> & {
        sPush: boolean;
    } & {
        [x: string]: never;
    } & {
        setState(state: {}, callback: any): void;
        __emit(...args: any[]): void;
    } & {
        domFocus(): void;
        close(e: Event): void;
        push(): void;
        pull(): void;
        onDestroyTransitionEnd(): void;
        getDestroyOnClose(): boolean;
        getPushTransform(placement?: "left" | "right" | "bottom" | "top"): string;
        getRcDrawerStyle(): any;
        renderHeader(prefixCls: string): JSX.Element;
        renderCloseIcon(prefixCls: string): JSX.Element;
        renderBody(prefixCls: string): JSX.Element;
    } & import("vue").ComponentCustomProperties;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<{
    closable?: unknown;
    destroyOnClose?: unknown;
    getContainer?: unknown;
    maskClosable?: unknown;
    mask?: unknown;
    maskStyle?: unknown;
    wrapStyle?: unknown;
    bodyStyle?: unknown;
    headerStyle?: unknown;
    drawerStyle?: unknown;
    title?: unknown;
    visible?: unknown;
    width?: unknown;
    height?: unknown;
    zIndex?: unknown;
    prefixCls?: unknown;
    placement?: unknown;
    level?: unknown;
    wrapClassName?: unknown;
    handle?: unknown;
    afterVisibleChange?: unknown;
    keyboard?: unknown;
    onClose?: unknown;
    'onUpdate:visible'?: unknown;
} & {
    prefixCls: string;
    mask: boolean;
    keyboard: boolean;
    width: string | number;
    height: string | number;
    zIndex: number;
    maskClosable: boolean;
    bodyStyle: {
        [key: string]: any;
    };
    placement: "left" | "right" | "bottom" | "top";
    closable: boolean;
    maskStyle: {
        [key: string]: any;
    };
    wrapStyle: {
        [key: string]: any;
    };
    headerStyle: {
        [key: string]: any;
    };
    drawerStyle: {
        [key: string]: any;
    };
    wrapClassName: string;
} & {
    title?: import("../_util/type").VueNode;
    onClose?: (...args: any[]) => any;
    visible?: boolean;
    "onUpdate:visible"?: (...args: any[]) => any;
    afterVisibleChange?: (...args: any[]) => any;
    level?: any;
    getContainer?: any;
    destroyOnClose?: boolean;
    handle?: import("../_util/type").VueNode;
}>, {
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
    destroyClose: boolean;
    preVisible: boolean;
    parentDrawer: any;
}, {
    sPush: boolean;
}, {}, {
    domFocus(): void;
    close(e: Event): void;
    push(): void;
    pull(): void;
    onDestroyTransitionEnd(): void;
    getDestroyOnClose(): boolean;
    getPushTransform(placement?: "left" | "right" | "bottom" | "top"): string;
    getRcDrawerStyle(): any;
    renderHeader(prefixCls: string): JSX.Element;
    renderCloseIcon(prefixCls: string): JSX.Element;
    renderBody(prefixCls: string): JSX.Element;
}, {
    methods: {
        setState(state: {}, callback: any): void;
        __emit(...args: any[]): void;
    };
}, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
    prefixCls: string;
    mask: boolean;
    onClose: (...args: any[]) => any;
    keyboard: boolean;
    width: string | number;
    height: string | number;
    zIndex: number;
    maskClosable: boolean;
    bodyStyle: {
        [key: string]: any;
    };
    placement: "left" | "right" | "bottom" | "top";
    "onUpdate:visible": (...args: any[]) => any;
    afterVisibleChange: (...args: any[]) => any;
    level: any;
    closable: boolean;
    maskStyle: {
        [key: string]: any;
    };
    wrapStyle: {
        [key: string]: any;
    };
    headerStyle: {
        [key: string]: any;
    };
    drawerStyle: {
        [key: string]: any;
    };
    wrapClassName: string;
}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("@vue/runtime-core").Plugin;
export default _default;
