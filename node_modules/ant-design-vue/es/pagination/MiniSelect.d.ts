declare const _default: import("vue").DefineComponent<{
    value: {
        type: import("vue").PropType<import("../select").SelectValue>;
    };
    defaultValue: {
        type: import("vue").PropType<import("../select").SelectValue>;
    };
    notFoundContent: import("vue-types").VueTypeValidableDef<import("../_util/type").VueNode>;
    suffixIcon: import("vue-types").VueTypeValidableDef<import("../_util/type").VueNode>;
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
    getPopupContainer: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    prefixCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    direction: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    virtual: import("vue-types").VueTypeValidableDef<boolean>;
    dropdownMatchSelectWidth: import("vue-types").VueTypeDef<number | boolean>;
    onFocus: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    onBlur: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    onChange: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
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
    onSelect: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
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
    searchValue: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    labelInValue: import("vue-types").VueTypeValidableDef<boolean>;
    optionLabelProp: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    optionFilterProp: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    filterOption: import("vue-types").VueTypeValidableDef<any>;
    autofocus: import("vue-types").VueTypeValidableDef<boolean>;
    placeholder: import("vue-types").VueTypeValidableDef<import("../_util/type").VueNode>;
    showSearch: import("vue-types").VueTypeValidableDef<boolean>;
    onInputKeyDown: {
        type: import("vue").PropType<import("../_util/EventInterface").EventHandler>;
    };
    removeIcon: import("vue-types").VueTypeValidableDef<import("../_util/type").VueNode>;
    maxTagCount: import("vue-types").VueTypeDef<string | number>;
    maxTagTextLength: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
    maxTagPlaceholder: import("vue-types").VueTypeValidableDef<any>;
    tokenSeparators: import("vue-types").VueTypeDef<string[]>;
    tagRender: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    onSearch: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    animation: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    dropdownStyle: import("vue-types").VueTypeValidableDef<{
        [key: string]: any;
    }> & {
        default: () => {
            [key: string]: any;
        };
    };
    dropdownClassName: import("vue-types").VueTypeValidableDef<string> & {
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
    clearIcon: import("vue-types").VueTypeValidableDef<import("../_util/type").VueNode>;
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
}, unknown, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    value?: unknown;
    defaultValue?: unknown;
    notFoundContent?: unknown;
    suffixIcon?: unknown;
    itemIcon?: unknown;
    size?: unknown;
    mode?: unknown;
    bordered?: unknown;
    transitionName?: unknown;
    choiceTransitionName?: unknown;
    children?: unknown;
    getPopupContainer?: unknown;
    prefixCls?: unknown;
    direction?: unknown;
    virtual?: unknown;
    dropdownMatchSelectWidth?: unknown;
    onFocus?: unknown;
    onBlur?: unknown;
    onChange?: unknown;
    onKeydown?: unknown;
    onKeyup?: unknown;
    onClick?: unknown;
    onMousedown?: unknown;
    onMouseenter?: unknown;
    onMouseleave?: unknown;
    onSelect?: unknown;
    tabindex?: unknown;
    onDeselect?: unknown;
    onClear?: unknown;
    open?: unknown;
    disabled?: unknown;
    id?: unknown;
    options?: unknown;
    defaultActiveFirstOption?: unknown;
    menuItemSelectedIcon?: unknown;
    searchValue?: unknown;
    labelInValue?: unknown;
    optionLabelProp?: unknown;
    optionFilterProp?: unknown;
    filterOption?: unknown;
    autofocus?: unknown;
    placeholder?: unknown;
    showSearch?: unknown;
    onInputKeyDown?: unknown;
    removeIcon?: unknown;
    maxTagCount?: unknown;
    maxTagTextLength?: unknown;
    maxTagPlaceholder?: unknown;
    tokenSeparators?: unknown;
    tagRender?: unknown;
    onSearch?: unknown;
    animation?: unknown;
    dropdownStyle?: unknown;
    dropdownClassName?: unknown;
    dropdownRender?: unknown;
    dropdownAlign?: unknown;
    showAction?: unknown;
    inputValue?: unknown;
    filterSort?: unknown;
    autoClearSearchValue?: unknown;
    allowClear?: unknown;
    clearIcon?: unknown;
    showArrow?: unknown;
    defaultOpen?: unknown;
    listHeight?: unknown;
    listItemHeight?: unknown;
    loading?: unknown;
    onPopupScroll?: unknown;
    onDropdownVisibleChange?: unknown;
    internalProps?: unknown;
} & {
    children: unknown[];
    prefixCls: string;
    direction: string;
    id: string;
    options: unknown[];
    searchValue: string;
    optionLabelProp: string;
    optionFilterProp: string;
    maxTagTextLength: number;
    choiceTransitionName: string;
    animation: string;
    transitionName: string;
    dropdownStyle: {
        [key: string]: any;
    };
    dropdownClassName: string;
    showAction: unknown[];
    inputValue: string;
    listHeight: number;
    listItemHeight: number;
    internalProps: {
        [key: string]: any;
    };
    bordered: boolean;
} & {
    value?: import("../select").SelectValue;
    getPopupContainer?: (...args: any[]) => any;
    virtual?: boolean;
    dropdownMatchSelectWidth?: number | boolean;
    onFocus?: (...args: any[]) => any;
    onBlur?: (...args: any[]) => any;
    onChange?: (...args: any[]) => any;
    onKeydown?: (...args: any[]) => any;
    onKeyup?: (...args: any[]) => any;
    onClick?: (...args: any[]) => any;
    onMousedown?: (...args: any[]) => any;
    onMouseenter?: (...args: any[]) => any;
    onMouseleave?: (...args: any[]) => any;
    onSelect?: (...args: any[]) => any;
    tabindex?: string | number;
    onDeselect?: (...args: any[]) => any;
    onClear?: (...args: any[]) => any;
    size?: "default" | "small" | "middle" | "large";
    open?: boolean;
    disabled?: boolean;
    mode?: "multiple" | "tags" | "SECRET_COMBOBOX_MODE_DO_NOT_USE";
    defaultActiveFirstOption?: boolean;
    notFoundContent?: import("../_util/type").VueNode;
    menuItemSelectedIcon?: import("../_util/type").VueNode;
    labelInValue?: boolean;
    filterOption?: any;
    autofocus?: boolean;
    placeholder?: import("../_util/type").VueNode;
    showSearch?: boolean;
    onInputKeyDown?: import("../_util/EventInterface").EventHandler;
    removeIcon?: import("../_util/type").VueNode;
    maxTagCount?: string | number;
    maxTagPlaceholder?: any;
    tokenSeparators?: string[];
    tagRender?: (...args: any[]) => any;
    onSearch?: (...args: any[]) => any;
    dropdownRender?: (...args: any[]) => any;
    dropdownAlign?: any;
    defaultValue?: import("../select").SelectValue;
    filterSort?: (...args: any[]) => any;
    autoClearSearchValue?: boolean;
    allowClear?: boolean;
    clearIcon?: import("../_util/type").VueNode;
    showArrow?: boolean;
    defaultOpen?: boolean;
    loading?: boolean;
    onPopupScroll?: (...args: any[]) => any;
    onDropdownVisibleChange?: (...args: any[]) => any;
    suffixIcon?: import("../_util/type").VueNode;
    itemIcon?: import("../_util/type").VueNode;
}>, {
    children: unknown[];
    getPopupContainer: (...args: any[]) => any;
    prefixCls: string;
    direction: string;
    onFocus: (...args: any[]) => any;
    onBlur: (...args: any[]) => any;
    onChange: (...args: any[]) => any;
    onKeydown: (...args: any[]) => any;
    onKeyup: (...args: any[]) => any;
    onClick: (...args: any[]) => any;
    onMousedown: (...args: any[]) => any;
    onMouseenter: (...args: any[]) => any;
    onMouseleave: (...args: any[]) => any;
    onSelect: (...args: any[]) => any;
    onDeselect: (...args: any[]) => any;
    onClear: (...args: any[]) => any;
    id: string;
    options: unknown[];
    searchValue: string;
    optionLabelProp: string;
    optionFilterProp: string;
    maxTagTextLength: number;
    tagRender: (...args: any[]) => any;
    choiceTransitionName: string;
    onSearch: (...args: any[]) => any;
    animation: string;
    transitionName: string;
    dropdownStyle: {
        [key: string]: any;
    };
    dropdownClassName: string;
    dropdownRender: (...args: any[]) => any;
    showAction: unknown[];
    inputValue: string;
    filterSort: (...args: any[]) => any;
    listHeight: number;
    listItemHeight: number;
    onPopupScroll: (...args: any[]) => any;
    onDropdownVisibleChange: (...args: any[]) => any;
    internalProps: {
        [key: string]: any;
    };
    bordered: boolean;
}>;
export default _default;
