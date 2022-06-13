import type { ExtractPropTypes } from 'vue';
export declare type AnchorContainer = HTMLElement | Window;
declare const anchorProps: {
    prefixCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    offsetTop: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
    bounds: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
    affix: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
    showInkInFixed: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
    getContainer: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    } & {
        default: (...args: any[]) => any;
    };
    wrapperClass: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    wrapperStyle: import("vue-types").VueTypeValidableDef<import("vue").CSSProperties>;
    getCurrentAnchor: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    targetOffset: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
    onChange: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    onClick: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
};
export declare type AnchorProps = Partial<ExtractPropTypes<typeof anchorProps>>;
export interface AnchorState {
    scrollContainer: HTMLElement | Window;
    links: string[];
    scrollEvent: any;
    animating: boolean;
}
declare const _default: import("vue").DefineComponent<{
    prefixCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    offsetTop: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
    bounds: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
    affix: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
    showInkInFixed: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
    getContainer: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    } & {
        default: (...args: any[]) => any;
    };
    wrapperClass: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    wrapperStyle: import("vue-types").VueTypeValidableDef<import("vue").CSSProperties>;
    getCurrentAnchor: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    targetOffset: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
    onChange: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    onClick: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "click")[], "change" | "click", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    prefixCls?: unknown;
    offsetTop?: unknown;
    bounds?: unknown;
    affix?: unknown;
    showInkInFixed?: unknown;
    getContainer?: unknown;
    wrapperClass?: unknown;
    wrapperStyle?: unknown;
    getCurrentAnchor?: unknown;
    targetOffset?: unknown;
    onChange?: unknown;
    onClick?: unknown;
} & {
    prefixCls: string;
    offsetTop: number;
    affix: boolean;
    bounds: number;
    showInkInFixed: boolean;
    wrapperClass: string;
    targetOffset: number;
} & {
    onChange?: (...args: any[]) => any;
    onClick?: (...args: any[]) => any;
    getContainer?: (...args: any[]) => any;
    wrapperStyle?: import("vue").CSSProperties;
    getCurrentAnchor?: (...args: any[]) => any;
}> & {
    onChange?: (...args: any[]) => any;
    onClick?: (...args: any[]) => any;
}, {
    prefixCls: string;
    onChange: (...args: any[]) => any;
    onClick: (...args: any[]) => any;
    offsetTop: number;
    affix: boolean;
    getContainer: (...args: any[]) => any;
    bounds: number;
    showInkInFixed: boolean;
    wrapperClass: string;
    getCurrentAnchor: (...args: any[]) => any;
    targetOffset: number;
}>;
export default _default;
