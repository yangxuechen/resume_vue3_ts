import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _extends from "@babel/runtime/helpers/esm/extends";
import { createVNode as _createVNode } from "vue";

var __rest = this && this.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

import classNames from '../../_util/classNames';
import PropTypes from '../../_util/vue-types';
import { computed, inject } from 'vue';
import { getCellFixedInfo } from './fixUtil';
var TableHeaderRow = {
  name: 'TableHeaderRow',
  inheritAttrs: false,
  props: {
    index: PropTypes.number,
    fixed: PropTypes.string,
    columns: PropTypes.array,
    rows: PropTypes.array,
    row: PropTypes.array,
    components: PropTypes.object,
    customHeaderRow: PropTypes.func,
    prefixCls: PropTypes.prefixCls
  },
  setup: function setup(props) {
    var store = inject('table-store', function () {
      return {};
    });
    return {
      height: computed(function () {
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

    var style = _extends({
      height: height
    }, customStyle);

    if (style.height === null) {
      delete style.height;
    }

    var _this$store = this.store,
        stickyOffsets = _this$store.stickyOffsets,
        columnManager = _this$store.columnManager;
    return _createVNode(HeaderRow, _objectSpread(_objectSpread({}, rowProps), {}, {
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

          var fixedInfo = getCellFixedInfo(cell.colStart, cell.colEnd, columnManager.leafColumns, stickyOffsets);
          var customProps = column.customHeaderCell ? column.customHeaderCell(column) : {};

          var headerCellProps = _extends(_extends(_extends({}, cellProps), customProps), {
            key: column.key || column.dataIndex || i
          });

          if (headerCellProps.colSpan === 0) {
            return null;
          }

          if (column.align) {
            headerCellProps.style = _extends(_extends({}, customProps.style), {
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

          headerCellProps.class = classNames(customProps.class, customProps.className, column.class, column.className, (_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-align-").concat(column.align), !!column.align), _defineProperty(_classNames, "".concat(prefixCls, "-row-cell-ellipsis"), !!column.ellipsis), _defineProperty(_classNames, "".concat(prefixCls, "-row-cell-break-word"), !!column.width), _defineProperty(_classNames, "".concat(prefixCls, "-row-cell-last"), isLast), _defineProperty(_classNames, "".concat(prefixCls, "-cell-fix-left"), isFixLeft), _defineProperty(_classNames, "".concat(prefixCls, "-cell-fix-left-first"), firstFixLeft), _defineProperty(_classNames, "".concat(prefixCls, "-cell-fix-left-last"), lastFixLeft), _defineProperty(_classNames, "".concat(prefixCls, "-cell-fix-right"), isFixRight), _defineProperty(_classNames, "".concat(prefixCls, "-cell-fix-right-first"), firstFixRight), _defineProperty(_classNames, "".concat(prefixCls, "-cell-fix-right-last"), lastFixRight), _classNames));
          headerCellProps.style = _extends(_extends({}, headerCellProps.style || {}), fixedStyle);

          if (typeof HeaderCell === 'function') {
            return HeaderCell(headerCellProps, children);
          }

          return _createVNode(HeaderCell, headerCellProps, {
            default: function _default() {
              return [children];
            }
          });
        })];
      }
    });
  }
};
export default TableHeaderRow;