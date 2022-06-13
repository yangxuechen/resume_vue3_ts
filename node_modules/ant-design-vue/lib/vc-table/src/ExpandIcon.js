"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _vueTypes = _interopRequireDefault(require("../../_util/vue-types"));

var _BaseMixin = _interopRequireDefault(require("../../_util/BaseMixin"));

var _default = {
  name: 'ExpandIcon',
  mixins: [_BaseMixin.default],
  inheritAttrs: false,
  props: {
    record: _vueTypes.default.object,
    prefixCls: _vueTypes.default.string,
    expandable: _vueTypes.default.any,
    expanded: _vueTypes.default.looseBool,
    needIndentSpaced: _vueTypes.default.looseBool
  },
  methods: {
    onExpand: function onExpand(e) {
      this.__emit('expand', this.record, e);
    }
  },
  render: function render() {
    var expandable = this.expandable,
        prefixCls = this.prefixCls,
        onExpand = this.onExpand,
        needIndentSpaced = this.needIndentSpaced,
        expanded = this.expanded;

    if (expandable) {
      var expandClassName = expanded ? 'expanded' : 'collapsed';
      return (0, _vue.createVNode)("span", {
        "class": "".concat(prefixCls, "-expand-icon ").concat(prefixCls, "-").concat(expandClassName),
        "onClick": onExpand
      }, null);
    }

    if (needIndentSpaced) {
      return (0, _vue.createVNode)("span", {
        "class": "".concat(prefixCls, "-expand-icon ").concat(prefixCls, "-spaced")
      }, null);
    }

    return null;
  }
};
exports.default = _default;