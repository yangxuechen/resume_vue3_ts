export default MonthTable;
declare namespace MonthTable {
    const name: string;
    const inheritAttrs: boolean;
    const mixins: {
        methods: {
            setState(state: {}, callback: any): void;
            __emit(...args: any[]): void;
        };
    }[];
    namespace props {
        const cellRender: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
            default: (...args: any[]) => any;
        };
        const prefixCls: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        };
        const value: import("vue-types").VueTypeValidableDef<{
            [key: string]: any;
        }> & {
            default: () => {
                [key: string]: any;
            };
        };
        const locale: import("vue-types").VueTypeValidableDef<any>;
        const contentRender: import("vue-types").VueTypeValidableDef<any>;
        const disabledDate: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
            default: (...args: any[]) => any;
        };
    }
    function data(): {
        sValue: any;
    };
    function data(): {
        sValue: any;
    };
    namespace watch {
        function value(val: any): void;
        function value(val: any): void;
    }
    namespace methods {
        function setAndSelectValue(value: any): void;
        function setAndSelectValue(value: any): void;
        function chooseMonth(month: any): void;
        function chooseMonth(month: any): void;
        function months(): any[][];
        function months(): any[][];
    }
    function render(): JSX.Element;
    function render(): JSX.Element;
}
