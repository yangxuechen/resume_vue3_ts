import { ValidatorFunction, VueTypeDef } from '../types';
export default function custom<T>(validatorFn: ValidatorFunction<T>, warnMsg?: string): VueTypeDef<T>;
