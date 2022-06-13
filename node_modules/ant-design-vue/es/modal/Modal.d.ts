import type { ExtractPropTypes, VNodeTypes, CSSProperties, PropType } from 'vue';
import type { ButtonProps as ButtonPropsType, LegacyButtonType } from '../button/buttonTypes';
declare const modalProps: {
    prefixCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    /** 对话框是否可见*/
    visible: import("vue-types").VueTypeValidableDef<boolean>;
    /** 确定按钮 loading*/
    confirmLoading: import("vue-types").VueTypeValidableDef<boolean>;
    /** 标题*/
    title: import("vue-types").VueTypeValidableDef<any>;
    /** 是否显示右上角的关闭按钮*/
    closable: import("vue-types").VueTypeValidableDef<boolean>;
    closeIcon: import("vue-types").VueTypeValidableDef<any>;
    /** 点击确定回调*/
    onOk: {
        type: PropType<(e: MouseEvent) => void>;
    };
    /** 点击模态框右上角叉、取消按钮、Props.maskClosable 值为 true 时的遮罩层或键盘按下 Esc 时的回调*/
    onCancel: {
        type: PropType<(e: MouseEvent) => void>;
    };
    afterClose: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    } & {
        default: (...args: any[]) => any;
    };
    /** 垂直居中 */
    centered: import("vue-types").VueTypeValidableDef<boolean>;
    /** 宽度*/
    width: import("vue-types").VueTypeDef<string | number>;
    /** 底部内容*/
    footer: import("vue-types").VueTypeValidableDef<any>;
    /** 确认按钮文字*/
    okText: import("vue-types").VueTypeValidableDef<any>;
    /** 确认按钮类型*/
    okType: {
        type: PropType<LegacyButtonType>;
    };
    /** 取消按钮文字*/
    cancelText: import("vue-types").VueTypeValidableDef<any>;
    icon: import("vue-types").VueTypeValidableDef<any>;
    /** 点击蒙层是否允许关闭*/
    maskClosable: import("vue-types").VueTypeValidableDef<boolean>;
    /** 强制渲染 Modal*/
    forceRender: import("vue-types").VueTypeValidableDef<boolean>;
    okButtonProps: import("vue-types").VueTypeLooseShape<object>;
    cancelButtonProps: import("vue-types").VueTypeLooseShape<object>;
    destroyOnClose: import("vue-types").VueTypeValidableDef<boolean>;
    wrapClassName: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    maskTransitionName: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    transitionName: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    getContainer: import("vue-types").VueTypeValidableDef<any>;
    zIndex: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
    bodyStyle: import("vue-types").VueTypeValidableDef<CSSProperties>;
    maskStyle: import("vue-types").VueTypeValidableDef<CSSProperties>;
    mask: import("vue-types").VueTypeValidableDef<boolean>;
    keyboard: import("vue-types").VueTypeValidableDef<boolean>;
    wrapProps: import("vue-types").VueTypeValidableDef<{
        [key: string]: any;
    }> & {
        default: () => {
            [key: string]: any;
        };
    };
    focusTriggerAfterClose: import("vue-types").VueTypeValidableDef<boolean>;
};
export declare type ModalProps = ExtractPropTypes<typeof modalProps>;
export interface ModalFuncProps {
    prefixCls?: string;
    class?: string;
    visible?: boolean;
    title?: string | (() => VNodeTypes) | VNodeTypes;
    closable?: boolean;
    content?: string | (() => VNodeTypes) | VNodeTypes;
    onOk?: (...args: any[]) => any;
    onCancel?: (...args: any[]) => any;
    okButtonProps?: ButtonPropsType;
    cancelButtonProps?: ButtonPropsType;
    centered?: boolean;
    width?: string | number;
    okText?: string | (() => VNodeTypes) | VNodeTypes;
    okType?: LegacyButtonType;
    cancelText?: string | (() => VNodeTypes) | VNodeTypes;
    icon?: (() => VNodeTypes) | VNodeTypes;
    iconType?: string;
    mask?: boolean;
    maskClosable?: boolean;
    zIndex?: number;
    okCancel?: boolean;
    style?: CSSProperties | string;
    maskStyle?: CSSProperties;
    type?: string;
    keyboard?: boolean;
    getContainer?: getContainerFunc | boolean | string;
    autoFocusButton?: null | 'ok' | 'cancel';
    transitionName?: string;
    maskTransitionName?: string;
    /** @deprecated please use `appContext` instead */
    parentContext?: any;
    appContext?: any;
}
declare type getContainerFunc = () => HTMLElement;
export declare type ModalFunc = (props: ModalFuncProps) => {
    destroy: () => void;
    update: (newConfig: ModalFuncProps) => void;
};
export interface ModalLocale {
    okText: string;
    cancelText: string;
    justOkText: string;
}
export declare const destroyFns: any[];
declare const _default: import("vue").DefineComponent<{
    prefixCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    /** 对话框是否可见*/
    visible: import("vue-types").VueTypeValidableDef<boolean>;
    /** 确定按钮 loading*/
    confirmLoading: import("vue-types").VueTypeValidableDef<boolean>;
    /** 标题*/
    title: import("vue-types").VueTypeValidableDef<any>;
    /** 是否显示右上角的关闭按钮*/
    closable: import("vue-types").VueTypeValidableDef<boolean>;
    closeIcon: import("vue-types").VueTypeValidableDef<any>;
    /** 点击确定回调*/
    onOk: {
        type: PropType<(e: MouseEvent) => void>;
    };
    /** 点击模态框右上角叉、取消按钮、Props.maskClosable 值为 true 时的遮罩层或键盘按下 Esc 时的回调*/
    onCancel: {
        type: PropType<(e: MouseEvent) => void>;
    };
    afterClose: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    } & {
        default: (...args: any[]) => any;
    };
    /** 垂直居中 */
    centered: import("vue-types").VueTypeValidableDef<boolean>;
    /** 宽度*/
    width: import("vue-types").VueTypeDef<string | number>;
    /** 底部内容*/
    footer: import("vue-types").VueTypeValidableDef<any>;
    /** 确认按钮文字*/
    okText: import("vue-types").VueTypeValidableDef<any>;
    /** 确认按钮类型*/
    okType: {
        type: PropType<LegacyButtonType>;
    };
    /** 取消按钮文字*/
    cancelText: import("vue-types").VueTypeValidableDef<any>;
    icon: import("vue-types").VueTypeValidableDef<any>;
    /** 点击蒙层是否允许关闭*/
    maskClosable: import("vue-types").VueTypeValidableDef<boolean>;
    /** 强制渲染 Modal*/
    forceRender: import("vue-types").VueTypeValidableDef<boolean>;
    okButtonProps: import("vue-types").VueTypeLooseShape<object>;
    cancelButtonProps: import("vue-types").VueTypeLooseShape<object>;
    destroyOnClose: import("vue-types").VueTypeValidableDef<boolean>;
    wrapClassName: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    maskTransitionName: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    transitionName: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    getContainer: import("vue-types").VueTypeValidableDef<any>;
    zIndex: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
    bodyStyle: import("vue-types").VueTypeValidableDef<CSSProperties>;
    maskStyle: import("vue-types").VueTypeValidableDef<CSSProperties>;
    mask: import("vue-types").VueTypeValidableDef<boolean>;
    keyboard: import("vue-types").VueTypeValidableDef<boolean>;
    wrapProps: import("vue-types").VueTypeValidableDef<{
        [key: string]: any;
    }> & {
        default: () => {
            [key: string]: any;
        };
    };
    focusTriggerAfterClose: import("vue-types").VueTypeValidableDef<boolean>;
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
    renderFooter(locale: ModalLocale): JSX.Element;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "cancel" | "update:visible" | "ok")[], "change" | "cancel" | "update:visible" | "ok", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
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
    bodyStyle?: CSSProperties;
    closable?: boolean;
    afterClose?: (...args: any[]) => any;
    getContainer?: any;
    centered?: boolean;
    closeIcon?: any;
    onOk?: (e: MouseEvent) => void;
    destroyOnClose?: boolean;
    maskStyle?: CSSProperties;
    focusTriggerAfterClose?: boolean;
    confirmLoading?: boolean;
    okType?: LegacyButtonType;
    okButtonProps?: object;
    cancelButtonProps?: object;
}> & {
    onChange?: (...args: any[]) => any;
    onCancel?: (...args: any[]) => any;
    "onUpdate:visible"?: (...args: any[]) => any;
    onOk?: (...args: any[]) => any;
}, {
    prefixCls: string;
    transitionName: string;
    zIndex: number;
    maskTransitionName: string;
    afterClose: (...args: any[]) => any;
    wrapClassName: string;
    wrapProps: {
        [key: string]: any;
    };
}>;
export default _default;
