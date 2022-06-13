export default SingleSelector;
declare namespace SingleSelector {
    const name: string;
    const inheritAttrs: boolean;
    const props: {
        prefixCls: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        };
        open: import("vue-types").VueTypeValidableDef<boolean>;
        selectorValueList: import("vue-types").VueTypeValidableDef<unknown[]> & {
            default: () => unknown[];
        };
        allowClear: import("vue-types").VueTypeValidableDef<boolean>;
        showArrow: import("vue-types").VueTypeValidableDef<boolean>;
        removeSelected: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
            default: (...args: any[]) => any;
        };
        choiceTransitionName: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        };
        ariaId: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        };
        inputIcon: import("vue-types").VueTypeValidableDef<any>;
        clearIcon: import("vue-types").VueTypeValidableDef<any>;
        removeIcon: import("vue-types").VueTypeValidableDef<any>;
        placeholder: import("vue-types").VueTypeValidableDef<any>;
        disabled: import("vue-types").VueTypeValidableDef<boolean>;
        focused: import("vue-types").VueTypeValidableDef<boolean>;
        isMultiple: import("vue-types").VueTypeValidableDef<boolean>;
        showSearch: import("vue-types").VueTypeValidableDef<boolean>;
        searchValue: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        };
    };
    function created(): void;
    function created(): void;
    function data(): {
        mirrorSearchValue: any;
    };
    function data(): {
        mirrorSearchValue: any;
    };
    namespace watch {
        function searchValue(val: any): void;
        function searchValue(val: any): void;
    }
    namespace methods {
        function onPlaceholderClick(): void;
        function onPlaceholderClick(): void;
        function focus(): void;
        function focus(): void;
        function blur(): void;
        function blur(): void;
        function _renderPlaceholder(): JSX.Element;
        function _renderPlaceholder(): JSX.Element;
        function onMirrorSearchValueChange(value: any): void;
        function onMirrorSearchValueChange(value: any): void;
        function renderSelection(): JSX.Element[];
        function renderSelection(): JSX.Element[];
    }
    function render(): JSX.Element;
    function render(): JSX.Element;
}
