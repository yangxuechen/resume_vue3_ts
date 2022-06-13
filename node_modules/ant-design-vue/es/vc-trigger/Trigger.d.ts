declare var _default: import("vue").DefineComponent<{
    action: import("vue-types").VueTypeDef<string | string[]> & {
        default: string | (() => string[]);
    };
    showAction: import("vue-types").VueTypeValidableDef<any> & {
        default: any;
    };
    hideAction: import("vue-types").VueTypeValidableDef<any> & {
        default: any;
    };
    getPopupClassNameFromAlign: import("vue-types").VueTypeValidableDef<any> & {
        default: any;
    };
    onPopupVisibleChange: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    } & {
        default: (...args: any[]) => any;
    };
    afterPopupVisibleChange: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    } & {
        default: (...args: any[]) => any;
    };
    popup: import("vue-types").VueTypeValidableDef<any>;
    popupStyle: import("vue-types").VueTypeValidableDef<{
        [key: string]: any;
    }> & {
        default: () => {
            [key: string]: any;
        };
    } & {
        default: () => {
            [key: string]: any;
        };
    };
    prefixCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    popupClassName: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    popupPlacement: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    builtinPlacements: import("vue-types").VueTypeValidableDef<{
        [key: string]: any;
    }> & {
        default: () => {
            [key: string]: any;
        };
    };
    popupTransitionName: import("vue-types").VueTypeDef<string | {
        [key: string]: any;
    }>;
    popupAnimation: import("vue-types").VueTypeValidableDef<any>;
    mouseEnterDelay: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    } & {
        default: number;
    };
    mouseLeaveDelay: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    } & {
        default: number;
    };
    zIndex: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
    focusDelay: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    } & {
        default: number;
    };
    blurDelay: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    } & {
        default: number;
    };
    getPopupContainer: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    getDocument: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    } & {
        default: (...args: any[]) => any;
    };
    forceRender: import("vue-types").VueTypeValidableDef<boolean>;
    destroyPopupOnHide: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
    mask: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
    maskClosable: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
    popupAlign: import("vue-types").VueTypeValidableDef<{
        [key: string]: any;
    }> & {
        default: () => {
            [key: string]: any;
        };
    } & {
        default: () => {
            [key: string]: any;
        };
    };
    popupVisible: import("vue-types").VueTypeValidableDef<boolean>;
    defaultPopupVisible: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
    maskTransitionName: import("vue-types").VueTypeDef<string | {
        [key: string]: any;
    }>;
    maskAnimation: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    stretch: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    alignPoint: import("vue-types").VueTypeValidableDef<boolean>;
}, {
    vcTriggerContext: {};
    savePopupRef: typeof noop;
    dialogContext: any;
}, {
    prevPopupVisible: boolean;
    sPopupVisible: boolean;
    point: any;
}, {}, {
    updatedCal(): void;
    onMouseenter(e: any): void;
    onMouseMove(e: any): void;
    onMouseleave(e: any): void;
    onPopupMouseenter(): void;
    onPopupMouseleave(e: any): void;
    onFocus(e: any): void;
    onMousedown(e: any): void;
    onTouchstart(e: any): void;
    onBlur(e: any): void;
    onContextmenu(e: any): void;
    onContextmenuClose(): void;
    onClick(event: any): void;
    onPopupMouseDown(...args: any[]): void;
    onDocumentClick(event: any): void;
    getPopupDomNode(): any;
    getRootDomNode(): any;
    handleGetPopupClassFromAlign(align: any): string;
    getPopupAlign(): any;
    savePopup(node: any): void;
    getComponent(): JSX.Element;
    getContainer(): HTMLDivElement;
    setPopupVisible(sPopupVisible: any, event: any): void;
    setPoint(point: any): void;
    handlePortalUpdate(): void;
    delaySetPopupVisible(visible: any, delayS: any, event: any): void;
    clearDelayTimer(): void;
    clearOutsideHandler(): void;
    createTwoChains(event: any): () => void;
    isClickToShow(): boolean;
    isContextmenuToShow(): boolean;
    isClickToHide(): boolean;
    isMouseEnterToShow(): boolean;
    isMouseLeaveToHide(): boolean;
    isFocusToShow(): boolean;
    isBlurToHide(): boolean;
    forcePopupAlign(): void;
    fireEvents(type: any, e: any): void;
    close(): void;
}, {
    methods: {
        setState(state: {}, callback: any): void;
        __emit(...args: any[]): void;
    };
}, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    action?: unknown;
    showAction?: unknown;
    hideAction?: unknown;
    getPopupClassNameFromAlign?: unknown;
    onPopupVisibleChange?: unknown;
    afterPopupVisibleChange?: unknown;
    popup?: unknown;
    popupStyle?: unknown;
    prefixCls?: unknown;
    popupClassName?: unknown;
    popupPlacement?: unknown;
    builtinPlacements?: unknown;
    popupTransitionName?: unknown;
    popupAnimation?: unknown;
    mouseEnterDelay?: unknown;
    mouseLeaveDelay?: unknown;
    zIndex?: unknown;
    focusDelay?: unknown;
    blurDelay?: unknown;
    getPopupContainer?: unknown;
    getDocument?: unknown;
    forceRender?: unknown;
    destroyPopupOnHide?: unknown;
    mask?: unknown;
    maskClosable?: unknown;
    popupAlign?: unknown;
    popupVisible?: unknown;
    defaultPopupVisible?: unknown;
    maskTransitionName?: unknown;
    maskAnimation?: unknown;
    stretch?: unknown;
    alignPoint?: unknown;
} & {
    prefixCls: string;
    mask: boolean;
    stretch: string;
    action: string | string[];
    popupStyle: {
        [key: string]: any;
    };
    popupClassName: string;
    popupPlacement: string;
    builtinPlacements: {
        [key: string]: any;
    };
    mouseEnterDelay: number;
    mouseLeaveDelay: number;
    zIndex: number;
    focusDelay: number;
    blurDelay: number;
    destroyPopupOnHide: boolean;
    maskClosable: boolean;
    popupAlign: {
        [key: string]: any;
    };
    defaultPopupVisible: boolean;
    maskAnimation: string;
} & {
    getPopupContainer?: (...args: any[]) => any;
    showAction?: any;
    hideAction?: any;
    getPopupClassNameFromAlign?: any;
    onPopupVisibleChange?: (...args: any[]) => any;
    afterPopupVisibleChange?: (...args: any[]) => any;
    popup?: any;
    popupTransitionName?: string | {
        [key: string]: any;
    };
    popupAnimation?: any;
    getDocument?: (...args: any[]) => any;
    forceRender?: boolean;
    popupVisible?: boolean;
    maskTransitionName?: string | {
        [key: string]: any;
    };
    alignPoint?: boolean;
}>, {
    getPopupContainer: (...args: any[]) => any;
    prefixCls: string;
    mask: boolean;
    stretch: string;
    action: string | string[];
    showAction: any;
    hideAction: any;
    getPopupClassNameFromAlign: any;
    onPopupVisibleChange: (...args: any[]) => any;
    afterPopupVisibleChange: (...args: any[]) => any;
    popupStyle: {
        [key: string]: any;
    };
    popupClassName: string;
    popupPlacement: string;
    builtinPlacements: {
        [key: string]: any;
    };
    mouseEnterDelay: number;
    mouseLeaveDelay: number;
    zIndex: number;
    focusDelay: number;
    blurDelay: number;
    getDocument: (...args: any[]) => any;
    destroyPopupOnHide: boolean;
    maskClosable: boolean;
    popupAlign: {
        [key: string]: any;
    };
    defaultPopupVisible: boolean;
    maskAnimation: string;
}>;
export default _default;
import { noop } from "./utils";
