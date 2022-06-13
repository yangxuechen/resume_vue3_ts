import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import { createVNode as _createVNode } from "vue";
import { defineComponent, inject } from 'vue';
import classNames from '../_util/classNames';
import PropTypes from '../_util/vue-types';
import { getOptionProps, getComponent } from '../_util/props-util';
import initDefaultProps from '../_util/props-util/initDefaultProps';
import { defaultConfigProvider } from '../config-provider';
import { tuple } from '../_util/type';
export var timelineItemProps = {
  prefixCls: PropTypes.string,
  color: PropTypes.string,
  dot: PropTypes.any,
  pending: PropTypes.looseBool,
  position: PropTypes.oneOf(tuple('left', 'right', '')).def('')
};
export default defineComponent({
  name: 'ATimelineItem',
  props: initDefaultProps(timelineItemProps, {
    color: 'blue',
    pending: false
  }),
  setup: function setup() {
    return {
      configProvider: inject('configProvider', defaultConfigProvider)
    };
  },
  render: function render() {
    var _classNames, _classNames2;

    var _a, _b;

    var _getOptionProps = getOptionProps(this),
        customizePrefixCls = _getOptionProps.prefixCls,
        _getOptionProps$color = _getOptionProps.color,
        color = _getOptionProps$color === void 0 ? '' : _getOptionProps$color,
        pending = _getOptionProps.pending;

    var getPrefixCls = this.configProvider.getPrefixCls;
    var prefixCls = getPrefixCls('timeline', customizePrefixCls);
    var dot = getComponent(this, 'dot');
    var itemClassName = classNames((_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-item"), true), _defineProperty(_classNames, "".concat(prefixCls, "-item-pending"), pending), _classNames));
    var dotClassName = classNames((_classNames2 = {}, _defineProperty(_classNames2, "".concat(prefixCls, "-item-head"), true), _defineProperty(_classNames2, "".concat(prefixCls, "-item-head-custom"), dot), _defineProperty(_classNames2, "".concat(prefixCls, "-item-head-").concat(color), true), _classNames2));
    return _createVNode("li", {
      "class": itemClassName
    }, [_createVNode("div", {
      "class": "".concat(prefixCls, "-item-tail")
    }, null), _createVNode("div", {
      "class": dotClassName,
      "style": {
        borderColor: /blue|red|green|gray/.test(color) ? undefined : color
      }
    }, [dot]), _createVNode("div", {
      "class": "".concat(prefixCls, "-item-content")
    }, [(_b = (_a = this.$slots).default) === null || _b === void 0 ? void 0 : _b.call(_a)])]);
  }
});