"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Step = void 0;

var _vue = require("vue");

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _CloseOutlined = _interopRequireDefault(require("@ant-design/icons-vue/lib/icons/CloseOutlined"));

var _CheckOutlined = _interopRequireDefault(require("@ant-design/icons-vue/lib/icons/CheckOutlined"));

var _vueTypes = _interopRequireWildcard(require("../_util/vue-types"));

var _propsUtil = require("../_util/props-util");

var _initDefaultProps = _interopRequireDefault(require("../_util/props-util/initDefaultProps"));

var _vcSteps = _interopRequireDefault(require("../vc-steps"));

var _configProvider = require("../config-provider");

var _type = require("../_util/type");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var stepsProps = {
  prefixCls: _vueTypes.default.string,
  iconPrefix: _vueTypes.default.string,
  current: _vueTypes.default.number,
  initial: _vueTypes.default.number,
  labelPlacement: _vueTypes.default.oneOf((0, _type.tuple)('horizontal', 'vertical')).def('horizontal'),
  status: _vueTypes.default.oneOf((0, _type.tuple)('wait', 'process', 'finish', 'error')),
  size: _vueTypes.default.oneOf((0, _type.tuple)('default', 'small')),
  direction: _vueTypes.default.oneOf((0, _type.tuple)('horizontal', 'vertical')),
  progressDot: (0, _vueTypes.withUndefined)(_vueTypes.default.oneOfType([_vueTypes.default.looseBool, _vueTypes.default.func])),
  type: _vueTypes.default.oneOf((0, _type.tuple)('default', 'navigation')),
  onChange: _vueTypes.default.func,
  'onUpdate:current': _vueTypes.default.func
};
var Steps = (0, _vue.defineComponent)({
  name: 'ASteps',
  inheritAttrs: false,
  props: (0, _initDefaultProps.default)(stepsProps, {
    current: 0
  }),
  emits: ['update:current', 'change'],
  setup: function setup() {
    return {
      configProvider: (0, _vue.inject)('configProvider', _configProvider.defaultConfigProvider)
    };
  },
  Step: (0, _extends2.default)((0, _extends2.default)({}, _vcSteps.default.Step), {
    name: 'AStep'
  }),
  methods: {
    handleChange: function handleChange(current) {
      this.$emit('update:current', current);
      this.$emit('change', current);
    }
  },
  render: function render() {
    var _this = this;

    var props = (0, _extends2.default)((0, _extends2.default)({}, (0, _propsUtil.getOptionProps)(this)), this.$attrs);
    var customizePrefixCls = props.prefixCls,
        customizeIconPrefixCls = props.iconPrefix;
    var getPrefixCls = this.configProvider.getPrefixCls;
    var prefixCls = getPrefixCls('steps', customizePrefixCls);
    var iconPrefix = getPrefixCls('', customizeIconPrefixCls);
    var progressDot = (0, _propsUtil.getComponent)(this, 'progressDot', this, false);
    var icons = {
      finish: (0, _vue.createVNode)(_CheckOutlined.default, {
        "class": "".concat(prefixCls, "-finish-icon")
      }, null),
      error: (0, _vue.createVNode)(_CloseOutlined.default, {
        "class": "".concat(prefixCls, "-error-icon")
      }, null)
    };
    var stepsProps = (0, _extends2.default)((0, _extends2.default)({
      icons: icons,
      iconPrefix: iconPrefix,
      prefixCls: prefixCls,
      progressDot: progressDot
    }, props), {
      canClick: !!(this.onChange || this['onUpdate:current']),
      onChange: this.handleChange
    });
    return (0, _vue.createVNode)(_vcSteps.default, stepsProps, {
      default: function _default() {
        return [(0, _propsUtil.getSlot)(_this)];
      }
    });
  }
});
/* istanbul ignore next */

Steps.install = function (app) {
  app.component(Steps.name, Steps);
  app.component(Steps.Step.name, Steps.Step);
  return app;
};

var Step = Steps.Step;
exports.Step = Step;
var _default2 = Steps;
exports.default = _default2;