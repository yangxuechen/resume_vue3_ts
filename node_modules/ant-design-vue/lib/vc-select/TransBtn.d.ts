import type { FunctionalComponent, VNodeChild } from 'vue';
export interface TransBtnProps {
    class: string;
    customizeIcon: VNodeChild | ((props?: any) => VNodeChild);
    customizeIconProps?: any;
    onMousedown?: (payload: MouseEvent) => void;
    onClick?: (payload: MouseEvent) => void;
}
export interface TransBtnType extends FunctionalComponent<TransBtnProps> {
    displayName: string;
}
declare const TransBtn: TransBtnType;
export default TransBtn;
