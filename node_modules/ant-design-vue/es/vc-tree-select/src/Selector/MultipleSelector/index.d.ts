export default MultipleSelector;
declare namespace MultipleSelector {
    const name: string;
    const mixins: {
        methods: {
            setState(state: {}, callback: any): void;
            __emit(...args: any[]): void;
        };
    }[];
    const inheritAttrs: boolean;
    const props: {
        selectorValueList: import("vue-types").VueTypeValidableDef<unknown[]> & {
            default: () => unknown[];
        };
        disabled: import("vue-types").VueTypeValidableDef<boolean>;
        labelInValue: import("vue-types").VueTypeValidableDef<boolean>;
        maxTagCount: import("vue-types").VueTypeValidableDef<number> & {
            default: number;
        };
        maxTagPlaceholder: import("vue-types").VueTypeValidableDef<any>;
        open: import("vue-types").VueTypeValidableDef<boolean>;
        searchValue: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        };
        prefixCls: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        };
        renderPlaceholder: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
            default: (...args: any[]) => any;
        };
        needAlign: import("vue-types").VueTypeValidableDef<boolean>;
        ariaId: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        };
        isMultiple: import("vue-types").VueTypeValidableDef<boolean> & {
            default: boolean;
        };
        showSearch: import("vue-types").VueTypeValidableDef<boolean>;
        allowClear: import("vue-types").VueTypeValidableDef<boolean>;
        showArrow: import("vue-types").VueTypeValidableDef<boolean>;
        removeSelected: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
            default: (...args: any[]) => any;
        };
        choiceTransitionName: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        };
        inputIcon: import("vue-types").VueTypeValidableDef<any>;
        clearIcon: import("vue-types").VueTypeValidableDef<any>;
        removeIcon: import("vue-types").VueTypeValidableDef<any>;
        placeholder: import("vue-types").VueTypeValidableDef<any>;
        focused: import("vue-types").VueTypeValidableDef<boolean>;
    };
    function setup(): {
        vcTreeSelect: {};
    };
    function setup(): {
        vcTreeSelect: {};
    };
    function created(): void;
    function created(): void;
    namespace methods {
        function onPlaceholderClick(): void;
        function onPlaceholderClick(): void;
        function focus(): void;
        function focus(): void;
        function blur(): void;
        function blur(): void;
        function _renderPlaceholder(): JSX.Element;
        function _renderPlaceholder(): JSX.Element;
        function onChoiceAnimationLeave(...args: any[]): void;
        function onChoiceAnimationLeave(...args: any[]): void;
        function renderSelection(): any;
        function renderSelection(): any;
    }
    function render(): JSX.Element;
    function render(): JSX.Element;
}
