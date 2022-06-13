import type { PropType } from 'vue';
declare const _default: () => {
    trigger: {
        type: PropType<"click" | "contextmenu" | "hover" | ("click" | "contextmenu" | "hover")[]>;
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
export default _default;
