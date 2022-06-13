import _extends from "@babel/runtime/helpers/esm/extends";
import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import { createVNode as _createVNode } from "vue";
import PropTypes from '../../_util/vue-types';
import BaseMixin from '../../_util/BaseMixin';
import shallowEqual from '../../_util/shallowequal';
import TableRow from './TableRow';
import { remove } from './utils';
import { initDefaultProps, getOptionProps, getSlot } from '../../_util/props-util';
import { inject } from 'vue';
export var ExpandableTableProps = function ExpandableTableProps() {
  return {
    expandIconAsCell: PropTypes.looseBool,
    expandRowByClick: PropTypes.looseBool,
    expandedRowKeys: PropTypes.array,
    expandedRowClassName: PropTypes.func,
    defaultExpandAllRows: PropTypes.looseBool,
    defaultExpandedRowKeys: PropTypes.array,
    expandIconColumnIndex: PropTypes.number,
    expandedRowRender: PropTypes.func,
    expandIcon: PropTypes.func,
    childrenColumnName: PropTypes.string,
    indentSize: PropTypes.number,
    // onExpand: PropTypes.func,
    // onExpandedRowsChange: PropTypes.func,
    columnManager: PropTypes.object.isRequired,
    prefixCls: PropTypes.string.isRequired,
    data: PropTypes.array,
    getRowKey: PropTypes.func
  };
};
var ExpandableTable = {
  name: 'ExpandableTable',
  inheritAttrs: false,
  mixins: [BaseMixin],
  props: initDefaultProps(ExpandableTableProps(), {
    expandIconAsCell: false,
    expandedRowClassName: function expandedRowClassName() {
      return '';
    },
    expandIconColumnIndex: 0,
    defaultExpandAllRows: false,
    defaultExpandedRowKeys: [],
    childrenColumnName: 'children',
    indentSize: 15
  }),
  setup: function setup(props) {
    var store = inject('table-store', function () {
      return {};
    });
    var data = props.data,
        childrenColumnName = props.childrenColumnName,
        defaultExpandAllRows = props.defaultExpandAllRows,
        expandedRowKeys = props.expandedRowKeys,
        defaultExpandedRowKeys = props.defaultExpandedRowKeys,
        getRowKey = props.getRowKey;
    var finalExpandedRowKeys = [];

    var rows = _toConsumableArray(data);

    if (defaultExpandAllRows) {
      for (var i = 0; i < rows.length; i += 1) {
        var row = rows[i];
        finalExpandedRowKeys.push(getRowKey(row, i));
        rows = rows.concat(row[childrenColumnName] || []);
      }
    } else {
      finalExpandedRowKeys = expandedRowKeys || defaultExpandedRowKeys;
    }

    _extends(store, {
      expandedRowsHeight: {},
      expandedRowKeys: finalExpandedRowKeys
    });

    return {
      store: store
    };
  },
  mounted: function mounted() {
    this.handleUpdated();
  },
  updated: function updated() {
    this.handleUpdated();
  },
  watch: {
    expandedRowKeys: function expandedRowKeys(val) {
      var _this = this;

      this.$nextTick(function () {
        _this.store.expandedRowKeys = val;
      });
    }
  },
  methods: {
    handleUpdated: function handleUpdated() {
      // We should record latest expanded rows to avoid multiple rows remove cause `onExpandedRowsChange` trigger many times
      this.latestExpandedRows = null;
    },
    handleExpandChange: function handleExpandChange(expanded, record, event, rowKey) {
      var destroy = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

      if (event) {
        event.preventDefault();
        event.stopPropagation();
      }

      var expandedRowKeys = this.store.expandedRowKeys;

      if (expanded) {
        // row was expaned
        expandedRowKeys = [].concat(_toConsumableArray(expandedRowKeys), [rowKey]);
      } else {
        // row was collapse
        var expandedRowIndex = expandedRowKeys.indexOf(rowKey);

        if (expandedRowIndex !== -1) {
          expandedRowKeys = remove(expandedRowKeys, rowKey);
        }
      }

      if (!this.expandedRowKeys) {
        this.store.expandedRowKeys = expandedRowKeys;
      } // De-dup of repeat call


      if (!this.latestExpandedRows || !shallowEqual(this.latestExpandedRows, expandedRowKeys)) {
        this.latestExpandedRows = expandedRowKeys;

        this.__emit('expandedRowsChange', expandedRowKeys);
      }

      if (!destroy) {
        this.__emit('expand', expanded, record);
      }
    },
    renderExpandIndentCell: function renderExpandIndentCell(rows, fixed) {
      var prefixCls = this.prefixCls,
          expandIconAsCell = this.expandIconAsCell;

      if (!expandIconAsCell || fixed === 'right' || !rows.length) {
        return;
      }

      var iconColumn = {
        key: 'rc-table-expand-icon-cell',
        className: "".concat(prefixCls, "-expand-icon-th"),
        title: '',
        rowSpan: rows.length
      };
      rows[0].unshift(_extends(_extends({}, iconColumn), {
        column: iconColumn
      }));
    },
    renderExpandedRow: function renderExpandedRow(record, index, expandedRowRender, className, ancestorKeys, indent, fixed) {
      var _this2 = this;

      var prefixCls = this.prefixCls,
          expandIconAsCell = this.expandIconAsCell,
          indentSize = this.indentSize;
      var parentKey = ancestorKeys[ancestorKeys.length - 1];
      var rowKey = "".concat(parentKey, "-extra-row");
      var components = {
        body: {
          row: 'tr',
          cell: 'td'
        }
      };
      var colCount;

      if (fixed === 'left') {
        colCount = this.columnManager.leftLeafColumns.value.length;
      } else if (fixed === 'right') {
        colCount = this.columnManager.rightLeafColumns.value.length;
      } else {
        colCount = this.columnManager.leafColumns.value.length;
      }

      var columns = [{
        key: 'extra-row',
        customRender: function customRender() {
          var expandedRowKeys = _this2.store.expandedRowKeys;
          var expanded = expandedRowKeys.includes(parentKey);
          return {
            props: {
              colSpan: colCount
            },
            children: fixed !== 'right' ? expandedRowRender({
              record: record,
              index: index,
              indent: indent,
              expanded: expanded
            }) : '&nbsp;'
          };
        }
      }];

      if (expandIconAsCell && fixed !== 'right') {
        columns.unshift({
          key: 'expand-icon-placeholder',
          customRender: function customRender() {
            return null;
          }
        });
      }

      return _createVNode(TableRow, {
        "key": rowKey,
        "columns": columns,
        "class": className,
        "rowKey": rowKey,
        "ancestorKeys": ancestorKeys,
        "prefixCls": "".concat(prefixCls, "-expanded-row"),
        "indentSize": indentSize,
        "indent": indent,
        "fixed": fixed,
        "components": components,
        "expandedRow": true,
        "hasExpandIcon": function hasExpandIcon() {}
      }, null);
    },
    renderRows: function renderRows(_renderRows, rows, record, index, indent, fixed, parentKey, ancestorKeys) {
      var expandedRowClassName = this.expandedRowClassName,
          expandedRowRender = this.expandedRowRender,
          childrenColumnName = this.childrenColumnName;
      var childrenData = record[childrenColumnName];
      var nextAncestorKeys = [].concat(_toConsumableArray(ancestorKeys), [parentKey]);
      var nextIndent = indent + 1;

      if (expandedRowRender) {
        rows.push(this.renderExpandedRow(record, index, expandedRowRender, expandedRowClassName(record, index, indent), nextAncestorKeys, nextIndent, fixed));
      }

      if (childrenData) {
        rows.push.apply(rows, _toConsumableArray(_renderRows(childrenData, nextIndent, nextAncestorKeys)));
      }
    }
  },
  render: function render() {
    var data = this.data,
        childrenColumnName = this.childrenColumnName;
    var props = getOptionProps(this);
    var needIndentSpaced = data.some(function (record) {
      return record[childrenColumnName];
    });
    return getSlot(this, 'default', {
      props: _extends(_extends({}, props), this.$attrs),
      needIndentSpaced: needIndentSpaced,
      renderRows: this.renderRows,
      handleExpandChange: this.handleExpandChange,
      renderExpandIndentCell: this.renderExpandIndentCell
    });
  }
};
export default ExpandableTable;