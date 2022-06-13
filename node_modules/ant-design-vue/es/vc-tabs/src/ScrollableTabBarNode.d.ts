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
        const activeKey: import("vue-types").VueTypeValidableDef<any>;
        const getRef: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
            default: (...args: any[]) => any;
        } & {
            default: (...args: any[]) => any;
        };
        const saveRef: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
            default: (...args: any[]) => any;
        } & {
            default: (...args: any[]) => any;
        };
        const tabBarPosition: import("vue-types").VueTypeDef<string> & {
            default: string;
        };
        const prefixCls: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        } & {
            default: string;
        };
        const scrollAnimated: import("vue-types").VueTypeValidableDef<boolean> & {
            default: boolean;
        };
        const navWrapper: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
            default: (...args: any[]) => any;
        } & {
            default: (...args: any[]) => any;
        };
        const prevIcon: import("vue-types").VueTypeValidableDef<any>;
        const nextIcon: import("vue-types").VueTypeValidableDef<any>;
        const direction: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        };
    }
    function data(): {
        next: boolean;
        prev: boolean;
    };
    function data(): {
        next: boolean;
        prev: boolean;
    };
    namespace watch {
        function tabBarPosition(): void;
        function tabBarPosition(): void;
    }
    function mounted(): void;
    function mounted(): void;
    function updated(): void;
    function updated(): void;
    function beforeUnmount(): void;
    function beforeUnmount(): void;
    namespace methods {
        function updatedCal(prevProps: any): void;
        function updatedCal(prevProps: any): void;
        function setNextPrev(): {
            next: any;
            prev: any;
        };
        function setNextPrev(): {
            next: any;
            prev: any;
        };
        function getOffsetWH(node: any): any;
        function getOffsetWH(node: any): any;
        function getScrollWH(node: any): any;
        function getScrollWH(node: any): any;
        function getOffsetLT(node: any): any;
        function getOffsetLT(node: any): any;
        function setOffset(offset: any, checkNextPrev?: boolean): void;
        function setOffset(offset: any, checkNextPrev?: boolean): void;
        function setPrev(v: any): void;
        function setPrev(v: any): void;
        function setNext(v: any): void;
        function setNext(v: any): void;
        function isNextPrevShown(state: any): any;
        function isNextPrevShown(state: any): any;
        function prevTransitionEnd(e: any): void;
        function prevTransitionEnd(e: any): void;
        function scrollToActiveTab(e: any): void;
        function scrollToActiveTab(e: any): void;
        function prevClick(e: any): void;
        function prevClick(e: any): void;
        function nextClick(e: any): void;
        function nextClick(e: any): void;
    }
    function render(): JSX.Element;
    function render(): JSX.Element;
}
export default _default;
