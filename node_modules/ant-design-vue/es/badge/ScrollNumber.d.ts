import type { ExtractPropTypes, DefineComponent } from 'vue';
export declare const scrollNumberProps: {
    prefixCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    count: import("vue-types").VueTypeValidableDef<any>;
    component: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    title: import("vue-types").VueTypeDef<string | number>;
    show: BooleanConstructor;
};
export declare type ScrollNumberProps = Partial<ExtractPropTypes<typeof scrollNumberProps>>;
declare const _default: DefineComponent<{
    prefixCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    count: import("vue-types").VueTypeValidableDef<any>;
    component: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    title: import("vue-types").VueTypeDef<string | number>;
    show: BooleanConstructor;
}, () => import("vue").VNode<any, any, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    prefixCls?: unknown;
    count?: unknown;
    component?: unknown;
    title?: unknown;
    show?: unknown;
} & {
    prefixCls: string;
    show: boolean;
    component: string;
} & {
    title?: string | number;
    count?: any;
}>, {
    prefixCls: string;
    show: boolean;
    component: string;
}>;
export default _default;
