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
import classNames from '../_util/classNames';
import PropTypes from '../_util/vue-types';
import { OverflowContextProvider, useInjectOverflowContext } from './context';
import Item from './Item';
export default defineComponent({
  name: 'RawItem',
  inheritAttrs: false,
  props: {
    component: PropTypes.any,
    title: PropTypes.any
  },
  setup: function setup(props, _ref) {
    var slots = _ref.slots,
        attrs = _ref.attrs;
    var context = useInjectOverflowContext();
    return function () {
      var _a, _b; // Render directly when context not provided


      if (!context.value) {
        var _props$component = props.component,
            Component = _props$component === void 0 ? 'div' : _props$component,
            _restProps = __rest(props, ["component"]);

        return _createVNode(Component, _objectSpread(_objectSpread({}, _restProps), attrs), {
          default: function _default() {
            return [(_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots)];
          }
        });
      }

      var _c = context.value,
          contextClassName = _c.className,
          restContext = __rest(_c, ["className"]);

      var className = attrs.class,
          restProps = __rest(attrs, ["class"]); // Do not pass context to sub item to avoid multiple measure


      return _createVNode(OverflowContextProvider, {
        "value": null
      }, {
        default: function _default() {
          return [_createVNode(Item, _objectSpread(_objectSpread(_objectSpread({
            "class": classNames(contextClassName, className)
          }, restContext), restProps), props), {
            default: function _default() {
              return [(_b = slots.default) === null || _b === void 0 ? void 0 : _b.call(slots)];
            }
          })];
        }
      });
    };
  }
});