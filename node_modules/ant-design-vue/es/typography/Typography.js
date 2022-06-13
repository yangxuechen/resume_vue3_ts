import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
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

import PropTypes from '../_util/vue-types';
import { defineComponent } from 'vue';
import useConfigInject from '../_util/hooks/useConfigInject';
import classNames from '../_util/classNames';
var Typography = defineComponent({
  name: 'ATypography',
  inheritAttrs: false,
  setup: function setup(props, _ref) {
    var slots = _ref.slots,
        attrs = _ref.attrs;

    var _useConfigInject = useConfigInject('typography', props),
        prefixCls = _useConfigInject.prefixCls;

    return function () {
      var _a;

      var _b = _extends(_extends({}, props), attrs),
          _prefixCls = _b.prefixCls,
          _className = _b.class,
          _b$component = _b.component,
          Component = _b$component === void 0 ? 'article' : _b$component,
          restProps = __rest(_b, ["prefixCls", "class", "component"]);

      return _createVNode(Component, _objectSpread({
        "class": classNames(prefixCls.value, attrs.class)
      }, restProps), {
        default: function _default() {
          return [(_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots)];
        }
      });
    };
  }
});
Typography.props = {
  prefixCls: PropTypes.string,
  component: PropTypes.string
};
export default Typography;