import type { Ref } from 'vue';
export default function useMemo<T>(getValue: () => T, condition: any[], shouldUpdate?: (prev: any[], next: any[]) => boolean): Ref<T>;
