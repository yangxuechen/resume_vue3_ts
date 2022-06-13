import _extends from "@babel/runtime/helpers/esm/extends";
import { createVNode as _createVNode } from "vue";
import { inject } from 'vue';
import PropTypes from '../../_util/vue-types';
import BaseTable from './BaseTable';
export default {
  name: 'BodyTable',
  inheritAttrs: false,
  props: {
    columns: PropTypes.array.isRequired,
    tableClassName: PropTypes.string.isRequired,
    handleBodyScroll: PropTypes.func.isRequired,
    handleWheel: PropTypes.func.isRequired,
    getRowKey: PropTypes.func.isRequired,
    expander: PropTypes.object.isRequired,
    isAnyColumnsFixed: PropTypes.looseBool
  },
  setup: function setup() {
    return {
      table: inject('table', {})
    };
  },
  render: function render() {
    var _this$table = this.table,
        prefixCls = _this$table.prefixCls,
        scroll = _this$table.scroll;
    var columns = this.columns,
        tableClassName = this.tableClassName,
        getRowKey = this.getRowKey,
        handleBodyScroll = this.handleBodyScroll,
        handleWheel = this.handleWheel,
        expander = this.expander,
        isAnyColumnsFixed = this.isAnyColumnsFixed;
    var _this$table2 = this.table,
        useFixedHeader = _this$table2.useFixedHeader,
        saveRef = _this$table2.saveRef;

    var bodyStyle = _extends({}, this.table.bodyStyle);

    if (scroll.y) {
      // maxHeight will make fixed-Table scrolling not working
      // so we only set maxHeight to body-Table here
      var maxHeight = bodyStyle.maxHeight || scroll.y;
      maxHeight = typeof maxHeight === 'number' ? "".concat(maxHeight, "px") : maxHeight;
      bodyStyle.maxHeight = maxHeight;
      bodyStyle.overflowY = bodyStyle.overflowY || 'scroll';
      useFixedHeader = true;
    }

    if (scroll.x) {
      bodyStyle.overflowX = bodyStyle.overflowX || 'auto'; // Fix weired webkit render bug
      // https://github.com/ant-design/ant-design/issues/7783

      bodyStyle.WebkitTransform = 'translate3d (0, 0, 0)';

      if (!scroll.y) {
        bodyStyle.overflowY = 'hidden';
      }
    }

    var baseTable = _createVNode(BaseTable, {
      "tableClassName": tableClassName,
      "hasHead": !useFixedHeader,
      "hasBody": true,
      "columns": columns,
      "expander": expander,
      "getRowKey": getRowKey,
      "isAnyColumnsFixed": isAnyColumnsFixed
    }, null); // Should provides `tabindex` if use scroll to enable keyboard scroll


    var useTabIndex = scroll && (scroll.x || scroll.y);
    return _createVNode("div", {
      "tabindex": useTabIndex ? -1 : undefined,
      "key": "bodyTable",
      "class": "".concat(prefixCls, "-body"),
      "style": bodyStyle,
      "ref": saveRef('bodyTable'),
      "onWheel": handleWheel,
      "onScroll": handleBodyScroll
    }, [baseTable]);
  }
};