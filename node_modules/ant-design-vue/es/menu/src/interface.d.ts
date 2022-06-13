import type { Key } from '../../_util/type';
import type { MenuItemProps } from './MenuItem';
export declare type MenuTheme = 'light' | 'dark';
export declare type MenuMode = 'horizontal' | 'vertical' | 'inline';
export declare type BuiltinPlacements = Record<string, any>;
export declare type TriggerSubMenuAction = 'click' | 'hover';
export interface RenderIconInfo {
    isSelected?: boolean;
    isOpen?: boolean;
    isSubMenu?: boolean;
    disabled?: boolean;
}
export declare type RenderIconType = (props: RenderIconInfo) => any;
export interface MenuInfo {
    key: Key;
    eventKey: string;
    keyPath?: Key[];
    eventKeyPath: string[];
    domEvent: MouseEvent | KeyboardEvent;
    item: MenuItemProps & {
        [key: string]: any;
    };
}
export interface MenuTitleInfo {
    key: Key;
    domEvent: MouseEvent | KeyboardEvent;
}
export declare type MenuHoverEventHandler = (info: {
    key: Key;
    domEvent: MouseEvent;
}) => void;
export interface SelectInfo extends MenuInfo {
    selectedKeys: Key[];
}
export declare type SelectEventHandler = (info: SelectInfo) => void;
export declare type MenuClickEventHandler = (info: MenuInfo) => void;
