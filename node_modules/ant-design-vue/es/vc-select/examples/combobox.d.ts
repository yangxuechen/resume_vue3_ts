export default Combobox;
declare namespace Combobox {
    function data(): {
        disabled: boolean;
        value: string;
        options: any[];
    };
    function data(): {
        disabled: boolean;
        value: string;
        options: any[];
    };
    function mounted(): void;
    function mounted(): void;
    namespace methods {
        function onChange(value: any, option: any): void;
        function onChange(value: any, option: any): void;
        function onKeyDown(e: any): void;
        function onKeyDown(e: any): void;
        function onSelect(v: any, option: any): void;
        function onSelect(v: any, option: any): void;
        function onSearch(text: any): void;
        function onSearch(text: any): void;
        function onAsyncChange(value: any): void;
        function onAsyncChange(value: any): void;
        function toggleDisabled(): void;
        function toggleDisabled(): void;
    }
    function render(): JSX.Element;
    function render(): JSX.Element;
}
