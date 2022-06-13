import type { GetKey } from '../interface';
declare type CacheMap = Record<string, number>;
export default function useHeights<T>(getKey: GetKey<T>, onItemAdd?: ((item: T) => void) | null, onItemRemove?: ((item: T) => void) | null): [(item: T, instance: HTMLElement) => void, () => void, CacheMap];
export {};
