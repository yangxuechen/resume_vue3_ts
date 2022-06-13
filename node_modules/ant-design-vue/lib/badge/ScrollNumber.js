"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.scrollNumberProps = void 0;

var _vue = require("vue");

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classNames = _interopRequireDefault(require("../_util/classNames"));

var _vueTypes = _interopRequireDefault(require("../_util/vue-types"));

var _vnode = require("../_util/vnode");

var _useConfigInject2 = _interopRequireDefault(require("../_util/hooks/useConfigInject"));

var _SingleNumber = _interopRequireDefault(require("./SingleNumber"));

var _propsUtil = require("../_util/props-util");

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

var scrollNumberProps = {
  prefixCls: _vueTypes.default.string,
  count: _vueTypes.default.any,
  component: _vueTypes.default.string,
  title: _vueTypes.default.oneOfType([_vueTypes.default.number, _vueTypes.default.string, null]),
  show: Boolean
};
exports.scrollNumberProps = scrollNumberProps;

var _default2 = (0, _vue.defineComponent)({
  name: 'ScrollNumber',
  inheritAttrs: false,
  props: scrollNumberProps,
  setup: function setup(props, _ref) {
    var attrs = _ref.attrs,
        slots = _ref.slots;

    var _useConfigInject = (0, _useConfigInject2.default)('scroll-number', props),
        prefixCls = _useConfigInject.prefixCls;

    return function () {
      var _a;

      var _b = (0, _extends2.default)((0, _extends2.default)({}, props), attrs),
          customizePrefixCls = _b.prefixCls,
          count = _b.count,
          title = _b.title,
          show = _b.show,
          _b$component = _b.component,
          Tag = _b$component === void 0 ? 'sup' : _b$component,
          className = _b.class,
          style = _b.style,
          restProps = __rest(_b, ["prefixCls", "count", "title", "show", "component", "class", "style"]); // ============================ Render ============================


      var newProps = (0, _extends2.default)((0, _extends2.default)({}, restProps), {
        style: style,
        'data-show': props.show,
        class: (0, _classNames.default)(prefixCls.value, className),
        title: title
      }); // Only integer need motion

      var numberNodes = count;

      if (count && Number(count) % 1 === 0) {
        var numberList = String(count).split('');
        numberNodes = numberList.map(function (num, i) {
          return (0, _vue.createVNode)(_SingleNumber.default, {
            "prefixCls": prefixCls.value,
            "count": Number(count),
            "value": num,
            "key": numberList.length - i
          }, null);
        });
      } // allow specify the border
      // mock border-color by box-shadow for compatible with old usage:
      // <Badge count={4} style={{ backgroundColor: '#fff', color: '#999', borderColor: '#d9d9d9' }} />


      if (style && style.borderColor) {
        newProps.style = (0, _extends2.default)((0, _extends2.default)({}, style), {
          boxShadow: "0 0 0 1px ".concat(style.borderColor, " inset")
        });
      }

      var children = (0, _propsUtil.filterEmpty)((_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots));

      if (children && children.length) {
        return (0, _vnode.cloneElement)(children, {
          class: (0, _classNames.default)("".concat(prefixCls.value, "-custom-component"))
        }, false);
      }

      return (0, _vue.createVNode)(Tag, newProps, {
        default: function _default() {
          return [numberNodes];
        }
      });
    };
  }
});

exports.default = _default2;