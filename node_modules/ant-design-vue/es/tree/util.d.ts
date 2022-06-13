import type { VNode } from 'vue';
import type { TreeDataItem } from './Tree';
declare type TreeKey = string | number;
export declare function getFullKeyList(children: VNode[]): any[];
/** 计算选中范围，只考虑expanded情况以优化性能 */
export declare function calcRangeKeys(rootChildren: VNode[], expandedKeys: TreeKey[], startKey: TreeKey, endKey: TreeKey): any[];
export declare function convertDirectoryKeysToNodes(rootChildren: VNode[], keys: TreeKey[]): any[];
export declare function getFullKeyListByTreeData(treeData: TreeDataItem[], replaceFields?: any): any[];
export {};
