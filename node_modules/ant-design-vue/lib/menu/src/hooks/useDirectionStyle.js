"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useDirectionStyle;

var _vue = require("vue");

var _useMenuContext = require("./useMenuContext");

function useDirectionStyle(level) {
  var _useInjectMenu = (0, _useMenuContext.useInjectMenu)(),
      mode = _useInjectMenu.mode,
      rtl = _useInjectMenu.rtl,
      inlineIndent = _useInjectMenu.inlineIndent;

  return (0, _vue.computed)(function () {
    return mode.value !== 'inline' ? null : rtl.value ? {
      paddingRight: "".concat(level.value * inlineIndent.value, "px")
    } : {
      paddingLeft: "".concat(level.value * inlineIndent.value, "px")
    };
  });
}