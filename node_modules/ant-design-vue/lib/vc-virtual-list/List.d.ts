import type { PropType, Component, CSSProperties } from 'vue';
import type { Key } from '../_util/type';
export interface ListState {
    scrollTop: number;
    scrollMoving: boolean;
}
declare const List: import("vue").DefineComponent<{
    prefixCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    data: import("vue-types").VueTypeValidableDef<unknown[]> & {
        default: () => unknown[];
    };
    height: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
    itemHeight: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
    /** If not match virtual scroll condition, Set List still use height of container. */
    fullHeight: import("vue-types").VueTypeValidableDef<boolean>;
    itemKey: {
        type: PropType<Key | ((item: object) => Key)>;
        required: true;
    };
    component: {
        type: PropType<string | Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>>;
    };
    /** Set `false` will always use real scroll instead of virtual one */
    virtual: import("vue-types").VueTypeValidableDef<boolean>;
    children: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    onScroll: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    onMousedown: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    onMouseenter: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
}, {
    state: {
        scrollTop: number;
        scrollMoving: boolean;
    };
    mergedData: import("vue").ComputedRef<any[]>;
    componentStyle: import("vue").ComputedRef<CSSProperties>;
    scrollTo: (arg?: any) => void;
    onFallbackScroll: (e: UIEvent) => void;
    onScrollBar: (newScrollTop: number) => void;
    componentRef: import("vue").Ref<HTMLDivElement>;
    useVirtual: import("vue").ComputedRef<boolean>;
    calRes: import("vue").Ref<{
        scrollHeight?: number;
        start?: number;
        end?: number;
        offset?: number;
    }>;
    collectHeight: () => void;
    setInstance: (item: Record<string, any>, instance: HTMLElement) => void;
    sharedConfig: {
        getKey: (item: Record<string, any>) => any;
    };
    scrollBarRef: import("vue").Ref<any>;
    fillerInnerRef: import("vue").Ref<HTMLDivElement>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    prefixCls?: unknown;
    data?: unknown;
    height?: unknown;
    itemHeight?: unknown;
    fullHeight?: unknown;
    itemKey?: unknown;
    component?: unknown;
    virtual?: unknown;
    children?: unknown;
    onScroll?: unknown;
    onMousedown?: unknown;
    onMouseenter?: unknown;
} & {
    prefixCls: string;
    data: unknown[];
    height: number;
    itemHeight: number;
    itemKey: Key | ((item: object) => Key);
} & {
    children?: (...args: any[]) => any;
    virtual?: boolean;
    onMousedown?: (...args: any[]) => any;
    onMouseenter?: (...args: any[]) => any;
    onScroll?: (...args: any[]) => any;
    fullHeight?: boolean;
    component?: unknown;
}>, {
    children: (...args: any[]) => any;
    prefixCls: string;
    data: unknown[];
    onMousedown: (...args: any[]) => any;
    onMouseenter: (...args: any[]) => any;
    onScroll: (...args: any[]) => any;
    height: number;
    itemHeight: number;
}>;
export default List;
