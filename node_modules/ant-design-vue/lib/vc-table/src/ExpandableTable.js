"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ExpandableTableProps = void 0;

var _vue = require("vue");

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _vueTypes = _interopRequireDefault(require("../../_util/vue-types"));

var _BaseMixin = _interopRequireDefault(require("../../_util/BaseMixin"));

var _shallowequal = _interopRequireDefault(require("../../_util/shallowequal"));

var _TableRow = _interopRequireDefault(require("./TableRow"));

var _utils = require("./utils");

var _propsUtil = require("../../_util/props-util");

var ExpandableTableProps = function ExpandableTableProps() {
  return {
    expandIconAsCell: _vueTypes.default.looseBool,
    expandRowByClick: _vueTypes.default.looseBool,
    expandedRowKeys: _vueTypes.default.array,
    expandedRowClassName: _vueTypes.default.func,
    defaultExpandAllRows: _vueTypes.default.looseBool,
    defaultExpandedRowKeys: _vueTypes.default.array,
    expandIconColumnIndex: _vueTypes.default.number,
    expandedRowRender: _vueTypes.default.func,
    expandIcon: _vueTypes.default.func,
    childrenColumnName: _vueTypes.default.string,
    indentSize: _vueTypes.default.number,
    // onExpand: PropTypes.func,
    // onExpandedRowsChange: PropTypes.func,
    columnManager: _vueTypes.default.object.isRequired,
    prefixCls: _vueTypes.default.string.isRequired,
    data: _vueTypes.default.array,
    getRowKey: _vueTypes.default.func
  };
};

exports.ExpandableTableProps = ExpandableTableProps;
var ExpandableTable = {
  name: 'ExpandableTable',
  inheritAttrs: false,
  mixins: [_BaseMixin.default],
  props: (0, _propsUtil.initDefaultProps)(ExpandableTableProps(), {
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
    var store = (0, _vue.inject)('table-store', function () {
      return {};
    });
    var data = props.data,
        childrenColumnName = props.childrenColumnName,
        defaultExpandAllRows = props.defaultExpandAllRows,
        expandedRowKeys = props.expandedRowKeys,
        defaultExpandedRowKeys = props.defaultExpandedRowKeys,
        getRowKey = props.getRowKey;
    var finalExpandedRowKeys = [];
    var rows = (0, _toConsumableArray2.default)(data);

    if (defaultExpandAllRows) {
      for (var i = 0; i < rows.length; i += 1) {
        var row = rows[i];
        finalExpandedRowKeys.push(getRowKey(row, i));
        rows = rows.concat(row[childrenColumnName] || []);
      }
    } else {
      finalExpandedRowKeys = expandedRowKeys || defaultExpandedRowKeys;
    }

    (0, _extends2.default)(store, {
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
        expandedRowKeys = [].concat((0, _toConsumableArray2.default)(expandedRowKeys), [rowKey]);
      } else {
        // row was collapse
        var expandedRowIndex = expandedRowKeys.indexOf(rowKey);

        if (expandedRowIndex !== -1) {
          expandedRowKeys = (0, _utils.remove)(expandedRowKeys, rowKey);
        }
      }

      if (!this.expandedRowKeys) {
        this.store.expandedRowKeys = expandedRowKeys;
      } // De-dup of repeat call


      if (!this.latestExpandedRows || !(0, _shallowequal.default)(this.latestExpandedRows, expandedRowKeys)) {
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
      rows[0].unshift((0, _extends2.default)((0, _extends2.default)({}, iconColumn), {
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

      return (0, _vue.createVNode)(_TableRow.default, {
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
      var nextAncestorKeys = [].concat((0, _toConsumableArray2.default)(ancestorKeys), [parentKey]);
      var nextIndent = indent + 1;

      if (expandedRowRender) {
        rows.push(this.renderExpandedRow(record, index, expandedRowRender, expandedRowClassName(record, index, indent), nextAncestorKeys, nextIndent, fixed));
      }

      if (childrenData) {
        rows.push.apply(rows, (0, _toConsumableArray2.default)(_renderRows(childrenData, nextIndent, nextAncestorKeys)));
      }
    }
  },
  render: function render() {
    var data = this.data,
        childrenColumnName = this.childrenColumnName;
    var props = (0, _propsUtil.getOptionProps)(this);
    var needIndentSpaced = data.some(function (record) {
      return record[childrenColumnName];
    });
    return (0, _propsUtil.getSlot)(this, 'default', {
      props: (0, _extends2.default)((0, _extends2.default)({}, props), this.$attrs),
      needIndentSpaced: needIndentSpaced,
      renderRows: this.renderRows,
      handleExpandChange: this.handleExpandChange,
      renderExpandIndentCell: this.renderExpandIndentCell
    });
  }
};
var _default = ExpandableTable;
exports.default = _default;