declare namespace _default {
    const mixins: {
        methods: {
            setState(state: {}, callback: any): void;
            __emit(...args: any[]): void;
        };
    }[];
    namespace props {
        const disabled: import("vue-types").VueTypeValidableDef<boolean>;
        const changeSize: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
            default: (...args: any[]) => any;
        };
        const quickGo: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
            default: (...args: any[]) => any;
        };
        const selectComponentClass: import("vue-types").VueTypeValidableDef<any>;
        const current: import("vue-types").VueTypeValidableDef<number> & {
            default: number;
        };
        const pageSizeOptions: import("vue-types").VueTypeValidableDef<unknown[]> & {
            default: () => unknown[];
        } & {
            default: () => unknown[];
        };
        const pageSize: import("vue-types").VueTypeValidableDef<number> & {
            default: number;
        };
        const buildOptionText: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
            default: (...args: any[]) => any;
        };
        const locale: import("vue-types").VueTypeValidableDef<{
            [key: string]: any;
        }> & {
            default: () => {
                [key: string]: any;
            };
        };
        const rootPrefixCls: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        };
        const selectPrefixCls: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        };
        const goButton: import("vue-types").VueTypeValidableDef<any>;
    }
    function data(): {
        goInputText: string;
    };
    function data(): {
        goInputText: string;
    };
    namespace methods {
        function getValidValue(): any;
        function getValidValue(): any;
        function defaultBuildOptionText(opt: any): string;
        function defaultBuildOptionText(opt: any): string;
        function handleChange(e: any): void;
        function handleChange(e: any): void;
        function handleBlur(e: any): void;
        function handleBlur(e: any): void;
        function go(e: any): void;
        function go(e: any): void;
    }
    function render(): JSX.Element;
    function render(): JSX.Element;
}
export default _default;
