import type { ComputedRef, Ref } from 'vue';
import type { DisplayLabelValueType } from '../interface/generator';
export default function useCacheDisplayValue(values: Ref<DisplayLabelValueType[]>): ComputedRef<DisplayLabelValueType[]>;
