export default DateInput;
declare namespace DateInput {
    const name: string;
    const inheritAttrs: boolean;
    const mixins: {
        methods: {
            setState(state: {}, callback: any): void;
            __emit(...args: any[]): void;
        };
    }[];
    namespace props {
        const prefixCls: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        };
        const timePicker: import("vue-types").VueTypeValidableDef<{
            [key: string]: any;
        }> & {
            default: () => {
                [key: string]: any;
            };
        };
        const value: import("vue-types").VueTypeValidableDef<{
            [key: string]: any;
        }> & {
            default: () => {
                [key: string]: any;
            };
        };
        const disabledTime: import("vue-types").VueTypeValidableDef<any>;
        const format: import("vue-types").VueTypeDef<any>;
        const locale: import("vue-types").VueTypeValidableDef<{
            [key: string]: any;
        }> & {
            default: () => {
                [key: string]: any;
            };
        };
        const disabledDate: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
            default: (...args: any[]) => any;
        };
        const placeholder: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        };
        const selectedValue: import("vue-types").VueTypeValidableDef<{
            [key: string]: any;
        }> & {
            default: () => {
                [key: string]: any;
            };
        };
        const clearIcon: import("vue-types").VueTypeValidableDef<any>;
        const inputMode: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        };
        const inputReadOnly: import("vue-types").VueTypeValidableDef<boolean>;
        const disabled: import("vue-types").VueTypeValidableDef<boolean>;
        const showClear: import("vue-types").VueTypeValidableDef<boolean>;
    }
    function data(): {
        str: any;
        invalid: boolean;
        hasFocus: boolean;
    };
    function data(): {
        str: any;
        invalid: boolean;
        hasFocus: boolean;
    };
    namespace watch {
        function selectedValue(): void;
        function selectedValue(): void;
        function format(): void;
        function format(): void;
    }
    function updated(): void;
    function updated(): void;
    function getInstance(): any;
    function getInstance(): any;
    namespace methods {
        function getDerivedStateFromProps(nextProps: any, state: any): {};
        function getDerivedStateFromProps(nextProps: any, state: any): {};
        function onClear(): void;
        function onClear(): void;
        function onInputChange(e: any): void;
        function onInputChange(e: any): void;
        function onFocus(): void;
        function onFocus(): void;
        function onBlur(): void;
        function onBlur(): void;
        function onKeyDown(event: any): void;
        function onKeyDown(event: any): void;
        function getRootDOMNode(): any;
        function getRootDOMNode(): any;
        function focus(): void;
        function focus(): void;
        function saveDateInput(dateInput: any): void;
        function saveDateInput(dateInput: any): void;
    }
    function render(): JSX.Element;
    function render(): JSX.Element;
}
