import type { Data } from '../../_util/type';
import type { ComputedRef, Ref } from 'vue';
import type { GetKey } from '../interface';
export default function useScrollTo(containerRef: Ref<Element | undefined>, mergedData: ComputedRef<any[]>, heights: Data, props: any, getKey: GetKey, collectHeight: () => void, syncScrollTop: (newTop: number) => void, triggerFlash: () => void): (arg?: any) => void;
