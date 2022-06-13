export default CalendarFooter;
declare namespace CalendarFooter {
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
        const showDateInput: import("vue-types").VueTypeValidableDef<boolean>;
        const disabledTime: import("vue-types").VueTypeValidableDef<any>;
        const timePicker: import("vue-types").VueTypeValidableDef<any>;
        const selectedValue: import("vue-types").VueTypeValidableDef<any>;
        const showOk: import("vue-types").VueTypeValidableDef<boolean>;
        const value: import("vue-types").VueTypeValidableDef<{
            [key: string]: any;
        }> & {
            default: () => {
                [key: string]: any;
            };
        };
        const renderFooter: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
            default: (...args: any[]) => any;
        };
        const defaultValue: import("vue-types").VueTypeValidableDef<{
            [key: string]: any;
        }> & {
            default: () => {
                [key: string]: any;
            };
        };
        const locale: import("vue-types").VueTypeValidableDef<{
            [key: string]: any;
        }> & {
            default: () => {
                [key: string]: any;
            };
        };
        const showToday: import("vue-types").VueTypeValidableDef<boolean>;
        const disabledDate: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
            default: (...args: any[]) => any;
        };
        const showTimePicker: import("vue-types").VueTypeValidableDef<boolean>;
        const okDisabled: import("vue-types").VueTypeValidableDef<boolean>;
        const mode: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        };
    }
    namespace methods {
        function onSelect(value: any): void;
        function onSelect(value: any): void;
        function getRootDOMNode(): any;
        function getRootDOMNode(): any;
    }
    function render(): JSX.Element;
    function render(): JSX.Element;
}
