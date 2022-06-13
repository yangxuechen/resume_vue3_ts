"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.flatArray = flatArray;
exports.treeMap = treeMap;
exports.flatFilter = flatFilter;
exports.generateValueMaps = generateValueMaps;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

function flatArray() {
  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var childrenName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'children';
  var result = [];

  var loop = function loop(array) {
    array.forEach(function (item) {
      if (item[childrenName]) {
        var newItem = (0, _extends2.default)({}, item);
        delete newItem[childrenName];
        result.push(newItem);

        if (item[childrenName].length > 0) {
          loop(item[childrenName]);
        }
      } else {
        result.push(item);
      }
    });
  };

  loop(data);
  return result;
}

function treeMap(tree, mapper) {
  var childrenName = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'children';
  return tree.map(function (node, index) {
    var extra = {};

    if (node[childrenName]) {
      extra[childrenName] = treeMap(node[childrenName], mapper, childrenName);
    }

    return (0, _extends2.default)((0, _extends2.default)({}, mapper(node, index)), extra);
  });
}

function flatFilter(tree, callback) {
  return tree.reduce(function (acc, node) {
    if (callback(node)) {
      acc.push(node);
    }

    if (node.children) {
      var children = flatFilter(node.children, callback);
      acc.push.apply(acc, (0, _toConsumableArray2.default)(children));
    }

    return acc;
  }, []);
} // export function normalizeColumns (elements) {
//   const columns = []
//   React.Children.forEach(elements, (element) => {
//     if (!React.isValidElement(element)) {
//       return
//     }
//     const column = {
//       ...element.props,
//     }
//     if (element.key) {
//       column.key = element.key
//     }
//     if (element.type && element.type.__ANT_TABLE_COLUMN_GROUP) {
//       column.children = normalizeColumns(column.children)
//     }
//     columns.push(column)
//   })
//   return columns
// }


function generateValueMaps(items) {
  var maps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  (items || []).forEach(function (_ref) {
    var value = _ref.value,
        children = _ref.children;
    maps[value.toString()] = value;
    generateValueMaps(children, maps);
  });
  return maps;
}