export function getNowByCurrentStateValue(value: any): moment.Moment;
export default CalendarMixin;
import moment from "moment";
declare namespace CalendarMixin {
    const mixins: {
        methods: {
            setState(state: {}, callback: any): void;
            __emit(...args: any[]): void;
        };
    }[];
    const inheritAttrs: boolean;
    const name: string;
    namespace props {
        export { MomentType as value };
        export { MomentType as defaultValue };
    }
    function data(): {
        sValue: any;
        sSelectedValue: any;
    };
    function data(): {
        sValue: any;
        sSelectedValue: any;
    };
    namespace watch {
        function value(val: any): void;
        function value(val: any): void;
        function selectedValue(val: any): void;
        function selectedValue(val: any): void;
    }
    namespace methods {
        function onSelect(value: any, cause: any): void;
        function onSelect(value: any, cause: any): void;
        function renderRoot(newProps: any): JSX.Element;
        function renderRoot(newProps: any): JSX.Element;
        function setSelectedValue(selectedValue: any, cause: any): void;
        function setSelectedValue(selectedValue: any, cause: any): void;
        function setValue(value: any): void;
        function setValue(value: any): void;
        function isAllowedDate(value: any): boolean;
        function isAllowedDate(value: any): boolean;
    }
}
declare const MomentType: import("vue-types").VueTypeDef<any>;
