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

import classNames from '../_util/classNames';
import PropTypes from '../_util/vue-types';
import { cloneElement } from '../_util/vnode';
import { defineComponent } from 'vue';
import useConfigInject from '../_util/hooks/useConfigInject';
import SingleNumber from './SingleNumber';
import { filterEmpty } from '../_util/props-util';
export var scrollNumberProps = {
  prefixCls: PropTypes.string,
  count: PropTypes.any,
  component: PropTypes.string,
  title: PropTypes.oneOfType([PropTypes.number, PropTypes.string, null]),
  show: Boolean
};
export default defineComponent({
  name: 'ScrollNumber',
  inheritAttrs: false,
  props: scrollNumberProps,
  setup: function setup(props, _ref) {
    var attrs = _ref.attrs,
        slots = _ref.slots;

    var _useConfigInject = useConfigInject('scroll-number', props),
        prefixCls = _useConfigInject.prefixCls;

    return function () {
      var _a;

      var _b = _extends(_extends({}, props), attrs),
          customizePrefixCls = _b.prefixCls,
          count = _b.count,
          title = _b.title,
          show = _b.show,
          _b$component = _b.component,
          Tag = _b$component === void 0 ? 'sup' : _b$component,
          className = _b.class,
          style = _b.style,
          restProps = __rest(_b, ["prefixCls", "count", "title", "show", "component", "class", "style"]); // ============================ Render ============================


      var newProps = _extends(_extends({}, restProps), {
        style: style,
        'data-show': props.show,
        class: classNames(prefixCls.value, className),
        title: title
      }); // Only integer need motion


      var numberNodes = count;

      if (count && Number(count) % 1 === 0) {
        var numberList = String(count).split('');
        numberNodes = numberList.map(function (num, i) {
          return _createVNode(SingleNumber, {
            "prefixCls": prefixCls.value,
            "count": Number(count),
            "value": num,
            "key": numberList.length - i
          }, null);
        });
      } // allow specify the border
      // mock border-color by box-shadow for compatible with old usage:
      // <Badge count={4} style={{ backgroundColor: '#fff', color: '#999', borderColor: '#d9d9d9' }} />


      if (style && style.borderColor) {
        newProps.style = _extends(_extends({}, style), {
          boxShadow: "0 0 0 1px ".concat(style.borderColor, " inset")
        });
      }

      var children = filterEmpty((_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots));

      if (children && children.length) {
        return cloneElement(children, {
          class: classNames("".concat(prefixCls.value, "-custom-component"))
        }, false);
      }

      return _createVNode(Tag, newProps, {
        default: function _default() {
          return [numberNodes];
        }
      });
    };
  }
});