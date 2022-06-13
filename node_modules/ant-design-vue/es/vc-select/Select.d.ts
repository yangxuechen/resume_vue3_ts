/**
 * To match accessibility requirement, we always provide an input in the component.
 * Other element will not set `tabIndex` to avoid `onBlur` sequence problem.
 * For focused select, we set `aria-live="polite"` to update the accessibility content.
 *
 * ref:
 * - keyboard: https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/listbox_role#Keyboard_interactions
 *
 * New api:
 * - listHeight
 * - listItemHeight
 * - component
 *
 * Remove deprecated api:
 * - multiple
 * - tags
 * - combobox
 * - firstActiveValue
 * - dropdownMenuStyle
 * - openClassName (Not list in api)
 *
 * Update:
 * - `backfill` only support `combobox` mode
 * - `combobox` mode not support `labelInValue` since it's meaningless
 * - `getInputElement` only support `combobox` mode
 * - `onChange` return OptionData instead of ReactNode
 * - `filterOption` `onChange` `onSelect` accept OptionData instead of ReactNode
 * - `combobox` mode trigger `onChange` will get `undefined` if no `value` match in Option
 * - `combobox` mode not support `optionLabelProp`
 */
import type { OptionsType as SelectOptionsType } from './interface';
import type { SelectProps } from './generate';
import type { DefaultValueType } from './interface/generator';
export declare type ExportedSelectProps<ValueType extends DefaultValueType = DefaultValueType> = SelectProps<SelectOptionsType, ValueType>;
declare const Select: import("vue").DefineComponent<Omit<ExportedSelectProps<DefaultValueType>, "children">, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    style?: unknown;
    class?: unknown;
    value?: unknown;
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
    mode?: unknown;
    id?: unknown;
    options?: unknown;
    defaultActiveFirstOption?: unknown;
    notFoundContent?: unknown;
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
    choiceTransitionName?: unknown;
    backfill?: unknown;
    onSearch?: unknown;
    animation?: unknown;
    transitionName?: unknown;
    dropdownStyle?: unknown;
    dropdownClassName?: unknown;
    dropdownRender?: unknown;
    dropdownAlign?: unknown;
    showAction?: unknown;
    defaultValue?: unknown;
    inputValue?: unknown;
    filterSort?: unknown;
    autoClearSearchValue?: unknown;
    allowClear?: unknown;
    clearIcon?: unknown;
    showArrow?: unknown;
    inputIcon?: unknown;
    defaultOpen?: unknown;
    listHeight?: unknown;
    listItemHeight?: unknown;
    loading?: unknown;
    getInputElement?: unknown;
    onPopupScroll?: unknown;
    onDropdownVisibleChange?: unknown;
    internalProps?: unknown;
} & {
    dropdownAlign: any;
} & {
    style?: import("vue").CSSProperties;
    class?: string;
    value?: DefaultValueType;
    getPopupContainer?: import("./interface").RenderDOMFunc;
    prefixCls?: string;
    direction?: string;
    virtual?: boolean;
    dropdownMatchSelectWidth?: number | boolean;
    onFocus?: void;
    onBlur?: void;
    onChange?: (value: DefaultValueType, option: import("./interface").OptionData | import("./interface").OptionGroupData | SelectOptionsType) => void;
    onKeydown?: void;
    onKeyup?: void;
    onClick?: void;
    onMousedown?: void;
    onMouseenter?: void;
    onMouseleave?: void;
    onSelect?: (value: import("./interface/generator").RawValueType | import("./interface/generator").LabelValueType, option: import("./interface").OptionData | import("./interface").OptionGroupData) => void;
    tabindex?: string | number;
    onDeselect?: (value: import("./interface/generator").RawValueType | import("./interface/generator").LabelValueType, option: import("./interface").OptionData | import("./interface").OptionGroupData) => void;
    onClear?: unknown;
    open?: boolean;
    disabled?: boolean;
    mode?: import("./interface").Mode;
    id?: string;
    options?: import("./interface").OptionData | import("./interface").OptionGroupData;
    defaultActiveFirstOption?: boolean;
    notFoundContent?: import("vue").VNodeChild;
    menuItemSelectedIcon?: import("./interface").RenderNode;
    searchValue?: string;
    labelInValue?: boolean;
    optionLabelProp?: string;
    optionFilterProp?: string;
    filterOption?: boolean | import("./interface/generator").FilterFunc<import("./interface").OptionData | import("./interface").OptionGroupData>;
    autofocus?: boolean;
    placeholder?: import("vue").VNodeChild;
    showSearch?: boolean;
    onInputKeyDown?: void;
    removeIcon?: import("vue").VNodeChild;
    maxTagCount?: number | "responsive";
    maxTagTextLength?: number;
    maxTagPlaceholder?: import("vue").VNodeChild | ((omittedValues: import("./interface/generator").LabelValueType[]) => import("vue").VNodeChild);
    tokenSeparators?: string;
    tagRender?: (props: import("./interface/generator").CustomTagProps) => import("vue").VNodeChild;
    choiceTransitionName?: string;
    backfill?: boolean;
    onSearch?: (value: string) => void;
    animation?: string;
    transitionName?: string;
    dropdownStyle?: import("vue").CSSProperties;
    dropdownClassName?: string;
    dropdownRender?: import("../_util/type").VueNode;
    showAction?: "click" | "focus";
    defaultValue?: DefaultValueType;
    inputValue?: string;
    filterSort?: (optionA: import("./interface").OptionData | import("./interface").OptionGroupData, optionB: import("./interface").OptionData | import("./interface").OptionGroupData) => number;
    autoClearSearchValue?: boolean;
    allowClear?: boolean;
    clearIcon?: import("vue").VNodeChild;
    showArrow?: boolean;
    inputIcon?: import("./interface").RenderNode;
    defaultOpen?: boolean;
    listHeight?: number;
    listItemHeight?: number;
    loading?: boolean;
    getInputElement?: import("vue").VNodeChild | JSX.Element;
    onPopupScroll?: void;
    onDropdownVisibleChange?: (open: boolean) => void;
    internalProps?: {
        mark?: string;
        onClear?: import("./interface/generator").OnClear;
        skipTriggerChange?: boolean;
        skipTriggerSelect?: boolean;
        onRawSelect?: (value: import("./interface/generator").RawValueType, option: import("./interface").OptionData | import("./interface").OptionGroupData, source: import("./interface/generator").SelectSource) => void;
        onRawDeselect?: (value: import("./interface/generator").RawValueType, option: import("./interface").OptionData | import("./interface").OptionGroupData, source: import("./interface/generator").SelectSource) => void;
    };
}>, {
    dropdownAlign: any;
}>;
export default Select;
