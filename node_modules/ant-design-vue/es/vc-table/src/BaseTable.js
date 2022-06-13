import _extends from "@babel/runtime/helpers/esm/extends";
import { resolveDirective as _resolveDirective, createVNode as _createVNode } from "vue";
import { inject } from 'vue';
import PropTypes, { withUndefined } from '../../_util/vue-types';
import classNames from '../../_util/classNames';
import ColGroup from './ColGroup';
import TableHeader from './TableHeader';
import TableRow from './TableRow';
import ExpandableRow from './ExpandableRow';

function noop() {}

var BaseTable = {
  name: 'BaseTable',
  inheritAttrs: false,
  props: {
    fixed: withUndefined(PropTypes.oneOfType([PropTypes.string, PropTypes.looseBool])),
    columns: PropTypes.array.isRequired,
    tableClassName: PropTypes.string.isRequired,
    hasHead: PropTypes.looseBool.isRequired,
    hasBody: PropTypes.looseBool.isRequired,
    expander: PropTypes.object.isRequired,
    getRowKey: PropTypes.func,
    isAnyColumnsFixed: PropTypes.looseBool
  },
  setup: function setup() {
    return {
      table: inject('table', function () {
        return {};
      }),
      store: inject('table-store', function () {
        return {};
      })
    };
  },
  methods: {
    getColumns: function getColumns(cols) {
      var _this$$props$columns = this.$props.columns,
          columns = _this$$props$columns === void 0 ? [] : _this$$props$columns;
      return (cols || columns).map(function (column) {
        return _extends(_extends({}, column), {
          className: classNames(column.className, column.class)
        });
      });
    },
    handleRowHover: function handleRowHover(isHover, key) {
      this.store.currentHoverKey = isHover ? key : null;
    },
    renderRows: function renderRows(renderData, indent) {
      var _this = this;

      var ancestorKeys = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

      var _Object$assign = _extends(_extends(_extends({}, this.table.$attrs), this.table.$props), this.table.$data),
          components = _Object$assign.sComponents,
          prefixCls = _Object$assign.prefixCls,
          childrenColumnName = _Object$assign.childrenColumnName,
          rowClassName = _Object$assign.rowClassName,
          _Object$assign$custom = _Object$assign.customRow,
          customRow = _Object$assign$custom === void 0 ? noop : _Object$assign$custom,
          _Object$assign$onRowC = _Object$assign.onRowClick,
          onRowClick = _Object$assign$onRowC === void 0 ? noop : _Object$assign$onRowC,
          _Object$assign$onRowD = _Object$assign.onRowDoubleClick,
          onRowDoubleClick = _Object$assign$onRowD === void 0 ? noop : _Object$assign$onRowD,
          _Object$assign$onRowC2 = _Object$assign.onRowContextMenu,
          onRowContextMenu = _Object$assign$onRowC2 === void 0 ? noop : _Object$assign$onRowC2,
          _Object$assign$onRowM = _Object$assign.onRowMouseEnter,
          onRowMouseEnter = _Object$assign$onRowM === void 0 ? noop : _Object$assign$onRowM,
          _Object$assign$onRowM2 = _Object$assign.onRowMouseLeave,
          onRowMouseLeave = _Object$assign$onRowM2 === void 0 ? noop : _Object$assign$onRowM2,
          rowRef = _Object$assign.rowRef;

      var columnManager = this.store.columnManager;
      var getRowKey = this.getRowKey,
          fixed = this.fixed,
          expander = this.expander,
          isAnyColumnsFixed = this.isAnyColumnsFixed;
      var rows = [];

      var _loop = function _loop(i) {
        var record = renderData[i];
        var key = getRowKey(record, i);
        var className = typeof rowClassName === 'string' ? rowClassName : rowClassName(record, i, indent);
        var onHoverProps = {};

        if (columnManager.isAnyColumnsFixed) {
          onHoverProps.onHover = _this.handleRowHover;
        }

        var leafColumns = void 0;

        if (fixed === 'left') {
          leafColumns = columnManager.leftLeafColumns;
        } else if (fixed === 'right') {
          leafColumns = columnManager.rightLeafColumns;
        } else {
          leafColumns = _this.getColumns(columnManager.leafColumns);
        }

        var rowPrefixCls = "".concat(prefixCls, "-row");

        var expandableRowProps = _extends(_extends({}, expander.props), {
          fixed: fixed,
          index: i,
          prefixCls: rowPrefixCls,
          record: record,
          rowKey: key,
          needIndentSpaced: expander.needIndentSpaced,
          key: key,
          onRowClick: onRowClick,
          onExpandedChange: expander.handleExpandChange
        });

        var row = _createVNode(ExpandableRow, expandableRowProps, {
          default: function _default(expandableRow) {
            var tableRowProps = _extends(_extends(_extends({
              fixed: fixed,
              indent: indent,
              record: record,
              index: i,
              prefixCls: rowPrefixCls,
              childrenColumnName: childrenColumnName,
              columns: leafColumns,
              rowKey: key,
              ancestorKeys: ancestorKeys,
              components: components,
              isAnyColumnsFixed: isAnyColumnsFixed,
              customRow: customRow,
              onRowDoubleClick: onRowDoubleClick,
              onRowContextMenu: onRowContextMenu,
              onRowMouseEnter: onRowMouseEnter,
              onRowMouseLeave: onRowMouseLeave
            }, onHoverProps), {
              class: className,
              ref: rowRef(record, i, indent)
            }), expandableRow);

            return _createVNode(TableRow, tableRowProps, null);
          }
        });

        rows.push(row);
        expander.renderRows(_this.renderRows, rows, record, i, indent, fixed, key, ancestorKeys);
      };

      for (var i = 0; i < renderData.length; i += 1) {
        _loop(i);
      }

      return rows;
    }
  },
  render: function render() {
    var _this2 = this;

    var _this$table = this.table,
        components = _this$table.sComponents,
        prefixCls = _this$table.prefixCls,
        scroll = _this$table.scroll,
        data = _this$table.data;
    var _this$$props = this.$props,
        expander = _this$$props.expander,
        tableClassName = _this$$props.tableClassName,
        hasHead = _this$$props.hasHead,
        hasBody = _this$$props.hasBody,
        fixed = _this$$props.fixed;
    var columns = this.getColumns();
    var tableStyle = {};

    if (!fixed && scroll.x) {
      // not set width, then use content fixed width
      tableStyle.width = scroll.x === true ? 'auto' : scroll.x;
      tableStyle.width = typeof tableStyle.width === 'number' ? "".concat(tableStyle.width, "px") : tableStyle.width;
    }

    if (fixed) {
      var width = columns.reduce(function (sum, _ref) {
        var w = _ref.width;
        return sum + parseFloat(w, 10);
      }, 0);

      if (width > 0) {
        tableStyle.width = width + 'px';
      }
    }

    var Table = hasBody ? components.table : 'table';
    var BodyWrapper = components.body.wrapper;
    var body;

    if (hasBody) {
      body = _createVNode(BodyWrapper, {
        "class": "".concat(prefixCls, "-tbody")
      }, {
        default: function _default() {
          return [_this2.renderRows(data, 0)];
        }
      });
    }

    return _createVNode(Table, {
      "class": tableClassName,
      "style": tableStyle,
      "key": "table"
    }, {
      default: function _default() {
        return [_createVNode(ColGroup, {
          "columns": columns,
          "fixed": fixed
        }, null), hasHead && _createVNode(TableHeader, {
          "expander": expander,
          "columns": columns,
          "fixed": fixed
        }, null), body];
      }
    });
  }
};
export default BaseTable;