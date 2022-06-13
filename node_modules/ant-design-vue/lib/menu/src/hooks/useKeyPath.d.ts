import type { Key } from '../../../_util/type';
import type { ComputedRef, InjectionKey } from 'vue';
import type { StoreMenuInfo } from './useMenuContext';
declare const KeyPathContext: InjectionKey<{
    parentEventKeys: ComputedRef<string[]>;
    parentKeys: ComputedRef<Key[]>;
    parentInfo: StoreMenuInfo;
}>;
declare const useInjectKeyPath: () => {
    parentEventKeys: ComputedRef<any[]>;
    parentKeys: ComputedRef<any[]>;
    parentInfo: StoreMenuInfo;
};
declare const useProvideKeyPath: (eventKey: string, key: Key, menuInfo: StoreMenuInfo) => ComputedRef<any[]>;
export { useProvideKeyPath, useInjectKeyPath, KeyPathContext };
export default useProvideKeyPath;
