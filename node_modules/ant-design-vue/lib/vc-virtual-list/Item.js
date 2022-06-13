"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var Item = function Item(_ref, _ref2) {
  var setRef = _ref.setRef;
  var slots = _ref2.slots;

  var _a;

  var children = (_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots);
  return children && children.length ? (0, _vue.cloneVNode)(children[0], {
    ref: setRef
  }) : children;
};

Item.props = {
  setRef: {
    type: Function,
    default: function _default() {}
  }
};
var _default2 = Item;
exports.default = _default2;