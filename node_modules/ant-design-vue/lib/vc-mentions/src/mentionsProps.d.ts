import type { PropType } from 'vue';
import { filterOption as defaultFilterOption, validateSearch as defaultValidateSearch } from './util';
export declare const mentionsProps: {
    autofocus: import("vue-types").VueTypeValidableDef<boolean>;
    prefix: import("vue-types").VueTypeDef<string | unknown[]>;
    prefixCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    value: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    defaultValue: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    disabled: import("vue-types").VueTypeValidableDef<boolean>;
    notFoundContent: import("vue-types").VueTypeValidableDef<import("../../_util/type").VueNode>;
    split: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    transitionName: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    placement: import("vue-types").VueTypeDef<"bottom" | "top">;
    character: import("vue-types").VueTypeValidableDef<any>;
    characterRender: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    filterOption: {
        type: PropType<false | typeof defaultFilterOption>;
    };
    validateSearch: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    getPopupContainer: {
        type: PropType<() => HTMLElement>;
    };
};
export declare const vcMentionsProps: {
    children: import("vue-types").VueTypeValidableDef<any>;
    autofocus: import("vue-types").VueTypeValidableDef<boolean>;
    prefix: import("vue-types").VueTypeDef<string | unknown[]>;
    prefixCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    value: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    defaultValue: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    disabled: import("vue-types").VueTypeValidableDef<boolean>;
    notFoundContent: import("vue-types").VueTypeValidableDef<import("../../_util/type").VueNode>;
    split: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    transitionName: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    placement: import("vue-types").VueTypeDef<"bottom" | "top">;
    character: import("vue-types").VueTypeValidableDef<any>;
    characterRender: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    filterOption: {
        type: PropType<false | typeof defaultFilterOption>;
    };
    validateSearch: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    getPopupContainer: {
        type: PropType<() => HTMLElement>;
    };
};
export declare const defaultProps: {
    prefix: string;
    split: string;
    validateSearch: typeof defaultValidateSearch;
    filterOption: typeof defaultFilterOption;
};
declare const _default: any;
export default _default;
