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
import PropTypes, { withUndefined } from '../../_util/vue-types';
import TableCell from './TableCell';
import { initDefaultProps, findDOMNode } from '../../_util/props-util';
import BaseMixin from '../../_util/BaseMixin';
import warning from '../../_util/warning';
import { computed, inject } from 'vue';

function noop() {}

var TableRow = {
  name: 'TableRow',
  inheritAttrs: false,
  mixins: [BaseMixin],
  props: initDefaultProps({
    customRow: PropTypes.func,
    // onRowClick: PropTypes.func,
    // onRowDoubleClick: PropTypes.func,
    // onRowContextMenu: PropTypes.func,
    // onRowMouseEnter: PropTypes.func,
    // onRowMouseLeave: PropTypes.func,
    record: PropTypes.object,
    prefixCls: PropTypes.string,
    // onHover: PropTypes.func,
    columns: PropTypes.array,
    index: PropTypes.number,
    rowKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    className: PropTypes.string,
    indent: PropTypes.number,
    indentSize: PropTypes.number,
    hasExpandIcon: PropTypes.func,
    fixed: withUndefined(PropTypes.oneOfType([PropTypes.string, PropTypes.looseBool])),
    renderExpandIcon: PropTypes.func,
    renderExpandIconCell: PropTypes.func,
    components: PropTypes.any,
    expandedRow: PropTypes.looseBool,
    isAnyColumnsFixed: PropTypes.looseBool,
    ancestorKeys: PropTypes.array.isRequired,
    expandIconColumnIndex: PropTypes.number,
    expandRowByClick: PropTypes.looseBool // visible: PropTypes.looseBool,
    // hovered: PropTypes.looseBool,
    // height: PropTypes.any,

  }, {
    // expandIconColumnIndex: 0,
    // expandRowByClick: false,
    hasExpandIcon: function hasExpandIcon() {},
    renderExpandIcon: function renderExpandIcon() {},
    renderExpandIconCell: function renderExpandIconCell() {}
  }),
  setup: function setup(props) {
    var store = inject('table-store', function () {
      return {};
    });
    var visible = computed(function () {
      var expandedRowKeys = store.expandedRowKeys;
      var ancestorKeys = props.ancestorKeys;
      return !!(ancestorKeys.length === 0 || ancestorKeys.every(function (k) {
        return expandedRowKeys.includes(k);
      }));
    });
    var height = computed(function () {
      var expandedRowsHeight = store.expandedRowsHeight,
          fixedColumnsBodyRowsHeight = store.fixedColumnsBodyRowsHeight;
      var fixed = props.fixed,
          rowKey = props.rowKey;

      if (!fixed) {
        return null;
      }

      if (expandedRowsHeight[rowKey]) {
        return expandedRowsHeight[rowKey];
      }

      if (fixedColumnsBodyRowsHeight[rowKey]) {
        return fixedColumnsBodyRowsHeight[rowKey];
      }

      return null;
    });
    var hovered = computed(function () {
      var currentHoverKey = store.currentHoverKey;
      var rowKey = props.rowKey;
      return currentHoverKey === rowKey;
    });
    return {
      store: store,
      visible: visible,
      hovered: hovered,
      height: height
    };
  },
  data: function data() {
    this.rowRef = null;
    return {
      shouldRender: this.visible
    };
  },
  mounted: function mounted() {
    var _this = this;

    if (this.shouldRender) {
      this.$nextTick(function () {
        _this.saveRowRef();
      });
    }
  },
  watch: {
    visible: function visible(val) {
      if (val) {
        this.shouldRender = true;
      }
    }
  },
  updated: function updated() {
    var _this2 = this;

    if (this.shouldRender && !this.rowRef) {
      this.$nextTick(function () {
        _this2.saveRowRef();
      });
    }
  },
  methods: {
    onRowClick: function onRowClick(event) {
      var rowPropFunc = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop;
      var record = this.record,
          index = this.index;

      this.__emit('rowClick', record, index, event);

      rowPropFunc(event);
    },
    onRowDoubleClick: function onRowDoubleClick(event) {
      var rowPropFunc = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop;
      var record = this.record,
          index = this.index;

      this.__emit('rowDoubleClick', record, index, event);

      rowPropFunc(event);
    },
    onContextMenu: function onContextMenu(event) {
      var rowPropFunc = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop;
      var record = this.record,
          index = this.index;

      this.__emit('rowContextmenu', record, index, event);

      rowPropFunc(event);
    },
    onMouseEnter: function onMouseEnter(event) {
      var rowPropFunc = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop;
      var record = this.record,
          index = this.index,
          rowKey = this.rowKey;

      this.__emit('hover', true, rowKey);

      this.__emit('rowMouseenter', record, index, event);

      rowPropFunc(event);
    },
    onMouseLeave: function onMouseLeave(event) {
      var rowPropFunc = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop;
      var record = this.record,
          index = this.index,
          rowKey = this.rowKey;

      this.__emit('hover', false, rowKey);

      this.__emit('rowMouseleave', record, index, event);

      rowPropFunc(event);
    },
    setExpandedRowHeight: function setExpandedRowHeight() {
      var store = this.store,
          rowKey = this.rowKey;
      var expandedRowsHeight = store.expandedRowsHeight;
      var height = this.rowRef.getBoundingClientRect().height;
      expandedRowsHeight = _extends(_extends({}, expandedRowsHeight), _defineProperty({}, rowKey, height));
      store.expandedRowsHeight = expandedRowsHeight;
    },
    setRowHeight: function setRowHeight() {
      var store = this.store,
          rowKey = this.rowKey;
      var fixedColumnsBodyRowsHeight = store.fixedColumnsBodyRowsHeight;
      var height = this.rowRef.getBoundingClientRect().height;
      store.fixedColumnsBodyRowsHeight = _extends(_extends({}, fixedColumnsBodyRowsHeight), _defineProperty({}, rowKey, height));
    },
    getStyle: function getStyle() {
      var height = this.height,
          visible = this.visible;
      var style = this.$attrs.style || {};

      if (height) {
        style = _extends(_extends({}, style), {
          height: height
        });
      }

      if (!visible && !style.display) {
        style = _extends(_extends({}, style), {
          display: 'none'
        });
      }

      return style;
    },
    saveRowRef: function saveRowRef() {
      this.rowRef = findDOMNode(this);
      var isAnyColumnsFixed = this.isAnyColumnsFixed,
          fixed = this.fixed,
          expandedRow = this.expandedRow,
          ancestorKeys = this.ancestorKeys;

      if (!isAnyColumnsFixed) {
        return;
      }

      if (!fixed && expandedRow) {
        this.setExpandedRowHeight();
      }

      if (!fixed && ancestorKeys.length >= 0) {
        this.setRowHeight();
      }
    }
  },
  render: function render() {
    var _this3 = this;

    if (!this.shouldRender) {
      return null;
    }

    var prefixCls = this.prefixCls,
        columns = this.columns,
        record = this.record,
        rowKey = this.rowKey,
        index = this.index,
        _this$customRow = this.customRow,
        customRow = _this$customRow === void 0 ? noop : _this$customRow,
        indent = this.indent,
        indentSize = this.indentSize,
        hovered = this.hovered,
        height = this.height,
        visible = this.visible,
        components = this.components,
        hasExpandIcon = this.hasExpandIcon,
        renderExpandIcon = this.renderExpandIcon,
        renderExpandIconCell = this.renderExpandIconCell;
    var BodyRow = components.body.row;
    var BodyCell = components.body.cell;
    var className = this.$attrs.class || '';

    if (hovered) {
      className += " ".concat(prefixCls, "-hover");
    }

    var cells = [];
    renderExpandIconCell(cells);

    for (var i = 0; i < columns.length; i += 1) {
      var column = columns[i];
      warning(column.onCellClick === undefined, 'column[onCellClick] is deprecated, please use column[customCell] instead.');
      cells.push(_createVNode(TableCell, {
        "prefixCls": prefixCls,
        "record": record,
        "indentSize": indentSize,
        "indent": indent,
        "index": index,
        "colIndex": i,
        "column": column,
        "key": column.key || column.dataIndex,
        "expandIcon": hasExpandIcon(i) && renderExpandIcon(),
        "component": BodyCell
      }, null));
    }

    var _a = customRow(record, index) || {},
        customClass = _a.class,
        customClassName = _a.className,
        customStyle = _a.style,
        rowProps = __rest(_a, ["class", "className", "style"]);

    var style = {
      height: typeof height === 'number' ? "".concat(height, "px") : height
    };

    if (!visible) {
      style.display = 'none';
    }

    style = _extends(_extends({}, style), customStyle);
    var rowClassName = classNames(prefixCls, className, "".concat(prefixCls, "-level-").concat(indent), customClassName, customClass);

    var bodyRowProps = _extends(_extends({}, rowProps), {
      style: style,
      onClick: function onClick(e) {
        _this3.onRowClick(e, rowProps.onClick);
      },
      onDblclick: function onDblclick(e) {
        _this3.onRowDoubleClick(e, rowProps.onDblclick);
      },
      onMouseenter: function onMouseenter(e) {
        _this3.onMouseEnter(e, rowProps.onMouseenter);
      },
      onMouseleave: function onMouseleave(e) {
        _this3.onMouseLeave(e, rowProps.onMouseleave);
      },
      onContextmenu: function onContextmenu(e) {
        _this3.onContextMenu(e, rowProps.onContextmenu);
      },
      class: rowClassName,
      'data-row-key': rowKey
    });

    return _createVNode(BodyRow, bodyRowProps, {
      default: function _default() {
        return [cells];
      }
    });
  }
};
export default TableRow;