declare var _default: import("vue").DefineComponent<{
    getContainer: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    } & {
        required: true;
    };
    children: import("vue-types").VueTypeValidableDef<any> & {
        required: true;
    };
    didUpdate: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
}, any, {}, {}, {
    createContainer(): void;
    removeContainer(): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    getContainer?: unknown;
    children?: unknown;
    didUpdate?: unknown;
} & {
    children: any;
} & {
    getContainer?: (...args: any[]) => any;
    didUpdate?: (...args: any[]) => any;
}>, {
    getContainer: (...args: any[]) => any;
    didUpdate: (...args: any[]) => any;
}>;
export default _default;
