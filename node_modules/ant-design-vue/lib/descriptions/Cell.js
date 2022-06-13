"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

function notEmpty(val) {
  return val !== undefined && val !== null;
}

var Cell = function Cell(props) {
  var itemPrefixCls = props.itemPrefixCls,
      component = props.component,
      span = props.span,
      labelStyle = props.labelStyle,
      contentStyle = props.contentStyle,
      bordered = props.bordered,
      label = props.label,
      content = props.content,
      colon = props.colon;
  var Component = component;

  if (bordered) {
    var _ref;

    return (0, _vue.createVNode)(Component, {
      "class": [(_ref = {}, (0, _defineProperty2.default)(_ref, "".concat(itemPrefixCls, "-item-label"), notEmpty(label)), (0, _defineProperty2.default)(_ref, "".concat(itemPrefixCls, "-item-content"), notEmpty(content)), _ref)],
      "colSpan": span
    }, {
      default: function _default() {
        return [notEmpty(label) && (0, _vue.createVNode)("span", {
          "style": labelStyle
        }, [label]), notEmpty(content) && (0, _vue.createVNode)("span", {
          "style": contentStyle
        }, [content])];
      }
    });
  }

  return (0, _vue.createVNode)(Component, {
    "class": ["".concat(itemPrefixCls, "-item")],
    "colSpan": span
  }, {
    default: function _default() {
      return [(0, _vue.createVNode)("div", {
        "class": "".concat(itemPrefixCls, "-item-container")
      }, [label && (0, _vue.createVNode)("span", {
        "class": ["".concat(itemPrefixCls, "-item-label"), (0, _defineProperty2.default)({}, "".concat(itemPrefixCls, "-item-no-colon"), !colon)],
        "style": labelStyle
      }, [label]), content && (0, _vue.createVNode)("span", {
        "class": "".concat(itemPrefixCls, "-item-content"),
        "style": contentStyle
      }, [content])])];
    }
  });
};

var _default2 = Cell;
exports.default = _default2;