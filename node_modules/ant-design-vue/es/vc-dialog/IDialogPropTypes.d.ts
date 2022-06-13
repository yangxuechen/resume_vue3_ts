export default IDialogPropTypes;
declare function IDialogPropTypes(): {
    keyboard: import("vue-types").VueTypeValidableDef<boolean>;
    mask: import("vue-types").VueTypeValidableDef<boolean>;
    afterClose: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    closable: import("vue-types").VueTypeValidableDef<boolean>;
    maskClosable: import("vue-types").VueTypeValidableDef<boolean>;
    visible: import("vue-types").VueTypeValidableDef<boolean>;
    destroyOnClose: import("vue-types").VueTypeValidableDef<boolean>;
    mousePosition: import("vue-types").VueTypeLooseShape<{
        x: (number | ((props: Record<string, unknown>) => number)) & number;
        y: (number | ((props: Record<string, unknown>) => number)) & number;
    }>;
    title: import("vue-types").VueTypeValidableDef<any>;
    footer: import("vue-types").VueTypeValidableDef<any>;
    transitionName: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    maskTransitionName: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    animation: import("vue-types").VueTypeValidableDef<any>;
    maskAnimation: import("vue-types").VueTypeValidableDef<any>;
    wrapStyle: import("vue-types").VueTypeValidableDef<{
        [key: string]: any;
    }> & {
        default: () => {
            [key: string]: any;
        };
    };
    bodyStyle: import("vue-types").VueTypeValidableDef<{
        [key: string]: any;
    }> & {
        default: () => {
            [key: string]: any;
        };
    };
    maskStyle: import("vue-types").VueTypeValidableDef<{
        [key: string]: any;
    }> & {
        default: () => {
            [key: string]: any;
        };
    };
    prefixCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    wrapClassName: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    width: import("vue-types").VueTypeDef<string | number>;
    height: import("vue-types").VueTypeDef<string | number>;
    zIndex: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
    bodyProps: import("vue-types").VueTypeValidableDef<any>;
    maskProps: import("vue-types").VueTypeValidableDef<any>;
    wrapProps: import("vue-types").VueTypeValidableDef<any>;
    getContainer: import("vue-types").VueTypeValidableDef<any>;
    dialogStyle: import("vue-types").VueTypeValidableDef<{
        [key: string]: any;
    }> & {
        default: () => {
            [key: string]: any;
        };
    };
    dialogClass: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    closeIcon: import("vue-types").VueTypeValidableDef<any>;
    forceRender: import("vue-types").VueTypeValidableDef<boolean>;
    getOpenCount: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    focusTriggerAfterClose: import("vue-types").VueTypeValidableDef<boolean>;
    onClose: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
};
