import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import { createVNode as _createVNode } from "vue";
import { inject } from 'vue';
import PropTypes, { withUndefined } from '../../_util/vue-types';
import { measureScrollbar } from './utils';
import BaseTable from './BaseTable';
import classNames from '../../_util/classNames';
export default {
  name: 'HeadTable',
  inheritAttrs: false,
  props: {
    fixed: withUndefined(PropTypes.oneOfType([PropTypes.string, PropTypes.looseBool])),
    columns: PropTypes.array.isRequired,
    tableClassName: PropTypes.string.isRequired,
    handleBodyScrollLeft: PropTypes.func.isRequired,
    expander: PropTypes.object.isRequired
  },
  setup: function setup() {
    return {
      table: inject('table', {})
    };
  },
  render: function render() {
    var columns = this.columns,
        fixed = this.fixed,
        tableClassName = this.tableClassName,
        handleBodyScrollLeft = this.handleBodyScrollLeft,
        expander = this.expander,
        table = this.table;
    var prefixCls = table.prefixCls,
        scroll = table.scroll,
        showHeader = table.showHeader,
        saveRef = table.saveRef;
    var useFixedHeader = table.useFixedHeader;
    var headStyle = {};
    var scrollbarWidth = measureScrollbar({
      direction: 'vertical'
    });

    if (scroll.y) {
      useFixedHeader = true; // https://github.com/ant-design/ant-design/issues/17051

      var scrollbarWidthOfHeader = measureScrollbar({
        direction: 'horizontal',
        prefixCls: prefixCls
      }); // Add negative margin bottom for scroll bar overflow bug

      if (scrollbarWidthOfHeader > 0 && !fixed) {
        headStyle.marginBottom = "-".concat(scrollbarWidthOfHeader, "px");
        headStyle.paddingBottom = '0px'; // https://github.com/ant-design/ant-design/pull/19986

        headStyle.minWidth = "".concat(scrollbarWidth, "px"); // https://github.com/ant-design/ant-design/issues/17051

        headStyle.overflowX = 'scroll';
        headStyle.overflowY = scrollbarWidth === 0 ? 'hidden' : 'scroll';
      }
    }

    if (!useFixedHeader || !showHeader) {
      return null;
    }

    return _createVNode("div", {
      "key": "headTable",
      "ref": fixed ? function () {} : saveRef('headTable'),
      "class": classNames("".concat(prefixCls, "-header"), _defineProperty({}, "".concat(prefixCls, "-hide-scrollbar"), scrollbarWidth > 0)),
      "style": headStyle,
      "onScroll": handleBodyScrollLeft
    }, [_createVNode(BaseTable, {
      "tableClassName": tableClassName,
      "hasHead": true,
      "hasBody": false,
      "fixed": fixed,
      "columns": columns,
      "expander": expander
    }, null)]);
  }
};