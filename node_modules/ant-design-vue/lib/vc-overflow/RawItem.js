"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

var _classNames = _interopRequireDefault(require("../_util/classNames"));

var _vueTypes = _interopRequireDefault(require("../_util/vue-types"));

var _context = require("./context");

var _Item = _interopRequireDefault(require("./Item"));

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
  name: 'RawItem',
  inheritAttrs: false,
  props: {
    component: _vueTypes.default.any,
    title: _vueTypes.default.any
  },
  setup: function setup(props, _ref) {
    var slots = _ref.slots,
        attrs = _ref.attrs;
    var context = (0, _context.useInjectOverflowContext)();
    return function () {
      var _a, _b; // Render directly when context not provided


      if (!context.value) {
        var _props$component = props.component,
            Component = _props$component === void 0 ? 'div' : _props$component,
            _restProps = __rest(props, ["component"]);

        return (0, _vue.createVNode)(Component, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, _restProps), attrs), {
          default: function _default() {
            return [(_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots)];
          }
        });
      }

      var _c = context.value,
          contextClassName = _c.className,
          restContext = __rest(_c, ["className"]);

      var className = attrs.class,
          restProps = __rest(attrs, ["class"]); // Do not pass context to sub item to avoid multiple measure


      return (0, _vue.createVNode)(_context.OverflowContextProvider, {
        "value": null
      }, {
        default: function _default() {
          return [(0, _vue.createVNode)(_Item.default, (0, _objectSpread2.default)((0, _objectSpread2.default)((0, _objectSpread2.default)({
            "class": (0, _classNames.default)(contextClassName, className)
          }, restContext), restProps), props), {
            default: function _default() {
              return [(_b = slots.default) === null || _b === void 0 ? void 0 : _b.call(slots)];
            }
          })];
        }
      });
    };
  }
});

exports.default = _default2;