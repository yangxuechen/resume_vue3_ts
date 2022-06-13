import type { VNodeTypes, PropType, ComputedRef } from 'vue';
import type { Locale } from '.';
export interface LocaleReceiverProps {
    componentName?: string;
    defaultLocale?: Locale | Function;
    children: (locale: Locale, localeCode?: string, fullLocale?: Locale) => VNodeTypes;
}
interface LocaleInterface {
    [key: string]: any;
}
export interface LocaleReceiverContext {
    antLocale?: LocaleInterface;
}
declare const _default: import("vue").DefineComponent<{
    componentName: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    defaultLocale: {
        type: (ObjectConstructor | FunctionConstructor)[];
    };
    children: {
        type: PropType<(locale: any, localeCode?: string, fullLocale?: object) => VNodeTypes>;
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>[] | VNodeTypes, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    componentName?: unknown;
    defaultLocale?: unknown;
    children?: unknown;
} & {
    componentName: string;
} & {
    defaultLocale?: Function | Record<string, any>;
    children?: (locale: any, localeCode?: string, fullLocale?: object) => VNodeTypes;
}>, {
    componentName: string;
}>;
export default _default;
declare type LocaleComponent = keyof Locale;
export declare function useLocaleReceiver<T extends LocaleComponent>(componentName: T, defaultLocale?: Locale[T] | Function): [ComputedRef<Locale[T]>];
