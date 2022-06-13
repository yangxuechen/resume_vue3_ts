"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _type = require("../_util/type");

var _utils = require("./utils");

var _vueTypes = _interopRequireDefault(require("../_util/vue-types"));

var _useConfigInject2 = _interopRequireDefault(require("../_util/hooks/useConfigInject"));

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

var ribbonProps = {
  prefix: _vueTypes.default.string,
  color: {
    type: String
  },
  text: _vueTypes.default.any,
  placement: _vueTypes.default.oneOf((0, _type.tuple)('start', 'end')).def('end')
};

var _default = (0, _vue.defineComponent)({
  name: 'ABadgeRibbon',
  inheritAttrs: false,
  props: ribbonProps,
  slots: ['text'],
  setup: function setup(props, _ref) {
    var attrs = _ref.attrs,
        slots = _ref.slots;

    var _useConfigInject = (0, _useConfigInject2.default)('ribbon', props),
        prefixCls = _useConfigInject.prefixCls,
        direction = _useConfigInject.direction;

    var colorInPreset = (0, _vue.computed)(function () {
      return (0, _utils.isPresetColor)(props.color);
    });
    var ribbonCls = (0, _vue.computed)(function () {
      var _ref2;

      return [prefixCls.value, "".concat(prefixCls.value, "-placement-").concat(props.placement), (_ref2 = {}, (0, _defineProperty2.default)(_ref2, "".concat(prefixCls.value, "-rtl"), direction.value === 'rtl'), (0, _defineProperty2.default)(_ref2, "".concat(prefixCls.value, "-color-").concat(props.color), colorInPreset.value), _ref2)];
    });
    return function () {
      var _a, _b;

      var className = attrs.class,
          style = attrs.style,
          restAttrs = __rest(attrs, ["class", "style"]);

      var colorStyle = {};
      var cornerColorStyle = {};

      if (props.color && !colorInPreset.value) {
        colorStyle.background = props.color;
        cornerColorStyle.color = props.color;
      }

      return (0, _vue.createVNode)("div", (0, _objectSpread2.default)({
        "class": "".concat(prefixCls.value, "-wrapper")
      }, restAttrs), [(_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots), (0, _vue.createVNode)("div", {
        "class": [ribbonCls.value, className],
        "style": (0, _extends2.default)((0, _extends2.default)({}, colorStyle), style)
      }, [(0, _vue.createVNode)("span", {
        "class": "".concat(prefixCls.value, "-text")
      }, [props.text || ((_b = slots.text) === null || _b === void 0 ? void 0 : _b.call(slots))]), (0, _vue.createVNode)("div", {
        "class": "".concat(prefixCls.value, "-corner"),
        "style": cornerColorStyle
      }, null)])]);
    };
  }
});

exports.default = _default;