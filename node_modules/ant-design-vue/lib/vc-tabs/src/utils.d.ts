export function toArray(children: any): any[];
export function getActiveIndex(children: any, activeKey: any): number;
export function getActiveKey(children: any, index: any): any;
export function setTransform(style: any, v: any): void;
export function isTransform3dSupported(style: any): ((data: string) => string) & typeof atob;
export function setTransition(style: any, v: any): void;
export function getTransformPropValue(v: any): {
    transform: any;
    WebkitTransform: any;
    MozTransform: any;
};
export function isVertical(tabBarPosition: any): boolean;
export function getTransformByIndex(index: any, tabBarPosition: any, direction?: string): string;
export function getMarginStyle(index: any, tabBarPosition: any): {
    [x: string]: string;
};
export function getStyle(el: any, property: any): number;
export function setPxStyle(el: any, value: any, vertical: any): void;
export function getDataAttr(props: any): {};
export function getLeft(tabNode: any, wrapperNode: any): number;
export function getTop(tabNode: any, wrapperNode: any): number;
