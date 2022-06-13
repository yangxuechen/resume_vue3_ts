"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.SliderProps = void 0;

var _vue = require("vue");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _extends3 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _vueTypes = _interopRequireDefault(require("../_util/vue-types"));

var _BaseMixin = _interopRequireDefault(require("../_util/BaseMixin"));

var _propsUtil = require("../_util/props-util");

var _Slider = _interopRequireDefault(require("../vc-slider/src/Slider"));

var _Range = _interopRequireDefault(require("../vc-slider/src/Range"));

var _Handle = _interopRequireDefault(require("../vc-slider/src/Handle"));

var _tooltip = _interopRequireDefault(require("../tooltip"));

var _configProvider = require("../config-provider");

var _abstractTooltipProps = _interopRequireDefault(require("../tooltip/abstractTooltipProps"));

var _type = require("../_util/type");

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

var tooltipProps = (0, _abstractTooltipProps.default)();

var SliderProps = function SliderProps() {
  return {
    prefixCls: _vueTypes.default.string,
    tooltipPrefixCls: _vueTypes.default.string,
    range: _vueTypes.default.looseBool,
    reverse: _vueTypes.default.looseBool,
    min: _vueTypes.default.number,
    max: _vueTypes.default.number,
    step: _vueTypes.default.any,
    marks: _vueTypes.default.object,
    dots: _vueTypes.default.looseBool,
    value: _vueTypes.default.oneOfType([_vueTypes.default.number, _vueTypes.default.arrayOf(_vueTypes.default.number)]),
    defaultValue: _vueTypes.default.oneOfType([_vueTypes.default.number, _vueTypes.default.arrayOf(_vueTypes.default.number)]),
    included: _vueTypes.default.looseBool,
    disabled: _vueTypes.default.looseBool,
    vertical: _vueTypes.default.looseBool,
    tipFormatter: _vueTypes.default.oneOfType([_vueTypes.default.func, _vueTypes.default.object]),
    tooltipVisible: _vueTypes.default.looseBool,
    tooltipPlacement: tooltipProps.placement,
    getTooltipPopupContainer: _vueTypes.default.func,
    onChange: _vueTypes.default.func,
    onAfterChange: _vueTypes.default.func
  };
};

exports.SliderProps = SliderProps;

var defaultTipFormatter = function defaultTipFormatter(value) {
  return value.toString();
};

var Slider = (0, _vue.defineComponent)({
  name: 'ASlider',
  mixins: [_BaseMixin.default],
  inheritAttrs: false,
  props: (0, _extends3.default)({}, SliderProps()),
  emits: ['update:value', 'change'],
  setup: function setup() {
    return {
      vcSlider: null,
      configProvider: (0, _vue.inject)('configProvider', _configProvider.defaultConfigProvider)
    };
  },
  data: function data() {
    return {
      visibles: {}
    };
  },
  methods: {
    toggleTooltipVisible: function toggleTooltipVisible(index, visible) {
      this.setState(function (_ref) {
        var visibles = _ref.visibles;
        return {
          visibles: (0, _extends3.default)((0, _extends3.default)({}, visibles), (0, _defineProperty2.default)({}, index, visible))
        };
      });
    },
    handleWithTooltip: function handleWithTooltip(tooltipPrefixCls, prefixCls, _a) {
      var _this = this;

      var value = _a.value,
          dragging = _a.dragging,
          index = _a.index,
          restProps = __rest(_a, ["value", "dragging", "index"]);

      var _this$$props = this.$props,
          _this$$props$tipForma = _this$$props.tipFormatter,
          tipFormatter = _this$$props$tipForma === void 0 ? defaultTipFormatter : _this$$props$tipForma,
          tooltipVisible = _this$$props.tooltipVisible,
          tooltipPlacement = _this$$props.tooltipPlacement,
          getTooltipPopupContainer = _this$$props.getTooltipPopupContainer;
      var visibles = this.visibles;
      var isTipFormatter = tipFormatter ? visibles[index] || dragging : false;
      var visible = tooltipVisible || tooltipVisible === undefined && isTipFormatter;
      var tooltipProps = {
        prefixCls: tooltipPrefixCls,
        title: tipFormatter ? tipFormatter(value) : '',
        visible: visible,
        placement: tooltipPlacement || 'top',
        transitionName: 'zoom-down',
        overlayClassName: "".concat(prefixCls, "-tooltip"),
        getPopupContainer: getTooltipPopupContainer || function () {
          return document.body;
        },
        key: index
      };
      var handleProps = (0, _extends3.default)((0, _extends3.default)({
        value: value
      }, restProps), {
        onMouseenter: function onMouseenter() {
          return _this.toggleTooltipVisible(index, true);
        },
        onMouseleave: function onMouseleave() {
          return _this.toggleTooltipVisible(index, false);
        }
      });
      return (0, _vue.createVNode)(_tooltip.default, tooltipProps, {
        default: function _default() {
          return [(0, _vue.createVNode)(_Handle.default, handleProps, null)];
        }
      });
    },
    saveSlider: function saveSlider(node) {
      this.vcSlider = node;
    },
    focus: function focus() {
      this.vcSlider.focus();
    },
    blur: function blur() {
      this.vcSlider.blur();
    },
    handleChange: function handleChange(val) {
      this.$emit('update:value', val);
      this.$emit('change', val);
    }
  },
  render: function render() {
    var _this2 = this;

    var _a = (0, _extends3.default)((0, _extends3.default)({}, (0, _propsUtil.getOptionProps)(this)), this.$attrs),
        range = _a.range,
        customizePrefixCls = _a.prefixCls,
        customizeTooltipPrefixCls = _a.tooltipPrefixCls,
        restProps = __rest(_a, ["range", "prefixCls", "tooltipPrefixCls"]);

    var getPrefixCls = this.configProvider.getPrefixCls;
    var prefixCls = getPrefixCls('slider', customizePrefixCls);
    var tooltipPrefixCls = getPrefixCls('tooltip', customizeTooltipPrefixCls);

    if (range) {
      var vcRangeProps = (0, _extends3.default)((0, _extends3.default)({}, restProps), {
        prefixCls: prefixCls,
        tooltipPrefixCls: tooltipPrefixCls,
        handle: function handle(info) {
          return _this2.handleWithTooltip(tooltipPrefixCls, prefixCls, info);
        },
        ref: this.saveSlider,
        onChange: this.handleChange
      });
      return (0, _vue.createVNode)(_Range.default, vcRangeProps, null);
    }

    var vcSliderProps = (0, _extends3.default)((0, _extends3.default)({}, restProps), {
      prefixCls: prefixCls,
      tooltipPrefixCls: tooltipPrefixCls,
      handle: function handle(info) {
        return _this2.handleWithTooltip(tooltipPrefixCls, prefixCls, info);
      },
      ref: this.saveSlider,
      onChange: this.handleChange
    });
    return (0, _vue.createVNode)(_Slider.default, vcSliderProps, null);
  }
});

var _default2 = (0, _type.withInstall)(Slider);

exports.default = _default2;