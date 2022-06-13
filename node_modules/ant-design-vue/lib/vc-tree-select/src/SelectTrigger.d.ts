export default SelectTrigger;
declare namespace SelectTrigger {
    const name: string;
    const inheritAttrs: boolean;
    namespace props {
        const disabled: import("vue-types").VueTypeValidableDef<boolean>;
        const showSearch: import("vue-types").VueTypeValidableDef<boolean>;
        const prefixCls: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        };
        const dropdownPopupAlign: import("vue-types").VueTypeValidableDef<{
            [key: string]: any;
        }> & {
            default: () => {
                [key: string]: any;
            };
        };
        const dropdownClassName: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        };
        const dropdownStyle: import("vue-types").VueTypeValidableDef<{
            [key: string]: any;
        }> & {
            default: () => {
                [key: string]: any;
            };
        };
        const transitionName: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        };
        const animation: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        };
        const getPopupContainer: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
            default: (...args: any[]) => any;
        };
        const dropdownMatchSelectWidth: import("vue-types").VueTypeValidableDef<boolean>;
        const isMultiple: import("vue-types").VueTypeValidableDef<boolean>;
        const dropdownPrefixCls: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        };
        const dropdownVisibleChange: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
            default: (...args: any[]) => any;
        };
        const popupElement: import("vue-types").VueTypeValidableDef<any>;
        const open: import("vue-types").VueTypeValidableDef<boolean>;
    }
    function created(): void;
    function created(): void;
    namespace methods {
        function getDropdownTransitionName(): any;
        function getDropdownTransitionName(): any;
        function forcePopupAlign(): void;
        function forcePopupAlign(): void;
    }
    function render(): JSX.Element;
    function render(): JSX.Element;
}
