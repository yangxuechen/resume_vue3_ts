import type { ComputedRef, PropType } from 'vue';
import type { Key } from '../_util/type';
export interface OverflowContextProviderValueType {
    prefixCls: string;
    responsive: boolean;
    order: number;
    registerSize: (key: Key, width: number | null) => void;
    display: boolean;
    invalidate: boolean;
    item?: any;
    itemKey?: Key;
    className?: string;
}
export declare const OverflowContextProvider: import("vue").DefineComponent<{
    value: {
        type: PropType<OverflowContextProviderValueType>;
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>[], unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    value?: unknown;
} & {} & {
    value?: OverflowContextProviderValueType;
}>, {}>;
export declare const useInjectOverflowContext: () => ComputedRef<OverflowContextProviderValueType | null>;
