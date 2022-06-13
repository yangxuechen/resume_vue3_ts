"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classNames2 = _interopRequireDefault(require("../../_util/classNames"));

var _vueTypes = _interopRequireDefault(require("../../_util/vue-types"));

var _fixUtil = require("./fixUtil");

var __rest = void 0 && (void 0).__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

var TableHeaderRow = {
  name: 'TableHeaderRow',
  inheritAttrs: false,
  props: {
    index: _vueTypes.default.number,
    fixed: _vueTypes.default.string,
    columns: _vueTypes.default.array,
    rows: _vueTypes.default.array,
    row: _vueTypes.default.array,
    components: _vueTypes.default.object,
    customHeaderRow: _vueTypes.default.func,
    prefixCls: _vueTypes.default.prefixCls
  },
  setup: function setup(props) {
    var store = (0, _vue.inject)('table-store', function () {
      return {};
    });
    return {
      height: (0, _vue.computed)(function () {
        var fixedColumnsHeadRowsHeight = store.fixedColumnsHeadRowsHeight;
        var columns = props.columns,
            rows = props.rows,
            fixed = props.fixed;
        var headerHeight = fixedColumnsHeadRowsHeight[0];

        if (!fixed) {
          return null;
        }

        if (headerHeight && columns) {
          if (headerHeight === 'auto') {
            return 'auto';
          }

          return "".concat(headerHeight / rows.length, "px");
        }

        return null;
      }),
      store: store
    };
  },
  render: function render() {
    var row = this.row,
        index = this.index,
        height = this.height,
        components = this.components,
        customHeaderRow = this.customHeaderRow,
        prefixCls = this.prefixCls;
    var HeaderRow = components.header.row;
    var HeaderCell = components.header.cell;
    var rowProps = customHeaderRow(row.map(function (cell) {
      return cell.column;
    }), index);
    var customStyle = rowProps ? rowProps.style : {};
    var style = (0, _extends2.default)({
      height: height
    }, customStyle);

    if (style.height === null) {
      delete style.height;
    }

    var _this$store = this.store,
        stickyOffsets = _this$store.stickyOffsets,
        columnManager = _this$store.columnManager;
    return (0, _vue.createVNode)(HeaderRow, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, rowProps), {}, {
      "style": style
    }), {
      default: function _default() {
        return [row.map(function (cell, i) {
          var _classNames;

          var column = cell.column,
              isLast = cell.isLast,
              children = cell.children,
              className = cell.className,
              cellProps = __rest(cell, ["column", "isLast", "children", "className"]);

          var fixedInfo = (0, _fixUtil.getCellFixedInfo)(cell.colStart, cell.colEnd, columnManager.leafColumns, stickyOffsets);
          var customProps = column.customHeaderCell ? column.customHeaderCell(column) : {};
          var headerCellProps = (0, _extends2.default)((0, _extends2.default)((0, _extends2.default)({}, cellProps), customProps), {
            key: column.key || column.dataIndex || i
          });

          if (headerCellProps.colSpan === 0) {
            return null;
          }

          if (column.align) {
            headerCellProps.style = (0, _extends2.default)((0, _extends2.default)({}, customProps.style), {
              textAlign: column.align
            });
          } // ====================== Fixed =======================


          var fixLeft = fixedInfo.fixLeft,
              fixRight = fixedInfo.fixRight,
              firstFixLeft = fixedInfo.firstFixLeft,
              lastFixLeft = fixedInfo.lastFixLeft,
              firstFixRight = fixedInfo.firstFixRight,
              lastFixRight = fixedInfo.lastFixRight;
          var fixedStyle = {};
          var isFixLeft = typeof fixLeft === 'number';
          var isFixRight = typeof fixRight === 'number';

          if (isFixLeft) {
            fixedStyle.position = 'sticky';
            fixedStyle.left = "".concat(fixLeft, "px");
          }

          if (isFixRight) {
            fixedStyle.position = 'sticky';
            fixedStyle.right = "".concat(fixRight, "px");
          }

          headerCellProps.class = (0, _classNames2.default)(customProps.class, customProps.className, column.class, column.className, (_classNames = {}, (0, _defineProperty2.default)(_classNames, "".concat(prefixCls, "-align-").concat(column.align), !!column.align), (0, _defineProperty2.default)(_classNames, "".concat(prefixCls, "-row-cell-ellipsis"), !!column.ellipsis), (0, _defineProperty2.default)(_classNames, "".concat(prefixCls, "-row-cell-break-word"), !!column.width), (0, _defineProperty2.default)(_classNames, "".concat(prefixCls, "-row-cell-last"), isLast), (0, _defineProperty2.default)(_classNames, "".concat(prefixCls, "-cell-fix-left"), isFixLeft), (0, _defineProperty2.default)(_classNames, "".concat(prefixCls, "-cell-fix-left-first"), firstFixLeft), (0, _defineProperty2.default)(_classNames, "".concat(prefixCls, "-cell-fix-left-last"), lastFixLeft), (0, _defineProperty2.default)(_classNames, "".concat(prefixCls, "-cell-fix-right"), isFixRight), (0, _defineProperty2.default)(_classNames, "".concat(prefixCls, "-cell-fix-right-first"), firstFixRight), (0, _defineProperty2.default)(_classNames, "".concat(prefixCls, "-cell-fix-right-last"), lastFixRight), _classNames));
          headerCellProps.style = (0, _extends2.default)((0, _extends2.default)({}, headerCellProps.style || {}), fixedStyle);

          if (typeof HeaderCell === 'function') {
            return HeaderCell(headerCellProps, children);
          }

          return (0, _vue.createVNode)(HeaderCell, headerCellProps, {
            default: function _default() {
              return [children];
            }
          });
        })];
      }
    });
  }
};
var _default2 = TableHeaderRow;
exports.default = _default2;