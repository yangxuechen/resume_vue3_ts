export default cssAnimation;
export const isCssAnimationSupported: boolean;
declare function cssAnimation(node: any, transitionName: any, endCallback: any): {
    stop(): void;
};
declare namespace cssAnimation {
    export function style(node: any, style: any, callback: any): void;
    export function setTransition(node: any, p: any, value: any): void;
    export { isCssAnimationSupported };
}
