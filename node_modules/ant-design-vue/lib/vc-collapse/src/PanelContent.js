"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _vueTypes = _interopRequireDefault(require("../../_util/vue-types"));

var _propsUtil = require("../../_util/props-util");

var _default = (0, _vue.defineComponent)({
  name: 'PanelContent',
  props: {
    prefixCls: _vueTypes.default.string,
    isActive: _vueTypes.default.looseBool,
    destroyInactivePanel: _vueTypes.default.looseBool,
    forceRender: _vueTypes.default.looseBool,
    role: _vueTypes.default.any
  },
  data: function data() {
    return {
      _isActive: undefined
    };
  },
  render: function render() {
    var _contentCls;

    this._isActive = this.forceRender || this._isActive || this.isActive;

    if (!this._isActive) {
      return null;
    }

    var _this$$props = this.$props,
        prefixCls = _this$$props.prefixCls,
        isActive = _this$$props.isActive,
        destroyInactivePanel = _this$$props.destroyInactivePanel,
        forceRender = _this$$props.forceRender,
        role = _this$$props.role;
    var contentCls = (_contentCls = {}, (0, _defineProperty2.default)(_contentCls, "".concat(prefixCls, "-content"), true), (0, _defineProperty2.default)(_contentCls, "".concat(prefixCls, "-content-active"), isActive), _contentCls);
    var child = !forceRender && !isActive && destroyInactivePanel ? null : (0, _vue.createVNode)("div", {
      "class": "".concat(prefixCls, "-content-box")
    }, [(0, _propsUtil.getSlot)(this)]);
    return (0, _vue.createVNode)("div", {
      "class": contentCls,
      "role": role
    }, [child]);
  }
});

exports.default = _default;