"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

var _vueTypes = _interopRequireDefault(require("../../_util/vue-types"));

var _utils = require("./utils");

var _vcResizeObserver = _interopRequireDefault(require("../../vc-resize-observer"));

var _default2 = {
  name: 'ColGroup',
  inheritAttrs: false,
  props: {
    fixed: _vueTypes.default.string,
    columns: _vueTypes.default.array
  },
  setup: function setup() {
    return {
      table: (0, _vue.inject)('table', {}),
      store: (0, _vue.inject)('table-store', function () {
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
      cols.push((0, _vue.createVNode)("col", {
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
          additionalProps = _ref[_utils.INTERNAL_COL_DEFINE];
      var mergedKey = key !== undefined ? key : dataIndex;
      var w = typeof width === 'number' ? "".concat(width, "px") : width;
      return (0, _vue.createVNode)(_vcResizeObserver.default, {
        "onResize": function onResize(_ref2) {
          var offsetWidth = _ref2.offsetWidth;
          onColumnResize(mergedKey, offsetWidth);
        }
      }, {
        default: function _default() {
          return [(0, _vue.createVNode)("col", (0, _objectSpread2.default)({
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
    return (0, _vue.createVNode)("colgroup", null, [cols]);
  }
};
exports.default = _default2;