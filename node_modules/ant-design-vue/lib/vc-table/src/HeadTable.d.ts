declare namespace _default {
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
        const handleBodyScrollLeft: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
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
