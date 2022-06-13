declare namespace _default {
    const name: string;
    const inheritAttrs: boolean;
    namespace props {
        const fixed: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        };
        const columns: import("vue-types").VueTypeValidableDef<unknown[]> & {
            default: () => unknown[];
        };
    }
    function setup(): {
        table: {};
        store: () => {};
    };
    function setup(): {
        table: {};
        store: () => {};
    };
    function render(): JSX.Element;
    function render(): JSX.Element;
}
export default _default;
