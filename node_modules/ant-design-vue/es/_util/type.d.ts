import type { PropType, VNodeChild, Plugin } from 'vue';
export declare const tuple: <T extends string[]>(...args: T) => T;
export declare const tupleNum: <T extends number[]>(...args: T) => T;
/**
 * https://stackoverflow.com/a/59187769
 * Extract the type of an element of an array/tuple without performing indexing
 */
export declare type ElementOf<T> = T extends (infer E)[] ? E : T extends readonly (infer F)[] ? F : never;
/**
 * https://github.com/Microsoft/TypeScript/issues/29729
 */
export declare type LiteralUnion<T extends U, U> = T | (U & {});
export declare type Data = Record<string, unknown>;
export declare type Key = string | number;
declare type DefaultFactory<T> = (props: Data) => T | null | undefined;
export interface PropOptions<T = any, D = T> {
    type?: PropType<T> | true | null;
    required?: boolean;
    default?: D | DefaultFactory<D> | null | undefined | object;
    validator?(value: unknown): boolean;
}
export declare type VueNode = VNodeChild | JSX.Element;
export declare const withInstall: <T>(comp: T) => T & Plugin;
export {};
