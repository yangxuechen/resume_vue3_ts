"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

function noop() {}

var OkButton = function OkButton(_, _ref) {
  var attrs = _ref.attrs;
  var prefixCls = attrs.prefixCls,
      locale = attrs.locale,
      okDisabled = attrs.okDisabled,
      onOk = attrs.onOk;
  var className = "".concat(prefixCls, "-ok-btn");

  if (okDisabled) {
    className += " ".concat(prefixCls, "-ok-btn-disabled");
  }

  return (0, _vue.createVNode)("a", {
    "class": className,
    "role": "button",
    "onClick": okDisabled ? noop : onOk
  }, [locale.ok]);
};

OkButton.inheritAttrs = false;
var _default = OkButton;
exports.default = _default;