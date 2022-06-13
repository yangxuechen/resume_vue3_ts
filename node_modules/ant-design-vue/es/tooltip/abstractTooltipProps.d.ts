declare const _default: () => {
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
export default _default;
