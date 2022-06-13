import type { Ref, VNodeChild } from 'vue';
import type { RawValueType, FlattenOptionsType, Key } from '../interface/generator';
export default function useCacheOptions<OptionsType extends {
    value?: RawValueType;
    label?: VNodeChild;
    key?: Key;
    disabled?: boolean;
}[]>(options: Ref): (vals: RawValueType[]) => FlattenOptionsType<OptionsType>;
