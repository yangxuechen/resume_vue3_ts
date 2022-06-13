declare namespace _default {
    const name: string;
    const mixins: {
        methods: {
            setState(state: {}, callback: any): void;
            __emit(...args: any[]): void;
        };
    }[];
    const inheritAttrs: boolean;
    namespace props {
        const visible: import("vue-types").VueTypeValidableDef<boolean>;
        const getClassNameFromAlign: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
            default: (...args: any[]) => any;
        };
        const getRootDomNode: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
            default: (...args: any[]) => any;
        };
        const align: import("vue-types").VueTypeValidableDef<any>;
        const destroyPopupOnHide: import("vue-types").VueTypeValidableDef<boolean>;
        const prefixCls: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        };
        const getContainer: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
            default: (...args: any[]) => any;
        };
        const transitionName: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        };
        const animation: import("vue-types").VueTypeValidableDef<any>;
        const maskAnimation: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        };
        const maskTransitionName: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        };
        const mask: import("vue-types").VueTypeValidableDef<boolean>;
        const zIndex: import("vue-types").VueTypeValidableDef<number> & {
            default: number;
        };
        const popupClassName: import("vue-types").VueTypeValidableDef<any>;
        const popupStyle: import("vue-types").VueTypeValidableDef<{
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
        const stretch: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        };
        const point: import("vue-types").VueTypeLooseShape<{
            pageX: (number | ((props: Record<string, unknown>) => number)) & number;
            pageY: (number | ((props: Record<string, unknown>) => number)) & number;
        }>;
    }
    function data(): {
        stretchChecked: boolean;
        targetWidth: any;
        targetHeight: any;
    };
    function data(): {
        stretchChecked: boolean;
        targetWidth: any;
        targetHeight: any;
    };
    function mounted(): void;
    function mounted(): void;
    function updated(): void;
    function updated(): void;
    namespace methods {
        function onAlign(popupDomNode: any, align: any): void;
        function onAlign(popupDomNode: any, align: any): void;
        function setStretchSize(): void;
        function setStretchSize(): void;
        function getPopupDomNode(): any;
        function getPopupDomNode(): any;
        function getTargetElement(): any;
        function getTargetElement(): any;
        function getAlignTarget(): any;
        function getAlignTarget(): any;
        function getMaskTransitionName(): any;
        function getMaskTransitionName(): any;
        function getTransitionName(): any;
        function getTransitionName(): any;
        function getClassName(currentAlignClassName: any, originClassName?: string): string;
        function getClassName(currentAlignClassName: any, originClassName?: string): string;
        function getPopupElement(): JSX.Element;
        function getPopupElement(): JSX.Element;
        function getZIndexStyle(): {
            zIndex: any;
        };
        function getZIndexStyle(): {
            zIndex: any;
        };
        function getMaskElement(): JSX.Element;
        function getMaskElement(): JSX.Element;
    }
    function render(): JSX.Element;
    function render(): JSX.Element;
}
export default _default;
