import type { PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
    prefixCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    scrollTop: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
    scrollHeight: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
    height: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
    count: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
    onScroll: {
        type: PropType<(scrollTop: number) => void>;
    };
    onStartMove: {
        type: PropType<() => void>;
    };
    onStopMove: {
        type: PropType<() => void>;
    };
}, {
    moveRaf: any;
    scrollbarRef: any;
    thumbRef: any;
    visibleTimeout: any;
    state: {
        dragging: boolean;
        pageY: number;
        startTop: number;
        visible: boolean;
    };
}, unknown, {}, {
    delayHidden(): void;
    onScrollbarTouchStart(e: TouchEvent): void;
    onContainerMouseDown(e: MouseEvent): void;
    patchEvents(): void;
    removeEvents(): void;
    onMouseDown(e: MouseEvent | TouchEvent): void;
    onMouseMove(e: MouseEvent | TouchEvent): void;
    onMouseUp(): void;
    getSpinHeight(): number;
    getEnableScrollRange(): number;
    getEnableHeightRange(): number;
    getTop(): number;
    showScroll(): boolean;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    prefixCls?: unknown;
    scrollTop?: unknown;
    scrollHeight?: unknown;
    height?: unknown;
    count?: unknown;
    onScroll?: unknown;
    onStartMove?: unknown;
    onStopMove?: unknown;
} & {
    prefixCls: string;
    height: number;
    scrollTop: number;
    scrollHeight: number;
    count: number;
} & {
    onScroll?: (scrollTop: number) => void;
    onStartMove?: () => void;
    onStopMove?: () => void;
}>, {
    prefixCls: string;
    height: number;
    scrollTop: number;
    scrollHeight: number;
    count: number;
}>;
export default _default;
