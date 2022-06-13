declare var _default: import("vue").DefineComponent<{
    disabled: import("vue-types").VueTypeValidableDef<boolean>;
    prefixCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    selectPrefixCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    current: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
    defaultCurrent: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    } & {
        default: number;
    };
    total: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    } & {
        default: number;
    };
    pageSize: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
    defaultPageSize: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    } & {
        default: number;
    };
    hideOnSinglePage: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
    showSizeChanger: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
    showLessItems: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
    selectComponentClass: import("vue-types").VueTypeValidableDef<any>;
    showPrevNextJumpers: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
    showQuickJumper: import("vue-types").VueTypeDef<boolean | {
        [key: string]: any;
    }> & {
        default: boolean | (() => {
            [key: string]: any;
        });
    };
    showTitle: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
    pageSizeOptions: import("vue-types").VueTypeDef<string[]>;
    buildOptionText: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    showTotal: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    simple: import("vue-types").VueTypeValidableDef<boolean>;
    locale: import("vue-types").VueTypeValidableDef<{
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
    itemRender: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    prevIcon: import("vue-types").VueTypeValidableDef<any>;
    nextIcon: import("vue-types").VueTypeValidableDef<any>;
    jumpPrevIcon: import("vue-types").VueTypeValidableDef<any>;
    jumpNextIcon: import("vue-types").VueTypeValidableDef<any>;
}, any, {
    stateCurrent: number;
    stateCurrentInputValue: number;
    statePageSize: number;
}, {}, {
    getJumpPrevPage(): number;
    getJumpNextPage(): number;
    getItemIcon(icon: any): any;
    getValidValue(e: any): any;
    isValid(page: any): boolean;
    shouldDisplayQuickJumper(): boolean | {
        [key: string]: any;
    };
    handleKeyDown(event: any): void;
    handleKeyUp(e: any): void;
    changePageSize(size: any): void;
    handleChange(p: any): any;
    prev(): void;
    next(): void;
    jumpPrev(): void;
    jumpNext(): void;
    hasPrev(): boolean;
    hasNext(): boolean;
    runIfEnter(event: any, callback: any, ...restParams: any[]): void;
    runIfEnterPrev(event: any): void;
    runIfEnterNext(event: any): void;
    runIfEnterJumpPrev(event: any): void;
    runIfEnterJumpNext(event: any): void;
    handleGoTO(event: any): void;
}, {
    methods: {
        setState(state: {}, callback: any): void;
        __emit(...args: any[]): void;
    };
}, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    disabled?: unknown;
    prefixCls?: unknown;
    selectPrefixCls?: unknown;
    current?: unknown;
    defaultCurrent?: unknown;
    total?: unknown;
    pageSize?: unknown;
    defaultPageSize?: unknown;
    hideOnSinglePage?: unknown;
    showSizeChanger?: unknown;
    showLessItems?: unknown;
    selectComponentClass?: unknown;
    showPrevNextJumpers?: unknown;
    showQuickJumper?: unknown;
    showTitle?: unknown;
    pageSizeOptions?: unknown;
    buildOptionText?: unknown;
    showTotal?: unknown;
    simple?: unknown;
    locale?: unknown;
    itemRender?: unknown;
    prevIcon?: unknown;
    nextIcon?: unknown;
    jumpPrevIcon?: unknown;
    jumpNextIcon?: unknown;
} & {
    locale: {
        [key: string]: any;
    };
    prefixCls: string;
    current: number;
    total: number;
    defaultCurrent: number;
    defaultPageSize: number;
    pageSize: number;
    hideOnSinglePage: boolean;
    showSizeChanger: boolean;
    showQuickJumper: boolean | {
        [key: string]: any;
    };
    selectPrefixCls: string;
    showLessItems: boolean;
    showPrevNextJumpers: boolean;
    showTitle: boolean;
} & {
    disabled?: boolean;
    pageSizeOptions?: string[];
    buildOptionText?: (...args: any[]) => any;
    showTotal?: (...args: any[]) => any;
    simple?: boolean;
    itemRender?: (...args: any[]) => any;
    selectComponentClass?: any;
    prevIcon?: any;
    nextIcon?: any;
    jumpPrevIcon?: any;
    jumpNextIcon?: any;
}>, {
    locale: {
        [key: string]: any;
    };
    prefixCls: string;
    current: number;
    total: number;
    defaultCurrent: number;
    defaultPageSize: number;
    pageSize: number;
    hideOnSinglePage: boolean;
    showSizeChanger: boolean;
    buildOptionText: (...args: any[]) => any;
    showQuickJumper: boolean | {
        [key: string]: any;
    };
    showTotal: (...args: any[]) => any;
    selectPrefixCls: string;
    itemRender: (...args: any[]) => any;
    showLessItems: boolean;
    showPrevNextJumpers: boolean;
    showTitle: boolean;
}>;
export default _default;
