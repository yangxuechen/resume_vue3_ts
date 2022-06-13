import { createVNode as _createVNode } from "vue";
import PropTypes, { withUndefined } from '../../_util/vue-types';
import ExpandIcon from './ExpandIcon';
import BaseMixin from '../../_util/BaseMixin';
import { getSlot } from '../../_util/props-util';
import { computed, inject } from 'vue';
var ExpandableRow = {
  mixins: [BaseMixin],
  name: 'ExpandableRow',
  inheritAttrs: false,
  props: {
    prefixCls: PropTypes.string.isRequired,
    rowKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    fixed: withUndefined(PropTypes.oneOfType([PropTypes.string, PropTypes.looseBool])),
    record: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
    indentSize: PropTypes.number,
    needIndentSpaced: PropTypes.looseBool.isRequired,
    expandRowByClick: PropTypes.looseBool,
    expandIconAsCell: PropTypes.looseBool,
    expandIconColumnIndex: PropTypes.number,
    childrenColumnName: PropTypes.string,
    expandedRowRender: PropTypes.func,
    expandIcon: PropTypes.func // onExpandedChange: PropTypes.func.isRequired,
    // onRowClick: PropTypes.func,
    // children: PropTypes.func.isRequired,

  },
  setup: function setup(props) {
    var store = inject('table-store', function () {
      return {};
    });
    return {
      expanded: computed(function () {
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

      return _createVNode(ExpandIcon, {
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
      cells.push(_createVNode("td", {
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
    return getSlot(this, 'default', expandableRowProps);
  }
};
export default ExpandableRow;