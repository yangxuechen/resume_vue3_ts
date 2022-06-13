export default MonthCalendar;
declare const MonthCalendar: import("vue").DefineComponent<{
    locale: import("vue-types").VueTypeValidableDef<{
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
    format: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    visible: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
    prefixCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    monthCellRender: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    value: import("vue-types").VueTypeValidableDef<{
        [key: string]: any;
    }> & {
        default: () => {
            [key: string]: any;
        };
    };
    defaultValue: import("vue-types").VueTypeValidableDef<{
        [key: string]: any;
    }> & {
        default: () => {
            [key: string]: any;
        };
    };
    selectedValue: import("vue-types").VueTypeValidableDef<{
        [key: string]: any;
    }> & {
        default: () => {
            [key: string]: any;
        };
    };
    defaultSelectedValue: import("vue-types").VueTypeValidableDef<{
        [key: string]: any;
    }> & {
        default: () => {
            [key: string]: any;
        };
    };
    disabledDate: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    monthCellContentRender: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    renderFooter: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    } & {
        default: (...args: any[]) => any;
    };
    renderSidebar: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    } & {
        default: (...args: any[]) => any;
    };
}, any, {
    mode: string;
    sValue: {
        [key: string]: any;
    };
    sSelectedValue: {
        [key: string]: any;
    };
}, {}, {
    onKeyDown(event: any): 1;
    handlePanelChange(_: any, mode: any): void;
}, {
    methods: {
        setState(state: {}, callback: any): void;
        __emit(...args: any[]): void;
    };
} | {
    methods: {
        getFormat(): any;
        focus(): void;
        saveFocusElement(focusElement: any): void;
        saveRoot(root: any): void;
    };
} | {
    mixins: {
        methods: {
            setState(state: {}, callback: any): void;
            __emit(...args: any[]): void;
        };
    }[];
    inheritAttrs: boolean;
    name: string;
    props: {
        value: import("vue-types").VueTypeDef<any>;
        defaultValue: import("vue-types").VueTypeDef<any>;
    };
    data(): {
        sValue: any;
        sSelectedValue: any;
    };
    watch: {
        value(val: any): void;
        selectedValue(val: any): void;
    };
    methods: {
        onSelect(value: any, cause: any): void;
        renderRoot(newProps: any): JSX.Element;
        setSelectedValue(selectedValue: any, cause: any): void;
        setValue(value: any): void;
        isAllowedDate(value: any): boolean;
    };
}, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    locale?: unknown;
    format?: unknown;
    visible?: unknown;
    prefixCls?: unknown;
    monthCellRender?: unknown;
    value?: unknown;
    defaultValue?: unknown;
    selectedValue?: unknown;
    defaultSelectedValue?: unknown;
    disabledDate?: unknown;
    monthCellContentRender?: unknown;
    renderFooter?: unknown;
    renderSidebar?: unknown;
} & {
    value: {
        [key: string]: any;
    };
    locale: {
        [key: string]: any;
    };
    format: string;
    prefixCls: string;
    visible: boolean;
    defaultValue: {
        [key: string]: any;
    };
    selectedValue: {
        [key: string]: any;
    };
    defaultSelectedValue: {
        [key: string]: any;
    };
} & {
    monthCellRender?: (...args: any[]) => any;
    disabledDate?: (...args: any[]) => any;
    renderFooter?: (...args: any[]) => any;
    renderSidebar?: (...args: any[]) => any;
    monthCellContentRender?: (...args: any[]) => any;
}>, {
    value: {
        [key: string]: any;
    };
    locale: {
        [key: string]: any;
    };
    format: string;
    prefixCls: string;
    visible: boolean;
    defaultValue: {
        [key: string]: any;
    };
    monthCellRender: (...args: any[]) => any;
    disabledDate: (...args: any[]) => any;
    selectedValue: {
        [key: string]: any;
    };
    defaultSelectedValue: {
        [key: string]: any;
    };
    renderFooter: (...args: any[]) => any;
    renderSidebar: (...args: any[]) => any;
    monthCellContentRender: (...args: any[]) => any;
}>;
