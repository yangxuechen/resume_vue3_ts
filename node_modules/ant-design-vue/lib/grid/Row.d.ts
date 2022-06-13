import type { ExtractPropTypes } from 'vue';
import type { Breakpoint } from '../_util/responsiveObserve';
export declare type Gutter = number | Partial<Record<Breakpoint, number>>;
export interface rowContextState {
    gutter?: [number, number];
}
declare const rowProps: {
    type: import("vue-types").VueTypeDef<string>;
    align: import("vue-types").VueTypeDef<"middle" | "stretch" | "bottom" | "top">;
    justify: import("vue-types").VueTypeDef<"space-around" | "space-between" | "center" | "end" | "start">;
    prefixCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    gutter: import("vue-types").VueTypeDef<number | {
        [key: string]: any;
    }> & {
        default: number | (() => {
            [key: string]: any;
        });
    };
    wrap: import("vue-types").VueTypeValidableDef<boolean>;
};
export declare type RowProps = Partial<ExtractPropTypes<typeof rowProps>>;
declare const ARow: import("vue").DefineComponent<{
    type: import("vue-types").VueTypeDef<string>;
    align: import("vue-types").VueTypeDef<"middle" | "stretch" | "bottom" | "top">;
    justify: import("vue-types").VueTypeDef<"space-around" | "space-between" | "center" | "end" | "start">;
    prefixCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    gutter: import("vue-types").VueTypeDef<number | {
        [key: string]: any;
    }> & {
        default: number | (() => {
            [key: string]: any;
        });
    };
    wrap: import("vue-types").VueTypeValidableDef<boolean>;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    type?: unknown;
    align?: unknown;
    justify?: unknown;
    prefixCls?: unknown;
    gutter?: unknown;
    wrap?: unknown;
} & {
    prefixCls: string;
    gutter: number | {
        [key: string]: any;
    };
} & {
    type?: string;
    wrap?: boolean;
    justify?: "space-around" | "space-between" | "center" | "end" | "start";
    align?: "middle" | "stretch" | "bottom" | "top";
}>, {
    prefixCls: string;
    gutter: number | {
        [key: string]: any;
    };
}>;
export default ARow;
