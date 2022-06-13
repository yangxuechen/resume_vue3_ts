import type { ExtractPropTypes, PropType } from 'vue';
import type { SizeType } from '../config-provider';
declare const buttonGroupProps: {
    prefixCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    size: {
        type: PropType<SizeType>;
    };
};
export { buttonGroupProps };
export declare type ButtonGroupProps = Partial<ExtractPropTypes<typeof buttonGroupProps>>;
declare const _default: import("vue").DefineComponent<{
    prefixCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    size: {
        type: PropType<SizeType>;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    prefixCls?: unknown;
    size?: unknown;
} & {
    prefixCls: string;
} & {
    size?: SizeType;
}>, {
    prefixCls: string;
}>;
export default _default;
