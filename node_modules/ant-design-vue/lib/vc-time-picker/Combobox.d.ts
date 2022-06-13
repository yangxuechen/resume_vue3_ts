export default Combobox;
declare namespace Combobox {
    const inheritAttrs: boolean;
    const mixins: {
        methods: {
            setState(state: {}, callback: any): void;
            __emit(...args: any[]): void;
        };
    }[];
    const name: string;
    namespace props {
        const format: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        };
        const defaultOpenValue: import("vue-types").VueTypeValidableDef<{
            [key: string]: any;
        }> & {
            default: () => {
                [key: string]: any;
            };
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
        const showHour: import("vue-types").VueTypeValidableDef<boolean>;
        const showMinute: import("vue-types").VueTypeValidableDef<boolean>;
        const showSecond: import("vue-types").VueTypeValidableDef<boolean>;
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
        const use12Hours: import("vue-types").VueTypeValidableDef<boolean>;
        const isAM: import("vue-types").VueTypeValidableDef<boolean>;
    }
    namespace methods {
        function onItemChange(type: any, itemValue: any): void;
        function onItemChange(type: any, itemValue: any): void;
        function onEnterSelectPanel(range: any): void;
        function onEnterSelectPanel(range: any): void;
        function onEsc(e: any): void;
        function onEsc(e: any): void;
        function getHourSelect(hour: any): JSX.Element;
        function getHourSelect(hour: any): JSX.Element;
        function getMinuteSelect(minute: any): JSX.Element;
        function getMinuteSelect(minute: any): JSX.Element;
        function getSecondSelect(second: any): JSX.Element;
        function getSecondSelect(second: any): JSX.Element;
        function getAMPMSelect(): JSX.Element;
        function getAMPMSelect(): JSX.Element;
    }
    function render(): JSX.Element;
    function render(): JSX.Element;
}
