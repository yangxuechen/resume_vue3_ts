export default Header;
declare namespace Header {
    const inheritAttrs: boolean;
    const name: string;
    const mixins: {
        methods: {
            setState(state: {}, callback: any): void;
            __emit(...args: any[]): void;
        };
    }[];
    namespace props {
        const format: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        };
        const prefixCls: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        };
        const disabledDate: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
            default: (...args: any[]) => any;
        };
        const placeholder: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        };
        const clearText: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        };
        const value: import("vue-types").VueTypeValidableDef<{
            [key: string]: any;
        }> & {
            default: () => {
                [key: string]: any;
            };
        };
        const inputReadOnly: import("vue-types").VueTypeValidableDef<boolean> & {
            default: boolean;
        };
        const hourOptions: import("vue-types").VueTypeValidableDef<unknown[]> & {
            default: () => unknown[];
        };
        const minuteOptions: import("vue-types").VueTypeValidableDef<unknown[]> & {
            default: () => unknown[];
        };
        const secondOptions: import("vue-types").VueTypeValidableDef<unknown[]> & {
            default: () => unknown[];
        };
        const disabledHours: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
            default: (...args: any[]) => any;
        };
        const disabledMinutes: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
            default: (...args: any[]) => any;
        };
        const disabledSeconds: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
            default: (...args: any[]) => any;
        };
        const allowEmpty: import("vue-types").VueTypeValidableDef<boolean>;
        const defaultOpenValue: import("vue-types").VueTypeValidableDef<{
            [key: string]: any;
        }> & {
            default: () => {
                [key: string]: any;
            };
        };
        const currentSelectPanel: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        };
        const focusOnOpen: import("vue-types").VueTypeValidableDef<boolean>;
        const clearIcon: import("vue-types").VueTypeValidableDef<any>;
    }
    function data(): {
        str: any;
        invalid: boolean;
    };
    function data(): {
        str: any;
        invalid: boolean;
    };
    function mounted(): void;
    function mounted(): void;
    namespace watch {
        function value(val: any): void;
        function value(val: any): void;
    }
    namespace methods {
        function onInputChange(e: any): void;
        function onInputChange(e: any): void;
        function onKeyDown(e: any): void;
        function onKeyDown(e: any): void;
        function getProtoValue(): any;
        function getProtoValue(): any;
        function getInput(): JSX.Element;
        function getInput(): JSX.Element;
    }
    function render(): JSX.Element;
    function render(): JSX.Element;
}
