export default Tree;
export const Tree: import("vue").DefineComponent<any, any, any, {}, {
    getDerivedState(props: any, prevState: any): {
        _prevProps: any;
    };
    onNodeDragStart(event: any, node: any): void;
    /**
     * [Legacy] Select handler is less small than node,
     * so that this will trigger when drag enter node or select handler.
     * This is a little tricky if customize css without padding.
     * Better for use mouse move event to refresh drag state.
     * But let's just keep it to avoid event trigger logic change.
     */
    onNodeDragEnter(event: any, node: any): void;
    onNodeDragOver(event: any, node: any): void;
    onNodeDragLeave(event: any, node: any): void;
    onNodeDragEnd(event: any, node: any): void;
    onNodeDrop(event: any, node: any): void;
    onNodeClick(e: any, treeNode: any): void;
    onNodeDoubleClick(e: any, treeNode: any): void;
    onNodeSelect(e: any, treeNode: any): void;
    onNodeCheck(e: any, treeNode: any, checked: any): void;
    onNodeLoad(treeNode: any): Promise<any>;
    onNodeExpand(e: any, treeNode: any): any;
    onNodeMouseEnter(event: any, node: any): void;
    onNodeMouseLeave(event: any, node: any): void;
    onNodeContextMenu(event: any, node: any): void;
    /**
     * Only update the value which is not in props
     */
    setUncontrolledState(state: any): void;
    registerTreeNode(key: any, node: any): void;
    isKeyChecked(key: any): boolean;
    /**
     * [Legacy] Original logic use `key` as tracking clue.
     * We have to use `cloneElement` to pass `key`.
     */
    renderTreeNode(child: any, index: any, level?: number): import("vue").VNode<any, any, {
        [key: string]: any;
    }>;
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
