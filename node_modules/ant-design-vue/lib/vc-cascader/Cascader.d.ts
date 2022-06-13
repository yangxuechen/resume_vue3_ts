declare var _default: import("vue").DefineComponent<{
    value: import("vue-types").VueTypeValidableDef<unknown[]> & {
        default: () => unknown[];
    };
    defaultValue: import("vue-types").VueTypeValidableDef<unknown[]> & {
        default: () => unknown[];
    };
    options: import("vue-types").VueTypeValidableDef<unknown[]> & {
        default: () => unknown[];
    };
    popupVisible: import("vue-types").VueTypeValidableDef<boolean>;
    disabled: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
    transitionName: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    popupClassName: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    popupStyle: import("vue-types").VueTypeValidableDef<{
        [key: string]: any;
    }> & {
        default: () => {
            [key: string]: any;
        };
    } & {
        default: () => {
            [key: string]: any;
        };
    };
    popupPlacement: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    prefixCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    dropdownMenuColumnStyle: import("vue-types").VueTypeValidableDef<{
        [key: string]: any;
    }> & {
        default: () => {
            [key: string]: any;
        };
    };
    builtinPlacements: import("vue-types").VueTypeValidableDef<{
        [key: string]: any;
    }> & {
        default: () => {
            [key: string]: any;
        };
    } & {
        default: () => {
            [key: string]: any;
        };
    };
    loadData: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    changeOnSelect: import("vue-types").VueTypeValidableDef<boolean>;
    expandTrigger: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    fieldNames: import("vue-types").VueTypeValidableDef<{
        [key: string]: any;
    }> & {
        default: () => {
            [key: string]: any;
        };
    } & {
        default: () => {
            [key: string]: any;
        };
    };
    expandIcon: import("vue-types").VueTypeValidableDef<any>;
    loadingIcon: import("vue-types").VueTypeValidableDef<any>;
    getPopupContainer: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
}, any, {
    sPopupVisible: boolean;
    sActiveValue: any[];
    sValue: any[];
}, {}, {
    getPopupDOMNode(): any;
    getFieldName(name: any): any;
    getFieldNames(): {
        [key: string]: any;
    };
    getCurrentLevelOptions(): any;
    getActiveOptions(activeValue: any): unknown[];
    setPopupVisible(popupVisible: any): void;
    handleChange(options: any, setProps: any, e: any): void;
    handlePopupVisibleChange(popupVisible: any): void;
    handleMenuSelect(targetOption: any, menuIndex: any, e: any): void;
    handleItemDoubleClick(): void;
    handleKeyDown(e: any): void;
    saveTrigger(node: any): void;
}, {
    methods: {
        setState(state: {}, callback: any): void;
        __emit(...args: any[]): void;
    };
}, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    value?: unknown;
    defaultValue?: unknown;
    options?: unknown;
    popupVisible?: unknown;
    disabled?: unknown;
    transitionName?: unknown;
    popupClassName?: unknown;
    popupStyle?: unknown;
    popupPlacement?: unknown;
    prefixCls?: unknown;
    dropdownMenuColumnStyle?: unknown;
    builtinPlacements?: unknown;
    loadData?: unknown;
    changeOnSelect?: unknown;
    expandTrigger?: unknown;
    fieldNames?: unknown;
    expandIcon?: unknown;
    loadingIcon?: unknown;
    getPopupContainer?: unknown;
} & {
    value: unknown[];
    prefixCls: string;
    disabled: boolean;
    options: unknown[];
    transitionName: string;
    popupStyle: {
        [key: string]: any;
    };
    popupClassName: string;
    popupPlacement: string;
    builtinPlacements: {
        [key: string]: any;
    };
    defaultValue: unknown[];
    expandTrigger: string;
    fieldNames: {
        [key: string]: any;
    };
    dropdownMenuColumnStyle: {
        [key: string]: any;
    };
} & {
    getPopupContainer?: (...args: any[]) => any;
    popupVisible?: boolean;
    expandIcon?: any;
    loadingIcon?: any;
    loadData?: (...args: any[]) => any;
    changeOnSelect?: boolean;
}>, {
    value: unknown[];
    getPopupContainer: (...args: any[]) => any;
    prefixCls: string;
    disabled: boolean;
    options: unknown[];
    transitionName: string;
    popupStyle: {
        [key: string]: any;
    };
    popupClassName: string;
    popupPlacement: string;
    builtinPlacements: {
        [key: string]: any;
    };
    defaultValue: unknown[];
    loadData: (...args: any[]) => any;
    expandTrigger: string;
    fieldNames: {
        [key: string]: any;
    };
    dropdownMenuColumnStyle: {
        [key: string]: any;
    };
}>;
export default _default;
