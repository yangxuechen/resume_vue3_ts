export declare const TreeData: import("vue-types").VueTypeLooseShape<{
    key: (string | ((props: Record<string, unknown>) => string)) & string;
    value: (string | ((props: Record<string, unknown>) => string)) & string;
    label: string | number | boolean | void | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }> | import("vue").VNodeArrayChildren | (() => void);
    slots: {
        [key: string]: any;
    };
    children: unknown[] | (() => unknown[]);
}>;
export declare const TreeSelectProps: () => {
    autofocus: import("vue-types").VueTypeValidableDef<boolean>;
    dropdownStyle: import("vue-types").VueTypeValidableDef<{
        [key: string]: any;
    }> & {
        default: () => {
            [key: string]: any;
        };
    };
    filterTreeNode: import("vue-types").VueTypeDef<boolean | Function>;
    getPopupContainer: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    labelInValue: import("vue-types").VueTypeValidableDef<boolean>;
    loadData: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    maxTagCount: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
    maxTagPlaceholder: import("vue-types").VueTypeValidableDef<import("../_util/type").VueNode>;
    value: import("vue-types").VueTypeDef<string | number | {
        [key: string]: any;
    }>;
    defaultValue: import("vue-types").VueTypeDef<string | number | {
        [key: string]: any;
    }>;
    multiple: import("vue-types").VueTypeValidableDef<boolean>;
    notFoundContent: import("vue-types").VueTypeValidableDef<import("../_util/type").VueNode>;
    searchPlaceholder: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    searchValue: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    showCheckedStrategy: import("vue-types").VueTypeDef<"SHOW_ALL" | "SHOW_PARENT" | "SHOW_CHILD">;
    suffixIcon: import("vue-types").VueTypeValidableDef<import("../_util/type").VueNode>;
    treeCheckable: import("vue-types").VueTypeValidableDef<boolean>;
    treeCheckStrictly: import("vue-types").VueTypeValidableDef<boolean>;
    treeData: import("vue-types").VueTypeDef<{
        [key: string]: any;
    }[]>;
    treeDataSimpleMode: import("vue-types").VueTypeDef<boolean | {
        [key: string]: any;
    }>;
    dropdownClassName: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    dropdownMatchSelectWidth: import("vue-types").VueTypeValidableDef<boolean>;
    treeDefaultExpandAll: import("vue-types").VueTypeValidableDef<boolean>;
    treeExpandedKeys: import("vue-types").VueTypeValidableDef<unknown[]> & {
        default: () => unknown[];
    };
    treeIcon: import("vue-types").VueTypeValidableDef<boolean>;
    treeDefaultExpandedKeys: import("vue-types").VueTypeValidableDef<unknown[]> & {
        default: () => unknown[];
    };
    treeNodeFilterProp: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    treeNodeLabelProp: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    replaceFields: import("vue-types").VueTypeValidableDef<{
        [key: string]: any;
    }> & {
        default: () => {
            [key: string]: any;
        };
    } & {
        default: () => {
            [key: string]: any;
        };
    };
    clearIcon: import("vue-types").VueTypeValidableDef<import("../_util/type").VueNode>;
    removeIcon: import("vue-types").VueTypeValidableDef<import("../_util/type").VueNode>;
    onSelect: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    onChange: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    onSearch: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    onTreeExpand: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    'onUpdate:treeExpandedKeys': import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    'onUpdate:searchValue': import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    'onUpdate:value': import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    itemIcon: import("vue-types").VueTypeValidableDef<import("../_util/type").VueNode>;
    size: import("vue-types").VueTypeDef<"default" | "small" | "middle" | "large">;
    mode: import("vue-types").VueTypeDef<"multiple" | "tags" | "SECRET_COMBOBOX_MODE_DO_NOT_USE">;
    bordered: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
    transitionName: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    choiceTransitionName: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    children: import("vue-types").VueTypeValidableDef<unknown[]> & {
        default: () => unknown[];
    };
    prefixCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    direction: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    virtual: import("vue-types").VueTypeValidableDef<boolean>;
    onFocus: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    onBlur: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    onKeydown: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    onKeyup: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    onClick: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    onMousedown: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    onMouseenter: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    onMouseleave: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    tabindex: import("vue-types").VueTypeDef<string | number>;
    onDeselect: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    onClear: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    open: import("vue-types").VueTypeValidableDef<boolean>;
    disabled: import("vue-types").VueTypeValidableDef<boolean>;
    id: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    options: import("vue-types").VueTypeValidableDef<unknown[]> & {
        default: () => unknown[];
    };
    defaultActiveFirstOption: import("vue-types").VueTypeValidableDef<boolean>;
    menuItemSelectedIcon: import("vue-types").VueTypeValidableDef<import("../_util/type").VueNode>;
    optionLabelProp: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    optionFilterProp: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    filterOption: import("vue-types").VueTypeValidableDef<any>;
    placeholder: import("vue-types").VueTypeValidableDef<import("../_util/type").VueNode>;
    showSearch: import("vue-types").VueTypeValidableDef<boolean>;
    onInputKeyDown: {
        type: import("vue").PropType<import("../_util/EventInterface").EventHandler>;
    };
    maxTagTextLength: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
    tokenSeparators: import("vue-types").VueTypeDef<string[]>;
    tagRender: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    animation: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    dropdownRender: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    dropdownAlign: import("vue-types").VueTypeValidableDef<any>;
    showAction: import("vue-types").VueTypeValidableDef<unknown[]> & {
        default: () => unknown[];
    };
    inputValue: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    filterSort: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    autoClearSearchValue: import("vue-types").VueTypeValidableDef<boolean>;
    allowClear: import("vue-types").VueTypeValidableDef<boolean>;
    showArrow: import("vue-types").VueTypeValidableDef<boolean>;
    defaultOpen: import("vue-types").VueTypeValidableDef<boolean>;
    listHeight: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
    listItemHeight: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
    loading: import("vue-types").VueTypeValidableDef<boolean>;
    onPopupScroll: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    onDropdownVisibleChange: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    internalProps: import("vue-types").VueTypeValidableDef<{
        [key: string]: any;
    }> & {
        default: () => {
            [key: string]: any;
        };
    };
};
