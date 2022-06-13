import type { ExtractPropTypes, PropType } from 'vue';
import type { MenuTheme, MenuMode, BuiltinPlacements, TriggerSubMenuAction } from './interface';
import type { CSSMotionProps } from '../../_util/transition';
export declare const menuProps: {
    prefixCls: StringConstructor;
    disabled: BooleanConstructor;
    inlineCollapsed: BooleanConstructor;
    disabledOverflow: BooleanConstructor;
    openKeys: ArrayConstructor;
    selectedKeys: ArrayConstructor;
    activeKey: StringConstructor;
    selectable: {
        type: BooleanConstructor;
        default: boolean;
    };
    multiple: {
        type: BooleanConstructor;
        default: boolean;
    };
    motion: PropType<CSSMotionProps>;
    theme: {
        type: PropType<MenuTheme>;
        default: string;
    };
    mode: {
        type: PropType<MenuMode>;
        default: string;
    };
    inlineIndent: {
        type: NumberConstructor;
        default: number;
    };
    subMenuOpenDelay: {
        type: NumberConstructor;
        default: number;
    };
    subMenuCloseDelay: {
        type: NumberConstructor;
        default: number;
    };
    builtinPlacements: {
        type: PropType<BuiltinPlacements>;
    };
    triggerSubMenuAction: {
        type: PropType<TriggerSubMenuAction>;
        default: string;
    };
    getPopupContainer: PropType<(node: HTMLElement) => HTMLElement>;
    expandIcon: PropType<(p?: {
        [key: string]: any;
        isOpen: boolean;
    }) => any>;
};
export declare type MenuProps = Partial<ExtractPropTypes<typeof menuProps>>;
declare const _default: import("vue").DefineComponent<{
    prefixCls: StringConstructor;
    disabled: BooleanConstructor;
    inlineCollapsed: BooleanConstructor;
    disabledOverflow: BooleanConstructor;
    openKeys: ArrayConstructor;
    selectedKeys: ArrayConstructor;
    activeKey: StringConstructor;
    selectable: {
        type: BooleanConstructor;
        default: boolean;
    };
    multiple: {
        type: BooleanConstructor;
        default: boolean;
    };
    motion: PropType<CSSMotionProps>;
    theme: {
        type: PropType<MenuTheme>;
        default: string;
    };
    mode: {
        type: PropType<MenuMode>;
        default: string;
    };
    inlineIndent: {
        type: NumberConstructor;
        default: number;
    };
    subMenuOpenDelay: {
        type: NumberConstructor;
        default: number;
    };
    subMenuCloseDelay: {
        type: NumberConstructor;
        default: number;
    };
    builtinPlacements: {
        type: PropType<BuiltinPlacements>;
    };
    triggerSubMenuAction: {
        type: PropType<TriggerSubMenuAction>;
        default: string;
    };
    getPopupContainer: PropType<(node: HTMLElement) => HTMLElement>;
    expandIcon: PropType<(p?: {
        [key: string]: any;
        isOpen: boolean;
    }) => any>;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("click" | "select" | "update:openKeys" | "openChange" | "deselect" | "update:selectedKeys" | "update:activeKey")[], "select" | "click" | "update:openKeys" | "openChange" | "deselect" | "update:selectedKeys" | "update:activeKey", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    prefixCls?: unknown;
    disabled?: unknown;
    inlineCollapsed?: unknown;
    disabledOverflow?: unknown;
    openKeys?: unknown;
    selectedKeys?: unknown;
    activeKey?: unknown;
    selectable?: unknown;
    multiple?: unknown;
    motion?: unknown;
    theme?: unknown;
    mode?: unknown;
    inlineIndent?: unknown;
    subMenuOpenDelay?: unknown;
    subMenuCloseDelay?: unknown;
    builtinPlacements?: unknown;
    triggerSubMenuAction?: unknown;
    getPopupContainer?: unknown;
    expandIcon?: unknown;
} & {
    multiple: boolean;
    disabled: boolean;
    mode: MenuMode;
    inlineIndent: number;
    inlineCollapsed: boolean;
    subMenuOpenDelay: number;
    subMenuCloseDelay: number;
    triggerSubMenuAction: TriggerSubMenuAction;
    disabledOverflow: boolean;
    selectable: boolean;
    theme: MenuTheme;
} & {
    getPopupContainer?: (node: HTMLElement) => HTMLElement;
    prefixCls?: string;
    builtinPlacements?: unknown;
    expandIcon?: (p?: {
        [key: string]: any;
        isOpen: boolean;
    }) => any;
    selectedKeys?: unknown[];
    motion?: unknown;
    openKeys?: unknown[];
    activeKey?: string;
}> & {
    onClick?: (...args: any[]) => any;
    onSelect?: (...args: any[]) => any;
    onDeselect?: (...args: any[]) => any;
    onOpenChange?: (...args: any[]) => any;
    "onUpdate:openKeys"?: (...args: any[]) => any;
    "onUpdate:selectedKeys"?: (...args: any[]) => any;
    "onUpdate:activeKey"?: (...args: any[]) => any;
}, {
    multiple: boolean;
    disabled: boolean;
    mode: MenuMode;
    inlineIndent: number;
    inlineCollapsed: boolean;
    subMenuOpenDelay: number;
    subMenuCloseDelay: number;
    triggerSubMenuAction: TriggerSubMenuAction;
    disabledOverflow: boolean;
    selectable: boolean;
    theme: MenuTheme;
}>;
export default _default;
