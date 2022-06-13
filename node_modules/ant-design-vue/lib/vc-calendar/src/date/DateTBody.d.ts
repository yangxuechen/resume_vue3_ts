export default DateTBody;
declare namespace DateTBody {
    const name: string;
    const inheritAttrs: boolean;
    namespace props {
        const contentRender: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
            default: (...args: any[]) => any;
        };
        const dateRender: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
            default: (...args: any[]) => any;
        };
        const disabledDate: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
            default: (...args: any[]) => any;
        };
        const prefixCls: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        };
        const selectedValue: import("vue-types").VueTypeValidableDef<any>;
        const value: import("vue-types").VueTypeValidableDef<{
            [key: string]: any;
        }> & {
            default: () => {
                [key: string]: any;
            };
        };
        const hoverValue: import("vue-types").VueTypeValidableDef<any> & {
            default: any;
        };
        const showWeekNumber: import("vue-types").VueTypeValidableDef<boolean>;
    }
    function render(): JSX.Element;
    function render(): JSX.Element;
}
