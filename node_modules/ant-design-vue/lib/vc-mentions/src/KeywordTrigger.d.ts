declare namespace _default {
    const name: string;
    namespace props {
        const loading: import("vue-types").VueTypeValidableDef<boolean>;
        const options: import("vue-types").VueTypeDef<any[]>;
        const prefixCls: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        };
        const placement: import("vue-types").VueTypeDef<"bottom" | "top">;
        const visible: import("vue-types").VueTypeValidableDef<boolean>;
        const transitionName: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        };
        const getPopupContainer: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
            default: (...args: any[]) => any;
        };
    }
    namespace methods {
        function getDropdownPrefix(): string;
        function getDropdownPrefix(): string;
        function getDropdownElement(): JSX.Element;
        function getDropdownElement(): JSX.Element;
    }
    function render(): JSX.Element;
    function render(): JSX.Element;
}
export default _default;
