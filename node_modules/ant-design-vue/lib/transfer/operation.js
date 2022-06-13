"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _LeftOutlined = _interopRequireDefault(require("@ant-design/icons-vue/lib/icons/LeftOutlined"));

var _RightOutlined = _interopRequireDefault(require("@ant-design/icons-vue/lib/icons/RightOutlined"));

var _button = _interopRequireDefault(require("../button"));

function noop() {}

var Operation = function Operation(props) {
  var disabled = props.disabled,
      _props$moveToLeft = props.moveToLeft,
      moveToLeft = _props$moveToLeft === void 0 ? noop : _props$moveToLeft,
      _props$moveToRight = props.moveToRight,
      moveToRight = _props$moveToRight === void 0 ? noop : _props$moveToRight,
      _props$leftArrowText = props.leftArrowText,
      leftArrowText = _props$leftArrowText === void 0 ? '' : _props$leftArrowText,
      _props$rightArrowText = props.rightArrowText,
      rightArrowText = _props$rightArrowText === void 0 ? '' : _props$rightArrowText,
      leftActive = props.leftActive,
      rightActive = props.rightActive,
      className = props.class,
      style = props.style;
  return (0, _vue.createVNode)("div", {
    "class": className,
    "style": style
  }, [(0, _vue.createVNode)(_button.default, {
    "type": "primary",
    "size": "small",
    "disabled": disabled || !rightActive,
    "onClick": moveToRight,
    "icon": (0, _vue.createVNode)(_RightOutlined.default, null, null)
  }, {
    default: function _default() {
      return [rightArrowText];
    }
  }), (0, _vue.createVNode)(_button.default, {
    "type": "primary",
    "size": "small",
    "disabled": disabled || !leftActive,
    "onClick": moveToLeft,
    "icon": (0, _vue.createVNode)(_LeftOutlined.default, null, null)
  }, {
    default: function _default() {
      return [leftArrowText];
    }
  })]);
};

Operation.inheritAttrs = false;
var _default2 = Operation;
exports.default = _default2;