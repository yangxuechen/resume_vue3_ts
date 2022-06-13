"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.resultProps = exports.ExceptionMap = exports.IconMap = void 0;

var _vue = require("vue");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _vueTypes = _interopRequireDefault(require("../_util/vue-types"));

var _type = require("../_util/type");

var _CheckCircleFilled = _interopRequireDefault(require("@ant-design/icons-vue/lib/icons/CheckCircleFilled"));

var _CloseCircleFilled = _interopRequireDefault(require("@ant-design/icons-vue/lib/icons/CloseCircleFilled"));

var _ExclamationCircleFilled = _interopRequireDefault(require("@ant-design/icons-vue/lib/icons/ExclamationCircleFilled"));

var _WarningFilled = _interopRequireDefault(require("@ant-design/icons-vue/lib/icons/WarningFilled"));

var _noFound = _interopRequireDefault(require("./noFound"));

var _serverError = _interopRequireDefault(require("./serverError"));

var _unauthorized = _interopRequireDefault(require("./unauthorized"));

var _useConfigInject2 = _interopRequireDefault(require("../_util/hooks/useConfigInject"));

var _classNames2 = _interopRequireDefault(require("../_util/classNames"));

var IconMap = {
  success: _CheckCircleFilled.default,
  error: _CloseCircleFilled.default,
  info: _ExclamationCircleFilled.default,
  warning: _WarningFilled.default
};
exports.IconMap = IconMap;
var ExceptionMap = {
  '404': _noFound.default,
  '500': _serverError.default,
  '403': _unauthorized.default
}; // ExceptionImageMap keys

exports.ExceptionMap = ExceptionMap;
var ExceptionStatus = Object.keys(ExceptionMap);
var resultProps = {
  prefixCls: _vueTypes.default.string,
  icon: _vueTypes.default.any,
  status: _vueTypes.default.oneOf((0, _type.tuple)('success', 'error', 'info', 'warning', '404', '403', '500')).def('info'),
  title: _vueTypes.default.any,
  subTitle: _vueTypes.default.any,
  extra: _vueTypes.default.any
};
exports.resultProps = resultProps;

var renderIcon = function renderIcon(prefixCls, _ref) {
  var status = _ref.status,
      icon = _ref.icon;

  if (ExceptionStatus.includes("".concat(status))) {
    var SVGComponent = ExceptionMap[status];
    return (0, _vue.createVNode)("div", {
      "class": "".concat(prefixCls, "-icon ").concat(prefixCls, "-image")
    }, [(0, _vue.createVNode)(SVGComponent, null, null)]);
  }

  var IconComponent = IconMap[status];
  var iconNode = icon || (0, _vue.createVNode)(IconComponent, null, null);
  return (0, _vue.createVNode)("div", {
    "class": "".concat(prefixCls, "-icon")
  }, [iconNode]);
};

var renderExtra = function renderExtra(prefixCls, extra) {
  return extra && (0, _vue.createVNode)("div", {
    "class": "".concat(prefixCls, "-extra")
  }, [extra]);
};

var Result = (0, _vue.defineComponent)({
  name: 'AResult',
  props: resultProps,
  slots: ['title', 'subTitle', 'icon', 'extra'],
  setup: function setup(props, _ref2) {
    var slots = _ref2.slots;

    var _useConfigInject = (0, _useConfigInject2.default)('result', props),
        prefixCls = _useConfigInject.prefixCls,
        direction = _useConfigInject.direction;

    var className = (0, _vue.computed)(function () {
      return (0, _classNames2.default)(prefixCls.value, "".concat(prefixCls.value, "-").concat(props.status), (0, _defineProperty2.default)({}, "".concat(prefixCls.value, "-rtl"), direction.value === 'rtl'));
    });
    return function () {
      var _a, _b, _c, _d, _e, _f, _g, _h;

      var title = (_a = props.title) !== null && _a !== void 0 ? _a : (_b = slots.title) === null || _b === void 0 ? void 0 : _b.call(slots);
      var subTitle = (_c = props.subTitle) !== null && _c !== void 0 ? _c : (_d = slots.subTitle) === null || _d === void 0 ? void 0 : _d.call(slots);
      var icon = (_e = props.icon) !== null && _e !== void 0 ? _e : (_f = slots.icon) === null || _f === void 0 ? void 0 : _f.call(slots);
      var extra = (_g = props.extra) !== null && _g !== void 0 ? _g : (_h = slots.extra) === null || _h === void 0 ? void 0 : _h.call(slots);
      var pre = prefixCls.value;
      return (0, _vue.createVNode)("div", {
        "class": className.value
      }, [renderIcon(pre, {
        status: props.status,
        icon: icon
      }), (0, _vue.createVNode)("div", {
        "class": "".concat(pre, "-title")
      }, [title]), subTitle && (0, _vue.createVNode)("div", {
        "class": "".concat(pre, "-subtitle")
      }, [subTitle]), renderExtra(pre, extra), slots.default && (0, _vue.createVNode)("div", {
        "class": "".concat(pre, "-content")
      }, [slots.default()])]);
    };
  }
});
/* add resource */

Result.PRESENTED_IMAGE_403 = ExceptionMap[403];
Result.PRESENTED_IMAGE_404 = ExceptionMap[404];
Result.PRESENTED_IMAGE_500 = ExceptionMap[500];
/* istanbul ignore next */

Result.install = function (app) {
  app.component(Result.name, Result);
  return app;
};

var _default = Result;
exports.default = _default;