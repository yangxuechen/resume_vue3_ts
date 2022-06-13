export default function _default(): {
    name: string;
    inheritAttrs: boolean;
    mixins: {
        methods: {
            setState(state: {}, callback: any): void;
            __emit(...args: any[]): void;
        };
    }[];
    props: any;
    setup(): {
        vcTreeSelect: {};
    };
    created(): void;
    methods: {
        onFocus(e: any): void;
        onBlur(e: any): void;
        focus(): void;
        blur(): void;
        renderClear(): JSX.Element;
        renderArrow(): JSX.Element;
    };
    render(): JSX.Element;
};
export function selectorPropTypes(): {
    prefixCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    open: import("vue-types").VueTypeValidableDef<boolean>;
    selectorValueList: import("vue-types").VueTypeValidableDef<unknown[]> & {
        default: () => unknown[];
    };
    allowClear: import("vue-types").VueTypeValidableDef<boolean>;
    showArrow: import("vue-types").VueTypeValidableDef<boolean>;
    removeSelected: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    choiceTransitionName: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    ariaId: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    inputIcon: import("vue-types").VueTypeValidableDef<any>;
    clearIcon: import("vue-types").VueTypeValidableDef<any>;
    removeIcon: import("vue-types").VueTypeValidableDef<any>;
    placeholder: import("vue-types").VueTypeValidableDef<any>;
    disabled: import("vue-types").VueTypeValidableDef<boolean>;
    focused: import("vue-types").VueTypeValidableDef<boolean>;
    isMultiple: import("vue-types").VueTypeValidableDef<boolean>;
    showSearch: import("vue-types").VueTypeValidableDef<boolean>;
    searchValue: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
};
