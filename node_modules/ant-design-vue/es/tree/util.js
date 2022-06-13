import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import { getNodeChildren, convertTreeToEntities } from '../vc-tree/src/util';
import { getSlot } from '../_util/props-util';
var Record;

(function (Record) {
  Record[Record["None"] = 0] = "None";
  Record[Record["Start"] = 1] = "Start";
  Record[Record["End"] = 2] = "End";
})(Record || (Record = {})); // TODO: Move this logic into `rc-tree`


function traverseNodesKey(rootChildren, callback) {
  var nodeList = getNodeChildren(rootChildren) || [];

  function processNode(node) {
    var key = node.key;
    var children = getSlot(node);

    if (callback(key, node) !== false) {
      traverseNodesKey(children, callback);
    }
  }

  nodeList.forEach(processNode);
}

export function getFullKeyList(children) {
  var _convertTreeToEntitie = convertTreeToEntities(children),
      keyEntities = _convertTreeToEntitie.keyEntities;

  return _toConsumableArray(keyEntities.keys());
}
/** 计算选中范围，只考虑expanded情况以优化性能 */

export function calcRangeKeys(rootChildren, expandedKeys, startKey, endKey) {
  var keys = [];
  var record = Record.None;

  if (startKey && startKey === endKey) {
    return [startKey];
  }

  if (!startKey || !endKey) {
    return [];
  }

  function matchKey(key) {
    return key === startKey || key === endKey;
  }

  traverseNodesKey(rootChildren, function (key) {
    if (record === Record.End) {
      return false;
    }

    if (matchKey(key)) {
      // Match test
      keys.push(key);

      if (record === Record.None) {
        record = Record.Start;
      } else if (record === Record.Start) {
        record = Record.End;
        return false;
      }
    } else if (record === Record.Start) {
      // Append selection
      keys.push(key);
    }

    if (expandedKeys.indexOf(key) === -1) {
      return false;
    }

    return true;
  });
  return keys;
}
export function convertDirectoryKeysToNodes(rootChildren, keys) {
  var restKeys = _toConsumableArray(keys);

  var nodes = [];
  traverseNodesKey(rootChildren, function (key, node) {
    var index = restKeys.indexOf(key);

    if (index !== -1) {
      nodes.push(node);
      restKeys.splice(index, 1);
    }

    return !!restKeys.length;
  });
  return nodes;
}
export function getFullKeyListByTreeData(treeData) {
  var replaceFields = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var keys = [];
  var _replaceFields$key = replaceFields.key,
      key = _replaceFields$key === void 0 ? 'key' : _replaceFields$key,
      _replaceFields$childr = replaceFields.children,
      children = _replaceFields$childr === void 0 ? 'children' : _replaceFields$childr;
  (treeData || []).forEach(function (item) {
    keys.push(item[key]);

    if (item[children]) {
      keys = [].concat(_toConsumableArray(keys), _toConsumableArray(getFullKeyListByTreeData(item[children], replaceFields)));
    }
  });
  return keys;
}