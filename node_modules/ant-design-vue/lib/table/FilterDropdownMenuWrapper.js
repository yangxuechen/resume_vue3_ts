"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var FilterDropdownMenuWrapper = function FilterDropdownMenuWrapper(props, _ref) {
  var slots = _ref.slots;

  var _a;

  return (0, _vue.createVNode)("div", {
    "class": props.class,
    "onClick": function onClick(e) {
      return e.stopPropagation();
    }
  }, [(_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots)]);
};

FilterDropdownMenuWrapper.inheritAttrs = false;
var _default = FilterDropdownMenuWrapper;
exports.default = _default;