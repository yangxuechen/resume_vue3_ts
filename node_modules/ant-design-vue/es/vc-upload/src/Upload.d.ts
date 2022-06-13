declare var _default: import("vue").DefineComponent<any, any, {}, {}, {
    getComponent(): {
        inheritAttrs: boolean;
        name: string;
        mixins: {
            methods: {
                setState(state: {}, callback: any): void;
                __emit(...args: any[]): void;
            };
        }[];
        props: {
            componentTag: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            };
            prefixCls: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            };
            name: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            };
            multiple: import("vue-types").VueTypeValidableDef<boolean>;
            directory: import("vue-types").VueTypeValidableDef<boolean>;
            disabled: import("vue-types").VueTypeValidableDef<boolean>;
            accept: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            };
            data: import("vue-types").VueTypeDef<any>;
            action: import("vue-types").VueTypeDef<any>;
            headers: import("vue-types").VueTypeValidableDef<{
                [key: string]: any;
            }> & {
                default: () => {
                    [key: string]: any;
                };
            };
            beforeUpload: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
                default: (...args: any[]) => any;
            };
            customRequest: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
                default: (...args: any[]) => any;
            };
            withCredentials: import("vue-types").VueTypeValidableDef<boolean>;
            openFileDialogOnClick: import("vue-types").VueTypeValidableDef<boolean>;
            transformFile: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
                default: (...args: any[]) => any;
            };
            method: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            };
        };
        data(): {
            uid: string;
        };
        mounted(): void;
        beforeUnmount(): void;
        methods: {
            onChange(e: any): void;
            onClick(): void;
            onKeyDown(e: any): void;
            onFileDrop(e: any): void;
            uploadFiles(files: any): void;
            upload(file: any, fileList: any): NodeJS.Timeout;
            post(file: any): void;
            reset(): void;
            abort(file: any): void;
        };
        render(): JSX.Element;
    } | {
        name: string;
        mixins: {
            methods: {
                setState(state: {}, callback: any): void;
                __emit(...args: any[]): void;
            };
        }[];
        props: {
            componentTag: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            };
            disabled: import("vue-types").VueTypeValidableDef<boolean>;
            prefixCls: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            };
            accept: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            };
            multiple: import("vue-types").VueTypeValidableDef<boolean>;
            data: import("vue-types").VueTypeDef<any>;
            action: import("vue-types").VueTypeDef<any>;
            name: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            };
        };
        data(): {
            uploading: boolean;
        };
        methods: {
            onLoad(): void;
            onChange(): void;
            getIframeNode(): any;
            getIframeDocument(): any;
            getFormNode(): any;
            getFormInputNode(): any;
            getFormDataNode(): any;
            getFileForMultiple(file: any): any;
            getIframeHTML(domain: any): string;
            initIframeSrc(): void;
            initIframe(): void;
            endUpload(): void;
            startUpload(): void;
            updateIframeWH(): void;
            abort(file: any): void;
            post(file: any): void;
        };
        mounted(): void;
        updated(): void;
        render(): JSX.Element;
    };
    abort(file: any): void;
}, {
    methods: {
        setState(state: {}, callback: any): void;
        __emit(...args: any[]): void;
    };
}, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    [x: string]: any;
}> | Readonly<{
    [x: string]: unknown;
} & {
    [x: string]: any;
} & {
    [x: number]: any;
}>, {} | {
    [x: string]: any;
}>;
export default _default;
