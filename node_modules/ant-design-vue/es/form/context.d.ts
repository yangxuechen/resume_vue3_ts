import type { InjectionKey, ComputedRef } from 'vue';
import type { ColProps } from '../grid';
import type { RequiredMark, ValidationRule } from './Form';
import type { ValidateStatus, FieldExpose } from './FormItem';
import type { FormLabelAlign } from './interface';
export interface FormContextProps {
    model?: ComputedRef<any>;
    vertical: ComputedRef<boolean>;
    name?: ComputedRef<string>;
    colon?: ComputedRef<boolean>;
    labelAlign?: ComputedRef<FormLabelAlign>;
    labelCol?: ComputedRef<ColProps>;
    wrapperCol?: ComputedRef<ColProps>;
    requiredMark?: ComputedRef<RequiredMark>;
    addField: (eventKey: string, field: FieldExpose) => void;
    removeField: (eventKey: string) => void;
    validateTrigger?: ComputedRef<string | string[]>;
    rules?: ComputedRef<{
        [k: string]: ValidationRule[] | ValidationRule;
    }>;
}
export declare const FormContextKey: InjectionKey<FormContextProps>;
export declare const useProvideForm: (state: FormContextProps) => void;
export declare const useInjectForm: () => FormContextProps;
/** Used for ErrorList only */
export interface FormItemPrefixContextProps {
    prefixCls: ComputedRef<string>;
    status?: ComputedRef<ValidateStatus>;
}
export declare const FormItemPrefixContextKey: InjectionKey<FormItemPrefixContextProps>;
export declare const useProvideFormItemPrefix: (state: FormItemPrefixContextProps) => void;
export declare const useInjectFormItemPrefix: () => FormItemPrefixContextProps;
