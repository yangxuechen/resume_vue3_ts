import type { ComponentPublicInstance } from 'vue';
export declare type BindElement = HTMLElement | Window | null | undefined;
export declare type Rect = ClientRect | DOMRect;
export declare function getTargetRect(target: BindElement): ClientRect;
export declare function getFixedTop(placeholderReact: Rect, targetRect: Rect, offsetTop: number | undefined): string;
export declare function getFixedBottom(placeholderReact: Rect, targetRect: Rect, offsetBottom: number | undefined): string;
interface ObserverEntity {
    target: HTMLElement | Window;
    affixList: ComponentPublicInstance<any>[];
    eventHandlers: {
        [eventName: string]: any;
    };
}
export declare function getObserverEntities(): ObserverEntity[];
export declare function addObserveTarget(target: HTMLElement | Window | null, affix: ComponentPublicInstance<any>): void;
export declare function removeObserveTarget(affix: ComponentPublicInstance<any>): void;
export {};
