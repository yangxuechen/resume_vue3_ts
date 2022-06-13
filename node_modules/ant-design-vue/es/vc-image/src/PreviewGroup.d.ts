import type { Ref } from 'vue';
export interface GroupConsumerProps {
    previewPrefixCls?: string;
}
export interface GroupConsumerValue extends GroupConsumerProps {
    isPreviewGroup?: Ref<boolean | undefined>;
    previewUrls: Record<number, string>;
    setPreviewUrls: (previewUrls: Record<number, string>) => void;
    current: Ref<number>;
    setCurrent: (current: number) => void;
    setShowPreview: (isShowPreview: boolean) => void;
    setMousePosition: (mousePosition: null | {
        x: number;
        y: number;
    }) => void;
    registerImage: (id: number, url: string) => () => void;
}
export declare const context: {
    provide: (val: GroupConsumerValue) => void;
    inject: () => GroupConsumerValue;
};
declare const Group: import("vue").DefineComponent<{
    previewPrefixCls: StringConstructor;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    previewPrefixCls?: unknown;
} & {} & {
    previewPrefixCls?: string;
}>, {}>;
export default Group;
