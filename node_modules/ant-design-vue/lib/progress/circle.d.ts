import type { ExtractPropTypes } from 'vue';
declare const CircleProps: {
    progressStatus: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    prefixCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    type: import("vue-types").VueTypeDef<"circle" | "line" | "dashboard">;
    percent: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
    successPercent: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
    format: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    status: import("vue-types").VueTypeDef<"normal" | "active" | "success" | "exception">;
    showInfo: import("vue-types").VueTypeValidableDef<boolean>;
    strokeWidth: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
    strokeLinecap: import("vue-types").VueTypeDef<string>;
    strokeColor: import("vue-types").VueTypeDef<string | {
        [key: string]: any;
    }>;
    trailColor: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    width: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
    gapDegree: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
    gapPosition: import("vue-types").VueTypeDef<"left" | "right" | "bottom" | "top">;
    size: import("vue-types").VueTypeDef<"default" | "small">;
};
export declare type ICircleProps = ExtractPropTypes<typeof CircleProps>;
declare const Circle: import("vue").DefineComponent<{
    progressStatus: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    prefixCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    type: import("vue-types").VueTypeDef<"circle" | "line" | "dashboard">;
    percent: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
    successPercent: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
    format: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    status: import("vue-types").VueTypeDef<"normal" | "active" | "success" | "exception">;
    showInfo: import("vue-types").VueTypeValidableDef<boolean>;
    strokeWidth: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
    strokeLinecap: import("vue-types").VueTypeDef<string>;
    strokeColor: import("vue-types").VueTypeDef<string | {
        [key: string]: any;
    }>;
    trailColor: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    width: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
    gapDegree: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
    gapPosition: import("vue-types").VueTypeDef<"left" | "right" | "bottom" | "top">;
    size: import("vue-types").VueTypeDef<"default" | "small">;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    progressStatus?: unknown;
    prefixCls?: unknown;
    type?: unknown;
    percent?: unknown;
    successPercent?: unknown;
    format?: unknown;
    status?: unknown;
    showInfo?: unknown;
    strokeWidth?: unknown;
    strokeLinecap?: unknown;
    strokeColor?: unknown;
    trailColor?: unknown;
    width?: unknown;
    gapDegree?: unknown;
    gapPosition?: unknown;
    size?: unknown;
} & {
    prefixCls: string;
    width: number;
    strokeWidth: number;
    progressStatus: string;
    percent: number;
    successPercent: number;
    trailColor: string;
    gapDegree: number;
} & {
    type?: "circle" | "line" | "dashboard";
    format?: (...args: any[]) => any;
    size?: "default" | "small";
    status?: "normal" | "active" | "success" | "exception";
    strokeLinecap?: string;
    showInfo?: boolean;
    strokeColor?: string | {
        [key: string]: any;
    };
    gapPosition?: "left" | "right" | "bottom" | "top";
}>, {
    format: (...args: any[]) => any;
    prefixCls: string;
    width: number;
    strokeWidth: number;
    progressStatus: string;
    percent: number;
    successPercent: number;
    trailColor: string;
    gapDegree: number;
}>;
export default Circle;
