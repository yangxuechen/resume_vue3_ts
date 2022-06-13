import type { CSSProperties, VNodeTypes, FunctionalComponent } from 'vue';
export interface EmptyProps {
    prefixCls?: string;
    class?: any;
    style?: string | CSSProperties;
    imageStyle?: CSSProperties;
    image?: VNodeTypes | null;
    description?: VNodeTypes;
}
interface EmptyType extends FunctionalComponent<EmptyProps> {
    displayName: string;
    PRESENTED_IMAGE_DEFAULT: VNodeTypes;
    PRESENTED_IMAGE_SIMPLE: VNodeTypes;
}
declare const _default: EmptyType & import("@vue/runtime-core").Plugin;
export default _default;
