export function ExpandableTableProps(): {
    expandIconAsCell: import("vue-types").VueTypeValidableDef<boolean>;
    expandRowByClick: import("vue-types").VueTypeValidableDef<boolean>;
    expandedRowKeys: import("vue-types").VueTypeValidableDef<unknown[]> & {
        default: () => unknown[];
    };
    expandedRowClassName: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    defaultExpandAllRows: import("vue-types").VueTypeValidableDef<boolean>;
    defaultExpandedRowKeys: import("vue-types").VueTypeValidableDef<unknown[]> & {
        default: () => unknown[];
    };
    expandIconColumnIndex: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
    expandedRowRender: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    expandIcon: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    childrenColumnName: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    indentSize: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
    columnManager: import("vue-types").VueTypeValidableDef<{
        [key: string]: any;
    }> & {
        default: () => {
            [key: string]: any;
        };
    } & {
        required: true;
    };
    prefixCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        required: true;
    };
    data: import("vue-types").VueTypeValidableDef<unknown[]> & {
        default: () => unknown[];
    };
    getRowKey: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
};
export default ExpandableTable;
declare namespace ExpandableTable {
    const name: string;
    const inheritAttrs: boolean;
    const mixins: {
        methods: {
            setState(state: {}, callback: any): void;
            __emit(...args: any[]): void;
        };
    }[];
    const props: any;
    function setup(props: any): {
        store: () => {};
    };
    function setup(props: any): {
        store: () => {};
    };
    function mounted(): void;
    function mounted(): void;
    function updated(): void;
    function updated(): void;
    namespace watch {
        function expandedRowKeys(val: any): void;
        function expandedRowKeys(val: any): void;
    }
    namespace methods {
        function handleUpdated(): void;
        function handleUpdated(): void;
        function handleExpandChange(expanded: any, record: any, event: any, rowKey: any, destroy?: boolean): void;
        function handleExpandChange(expanded: any, record: any, event: any, rowKey: any, destroy?: boolean): void;
        function renderExpandIndentCell(rows: any, fixed: any): void;
        function renderExpandIndentCell(rows: any, fixed: any): void;
        function renderExpandedRow(record: any, index: any, expandedRowRender: any, className: any, ancestorKeys: any, indent: any, fixed: any): JSX.Element;
        function renderExpandedRow(record: any, index: any, expandedRowRender: any, className: any, ancestorKeys: any, indent: any, fixed: any): JSX.Element;
        function renderRows(renderRows: any, rows: any, record: any, index: any, indent: any, fixed: any, parentKey: any, ancestorKeys: any): void;
        function renderRows(renderRows: any, rows: any, record: any, index: any, indent: any, fixed: any, parentKey: any, ancestorKeys: any): void;
    }
    function render(): any[];
    function render(): any[];
}
