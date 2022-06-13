declare const _default: import("vue").DefineComponent<{
    store: import("vue-types").VueTypeValidableDef<any>;
    type: import("vue-types").VueTypeDef<"checkbox" | "radio">;
    defaultSelection: import("vue-types").VueTypeValidableDef<unknown[]> & {
        default: () => unknown[];
    };
    rowIndex: import("vue-types").VueTypeDef<string | number>;
    name: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    disabled: import("vue-types").VueTypeValidableDef<boolean>;
    id: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
}, {
    checked: import("vue").ComputedRef<boolean>;
}, unknown, {}, {}, {
    methods: {
        setState(state: {}, callback: any): void;
        __emit(...args: any[]): void;
    };
}, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    store?: unknown;
    type?: unknown;
    defaultSelection?: unknown;
    rowIndex?: unknown;
    name?: unknown;
    disabled?: unknown;
    id?: unknown;
} & {
    name: string;
    id: string;
    defaultSelection: unknown[];
} & {
    type?: "checkbox" | "radio";
    disabled?: boolean;
    store?: any;
    rowIndex?: string | number;
}>, {
    name: string;
    id: string;
    defaultSelection: unknown[];
}>;
export default _default;
