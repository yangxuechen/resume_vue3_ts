import type { PropType, ExtractPropTypes } from 'vue';
declare const subMenuProps: {
    icon: import("vue-types").VueTypeValidableDef<import("../../_util/type").VueNode>;
    title: import("vue-types").VueTypeValidableDef<import("../../_util/type").VueNode>;
    disabled: BooleanConstructor;
    level: NumberConstructor;
    popupClassName: StringConstructor;
    popupOffset: PropType<number[]>;
    internalPopupClose: BooleanConstructor;
    eventKey: StringConstructor;
    expandIcon: PropType<(p?: {
        [key: string]: any;
        isOpen: boolean;
    }) => any>;
};
export declare type SubMenuProps = Partial<ExtractPropTypes<typeof subMenuProps>>;
declare const _default: import("vue").DefineComponent<{
    icon: import("vue-types").VueTypeValidableDef<import("../../_util/type").VueNode>;
    title: import("vue-types").VueTypeValidableDef<import("../../_util/type").VueNode>;
    disabled: BooleanConstructor;
    level: NumberConstructor;
    popupClassName: StringConstructor;
    popupOffset: PropType<number[]>;
    internalPopupClose: BooleanConstructor;
    eventKey: StringConstructor;
    expandIcon: PropType<(p?: {
        [key: string]: any;
        isOpen: boolean;
    }) => any>;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("mouseenter" | "mouseleave" | "titleClick")[], "mouseenter" | "mouseleave" | "titleClick", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    icon?: unknown;
    title?: unknown;
    disabled?: unknown;
    level?: unknown;
    popupClassName?: unknown;
    popupOffset?: unknown;
    internalPopupClose?: unknown;
    eventKey?: unknown;
    expandIcon?: unknown;
} & {
    disabled: boolean;
    internalPopupClose: boolean;
} & {
    icon?: import("../../_util/type").VueNode;
    title?: import("../../_util/type").VueNode;
    popupClassName?: string;
    expandIcon?: (p?: {
        [key: string]: any;
        isOpen: boolean;
    }) => any;
    popupOffset?: number[];
    level?: number;
    eventKey?: string;
}> & {
    onMouseenter?: (...args: any[]) => any;
    onMouseleave?: (...args: any[]) => any;
    onTitleClick?: (...args: any[]) => any;
}, {
    disabled: boolean;
    internalPopupClose: boolean;
}>;
export default _default;
