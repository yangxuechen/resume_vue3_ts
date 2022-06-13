import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
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

import { defineComponent } from 'vue';
import PropTypes from '../_util/vue-types';
import { flattenChildren } from '../_util/props-util';
import useConfigInject from '../_util/hooks/useConfigInject';
var breadcrumbSeparatorProps = {
  prefixCls: PropTypes.string
};
export default defineComponent({
  name: 'ABreadcrumbSeparator',
  __ANT_BREADCRUMB_SEPARATOR: true,
  inheritAttrs: false,
  props: breadcrumbSeparatorProps,
  setup: function setup(props, _ref) {
    var slots = _ref.slots,
        attrs = _ref.attrs;

    var _useConfigInject = useConfigInject('breadcrumb', props),
        prefixCls = _useConfigInject.prefixCls;

    return function () {
      var _a;

      var separator = attrs.separator,
          className = attrs.class,
          restAttrs = __rest(attrs, ["separator", "class"]);

      var children = flattenChildren((_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots));
      return _createVNode("span", _objectSpread({
        "class": ["".concat(prefixCls.value, "-separator"), className]
      }, restAttrs), [children.length > 0 ? children : '/']);
    };
  }
});