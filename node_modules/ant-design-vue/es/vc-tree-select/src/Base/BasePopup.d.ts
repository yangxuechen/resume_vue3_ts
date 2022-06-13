export default BasePopup;
declare namespace BasePopup {
    const mixins: {
        methods: {
            setState(state: {}, callback: any): void;
            __emit(...args: any[]): void;
        };
    }[];
    const inheritAttrs: boolean;
    const name: string;
    namespace props {
        const prefixCls: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        };
        const upperSearchValue: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        };
        const valueList: import("vue-types").VueTypeValidableDef<unknown[]> & {
            default: () => unknown[];
        };
        const searchHalfCheckedKeys: import("vue-types").VueTypeValidableDef<unknown[]> & {
            default: () => unknown[];
        };
        const valueEntities: import("vue-types").VueTypeValidableDef<{
            [key: string]: any;
        }> & {
            default: () => {
                [key: string]: any;
            };
        };
        const keyEntities: MapConstructor;
        const treeIcon: import("vue-types").VueTypeValidableDef<boolean>;
        const treeLine: import("vue-types").VueTypeValidableDef<boolean>;
        const treeNodeFilterProp: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        };
        const treeCheckable: import("vue-types").VueTypeValidableDef<any>;
        const treeCheckStrictly: import("vue-types").VueTypeValidableDef<boolean>;
        const treeDefaultExpandAll: import("vue-types").VueTypeValidableDef<boolean>;
        const treeDefaultExpandedKeys: import("vue-types").VueTypeValidableDef<unknown[]> & {
            default: () => unknown[];
        };
        const treeExpandedKeys: import("vue-types").VueTypeValidableDef<unknown[]> & {
            default: () => unknown[];
        };
        const loadData: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
            default: (...args: any[]) => any;
        };
        const multiple: import("vue-types").VueTypeValidableDef<boolean>;
        const searchValue: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        };
        const treeNodes: import("vue-types").VueTypeValidableDef<any>;
        const filteredTreeNodes: import("vue-types").VueTypeValidableDef<any>;
        const notFoundContent: import("vue-types").VueTypeValidableDef<any>;
        const ariaId: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        };
        const switcherIcon: import("vue-types").VueTypeValidableDef<any>;
        const renderSearch: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
            default: (...args: any[]) => any;
        };
        const __propsSymbol__: import("vue-types").VueTypeValidableDef<any>;
    }
    function setup(): {
        vcTreeSelect: {};
    };
    function setup(): {
        vcTreeSelect: {};
    };
    namespace watch {
        function __propsSymbol__(): void;
        function __propsSymbol__(): void;
    }
    function data(): {
        _prevProps: any;
        _keyList: any[];
        _expandedKeyList: any;
        _cachedExpandedKeyList: any[];
        _loadedKeys: any[];
    };
    function data(): {
        _prevProps: any;
        _keyList: any[];
        _expandedKeyList: any;
        _cachedExpandedKeyList: any[];
        _loadedKeys: any[];
    };
    namespace methods {
        function onTreeExpand(expandedKeyList: any): void;
        function onTreeExpand(expandedKeyList: any): void;
        function onLoad(loadedKeys: any): void;
        function onLoad(loadedKeys: any): void;
        function getTree(): any;
        function getTree(): any;
        /**
         * Not pass `loadData` when searching. To avoid loop ajax call makes browser crash.
         */
        function getLoadData(): any;
        /**
         * Not pass `loadData` when searching. To avoid loop ajax call makes browser crash.
         */
        function getLoadData(): any;
        /**
         * This method pass to Tree component which is used for add filtered class
         * in TreeNode > li
         */
        function filterTreeNode(treeNode: any): boolean;
        /**
         * This method pass to Tree component which is used for add filtered class
         * in TreeNode > li
         */
        function filterTreeNode(treeNode: any): boolean;
        function renderNotFound(): JSX.Element;
        function renderNotFound(): JSX.Element;
    }
    function render(): JSX.Element;
    function render(): JSX.Element;
}
