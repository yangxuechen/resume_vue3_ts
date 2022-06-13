export default FullCalendar;
declare const FullCalendar: import("vue").DefineComponent<{
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
    format: import("vue-types").VueTypeDef<any>;
    visible: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
    prefixCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    defaultType: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    type: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    fullscreen: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
    monthCellRender: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    dateCellRender: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    showTypeSwitch: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
    Select: import("vue-types").VueTypeValidableDef<{
        [key: string]: any;
    }> & {
        default: () => {
            [key: string]: any;
        };
    } & {
        required: true;
    };
    headerComponents: import("vue-types").VueTypeValidableDef<unknown[]> & {
        default: () => unknown[];
    };
    headerComponent: import("vue-types").VueTypeValidableDef<{
        [key: string]: any;
    }> & {
        default: () => {
            [key: string]: any;
        };
    };
    headerRender: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    showHeader: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
    disabledDate: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
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
    sType: string;
    sValue: {
        [key: string]: any;
    };
    sSelectedValue: {
        [key: string]: any;
    };
}, {}, {
    onMonthSelect(value: any): void;
    setType(type: any): void;
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
    defaultType?: unknown;
    type?: unknown;
    fullscreen?: unknown;
    monthCellRender?: unknown;
    dateCellRender?: unknown;
    showTypeSwitch?: unknown;
    Select?: unknown;
    headerComponents?: unknown;
    headerComponent?: unknown;
    headerRender?: unknown;
    showHeader?: unknown;
    disabledDate?: unknown;
    value?: unknown;
    defaultValue?: unknown;
    selectedValue?: unknown;
    defaultSelectedValue?: unknown;
    renderFooter?: unknown;
    renderSidebar?: unknown;
} & {
    value: {
        [key: string]: any;
    };
    type: string;
    locale: {
        [key: string]: any;
    };
    Select: {
        [key: string]: any;
    };
    prefixCls: string;
    visible: boolean;
    defaultValue: {
        [key: string]: any;
    };
    showHeader: boolean;
    fullscreen: boolean;
    defaultType: string;
    showTypeSwitch: boolean;
    headerComponents: unknown[];
    headerComponent: {
        [key: string]: any;
    };
    selectedValue: {
        [key: string]: any;
    };
    defaultSelectedValue: {
        [key: string]: any;
    };
} & {
    format?: any;
    headerRender?: (...args: any[]) => any;
    monthCellRender?: (...args: any[]) => any;
    dateCellRender?: (...args: any[]) => any;
    disabledDate?: (...args: any[]) => any;
    renderFooter?: (...args: any[]) => any;
    renderSidebar?: (...args: any[]) => any;
}>, {
    value: {
        [key: string]: any;
    };
    type: string;
    locale: {
        [key: string]: any;
    };
    Select: {
        [key: string]: any;
    };
    prefixCls: string;
    visible: boolean;
    defaultValue: {
        [key: string]: any;
    };
    showHeader: boolean;
    fullscreen: boolean;
    headerRender: (...args: any[]) => any;
    monthCellRender: (...args: any[]) => any;
    dateCellRender: (...args: any[]) => any;
    disabledDate: (...args: any[]) => any;
    defaultType: string;
    showTypeSwitch: boolean;
    headerComponents: unknown[];
    headerComponent: {
        [key: string]: any;
    };
    selectedValue: {
        [key: string]: any;
    };
    defaultSelectedValue: {
        [key: string]: any;
    };
    renderFooter: (...args: any[]) => any;
    renderSidebar: (...args: any[]) => any;
}>;
