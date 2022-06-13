import type moment from 'moment';
declare type Value = moment.Moment | undefined | null;
declare type Format = string | string[] | undefined | ((val?: Value) => string | string[] | undefined);
export declare function formatDate(value: Value, format: Format): string | string[];
export {};
