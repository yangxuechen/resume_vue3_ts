import { VueTypesDefaults } from './types';
export { VueTypeDef, VueTypeValidableDef } from './types';
export declare const any: () => any;
export declare const func: <T = any>() => T;
export declare const bool: () => any;
export declare const string: () => any;
export declare const number: () => any;
export declare const array: <T = any>() => T;
export declare const object: <T = any>() => T;
export declare const symbol: () => any;
export declare const integer: () => any;
export declare const oneOf: <T = any>(a: any) => T;
export declare const custom: <T = any>(a: any) => T;
export declare const instanceOf: <T = any>(Constr: any) => T;
export declare const oneOfType: <T = any>(a: any) => T;
export declare const arrayOf: <T = any>(a: any) => T;
export declare const objectOf: <T = any>(a: any) => T;
export declare const shape: <T = any>(a: any) => any;
export declare function createTypes(defs?: Partial<VueTypesDefaults>): {
    new (): {};
    defaults: {
        func?: (...args: any[]) => any;
        bool?: boolean;
        string?: string;
        number?: number;
        array?: () => any[];
        object?: () => {
            [key: string]: any;
        };
        integer?: number;
    };
    sensibleDefaults: boolean | Partial<VueTypesDefaults>;
    readonly any: any;
    readonly func: any;
    readonly bool: any;
    readonly string: any;
    readonly number: any;
    readonly array: any;
    readonly object: any;
    readonly symbol: any;
    readonly integer: any;
    oneOf: <T = any>(a: any) => T;
    custom: <T_1 = any>(a: any) => T_1;
    instanceOf: <T_2 = any>(Constr: any) => T_2;
    oneOfType: <T_3 = any>(a: any) => T_3;
    arrayOf: <T_4 = any>(a: any) => T_4;
    objectOf: <T_5 = any>(a: any) => T_5;
    shape: <T_6 = any>(a: any) => any;
    extend<T_7 = any>(props: any): T_7;
    utils: {
        toType: (...args: any[]) => any;
        validate: (...args: any[]) => boolean;
    };
};
declare const VueTypes_base: {
    new (): {};
    defaults: {
        func?: (...args: any[]) => any;
        bool?: boolean;
        string?: string;
        number?: number;
        array?: () => any[];
        object?: () => {
            [key: string]: any;
        };
        integer?: number;
    };
    sensibleDefaults: boolean | Partial<VueTypesDefaults>;
    readonly any: any;
    readonly func: any;
    readonly bool: any;
    readonly string: any;
    readonly number: any;
    readonly array: any;
    readonly object: any;
    readonly symbol: any;
    readonly integer: any;
    oneOf: <T = any>(a: any) => T;
    custom: <T_1 = any>(a: any) => T_1;
    instanceOf: <T_2 = any>(Constr: any) => T_2;
    oneOfType: <T_3 = any>(a: any) => T_3;
    arrayOf: <T_4 = any>(a: any) => T_4;
    objectOf: <T_5 = any>(a: any) => T_5;
    shape: <T_6 = any>(a: any) => any;
    extend<T_7 = any>(props: any): T_7;
    utils: {
        toType: (...args: any[]) => any;
        validate: (...args: any[]) => boolean;
    };
};
export default class VueTypes extends VueTypes_base {
}
