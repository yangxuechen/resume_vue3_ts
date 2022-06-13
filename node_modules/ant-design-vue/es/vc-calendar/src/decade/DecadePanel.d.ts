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
        const locale: import("vue-types").VueTypeValidableDef<{
            [key: string]: any;
        }> & {
            default: () => {
                [key: string]: any;
            };
        };
        const value: import("vue-types").VueTypeValidableDef<{
            [key: string]: any;
        }> & {
            default: () => {
                [key: string]: any;
            };
        };
        const defaultValue: import("vue-types").VueTypeValidableDef<{
            [key: string]: any;
        }> & {
            default: () => {
                [key: string]: any;
            };
        };
        const rootPrefixCls: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        };
        const renderFooter: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
            default: (...args: any[]) => any;
        };
    }
    function data(): {
        sValue: any;
    };
    function data(): {
        sValue: any;
    };
    namespace watch {
        function value(val: any): void;
        function value(val: any): void;
    }
    function render(): JSX.Element;
    function render(): JSX.Element;
}
export default _default;
