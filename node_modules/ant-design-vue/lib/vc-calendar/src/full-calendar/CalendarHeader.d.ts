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
        const value: import("vue-types").VueTypeValidableDef<{
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
        const yearSelectOffset: import("vue-types").VueTypeValidableDef<number> & {
            default: number;
        } & {
            default: number;
        };
        const yearSelectTotal: import("vue-types").VueTypeValidableDef<number> & {
            default: number;
        } & {
            default: number;
        };
        const Select: import("vue-types").VueTypeValidableDef<{
            [key: string]: any;
        }> & {
            default: () => {
                [key: string]: any;
            };
        };
        const prefixCls: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        };
        const type: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        };
        const showTypeSwitch: import("vue-types").VueTypeValidableDef<boolean>;
        const headerComponents: import("vue-types").VueTypeValidableDef<unknown[]> & {
            default: () => unknown[];
        };
    }
    namespace methods {
        function onYearChange(year: any): void;
        function onYearChange(year: any): void;
        function onMonthChange(month: any): void;
        function onMonthChange(month: any): void;
        function yearSelectElement(year: any): JSX.Element;
        function yearSelectElement(year: any): JSX.Element;
        function monthSelectElement(month: any): JSX.Element;
        function monthSelectElement(month: any): JSX.Element;
        function changeTypeToDate(): void;
        function changeTypeToDate(): void;
        function changeTypeToMonth(): void;
        function changeTypeToMonth(): void;
    }
    function render(): JSX.Element;
    function render(): JSX.Element;
}
