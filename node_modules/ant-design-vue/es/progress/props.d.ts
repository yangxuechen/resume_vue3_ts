export declare const ProgressStatuses: ["normal", "exception", "active", "success"];
export declare const ProgressType: import("vue-types").VueTypeDef<"circle" | "line" | "dashboard">;
export declare const ProgressSize: import("vue-types").VueTypeDef<"default" | "small">;
export declare const ProgressProps: {
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
