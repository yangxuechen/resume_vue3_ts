"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _vueTypes = _interopRequireDefault(require("../../_util/vue-types"));

var _BaseTable = _interopRequireDefault(require("./BaseTable"));

var _default = {
  name: 'BodyTable',
  inheritAttrs: false,
  props: {
    columns: _vueTypes.default.array.isRequired,
    tableClassName: _vueTypes.default.string.isRequired,
    handleBodyScroll: _vueTypes.default.func.isRequired,
    handleWheel: _vueTypes.default.func.isRequired,
    getRowKey: _vueTypes.default.func.isRequired,
    expander: _vueTypes.default.object.isRequired,
    isAnyColumnsFixed: _vueTypes.default.looseBool
  },
  setup: function setup() {
    return {
      table: (0, _vue.inject)('table', {})
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
    var bodyStyle = (0, _extends2.default)({}, this.table.bodyStyle);

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

    var baseTable = (0, _vue.createVNode)(_BaseTable.default, {
      "tableClassName": tableClassName,
      "hasHead": !useFixedHeader,
      "hasBody": true,
      "columns": columns,
      "expander": expander,
      "getRowKey": getRowKey,
      "isAnyColumnsFixed": isAnyColumnsFixed
    }, null); // Should provides `tabindex` if use scroll to enable keyboard scroll

    var useTabIndex = scroll && (scroll.x || scroll.y);
    return (0, _vue.createVNode)("div", {
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
exports.default = _default;