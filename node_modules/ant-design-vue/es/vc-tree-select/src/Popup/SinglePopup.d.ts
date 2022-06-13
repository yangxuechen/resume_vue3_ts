export default SinglePopup;
declare namespace SinglePopup {
    const name: string;
    const inheritAttrs: boolean;
    const props: {
        searchValue: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        };
        showSearch: import("vue-types").VueTypeValidableDef<boolean>;
        dropdownPrefixCls: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        };
        disabled: import("vue-types").VueTypeValidableDef<boolean>;
        searchPlaceholder: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        };
        open: import("vue-types").VueTypeValidableDef<boolean>;
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
        upperSearchValue: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        };
        valueList: import("vue-types").VueTypeValidableDef<unknown[]> & {
            default: () => unknown[];
        };
        searchHalfCheckedKeys: import("vue-types").VueTypeValidableDef<unknown[]> & {
            default: () => unknown[];
        };
        valueEntities: import("vue-types").VueTypeValidableDef<{
            [key: string]: any;
        }> & {
            default: () => {
                [key: string]: any;
            };
        };
        keyEntities: MapConstructor;
        treeIcon: import("vue-types").VueTypeValidableDef<boolean>;
        treeLine: import("vue-types").VueTypeValidableDef<boolean>;
        treeNodeFilterProp: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        };
        treeCheckable: import("vue-types").VueTypeValidableDef<any>;
        treeCheckStrictly: import("vue-types").VueTypeValidableDef<boolean>;
        treeDefaultExpandAll: import("vue-types").VueTypeValidableDef<boolean>;
        treeDefaultExpandedKeys: import("vue-types").VueTypeValidableDef<unknown[]> & {
            default: () => unknown[];
        };
        treeExpandedKeys: import("vue-types").VueTypeValidableDef<unknown[]> & {
            default: () => unknown[];
        };
        loadData: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
            default: (...args: any[]) => any;
        };
        multiple: import("vue-types").VueTypeValidableDef<boolean>;
        treeNodes: import("vue-types").VueTypeValidableDef<any>;
        filteredTreeNodes: import("vue-types").VueTypeValidableDef<any>;
        notFoundContent: import("vue-types").VueTypeValidableDef<any>;
        switcherIcon: import("vue-types").VueTypeValidableDef<any>;
        renderSearch: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
            default: (...args: any[]) => any;
        };
        __propsSymbol__: import("vue-types").VueTypeValidableDef<any>;
    };
    function created(): void;
    function created(): void;
    namespace methods {
        function onPlaceholderClick(): void;
        function onPlaceholderClick(): void;
        function getTree(): any;
        function getTree(): any;
        function _renderPlaceholder(): JSX.Element;
        function _renderPlaceholder(): JSX.Element;
        function _renderSearch(): JSX.Element;
        function _renderSearch(): JSX.Element;
    }
    function render(): JSX.Element;
    function render(): JSX.Element;
}
