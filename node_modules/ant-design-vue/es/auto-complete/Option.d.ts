import type { FunctionalComponent } from 'vue';
import type { OptionCoreData } from '../vc-select/interface';
export interface OptionProps extends Omit<OptionCoreData, 'label'> {
    /** Save for customize data */
    [prop: string]: any;
}
export interface OptionFC extends FunctionalComponent<OptionProps> {
    /** Legacy for check if is a Option Group */
    isSelectOption: boolean;
}
declare const Option: OptionFC;
export default Option;
