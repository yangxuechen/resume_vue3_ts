"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _Dialog = _interopRequireDefault(require("./Dialog"));

var _IDialogPropTypes = _interopRequireDefault(require("./IDialogPropTypes"));

var _PortalWrapper = _interopRequireDefault(require("../_util/PortalWrapper"));

var _propsUtil = require("../_util/props-util");

var IDialogPropTypes = (0, _IDialogPropTypes.default)();
var DialogWrap = (0, _vue.defineComponent)({
  inheritAttrs: false,
  props: (0, _extends2.default)((0, _extends2.default)({}, IDialogPropTypes), {
    visible: IDialogPropTypes.visible.def(false)
  }),
  render: function render() {
    var _this = this;

    var _this$$props = this.$props,
        visible = _this$$props.visible,
        getContainer = _this$$props.getContainer,
        forceRender = _this$$props.forceRender;
    var dialogProps = (0, _extends2.default)((0, _extends2.default)((0, _extends2.default)({}, this.$props), this.$attrs), {
      ref: '_component',
      key: 'dialog'
    }); // 渲染在当前 dom 里；

    if (getContainer === false) {
      return (0, _vue.createVNode)(_Dialog.default, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, dialogProps), {}, {
        "getOpenCount": function getOpenCount() {
          return 2;
        }
      }), {
        default: function _default() {
          return [(0, _propsUtil.getSlot)(_this)];
        }
      });
    }

    return (0, _vue.createVNode)(_PortalWrapper.default, {
      "visible": visible,
      "forceRender": forceRender,
      "getContainer": getContainer,
      "children": function children(childProps) {
        dialogProps = (0, _extends2.default)((0, _extends2.default)({}, dialogProps), childProps);
        return (0, _vue.createVNode)(_Dialog.default, dialogProps, {
          default: function _default() {
            return [(0, _propsUtil.getSlot)(_this)];
          }
        });
      }
    }, null);
  }
});
var _default2 = DialogWrap;
exports.default = _default2;