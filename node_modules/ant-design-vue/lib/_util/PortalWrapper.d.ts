declare var _default: import("vue").DefineComponent<{
    wrapperClassName: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    forceRender: import("vue-types").VueTypeValidableDef<boolean>;
    getContainer: import("vue-types").VueTypeValidableDef<any>;
    children: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    visible: import("vue-types").VueTypeValidableDef<boolean>;
}, any, {}, {}, {
    getParent(): any;
    getDomContainer(): any;
    setWrapperClassName(): void;
    savePortal(c: any): void;
    removeCurrentContainer(): void;
    /**
     * Enhance ./switchScrollingEffect
     * 1. Simulate document body scroll bar with
     * 2. Record body has overflow style and recover when all of PortalWrapper invisible
     * 3. Disable body scroll when PortalWrapper has open
     *
     * @memberof PortalWrapper
     */
    switchScrollingEffect(): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    wrapperClassName?: unknown;
    forceRender?: unknown;
    getContainer?: unknown;
    children?: unknown;
    visible?: unknown;
} & {
    wrapperClassName: string;
} & {
    children?: (...args: any[]) => any;
    visible?: boolean;
    forceRender?: boolean;
    getContainer?: any;
}>, {
    children: (...args: any[]) => any;
    wrapperClassName: string;
}>;
export default _default;
