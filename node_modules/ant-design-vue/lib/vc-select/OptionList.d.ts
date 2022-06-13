import type { VNodeChild } from 'vue';
import type { OptionsType as SelectOptionsType, OptionData, RenderNode, OnActiveValue } from './interface';
import type { RawValueType, FlattenOptionsType } from './interface/generator';
import type { EventHandler } from '../_util/EventInterface';
export interface OptionListProps {
    prefixCls: string;
    id: string;
    options: SelectOptionsType;
    flattenOptions: FlattenOptionsType<SelectOptionsType>;
    height: number;
    itemHeight: number;
    values: Set<RawValueType>;
    multiple: boolean;
    open: boolean;
    defaultActiveFirstOption?: boolean;
    notFoundContent?: VNodeChild;
    menuItemSelectedIcon?: RenderNode;
    childrenAsData: boolean;
    searchValue: string;
    virtual: boolean;
    onSelect: (value: RawValueType, option: {
        selected: boolean;
    }) => void;
    onToggleOpen: (open?: boolean) => void;
    /** Tell Select that some value is now active to make accessibility work */
    onActiveValue: OnActiveValue;
    onScroll: EventHandler;
    /** Tell Select that mouse enter the popup to force re-render */
    onMouseenter?: EventHandler;
}
/**
 * Using virtual list of option display.
 * Will fallback to dom if use customize render.
 */
declare const OptionList: import("vue").DefineComponent<OptionListProps, {
    state?: any;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    prefixCls?: unknown;
    id?: unknown;
    options?: unknown;
    flattenOptions?: unknown;
    height?: unknown;
    itemHeight?: unknown;
    values?: unknown;
    multiple?: unknown;
    open?: unknown;
    defaultActiveFirstOption?: unknown;
    notFoundContent?: unknown;
    menuItemSelectedIcon?: unknown;
    childrenAsData?: unknown;
    searchValue?: unknown;
    virtual?: unknown;
    onSelect?: unknown;
    onToggleOpen?: unknown;
    onActiveValue?: unknown;
    onScroll?: unknown;
    onMouseenter?: unknown;
} & {} & {
    values?: Set<RawValueType>;
    prefixCls?: string;
    virtual?: boolean;
    onMouseenter?: void;
    onSelect?: (value: RawValueType, option: {
        selected: boolean;
    }) => void;
    onScroll?: void;
    multiple?: boolean;
    open?: boolean;
    height?: number;
    itemHeight?: number;
    id?: string;
    options?: OptionData | import("./interface").OptionGroupData;
    flattenOptions?: {
        [name: string]: any;
        key: import("./interface/generator").Key;
        data: OptionData | import("./interface").OptionGroupData;
    };
    defaultActiveFirstOption?: boolean;
    notFoundContent?: VNodeChild;
    menuItemSelectedIcon?: RenderNode;
    childrenAsData?: boolean;
    searchValue?: string;
    onToggleOpen?: void;
    onActiveValue?: OnActiveValue;
}>, {}>;
export default OptionList;
