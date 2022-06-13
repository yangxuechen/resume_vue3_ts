export default MonthPanel;
declare namespace MonthPanel {
    const name: string;
    const inheritAttrs: boolean;
    const mixins: {
        methods: {
            setState(state: {}, callback: any): void;
            __emit(...args: any[]): void;
        };
    }[];
    namespace props {
        const value: import("vue-types").VueTypeValidableDef<any>;
        const defaultValue: import("vue-types").VueTypeValidableDef<any>;
        const cellRender: import("vue-types").VueTypeValidableDef<any>;
        const contentRender: import("vue-types").VueTypeValidableDef<any>;
        const locale: import("vue-types").VueTypeValidableDef<any>;
        const rootPrefixCls: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        };
        const disabledDate: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
            default: (...args: any[]) => any;
        };
        const renderFooter: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
            default: (...args: any[]) => any;
        };
        const changeYear: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
            default: (...args: any[]) => any;
        } & {
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
        function setValue(value: any): void;
        function setValue(value: any): void;
    }
    function render(): JSX.Element;
    function render(): JSX.Element;
}
