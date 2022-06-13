export default Notification;
declare const Notification: import("vue").DefineComponent<{
    prefixCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    transitionName: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    animation: import("vue-types").VueTypeDef<string | {
        [key: string]: any;
    }> & {
        default: string | (() => {
            [key: string]: any;
        });
    };
    maxCount: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
    closeIcon: import("vue-types").VueTypeValidableDef<any>;
}, any, {
    notices: any[];
}, {}, {
    getTransitionName(): string;
    add(notice: any): void;
    remove(key: any): void;
}, {
    methods: {
        setState(state: {}, callback: any): void;
        __emit(...args: any[]): void;
    };
}, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    prefixCls?: unknown;
    transitionName?: unknown;
    animation?: unknown;
    maxCount?: unknown;
    closeIcon?: unknown;
} & {
    prefixCls: string;
    maxCount: number;
    animation: string | {
        [key: string]: any;
    };
    transitionName: string;
} & {
    closeIcon?: any;
}>, {
    prefixCls: string;
    maxCount: number;
    animation: string | {
        [key: string]: any;
    };
    transitionName: string;
}>;
