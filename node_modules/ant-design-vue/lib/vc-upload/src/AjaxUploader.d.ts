export default AjaxUploader;
declare namespace AjaxUploader {
    export const inheritAttrs: boolean;
    export const name: string;
    export const mixins: {
        methods: {
            setState(state: {}, callback: any): void;
            __emit(...args: any[]): void;
        };
    }[];
    export { upLoadPropTypes as props };
    export function data(): {
        uid: string;
    };
    export function data(): {
        uid: string;
    };
    export function mounted(): void;
    export function mounted(): void;
    export function beforeUnmount(): void;
    export function beforeUnmount(): void;
    export namespace methods {
        function onChange(e: any): void;
        function onChange(e: any): void;
        function onClick(): void;
        function onClick(): void;
        function onKeyDown(e: any): void;
        function onKeyDown(e: any): void;
        function onFileDrop(e: any): void;
        function onFileDrop(e: any): void;
        function uploadFiles(files: any): void;
        function uploadFiles(files: any): void;
        function upload(file: any, fileList: any): NodeJS.Timeout;
        function upload(file: any, fileList: any): NodeJS.Timeout;
        function post(file: any): void;
        function post(file: any): void;
        function reset(): void;
        function reset(): void;
        function abort(file: any): void;
        function abort(file: any): void;
    }
    export function render(): JSX.Element;
    export function render(): JSX.Element;
}
declare namespace upLoadPropTypes {
    export const componentTag: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    export const prefixCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    const name_1: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    export { name_1 as name };
    export const multiple: import("vue-types").VueTypeValidableDef<boolean>;
    export const directory: import("vue-types").VueTypeValidableDef<boolean>;
    export const disabled: import("vue-types").VueTypeValidableDef<boolean>;
    export const accept: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    export const data: import("vue-types").VueTypeDef<any>;
    export const action: import("vue-types").VueTypeDef<any>;
    export const headers: import("vue-types").VueTypeValidableDef<{
        [key: string]: any;
    }> & {
        default: () => {
            [key: string]: any;
        };
    };
    export const beforeUpload: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    export const customRequest: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    export const withCredentials: import("vue-types").VueTypeValidableDef<boolean>;
    export const openFileDialogOnClick: import("vue-types").VueTypeValidableDef<boolean>;
    export const transformFile: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    export const method: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
}
