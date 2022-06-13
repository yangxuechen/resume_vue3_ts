export declare const any: () => import("../types").VueTypeValidableDef<any>;
export declare const func: <T extends (...args: any[]) => any>() => import("../types").VueTypeValidableDef<T>;
export declare const bool: () => import("../types").VueTypeValidableDef<boolean>;
export declare const string: () => import("../types").VueTypeValidableDef<string>;
export declare const number: () => import("../types").VueTypeValidableDef<number>;
export declare const array: <T>() => import("../types").VueTypeValidableDef<T[]>;
export declare const object: <T extends {
    [key: string]: any;
}>() => import("../types").VueTypeValidableDef<T>;
export declare const integer: () => import("../types").VueTypeDef<number>;
export declare const symbol: () => import("../types").VueTypeDef<symbol>;
