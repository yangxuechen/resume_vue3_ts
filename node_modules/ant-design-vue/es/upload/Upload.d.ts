declare const _default: import("vue").DefineComponent<{
    type: import("vue-types").VueTypeDef<"select" | "drag">;
    name: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    defaultFileList: import("vue-types").VueTypeDef<{
        uid: any;
        name: any;
    }[]>;
    fileList: import("vue-types").VueTypeDef<{
        uid: any;
        name: any;
    }[]>;
    action: import("vue-types").VueTypeDef<any>;
    directory: import("vue-types").VueTypeValidableDef<boolean>;
    data: import("vue-types").VueTypeDef<any>;
    method: import("vue-types").VueTypeDef<"post" | "POST" | "PUT" | "PATCH" | "put" | "patch">;
    headers: import("vue-types").VueTypeValidableDef<{
        [key: string]: any;
    }> & {
        default: () => {
            [key: string]: any;
        };
    };
    showUploadList: import("vue-types").VueTypeDef<boolean | {
        showRemoveIcon: (boolean | ((props: Record<string, unknown>) => boolean)) & boolean;
        showPreviewIcon: (boolean | ((props: Record<string, unknown>) => boolean)) & boolean;
    }>;
    multiple: import("vue-types").VueTypeValidableDef<boolean>;
    accept: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    beforeUpload: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    listType: import("vue-types").VueTypeDef<"picture" | "text" | "picture-card">;
    remove: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    supportServerRender: import("vue-types").VueTypeValidableDef<boolean>;
    disabled: import("vue-types").VueTypeValidableDef<boolean>;
    prefixCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    customRequest: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    withCredentials: import("vue-types").VueTypeValidableDef<boolean>;
    openFileDialogOnClick: import("vue-types").VueTypeValidableDef<boolean>;
    locale: import("vue-types").VueTypeLooseShape<{
        uploading: (string | ((props: Record<string, unknown>) => string)) & string;
        removeFile: (string | ((props: Record<string, unknown>) => string)) & string;
        downloadFile: (string | ((props: Record<string, unknown>) => string)) & string;
        uploadError: (string | ((props: Record<string, unknown>) => string)) & string;
        previewFile: (string | ((props: Record<string, unknown>) => string)) & string;
    }>;
    height: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
    id: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    previewFile: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    transformFile: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    onChange: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    onPreview: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    onRemove: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    onDownload: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    'onUpdate:fileList': import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
}, {
    upload: any;
    progressTimer: any;
    configProvider: {
        getTargetContainer?: () => HTMLElement;
        getPopupContainer?: (triggerNode: HTMLElement) => HTMLElement;
        prefixCls?: string;
        getPrefixCls?: (suffixCls?: string, customizePrefixCls?: string) => string;
        renderEmpty?: typeof import("../config-provider/renderEmpty").default;
        transformCellText?: (tableProps: import("../table/interface").TransformCellTextProps) => any;
        csp?: unknown;
        autoInsertSpaceInButton?: boolean;
        locale?: {
            locale: string;
            Pagination?: {
                constructor: Function;
                toString: () => string;
                toLocaleString: () => string;
                valueOf: () => Object;
                hasOwnProperty: (v: PropertyKey) => boolean;
                isPrototypeOf: (v: Object) => boolean;
                propertyIsEnumerable: (v: PropertyKey) => boolean;
            };
            DatePicker?: {
                constructor: Function;
                toString: () => string;
                toLocaleString: () => string;
                valueOf: () => Object;
                hasOwnProperty: (v: PropertyKey) => boolean;
                isPrototypeOf: (v: Object) => boolean;
                propertyIsEnumerable: (v: PropertyKey) => boolean;
            };
            TimePicker?: {
                constructor: Function;
                toString: () => string;
                toLocaleString: () => string;
                valueOf: () => Object;
                hasOwnProperty: (v: PropertyKey) => boolean;
                isPrototypeOf: (v: Object) => boolean;
                propertyIsEnumerable: (v: PropertyKey) => boolean;
            };
            Calendar?: {
                constructor: Function;
                toString: () => string;
                toLocaleString: () => string;
                valueOf: () => Object;
                hasOwnProperty: (v: PropertyKey) => boolean;
                isPrototypeOf: (v: Object) => boolean;
                propertyIsEnumerable: (v: PropertyKey) => boolean;
            };
            Table?: {
                constructor: Function;
                toString: () => string;
                toLocaleString: () => string;
                valueOf: () => Object;
                hasOwnProperty: (v: PropertyKey) => boolean;
                isPrototypeOf: (v: Object) => boolean;
                propertyIsEnumerable: (v: PropertyKey) => boolean;
            };
            Modal?: {
                okText: string;
                cancelText: string;
                justOkText: string;
            };
            Popconfirm?: {
                constructor: Function;
                toString: () => string;
                toLocaleString: () => string;
                valueOf: () => Object;
                hasOwnProperty: (v: PropertyKey) => boolean;
                isPrototypeOf: (v: Object) => boolean;
                propertyIsEnumerable: (v: PropertyKey) => boolean;
            };
            Transfer?: {
                constructor: Function;
                toString: () => string;
                toLocaleString: () => string;
                valueOf: () => Object;
                hasOwnProperty: (v: PropertyKey) => boolean;
                isPrototypeOf: (v: Object) => boolean;
                propertyIsEnumerable: (v: PropertyKey) => boolean;
            };
            Select?: {
                constructor: Function;
                toString: () => string;
                toLocaleString: () => string;
                valueOf: () => Object;
                hasOwnProperty: (v: PropertyKey) => boolean;
                isPrototypeOf: (v: Object) => boolean;
                propertyIsEnumerable: (v: PropertyKey) => boolean;
            };
            Upload?: {
                constructor: Function;
                toString: () => string;
                toLocaleString: () => string;
                valueOf: () => Object;
                hasOwnProperty: (v: PropertyKey) => boolean;
                isPrototypeOf: (v: Object) => boolean;
                propertyIsEnumerable: (v: PropertyKey) => boolean;
            };
            Form?: {
                optional?: string;
                defaultValidateMessages: {
                    default?: string | (() => string);
                    required?: string | (() => string);
                    enum?: string | (() => string);
                    whitespace?: string | (() => string);
                    date?: {
                        format?: string | (() => string);
                        parse?: string | (() => string);
                        invalid?: string | (() => string);
                    };
                    types?: {
                        string?: string | (() => string);
                        method?: string | (() => string);
                        array?: string | (() => string);
                        object?: string | (() => string);
                        number?: string | (() => string);
                        date?: string | (() => string);
                        boolean?: string | (() => string);
                        integer?: string | (() => string);
                        float?: string | (() => string);
                        regexp?: string | (() => string);
                        email?: string | (() => string);
                        url?: string | (() => string);
                        hex?: string | (() => string);
                    };
                    string?: {
                        len?: string | (() => string);
                        min?: string | (() => string);
                        max?: string | (() => string);
                        range?: string | (() => string);
                    };
                    number?: {
                        len?: string | (() => string);
                        min?: string | (() => string);
                        max?: string | (() => string);
                        range?: string | (() => string);
                    };
                    array?: {
                        len?: string | (() => string);
                        min?: string | (() => string);
                        max?: string | (() => string);
                        range?: string | (() => string);
                    };
                    pattern?: {
                        mismatch?: string | (() => string);
                    };
                };
            };
            Image?: {
                preview: string;
            };
        };
        pageHeader?: {
            ghost: boolean;
        };
        componentSize?: import("../config-provider").SizeType;
        direction?: "ltr" | "rtl";
        space?: {
            size: number | import("../config-provider").SizeType;
        };
        virtual?: boolean;
        dropdownMatchSelectWidth?: boolean;
        form?: unknown;
    };
}, {
    sFileList: {
        uid: any;
        name: any;
    }[];
    dragState: string;
}, {}, {
    onStart(file: any): void;
    onSuccess(response: any, file: any, xhr: any): void;
    onProgress(e: any, file: any): void;
    onError(error: any, response: any, file: any): void;
    onReject(fileList: any): void;
    handleRemove(file: any): void;
    handleManualRemove(file: any): void;
    handleChange(info: any): void;
    onFileDrop(e: any): void;
    reBeforeUpload(file: any, fileList: any): any;
    clearProgressTimer(): void;
    autoUpdateProgress(_: any, file: any): void;
    renderUploadList(locale: any): JSX.Element;
}, {
    methods: {
        setState(state: {}, callback: any): void;
        __emit(...args: any[]): void;
    };
}, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    type?: unknown;
    name?: unknown;
    defaultFileList?: unknown;
    fileList?: unknown;
    action?: unknown;
    directory?: unknown;
    data?: unknown;
    method?: unknown;
    headers?: unknown;
    showUploadList?: unknown;
    multiple?: unknown;
    accept?: unknown;
    beforeUpload?: unknown;
    listType?: unknown;
    remove?: unknown;
    supportServerRender?: unknown;
    disabled?: unknown;
    prefixCls?: unknown;
    customRequest?: unknown;
    withCredentials?: unknown;
    openFileDialogOnClick?: unknown;
    locale?: unknown;
    height?: unknown;
    id?: unknown;
    previewFile?: unknown;
    transformFile?: unknown;
    onChange?: unknown;
    onPreview?: unknown;
    onRemove?: unknown;
    onDownload?: unknown;
    'onUpdate:fileList'?: unknown;
} & {
    name: string;
    prefixCls: string;
    height: number;
    id: string;
    headers: {
        [key: string]: any;
    };
    accept: string;
} & {
    method?: "post" | "POST" | "PUT" | "PATCH" | "put" | "patch";
    type?: "select" | "drag";
    locale?: {
        uploading: (string | ((props: Record<string, unknown>) => string)) & string;
        removeFile: (string | ((props: Record<string, unknown>) => string)) & string;
        downloadFile: (string | ((props: Record<string, unknown>) => string)) & string;
        uploadError: (string | ((props: Record<string, unknown>) => string)) & string;
        previewFile: (string | ((props: Record<string, unknown>) => string)) & string;
    };
    data?: any;
    onChange?: (...args: any[]) => any;
    onPreview?: (...args: any[]) => any;
    multiple?: boolean;
    disabled?: boolean;
    remove?: (...args: any[]) => any;
    action?: any;
    previewFile?: (...args: any[]) => any;
    onDownload?: (...args: any[]) => any;
    listType?: "picture" | "text" | "picture-card";
    defaultFileList?: {
        uid: any;
        name: any;
    }[];
    fileList?: {
        uid: any;
        name: any;
    }[];
    directory?: boolean;
    showUploadList?: boolean | {
        showRemoveIcon: (boolean | ((props: Record<string, unknown>) => boolean)) & boolean;
        showPreviewIcon: (boolean | ((props: Record<string, unknown>) => boolean)) & boolean;
    };
    beforeUpload?: (...args: any[]) => any;
    supportServerRender?: boolean;
    customRequest?: (...args: any[]) => any;
    withCredentials?: boolean;
    openFileDialogOnClick?: boolean;
    transformFile?: (...args: any[]) => any;
    onRemove?: (...args: any[]) => any;
    "onUpdate:fileList"?: (...args: any[]) => any;
}>, {
    name: string;
    prefixCls: string;
    onChange: (...args: any[]) => any;
    onPreview: (...args: any[]) => any;
    height: number;
    id: string;
    remove: (...args: any[]) => any;
    previewFile: (...args: any[]) => any;
    onDownload: (...args: any[]) => any;
    headers: {
        [key: string]: any;
    };
    accept: string;
    beforeUpload: (...args: any[]) => any;
    customRequest: (...args: any[]) => any;
    transformFile: (...args: any[]) => any;
    onRemove: (...args: any[]) => any;
    "onUpdate:fileList": (...args: any[]) => any;
}>;
export default _default;
