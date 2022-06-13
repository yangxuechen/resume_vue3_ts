"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TreeSelectProps = exports.TreeData = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _vueTypes = _interopRequireWildcard(require("../_util/vue-types"));

var _select = require("../select");

var _type = require("../_util/type");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var TreeData = _vueTypes.default.shape({
  key: _vueTypes.default.string,
  value: _vueTypes.default.string,
  label: _vueTypes.default.VNodeChild,
  slots: _vueTypes.default.object,
  children: _vueTypes.default.array
}).loose;

exports.TreeData = TreeData;

var TreeSelectProps = function TreeSelectProps() {
  return (0, _extends2.default)((0, _extends2.default)({}, (0, _select.SelectProps)()), {
    autofocus: _vueTypes.default.looseBool,
    dropdownStyle: _vueTypes.default.object,
    filterTreeNode: (0, _vueTypes.withUndefined)(_vueTypes.default.oneOfType([Function, Boolean])),
    getPopupContainer: _vueTypes.default.func,
    labelInValue: _vueTypes.default.looseBool,
    loadData: _vueTypes.default.func,
    maxTagCount: _vueTypes.default.number,
    maxTagPlaceholder: _vueTypes.default.VNodeChild,
    value: _vueTypes.default.oneOfType([_vueTypes.default.string, _vueTypes.default.object, _vueTypes.default.array, _vueTypes.default.number]),
    defaultValue: _vueTypes.default.oneOfType([_vueTypes.default.string, _vueTypes.default.object, _vueTypes.default.array, _vueTypes.default.number]),
    multiple: _vueTypes.default.looseBool,
    notFoundContent: _vueTypes.default.VNodeChild,
    searchPlaceholder: _vueTypes.default.string,
    searchValue: _vueTypes.default.string,
    showCheckedStrategy: _vueTypes.default.oneOf((0, _type.tuple)('SHOW_ALL', 'SHOW_PARENT', 'SHOW_CHILD')),
    suffixIcon: _vueTypes.default.VNodeChild,
    treeCheckable: _vueTypes.default.looseBool,
    treeCheckStrictly: _vueTypes.default.looseBool,
    treeData: _vueTypes.default.arrayOf(Object),
    treeDataSimpleMode: (0, _vueTypes.withUndefined)(_vueTypes.default.oneOfType([_vueTypes.default.looseBool, Object])),
    dropdownClassName: _vueTypes.default.string,
    dropdownMatchSelectWidth: _vueTypes.default.looseBool,
    treeDefaultExpandAll: _vueTypes.default.looseBool,
    treeExpandedKeys: _vueTypes.default.array,
    treeIcon: _vueTypes.default.looseBool,
    treeDefaultExpandedKeys: _vueTypes.default.array,
    treeNodeFilterProp: _vueTypes.default.string,
    treeNodeLabelProp: _vueTypes.default.string,
    replaceFields: _vueTypes.default.object.def({}),
    clearIcon: _vueTypes.default.VNodeChild,
    removeIcon: _vueTypes.default.VNodeChild,
    onSelect: _vueTypes.default.func,
    onChange: _vueTypes.default.func,
    onSearch: _vueTypes.default.func,
    onTreeExpand: _vueTypes.default.func,
    'onUpdate:treeExpandedKeys': _vueTypes.default.func,
    'onUpdate:searchValue': _vueTypes.default.func,
    'onUpdate:value': _vueTypes.default.func
  });
};

exports.TreeSelectProps = TreeSelectProps;