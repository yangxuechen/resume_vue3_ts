"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createBodyRow;

var _vue = require("vue");

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _vueTypes = _interopRequireDefault(require("../_util/vue-types"));

var _propsUtil = require("../_util/props-util");

var _omit = _interopRequireDefault(require("omit.js"));

var BodyRowProps = {
  store: _vueTypes.default.object,
  rowKey: _vueTypes.default.oneOfType([_vueTypes.default.string, _vueTypes.default.number]),
  prefixCls: _vueTypes.default.string
};

function createBodyRow() {
  var Component = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'tr';
  var BodyRow = (0, _vue.defineComponent)({
    name: 'BodyRow',
    inheritAttrs: false,
    props: BodyRowProps,
    setup: function setup(props) {
      return {
        selected: (0, _vue.computed)(function () {
          var _a;

          return ((_a = props.store) === null || _a === void 0 ? void 0 : _a.selectedRowKeys.indexOf(props.rowKey)) >= 0;
        })
      };
    },
    render: function render() {
      var _className,
          _this = this;

      var rowProps = (0, _omit.default)((0, _extends2.default)((0, _extends2.default)({}, this.$props), this.$attrs), ['prefixCls', 'rowKey', 'store', 'class']);
      var className = (_className = {}, (0, _defineProperty2.default)(_className, "".concat(this.prefixCls, "-row-selected"), this.selected), (0, _defineProperty2.default)(_className, this.$attrs.class, !!this.$attrs.class), _className);
      return (0, _vue.createVNode)(Component, (0, _objectSpread2.default)({
        "class": className
      }, rowProps), {
        default: function _default() {
          return [(0, _propsUtil.getSlot)(_this)];
        }
      });
    }
  });
  return BodyRow;
}