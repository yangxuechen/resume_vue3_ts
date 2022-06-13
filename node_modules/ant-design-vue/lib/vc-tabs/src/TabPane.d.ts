declare var _default: import("vue").DefineComponent<{
    active: import("vue-types").VueTypeValidableDef<boolean>;
    destroyInactiveTabPane: import("vue-types").VueTypeValidableDef<boolean>;
    forceRender: import("vue-types").VueTypeValidableDef<boolean>;
    placeholder: import("vue-types").VueTypeValidableDef<any>;
    rootPrefixCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    tab: import("vue-types").VueTypeValidableDef<any>;
    closable: import("vue-types").VueTypeValidableDef<boolean>;
    disabled: import("vue-types").VueTypeValidableDef<boolean>;
}, {
    isActived: any;
    sentinelContext: {};
}, any, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    active?: unknown;
    destroyInactiveTabPane?: unknown;
    forceRender?: unknown;
    placeholder?: unknown;
    rootPrefixCls?: unknown;
    tab?: unknown;
    closable?: unknown;
    disabled?: unknown;
} & {
    rootPrefixCls: string;
} & {
    tab?: any;
    active?: boolean;
    disabled?: boolean;
    placeholder?: any;
    forceRender?: boolean;
    closable?: boolean;
    destroyInactiveTabPane?: boolean;
}>, {
    rootPrefixCls: string;
}>;
export default _default;
