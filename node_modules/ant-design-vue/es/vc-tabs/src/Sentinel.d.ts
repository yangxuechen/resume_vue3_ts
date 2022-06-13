declare namespace _default {
    const name: string;
    namespace props {
        const setRef: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
            default: (...args: any[]) => any;
        };
        const prevElement: import("vue-types").VueTypeValidableDef<any>;
        const nextElement: import("vue-types").VueTypeValidableDef<any>;
    }
    namespace methods {
        function onKeyDown({ target, which, shiftKey }: {
            target: any;
            which: any;
            shiftKey: any;
        }): void;
        function onKeyDown({ target, which, shiftKey }: {
            target: any;
            which: any;
            shiftKey: any;
        }): void;
    }
    function render(): JSX.Element;
    function render(): JSX.Element;
}
export default _default;
