import type { CSSProperties, VNodeChild } from 'vue';
import type { RenderDOMFunc } from './interface';
import type { DropdownRender } from './interface/generator';
export interface SelectTriggerProps {
    prefixCls: string;
    disabled: boolean;
    visible: boolean;
    popupElement: VNodeChild | JSX.Element;
    animation?: string;
    transitionName?: string;
    containerWidth: number;
    dropdownStyle: CSSProperties;
    dropdownClassName: string;
    direction: string;
    dropdownMatchSelectWidth?: boolean | number;
    dropdownRender?: DropdownRender;
    getPopupContainer?: RenderDOMFunc;
    dropdownAlign: object;
    empty: boolean;
    getTriggerDOMNode: () => any;
}
declare const SelectTrigger: import("vue").DefineComponent<SelectTriggerProps, {
    popupRef: any;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    prefixCls?: unknown;
    disabled?: unknown;
    visible?: unknown;
    popupElement?: unknown;
    animation?: unknown;
    transitionName?: unknown;
    containerWidth?: unknown;
    dropdownStyle?: unknown;
    dropdownClassName?: unknown;
    direction?: unknown;
    dropdownMatchSelectWidth?: unknown;
    dropdownRender?: unknown;
    getPopupContainer?: unknown;
    dropdownAlign?: unknown;
    empty?: unknown;
    getTriggerDOMNode?: unknown;
} & {} & {
    getPopupContainer?: RenderDOMFunc;
    prefixCls?: string;
    direction?: string;
    dropdownMatchSelectWidth?: number | boolean;
    empty?: boolean;
    visible?: boolean;
    disabled?: boolean;
    animation?: string;
    popupElement?: VNodeChild | JSX.Element;
    transitionName?: string;
    containerWidth?: number;
    dropdownStyle?: CSSProperties;
    dropdownClassName?: string;
    dropdownRender?: import("../_util/type").VueNode;
    dropdownAlign?: unknown;
    getTriggerDOMNode?: unknown;
}>, {}>;
export default SelectTrigger;
