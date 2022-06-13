export default ExpandableRow;
declare namespace ExpandableRow {
    const mixins: {
        methods: {
            setState(state: {}, callback: any): void;
            __emit(...args: any[]): void;
        };
    }[];
    const name: string;
    const inheritAttrs: boolean;
    namespace props {
        const prefixCls: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        } & {
            required: true;
        };
        const rowKey: import("vue-types").VueTypeDef<string | number> & {
            required: true;
        };
        const fixed: import("vue-types").VueTypeDef<string | boolean>;
        const record: import("vue-types").VueTypeDef<{
            [key: string]: any;
        }> & {
            required: true;
        };
        const indentSize: import("vue-types").VueTypeValidableDef<number> & {
            default: number;
        };
        const needIndentSpaced: import("vue-types").VueTypeValidableDef<boolean> & {
            required: true;
        };
        const expandRowByClick: import("vue-types").VueTypeValidableDef<boolean>;
        const expandIconAsCell: import("vue-types").VueTypeValidableDef<boolean>;
        const expandIconColumnIndex: import("vue-types").VueTypeValidableDef<number> & {
            default: number;
        };
        const childrenColumnName: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        };
        const expandedRowRender: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
            default: (...args: any[]) => any;
        };
        const expandIcon: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
            default: (...args: any[]) => any;
        };
    }
    function setup(props: any): {
        expanded: import("vue").ComputedRef<any>;
    };
    function setup(props: any): {
        expanded: import("vue").ComputedRef<any>;
    };
    function beforeUnmount(): void;
    function beforeUnmount(): void;
    namespace methods {
        function hasExpandIcon(columnIndex: any): boolean;
        function hasExpandIcon(columnIndex: any): boolean;
        function handleExpandChange(record: any, event: any): void;
        function handleExpandChange(record: any, event: any): void;
        function handleDestroy(): void;
        function handleDestroy(): void;
        function handleRowClick(record: any, index: any, event: any): void;
        function handleRowClick(record: any, index: any, event: any): void;
        function renderExpandIcon(): any;
        function renderExpandIcon(): any;
        function renderExpandIconCell(cells: any): void;
        function renderExpandIconCell(cells: any): void;
    }
    function render(): any[];
    function render(): any[];
}
