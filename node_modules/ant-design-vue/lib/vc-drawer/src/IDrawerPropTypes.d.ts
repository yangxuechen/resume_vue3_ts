export namespace IDrawerProps {
    const wrapperClassName: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    const forceRender: import("vue-types").VueTypeValidableDef<boolean>;
    const getContainer: import("vue-types").VueTypeDef<any>;
    const width: import("vue-types").VueTypeValidableDef<any>;
    const height: import("vue-types").VueTypeValidableDef<any>;
    const defaultOpen: import("vue-types").VueTypeValidableDef<boolean>;
    const firstEnter: import("vue-types").VueTypeValidableDef<boolean>;
    const open: import("vue-types").VueTypeValidableDef<boolean>;
    const prefixCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    const placement: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    const level: import("vue-types").VueTypeDef<string | unknown[]>;
    const levelMove: import("vue-types").VueTypeDef<any>;
    const ease: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    const duration: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    const handler: import("vue-types").VueTypeValidableDef<any>;
    const showMask: import("vue-types").VueTypeValidableDef<boolean>;
    const maskStyle: import("vue-types").VueTypeValidableDef<{
        [key: string]: any;
    }> & {
        default: () => {
            [key: string]: any;
        };
    };
    const className: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    const wrapStyle: import("vue-types").VueTypeValidableDef<{
        [key: string]: any;
    }> & {
        default: () => {
            [key: string]: any;
        };
    };
    const maskClosable: import("vue-types").VueTypeValidableDef<boolean>;
    const afterVisibleChange: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    const keyboard: import("vue-types").VueTypeValidableDef<boolean>;
}
export namespace IDrawerChildProps {
    const getContainer_1: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    export { getContainer_1 as getContainer };
    export const getOpenCount: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    export const switchScrollingEffect: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
}
