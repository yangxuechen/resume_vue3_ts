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
        const rootPrefixCls: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        };
        const page: import("vue-types").VueTypeValidableDef<number> & {
            default: number;
        };
        const active: import("vue-types").VueTypeValidableDef<boolean>;
        const last: import("vue-types").VueTypeValidableDef<boolean>;
        const locale: import("vue-types").VueTypeValidableDef<{
            [key: string]: any;
        }> & {
            default: () => {
                [key: string]: any;
            };
        };
        const showTitle: import("vue-types").VueTypeValidableDef<boolean>;
        namespace itemRender {
            export const type: FunctionConstructor;
            function _default(): void;
            export { _default as default };
        }
    }
    namespace methods {
        function handleClick(): void;
        function handleClick(): void;
        function handleKeyPress(event: any): void;
        function handleKeyPress(event: any): void;
    }
    function render(): JSX.Element;
    function render(): JSX.Element;
}
export default _default;
