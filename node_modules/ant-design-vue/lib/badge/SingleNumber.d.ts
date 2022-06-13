export interface UnitNumberProps {
    prefixCls: string;
    value: string | number;
    offset?: number;
    current?: boolean;
}
declare const _default: import("vue").DefineComponent<{
    prefixCls: StringConstructor;
    value: StringConstructor;
    count: NumberConstructor;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    prefixCls?: unknown;
    value?: unknown;
    count?: unknown;
} & {} & {
    value?: string;
    prefixCls?: string;
    count?: number;
}>, {}>;
export default _default;
