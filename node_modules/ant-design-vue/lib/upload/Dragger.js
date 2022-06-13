"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _propsUtil = require("../_util/props-util");

var _Upload = _interopRequireDefault(require("./Upload"));

var _interface = require("./interface");

var __rest = void 0 && (void 0).__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

var _default2 = (0, _vue.defineComponent)({
  name: 'AUploadDragger',
  inheritAttrs: false,
  props: _interface.UploadProps,
  render: function render() {
    var _this = this;

    var props = (0, _propsUtil.getOptionProps)(this);

    var height = props.height,
        restProps = __rest(props, ["height"]);

    var _a = this.$attrs,
        style = _a.style,
        restAttrs = __rest(_a, ["style"]);

    var draggerProps = (0, _extends2.default)((0, _extends2.default)((0, _extends2.default)({}, restProps), restAttrs), {
      type: 'drag',
      style: (0, _extends2.default)((0, _extends2.default)({}, style), {
        height: height
      })
    });
    return (0, _vue.createVNode)(_Upload.default, draggerProps, {
      default: function _default() {
        return [(0, _propsUtil.getSlot)(_this)];
      }
    });
  }
});

exports.default = _default2;