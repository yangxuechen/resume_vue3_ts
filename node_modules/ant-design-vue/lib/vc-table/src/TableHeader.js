"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _vueTypes = _interopRequireDefault(require("../../_util/vue-types"));

var _TableHeaderRow = _interopRequireDefault(require("./TableHeaderRow"));

function parseHeaderRows(rootColumns) {
  var rows = [];

  function fillRowCells(columns, colIndex) {
    var rowIndex = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    // Init rows
    rows[rowIndex] = rows[rowIndex] || [];
    var currentColIndex = colIndex;
    var colSpans = columns.filter(Boolean).map(function (column) {
      var cell = {
        key: column.key,
        className: column.className || column.class || '',
        children: column.title,
        column: column,
        colStart: currentColIndex
      };
      var colSpan = 1;
      var subColumns = column.children;

      if (subColumns && subColumns.length > 0) {
        colSpan = fillRowCells(subColumns, currentColIndex, rowIndex + 1).reduce(function (total, count) {
          return total + count;
        }, 0);
        cell.hasSubColumns = true;
      }

      if ('colSpan' in column) {
        colSpan = column.colSpan;
      }

      if ('rowSpan' in column) {
        cell.rowSpan = column.rowSpan;
      }

      cell.colSpan = colSpan;
      cell.colEnd = cell.colStart + colSpan - 1;
      rows[rowIndex].push(cell);
      currentColIndex += colSpan;
      return colSpan;
    });
    return colSpans;
  } // Generate `rows` cell data


  fillRowCells(rootColumns, 0); // Handle `rowSpan`

  var rowCount = rows.length;

  var _loop = function _loop(rowIndex) {
    rows[rowIndex].forEach(function (cell) {
      if (!('rowSpan' in cell) && !cell.hasSubColumns) {
        // eslint-disable-next-line no-param-reassign
        cell.rowSpan = rowCount - rowIndex;
      }
    });
  };

  for (var rowIndex = 0; rowIndex < rowCount; rowIndex += 1) {
    _loop(rowIndex);
  }

  return rows;
}

var _default2 = {
  name: 'TableHeader',
  inheritAttrs: false,
  props: {
    fixed: _vueTypes.default.string,
    columns: _vueTypes.default.array.isRequired,
    expander: _vueTypes.default.object.isRequired
  },
  setup: function setup() {
    return {
      table: (0, _vue.inject)('table', {})
    };
  },
  render: function render() {
    var _this$table = this.table,
        components = _this$table.sComponents,
        prefixCls = _this$table.prefixCls,
        showHeader = _this$table.showHeader,
        customHeaderRow = _this$table.customHeaderRow;
    var expander = this.expander,
        columns = this.columns,
        fixed = this.fixed;

    if (!showHeader) {
      return null;
    }

    var rows = parseHeaderRows(this.columns);
    expander.renderExpandIndentCell(rows, fixed);
    var HeaderWrapper = components.header.wrapper;
    return (0, _vue.createVNode)(HeaderWrapper, {
      "class": "".concat(prefixCls, "-thead")
    }, {
      default: function _default() {
        return [rows.map(function (row, index) {
          return (0, _vue.createVNode)(_TableHeaderRow.default, {
            "prefixCls": prefixCls,
            "key": index,
            "index": index,
            "fixed": fixed,
            "columns": columns,
            "rows": rows,
            "row": row,
            "components": components,
            "customHeaderRow": customHeaderRow
          }, null);
        })];
      }
    });
  }
};
exports.default = _default2;