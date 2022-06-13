"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.statisticProps = void 0;

var _vue = require("vue");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _vueTypes = _interopRequireDefault(require("../_util/vue-types"));

var _initDefaultProps = _interopRequireDefault(require("../_util/props-util/initDefaultProps"));

var _Number = _interopRequireDefault(require("./Number"));

var _Skeleton = _interopRequireDefault(require("../skeleton/Skeleton"));

var _useConfigInject2 = _interopRequireDefault(require("../_util/hooks/useConfigInject"));

var statisticProps = {
  prefixCls: _vueTypes.default.string,
  decimalSeparator: _vueTypes.default.string,
  groupSeparator: _vueTypes.default.string,
  format: _vueTypes.default.string,
  value: {
    type: [String, Number, Object]
  },
  valueStyle: _vueTypes.default.style,
  valueRender: _vueTypes.default.any,
  formatter: _vueTypes.default.any,
  precision: _vueTypes.default.number,
  prefix: _vueTypes.default.VNodeChild,
  suffix: _vueTypes.default.VNodeChild,
  title: _vueTypes.default.VNodeChild,
  onFinish: _vueTypes.default.func,
  loading: _vueTypes.default.looseBool
};
exports.statisticProps = statisticProps;

var _default2 = (0, _vue.defineComponent)({
  name: 'AStatistic',
  props: (0, _initDefaultProps.default)(statisticProps, {
    decimalSeparator: '.',
    groupSeparator: ',',
    loading: false
  }),
  slots: ['title', 'prefix', 'suffix', 'formatter'],
  setup: function setup(props, _ref) {
    var slots = _ref.slots;

    var _useConfigInject = (0, _useConfigInject2.default)('statistic', props),
        prefixCls = _useConfigInject.prefixCls,
        direction = _useConfigInject.direction;

    return function () {
      var _a, _b, _c, _d, _e, _f, _g;

      var _props$value = props.value,
          value = _props$value === void 0 ? 0 : _props$value,
          valueStyle = props.valueStyle,
          valueRender = props.valueRender;
      var pre = prefixCls.value;
      var title = (_a = props.title) !== null && _a !== void 0 ? _a : (_b = slots.title) === null || _b === void 0 ? void 0 : _b.call(slots);
      var prefix = (_c = props.prefix) !== null && _c !== void 0 ? _c : (_d = slots.prefix) === null || _d === void 0 ? void 0 : _d.call(slots);
      var suffix = (_e = props.suffix) !== null && _e !== void 0 ? _e : (_f = slots.suffix) === null || _f === void 0 ? void 0 : _f.call(slots);
      var formatter = (_g = props.formatter) !== null && _g !== void 0 ? _g : slots.formatter; // data-for-update just for update component
      // https://github.com/vueComponent/ant-design-vue/pull/3170

      var valueNode = (0, _vue.createVNode)(_Number.default, (0, _objectSpread2.default)({
        "data-for-update": Date.now()
      }, (0, _extends2.default)((0, _extends2.default)({}, props), {
        prefixCls: pre,
        value: value,
        formatter: formatter
      })), null);

      if (valueRender) {
        valueNode = valueRender(valueNode);
      }

      return (0, _vue.createVNode)("div", {
        "class": [pre, (0, _defineProperty2.default)({}, "".concat(pre, "-rtl"), direction.value === 'rtl')]
      }, [title && (0, _vue.createVNode)("div", {
        "class": "".concat(pre, "-title")
      }, [title]), (0, _vue.createVNode)(_Skeleton.default, {
        "paragraph": false,
        "loading": props.loading
      }, {
        default: function _default() {
          return [(0, _vue.createVNode)("div", {
            "style": valueStyle,
            "class": "".concat(pre, "-content")
          }, [prefix && (0, _vue.createVNode)("span", {
            "class": "".concat(pre, "-content-prefix")
          }, [prefix]), valueNode, suffix && (0, _vue.createVNode)("span", {
            "class": "".concat(pre, "-content-suffix")
          }, [suffix])])];
        }
      })]);
    };
  }
});

exports.default = _default2;