export default Selection;
declare namespace Selection {
    const mixins: {
        methods: {
            setState(state: {}, callback: any): void;
            __emit(...args: any[]): void;
        };
    }[];
    const inheritAttrs: boolean;
    namespace props {
        const prefixCls: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        };
        const maxTagTextLength: import("vue-types").VueTypeValidableDef<number> & {
            default: number;
        };
        const label: import("vue-types").VueTypeValidableDef<any>;
        const value: import("vue-types").VueTypeDef<string | number>;
        const removeIcon: import("vue-types").VueTypeValidableDef<any>;
    }
    namespace methods {
        function onRemove(event: any): void;
        function onRemove(event: any): void;
    }
    function render(): JSX.Element;
    function render(): JSX.Element;
}
