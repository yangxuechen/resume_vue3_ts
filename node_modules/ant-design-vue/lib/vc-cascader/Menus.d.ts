declare namespace _default {
    const name: string;
    const mixins: {
        methods: {
            setState(state: {}, callback: any): void;
            __emit(...args: any[]): void;
        };
    }[];
    const inheritAttrs: boolean;
    namespace props {
        const value: import("vue-types").VueTypeValidableDef<unknown[]> & {
            default: () => unknown[];
        } & {
            default: () => unknown[];
        };
        const activeValue: import("vue-types").VueTypeValidableDef<unknown[]> & {
            default: () => unknown[];
        } & {
            default: () => unknown[];
        };
        const options: import("vue-types").VueTypeValidableDef<unknown[]> & {
            default: () => unknown[];
        };
        const prefixCls: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        } & {
            default: string;
        };
        const expandTrigger: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        } & {
            default: string;
        };
        const visible: import("vue-types").VueTypeValidableDef<boolean> & {
            default: boolean;
        };
        const dropdownMenuColumnStyle: import("vue-types").VueTypeValidableDef<{
            [key: string]: any;
        }> & {
            default: () => {
                [key: string]: any;
            };
        };
        const defaultFieldNames: import("vue-types").VueTypeValidableDef<{
            [key: string]: any;
        }> & {
            default: () => {
                [key: string]: any;
            };
        };
        const fieldNames: import("vue-types").VueTypeValidableDef<{
            [key: string]: any;
        }> & {
            default: () => {
                [key: string]: any;
            };
        };
        const expandIcon: import("vue-types").VueTypeValidableDef<any>;
        const loadingIcon: import("vue-types").VueTypeValidableDef<any>;
    }
    function data(): {};
    function data(): {};
    namespace watch {
        function visible(val: any): void;
        function visible(val: any): void;
    }
    function mounted(): void;
    function mounted(): void;
    namespace methods {
        function getFieldName(name: any): any;
        function getFieldName(name: any): any;
        function getOption(option: any, menuIndex: any): JSX.Element;
        function getOption(option: any, menuIndex: any): JSX.Element;
        function getActiveOptions(values: any): any[];
        function getActiveOptions(values: any): any[];
        function getShowOptions(): any[];
        function getShowOptions(): any[];
        function delayOnSelect(onSelect: any, ...args: any[]): void;
        function delayOnSelect(onSelect: any, ...args: any[]): void;
        function scrollActiveItemToView(): void;
        function scrollActiveItemToView(): void;
        function isActiveOption(option: any, menuIndex: any): boolean;
        function isActiveOption(option: any, menuIndex: any): boolean;
        function saveMenuItem(index: any): (node: any) => void;
        function saveMenuItem(index: any): (node: any) => void;
    }
    function render(): JSX.Element;
    function render(): JSX.Element;
}
export default _default;
