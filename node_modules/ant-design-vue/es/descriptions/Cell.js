import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import { createVNode as _createVNode } from "vue";

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

    return _createVNode(Component, {
      "class": [(_ref = {}, _defineProperty(_ref, "".concat(itemPrefixCls, "-item-label"), notEmpty(label)), _defineProperty(_ref, "".concat(itemPrefixCls, "-item-content"), notEmpty(content)), _ref)],
      "colSpan": span
    }, {
      default: function _default() {
        return [notEmpty(label) && _createVNode("span", {
          "style": labelStyle
        }, [label]), notEmpty(content) && _createVNode("span", {
          "style": contentStyle
        }, [content])];
      }
    });
  }

  return _createVNode(Component, {
    "class": ["".concat(itemPrefixCls, "-item")],
    "colSpan": span
  }, {
    default: function _default() {
      return [_createVNode("div", {
        "class": "".concat(itemPrefixCls, "-item-container")
      }, [label && _createVNode("span", {
        "class": ["".concat(itemPrefixCls, "-item-label"), _defineProperty({}, "".concat(itemPrefixCls, "-item-no-colon"), !colon)],
        "style": labelStyle
      }, [label]), content && _createVNode("span", {
        "class": "".concat(itemPrefixCls, "-item-content"),
        "style": contentStyle
      }, [content])])];
    }
  });
};

export default Cell;