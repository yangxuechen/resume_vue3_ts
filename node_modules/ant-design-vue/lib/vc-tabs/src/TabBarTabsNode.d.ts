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
        const activeKey: import("vue-types").VueTypeDef<string | number>;
        const panels: import("vue-types").VueTypeValidableDef<any> & {
            default: any;
        };
        const prefixCls: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        } & {
            default: string;
        };
        const tabBarGutter: import("vue-types").VueTypeValidableDef<any> & {
            default: any;
        };
        const onTabClick: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
            default: (...args: any[]) => any;
        };
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
        const renderTabBarNode: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
            default: (...args: any[]) => any;
        };
        const tabBarPosition: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        };
        const direction: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        };
    }
    function render(): JSX.Element;
    function render(): JSX.Element;
}
export default _default;
