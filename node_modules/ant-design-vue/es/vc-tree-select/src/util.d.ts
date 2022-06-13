export function findPopupContainer(node: any, prefixClass: any): any;
export function toTitle(title: any): string;
export function toArray(data: any): any[];
export function createRef(): (node: any) => void;
/**
 * Convert position list to hierarchy structure.
 * This is little hack since use '-' to split the position.
 */
export function flatToHierarchy(positionList: any): any[];
export function resetAriaId(): void;
export function generateAriaId(prefix: any): string;
export function isLabelInValue(props: any): any;
export function parseSimpleTreeData(treeData: any, { id, pId, rootPId }: {
    id: any;
    pId: any;
    rootPId: any;
}): any[];
/**
 * Detect if position has relation.
 * e.g. 1-2 related with 1-2-3
 * e.g. 1-3-2 related with 1
 * e.g. 1-2 not related with 1-21
 */
export function isPosRelated(pos1: any, pos2: any): boolean;
/**
 * This function is only used on treeNode check (none treeCheckStrictly but has searchInput).
 * We convert entity to { node, pos, children } format.
 * This is legacy bug but we still need to do with it.
 * @param entity
 */
export function cleanEntity({ node, pos, children }: {
    node: any;
    pos: any;
    children: any;
}): {
    node: any;
    pos: any;
};
/**
 * Get a filtered TreeNode list by provided treeNodes.
 * [Legacy] Since `Tree` use `key` as map but `key` will changed by React,
 * we have to convert `treeNodes > data > treeNodes` to keep the key.
 * Such performance hungry!
 */
export function getFilterTree(treeNodes: any, searchValue: any, filterFunc: any, valueEntities: any, Component: any): any;
/**
 * Convert value to array format to make logic simplify.
 */
export function formatInternalValue(value: any, props: any): any[];
export function getLabel(wrappedValue: any, entity: any, treeNodeLabelProp: any): any;
/**
 * Convert internal state `valueList` to user needed value list.
 * This will return an array list. You need check if is not multiple when return.
 *
 * `allCheckedNodes` is used for `treeCheckStrictly`
 */
export function formatSelectorValue(valueList: any, props: any, valueEntities: any): any;
export function convertDataToTree(treeData: any): JSX.Element[];
export function convertTreeToEntities(treeNodes: any): {
    posEntities: Map<any, any>;
    keyEntities: Map<any, any>;
};
/**
 * https://github.com/ant-design/ant-design/issues/13328
 * We need calculate the half check key when searchValue is set.
 */
export function getHalfCheckedKeys(valueList: any, valueEntities: any): any[];
export namespace UNSELECTABLE_STYLE {
    const userSelect: string;
    const WebkitUserSelect: string;
}
export namespace UNSELECTABLE_ATTRIBUTE {
    const unselectable: string;
}
export const conductCheck: typeof rcConductCheck;
import { conductCheck as rcConductCheck } from "../../vc-tree/src/util";
