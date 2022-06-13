import type { PropType, ExtractPropTypes } from 'vue';
import type { VueNode } from '../_util/type';
export interface Route {
    path: string;
    breadcrumbName: string;
    children?: Omit<Route, 'children'>[];
}
declare const breadcrumbProps: {
    prefixCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    routes: {
        type: PropType<Route[]>;
    };
    params: import("vue-types").VueTypeValidableDef<any>;
    separator: import("vue-types").VueTypeValidableDef<any>;
    itemRender: {
        type: PropType<(opt: {
            route: Route;
            params: unknown;
            routes: Route[];
            paths: string[];
        }) => VueNode>;
    };
};
export declare type BreadcrumbProps = Partial<ExtractPropTypes<typeof breadcrumbProps>>;
declare const _default: import("vue").DefineComponent<{
    prefixCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    routes: {
        type: PropType<Route[]>;
    };
    params: import("vue-types").VueTypeValidableDef<any>;
    separator: import("vue-types").VueTypeValidableDef<any>;
    itemRender: {
        type: PropType<(opt: {
            route: Route;
            params: unknown;
            routes: Route[];
            paths: string[];
        }) => VueNode>;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    prefixCls?: unknown;
    routes?: unknown;
    params?: unknown;
    separator?: unknown;
    itemRender?: unknown;
} & {
    prefixCls: string;
} & {
    separator?: any;
    itemRender?: (opt: {
        route: Route;
        params: unknown;
        routes: Route[];
        paths: string[];
    }) => VueNode;
    routes?: Route[];
    params?: any;
}>, {
    prefixCls: string;
}>;
export default _default;
