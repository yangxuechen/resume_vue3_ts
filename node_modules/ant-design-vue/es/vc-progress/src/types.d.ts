export namespace defaultProps {
    const percent: number;
    const prefixCls: string;
    const strokeColor: string;
    const strokeLinecap: string;
    const strokeWidth: number;
    const trailColor: string;
    const trailWidth: number;
}
export namespace propTypes {
    const percent_1: import("vue-types").VueTypeDef<string | number | (string | number)[]>;
    export { percent_1 as percent };
    const prefixCls_1: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    export { prefixCls_1 as prefixCls };
    const strokeColor_1: import("vue-types").VueTypeDef<string | {
        [key: string]: any;
    } | (string | {
        [key: string]: any;
    })[]>;
    export { strokeColor_1 as strokeColor };
    const strokeLinecap_1: import("vue-types").VueTypeDef<string>;
    export { strokeLinecap_1 as strokeLinecap };
    export { mixedType as strokeWidth };
    const trailColor_1: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    export { trailColor_1 as trailColor };
    export { mixedType as trailWidth };
}
declare const mixedType: import("vue-types").VueTypeDef<string | number>;
export {};
