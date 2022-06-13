export default InputHandler;
declare namespace InputHandler {
    const name: string;
    const inheritAttrs: boolean;
    namespace props {
        const prefixCls: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        };
        const disabled: import("vue-types").VueTypeValidableDef<boolean>;
    }
    function render(): JSX.Element;
    function render(): JSX.Element;
}
