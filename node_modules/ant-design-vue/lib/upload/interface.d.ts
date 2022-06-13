export declare const UploadFileStatus: import("vue-types").VueTypeDef<"done" | "error" | "success" | "uploading" | "removed">;
export interface HttpRequestHeader {
    [key: string]: string;
}
export interface VcFile extends File {
    uid: string;
    readonly lastModifiedDate: Date;
    readonly webkitRelativePath: string;
}
export declare const UploadChangeParam: {
    file: import("vue-types").VueTypeDef<{
        uid: any;
        name: any;
    }>;
    fileList: import("vue-types").VueTypeDef<{
        uid: any;
        name: any;
    }[]>;
    event: import("vue-types").VueTypeValidableDef<{
        [key: string]: any;
    }> & {
        default: () => {
            [key: string]: any;
        };
    };
};
export declare const ShowUploadListInterface: import("vue-types").VueTypeLooseShape<{
    showRemoveIcon: (boolean | ((props: Record<string, unknown>) => boolean)) & boolean;
    showPreviewIcon: (boolean | ((props: Record<string, unknown>) => boolean)) & boolean;
}>;
export declare const UploadLocale: import("vue-types").VueTypeLooseShape<{
    uploading: (string | ((props: Record<string, unknown>) => string)) & string;
    removeFile: (string | ((props: Record<string, unknown>) => string)) & string;
    downloadFile: (string | ((props: Record<string, unknown>) => string)) & string;
    uploadError: (string | ((props: Record<string, unknown>) => string)) & string;
    previewFile: (string | ((props: Record<string, unknown>) => string)) & string;
}>;
export declare const UploadProps: {
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
};
export declare const UploadState: {
    fileList: import("vue-types").VueTypeDef<{
        uid: any;
        name: any;
    }[]>;
    dragState: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
};
export declare const UploadListProps: {
    listType: import("vue-types").VueTypeDef<"picture" | "text" | "picture-card">;
    items: import("vue-types").VueTypeDef<{
        uid: any;
        name: any;
    }[]>;
    progressAttr: import("vue-types").VueTypeValidableDef<{
        [key: string]: any;
    }> & {
        default: () => {
            [key: string]: any;
        };
    };
    prefixCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    showRemoveIcon: import("vue-types").VueTypeValidableDef<boolean>;
    showDownloadIcon: import("vue-types").VueTypeValidableDef<boolean>;
    showPreviewIcon: import("vue-types").VueTypeValidableDef<boolean>;
    locale: import("vue-types").VueTypeLooseShape<{
        uploading: (string | ((props: Record<string, unknown>) => string)) & string;
        removeFile: (string | ((props: Record<string, unknown>) => string)) & string;
        downloadFile: (string | ((props: Record<string, unknown>) => string)) & string;
        uploadError: (string | ((props: Record<string, unknown>) => string)) & string;
        previewFile: (string | ((props: Record<string, unknown>) => string)) & string;
    }>;
    previewFile: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
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
};
