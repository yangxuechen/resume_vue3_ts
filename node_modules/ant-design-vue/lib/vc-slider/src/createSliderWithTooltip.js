"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createSliderWithTooltip;

var _vue = require("vue");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _extends3 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _vueTypes = _interopRequireDefault(require("../../_util/vue-types"));

var _BaseMixin = _interopRequireDefault(require("../../_util/BaseMixin"));

var _vcTooltip = _interopRequireDefault(require("../../vc-tooltip"));

var _propsUtil = require("../../_util/props-util");

var _Handle = _interopRequireDefault(require("./Handle"));

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

function createSliderWithTooltip(Component) {
  return {
    name: 'SliderTooltip',
    inheritAttrs: false,
    mixins: [_BaseMixin.default, Component],
    props: (0, _extends3.default)((0, _extends3.default)({}, Component.props), {
      tipFormatter: _vueTypes.default.func.def(function (value) {
        return value;
      }),
      handleStyle: _vueTypes.default.oneOfType([_vueTypes.default.object, _vueTypes.default.arrayOf(_vueTypes.default.object)]),
      tipProps: _vueTypes.default.object.def(function () {
        return {};
      })
    }),
    data: function data() {
      return {
        visibles: {}
      };
    },
    methods: {
      handleTooltipVisibleChange: function handleTooltipVisibleChange(index, visible) {
        this.setState(function (prevState) {
          return {
            visibles: (0, _extends3.default)((0, _extends3.default)({}, prevState.visibles), (0, _defineProperty2.default)({}, index, visible))
          };
        });
      },
      handleWithTooltip: function handleWithTooltip(_a) {
        var _this = this;

        var value = _a.value,
            dragging = _a.dragging,
            index = _a.index,
            disabled = _a.disabled,
            restProps = __rest(_a, ["value", "dragging", "index", "disabled"]);

        var _this$$props = this.$props,
            tipFormatter = _this$$props.tipFormatter,
            tipProps = _this$$props.tipProps,
            handleStyle = _this$$props.handleStyle;

        var _tipProps$prefixCls = tipProps.prefixCls,
            prefixCls = _tipProps$prefixCls === void 0 ? 'rc-slider-tooltip' : _tipProps$prefixCls,
            _tipProps$overlay = tipProps.overlay,
            overlay = _tipProps$overlay === void 0 ? tipFormatter(value) : _tipProps$overlay,
            _tipProps$placement = tipProps.placement,
            placement = _tipProps$placement === void 0 ? 'top' : _tipProps$placement,
            _tipProps$visible = tipProps.visible,
            visible = _tipProps$visible === void 0 ? false : _tipProps$visible,
            restTooltipProps = __rest(tipProps, ["prefixCls", "overlay", "placement", "visible"]);

        var handleStyleWithIndex;

        if (Array.isArray(handleStyle)) {
          handleStyleWithIndex = handleStyle[index] || handleStyle[0];
        } else {
          handleStyleWithIndex = handleStyle;
        }

        var tooltipProps = (0, _extends3.default)((0, _extends3.default)({}, restTooltipProps), {
          prefixCls: prefixCls,
          overlay: overlay,
          placement: placement,
          visible: !disabled && (this.visibles[index] || dragging) || visible,
          key: index
        });
        var handleProps = (0, _extends3.default)((0, _extends3.default)({
          value: value
        }, restProps), {
          onMouseenter: function onMouseenter() {
            return _this.handleTooltipVisibleChange(index, true);
          },
          onMouseleave: function onMouseleave() {
            return _this.handleTooltipVisibleChange(index, false);
          },
          style: handleStyleWithIndex
        });
        return (0, _vue.createVNode)(_vcTooltip.default, tooltipProps, {
          default: function _default() {
            return [(0, _vue.createVNode)(_Handle.default, handleProps, null)];
          }
        });
      }
    },
    render: function render() {
      var componentProps = (0, _extends3.default)((0, _extends3.default)({}, (0, _propsUtil.getOptionProps)(this)), {
        handle: this.handleWithTooltip
      });
      return (0, _vue.createVNode)(Component, componentProps, null);
    }
  };
}