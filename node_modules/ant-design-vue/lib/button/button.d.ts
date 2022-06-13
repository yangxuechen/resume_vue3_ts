declare const _default: import("vue").DefineComponent<{
    prefixCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    type: import("vue-types").VueTypeDef<"default" | "link" | "text" | "dashed" | "ghost" | "primary">;
    htmlType: import("vue-types").VueTypeDef<"reset" | "button" | "submit"> & {
        default: "reset" | "button" | "submit";
    };
    shape: import("vue-types").VueTypeDef<"circle" | "round">;
    size: {
        type: import("vue").PropType<import(".").ButtonSize>;
    };
    loading: {
        type: import("vue").PropType<boolean | {
            delay?: number;
        }>;
        default: () => boolean | {
            delay?: number;
        };
    };
    disabled: import("vue-types").VueTypeValidableDef<boolean>;
    ghost: import("vue-types").VueTypeValidableDef<boolean>;
    block: import("vue-types").VueTypeValidableDef<boolean>;
    danger: import("vue-types").VueTypeValidableDef<boolean>;
    icon: import("vue-types").VueTypeValidableDef<import("../_util/type").VueNode>;
    href: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    target: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    title: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    onClick: {
        type: import("vue").PropType<(event: MouseEvent) => void>;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "click"[], "click", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    prefixCls?: unknown;
    type?: unknown;
    htmlType?: unknown;
    shape?: unknown;
    size?: unknown;
    loading?: unknown;
    disabled?: unknown;
    ghost?: unknown;
    block?: unknown;
    danger?: unknown;
    icon?: unknown;
    href?: unknown;
    target?: unknown;
    title?: unknown;
    onClick?: unknown;
} & {
    prefixCls: string;
    title: string;
    target: string;
    loading: boolean | {
        delay?: number;
    };
    href: string;
    htmlType: "reset" | "button" | "submit";
} & {
    icon?: import("../_util/type").VueNode;
    type?: "default" | "link" | "text" | "dashed" | "ghost" | "primary";
    onClick?: (event: MouseEvent) => void;
    size?: import(".").ButtonSize;
    block?: boolean;
    disabled?: boolean;
    ghost?: boolean;
    danger?: boolean;
    shape?: "circle" | "round";
}> & {
    onClick?: (...args: any[]) => any;
}, {
    prefixCls: string;
    title: string;
    target: string;
    loading: boolean | {
        delay?: number;
    };
    href: string;
    htmlType: "reset" | "button" | "submit";
}>;
export default _default;
