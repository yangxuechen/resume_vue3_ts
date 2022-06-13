"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _useMenuContext = require("./hooks/useMenuContext");

var _default = (0, _vue.defineComponent)({
  name: 'AMenuDivider',
  setup: function setup() {
    var _useInjectMenu = (0, _useMenuContext.useInjectMenu)(),
        prefixCls = _useInjectMenu.prefixCls;

    return function () {
      return (0, _vue.createVNode)("li", {
        "class": "".concat(prefixCls.value, "-item-divider")
      }, null);
    };
  }
});

exports.default = _default;