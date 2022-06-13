import _extends from "@babel/runtime/helpers/esm/extends";
import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import { computed } from 'vue';
export default function useColumnManager(columns) {
  var _leafColumns = function _leafColumns(cls) {
    var fixed = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var leafColumns = [];
    cls.forEach(function (column) {
      column.fixed = fixed || column.fixed;

      if (!column.children) {
        leafColumns.push(column);
      } else {
        leafColumns.push.apply(leafColumns, _toConsumableArray(_leafColumns(column.children, column.fixed)));
      }
    });
    return leafColumns;
  }; // add appropriate rowspan and colspan to column


  var groupedColumns = computed(function () {
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
        var newColumn = _extends({}, column);

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
  var isAnyColumnsFixed = computed(function () {
    return columns.value.some(function (column) {
      return !!column.fixed;
    });
  });
  var isAnyColumnsLeftFixed = computed(function () {
    return columns.value.some(function (column) {
      return column.fixed === 'left' || column.fixed === true;
    });
  });
  var isAnyColumnsRightFixed = computed(function () {
    return columns.value.some(function (column) {
      return column.fixed === 'right';
    });
  });
  var leftColumns = computed(function () {
    return groupedColumns.value.filter(function (column) {
      return column.fixed === 'left' || column.fixed === true;
    });
  });
  var rightColumns = computed(function () {
    return groupedColumns.value.filter(function (column) {
      return column.fixed === 'right';
    });
  });
  var leafColumns = computed(function () {
    return _leafColumns(columns.value);
  });
  var leftLeafColumns = computed(function () {
    return _leafColumns(leftColumns.value);
  });
  var rightLeafColumns = computed(function () {
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