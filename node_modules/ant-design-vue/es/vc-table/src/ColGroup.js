import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import { createVNode as _createVNode } from "vue";
import { inject } from 'vue';
import PropTypes from '../../_util/vue-types';
import { INTERNAL_COL_DEFINE } from './utils';
import ResizeObserver from '../../vc-resize-observer';
export default {
  name: 'ColGroup',
  inheritAttrs: false,
  props: {
    fixed: PropTypes.string,
    columns: PropTypes.array
  },
  setup: function setup() {
    return {
      table: inject('table', {}),
      store: inject('table-store', function () {
        return {};
      })
    };
  },
  render: function render() {
    var fixed = this.fixed,
        table = this.table;
    var prefixCls = table.prefixCls,
        expandIconAsCell = table.expandIconAsCell,
        onColumnResize = table.onColumnResize;
    var cols = [];

    if (expandIconAsCell && fixed !== 'right') {
      cols.push(_createVNode("col", {
        "class": "".concat(prefixCls, "-expand-icon-col"),
        "key": "rc-table-expand-icon-col"
      }, null));
    }

    var leafColumns;
    var columnManager = this.store.columnManager;

    if (fixed === 'left') {
      leafColumns = columnManager.leftLeafColumns;
    } else if (fixed === 'right') {
      leafColumns = columnManager.rightLeafColumns;
    } else {
      leafColumns = columnManager.leafColumns;
    }

    cols = cols.concat(leafColumns.map(function (_ref) {
      var key = _ref.key,
          dataIndex = _ref.dataIndex,
          width = _ref.width,
          additionalProps = _ref[INTERNAL_COL_DEFINE];
      var mergedKey = key !== undefined ? key : dataIndex;
      var w = typeof width === 'number' ? "".concat(width, "px") : width;
      return _createVNode(ResizeObserver, {
        "onResize": function onResize(_ref2) {
          var offsetWidth = _ref2.offsetWidth;
          onColumnResize(mergedKey, offsetWidth);
        }
      }, {
        default: function _default() {
          return [_createVNode("col", _objectSpread({
            "data-key": mergedKey,
            "key": mergedKey,
            "style": {
              width: w,
              minWidth: w
            }
          }, additionalProps), null)];
        }
      });
    }));
    return _createVNode("colgroup", null, [cols]);
  }
};