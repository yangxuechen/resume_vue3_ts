export default TableHeaderRow;
declare namespace TableHeaderRow {
    const name: string;
    const inheritAttrs: boolean;
    namespace props {
        const index: import("vue-types").VueTypeValidableDef<number> & {
            default: number;
        };
        const fixed: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        };
        const columns: import("vue-types").VueTypeValidableDef<unknown[]> & {
            default: () => unknown[];
        };
        const rows: import("vue-types").VueTypeValidableDef<unknown[]> & {
            default: () => unknown[];
        };
        const row: import("vue-types").VueTypeValidableDef<unknown[]> & {
            default: () => unknown[];
        };
        const components: import("vue-types").VueTypeValidableDef<{
            [key: string]: any;
        }> & {
            default: () => {
                [key: string]: any;
            };
        };
        const customHeaderRow: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
            default: (...args: any[]) => any;
        };
        const prefixCls: any;
    }
    function setup(props: any): {
        height: import("vue").ComputedRef<string>;
        store: () => {};
    };
    function setup(props: any): {
        height: import("vue").ComputedRef<string>;
        store: () => {};
    };
    function render(): JSX.Element;
    function render(): JSX.Element;
}
