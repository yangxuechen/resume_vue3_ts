export default CalendarPart;
declare namespace CalendarPart {
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
        const value: import("vue-types").VueTypeValidableDef<any>;
        const hoverValue: import("vue-types").VueTypeValidableDef<any>;
        const selectedValue: import("vue-types").VueTypeValidableDef<any>;
        const direction: import("vue-types").VueTypeValidableDef<any>;
        const locale: import("vue-types").VueTypeValidableDef<any>;
        const showDateInput: import("vue-types").VueTypeValidableDef<boolean>;
        const showTimePicker: import("vue-types").VueTypeValidableDef<boolean>;
        const showWeekNumber: import("vue-types").VueTypeValidableDef<boolean>;
        const format: import("vue-types").VueTypeValidableDef<any>;
        const placeholder: import("vue-types").VueTypeValidableDef<any>;
        const disabledDate: import("vue-types").VueTypeValidableDef<any>;
        const timePicker: import("vue-types").VueTypeValidableDef<any>;
        const disabledTime: import("vue-types").VueTypeValidableDef<any>;
        const disabledMonth: import("vue-types").VueTypeValidableDef<any>;
        const mode: import("vue-types").VueTypeValidableDef<any>;
        const timePickerDisabledTime: import("vue-types").VueTypeValidableDef<{
            [key: string]: any;
        }> & {
            default: () => {
                [key: string]: any;
            };
        };
        const enableNext: import("vue-types").VueTypeValidableDef<any>;
        const enablePrev: import("vue-types").VueTypeValidableDef<any>;
        const clearIcon: import("vue-types").VueTypeValidableDef<any>;
        const dateRender: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
            default: (...args: any[]) => any;
        };
        const inputMode: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        };
        const inputReadOnly: import("vue-types").VueTypeValidableDef<boolean>;
    }
    function render(): JSX.Element;
    function render(): JSX.Element;
}
