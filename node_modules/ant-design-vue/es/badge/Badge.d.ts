import type { ExtractPropTypes, CSSProperties } from 'vue';
export declare const badgeProps: {
    /** Number to show in badge */
    count: import("vue-types").VueTypeValidableDef<any>;
    showZero: import("vue-types").VueTypeValidableDef<boolean>;
    /** Max count to show */
    overflowCount: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    } & {
        default: number;
    };
    /** whether to show red dot without number */
    dot: import("vue-types").VueTypeValidableDef<boolean>;
    prefixCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    scrollNumberPrefixCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    status: import("vue-types").VueTypeDef<"default" | "error" | "success" | "warning" | "processing">;
    size: import("vue-types").VueTypeDef<"default" | "small"> & {
        default: "default" | "small";
    };
    color: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    text: import("vue-types").VueTypeValidableDef<import("../_util/type").VueNode>;
    offset: import("vue-types").VueTypeDef<(string | number)[]>;
    numberStyle: import("vue-types").VueTypeValidableDef<CSSProperties>;
    title: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
};
export declare type BadgeProps = Partial<ExtractPropTypes<typeof badgeProps>>;
declare const _default: import("vue").DefineComponent<{
    /** Number to show in badge */
    count: import("vue-types").VueTypeValidableDef<any>;
    showZero: import("vue-types").VueTypeValidableDef<boolean>;
    /** Max count to show */
    overflowCount: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    } & {
        default: number;
    };
    /** whether to show red dot without number */
    dot: import("vue-types").VueTypeValidableDef<boolean>;
    prefixCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    scrollNumberPrefixCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    status: import("vue-types").VueTypeDef<"default" | "error" | "success" | "warning" | "processing">;
    size: import("vue-types").VueTypeDef<"default" | "small"> & {
        default: "default" | "small";
    };
    color: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    text: import("vue-types").VueTypeValidableDef<import("../_util/type").VueNode>;
    offset: import("vue-types").VueTypeDef<(string | number)[]>;
    numberStyle: import("vue-types").VueTypeValidableDef<CSSProperties>;
    title: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    count?: unknown;
    showZero?: unknown;
    overflowCount?: unknown;
    dot?: unknown;
    prefixCls?: unknown;
    scrollNumberPrefixCls?: unknown;
    status?: unknown;
    size?: unknown;
    color?: unknown;
    text?: unknown;
    offset?: unknown;
    numberStyle?: unknown;
    title?: unknown;
} & {
    prefixCls: string;
    title: string;
    color: string;
    size: "default" | "small";
    overflowCount: number;
    scrollNumberPrefixCls: string;
} & {
    text?: import("../_util/type").VueNode;
    dot?: boolean;
    offset?: (string | number)[];
    count?: any;
    status?: "default" | "error" | "success" | "warning" | "processing";
    showZero?: boolean;
    numberStyle?: CSSProperties;
}>, {
    prefixCls: string;
    title: string;
    color: string;
    size: "default" | "small";
    overflowCount: number;
    scrollNumberPrefixCls: string;
}>;
export default _default;
