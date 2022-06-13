declare namespace _default {
    export { ILazyRenderBoxPropTypes as props };
    export function render(): JSX.Element;
    export function render(): JSX.Element;
}
export default _default;
declare namespace ILazyRenderBoxPropTypes {
    const visible: import("vue-types").VueTypeValidableDef<boolean>;
    const hiddenClassName: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    const forceRender: import("vue-types").VueTypeValidableDef<boolean>;
}
