declare namespace _default {
    const name: string;
    const mixins: {
        methods: {
            setState(state: {}, callback: any): void;
            __emit(...args: any[]): void;
        };
    }[];
    const inheritAttrs: boolean;
    namespace props {
        namespace inkBarAnimated {
            export const type: BooleanConstructor;
            const _default: boolean;
            export { _default as default };
        }
        const direction: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        };
        const prefixCls: StringConstructor;
        const styles: ObjectConstructor;
        const tabBarPosition: StringConstructor;
        const saveRef: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
            default: (...args: any[]) => any;
        } & {
            default: (...args: any[]) => any;
        };
        const getRef: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
            default: (...args: any[]) => any;
        } & {
            default: (...args: any[]) => any;
        };
        const panels: import("vue-types").VueTypeValidableDef<unknown[]> & {
            default: () => unknown[];
        };
        const activeKey: import("vue-types").VueTypeDef<string | number>;
    }
    function updated(): void;
    function updated(): void;
    function mounted(): void;
    function mounted(): void;
    function render(): JSX.Element;
    function render(): JSX.Element;
}
export default _default;
