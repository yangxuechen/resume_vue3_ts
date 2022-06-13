declare const _default: import("vue").DefineComponent<{
    propsSymbol: import("vue-types").VueTypeValidableDef<any>;
    store: import("vue-types").VueTypeValidableDef<any>;
    locale: import("vue-types").VueTypeValidableDef<any>;
    disabled: import("vue-types").VueTypeValidableDef<boolean>;
    getCheckboxPropsByItem: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    getRecordKey: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    data: import("vue-types").VueTypeValidableDef<unknown[]> & {
        default: () => unknown[];
    };
    prefixCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    hideDefaultSelections: import("vue-types").VueTypeValidableDef<boolean>;
    selections: import("vue-types").VueTypeDef<boolean | unknown[]>;
    getPopupContainer: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    onSelect: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
}, {
    defaultSelections: any[];
    checked: import("vue").ComputedRef<any>;
    indeterminate: import("vue").ComputedRef<boolean>;
}, unknown, {}, {
    handleSelectAllChange(e: any): void;
    renderMenus(selections: any): any;
}, {
    methods: {
        setState(state: {}, callback: any): void;
        __emit(...args: any[]): void;
    };
}, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    propsSymbol?: unknown;
    store?: unknown;
    locale?: unknown;
    disabled?: unknown;
    getCheckboxPropsByItem?: unknown;
    getRecordKey?: unknown;
    data?: unknown;
    prefixCls?: unknown;
    hideDefaultSelections?: unknown;
    selections?: unknown;
    getPopupContainer?: unknown;
    onSelect?: unknown;
} & {
    prefixCls: string;
    data: unknown[];
} & {
    locale?: any;
    getPopupContainer?: (...args: any[]) => any;
    onSelect?: (...args: any[]) => any;
    disabled?: boolean;
    selections?: boolean | unknown[];
    hideDefaultSelections?: boolean;
    store?: any;
    getCheckboxPropsByItem?: (...args: any[]) => any;
    getRecordKey?: (...args: any[]) => any;
    propsSymbol?: any;
}>, {
    getPopupContainer: (...args: any[]) => any;
    prefixCls: string;
    data: unknown[];
    onSelect: (...args: any[]) => any;
    getCheckboxPropsByItem: (...args: any[]) => any;
    getRecordKey: (...args: any[]) => any;
}>;
export default _default;
