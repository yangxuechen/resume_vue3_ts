import type { VNodeChild } from 'vue';
export interface RenderEmptyProps {
    componentName?: string;
}
declare function renderEmpty(componentName?: string): VNodeChild | JSX.Element;
export declare type RenderEmptyHandler = typeof renderEmpty;
export default renderEmpty;
