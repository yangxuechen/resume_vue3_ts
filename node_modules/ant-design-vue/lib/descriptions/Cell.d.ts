import type { VNodeTypes, HTMLAttributes, FunctionalComponent, CSSProperties } from 'vue';
interface CellProps extends HTMLAttributes {
    itemPrefixCls: string;
    span: number;
    component: string;
    labelStyle?: CSSProperties;
    contentStyle?: CSSProperties;
    bordered?: boolean;
    label?: VNodeTypes;
    content?: VNodeTypes;
    colon?: boolean;
}
declare const Cell: FunctionalComponent<CellProps>;
export default Cell;
