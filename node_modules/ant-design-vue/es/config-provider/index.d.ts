import type { PropType, ExtractPropTypes, UnwrapRef } from 'vue';
import defaultRenderEmpty, { RenderEmptyHandler } from './renderEmpty';
import type { Locale } from '../locale-provider';
import type { TransformCellTextProps } from '../table/interface';
import type { RequiredMark } from '../form/Form';
export declare type SizeType = 'small' | 'middle' | 'large' | undefined;
export interface CSPConfig {
    nonce?: string;
}
export { RenderEmptyHandler };
export declare type Direction = 'ltr' | 'rtl';
export interface ConfigConsumerProps {
    getTargetContainer?: () => HTMLElement;
    getPopupContainer?: (triggerNode: HTMLElement) => HTMLElement;
    rootPrefixCls?: string;
    getPrefixCls: (suffixCls?: string, customizePrefixCls?: string) => string;
    renderEmpty: RenderEmptyHandler;
    transformCellText?: (tableProps: TransformCellTextProps) => any;
    csp?: CSPConfig;
    autoInsertSpaceInButton?: boolean;
    input?: {
        autoComplete?: string;
    };
    locale?: Locale;
    pageHeader?: {
        ghost: boolean;
    };
    componentSize?: SizeType;
    direction?: 'ltr' | 'rtl';
    space?: {
        size?: SizeType | number;
    };
    virtual?: boolean;
    dropdownMatchSelectWidth?: boolean;
}
export declare const configConsumerProps: string[];
export declare const configProviderProps: {
    getTargetContainer: {
        type: PropType<() => HTMLElement>;
    };
    getPopupContainer: {
        type: PropType<(triggerNode: HTMLElement) => HTMLElement>;
    };
    prefixCls: StringConstructor;
    getPrefixCls: {
        type: PropType<(suffixCls?: string, customizePrefixCls?: string) => string>;
    };
    renderEmpty: {
        type: PropType<typeof defaultRenderEmpty>;
    };
    transformCellText: {
        type: PropType<(tableProps: TransformCellTextProps) => any>;
    };
    csp: {
        type: PropType<CSPConfig>;
    };
    autoInsertSpaceInButton: import("vue-types").VueTypeValidableDef<boolean>;
    locale: {
        type: PropType<Locale>;
    };
    pageHeader: {
        type: PropType<{
            ghost: boolean;
        }>;
    };
    componentSize: {
        type: PropType<SizeType>;
    };
    direction: {
        type: PropType<"ltr" | "rtl">;
    };
    space: {
        type: PropType<{
            size: SizeType | number;
        }>;
    };
    virtual: import("vue-types").VueTypeValidableDef<boolean>;
    dropdownMatchSelectWidth: import("vue-types").VueTypeValidableDef<boolean>;
    form: {
        type: PropType<{
            requiredMark?: RequiredMark;
        }>;
    };
};
export declare type ConfigProviderProps = Partial<ExtractPropTypes<typeof configProviderProps>>;
export declare const defaultConfigProvider: UnwrapRef<ConfigProviderProps>;
declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{}> & Omit<Readonly<{
            getTargetContainer?: unknown;
            getPopupContainer?: unknown;
            prefixCls?: unknown;
            getPrefixCls?: unknown;
            renderEmpty?: unknown;
            transformCellText?: unknown;
            csp?: unknown;
            autoInsertSpaceInButton?: unknown;
            locale?: unknown;
            pageHeader?: unknown;
            componentSize?: unknown;
            direction?: unknown;
            space?: unknown;
            virtual?: unknown;
            dropdownMatchSelectWidth?: unknown;
            form?: unknown;
        } & {} & {
            locale?: Locale;
            getPrefixCls?: (suffixCls?: string, customizePrefixCls?: string) => string;
            getTargetContainer?: () => HTMLElement;
            getPopupContainer?: (triggerNode: HTMLElement) => HTMLElement;
            prefixCls?: string;
            renderEmpty?: typeof defaultRenderEmpty;
            transformCellText?: (tableProps: TransformCellTextProps) => any;
            csp?: unknown;
            autoInsertSpaceInButton?: boolean;
            pageHeader?: {
                ghost: boolean;
            };
            componentSize?: SizeType;
            direction?: "ltr" | "rtl";
            space?: {
                size: number | SizeType;
            };
            virtual?: boolean;
            dropdownMatchSelectWidth?: boolean;
            form?: unknown;
        }> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, never>;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: import("vue").Slot;
        }>;
        $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>;
        $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>;
        $emit: (event: string, ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<{
            getTargetContainer?: unknown;
            getPopupContainer?: unknown;
            prefixCls?: unknown;
            getPrefixCls?: unknown;
            renderEmpty?: unknown;
            transformCellText?: unknown;
            csp?: unknown;
            autoInsertSpaceInButton?: unknown;
            locale?: unknown;
            pageHeader?: unknown;
            componentSize?: unknown;
            direction?: unknown;
            space?: unknown;
            virtual?: unknown;
            dropdownMatchSelectWidth?: unknown;
            form?: unknown;
        } & {} & {
            locale?: Locale;
            getPrefixCls?: (suffixCls?: string, customizePrefixCls?: string) => string;
            getTargetContainer?: () => HTMLElement;
            getPopupContainer?: (triggerNode: HTMLElement) => HTMLElement;
            prefixCls?: string;
            renderEmpty?: typeof defaultRenderEmpty;
            transformCellText?: (tableProps: TransformCellTextProps) => any;
            csp?: unknown;
            autoInsertSpaceInButton?: boolean;
            pageHeader?: {
                ghost: boolean;
            };
            componentSize?: SizeType;
            direction?: "ltr" | "rtl";
            space?: {
                size: number | SizeType;
            };
            virtual?: boolean;
            dropdownMatchSelectWidth?: boolean;
            form?: unknown;
        }>, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {}> & {
            beforeCreate?: (() => void) | (() => void)[];
            created?: (() => void) | (() => void)[];
            beforeMount?: (() => void) | (() => void)[];
            mounted?: (() => void) | (() => void)[];
            beforeUpdate?: (() => void) | (() => void)[];
            updated?: (() => void) | (() => void)[];
            activated?: (() => void) | (() => void)[];
            deactivated?: (() => void) | (() => void)[];
            beforeDestroy?: (() => void) | (() => void)[];
            beforeUnmount?: (() => void) | (() => void)[];
            destroyed?: (() => void) | (() => void)[];
            unmounted?: (() => void) | (() => void)[];
            renderTracked?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[];
            renderTriggered?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[];
            errorCaptured?: ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>, info: string) => boolean | void)[];
        };
        $forceUpdate: () => void;
        $nextTick: typeof import("vue").nextTick;
        $watch(source: string | Function, cb: Function, options?: import("vue").WatchOptions<boolean>): import("vue").WatchStopHandle;
    } & Readonly<{
        getTargetContainer?: unknown;
        getPopupContainer?: unknown;
        prefixCls?: unknown;
        getPrefixCls?: unknown;
        renderEmpty?: unknown;
        transformCellText?: unknown;
        csp?: unknown;
        autoInsertSpaceInButton?: unknown;
        locale?: unknown;
        pageHeader?: unknown;
        componentSize?: unknown;
        direction?: unknown;
        space?: unknown;
        virtual?: unknown;
        dropdownMatchSelectWidth?: unknown;
        form?: unknown;
    } & {} & {
        locale?: Locale;
        getPrefixCls?: (suffixCls?: string, customizePrefixCls?: string) => string;
        getTargetContainer?: () => HTMLElement;
        getPopupContainer?: (triggerNode: HTMLElement) => HTMLElement;
        prefixCls?: string;
        renderEmpty?: typeof defaultRenderEmpty;
        transformCellText?: (tableProps: TransformCellTextProps) => any;
        csp?: unknown;
        autoInsertSpaceInButton?: boolean;
        pageHeader?: {
            ghost: boolean;
        };
        componentSize?: SizeType;
        direction?: "ltr" | "rtl";
        space?: {
            size: number | SizeType;
        };
        virtual?: boolean;
        dropdownMatchSelectWidth?: boolean;
        form?: unknown;
    }> & import("vue").ShallowUnwrapRef<() => JSX.Element> & {} & {} & import("vue").ComponentCustomProperties;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<{
    getTargetContainer?: unknown;
    getPopupContainer?: unknown;
    prefixCls?: unknown;
    getPrefixCls?: unknown;
    renderEmpty?: unknown;
    transformCellText?: unknown;
    csp?: unknown;
    autoInsertSpaceInButton?: unknown;
    locale?: unknown;
    pageHeader?: unknown;
    componentSize?: unknown;
    direction?: unknown;
    space?: unknown;
    virtual?: unknown;
    dropdownMatchSelectWidth?: unknown;
    form?: unknown;
} & {} & {
    locale?: Locale;
    getPrefixCls?: (suffixCls?: string, customizePrefixCls?: string) => string;
    getTargetContainer?: () => HTMLElement;
    getPopupContainer?: (triggerNode: HTMLElement) => HTMLElement;
    prefixCls?: string;
    renderEmpty?: typeof defaultRenderEmpty;
    transformCellText?: (tableProps: TransformCellTextProps) => any;
    csp?: unknown;
    autoInsertSpaceInButton?: boolean;
    pageHeader?: {
        ghost: boolean;
    };
    componentSize?: SizeType;
    direction?: "ltr" | "rtl";
    space?: {
        size: number | SizeType;
    };
    virtual?: boolean;
    dropdownMatchSelectWidth?: boolean;
    form?: unknown;
}>, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("@vue/runtime-core").Plugin;
export default _default;
