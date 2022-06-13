declare var _default: import("vue").DefineComponent<any, {
    bodyRef: import("vue").Ref<any>;
    store: {
        currentHoverKey: any;
        fixedColumnsHeadRowsHeight: any[];
        fixedColumnsBodyRowsHeight: {};
        expandedRowsHeight: {};
        expandedRowKeys: any[];
        columnManager: {
            groupedColumns: any[];
            isAnyColumnsFixed: any;
            isAnyColumnsLeftFixed: any;
            isAnyColumnsRightFixed: any;
            leftColumns: any[];
            rightColumns: any[];
            leafColumns: any[];
            leftLeafColumns: any[];
            rightLeafColumns: any[];
        };
        fixedInfoList: {
            fixLeft: number | false;
            fixRight: number | false;
            lastFixLeft: boolean;
            firstFixRight: boolean;
            lastFixRight: boolean;
            firstFixLeft: boolean;
            isSticky: boolean;
        }[];
        stickyOffsets: {
            left: any[];
            right: any[];
        };
    };
    onColumnResize: (columnKey: any, width: any) => void;
    columnManager: {
        groupedColumns: import("vue").ComputedRef<any[]>;
        isAnyColumnsFixed: import("vue").ComputedRef<any>;
        isAnyColumnsLeftFixed: import("vue").ComputedRef<any>;
        isAnyColumnsRightFixed: import("vue").ComputedRef<any>;
        leftColumns: import("vue").ComputedRef<any[]>;
        rightColumns: import("vue").ComputedRef<any[]>;
        leafColumns: import("vue").ComputedRef<any[]>;
        leftLeafColumns: import("vue").ComputedRef<any[]>;
        rightLeafColumns: import("vue").ComputedRef<any[]>;
    };
    onScroll: (currentTarget: any) => void;
    pingedLeft: import("vue").Ref<boolean>;
    pingedRight: import("vue").Ref<boolean>;
    onFullTableResize: () => void;
}, {
    sComponents: never;
}, {
    dataLen(): any;
}, {
    getRowKey(record: any, index: any): any;
    setScrollPosition(position: any): void;
    setScrollPositionClassName(): void;
    isTableLayoutFixed(): boolean;
    handleWindowResize(): void;
    syncFixedTableRowHeight(): void;
    resetScrollX(): void;
    hasScrollX(): boolean;
    handleBodyScrollLeft(e: any): void;
    handleBodyScrollTop(e: any): void;
    handleBodyScroll(e: any): void;
    handleWheel(event: any): void;
    saveRef(name: any): (node: any) => void;
    saveTableNodeRef(node: any): void;
    renderMainTable(): JSX.Element | (JSX.Element | JSX.Element[])[];
    renderTable(options: any): JSX.Element[];
    renderTitle(): JSX.Element;
    renderFooter(): JSX.Element;
    renderEmptyText(): JSX.Element;
}, {
    methods: {
        setState(state: {}, callback: any): void;
        __emit(...args: any[]): void;
    };
}, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    [x: string]: any;
}> | Readonly<{
    [x: string]: unknown;
} & {
    [x: string]: any;
} & {
    [x: number]: any;
}>, {} | {
    [x: string]: any;
}>;
export default _default;
