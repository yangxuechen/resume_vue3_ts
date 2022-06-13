export default SearchInput;
declare namespace SearchInput {
    const name: string;
    const inheritAttrs: boolean;
    namespace props {
        const open: import("vue-types").VueTypeValidableDef<boolean>;
        const searchValue: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        };
        const prefixCls: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        };
        const disabled: import("vue-types").VueTypeValidableDef<boolean>;
        const renderPlaceholder: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
            default: (...args: any[]) => any;
        };
        const needAlign: import("vue-types").VueTypeValidableDef<boolean>;
        const ariaId: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        };
        const isMultiple: import("vue-types").VueTypeValidableDef<boolean> & {
            default: boolean;
        };
        const showSearch: import("vue-types").VueTypeValidableDef<boolean>;
    }
    const emits: string[];
    function setup(props: any, { emit }: {
        emit: any;
    }): {
        measureRef: import("vue").Ref<any>;
        inputWidth: import("vue").Ref<number>;
        vcTreeSelect: {};
        mirrorSearchValue: any;
    };
    function setup(props: any, { emit }: {
        emit: any;
    }): {
        measureRef: import("vue").Ref<any>;
        inputWidth: import("vue").Ref<number>;
        vcTreeSelect: {};
        mirrorSearchValue: any;
    };
    function created(): void;
    function created(): void;
    function mounted(): void;
    function mounted(): void;
    function updated(): void;
    function updated(): void;
    namespace methods {
        /**
         * Need additional timeout for focus cause parent dom is not ready when didMount trigger
         */
        function focus(isDidMount: any): void;
        /**
         * Need additional timeout for focus cause parent dom is not ready when didMount trigger
         */
        function focus(isDidMount: any): void;
        function blur(): void;
        function blur(): void;
        function handleInputChange(e: any): void;
        function handleInputChange(e: any): void;
    }
    function render(): JSX.Element;
    function render(): JSX.Element;
}
