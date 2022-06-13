export function warnOnlyTreeNode(): void;
export function arrDel(list: any, value: any): any;
export function arrAdd(list: any, value: any): any;
export function posToArr(pos: any): any;
export function getPosition(level: any, index: any): string;
export function isTreeNode(node: any): any;
export function getNodeChildren(children?: any[]): any[];
export function isCheckDisabled(node: any): boolean;
export function traverseTreeNodes(treeNodes: any, callback: any): void;
/**
 * Use `rc-util` `toArray` to get the children list which keeps the key.
 * And return single node if children is only one(This can avoid `key` missing check).
 */
export function mapChildren(children: any[], func: any): any;
export function getDragNodesKeys(treeNodes: any, node: any): any[];
export function calcDropPosition(event: any, treeNode: any): 0 | 1 | -1;
/**
 * Return selectedKeys according with multiple prop
 * @param selectedKeys
 * @param props
 * @returns [string]
 */
export function calcSelectedKeys(selectedKeys: any, props: any): any;
export function convertDataToTree(treeData: any, processor: any): JSX.Element[];
/**
 * Calculate treeNodes entities. `processTreeEntity` is used for `rc-tree-select`
 * @param treeNodes
 * @param processTreeEntity  User can customize the entity
 */
export function convertTreeToEntities(treeNodes: any, { initWrapper, processEntity, onProcessFinished }?: {
    initWrapper: any;
    processEntity: any;
    onProcessFinished: any;
}): {
    posEntities: Map<any, any>;
    keyEntities: Map<any, any>;
};
/**
 * Parse `checkedKeys` to { checkedKeys, halfCheckedKeys } style
 */
export function parseCheckedKeys(keys: any): {
    checkedKeys: any;
    halfCheckedKeys: any;
};
/**
 * Conduct check state by the keyList. It will conduct up & from the provided key.
 * If the conduct path reach the disabled or already checked / unchecked node will stop conduct.
 * @param keyList       list of keys
 * @param isCheck       is check the node or not
 * @param keyEntities   parsed by `convertTreeToEntities` function in Tree
 * @param checkStatus   Can pass current checked status for process (usually for uncheck operation)
 * @returns {{checkedKeys: [], halfCheckedKeys: []}}
 */
export function conductCheck(keyList: any, isCheck: any, keyEntities: any, checkStatus?: {}): {
    checkedKeys: [];
    halfCheckedKeys: [];
};
/**
 * If user use `autoExpandParent` we should get the list of parent node
 * @param keyList
 * @param keyEntities
 */
export function conductExpandParent(keyList: any, keyEntities: any): any[];
/**
 * Returns only the data- and aria- key/value pairs
 * @param {object} props
 */
export function getDataAndAria(props: object): {};
