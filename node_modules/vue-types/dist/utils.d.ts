import { VueTypeDef, VueTypeValidableDef, VueProp, InferType, PropOptions } from './types';
export declare const hasOwn: (v: string | number | symbol) => boolean;
export declare function getType(fn: VueProp<any> | (() => any) | (new (...args: any[]) => any)): string;
export declare function getNativeType(value: any): string;
declare type PlainObject = {
    [key: string]: any;
};
export declare const isPlainObject: (obj: any) => obj is PlainObject;
/**
 * No-op function
 */
export declare function noop(): void;
/**
 * A function that returns its first argument
 *
 * @param arg - Any argument
 */
export declare const identity: (arg: any) => any;
declare let warn: (msg: string) => string | void;
export { warn };
/**
 * Checks for a own property in an object
 *
 * @param {object} obj - Object
 * @param {string} prop - Property to check
 */
export declare const has: <T extends unknown, U extends keyof T>(obj: T, prop: U) => any;
/**
 * Determines whether the passed value is an integer. Uses `Number.isInteger` if available
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger
 * @param {*} value - The value to be tested for being an integer.
 * @returns {boolean}
 */
export declare const isInteger: (number: unknown) => boolean;
/**
 * Determines whether the passed value is an Array.
 *
 * @param {*} value - The value to be tested for being an array.
 * @returns {boolean}
 */
export declare const isArray: (arg: any) => arg is any[];
/**
 * Checks if a value is a function
 *
 * @param {any} value - Value to check
 * @returns {boolean}
 */
export declare const isFunction: (value: unknown) => value is Function;
/**
 * Checks if the passed-in value is a VueTypes type
 * @param value - The value to check
 */
export declare const isVueTypeDef: <T>(value: any) => value is VueTypeDef<T> | VueTypeValidableDef<T>;
/**
 * Checks if the passed-in value is a Vue prop definition object or a VueTypes type
 * @param value - The value to check
 */
export declare const isComplexType: <T>(value: any) => value is VueProp<T>;
export interface WrappedFn {
    (...args: any[]): any;
    __original: (...args: any[]) => any;
}
/**
 * Binds a function to a context and saves a reference to the original.
 *
 * @param fn - Target function
 * @param ctx - New function context
 */
export declare function bindTo(fn: (...args: any[]) => any, ctx: any): WrappedFn;
/**
 * Returns the original function bounded with `bindTo`. If the passed-in function
 * has not be bound, the function itself will be returned instead.
 *
 * @param fn - Function to unwrap
 */
export declare function unwrap<T extends WrappedFn | Function>(fn: T): ((...args: any[]) => any) | T;
/**
 * Validates a given value against a prop type object.
 *
 * If `silent` is `false` (default) will return a boolean. If it is set to `true`
 * it will return `true` on success or a string error message on failure
 *
 * @param {Object|*} type - Type to use for validation. Either a type object or a constructor
 * @param {*} value - Value to check
 * @param {boolean} silent - Silence warnings
 */
export declare function validateType<T, U>(type: T, value: U, silent?: boolean): string | boolean;
/**
 * Adds `isRequired` and `def` modifiers to an object
 *
 * @param {string} name - Type internal name
 * @param {object} obj - Object to enhance
 */
export declare function toType<T = any>(name: string, obj: PropOptions<T>): VueTypeDef<T>;
/**
 * Like `toType` but also adds the `validate()` method to the type object
 *
 * @param {string} name - Type internal name
 * @param {object} obj - Object to enhance
 */
export declare function toValidableType<T = any>(name: string, obj: PropOptions<T>): VueTypeValidableDef<T>;
/**
 *  Clones an object preserving all of it's own keys.
 *
 * @param obj - Object to clone
 */
export declare function clone<T extends object>(obj: T): T;
/**
 * Return a new VueTypes type using another type as base.
 *
 * Properties in the `props` object will overwrite those defined in the source one
 * expect for the `validator` function. In that case both functions will be executed in series.
 *
 * @param name - Name of the new type
 * @param source - Source type
 * @param props - Custom type properties
 */
export declare function fromType<T extends VueTypeDef<any>>(name: string, source: T): T;
export declare function fromType<T extends VueTypeDef<any>, V extends PropOptions<InferType<T>>>(name: string, source: T, props: V): Omit<T, keyof V> & V;
export declare function indent(string: string): string;
