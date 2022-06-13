import type { VueNode } from '../_util/type';
export interface ErrorListProps {
    errors?: VueNode[];
    /** @private Internal Usage. Do not use in your production */
    help?: VueNode;
    /** @private Internal Usage. Do not use in your production */
    onDomErrorVisibleChange?: (visible: boolean) => void;
}
declare const _default: import("vue").DefineComponent<Readonly<{
    errors?: any;
    help?: any;
    onDomErrorVisibleChange?: any;
}>, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    readonly errors?: unknown;
    readonly help?: unknown;
    readonly onDomErrorVisibleChange?: unknown;
} & {
    errors: any;
    help: any;
    onDomErrorVisibleChange: any;
} & {}>, {
    errors: any;
    help: any;
    onDomErrorVisibleChange: any;
}>;
export default _default;
