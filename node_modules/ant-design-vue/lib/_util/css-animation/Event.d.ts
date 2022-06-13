export default TransitionEvents;
declare namespace TransitionEvents {
    export { startEvents };
    export function addStartEventListener(node: any, eventListener: any): void;
    export function addStartEventListener(node: any, eventListener: any): void;
    export function removeStartEventListener(node: any, eventListener: any): void;
    export function removeStartEventListener(node: any, eventListener: any): void;
    export { endEvents };
    export function addEndEventListener(node: any, eventListener: any): void;
    export function addEndEventListener(node: any, eventListener: any): void;
    export function removeEndEventListener(node: any, eventListener: any): void;
    export function removeEndEventListener(node: any, eventListener: any): void;
}
declare let startEvents: any[];
declare let endEvents: any[];
