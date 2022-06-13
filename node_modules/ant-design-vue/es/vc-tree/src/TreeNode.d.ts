export default TreeNode;
declare const TreeNode: import("vue").DefineComponent<any, {
    vcTree: {};
    vcTreeNode: {};
}, {
    dragNodeHighlight: boolean;
}, {}, {
    onSelectorClick(e: any): void;
    onSelectorDoubleClick(e: any): void;
    onSelect(e: any): void;
    onCheck(e: any): void;
    onMouseEnter(e: any): void;
    onMouseLeave(e: any): void;
    onContextMenu(e: any): void;
    onDragStart(e: any): void;
    onDragEnter(e: any): void;
    onDragOver(e: any): void;
    onDragLeave(e: any): void;
    onDragEnd(e: any): void;
    onDrop(e: any): void;
    onExpand(e: any): void;
    setSelectHandle(node: any): void;
    getNodeChildren(): any[];
    getNodeState(): "open" | "close";
    isLeaf2(): false;
    isDisabled(): boolean;
    isCheckable(): any;
    syncLoadData(props: any): void;
    isSelectable(): any;
    renderSwitcher(): JSX.Element;
    renderCheckbox(): JSX.Element;
    renderIcon(): JSX.Element;
    renderSelector(): JSX.Element;
    renderChildren(): JSX.Element;
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
