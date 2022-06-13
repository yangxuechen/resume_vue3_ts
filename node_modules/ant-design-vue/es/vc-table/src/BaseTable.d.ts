export default BaseTable;
declare namespace BaseTable {
    const name: string;
    const inheritAttrs: boolean;
    namespace props {
        const fixed: import("vue-types").VueTypeDef<string | boolean>;
        const columns: import("vue-types").VueTypeValidableDef<unknown[]> & {
            default: () => unknown[];
        } & {
            required: true;
        };
        const tableClassName: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        } & {
            required: true;
        };
        const hasHead: import("vue-types").VueTypeValidableDef<boolean> & {
            required: true;
        };
        const hasBody: import("vue-types").VueTypeValidableDef<boolean> & {
            required: true;
        };
        const expander: import("vue-types").VueTypeValidableDef<{
            [key: string]: any;
        }> & {
            default: () => {
                [key: string]: any;
            };
        } & {
            required: true;
        };
        const getRowKey: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
            default: (...args: any[]) => any;
        };
        const isAnyColumnsFixed: import("vue-types").VueTypeValidableDef<boolean>;
    }
    function setup(): {
        table: () => {};
        store: () => {};
    };
    function setup(): {
        table: () => {};
        store: () => {};
    };
    namespace methods {
        function getColumns(cols: any): any;
        function getColumns(cols: any): any;
        function handleRowHover(isHover: any, key: any): void;
        function handleRowHover(isHover: any, key: any): void;
        function renderRows(renderData: any, indent: any, ancestorKeys?: any[]): JSX.Element[];
        function renderRows(renderData: any, indent: any, ancestorKeys?: any[]): JSX.Element[];
    }
    function render(): JSX.Element;
    function render(): JSX.Element;
}
