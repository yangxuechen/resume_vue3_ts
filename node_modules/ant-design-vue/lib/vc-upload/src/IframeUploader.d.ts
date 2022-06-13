export default IframeUploader;
declare namespace IframeUploader {
    const name: string;
    const mixins: {
        methods: {
            setState(state: {}, callback: any): void;
            __emit(...args: any[]): void;
        };
    }[];
    namespace props {
        export const componentTag: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        };
        export const disabled: import("vue-types").VueTypeValidableDef<boolean>;
        export const prefixCls: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        };
        export const accept: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        };
        export const multiple: import("vue-types").VueTypeValidableDef<boolean>;
        export const data: import("vue-types").VueTypeDef<any>;
        export const action: import("vue-types").VueTypeDef<any>;
        const name_1: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        };
        export { name_1 as name };
    }
    function data(): {
        uploading: boolean;
    };
    function data(): {
        uploading: boolean;
    };
    namespace methods {
        function onLoad(): void;
        function onLoad(): void;
        function onChange(): void;
        function onChange(): void;
        function getIframeNode(): any;
        function getIframeNode(): any;
        function getIframeDocument(): any;
        function getIframeDocument(): any;
        function getFormNode(): any;
        function getFormNode(): any;
        function getFormInputNode(): any;
        function getFormInputNode(): any;
        function getFormDataNode(): any;
        function getFormDataNode(): any;
        function getFileForMultiple(file: any): any;
        function getFileForMultiple(file: any): any;
        function getIframeHTML(domain: any): string;
        function getIframeHTML(domain: any): string;
        function initIframeSrc(): void;
        function initIframeSrc(): void;
        function initIframe(): void;
        function initIframe(): void;
        function endUpload(): void;
        function endUpload(): void;
        function startUpload(): void;
        function startUpload(): void;
        function updateIframeWH(): void;
        function updateIframeWH(): void;
        function abort(file: any): void;
        function abort(file: any): void;
        function post(file: any): void;
        function post(file: any): void;
    }
    function mounted(): void;
    function mounted(): void;
    function updated(): void;
    function updated(): void;
    function render(): JSX.Element;
    function render(): JSX.Element;
}
