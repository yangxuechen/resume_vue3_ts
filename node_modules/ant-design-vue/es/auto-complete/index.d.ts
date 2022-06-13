import type { Plugin, VNode, ExtractPropTypes } from 'vue';
import Option from './Option';
import OptGroup from './OptGroup';
declare const autoCompleteProps: {
    dataSource: import("vue-types").VueTypeValidableDef<unknown[]> & {
        default: () => unknown[];
    };
    dropdownMenuStyle: import("vue-types").VueTypeValidableDef<import("vue").CSSProperties>;
    optionLabelProp: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    dropdownMatchSelectWidth: import("vue-types").VueTypeValidableDef<boolean>;
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
};
export declare type AutoCompleteProps = Partial<ExtractPropTypes<typeof autoCompleteProps>>;
export declare const AutoCompleteOption: import("./Option").OptionFC;
export declare const AutoCompleteOptGroup: import("./OptGroup").OptionGroupFC;
declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
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
            defaultActiveFirstOption: boolean;
            searchValue: string;
            optionLabelProp: string;
            optionFilterProp: string;
            filterOption: any;
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
            dataSource: unknown[];
        }> & Omit<Readonly<{
            prefixCls?: unknown;
            showSearch?: unknown;
            transitionName?: unknown;
            choiceTransitionName?: unknown;
            autofocus?: unknown;
            backfill?: unknown;
            optionLabelProp?: unknown;
            filterOption?: unknown;
            defaultActiveFirstOption?: unknown;
            dataSource?: unknown;
            dropdownMenuStyle?: unknown;
            dropdownMatchSelectWidth?: unknown;
            value?: unknown;
            defaultValue?: unknown;
            notFoundContent?: unknown;
            suffixIcon?: unknown;
            itemIcon?: unknown;
            size?: unknown;
            mode?: unknown;
            bordered?: unknown;
            children?: unknown;
            getPopupContainer?: unknown;
            direction?: unknown;
            virtual?: unknown;
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
            menuItemSelectedIcon?: unknown;
            searchValue?: unknown;
            labelInValue?: unknown;
            optionFilterProp?: unknown;
            placeholder?: unknown;
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
            defaultActiveFirstOption: boolean;
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
            dataSource: unknown[];
        } & {
            value?: import("../select").SelectValue;
            getPopupContainer?: (...args: any[]) => any;
            virtual?: boolean;
            dropdownMatchSelectWidth?: boolean;
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
            backfill?: boolean;
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
            dropdownMenuStyle?: import("vue").CSSProperties;
        }> & {
            onFocus?: (...args: any[]) => any;
            onBlur?: (...args: any[]) => any;
            onChange?: (...args: any[]) => any;
            onSelect?: (...args: any[]) => any;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "children" | "getPopupContainer" | "prefixCls" | "direction" | "onFocus" | "onBlur" | "onChange" | "onKeydown" | "onKeyup" | "onClick" | "onMousedown" | "onMouseenter" | "onMouseleave" | "onSelect" | "onDeselect" | "onClear" | "id" | "options" | "defaultActiveFirstOption" | "searchValue" | "optionLabelProp" | "optionFilterProp" | "filterOption" | "maxTagTextLength" | "tagRender" | "choiceTransitionName" | "onSearch" | "animation" | "transitionName" | "dropdownStyle" | "dropdownClassName" | "dropdownRender" | "showAction" | "inputValue" | "filterSort" | "listHeight" | "listItemHeight" | "onPopupScroll" | "onDropdownVisibleChange" | "internalProps" | "bordered" | "dataSource">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: import("vue").Slot;
        }>;
        $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>;
        $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>;
        $emit: (event: "blur" | "change" | "focus" | "select", ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<{
            prefixCls?: unknown;
            showSearch?: unknown;
            transitionName?: unknown;
            choiceTransitionName?: unknown;
            autofocus?: unknown;
            backfill?: unknown;
            optionLabelProp?: unknown;
            filterOption?: unknown;
            defaultActiveFirstOption?: unknown;
            dataSource?: unknown;
            dropdownMenuStyle?: unknown;
            dropdownMatchSelectWidth?: unknown;
            value?: unknown;
            defaultValue?: unknown;
            notFoundContent?: unknown;
            suffixIcon?: unknown;
            itemIcon?: unknown;
            size?: unknown;
            mode?: unknown;
            bordered?: unknown;
            children?: unknown;
            getPopupContainer?: unknown;
            direction?: unknown;
            virtual?: unknown;
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
            menuItemSelectedIcon?: unknown;
            searchValue?: unknown;
            labelInValue?: unknown;
            optionFilterProp?: unknown;
            placeholder?: unknown;
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
            defaultActiveFirstOption: boolean;
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
            dataSource: unknown[];
        } & {
            value?: import("../select").SelectValue;
            getPopupContainer?: (...args: any[]) => any;
            virtual?: boolean;
            dropdownMatchSelectWidth?: boolean;
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
            backfill?: boolean;
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
            dropdownMenuStyle?: import("vue").CSSProperties;
        }> & {
            onFocus?: (...args: any[]) => any;
            onBlur?: (...args: any[]) => any;
            onChange?: (...args: any[]) => any;
            onSelect?: (...args: any[]) => any;
        }, {
            configProvider: {
                getTargetContainer?: () => HTMLElement;
                getPopupContainer?: (triggerNode: HTMLElement) => HTMLElement;
                prefixCls?: string;
                getPrefixCls?: (suffixCls?: string, customizePrefixCls?: string) => string;
                renderEmpty?: typeof import("../config-provider/renderEmpty").default;
                transformCellText?: (tableProps: import("../table/interface").TransformCellTextProps) => any;
                csp?: unknown;
                autoInsertSpaceInButton?: boolean;
                locale?: {
                    locale: string;
                    Pagination?: {
                        constructor: Function;
                        toString: () => string;
                        toLocaleString: () => string;
                        valueOf: () => Object;
                        hasOwnProperty: (v: PropertyKey) => boolean;
                        isPrototypeOf: (v: Object) => boolean;
                        propertyIsEnumerable: (v: PropertyKey) => boolean;
                    };
                    DatePicker?: {
                        constructor: Function;
                        toString: () => string;
                        toLocaleString: () => string;
                        valueOf: () => Object;
                        hasOwnProperty: (v: PropertyKey) => boolean;
                        isPrototypeOf: (v: Object) => boolean;
                        propertyIsEnumerable: (v: PropertyKey) => boolean;
                    };
                    TimePicker?: {
                        constructor: Function;
                        toString: () => string;
                        toLocaleString: () => string;
                        valueOf: () => Object;
                        hasOwnProperty: (v: PropertyKey) => boolean;
                        isPrototypeOf: (v: Object) => boolean;
                        propertyIsEnumerable: (v: PropertyKey) => boolean;
                    };
                    Calendar?: {
                        constructor: Function;
                        toString: () => string;
                        toLocaleString: () => string;
                        valueOf: () => Object;
                        hasOwnProperty: (v: PropertyKey) => boolean;
                        isPrototypeOf: (v: Object) => boolean;
                        propertyIsEnumerable: (v: PropertyKey) => boolean;
                    };
                    Table?: {
                        constructor: Function;
                        toString: () => string;
                        toLocaleString: () => string;
                        valueOf: () => Object;
                        hasOwnProperty: (v: PropertyKey) => boolean;
                        isPrototypeOf: (v: Object) => boolean;
                        propertyIsEnumerable: (v: PropertyKey) => boolean;
                    };
                    Modal?: {
                        okText: string;
                        cancelText: string;
                        justOkText: string;
                    };
                    Popconfirm?: {
                        constructor: Function;
                        toString: () => string;
                        toLocaleString: () => string;
                        valueOf: () => Object;
                        hasOwnProperty: (v: PropertyKey) => boolean;
                        isPrototypeOf: (v: Object) => boolean;
                        propertyIsEnumerable: (v: PropertyKey) => boolean;
                    };
                    Transfer?: {
                        constructor: Function;
                        toString: () => string;
                        toLocaleString: () => string;
                        valueOf: () => Object;
                        hasOwnProperty: (v: PropertyKey) => boolean;
                        isPrototypeOf: (v: Object) => boolean;
                        propertyIsEnumerable: (v: PropertyKey) => boolean;
                    };
                    Select?: {
                        constructor: Function;
                        toString: () => string;
                        toLocaleString: () => string;
                        valueOf: () => Object;
                        hasOwnProperty: (v: PropertyKey) => boolean;
                        isPrototypeOf: (v: Object) => boolean;
                        propertyIsEnumerable: (v: PropertyKey) => boolean;
                    };
                    Upload?: {
                        constructor: Function;
                        toString: () => string;
                        toLocaleString: () => string;
                        valueOf: () => Object;
                        hasOwnProperty: (v: PropertyKey) => boolean;
                        isPrototypeOf: (v: Object) => boolean;
                        propertyIsEnumerable: (v: PropertyKey) => boolean;
                    };
                    Form?: {
                        optional?: string;
                        defaultValidateMessages: {
                            default?: string | (() => string);
                            required?: string | (() => string);
                            enum?: string | (() => string);
                            whitespace?: string | (() => string);
                            date?: {
                                format?: string | (() => string);
                                parse?: string | (() => string);
                                invalid?: string | (() => string);
                            };
                            types?: {
                                string?: string | (() => string);
                                method?: string | (() => string);
                                array?: string | (() => string);
                                object?: string | (() => string);
                                number?: string | (() => string);
                                date?: string | (() => string);
                                boolean?: string | (() => string);
                                integer?: string | (() => string);
                                float?: string | (() => string);
                                regexp?: string | (() => string);
                                email?: string | (() => string);
                                url?: string | (() => string);
                                hex?: string | (() => string);
                            };
                            string?: {
                                len?: string | (() => string);
                                min?: string | (() => string);
                                max?: string | (() => string);
                                range?: string | (() => string);
                            };
                            number?: {
                                len?: string | (() => string);
                                min?: string | (() => string);
                                max?: string | (() => string);
                                range?: string | (() => string);
                            };
                            array?: {
                                len?: string | (() => string);
                                min?: string | (() => string);
                                max?: string | (() => string);
                                range?: string | (() => string);
                            };
                            pattern?: {
                                mismatch?: string | (() => string);
                            };
                        };
                    };
                    Image?: {
                        preview: string;
                    };
                };
                pageHeader?: {
                    ghost: boolean;
                };
                componentSize?: import("../config-provider").SizeType;
                direction?: "ltr" | "rtl";
                space?: {
                    size: number | import("../config-provider").SizeType;
                };
                virtual?: boolean;
                dropdownMatchSelectWidth?: boolean;
                form?: unknown;
            };
            popupRef: any;
            select: any;
        }, unknown, {}, {
            savePopupRef(ref: VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>): void;
            saveSelect(node: VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>): void;
            getInputElement(): any;
            focus(): void;
            blur(): void;
        }, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("blur" | "change" | "focus" | "select")[], string, {
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
            defaultActiveFirstOption: boolean;
            searchValue: string;
            optionLabelProp: string;
            optionFilterProp: string;
            filterOption: any;
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
            dataSource: unknown[];
        }> & {
            beforeCreate?: (() => void) | (() => void)[];
            created?: (() => void) | (() => void)[];
            beforeMount?: (() => void) | (() => void)[];
            mounted?: (() => void) | (() => void)[];
            beforeUpdate?: (() => void) | (() => void)[];
            updated?: (() => void) | (() => void)[];
            activated?: (() => void) | (() => void)[];
            deactivated?: (() => void) | (() => void)[];
            beforeDestroy?: (() => void) | (() => void)[];
            beforeUnmount?: (() => void) | (() => void)[];
            destroyed?: (() => void) | (() => void)[];
            unmounted?: (() => void) | (() => void)[];
            renderTracked?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[];
            renderTriggered?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[];
            errorCaptured?: ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>, info: string) => boolean | void)[];
        };
        $forceUpdate: () => void;
        $nextTick: typeof import("vue").nextTick;
        $watch(source: string | Function, cb: Function, options?: import("vue").WatchOptions<boolean>): import("vue").WatchStopHandle;
    } & Readonly<{
        prefixCls?: unknown;
        showSearch?: unknown;
        transitionName?: unknown;
        choiceTransitionName?: unknown;
        autofocus?: unknown;
        backfill?: unknown;
        optionLabelProp?: unknown;
        filterOption?: unknown;
        defaultActiveFirstOption?: unknown;
        dataSource?: unknown;
        dropdownMenuStyle?: unknown;
        dropdownMatchSelectWidth?: unknown;
        value?: unknown;
        defaultValue?: unknown;
        notFoundContent?: unknown;
        suffixIcon?: unknown;
        itemIcon?: unknown;
        size?: unknown;
        mode?: unknown;
        bordered?: unknown;
        children?: unknown;
        getPopupContainer?: unknown;
        direction?: unknown;
        virtual?: unknown;
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
        menuItemSelectedIcon?: unknown;
        searchValue?: unknown;
        labelInValue?: unknown;
        optionFilterProp?: unknown;
        placeholder?: unknown;
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
        defaultActiveFirstOption: boolean;
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
        dataSource: unknown[];
    } & {
        value?: import("../select").SelectValue;
        getPopupContainer?: (...args: any[]) => any;
        virtual?: boolean;
        dropdownMatchSelectWidth?: boolean;
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
        backfill?: boolean;
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
        dropdownMenuStyle?: import("vue").CSSProperties;
    }> & {
        onFocus?: (...args: any[]) => any;
        onBlur?: (...args: any[]) => any;
        onChange?: (...args: any[]) => any;
        onSelect?: (...args: any[]) => any;
    } & import("vue").ShallowUnwrapRef<{
        configProvider: {
            getTargetContainer?: () => HTMLElement;
            getPopupContainer?: (triggerNode: HTMLElement) => HTMLElement;
            prefixCls?: string;
            getPrefixCls?: (suffixCls?: string, customizePrefixCls?: string) => string;
            renderEmpty?: typeof import("../config-provider/renderEmpty").default;
            transformCellText?: (tableProps: import("../table/interface").TransformCellTextProps) => any;
            csp?: unknown;
            autoInsertSpaceInButton?: boolean;
            locale?: {
                locale: string;
                Pagination?: {
                    constructor: Function;
                    toString: () => string;
                    toLocaleString: () => string;
                    valueOf: () => Object;
                    hasOwnProperty: (v: PropertyKey) => boolean;
                    isPrototypeOf: (v: Object) => boolean;
                    propertyIsEnumerable: (v: PropertyKey) => boolean;
                };
                DatePicker?: {
                    constructor: Function;
                    toString: () => string;
                    toLocaleString: () => string;
                    valueOf: () => Object;
                    hasOwnProperty: (v: PropertyKey) => boolean;
                    isPrototypeOf: (v: Object) => boolean;
                    propertyIsEnumerable: (v: PropertyKey) => boolean;
                };
                TimePicker?: {
                    constructor: Function;
                    toString: () => string;
                    toLocaleString: () => string;
                    valueOf: () => Object;
                    hasOwnProperty: (v: PropertyKey) => boolean;
                    isPrototypeOf: (v: Object) => boolean;
                    propertyIsEnumerable: (v: PropertyKey) => boolean;
                };
                Calendar?: {
                    constructor: Function;
                    toString: () => string;
                    toLocaleString: () => string;
                    valueOf: () => Object;
                    hasOwnProperty: (v: PropertyKey) => boolean;
                    isPrototypeOf: (v: Object) => boolean;
                    propertyIsEnumerable: (v: PropertyKey) => boolean;
                };
                Table?: {
                    constructor: Function;
                    toString: () => string;
                    toLocaleString: () => string;
                    valueOf: () => Object;
                    hasOwnProperty: (v: PropertyKey) => boolean;
                    isPrototypeOf: (v: Object) => boolean;
                    propertyIsEnumerable: (v: PropertyKey) => boolean;
                };
                Modal?: {
                    okText: string;
                    cancelText: string;
                    justOkText: string;
                };
                Popconfirm?: {
                    constructor: Function;
                    toString: () => string;
                    toLocaleString: () => string;
                    valueOf: () => Object;
                    hasOwnProperty: (v: PropertyKey) => boolean;
                    isPrototypeOf: (v: Object) => boolean;
                    propertyIsEnumerable: (v: PropertyKey) => boolean;
                };
                Transfer?: {
                    constructor: Function;
                    toString: () => string;
                    toLocaleString: () => string;
                    valueOf: () => Object;
                    hasOwnProperty: (v: PropertyKey) => boolean;
                    isPrototypeOf: (v: Object) => boolean;
                    propertyIsEnumerable: (v: PropertyKey) => boolean;
                };
                Select?: {
                    constructor: Function;
                    toString: () => string;
                    toLocaleString: () => string;
                    valueOf: () => Object;
                    hasOwnProperty: (v: PropertyKey) => boolean;
                    isPrototypeOf: (v: Object) => boolean;
                    propertyIsEnumerable: (v: PropertyKey) => boolean;
                };
                Upload?: {
                    constructor: Function;
                    toString: () => string;
                    toLocaleString: () => string;
                    valueOf: () => Object;
                    hasOwnProperty: (v: PropertyKey) => boolean;
                    isPrototypeOf: (v: Object) => boolean;
                    propertyIsEnumerable: (v: PropertyKey) => boolean;
                };
                Form?: {
                    optional?: string;
                    defaultValidateMessages: {
                        default?: string | (() => string);
                        required?: string | (() => string);
                        enum?: string | (() => string);
                        whitespace?: string | (() => string);
                        date?: {
                            format?: string | (() => string);
                            parse?: string | (() => string);
                            invalid?: string | (() => string);
                        };
                        types?: {
                            string?: string | (() => string);
                            method?: string | (() => string);
                            array?: string | (() => string);
                            object?: string | (() => string);
                            number?: string | (() => string);
                            date?: string | (() => string);
                            boolean?: string | (() => string);
                            integer?: string | (() => string);
                            float?: string | (() => string);
                            regexp?: string | (() => string);
                            email?: string | (() => string);
                            url?: string | (() => string);
                            hex?: string | (() => string);
                        };
                        string?: {
                            len?: string | (() => string);
                            min?: string | (() => string);
                            max?: string | (() => string);
                            range?: string | (() => string);
                        };
                        number?: {
                            len?: string | (() => string);
                            min?: string | (() => string);
                            max?: string | (() => string);
                            range?: string | (() => string);
                        };
                        array?: {
                            len?: string | (() => string);
                            min?: string | (() => string);
                            max?: string | (() => string);
                            range?: string | (() => string);
                        };
                        pattern?: {
                            mismatch?: string | (() => string);
                        };
                    };
                };
                Image?: {
                    preview: string;
                };
            };
            pageHeader?: {
                ghost: boolean;
            };
            componentSize?: import("../config-provider").SizeType;
            direction?: "ltr" | "rtl";
            space?: {
                size: number | import("../config-provider").SizeType;
            };
            virtual?: boolean;
            dropdownMatchSelectWidth?: boolean;
            form?: unknown;
        };
        popupRef: any;
        select: any;
    }> & {} & {} & {
        savePopupRef(ref: VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>): void;
        saveSelect(node: VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>): void;
        getInputElement(): any;
        focus(): void;
        blur(): void;
    } & import("vue").ComponentCustomProperties;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<{
    prefixCls?: unknown;
    showSearch?: unknown;
    transitionName?: unknown;
    choiceTransitionName?: unknown;
    autofocus?: unknown;
    backfill?: unknown;
    optionLabelProp?: unknown;
    filterOption?: unknown;
    defaultActiveFirstOption?: unknown;
    dataSource?: unknown;
    dropdownMenuStyle?: unknown;
    dropdownMatchSelectWidth?: unknown;
    value?: unknown;
    defaultValue?: unknown;
    notFoundContent?: unknown;
    suffixIcon?: unknown;
    itemIcon?: unknown;
    size?: unknown;
    mode?: unknown;
    bordered?: unknown;
    children?: unknown;
    getPopupContainer?: unknown;
    direction?: unknown;
    virtual?: unknown;
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
    menuItemSelectedIcon?: unknown;
    searchValue?: unknown;
    labelInValue?: unknown;
    optionFilterProp?: unknown;
    placeholder?: unknown;
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
    defaultActiveFirstOption: boolean;
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
    dataSource: unknown[];
} & {
    value?: import("../select").SelectValue;
    getPopupContainer?: (...args: any[]) => any;
    virtual?: boolean;
    dropdownMatchSelectWidth?: boolean;
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
    backfill?: boolean;
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
    dropdownMenuStyle?: import("vue").CSSProperties;
}> & {
    onFocus?: (...args: any[]) => any;
    onBlur?: (...args: any[]) => any;
    onChange?: (...args: any[]) => any;
    onSelect?: (...args: any[]) => any;
}, {
    configProvider: {
        getTargetContainer?: () => HTMLElement;
        getPopupContainer?: (triggerNode: HTMLElement) => HTMLElement;
        prefixCls?: string;
        getPrefixCls?: (suffixCls?: string, customizePrefixCls?: string) => string;
        renderEmpty?: typeof import("../config-provider/renderEmpty").default;
        transformCellText?: (tableProps: import("../table/interface").TransformCellTextProps) => any;
        csp?: unknown;
        autoInsertSpaceInButton?: boolean;
        locale?: {
            locale: string;
            Pagination?: {
                constructor: Function;
                toString: () => string;
                toLocaleString: () => string;
                valueOf: () => Object;
                hasOwnProperty: (v: PropertyKey) => boolean;
                isPrototypeOf: (v: Object) => boolean;
                propertyIsEnumerable: (v: PropertyKey) => boolean;
            };
            DatePicker?: {
                constructor: Function;
                toString: () => string;
                toLocaleString: () => string;
                valueOf: () => Object;
                hasOwnProperty: (v: PropertyKey) => boolean;
                isPrototypeOf: (v: Object) => boolean;
                propertyIsEnumerable: (v: PropertyKey) => boolean;
            };
            TimePicker?: {
                constructor: Function;
                toString: () => string;
                toLocaleString: () => string;
                valueOf: () => Object;
                hasOwnProperty: (v: PropertyKey) => boolean;
                isPrototypeOf: (v: Object) => boolean;
                propertyIsEnumerable: (v: PropertyKey) => boolean;
            };
            Calendar?: {
                constructor: Function;
                toString: () => string;
                toLocaleString: () => string;
                valueOf: () => Object;
                hasOwnProperty: (v: PropertyKey) => boolean;
                isPrototypeOf: (v: Object) => boolean;
                propertyIsEnumerable: (v: PropertyKey) => boolean;
            };
            Table?: {
                constructor: Function;
                toString: () => string;
                toLocaleString: () => string;
                valueOf: () => Object;
                hasOwnProperty: (v: PropertyKey) => boolean;
                isPrototypeOf: (v: Object) => boolean;
                propertyIsEnumerable: (v: PropertyKey) => boolean;
            };
            Modal?: {
                okText: string;
                cancelText: string;
                justOkText: string;
            };
            Popconfirm?: {
                constructor: Function;
                toString: () => string;
                toLocaleString: () => string;
                valueOf: () => Object;
                hasOwnProperty: (v: PropertyKey) => boolean;
                isPrototypeOf: (v: Object) => boolean;
                propertyIsEnumerable: (v: PropertyKey) => boolean;
            };
            Transfer?: {
                constructor: Function;
                toString: () => string;
                toLocaleString: () => string;
                valueOf: () => Object;
                hasOwnProperty: (v: PropertyKey) => boolean;
                isPrototypeOf: (v: Object) => boolean;
                propertyIsEnumerable: (v: PropertyKey) => boolean;
            };
            Select?: {
                constructor: Function;
                toString: () => string;
                toLocaleString: () => string;
                valueOf: () => Object;
                hasOwnProperty: (v: PropertyKey) => boolean;
                isPrototypeOf: (v: Object) => boolean;
                propertyIsEnumerable: (v: PropertyKey) => boolean;
            };
            Upload?: {
                constructor: Function;
                toString: () => string;
                toLocaleString: () => string;
                valueOf: () => Object;
                hasOwnProperty: (v: PropertyKey) => boolean;
                isPrototypeOf: (v: Object) => boolean;
                propertyIsEnumerable: (v: PropertyKey) => boolean;
            };
            Form?: {
                optional?: string;
                defaultValidateMessages: {
                    default?: string | (() => string);
                    required?: string | (() => string);
                    enum?: string | (() => string);
                    whitespace?: string | (() => string);
                    date?: {
                        format?: string | (() => string);
                        parse?: string | (() => string);
                        invalid?: string | (() => string);
                    };
                    types?: {
                        string?: string | (() => string);
                        method?: string | (() => string);
                        array?: string | (() => string);
                        object?: string | (() => string);
                        number?: string | (() => string);
                        date?: string | (() => string);
                        boolean?: string | (() => string);
                        integer?: string | (() => string);
                        float?: string | (() => string);
                        regexp?: string | (() => string);
                        email?: string | (() => string);
                        url?: string | (() => string);
                        hex?: string | (() => string);
                    };
                    string?: {
                        len?: string | (() => string);
                        min?: string | (() => string);
                        max?: string | (() => string);
                        range?: string | (() => string);
                    };
                    number?: {
                        len?: string | (() => string);
                        min?: string | (() => string);
                        max?: string | (() => string);
                        range?: string | (() => string);
                    };
                    array?: {
                        len?: string | (() => string);
                        min?: string | (() => string);
                        max?: string | (() => string);
                        range?: string | (() => string);
                    };
                    pattern?: {
                        mismatch?: string | (() => string);
                    };
                };
            };
            Image?: {
                preview: string;
            };
        };
        pageHeader?: {
            ghost: boolean;
        };
        componentSize?: import("../config-provider").SizeType;
        direction?: "ltr" | "rtl";
        space?: {
            size: number | import("../config-provider").SizeType;
        };
        virtual?: boolean;
        dropdownMatchSelectWidth?: boolean;
        form?: unknown;
    };
    popupRef: any;
    select: any;
}, unknown, {}, {
    savePopupRef(ref: VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>): void;
    saveSelect(node: VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>): void;
    getInputElement(): any;
    focus(): void;
    blur(): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("blur" | "change" | "focus" | "select")[], "select" | "blur" | "change" | "focus", {
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
    defaultActiveFirstOption: boolean;
    searchValue: string;
    optionLabelProp: string;
    optionFilterProp: string;
    filterOption: any;
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
    dataSource: unknown[];
}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Plugin & {
    readonly Option: typeof Option;
    readonly OptGroup: typeof OptGroup;
};
export default _default;
