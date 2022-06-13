import { toType, toValidableType, validateType, fromType } from './utils';
import { VueTypesDefaults, ExtendProps, VueTypeDef, VueTypeValidableDef, VueTypeShape, VueTypeLooseShape } from './types';
import { PropOptions } from './types';
import { any, func, bool, string, number, array, integer, symbol, object } from './validators/native';
import custom from './validators/custom';
import oneOf from './validators/oneof';
import oneOfType from './validators/oneoftype';
import arrayOf from './validators/arrayof';
import instanceOf from './validators/instanceof';
import objectOf from './validators/objectof';
import shape from './validators/shape';
declare function createTypes(defs?: Partial<VueTypesDefaults>): {
    new (): {};
    defaults: Partial<VueTypesDefaults>;
    sensibleDefaults: boolean | Partial<VueTypesDefaults>;
    readonly any: VueTypeValidableDef<any>;
    readonly func: VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    readonly bool: VueTypeValidableDef<boolean> & {
        default: boolean;
    };
    readonly string: VueTypeValidableDef<string> & {
        default: string;
    };
    readonly number: VueTypeValidableDef<number> & {
        default: number;
    };
    readonly array: VueTypeValidableDef<unknown[]> & {
        default: () => unknown[];
    };
    readonly object: VueTypeValidableDef<{
        [key: string]: any;
    }> & {
        default: () => {
            [key: string]: any;
        };
    };
    readonly integer: VueTypeDef<number> & {
        default: number;
    };
    readonly symbol: VueTypeDef<symbol>;
    readonly custom: typeof custom;
    readonly oneOf: typeof oneOf;
    readonly instanceOf: typeof instanceOf;
    readonly oneOfType: typeof oneOfType;
    readonly arrayOf: typeof arrayOf;
    readonly objectOf: typeof objectOf;
    readonly shape: typeof shape;
    extend<T>(props: ExtendProps<any> | ExtendProps<any>[]): T;
    utils: {
        validate<T_1, U>(value: T_1, type: U): boolean;
        toType<T_2 = unknown>(name: string, obj: PropOptions<T_2, T_2>, validable?: boolean): VueTypeDef<T_2> | VueTypeValidableDef<T_2>;
    };
};
declare const VueTypes_base: {
    new (): {};
    defaults: Partial<VueTypesDefaults>;
    sensibleDefaults: boolean | Partial<VueTypesDefaults>;
    readonly any: VueTypeValidableDef<any>;
    readonly func: VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    readonly bool: VueTypeValidableDef<boolean> & {
        default: boolean;
    };
    readonly string: VueTypeValidableDef<string> & {
        default: string;
    };
    readonly number: VueTypeValidableDef<number> & {
        default: number;
    };
    readonly array: VueTypeValidableDef<unknown[]> & {
        default: () => unknown[];
    };
    readonly object: VueTypeValidableDef<{
        [key: string]: any;
    }> & {
        default: () => {
            [key: string]: any;
        };
    };
    readonly integer: VueTypeDef<number> & {
        default: number;
    };
    readonly symbol: VueTypeDef<symbol>;
    readonly custom: typeof custom;
    readonly oneOf: typeof oneOf;
    readonly instanceOf: typeof instanceOf;
    readonly oneOfType: typeof oneOfType;
    readonly arrayOf: typeof arrayOf;
    readonly objectOf: typeof objectOf;
    readonly shape: typeof shape;
    extend<T>(props: ExtendProps<any> | ExtendProps<any>[]): T;
    utils: {
        validate<T_1, U>(value: T_1, type: U): boolean;
        toType<T_2 = unknown>(name: string, obj: PropOptions<T_2, T_2>, validable?: boolean): VueTypeDef<T_2> | VueTypeValidableDef<T_2>;
    };
};
export default class VueTypes extends VueTypes_base {
}
export { any, func, bool, string, number, array, integer, symbol, object, custom, oneOf, oneOfType, arrayOf, instanceOf, objectOf, shape, createTypes, toType, toValidableType, validateType, fromType, };
export declare type VueTypesInterface = ReturnType<typeof createTypes>;
export { VueTypeDef, VueTypeValidableDef, VueTypeShape, VueTypeLooseShape };
