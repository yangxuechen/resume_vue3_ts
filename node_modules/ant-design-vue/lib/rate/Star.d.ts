import type { ExtractPropTypes } from 'vue';
export declare const starProps: {
    value: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
    index: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
    prefixCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    allowHalf: import("vue-types").VueTypeValidableDef<boolean>;
    disabled: import("vue-types").VueTypeValidableDef<boolean>;
    character: import("vue-types").VueTypeValidableDef<any>;
    characterRender: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    focused: import("vue-types").VueTypeValidableDef<boolean>;
    count: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
    onClick: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    onHover: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
};
export declare type StarProps = Partial<ExtractPropTypes<typeof starProps>>;
declare const _default: import("vue").DefineComponent<{
    value: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
    index: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
    prefixCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    allowHalf: import("vue-types").VueTypeValidableDef<boolean>;
    disabled: import("vue-types").VueTypeValidableDef<boolean>;
    character: import("vue-types").VueTypeValidableDef<any>;
    characterRender: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    focused: import("vue-types").VueTypeValidableDef<boolean>;
    count: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
    onClick: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    onHover: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("click" | "hover")[], "click" | "hover", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    value?: unknown;
    index?: unknown;
    prefixCls?: unknown;
    allowHalf?: unknown;
    disabled?: unknown;
    character?: unknown;
    characterRender?: unknown;
    focused?: unknown;
    count?: unknown;
    onClick?: unknown;
    onHover?: unknown;
} & {
    value: number;
    prefixCls: string;
    count: number;
    index: number;
} & {
    onClick?: (...args: any[]) => any;
    disabled?: boolean;
    focused?: boolean;
    character?: any;
    characterRender?: (...args: any[]) => any;
    allowHalf?: boolean;
    onHover?: (...args: any[]) => any;
}> & {
    onClick?: (...args: any[]) => any;
    onHover?: (...args: any[]) => any;
}, {
    value: number;
    prefixCls: string;
    onClick: (...args: any[]) => any;
    count: number;
    index: number;
    characterRender: (...args: any[]) => any;
    onHover: (...args: any[]) => any;
}>;
export default _default;
