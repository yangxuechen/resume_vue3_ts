import type { PropType } from 'vue';
import type { MenuMode } from './interface';
declare const _default: import("vue").DefineComponent<{
    prefixCls: StringConstructor;
    mode: PropType<MenuMode>;
    visible: BooleanConstructor;
    popupClassName: StringConstructor;
    popupOffset: PropType<number[]>;
    disabled: BooleanConstructor;
    onVisibleChange: PropType<(visible: boolean) => void>;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "visibleChange"[], "visibleChange", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    prefixCls?: unknown;
    mode?: unknown;
    visible?: unknown;
    popupClassName?: unknown;
    popupOffset?: unknown;
    disabled?: unknown;
    onVisibleChange?: unknown;
} & {
    visible: boolean;
    disabled: boolean;
} & {
    prefixCls?: string;
    mode?: MenuMode;
    onVisibleChange?: (visible: boolean) => void;
    popupClassName?: string;
    popupOffset?: number[];
}> & {
    onVisibleChange?: (...args: any[]) => any;
}, {
    visible: boolean;
    disabled: boolean;
}>;
export default _default;
