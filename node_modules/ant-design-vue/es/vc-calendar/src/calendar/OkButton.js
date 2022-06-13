import { createVNode as _createVNode } from "vue";

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

  return _createVNode("a", {
    "class": className,
    "role": "button",
    "onClick": okDisabled ? noop : onOk
  }, [locale.ok]);
};

OkButton.inheritAttrs = false;
export default OkButton;