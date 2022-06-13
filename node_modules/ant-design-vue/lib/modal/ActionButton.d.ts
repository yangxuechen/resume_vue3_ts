import type { ExtractPropTypes, PropType } from 'vue';
import type { LegacyButtonType } from '../button/buttonTypes';
declare const ActionButtonProps: {
    type: {
        type: PropType<LegacyButtonType>;
    };
    actionFn: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    closeModal: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    autofocus: import("vue-types").VueTypeValidableDef<boolean>;
    buttonProps: import("vue-types").VueTypeValidableDef<{
        [key: string]: any;
    }> & {
        default: () => {
            [key: string]: any;
        };
    };
};
export declare type IActionButtonProps = ExtractPropTypes<typeof ActionButtonProps>;
declare const _default: import("vue").DefineComponent<{
    type: {
        type: PropType<LegacyButtonType>;
    };
    actionFn: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    closeModal: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    autofocus: import("vue-types").VueTypeValidableDef<boolean>;
    buttonProps: import("vue-types").VueTypeValidableDef<{
        [key: string]: any;
    }> & {
        default: () => {
            [key: string]: any;
        };
    };
}, {
    timeoutId: any;
}, {
    loading: boolean;
}, {}, {
    onClick(): void;
}, {
    methods: {
        setState(state: {}, callback: any): void;
        __emit(...args: any[]): void;
    };
}, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    type?: unknown;
    actionFn?: unknown;
    closeModal?: unknown;
    autofocus?: unknown;
    buttonProps?: unknown;
} & {
    buttonProps: {
        [key: string]: any;
    };
} & {
    type?: LegacyButtonType;
    autofocus?: boolean;
    actionFn?: (...args: any[]) => any;
    closeModal?: (...args: any[]) => any;
}>, {
    actionFn: (...args: any[]) => any;
    closeModal: (...args: any[]) => any;
    buttonProps: {
        [key: string]: any;
    };
}>;
export default _default;
