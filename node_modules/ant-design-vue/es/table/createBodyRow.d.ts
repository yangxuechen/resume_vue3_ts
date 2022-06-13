export default function createBodyRow(Component?: string): import("vue").DefineComponent<{
    store: import("vue-types").VueTypeValidableDef<{
        [key: string]: any;
    }> & {
        default: () => {
            [key: string]: any;
        };
    };
    rowKey: import("vue-types").VueTypeDef<string | number>;
    prefixCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
}, {
    selected: import("vue").ComputedRef<boolean>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    store?: unknown;
    rowKey?: unknown;
    prefixCls?: unknown;
} & {
    prefixCls: string;
    store: {
        [key: string]: any;
    };
} & {
    rowKey?: string | number;
}>, {
    prefixCls: string;
    store: {
        [key: string]: any;
    };
}>;
