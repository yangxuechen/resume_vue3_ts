import type { Ref } from 'vue';
export declare type UseRef = [(el: any, key: string | number) => void, Ref<any>];
export declare const useRef: () => UseRef;
