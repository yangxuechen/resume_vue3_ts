import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _extends from "@babel/runtime/helpers/esm/extends";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
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

import { tuple } from '../_util/type';
import { isPresetColor } from './utils';
import { defineComponent, computed } from 'vue';
import PropTypes from '../_util/vue-types';
import useConfigInject from '../_util/hooks/useConfigInject';
var ribbonProps = {
  prefix: PropTypes.string,
  color: {
    type: String
  },
  text: PropTypes.any,
  placement: PropTypes.oneOf(tuple('start', 'end')).def('end')
};
export default defineComponent({
  name: 'ABadgeRibbon',
  inheritAttrs: false,
  props: ribbonProps,
  slots: ['text'],
  setup: function setup(props, _ref) {
    var attrs = _ref.attrs,
        slots = _ref.slots;

    var _useConfigInject = useConfigInject('ribbon', props),
        prefixCls = _useConfigInject.prefixCls,
        direction = _useConfigInject.direction;

    var colorInPreset = computed(function () {
      return isPresetColor(props.color);
    });
    var ribbonCls = computed(function () {
      var _ref2;

      return [prefixCls.value, "".concat(prefixCls.value, "-placement-").concat(props.placement), (_ref2 = {}, _defineProperty(_ref2, "".concat(prefixCls.value, "-rtl"), direction.value === 'rtl'), _defineProperty(_ref2, "".concat(prefixCls.value, "-color-").concat(props.color), colorInPreset.value), _ref2)];
    });
    return function () {
      var _a, _b;

      var className = attrs.class,
          style = attrs.style,
          restAttrs = __rest(attrs, ["class", "style"]);

      var colorStyle = {};
      var cornerColorStyle = {};

      if (props.color && !colorInPreset.value) {
        colorStyle.background = props.color;
        cornerColorStyle.color = props.color;
      }

      return _createVNode("div", _objectSpread({
        "class": "".concat(prefixCls.value, "-wrapper")
      }, restAttrs), [(_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots), _createVNode("div", {
        "class": [ribbonCls.value, className],
        "style": _extends(_extends({}, colorStyle), style)
      }, [_createVNode("span", {
        "class": "".concat(prefixCls.value, "-text")
      }, [props.text || ((_b = slots.text) === null || _b === void 0 ? void 0 : _b.call(slots))]), _createVNode("div", {
        "class": "".concat(prefixCls.value, "-corner"),
        "style": cornerColorStyle
      }, null)])]);
    };
  }
});