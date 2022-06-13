declare namespace _default {
    const mixins: {
        methods: {
            setState(state: {}, callback: any): void;
            __emit(...args: any[]): void;
        };
    }[];
    namespace props {
        const duration: import("vue-types").VueTypeValidableDef<number> & {
            default: number;
        } & {
            default: number;
        };
        const closable: import("vue-types").VueTypeValidableDef<boolean>;
        const prefixCls: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        };
        const update: import("vue-types").VueTypeValidableDef<boolean>;
        const closeIcon: import("vue-types").VueTypeValidableDef<any>;
        const onClose: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
            default: (...args: any[]) => any;
        };
    }
    namespace watch {
        function duration(): void;
        function duration(): void;
    }
    function mounted(): void;
    function mounted(): void;
    function updated(): void;
    function updated(): void;
    function beforeUnmount(): void;
    function beforeUnmount(): void;
    namespace methods {
        function close(e: any): void;
        function close(e: any): void;
        function startCloseTimer(): void;
        function startCloseTimer(): void;
        function clearCloseTimer(): void;
        function clearCloseTimer(): void;
        function restartCloseTimer(): void;
        function restartCloseTimer(): void;
    }
    function render(): JSX.Element;
    function render(): JSX.Element;
}
export default _default;
