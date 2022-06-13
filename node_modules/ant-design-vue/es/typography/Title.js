import _extends from "@babel/runtime/helpers/esm/extends";
import { createVNode as _createVNode, resolveDirective as _resolveDirective } from "vue";

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

import Omit from 'omit.js';
import { tupleNum } from '../_util/type';
import PropTypes from '../_util/vue-types';
import warning from '../_util/warning';
import Base, { baseProps } from './Base';
var TITLE_ELE_LIST = tupleNum(1, 2, 3, 4, 5);

var Title = function Title(props, _ref) {
  var slots = _ref.slots,
      attrs = _ref.attrs;

  var _props$level = props.level,
      level = _props$level === void 0 ? 1 : _props$level,
      restProps = __rest(props, ["level"]);

  var component;

  if (TITLE_ELE_LIST.indexOf(level) !== -1) {
    component = "h".concat(level);
  } else {
    warning(false, 'Typography', 'Title only accept `1 | 2 | 3 | 4 | 5` as `level` value.');
    component = 'h1';
  }

  var titleProps = _extends(_extends(_extends({}, restProps), {
    component: component
  }), attrs);

  return _createVNode(Base, titleProps, slots);
};

Title.displayName = 'ATypographyTitle';
Title.inheritAttrs = false;
Title.props = Omit(_extends(_extends({}, baseProps()), {
  level: PropTypes.number
}), ['component', 'strong']);
export default Title;