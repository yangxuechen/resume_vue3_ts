import type { ModalFuncProps } from './Modal';
declare const confirm: (config: ModalFuncProps) => {
    destroy: (this: any, ...args: any[]) => void;
    update: (newConfig: ModalFuncProps) => void;
};
export default confirm;
