import type { PropType } from 'vue';
import type { Key, VueNode } from '../_util/type';
declare const _default: import("vue").DefineComponent<{
    prefixCls: StringConstructor;
    item: import("vue-types").VueTypeValidableDef<any>;
    renderItem: PropType<(item: any) => VueNode>;
    responsive: BooleanConstructor;
    itemKey: {
        type: PropType<string | number>;
    };
    registerSize: PropType<(key: Key, width: number | null) => void>;
    display: BooleanConstructor;
    order: NumberConstructor;
    component: import("vue-types").VueTypeValidableDef<any>;
    invalidate: BooleanConstructor;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    prefixCls?: unknown;
    item?: unknown;
    renderItem?: unknown;
    responsive?: unknown;
    itemKey?: unknown;
    registerSize?: unknown;
    display?: unknown;
    order?: unknown;
    component?: unknown;
    invalidate?: unknown;
} & {
    responsive: boolean;
    display: boolean;
    invalidate: boolean;
} & {
    item?: any;
    prefixCls?: string;
    itemKey?: string | number;
    component?: any;
    renderItem?: (item: any) => VueNode;
    registerSize?: (key: Key, width: number | null) => void;
    order?: number;
}>, {
    responsive: boolean;
    display: boolean;
    invalidate: boolean;
}>;
export default _default;
