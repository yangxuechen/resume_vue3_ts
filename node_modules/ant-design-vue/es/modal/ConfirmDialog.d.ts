import type { ModalFuncProps } from './Modal';
import { FunctionalComponent } from 'vue';
interface ConfirmDialogProps extends ModalFuncProps {
    afterClose?: () => void;
    close?: (...args: any[]) => void;
    autoFocusButton?: null | 'ok' | 'cancel';
}
declare const ConfirmDialog: FunctionalComponent<ConfirmDialogProps>;
export default ConfirmDialog;
