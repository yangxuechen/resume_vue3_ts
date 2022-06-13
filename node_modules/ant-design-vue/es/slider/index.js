import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _extends from "@babel/runtime/helpers/esm/extends";
import { createVNode as _createVNode } from "vue";

var __rest = this && this.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

import { defineComponent, inject } from 'vue';
import PropTypes from '../_util/vue-types';
import BaseMixin from '../_util/BaseMixin';
import { getOptionProps } from '../_util/props-util';
import VcSlider from '../vc-slider/src/Slider';
import VcRange from '../vc-slider/src/Range';
import VcHandle from '../vc-slider/src/Handle';
import Tooltip from '../tooltip';
import { defaultConfigProvider } from '../config-provider';
import abstractTooltipProps from '../tooltip/abstractTooltipProps';
import { withInstall } from '../_util/type';
var tooltipProps = abstractTooltipProps();
export var SliderProps = function SliderProps() {
  return {
    prefixCls: PropTypes.string,
    tooltipPrefixCls: PropTypes.string,
    range: PropTypes.looseBool,
    reverse: PropTypes.looseBool,
    min: PropTypes.number,
    max: PropTypes.number,
    step: PropTypes.any,
    marks: PropTypes.object,
    dots: PropTypes.looseBool,
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.arrayOf(PropTypes.number)]),
    defaultValue: PropTypes.oneOfType([PropTypes.number, PropTypes.arrayOf(PropTypes.number)]),
    included: PropTypes.looseBool,
    disabled: PropTypes.looseBool,
    vertical: PropTypes.looseBool,
    tipFormatter: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
    tooltipVisible: PropTypes.looseBool,
    tooltipPlacement: tooltipProps.placement,
    getTooltipPopupContainer: PropTypes.func,
    onChange: PropTypes.func,
    onAfterChange: PropTypes.func
  };
};

var defaultTipFormatter = function defaultTipFormatter(value) {
  return value.toString();
};

var Slider = defineComponent({
  name: 'ASlider',
  mixins: [BaseMixin],
  inheritAttrs: false,
  props: _extends({}, SliderProps()),
  emits: ['update:value', 'change'],
  setup: function setup() {
    return {
      vcSlider: null,
      configProvider: inject('configProvider', defaultConfigProvider)
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
          visibles: _extends(_extends({}, visibles), _defineProperty({}, index, visible))
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

      var handleProps = _extends(_extends({
        value: value
      }, restProps), {
        onMouseenter: function onMouseenter() {
          return _this.toggleTooltipVisible(index, true);
        },
        onMouseleave: function onMouseleave() {
          return _this.toggleTooltipVisible(index, false);
        }
      });

      return _createVNode(Tooltip, tooltipProps, {
        default: function _default() {
          return [_createVNode(VcHandle, handleProps, null)];
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

    var _a = _extends(_extends({}, getOptionProps(this)), this.$attrs),
        range = _a.range,
        customizePrefixCls = _a.prefixCls,
        customizeTooltipPrefixCls = _a.tooltipPrefixCls,
        restProps = __rest(_a, ["range", "prefixCls", "tooltipPrefixCls"]);

    var getPrefixCls = this.configProvider.getPrefixCls;
    var prefixCls = getPrefixCls('slider', customizePrefixCls);
    var tooltipPrefixCls = getPrefixCls('tooltip', customizeTooltipPrefixCls);

    if (range) {
      var vcRangeProps = _extends(_extends({}, restProps), {
        prefixCls: prefixCls,
        tooltipPrefixCls: tooltipPrefixCls,
        handle: function handle(info) {
          return _this2.handleWithTooltip(tooltipPrefixCls, prefixCls, info);
        },
        ref: this.saveSlider,
        onChange: this.handleChange
      });

      return _createVNode(VcRange, vcRangeProps, null);
    }

    var vcSliderProps = _extends(_extends({}, restProps), {
      prefixCls: prefixCls,
      tooltipPrefixCls: tooltipPrefixCls,
      handle: function handle(info) {
        return _this2.handleWithTooltip(tooltipPrefixCls, prefixCls, info);
      },
      ref: this.saveSlider,
      onChange: this.handleChange
    });

    return _createVNode(VcSlider, vcSliderProps, null);
  }
});
export default withInstall(Slider);