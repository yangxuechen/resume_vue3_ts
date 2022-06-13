"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useColumnManager;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _vue = require("vue");

function useColumnManager(columns) {
  var _leafColumns = function _leafColumns(cls) {
    var fixed = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var leafColumns = [];
    cls.forEach(function (column) {
      column.fixed = fixed || column.fixed;

      if (!column.children) {
        leafColumns.push(column);
      } else {
        leafColumns.push.apply(leafColumns, (0, _toConsumableArray2.default)(_leafColumns(column.children, column.fixed)));
      }
    });
    return leafColumns;
  }; // add appropriate rowspan and colspan to column


  var groupedColumns = (0, _vue.computed)(function () {
    var _groupColumns = function _groupColumns(cls) {
      var currentRow = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var parentColumn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var rows = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
      var fixed = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
      // track how many rows we got
      rows[currentRow] = rows[currentRow] || [];
      var grouped = [];

      var setRowSpan = function setRowSpan(column) {
        var rowSpan = rows.length - currentRow;

        if (column && !column.children && // parent columns.value are supposed to be one row
        rowSpan > 1 && (!column.rowSpan || column.rowSpan < rowSpan)) {
          column.rowSpan = rowSpan;
        }
      };

      cls.forEach(function (column, index) {
        var newColumn = (0, _extends2.default)({}, column);
        newColumn.fixed = fixed || column.fixed;
        rows[currentRow].push(newColumn);
        parentColumn.colSpan = parentColumn.colSpan || 0;

        if (newColumn.children && newColumn.children.length > 0) {
          newColumn.children = _groupColumns(newColumn.children, currentRow + 1, newColumn, rows, newColumn.fixed);
          parentColumn.colSpan += newColumn.colSpan;
        } else {
          parentColumn.colSpan += 1;
        } // update rowspan to all same row columns.value


        for (var i = 0; i < rows[currentRow].length - 1; i += 1) {
          setRowSpan(rows[currentRow][i]);
        } // last column, update rowspan immediately


        if (index + 1 === cls.length) {
          setRowSpan(newColumn);
        }

        grouped.push(newColumn);
      });
      return grouped;
    };

    return _groupColumns(columns.value);
  });
  var isAnyColumnsFixed = (0, _vue.computed)(function () {
    return columns.value.some(function (column) {
      return !!column.fixed;
    });
  });
  var isAnyColumnsLeftFixed = (0, _vue.computed)(function () {
    return columns.value.some(function (column) {
      return column.fixed === 'left' || column.fixed === true;
    });
  });
  var isAnyColumnsRightFixed = (0, _vue.computed)(function () {
    return columns.value.some(function (column) {
      return column.fixed === 'right';
    });
  });
  var leftColumns = (0, _vue.computed)(function () {
    return groupedColumns.value.filter(function (column) {
      return column.fixed === 'left' || column.fixed === true;
    });
  });
  var rightColumns = (0, _vue.computed)(function () {
    return groupedColumns.value.filter(function (column) {
      return column.fixed === 'right';
    });
  });
  var leafColumns = (0, _vue.computed)(function () {
    return _leafColumns(columns.value);
  });
  var leftLeafColumns = (0, _vue.computed)(function () {
    return _leafColumns(leftColumns.value);
  });
  var rightLeafColumns = (0, _vue.computed)(function () {
    return _leafColumns(rightColumns.value);
  });
  return {
    groupedColumns: groupedColumns,
    isAnyColumnsFixed: isAnyColumnsFixed,
    isAnyColumnsLeftFixed: isAnyColumnsLeftFixed,
    isAnyColumnsRightFixed: isAnyColumnsRightFixed,
    leftColumns: leftColumns,
    rightColumns: rightColumns,
    leafColumns: leafColumns,
    leftLeafColumns: leftLeafColumns,
    rightLeafColumns: rightLeafColumns
  };
}