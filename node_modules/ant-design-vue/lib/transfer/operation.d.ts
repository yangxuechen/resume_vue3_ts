import type { CSSProperties, FunctionalComponent } from 'vue';
export interface TransferOperationProps {
    class?: any;
    leftArrowText?: string;
    rightArrowText?: string;
    moveToLeft?: (e: MouseEvent) => void;
    moveToRight?: (e: MouseEvent) => void;
    leftActive?: boolean;
    rightActive?: boolean;
    style?: CSSProperties | string;
    disabled?: boolean;
}
declare const Operation: FunctionalComponent<TransferOperationProps>;
export default Operation;
