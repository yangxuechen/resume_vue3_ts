"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setDefaultIndicator = setDefaultIndicator;
exports.default = exports.getSpinProps = exports.SpinSize = void 0;

var _vue = require("vue");

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _debounce = _interopRequireDefault(require("lodash/debounce"));

var _type = require("../_util/type");

var _vueTypes = _interopRequireDefault(require("../_util/vue-types"));

var _BaseMixin = _interopRequireDefault(require("../_util/BaseMixin"));

var _propsUtil = require("../_util/props-util");

var _initDefaultProps = _interopRequireDefault(require("../_util/props-util/initDefaultProps"));

var _configProvider = require("../config-provider");

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

var SpinSize = _vueTypes.default.oneOf((0, _type.tuple)('small', 'default', 'large'));

exports.SpinSize = SpinSize;

var getSpinProps = function getSpinProps() {
  return {
    prefixCls: _vueTypes.default.string,
    spinning: _vueTypes.default.looseBool,
    size: SpinSize,
    wrapperClassName: _vueTypes.default.string,
    tip: _vueTypes.default.string,
    delay: _vueTypes.default.number,
    indicator: _vueTypes.default.any
  };
}; // Render indicator


exports.getSpinProps = getSpinProps;
var defaultIndicator = null;

function shouldDelay(spinning, delay) {
  return !!spinning && !!delay && !isNaN(Number(delay));
}

function setDefaultIndicator(Content) {
  var Indicator = Content.indicator;
  defaultIndicator = typeof Indicator === 'function' ? Indicator : function () {
    return (0, _vue.createVNode)(Indicator, null, null);
  };
}

var _default = (0, _vue.defineComponent)({
  name: 'ASpin',
  mixins: [_BaseMixin.default],
  inheritAttrs: false,
  props: (0, _initDefaultProps.default)(getSpinProps(), {
    size: 'default',
    spinning: true,
    wrapperClassName: ''
  }),
  setup: function setup() {
    return {
      originalUpdateSpinning: null,
      configProvider: (0, _vue.inject)('configProvider', _configProvider.defaultConfigProvider)
    };
  },
  data: function data() {
    var spinning = this.spinning,
        delay = this.delay;
    var shouldBeDelayed = shouldDelay(spinning, delay);
    return {
      sSpinning: spinning && !shouldBeDelayed
    };
  },
  created: function created() {
    this.originalUpdateSpinning = this.updateSpinning;
    this.debouncifyUpdateSpinning(this.$props);
  },
  mounted: function mounted() {
    this.updateSpinning();
  },
  updated: function updated() {
    var _this = this;

    (0, _vue.nextTick)(function () {
      _this.debouncifyUpdateSpinning();

      _this.updateSpinning();
    });
  },
  beforeUnmount: function beforeUnmount() {
    this.cancelExistingSpin();
  },
  methods: {
    debouncifyUpdateSpinning: function debouncifyUpdateSpinning(props) {
      var _ref = props || this.$props,
          delay = _ref.delay;

      if (delay) {
        this.cancelExistingSpin();
        this.updateSpinning = (0, _debounce.default)(this.originalUpdateSpinning, delay);
      }
    },
    updateSpinning: function updateSpinning() {
      var spinning = this.spinning,
          sSpinning = this.sSpinning;

      if (sSpinning !== spinning) {
        this.setState({
          sSpinning: spinning
        });
      }
    },
    cancelExistingSpin: function cancelExistingSpin() {
      var updateSpinning = this.updateSpinning;

      if (updateSpinning && updateSpinning.cancel) {
        updateSpinning.cancel();
      }
    },
    renderIndicator: function renderIndicator(prefixCls) {
      var dotClassName = "".concat(prefixCls, "-dot");
      var indicator = (0, _propsUtil.getComponent)(this, 'indicator'); // should not be render default indicator when indicator value is null

      if (indicator === null) {
        return null;
      }

      if (Array.isArray(indicator)) {
        indicator = indicator.length === 1 ? indicator[0] : indicator;
      }

      if ((0, _vue.isVNode)(indicator)) {
        return (0, _vue.cloneVNode)(indicator, {
          class: dotClassName
        });
      }

      if (defaultIndicator && (0, _vue.isVNode)(defaultIndicator())) {
        return (0, _vue.cloneVNode)(defaultIndicator(), {
          class: dotClassName
        });
      }

      return (0, _vue.createVNode)("span", {
        "class": "".concat(dotClassName, " ").concat(prefixCls, "-dot-spin")
      }, [(0, _vue.createVNode)("i", {
        "class": "".concat(prefixCls, "-dot-item")
      }, null), (0, _vue.createVNode)("i", {
        "class": "".concat(prefixCls, "-dot-item")
      }, null), (0, _vue.createVNode)("i", {
        "class": "".concat(prefixCls, "-dot-item")
      }, null), (0, _vue.createVNode)("i", {
        "class": "".concat(prefixCls, "-dot-item")
      }, null)]);
    }
  },
  render: function render() {
    var _spinClassName;

    var _this$$props = this.$props,
        size = _this$$props.size,
        customizePrefixCls = _this$$props.prefixCls,
        tip = _this$$props.tip,
        wrapperClassName = _this$$props.wrapperClassName;

    var _a = this.$attrs,
        cls = _a.class,
        style = _a.style,
        divProps = __rest(_a, ["class", "style"]);

    var _this$configProvider = this.configProvider,
        getPrefixCls = _this$configProvider.getPrefixCls,
        direction = _this$configProvider.direction;
    var prefixCls = getPrefixCls('spin', customizePrefixCls);
    var sSpinning = this.sSpinning;
    var spinClassName = (_spinClassName = {}, (0, _defineProperty2.default)(_spinClassName, prefixCls, true), (0, _defineProperty2.default)(_spinClassName, "".concat(prefixCls, "-sm"), size === 'small'), (0, _defineProperty2.default)(_spinClassName, "".concat(prefixCls, "-lg"), size === 'large'), (0, _defineProperty2.default)(_spinClassName, "".concat(prefixCls, "-spinning"), sSpinning), (0, _defineProperty2.default)(_spinClassName, "".concat(prefixCls, "-show-text"), !!tip), (0, _defineProperty2.default)(_spinClassName, "".concat(prefixCls, "-rtl"), direction === 'rtl'), (0, _defineProperty2.default)(_spinClassName, cls, !!cls), _spinClassName);
    var spinElement = (0, _vue.createVNode)("div", (0, _objectSpread2.default)((0, _objectSpread2.default)({}, divProps), {}, {
      "style": style,
      "class": spinClassName
    }), [this.renderIndicator(prefixCls), tip ? (0, _vue.createVNode)("div", {
      "class": "".concat(prefixCls, "-text")
    }, [tip]) : null]);
    var children = (0, _propsUtil.getSlot)(this);

    if (children && children.length) {
      var _containerClassName;

      var containerClassName = (_containerClassName = {}, (0, _defineProperty2.default)(_containerClassName, "".concat(prefixCls, "-container"), true), (0, _defineProperty2.default)(_containerClassName, "".concat(prefixCls, "-blur"), sSpinning), _containerClassName);
      return (0, _vue.createVNode)("div", {
        "class": ["".concat(prefixCls, "-nested-loading"), wrapperClassName]
      }, [sSpinning && (0, _vue.createVNode)("div", {
        "key": "loading"
      }, [spinElement]), (0, _vue.createVNode)("div", {
        "class": containerClassName,
        "key": "container"
      }, [children])]);
    }

    return spinElement;
  }
});

exports.default = _default;