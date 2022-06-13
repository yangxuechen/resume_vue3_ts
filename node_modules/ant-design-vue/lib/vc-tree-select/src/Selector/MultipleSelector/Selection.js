"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classNames = _interopRequireDefault(require("../../../../_util/classNames"));

var _vueTypes = _interopRequireDefault(require("../../../../_util/vue-types"));

var _util = require("../../util");

var _propsUtil = require("../../../../_util/props-util");

var _BaseMixin = _interopRequireDefault(require("../../../../_util/BaseMixin"));

var Selection = {
  mixins: [_BaseMixin.default],
  inheritAttrs: false,
  props: {
    prefixCls: _vueTypes.default.string,
    maxTagTextLength: _vueTypes.default.number,
    // onRemove: PropTypes.func,
    label: _vueTypes.default.any,
    value: _vueTypes.default.oneOfType([_vueTypes.default.string, _vueTypes.default.number]),
    removeIcon: _vueTypes.default.any
  },
  methods: {
    onRemove: function onRemove(event) {
      var value = this.$props.value;

      this.__emit('remove', event, value);

      event.stopPropagation();
    }
  },
  render: function render() {
    var _this$$props = this.$props,
        prefixCls = _this$$props.prefixCls,
        maxTagTextLength = _this$$props.maxTagTextLength,
        label = _this$$props.label,
        value = _this$$props.value;
    var content = label || value;

    if (maxTagTextLength && typeof content === 'string' && content.length > maxTagTextLength) {
      content = "".concat(content.slice(0, maxTagTextLength), "...");
    }

    var _this$$attrs = this.$attrs,
        className = _this$$attrs.class,
        style = _this$$attrs.style,
        onRemove = _this$$attrs.onRemove;
    return (0, _vue.createVNode)("span", (0, _objectSpread2.default)((0, _objectSpread2.default)({
      "style": (0, _extends2.default)((0, _extends2.default)({}, _util.UNSELECTABLE_STYLE), style)
    }, _util.UNSELECTABLE_ATTRIBUTE), {}, {
      "role": "menuitem",
      "class": (0, _classNames.default)("".concat(prefixCls, "-selection-item"), className),
      "title": (0, _util.toTitle)(label)
    }), [(0, _vue.createVNode)("span", {
      "class": "".concat(prefixCls, "-selection-item-content")
    }, [content]), onRemove && (0, _vue.createVNode)("span", {
      "class": "".concat(prefixCls, "-selection-item-remove"),
      "onClick": this.onRemove
    }, [(0, _propsUtil.getComponent)(this, 'removeIcon')])]);
  }
};
var _default = Selection;
exports.default = _default;