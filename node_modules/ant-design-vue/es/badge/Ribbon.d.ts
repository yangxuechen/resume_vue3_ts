import type { LiteralUnion } from '../_util/type';
import type { PropType, ExtractPropTypes } from 'vue';
declare const ribbonProps: {
    prefix: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    color: {
        type: PropType<LiteralUnion<"blue" | "cyan" | "gold" | "green" | "lime" | "magenta" | "orange" | "pink" | "purple" | "red" | "yellow" | "geekblue" | "volcano", string>>;
    };
    text: import("vue-types").VueTypeValidableDef<any>;
    placement: import("vue-types").VueTypeDef<"end" | "start"> & {
        default: "end" | "start";
    };
};
export declare type RibbonProps = Partial<ExtractPropTypes<typeof ribbonProps>>;
declare const _default: import("vue").DefineComponent<{
    prefix: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    color: {
        type: PropType<LiteralUnion<"blue" | "cyan" | "gold" | "green" | "lime" | "magenta" | "orange" | "pink" | "purple" | "red" | "yellow" | "geekblue" | "volcano", string>>;
    };
    text: import("vue-types").VueTypeValidableDef<any>;
    placement: import("vue-types").VueTypeDef<"end" | "start"> & {
        default: "end" | "start";
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    prefix?: unknown;
    color?: unknown;
    text?: unknown;
    placement?: unknown;
} & {
    placement: "end" | "start";
    prefix: string;
} & {
    text?: any;
    color?: LiteralUnion<"blue" | "cyan" | "gold" | "green" | "lime" | "magenta" | "orange" | "pink" | "purple" | "red" | "yellow" | "geekblue" | "volcano", string>;
}>, {
    placement: "end" | "start";
    prefix: string;
}>;
export default _default;
