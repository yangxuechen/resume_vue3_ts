"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _vueTypes = _interopRequireWildcard(require("../../_util/vue-types"));

var _ExpandIcon = _interopRequireDefault(require("./ExpandIcon"));

var _BaseMixin = _interopRequireDefault(require("../../_util/BaseMixin"));

var _propsUtil = require("../../_util/props-util");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var ExpandableRow = {
  mixins: [_BaseMixin.default],
  name: 'ExpandableRow',
  inheritAttrs: false,
  props: {
    prefixCls: _vueTypes.default.string.isRequired,
    rowKey: _vueTypes.default.oneOfType([_vueTypes.default.string, _vueTypes.default.number]).isRequired,
    fixed: (0, _vueTypes.withUndefined)(_vueTypes.default.oneOfType([_vueTypes.default.string, _vueTypes.default.looseBool])),
    record: _vueTypes.default.oneOfType([_vueTypes.default.object, _vueTypes.default.array]).isRequired,
    indentSize: _vueTypes.default.number,
    needIndentSpaced: _vueTypes.default.looseBool.isRequired,
    expandRowByClick: _vueTypes.default.looseBool,
    expandIconAsCell: _vueTypes.default.looseBool,
    expandIconColumnIndex: _vueTypes.default.number,
    childrenColumnName: _vueTypes.default.string,
    expandedRowRender: _vueTypes.default.func,
    expandIcon: _vueTypes.default.func // onExpandedChange: PropTypes.func.isRequired,
    // onRowClick: PropTypes.func,
    // children: PropTypes.func.isRequired,

  },
  setup: function setup(props) {
    var store = (0, _vue.inject)('table-store', function () {
      return {};
    });
    return {
      expanded: (0, _vue.computed)(function () {
        return store.expandedRowKeys.includes(props.rowKey);
      })
    };
  },
  beforeUnmount: function beforeUnmount() {
    this.handleDestroy();
  },
  methods: {
    hasExpandIcon: function hasExpandIcon(columnIndex) {
      var _this$$props = this.$props,
          expandRowByClick = _this$$props.expandRowByClick,
          expandIcon = _this$$props.expandIcon;

      if (this.tempExpandIconAsCell || columnIndex !== this.tempExpandIconColumnIndex) {
        return false;
      }

      return !!expandIcon || !expandRowByClick;
    },
    handleExpandChange: function handleExpandChange(record, event) {
      var expanded = this.expanded,
          rowKey = this.rowKey;

      this.__emit('expandedChange', !expanded, record, event, rowKey);
    },
    handleDestroy: function handleDestroy() {
      var rowKey = this.rowKey,
          record = this.record;

      this.__emit('expandedChange', false, record, null, rowKey, true);
    },
    handleRowClick: function handleRowClick(record, index, event) {
      var expandRowByClick = this.expandRowByClick;

      if (expandRowByClick) {
        this.handleExpandChange(record, event);
      }

      this.__emit('rowClick', record, index, event);
    },
    renderExpandIcon: function renderExpandIcon() {
      var prefixCls = this.prefixCls,
          expanded = this.expanded,
          record = this.record,
          needIndentSpaced = this.needIndentSpaced,
          expandIcon = this.expandIcon;

      if (expandIcon) {
        return expandIcon({
          prefixCls: prefixCls,
          expanded: expanded,
          record: record,
          needIndentSpaced: needIndentSpaced,
          expandable: this.expandable,
          onExpand: this.handleExpandChange
        });
      }

      return (0, _vue.createVNode)(_ExpandIcon.default, {
        "expandable": this.expandable,
        "prefixCls": prefixCls,
        "onExpand": this.handleExpandChange,
        "needIndentSpaced": needIndentSpaced,
        "expanded": expanded,
        "record": record
      }, null);
    },
    renderExpandIconCell: function renderExpandIconCell(cells) {
      if (!this.tempExpandIconAsCell) {
        return;
      }

      var prefixCls = this.prefixCls;
      cells.push((0, _vue.createVNode)("td", {
        "class": "".concat(prefixCls, "-expand-icon-cell"),
        "key": "rc-table-expand-icon-cell"
      }, [this.renderExpandIcon()]));
    }
  },
  render: function render() {
    var childrenColumnName = this.childrenColumnName,
        expandedRowRender = this.expandedRowRender,
        indentSize = this.indentSize,
        record = this.record,
        fixed = this.fixed,
        expanded = this.expanded;
    this.tempExpandIconAsCell = fixed !== 'right' ? this.expandIconAsCell : false;
    this.tempExpandIconColumnIndex = fixed !== 'right' ? this.expandIconColumnIndex : -1;
    var childrenData = record[childrenColumnName];
    this.expandable = !!(childrenData || expandedRowRender);
    var expandableRowProps = {
      indentSize: indentSize,
      expanded: expanded,
      hasExpandIcon: this.hasExpandIcon,
      renderExpandIcon: this.renderExpandIcon,
      renderExpandIconCell: this.renderExpandIconCell,
      onRowClick: this.handleRowClick
    };
    return (0, _propsUtil.getSlot)(this, 'default', expandableRowProps);
  }
};
var _default = ExpandableRow;
exports.default = _default;