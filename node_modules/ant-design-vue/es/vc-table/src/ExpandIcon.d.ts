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
        const record: import("vue-types").VueTypeValidableDef<{
            [key: string]: any;
        }> & {
            default: () => {
                [key: string]: any;
            };
        };
        const prefixCls: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        };
        const expandable: import("vue-types").VueTypeValidableDef<any>;
        const expanded: import("vue-types").VueTypeValidableDef<boolean>;
        const needIndentSpaced: import("vue-types").VueTypeValidableDef<boolean>;
    }
    namespace methods {
        function onExpand(e: any): void;
        function onExpand(e: any): void;
    }
    function render(): JSX.Element;
    function render(): JSX.Element;
}
export default _default;
