import type { Plugin } from 'vue';
import type { ModalFunc } from './Modal';
export { IActionButtonProps as ActionButtonProps } from './ActionButton';
export { ModalProps, ModalFuncProps } from './Modal';
declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {
            sVisible: boolean;
        };
        $props: Partial<{
            prefixCls: string;
            transitionName: string;
            zIndex: number;
            maskTransitionName: string;
            afterClose: (...args: any[]) => any;
            wrapClassName: string;
            wrapProps: {
                [key: string]: any;
            };
        }> & Omit<Readonly<{
            prefixCls?: unknown;
            visible?: unknown;
            confirmLoading?: unknown;
            title?: unknown;
            closable?: unknown;
            closeIcon?: unknown;
            onOk?: unknown;
            onCancel?: unknown;
            afterClose?: unknown;
            centered?: unknown;
            width?: unknown;
            footer?: unknown;
            okText?: unknown;
            okType?: unknown;
            cancelText?: unknown;
            icon?: unknown;
            maskClosable?: unknown;
            forceRender?: unknown;
            okButtonProps?: unknown;
            cancelButtonProps?: unknown;
            destroyOnClose?: unknown;
            wrapClassName?: unknown;
            maskTransitionName?: unknown;
            transitionName?: unknown;
            getContainer?: unknown;
            zIndex?: unknown;
            bodyStyle?: unknown;
            maskStyle?: unknown;
            mask?: unknown;
            keyboard?: unknown;
            wrapProps?: unknown;
            focusTriggerAfterClose?: unknown;
        } & {
            prefixCls: string;
            transitionName: string;
            zIndex: number;
            maskTransitionName: string;
            wrapClassName: string;
            wrapProps: {
                [key: string]: any;
            };
        } & {
            icon?: any;
            okText?: any;
            cancelText?: any;
            footer?: any;
            title?: any;
            mask?: boolean;
            onCancel?: (e: MouseEvent) => void;
            keyboard?: boolean;
            visible?: boolean;
            width?: string | number;
            forceRender?: boolean;
            maskClosable?: boolean;
            bodyStyle?: import("vue").CSSProperties;
            closable?: boolean;
            afterClose?: (...args: any[]) => any;
            getContainer?: any;
            centered?: boolean;
            closeIcon?: any;
            onOk?: (e: MouseEvent) => void;
            destroyOnClose?: boolean;
            maskStyle?: import("vue").CSSProperties;
            focusTriggerAfterClose?: boolean;
            confirmLoading?: boolean;
            okType?: import("../button/buttonTypes").LegacyButtonType;
            okButtonProps?: object;
            cancelButtonProps?: object;
        }> & {
            onChange?: (...args: any[]) => any;
            onCancel?: (...args: any[]) => any;
            "onUpdate:visible"?: (...args: any[]) => any;
            onOk?: (...args: any[]) => any;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "prefixCls" | "transitionName" | "zIndex" | "maskTransitionName" | "afterClose" | "wrapClassName" | "wrapProps">;
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
        $emit: (event: "change" | "cancel" | "update:visible" | "ok", ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<{
            prefixCls?: unknown;
            visible?: unknown;
            confirmLoading?: unknown;
            title?: unknown;
            closable?: unknown;
            closeIcon?: unknown;
            onOk?: unknown;
            onCancel?: unknown;
            afterClose?: unknown;
            centered?: unknown;
            width?: unknown;
            footer?: unknown;
            okText?: unknown;
            okType?: unknown;
            cancelText?: unknown;
            icon?: unknown;
            maskClosable?: unknown;
            forceRender?: unknown;
            okButtonProps?: unknown;
            cancelButtonProps?: unknown;
            destroyOnClose?: unknown;
            wrapClassName?: unknown;
            maskTransitionName?: unknown;
            transitionName?: unknown;
            getContainer?: unknown;
            zIndex?: unknown;
            bodyStyle?: unknown;
            maskStyle?: unknown;
            mask?: unknown;
            keyboard?: unknown;
            wrapProps?: unknown;
            focusTriggerAfterClose?: unknown;
        } & {
            prefixCls: string;
            transitionName: string;
            zIndex: number;
            maskTransitionName: string;
            wrapClassName: string;
            wrapProps: {
                [key: string]: any;
            };
        } & {
            icon?: any;
            okText?: any;
            cancelText?: any;
            footer?: any;
            title?: any;
            mask?: boolean;
            onCancel?: (e: MouseEvent) => void;
            keyboard?: boolean;
            visible?: boolean;
            width?: string | number;
            forceRender?: boolean;
            maskClosable?: boolean;
            bodyStyle?: import("vue").CSSProperties;
            closable?: boolean;
            afterClose?: (...args: any[]) => any;
            getContainer?: any;
            centered?: boolean;
            closeIcon?: any;
            onOk?: (e: MouseEvent) => void;
            destroyOnClose?: boolean;
            maskStyle?: import("vue").CSSProperties;
            focusTriggerAfterClose?: boolean;
            confirmLoading?: boolean;
            okType?: import("../button/buttonTypes").LegacyButtonType;
            okButtonProps?: object;
            cancelButtonProps?: object;
        }> & {
            onChange?: (...args: any[]) => any;
            onCancel?: (...args: any[]) => any;
            "onUpdate:visible"?: (...args: any[]) => any;
            onOk?: (...args: any[]) => any;
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
            handleCancel(e: MouseEvent): void;
            handleOk(e: MouseEvent): void;
            renderFooter(locale: import("./Modal").ModalLocale): JSX.Element;
        }, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "cancel" | "update:visible" | "ok")[], string, {
            prefixCls: string;
            transitionName: string;
            zIndex: number;
            maskTransitionName: string;
            afterClose: (...args: any[]) => any;
            wrapClassName: string;
            wrapProps: {
                [key: string]: any;
            };
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
        visible?: unknown;
        confirmLoading?: unknown;
        title?: unknown;
        closable?: unknown;
        closeIcon?: unknown;
        onOk?: unknown;
        onCancel?: unknown;
        afterClose?: unknown;
        centered?: unknown;
        width?: unknown;
        footer?: unknown;
        okText?: unknown;
        okType?: unknown;
        cancelText?: unknown;
        icon?: unknown;
        maskClosable?: unknown;
        forceRender?: unknown;
        okButtonProps?: unknown;
        cancelButtonProps?: unknown;
        destroyOnClose?: unknown;
        wrapClassName?: unknown;
        maskTransitionName?: unknown;
        transitionName?: unknown;
        getContainer?: unknown;
        zIndex?: unknown;
        bodyStyle?: unknown;
        maskStyle?: unknown;
        mask?: unknown;
        keyboard?: unknown;
        wrapProps?: unknown;
        focusTriggerAfterClose?: unknown;
    } & {
        prefixCls: string;
        transitionName: string;
        zIndex: number;
        maskTransitionName: string;
        wrapClassName: string;
        wrapProps: {
            [key: string]: any;
        };
    } & {
        icon?: any;
        okText?: any;
        cancelText?: any;
        footer?: any;
        title?: any;
        mask?: boolean;
        onCancel?: (e: MouseEvent) => void;
        keyboard?: boolean;
        visible?: boolean;
        width?: string | number;
        forceRender?: boolean;
        maskClosable?: boolean;
        bodyStyle?: import("vue").CSSProperties;
        closable?: boolean;
        afterClose?: (...args: any[]) => any;
        getContainer?: any;
        centered?: boolean;
        closeIcon?: any;
        onOk?: (e: MouseEvent) => void;
        destroyOnClose?: boolean;
        maskStyle?: import("vue").CSSProperties;
        focusTriggerAfterClose?: boolean;
        confirmLoading?: boolean;
        okType?: import("../button/buttonTypes").LegacyButtonType;
        okButtonProps?: object;
        cancelButtonProps?: object;
    }> & {
        onChange?: (...args: any[]) => any;
        onCancel?: (...args: any[]) => any;
        "onUpdate:visible"?: (...args: any[]) => any;
        onOk?: (...args: any[]) => any;
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
        handleCancel(e: MouseEvent): void;
        handleOk(e: MouseEvent): void;
        renderFooter(locale: import("./Modal").ModalLocale): JSX.Element;
    } & import("vue").ComponentCustomProperties;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<{
    prefixCls?: unknown;
    visible?: unknown;
    confirmLoading?: unknown;
    title?: unknown;
    closable?: unknown;
    closeIcon?: unknown;
    onOk?: unknown;
    onCancel?: unknown;
    afterClose?: unknown;
    centered?: unknown;
    width?: unknown;
    footer?: unknown;
    okText?: unknown;
    okType?: unknown;
    cancelText?: unknown;
    icon?: unknown;
    maskClosable?: unknown;
    forceRender?: unknown;
    okButtonProps?: unknown;
    cancelButtonProps?: unknown;
    destroyOnClose?: unknown;
    wrapClassName?: unknown;
    maskTransitionName?: unknown;
    transitionName?: unknown;
    getContainer?: unknown;
    zIndex?: unknown;
    bodyStyle?: unknown;
    maskStyle?: unknown;
    mask?: unknown;
    keyboard?: unknown;
    wrapProps?: unknown;
    focusTriggerAfterClose?: unknown;
} & {
    prefixCls: string;
    transitionName: string;
    zIndex: number;
    maskTransitionName: string;
    wrapClassName: string;
    wrapProps: {
        [key: string]: any;
    };
} & {
    icon?: any;
    okText?: any;
    cancelText?: any;
    footer?: any;
    title?: any;
    mask?: boolean;
    onCancel?: (e: MouseEvent) => void;
    keyboard?: boolean;
    visible?: boolean;
    width?: string | number;
    forceRender?: boolean;
    maskClosable?: boolean;
    bodyStyle?: import("vue").CSSProperties;
    closable?: boolean;
    afterClose?: (...args: any[]) => any;
    getContainer?: any;
    centered?: boolean;
    closeIcon?: any;
    onOk?: (e: MouseEvent) => void;
    destroyOnClose?: boolean;
    maskStyle?: import("vue").CSSProperties;
    focusTriggerAfterClose?: boolean;
    confirmLoading?: boolean;
    okType?: import("../button/buttonTypes").LegacyButtonType;
    okButtonProps?: object;
    cancelButtonProps?: object;
}> & {
    onChange?: (...args: any[]) => any;
    onCancel?: (...args: any[]) => any;
    "onUpdate:visible"?: (...args: any[]) => any;
    onOk?: (...args: any[]) => any;
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
    handleCancel(e: MouseEvent): void;
    handleOk(e: MouseEvent): void;
    renderFooter(locale: import("./Modal").ModalLocale): JSX.Element;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "cancel" | "update:visible" | "ok")[], "change" | "cancel" | "update:visible" | "ok", {
    prefixCls: string;
    transitionName: string;
    zIndex: number;
    maskTransitionName: string;
    afterClose: (...args: any[]) => any;
    wrapClassName: string;
    wrapProps: {
        [key: string]: any;
    };
}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Plugin & {
    readonly info: ModalFunc;
    readonly success: ModalFunc;
    readonly error: ModalFunc;
    readonly warn: ModalFunc;
    readonly warning: ModalFunc;
    readonly confirm: ModalFunc;
    readonly destroyAll: () => void;
};
export default _default;
