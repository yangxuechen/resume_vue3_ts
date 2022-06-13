export default TableRow;
declare namespace TableRow {
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
        visible: import("vue").ComputedRef<boolean>;
        hovered: import("vue").ComputedRef<boolean>;
        height: import("vue").ComputedRef<any>;
    };
    function setup(props: any): {
        store: () => {};
        visible: import("vue").ComputedRef<boolean>;
        hovered: import("vue").ComputedRef<boolean>;
        height: import("vue").ComputedRef<any>;
    };
    function data(): {
        shouldRender: any;
    };
    function data(): {
        shouldRender: any;
    };
    function mounted(): void;
    function mounted(): void;
    namespace watch {
        function visible(val: any): void;
        function visible(val: any): void;
    }
    function updated(): void;
    function updated(): void;
    namespace methods {
        function onRowClick(event: any, rowPropFunc?: typeof noop): void;
        function onRowClick(event: any, rowPropFunc?: typeof noop): void;
        function onRowDoubleClick(event: any, rowPropFunc?: typeof noop): void;
        function onRowDoubleClick(event: any, rowPropFunc?: typeof noop): void;
        function onContextMenu(event: any, rowPropFunc?: typeof noop): void;
        function onContextMenu(event: any, rowPropFunc?: typeof noop): void;
        function onMouseEnter(event: any, rowPropFunc?: typeof noop): void;
        function onMouseEnter(event: any, rowPropFunc?: typeof noop): void;
        function onMouseLeave(event: any, rowPropFunc?: typeof noop): void;
        function onMouseLeave(event: any, rowPropFunc?: typeof noop): void;
        function setExpandedRowHeight(): void;
        function setExpandedRowHeight(): void;
        function setRowHeight(): void;
        function setRowHeight(): void;
        function getStyle(): any;
        function getStyle(): any;
        function saveRowRef(): void;
        function saveRowRef(): void;
    }
    function render(): JSX.Element;
    function render(): JSX.Element;
}
declare function noop(): void;
