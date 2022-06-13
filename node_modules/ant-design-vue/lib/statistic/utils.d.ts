import type { VNodeTypes } from 'vue';
export declare type valueType = number | string;
export declare type countdownValueType = valueType | string;
export declare type Formatter = false | 'number' | 'countdown' | (({ value, config }: {
    value: valueType;
    config?: FormatConfig;
}) => VNodeTypes);
export interface FormatConfig {
    formatter?: Formatter;
    decimalSeparator?: string;
    groupSeparator?: string;
    precision?: number;
    prefixCls?: string;
}
export interface CountdownFormatConfig extends FormatConfig {
    format?: string;
}
export declare function formatTimeStr(duration: number, format: string): string;
export declare function formatCountdown(value: countdownValueType, config: CountdownFormatConfig): string;
