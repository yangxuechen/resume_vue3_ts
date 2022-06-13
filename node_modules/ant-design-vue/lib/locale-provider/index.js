"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ANT_MARK = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _vue = require("vue");

var _vueTypes = _interopRequireDefault(require("../_util/vue-types"));

var _moment = _interopRequireDefault(require("moment"));

var _interopDefault = _interopRequireDefault(require("../_util/interopDefault"));

var _locale = require("../modal/locale");

var _warning = _interopRequireDefault(require("../_util/warning"));

var _type = require("../_util/type");

var ANT_MARK = 'internalMark';
exports.ANT_MARK = ANT_MARK;

function setMomentLocale(locale) {
  if (locale && locale.locale) {
    (0, _interopDefault.default)(_moment.default).locale(locale.locale);
  } else {
    (0, _interopDefault.default)(_moment.default).locale('en');
  }
}

var LocaleProvider = (0, _vue.defineComponent)({
  name: 'ALocaleProvider',
  props: {
    locale: {
      type: Object
    },
    ANT_MARK__: _vueTypes.default.string
  },
  setup: function setup(props, _ref) {
    var slots = _ref.slots;
    (0, _warning.default)(props.ANT_MARK__ === ANT_MARK, 'LocaleProvider', '`LocaleProvider` is deprecated. Please use `locale` with `ConfigProvider` instead');
    var state = (0, _vue.reactive)({
      antLocale: (0, _extends2.default)((0, _extends2.default)({}, props.locale), {
        exist: true
      }),
      ANT_MARK__: ANT_MARK
    });
    (0, _vue.provide)('localeData', state);
    (0, _vue.watch)(function () {
      return props.locale;
    }, function (val) {
      state.antLocale = (0, _extends2.default)((0, _extends2.default)({}, val), {
        exist: true
      });
      setMomentLocale(val);
      (0, _locale.changeConfirmLocale)(val && val.Modal);
    }, {
      immediate: true
    });
    (0, _vue.onUnmounted)(function () {
      (0, _locale.changeConfirmLocale)();
    });
    return function () {
      var _a;

      return (_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots);
    };
  }
});
/* istanbul ignore next */

LocaleProvider.install = function (app) {
  app.component(LocaleProvider.name, LocaleProvider);
  return app;
};

var _default = (0, _type.withInstall)(LocaleProvider);

exports.default = _default;