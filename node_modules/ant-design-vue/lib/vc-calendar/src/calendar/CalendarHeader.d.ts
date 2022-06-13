export default CalendarHeader;
declare namespace CalendarHeader {
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
        const value: import("vue-types").VueTypeValidableDef<{
            [key: string]: any;
        }> & {
            default: () => {
                [key: string]: any;
            };
        };
        const showTimePicker: import("vue-types").VueTypeValidableDef<boolean>;
        const locale: import("vue-types").VueTypeValidableDef<{
            [key: string]: any;
        }> & {
            default: () => {
                [key: string]: any;
            };
        };
        const enablePrev: import("vue-types").VueTypeValidableDef<any> & {
            default: any;
        };
        const enableNext: import("vue-types").VueTypeValidableDef<any> & {
            default: any;
        };
        const disabledMonth: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
            default: (...args: any[]) => any;
        };
        const mode: import("vue-types").VueTypeValidableDef<any>;
        const monthCellRender: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
            default: (...args: any[]) => any;
        };
        const monthCellContentRender: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
            default: (...args: any[]) => any;
        };
        const renderFooter: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
            default: (...args: any[]) => any;
        };
    }
    function data(): {
        yearPanelReferer: any;
    };
    function data(): {
        yearPanelReferer: any;
    };
    namespace methods {
        function onMonthSelect(value: any): void;
        function onMonthSelect(value: any): void;
        function onYearSelect(value: any): void;
        function onYearSelect(value: any): void;
        function onDecadeSelect(value: any): void;
        function onDecadeSelect(value: any): void;
        function changeYear(direction: any): void;
        function changeYear(direction: any): void;
        function monthYearElement(showTimePicker: any): JSX.Element;
        function monthYearElement(showTimePicker: any): JSX.Element;
        function showMonthPanel(): void;
        function showMonthPanel(): void;
        function showYearPanel(referer: any): void;
        function showYearPanel(referer: any): void;
        function showDecadePanel(): void;
        function showDecadePanel(): void;
    }
    function render(): JSX.Element;
    function render(): JSX.Element;
}
