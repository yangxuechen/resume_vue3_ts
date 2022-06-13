"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _vueTypes = _interopRequireDefault(require("../_util/vue-types"));

var TransBtn = function TransBtn(props, _ref) {
  var slots = _ref.slots;

  var _a;

  var className = props.class,
      customizeIcon = props.customizeIcon,
      customizeIconProps = props.customizeIconProps,
      _onMousedown = props.onMousedown,
      onClick = props.onClick;
  var icon;

  if (typeof customizeIcon === 'function') {
    icon = customizeIcon(customizeIconProps);
  } else {
    icon = customizeIcon;
  }

  return (0, _vue.createVNode)("span", {
    "class": className,
    "onMousedown": function onMousedown(event) {
      event.preventDefault();

      if (_onMousedown) {
        _onMousedown(event);
      }
    },
    "style": {
      userSelect: 'none',
      WebkitUserSelect: 'none'
    },
    "unselectable": "on",
    "onClick": onClick,
    "aria-hidden": true
  }, [icon !== undefined ? icon : (0, _vue.createVNode)("span", {
    "class": className.split(/\s+/).map(function (cls) {
      return "".concat(cls, "-icon");
    })
  }, [(_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots)])]);
};

TransBtn.inheritAttrs = false;
TransBtn.displayName = 'TransBtn';
TransBtn.props = {
  class: _vueTypes.default.string,
  customizeIcon: _vueTypes.default.any,
  customizeIconProps: _vueTypes.default.any,
  onMousedown: _vueTypes.default.func,
  onClick: _vueTypes.default.func
};
var _default = TransBtn;
exports.default = _default;