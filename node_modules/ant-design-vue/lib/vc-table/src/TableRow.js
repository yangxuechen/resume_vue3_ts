"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _extends4 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classNames = _interopRequireDefault(require("../../_util/classNames"));

var _vueTypes = _interopRequireWildcard(require("../../_util/vue-types"));

var _TableCell = _interopRequireDefault(require("./TableCell"));

var _propsUtil = require("../../_util/props-util");

var _BaseMixin = _interopRequireDefault(require("../../_util/BaseMixin"));

var _warning = _interopRequireDefault(require("../../_util/warning"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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

function noop() {}

var TableRow = {
  name: 'TableRow',
  inheritAttrs: false,
  mixins: [_BaseMixin.default],
  props: (0, _propsUtil.initDefaultProps)({
    customRow: _vueTypes.default.func,
    // onRowClick: PropTypes.func,
    // onRowDoubleClick: PropTypes.func,
    // onRowContextMenu: PropTypes.func,
    // onRowMouseEnter: PropTypes.func,
    // onRowMouseLeave: PropTypes.func,
    record: _vueTypes.default.object,
    prefixCls: _vueTypes.default.string,
    // onHover: PropTypes.func,
    columns: _vueTypes.default.array,
    index: _vueTypes.default.number,
    rowKey: _vueTypes.default.oneOfType([_vueTypes.default.string, _vueTypes.default.number]).isRequired,
    className: _vueTypes.default.string,
    indent: _vueTypes.default.number,
    indentSize: _vueTypes.default.number,
    hasExpandIcon: _vueTypes.default.func,
    fixed: (0, _vueTypes.withUndefined)(_vueTypes.default.oneOfType([_vueTypes.default.string, _vueTypes.default.looseBool])),
    renderExpandIcon: _vueTypes.default.func,
    renderExpandIconCell: _vueTypes.default.func,
    components: _vueTypes.default.any,
    expandedRow: _vueTypes.default.looseBool,
    isAnyColumnsFixed: _vueTypes.default.looseBool,
    ancestorKeys: _vueTypes.default.array.isRequired,
    expandIconColumnIndex: _vueTypes.default.number,
    expandRowByClick: _vueTypes.default.looseBool // visible: PropTypes.looseBool,
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
    var store = (0, _vue.inject)('table-store', function () {
      return {};
    });
    var visible = (0, _vue.computed)(function () {
      var expandedRowKeys = store.expandedRowKeys;
      var ancestorKeys = props.ancestorKeys;
      return !!(ancestorKeys.length === 0 || ancestorKeys.every(function (k) {
        return expandedRowKeys.includes(k);
      }));
    });
    var height = (0, _vue.computed)(function () {
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
    var hovered = (0, _vue.computed)(function () {
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
      expandedRowsHeight = (0, _extends4.default)((0, _extends4.default)({}, expandedRowsHeight), (0, _defineProperty2.default)({}, rowKey, height));
      store.expandedRowsHeight = expandedRowsHeight;
    },
    setRowHeight: function setRowHeight() {
      var store = this.store,
          rowKey = this.rowKey;
      var fixedColumnsBodyRowsHeight = store.fixedColumnsBodyRowsHeight;
      var height = this.rowRef.getBoundingClientRect().height;
      store.fixedColumnsBodyRowsHeight = (0, _extends4.default)((0, _extends4.default)({}, fixedColumnsBodyRowsHeight), (0, _defineProperty2.default)({}, rowKey, height));
    },
    getStyle: function getStyle() {
      var height = this.height,
          visible = this.visible;
      var style = this.$attrs.style || {};

      if (height) {
        style = (0, _extends4.default)((0, _extends4.default)({}, style), {
          height: height
        });
      }

      if (!visible && !style.display) {
        style = (0, _extends4.default)((0, _extends4.default)({}, style), {
          display: 'none'
        });
      }

      return style;
    },
    saveRowRef: function saveRowRef() {
      this.rowRef = (0, _propsUtil.findDOMNode)(this);
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
      (0, _warning.default)(column.onCellClick === undefined, 'column[onCellClick] is deprecated, please use column[customCell] instead.');
      cells.push((0, _vue.createVNode)(_TableCell.default, {
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

    style = (0, _extends4.default)((0, _extends4.default)({}, style), customStyle);
    var rowClassName = (0, _classNames.default)(prefixCls, className, "".concat(prefixCls, "-level-").concat(indent), customClassName, customClass);
    var bodyRowProps = (0, _extends4.default)((0, _extends4.default)({}, rowProps), {
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
    return (0, _vue.createVNode)(BodyRow, bodyRowProps, {
      default: function _default() {
        return [cells];
      }
    });
  }
};
var _default2 = TableRow;
exports.default = _default2;