import { MenuProps } from './src/Menu';
import MenuItem, { MenuItemProps } from './src/MenuItem';
import SubMenu, { SubMenuProps } from './src/SubMenu';
import ItemGroup, { MenuItemGroupProps } from './src/ItemGroup';
import Divider from './src/Divider';
import type { Plugin } from 'vue';
import { MenuTheme } from './src/interface';
export { SubMenu, MenuItem as Item, MenuItem, ItemGroup, ItemGroup as MenuItemGroup, Divider, Divider as MenuDivider, MenuProps, SubMenuProps, MenuItemProps, MenuItemGroupProps, MenuTheme, };
declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            multiple: boolean;
            disabled: boolean;
            mode: import("./src/interface").MenuMode;
            inlineIndent: number;
            inlineCollapsed: boolean;
            subMenuOpenDelay: number;
            subMenuCloseDelay: number;
            triggerSubMenuAction: import("./src/interface").TriggerSubMenuAction;
            disabledOverflow: boolean;
            selectable: boolean;
            theme: MenuTheme;
        }> & Omit<Readonly<{
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
            mode: import("./src/interface").MenuMode;
            inlineIndent: number;
            inlineCollapsed: boolean;
            subMenuOpenDelay: number;
            subMenuCloseDelay: number;
            triggerSubMenuAction: import("./src/interface").TriggerSubMenuAction;
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
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "multiple" | "disabled" | "mode" | "inlineIndent" | "inlineCollapsed" | "subMenuOpenDelay" | "subMenuCloseDelay" | "triggerSubMenuAction" | "disabledOverflow" | "selectable" | "theme">;
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
        $emit: (event: "click" | "select" | "update:openKeys" | "openChange" | "deselect" | "update:selectedKeys" | "update:activeKey", ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<{
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
            mode: import("./src/interface").MenuMode;
            inlineIndent: number;
            inlineCollapsed: boolean;
            subMenuOpenDelay: number;
            subMenuCloseDelay: number;
            triggerSubMenuAction: import("./src/interface").TriggerSubMenuAction;
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
        }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("click" | "select" | "update:openKeys" | "openChange" | "deselect" | "update:selectedKeys" | "update:activeKey")[], string, {
            multiple: boolean;
            disabled: boolean;
            mode: import("./src/interface").MenuMode;
            inlineIndent: number;
            inlineCollapsed: boolean;
            subMenuOpenDelay: number;
            subMenuCloseDelay: number;
            triggerSubMenuAction: import("./src/interface").TriggerSubMenuAction;
            disabledOverflow: boolean;
            selectable: boolean;
            theme: MenuTheme;
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
        mode: import("./src/interface").MenuMode;
        inlineIndent: number;
        inlineCollapsed: boolean;
        subMenuOpenDelay: number;
        subMenuCloseDelay: number;
        triggerSubMenuAction: import("./src/interface").TriggerSubMenuAction;
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
    } & import("vue").ShallowUnwrapRef<() => JSX.Element> & {} & {} & import("vue").ComponentCustomProperties;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<{
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
    mode: import("./src/interface").MenuMode;
    inlineIndent: number;
    inlineCollapsed: boolean;
    subMenuOpenDelay: number;
    subMenuCloseDelay: number;
    triggerSubMenuAction: import("./src/interface").TriggerSubMenuAction;
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
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("click" | "select" | "update:openKeys" | "openChange" | "deselect" | "update:selectedKeys" | "update:activeKey")[], "select" | "click" | "update:openKeys" | "openChange" | "deselect" | "update:selectedKeys" | "update:activeKey", {
    multiple: boolean;
    disabled: boolean;
    mode: import("./src/interface").MenuMode;
    inlineIndent: number;
    inlineCollapsed: boolean;
    subMenuOpenDelay: number;
    subMenuCloseDelay: number;
    triggerSubMenuAction: import("./src/interface").TriggerSubMenuAction;
    disabledOverflow: boolean;
    selectable: boolean;
    theme: MenuTheme;
}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Plugin & {
    readonly Item: typeof MenuItem;
    readonly SubMenu: typeof SubMenu;
    readonly Divider: typeof Divider;
    readonly ItemGroup: typeof ItemGroup;
};
export default _default;
