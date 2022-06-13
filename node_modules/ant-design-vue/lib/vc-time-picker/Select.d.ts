export default Select;
declare namespace Select {
    const name: string;
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
        const options: import("vue-types").VueTypeValidableDef<unknown[]> & {
            default: () => unknown[];
        };
        const selectedIndex: import("vue-types").VueTypeValidableDef<number> & {
            default: number;
        };
        const type: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        };
    }
    function data(): {
        active: boolean;
    };
    function data(): {
        active: boolean;
    };
    function mounted(): void;
    function mounted(): void;
    namespace watch {
        function selectedIndex(): void;
        function selectedIndex(): void;
    }
    namespace methods {
        function onSelect(value: any): void;
        function onSelect(value: any): void;
        function onEsc(e: any): void;
        function onEsc(e: any): void;
        function getOptions(): any;
        function getOptions(): any;
        function handleMouseEnter(e: any): void;
        function handleMouseEnter(e: any): void;
        function handleMouseLeave(): void;
        function handleMouseLeave(): void;
        function scrollToSelected(duration: any): void;
        function scrollToSelected(duration: any): void;
    }
    function render(): JSX.Element;
    function render(): JSX.Element;
}
