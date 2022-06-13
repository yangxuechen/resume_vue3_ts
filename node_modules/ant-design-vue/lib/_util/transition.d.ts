import type { BaseTransitionProps, CSSProperties, Ref } from 'vue';
export declare const getTransitionProps: (transitionName: string, opt?: object) => object;
export declare const getTransitionGroupProps: (transitionName: string, opt?: object) => {
    appear: boolean;
    appearActiveClass: string;
    appearToClass: string;
    enterFromClass: string;
    enterActiveClass: string;
    enterToClass: string;
    leaveActiveClass: string;
    leaveToClass: string;
} | {
    css: boolean;
};
declare let Transition: import("vue").FunctionalComponent<import("vue").TransitionProps, {}>;
declare let TransitionGroup: new () => {
    $props: import("vue").TransitionGroupProps;
};
export declare type MotionEvent = (TransitionEvent | AnimationEvent) & {
    deadline?: boolean;
};
export declare type MotionEventHandler = (element: Element, done?: () => void) => CSSProperties;
export declare type MotionEndEventHandler = (element: Element, done?: () => void) => boolean | void;
export interface CSSMotionProps extends Partial<BaseTransitionProps<Element>> {
    name?: string;
    css?: boolean;
}
declare const collapseMotion: (style: Ref<CSSProperties>, className: Ref<string>) => CSSMotionProps;
export { Transition, TransitionGroup, collapseMotion };
export default Transition;
