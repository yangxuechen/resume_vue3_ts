export function collapseProps(): {
    prefixCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    activeKey: import("vue-types").VueTypeDef<string | number | (string | number)[]>;
    defaultActiveKey: import("vue-types").VueTypeDef<string | number | (string | number)[]>;
    accordion: import("vue-types").VueTypeValidableDef<boolean>;
    destroyInactivePanel: import("vue-types").VueTypeValidableDef<boolean>;
    bordered: import("vue-types").VueTypeValidableDef<boolean>;
    expandIcon: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    openAnimation: import("vue-types").VueTypeValidableDef<{
        [key: string]: any;
    }> & {
        default: () => {
            [key: string]: any;
        };
    };
    expandIconPosition: import("vue-types").VueTypeDef<string>;
    onChange: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
};
export function panelProps(): {
    openAnimation: import("vue-types").VueTypeValidableDef<{
        [key: string]: any;
    }> & {
        default: () => {
            [key: string]: any;
        };
    };
    prefixCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    header: import("vue-types").VueTypeValidableDef<any>;
    headerClass: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    showArrow: import("vue-types").VueTypeValidableDef<boolean>;
    isActive: import("vue-types").VueTypeValidableDef<boolean>;
    destroyInactivePanel: import("vue-types").VueTypeValidableDef<boolean>;
    disabled: import("vue-types").VueTypeValidableDef<boolean>;
    accordion: import("vue-types").VueTypeValidableDef<boolean>;
    forceRender: import("vue-types").VueTypeValidableDef<boolean>;
    expandIcon: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    extra: import("vue-types").VueTypeValidableDef<any>;
    panelKey: import("vue-types").VueTypeValidableDef<any>;
};
