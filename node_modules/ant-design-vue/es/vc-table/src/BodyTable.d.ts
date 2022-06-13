declare namespace _default {
    const name: string;
    const inheritAttrs: boolean;
    namespace props {
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
        const handleBodyScroll: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
            default: (...args: any[]) => any;
        } & {
            required: true;
        };
        const handleWheel: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
            default: (...args: any[]) => any;
        } & {
            required: true;
        };
        const getRowKey: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
            default: (...args: any[]) => any;
        } & {
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
        const isAnyColumnsFixed: import("vue-types").VueTypeValidableDef<boolean>;
    }
    function setup(): {
        table: {};
    };
    function setup(): {
        table: {};
    };
    function render(): JSX.Element;
    function render(): JSX.Element;
}
export default _default;
