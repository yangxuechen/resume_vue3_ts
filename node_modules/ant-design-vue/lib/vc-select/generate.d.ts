/**
 * To match accessibility requirement, we always provide an input in the component.
 * Other element will not set `tabindex` to avoid `onBlur` sequence problem.
 * For focused select, we set `aria-live="polite"` to update the accessibility content.
 *
 * ref:
 * - keyboard: https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/listbox_role#Keyboard_interactions
 */
import type { RenderNode, Mode, RenderDOMFunc, OnActiveValue } from './interface';
import type { GetLabeledValue, FilterOptions, FilterFunc, DefaultValueType, RawValueType, LabelValueType, Key, DisplayLabelValueType, FlattenOptionsType, SingleType, OnClear, SelectSource, CustomTagProps, DropdownRender } from './interface/generator';
import type { OptionListProps } from './OptionList';
import type { CSSProperties, PropType, VNodeChild } from 'vue';
import type { EventHandler } from '../_util/EventInterface';
export declare const BaseProps: () => {
    prefixCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    id: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    class: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    style: import("vue-types").VueTypeValidableDef<any>;
    options: import("vue-types").VueTypeValidableDef<unknown[]> & {
        default: () => unknown[];
    };
    mode: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    value: import("vue-types").VueTypeValidableDef<any>;
    defaultValue: import("vue-types").VueTypeValidableDef<any>;
    labelInValue: import("vue-types").VueTypeValidableDef<boolean>;
    inputValue: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    searchValue: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    optionFilterProp: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    /**
     * In Select, `false` means do nothing.
     * In TreeSelect, `false` will highlight match item.
     * It's by design.
     */
    filterOption: import("vue-types").VueTypeValidableDef<any>;
    filterSort: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    showSearch: import("vue-types").VueTypeValidableDef<boolean>;
    autoClearSearchValue: import("vue-types").VueTypeValidableDef<boolean>;
    onSearch: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    onClear: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    allowClear: import("vue-types").VueTypeValidableDef<boolean>;
    clearIcon: import("vue-types").VueTypeValidableDef<import("../_util/type").VueNode>;
    showArrow: import("vue-types").VueTypeValidableDef<boolean>;
    inputIcon: import("vue-types").VueTypeValidableDef<import("../_util/type").VueNode>;
    removeIcon: import("vue-types").VueTypeValidableDef<import("../_util/type").VueNode>;
    menuItemSelectedIcon: import("vue-types").VueTypeValidableDef<import("../_util/type").VueNode>;
    open: import("vue-types").VueTypeValidableDef<boolean>;
    defaultOpen: import("vue-types").VueTypeValidableDef<boolean>;
    listHeight: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
    listItemHeight: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
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
    dropdownMatchSelectWidth: import("vue-types").VueTypeDef<number | boolean>;
    virtual: import("vue-types").VueTypeValidableDef<boolean>;
    dropdownRender: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    dropdownAlign: import("vue-types").VueTypeValidableDef<any>;
    animation: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    transitionName: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    getPopupContainer: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    direction: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    disabled: import("vue-types").VueTypeValidableDef<boolean>;
    loading: import("vue-types").VueTypeValidableDef<boolean>;
    autofocus: import("vue-types").VueTypeValidableDef<boolean>;
    defaultActiveFirstOption: import("vue-types").VueTypeValidableDef<boolean>;
    notFoundContent: import("vue-types").VueTypeValidableDef<import("../_util/type").VueNode>;
    placeholder: import("vue-types").VueTypeValidableDef<import("../_util/type").VueNode>;
    backfill: import("vue-types").VueTypeValidableDef<boolean>;
    getInputElement: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    optionLabelProp: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    maxTagTextLength: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
    maxTagCount: import("vue-types").VueTypeDef<string | number>;
    maxTagPlaceholder: import("vue-types").VueTypeValidableDef<any>;
    tokenSeparators: import("vue-types").VueTypeDef<string[]>;
    tagRender: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    showAction: import("vue-types").VueTypeValidableDef<unknown[]> & {
        default: () => unknown[];
    };
    tabindex: import("vue-types").VueTypeDef<string | number>;
    onKeyup: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    onKeydown: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    onPopupScroll: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    onDropdownVisibleChange: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    onSelect: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    onDeselect: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    onInputKeyDown: {
        type: PropType<EventHandler>;
    };
    onClick: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    onChange: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    onBlur: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    onFocus: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
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
    choiceTransitionName: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    /**
     * Only used in current version for internal event process.
     * Do not use in production environment.
     */
    internalProps: import("vue-types").VueTypeValidableDef<{
        [key: string]: any;
    }> & {
        default: () => {
            [key: string]: any;
        };
    };
    children: import("vue-types").VueTypeValidableDef<unknown[]> & {
        default: () => unknown[];
    };
};
export interface SelectProps<OptionsType extends object[], ValueType> {
    prefixCls?: string;
    id?: string;
    class?: string;
    style?: CSSProperties;
    options?: OptionsType;
    children?: any[];
    mode?: Mode;
    value?: ValueType;
    defaultValue?: ValueType;
    labelInValue?: boolean;
    inputValue?: string;
    searchValue?: string;
    optionFilterProp?: string;
    /**
     * In Select, `false` means do nothing.
     * In TreeSelect, `false` will highlight match item.
     * It's by design.
     */
    filterOption?: boolean | FilterFunc<OptionsType[number]>;
    filterSort?: (optionA: OptionsType[number], optionB: OptionsType[number]) => number;
    showSearch?: boolean;
    autoClearSearchValue?: boolean;
    onSearch?: (value: string) => void;
    onClear?: OnClear;
    allowClear?: boolean;
    clearIcon?: VNodeChild;
    showArrow?: boolean;
    inputIcon?: RenderNode;
    removeIcon?: VNodeChild;
    menuItemSelectedIcon?: RenderNode;
    open?: boolean;
    defaultOpen?: boolean;
    listHeight?: number;
    listItemHeight?: number;
    dropdownStyle?: CSSProperties;
    dropdownClassName?: string;
    dropdownMatchSelectWidth?: boolean | number;
    virtual?: boolean;
    dropdownRender?: DropdownRender;
    dropdownAlign?: any;
    animation?: string;
    transitionName?: string;
    getPopupContainer?: RenderDOMFunc;
    direction?: string;
    disabled?: boolean;
    loading?: boolean;
    autofocus?: boolean;
    defaultActiveFirstOption?: boolean;
    notFoundContent?: VNodeChild;
    placeholder?: VNodeChild;
    backfill?: boolean;
    getInputElement?: () => VNodeChild | JSX.Element;
    optionLabelProp?: string;
    maxTagTextLength?: number;
    maxTagCount?: number | 'responsive';
    maxTagPlaceholder?: VNodeChild | ((omittedValues: LabelValueType[]) => VNodeChild);
    tokenSeparators?: string[];
    tagRender?: (props: CustomTagProps) => VNodeChild;
    showAction?: ('focus' | 'click')[];
    tabindex?: number | string;
    onKeyup?: EventHandler;
    onKeydown?: EventHandler;
    onPopupScroll?: EventHandler;
    onDropdownVisibleChange?: (open: boolean) => void;
    onSelect?: (value: SingleType<ValueType>, option: OptionsType[number]) => void;
    onDeselect?: (value: SingleType<ValueType>, option: OptionsType[number]) => void;
    onInputKeyDown?: EventHandler;
    onClick?: EventHandler;
    onChange?: (value: ValueType, option: OptionsType[number] | OptionsType) => void;
    onBlur?: EventHandler;
    onFocus?: EventHandler;
    onMousedown?: EventHandler;
    onMouseenter?: EventHandler;
    onMouseleave?: EventHandler;
    choiceTransitionName?: string;
    /**
     * Only used in current version for internal event process.
     * Do not use in production environment.
     */
    internalProps?: {
        mark?: string;
        onClear?: OnClear;
        skipTriggerChange?: boolean;
        skipTriggerSelect?: boolean;
        onRawSelect?: (value: RawValueType, option: OptionsType[number], source: SelectSource) => void;
        onRawDeselect?: (value: RawValueType, option: OptionsType[number], source: SelectSource) => void;
    };
}
export interface GenerateConfig<OptionsType extends object[]> {
    prefixCls: string;
    components: {
        optionList: (props: Omit<OptionListProps, 'options'> & {
            options?: OptionsType;
        }) => JSX.Element;
    };
    /** Convert jsx tree into `OptionsType` */
    convertChildrenToData: (children: VNodeChild | JSX.Element) => OptionsType;
    /** Flatten nest options into raw option list */
    flattenOptions: (options: OptionsType, props: any) => FlattenOptionsType<OptionsType>;
    /** Convert single raw value into { label, value } format. Will be called by each value */
    getLabeledValue: GetLabeledValue<FlattenOptionsType<OptionsType>>;
    filterOptions: FilterOptions<OptionsType>;
    findValueOption: ((values: RawValueType[], options: FlattenOptionsType<OptionsType>) => OptionsType) | ((values: RawValueType[], options: FlattenOptionsType<OptionsType>, info?: {
        prevValueOptions?: OptionsType[];
    }) => OptionsType);
    /** Check if a value is disabled */
    isValueDisabled: (value: RawValueType, options: FlattenOptionsType<OptionsType>) => boolean;
    warningProps?: (props: any) => void;
    fillOptionsWithMissingValue?: (options: OptionsType, value: DefaultValueType, optionLabelProp: string, labelInValue: boolean) => OptionsType;
    omitDOMProps?: (props: object) => object;
}
/**
 * This function is in internal usage.
 * Do not use it in your prod env since we may refactor this.
 */
export default function generateSelector<OptionsType extends {
    value?: RawValueType;
    label?: VNodeChild;
    key?: Key;
    disabled?: boolean;
}[]>(config: GenerateConfig<OptionsType>): import("vue").DefineComponent<{
    prefixCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    id: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    class: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    style: import("vue-types").VueTypeValidableDef<any>;
    options: import("vue-types").VueTypeValidableDef<unknown[]> & {
        default: () => unknown[];
    };
    mode: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    value: import("vue-types").VueTypeValidableDef<any>;
    defaultValue: import("vue-types").VueTypeValidableDef<any>;
    labelInValue: import("vue-types").VueTypeValidableDef<boolean>;
    inputValue: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    searchValue: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    optionFilterProp: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    /**
     * In Select, `false` means do nothing.
     * In TreeSelect, `false` will highlight match item.
     * It's by design.
     */
    filterOption: import("vue-types").VueTypeValidableDef<any>;
    filterSort: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    showSearch: import("vue-types").VueTypeValidableDef<boolean>;
    autoClearSearchValue: import("vue-types").VueTypeValidableDef<boolean>;
    onSearch: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    onClear: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    allowClear: import("vue-types").VueTypeValidableDef<boolean>;
    clearIcon: import("vue-types").VueTypeValidableDef<import("../_util/type").VueNode>;
    showArrow: import("vue-types").VueTypeValidableDef<boolean>;
    inputIcon: import("vue-types").VueTypeValidableDef<import("../_util/type").VueNode>;
    removeIcon: import("vue-types").VueTypeValidableDef<import("../_util/type").VueNode>;
    menuItemSelectedIcon: import("vue-types").VueTypeValidableDef<import("../_util/type").VueNode>;
    open: import("vue-types").VueTypeValidableDef<boolean>;
    defaultOpen: import("vue-types").VueTypeValidableDef<boolean>;
    listHeight: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
    listItemHeight: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
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
    dropdownMatchSelectWidth: import("vue-types").VueTypeDef<number | boolean>;
    virtual: import("vue-types").VueTypeValidableDef<boolean>;
    dropdownRender: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    dropdownAlign: import("vue-types").VueTypeValidableDef<any>;
    animation: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    transitionName: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    getPopupContainer: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    direction: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    disabled: import("vue-types").VueTypeValidableDef<boolean>;
    loading: import("vue-types").VueTypeValidableDef<boolean>;
    autofocus: import("vue-types").VueTypeValidableDef<boolean>;
    defaultActiveFirstOption: import("vue-types").VueTypeValidableDef<boolean>;
    notFoundContent: import("vue-types").VueTypeValidableDef<import("../_util/type").VueNode>;
    placeholder: import("vue-types").VueTypeValidableDef<import("../_util/type").VueNode>;
    backfill: import("vue-types").VueTypeValidableDef<boolean>;
    getInputElement: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    optionLabelProp: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    maxTagTextLength: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
    maxTagCount: import("vue-types").VueTypeDef<string | number>;
    maxTagPlaceholder: import("vue-types").VueTypeValidableDef<any>;
    tokenSeparators: import("vue-types").VueTypeDef<string[]>;
    tagRender: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    showAction: import("vue-types").VueTypeValidableDef<unknown[]> & {
        default: () => unknown[];
    };
    tabindex: import("vue-types").VueTypeDef<string | number>;
    onKeyup: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    onKeydown: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    onPopupScroll: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    onDropdownVisibleChange: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    onSelect: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    onDeselect: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    onInputKeyDown: {
        type: PropType<EventHandler>;
    };
    onClick: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    onChange: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    onBlur: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    onFocus: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
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
    choiceTransitionName: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    /**
     * Only used in current version for internal event process.
     * Do not use in production environment.
     */
    internalProps: import("vue-types").VueTypeValidableDef<{
        [key: string]: any;
    }> & {
        default: () => {
            [key: string]: any;
        };
    };
    children: import("vue-types").VueTypeValidableDef<unknown[]> & {
        default: () => unknown[];
    };
}, {
    focus: () => void;
    blur: () => void;
    scrollTo: any;
    tokenWithEnter: import("vue").ComputedRef<boolean>;
    mockFocused: import("vue").Ref<Boolean>;
    mergedId: import("vue").ComputedRef<string>;
    containerWidth: any;
    onActiveValue: OnActiveValue;
    accessibilityIndex: import("vue").Ref<number>;
    mergedDefaultActiveFirstOption: import("vue").ComputedRef<boolean>;
    onInternalMouseDown: (event: MouseEvent) => void;
    onContainerFocus: (...args: any[]) => void;
    onContainerBlur: (...args: any[]) => void;
    onInternalKeyDown: (event: KeyboardEvent) => void;
    isMultiple: import("vue").ComputedRef<boolean>;
    mergedOpen: import("vue").Ref<boolean>;
    displayOptions: import("vue").ComputedRef<OptionsType>;
    displayFlattenOptions: import("vue").ComputedRef<FlattenOptionsType<OptionsType>>;
    rawValues: import("vue").ComputedRef<Set<RawValueType>>;
    onInternalOptionSelect: (newValue: RawValueType, info: {
        selected: boolean;
    }) => void;
    onToggleOpen: (newOpen?: boolean) => void;
    mergedSearchValue: import("vue").ComputedRef<string>;
    useInternalProps: import("vue").ComputedRef<boolean>;
    triggerChange: (newRawValues: RawValueType[]) => void;
    triggerSearch: (searchText: string, fromTyping: boolean, isCompositing: boolean) => boolean;
    mergedRawValue: import("vue").ComputedRef<RawValueType[]>;
    mergedShowSearch: import("vue").ComputedRef<boolean>;
    onInternalKeyUp: (event: Event) => void;
    triggerOpen: import("vue").ComputedRef<boolean>;
    mergedOptions: import("vue").ComputedRef<OptionsType>;
    onInternalSelectionSelect: (newValue: RawValueType, info: {
        selected: boolean;
    }) => void;
    selectorDomRef: any;
    displayValues: import("vue").ComputedRef<DisplayLabelValueType[]>;
    activeValue: any;
    onSearchSubmit: (searchText: string) => void;
    containerRef: any;
    listRef: any;
    triggerRef: any;
    selectorRef: any;
}, unknown, {}, {
    onPopupMouseEnter(): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    prefixCls?: unknown;
    id?: unknown;
    class?: unknown;
    style?: unknown;
    options?: unknown;
    mode?: unknown;
    value?: unknown;
    defaultValue?: unknown;
    labelInValue?: unknown;
    inputValue?: unknown;
    searchValue?: unknown;
    optionFilterProp?: unknown;
    filterOption?: unknown;
    filterSort?: unknown;
    showSearch?: unknown;
    autoClearSearchValue?: unknown;
    onSearch?: unknown;
    onClear?: unknown;
    allowClear?: unknown;
    clearIcon?: unknown;
    showArrow?: unknown;
    inputIcon?: unknown;
    removeIcon?: unknown;
    menuItemSelectedIcon?: unknown;
    open?: unknown;
    defaultOpen?: unknown;
    listHeight?: unknown;
    listItemHeight?: unknown;
    dropdownStyle?: unknown;
    dropdownClassName?: unknown;
    dropdownMatchSelectWidth?: unknown;
    virtual?: unknown;
    dropdownRender?: unknown;
    dropdownAlign?: unknown;
    animation?: unknown;
    transitionName?: unknown;
    getPopupContainer?: unknown;
    direction?: unknown;
    disabled?: unknown;
    loading?: unknown;
    autofocus?: unknown;
    defaultActiveFirstOption?: unknown;
    notFoundContent?: unknown;
    placeholder?: unknown;
    backfill?: unknown;
    getInputElement?: unknown;
    optionLabelProp?: unknown;
    maxTagTextLength?: unknown;
    maxTagCount?: unknown;
    maxTagPlaceholder?: unknown;
    tokenSeparators?: unknown;
    tagRender?: unknown;
    showAction?: unknown;
    tabindex?: unknown;
    onKeyup?: unknown;
    onKeydown?: unknown;
    onPopupScroll?: unknown;
    onDropdownVisibleChange?: unknown;
    onSelect?: unknown;
    onDeselect?: unknown;
    onInputKeyDown?: unknown;
    onClick?: unknown;
    onChange?: unknown;
    onBlur?: unknown;
    onFocus?: unknown;
    onMousedown?: unknown;
    onMouseenter?: unknown;
    onMouseleave?: unknown;
    choiceTransitionName?: unknown;
    internalProps?: unknown;
    children?: unknown;
} & {
    class: string;
    children: unknown[];
    prefixCls: string;
    direction: string;
    mode: string;
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
} & {
    style?: any;
    value?: any;
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
    open?: boolean;
    disabled?: boolean;
    defaultActiveFirstOption?: boolean;
    notFoundContent?: import("../_util/type").VueNode;
    menuItemSelectedIcon?: import("../_util/type").VueNode;
    labelInValue?: boolean;
    filterOption?: any;
    autofocus?: boolean;
    placeholder?: import("../_util/type").VueNode;
    showSearch?: boolean;
    onInputKeyDown?: EventHandler;
    removeIcon?: import("../_util/type").VueNode;
    maxTagCount?: string | number;
    maxTagPlaceholder?: any;
    tokenSeparators?: string[];
    tagRender?: (...args: any[]) => any;
    backfill?: boolean;
    onSearch?: (...args: any[]) => any;
    dropdownRender?: (...args: any[]) => any;
    dropdownAlign?: any;
    defaultValue?: any;
    filterSort?: (...args: any[]) => any;
    autoClearSearchValue?: boolean;
    allowClear?: boolean;
    clearIcon?: import("../_util/type").VueNode;
    showArrow?: boolean;
    inputIcon?: import("../_util/type").VueNode;
    defaultOpen?: boolean;
    loading?: boolean;
    getInputElement?: (...args: any[]) => any;
    onPopupScroll?: (...args: any[]) => any;
    onDropdownVisibleChange?: (...args: any[]) => any;
}>, {
    class: string;
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
    mode: string;
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
    getInputElement: (...args: any[]) => any;
    onPopupScroll: (...args: any[]) => any;
    onDropdownVisibleChange: (...args: any[]) => any;
    internalProps: {
        [key: string]: any;
    };
}>;
