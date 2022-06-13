/**
 * Cursor rule:
 * 1. Only `showSearch` enabled
 * 2. Only `open` is `true`
 * 3. When typing, set `open` to `true` which hit rule of 2
 *
 * Accessibility:
 * - https://www.w3.org/TR/wai-aria-practices/examples/combobox/aria1.1pattern/listbox-combo.html
 */
import type { LabelValueType, RawValueType, CustomTagProps } from '../interface/generator';
import type { RenderNode, Mode } from '../interface';
import type { VNodeChild } from 'vue';
import type { VueNode } from '../../_util/type';
import type { EventHandler } from '../../_util/EventInterface';
export interface SelectorProps {
    id: string;
    prefixCls: string;
    showSearch?: boolean;
    open: boolean;
    /** Display in the Selector value, it's not same as `value` prop */
    values: LabelValueType[];
    multiple: boolean;
    mode: Mode;
    searchValue: string;
    activeValue: string;
    inputElement: VueNode;
    autofocus?: boolean;
    accessibilityIndex: number;
    tabindex?: number | string;
    disabled?: boolean;
    placeholder?: VNodeChild;
    removeIcon?: RenderNode;
    maxTagCount?: number | 'responsive';
    maxTagTextLength?: number;
    maxTagPlaceholder?: VNodeChild | ((omittedValues: LabelValueType[]) => VNodeChild);
    tagRender?: (props: CustomTagProps) => VNodeChild;
    /** Check if `tokenSeparators` contains `\n` or `\r\n` */
    tokenWithEnter?: boolean;
    choiceTransitionName?: string;
    onToggleOpen: (open?: boolean) => void;
    /** `onSearch` returns go next step boolean to check if need do toggle open */
    onSearch: (searchText: string, fromTyping: boolean, isCompositing: boolean) => boolean;
    onSearchSubmit: (searchText: string) => void;
    onSelect: (value: RawValueType, option: {
        selected: boolean;
    }) => void;
    onInputKeyDown?: EventHandler;
    /**
     * @private get real dom for trigger align.
     * This may be removed after React provides replacement of `findDOMNode`
     */
    domRef: () => HTMLDivElement;
}
declare const Selector: import("vue").DefineComponent<SelectorProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    id?: unknown;
    prefixCls?: unknown;
    showSearch?: unknown;
    open?: unknown;
    values?: unknown;
    multiple?: unknown;
    mode?: unknown;
    searchValue?: unknown;
    activeValue?: unknown;
    inputElement?: unknown;
    autofocus?: unknown;
    accessibilityIndex?: unknown;
    tabindex?: unknown;
    disabled?: unknown;
    placeholder?: unknown;
    removeIcon?: unknown;
    maxTagCount?: unknown;
    maxTagTextLength?: unknown;
    maxTagPlaceholder?: unknown;
    tagRender?: unknown;
    tokenWithEnter?: unknown;
    choiceTransitionName?: unknown;
    onToggleOpen?: unknown;
    onSearch?: unknown;
    onSearchSubmit?: unknown;
    onSelect?: unknown;
    onInputKeyDown?: unknown;
    domRef?: unknown;
} & {} & {
    values?: LabelValueType;
    prefixCls?: string;
    onSelect?: (value: RawValueType, option: {
        selected: boolean;
    }) => void;
    tabindex?: string | number;
    multiple?: boolean;
    open?: boolean;
    disabled?: boolean;
    mode?: Mode;
    id?: string;
    searchValue?: string;
    onToggleOpen?: void;
    inputElement?: VueNode;
    autofocus?: boolean;
    accessibilityIndex?: number;
    placeholder?: VNodeChild;
    showSearch?: boolean;
    onInputKeyDown?: void;
    removeIcon?: RenderNode;
    maxTagCount?: number | "responsive";
    maxTagTextLength?: number;
    maxTagPlaceholder?: VNodeChild | ((omittedValues: LabelValueType[]) => VNodeChild);
    tagRender?: (props: CustomTagProps) => VNodeChild;
    choiceTransitionName?: string;
    activeValue?: string;
    tokenWithEnter?: boolean;
    onSearch?: (searchText: string, fromTyping: boolean, isCompositing: boolean) => boolean;
    onSearchSubmit?: (searchText: string) => void;
    domRef?: HTMLDivElement;
}>, {}>;
export default Selector;
