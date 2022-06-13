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

import PropTypes from '../../_util/vue-types';
import BaseMixin from '../../_util/BaseMixin';
import Tooltip from '../../vc-tooltip';
import { getOptionProps } from '../../_util/props-util';
import Handle from './Handle';
export default function createSliderWithTooltip(Component) {
  return {
    name: 'SliderTooltip',
    inheritAttrs: false,
    mixins: [BaseMixin, Component],
    props: _extends(_extends({}, Component.props), {
      tipFormatter: PropTypes.func.def(function (value) {
        return value;
      }),
      handleStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.arrayOf(PropTypes.object)]),
      tipProps: PropTypes.object.def(function () {
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
            visibles: _extends(_extends({}, prevState.visibles), _defineProperty({}, index, visible))
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

        var tooltipProps = _extends(_extends({}, restTooltipProps), {
          prefixCls: prefixCls,
          overlay: overlay,
          placement: placement,
          visible: !disabled && (this.visibles[index] || dragging) || visible,
          key: index
        });

        var handleProps = _extends(_extends({
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

        return _createVNode(Tooltip, tooltipProps, {
          default: function _default() {
            return [_createVNode(Handle, handleProps, null)];
          }
        });
      }
    },
    render: function render() {
      var componentProps = _extends(_extends({}, getOptionProps(this)), {
        handle: this.handleWithTooltip
      });

      return _createVNode(Component, componentProps, null);
    }
  };
}