import type { PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
    disabled: BooleanConstructor;
    onResize: PropType<(size: {
        width: number;
        height: number;
        offsetWidth: number;
        offsetHeight: number;
    }, element: HTMLElement) => void>;
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "resize"[], "resize", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    disabled?: unknown;
    onResize?: unknown;
} & {
    disabled: boolean;
} & {
    onResize?: (size: {
        width: number;
        height: number;
        offsetWidth: number;
        offsetHeight: number;
    }, element: HTMLElement) => void;
}> & {
    onResize?: (...args: any[]) => any;
}, {
    disabled: boolean;
}>;
export default _default;
