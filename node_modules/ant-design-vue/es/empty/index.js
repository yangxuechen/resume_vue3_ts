import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
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

import { inject } from 'vue';
import classNames from '../_util/classNames';
import { defaultConfigProvider } from '../config-provider';
import LocaleReceiver from '../locale-provider/LocaleReceiver';
import DefaultEmptyImg from './empty';
import SimpleEmptyImg from './simple';
import { filterEmpty } from '../_util/props-util';
import PropTypes from '../_util/vue-types';
import { withInstall } from '../_util/type';

var defaultEmptyImg = _createVNode(DefaultEmptyImg, null, null);

var simpleEmptyImg = _createVNode(SimpleEmptyImg, null, null);

var Empty = function Empty(props, _ref) {
  var _ref$slots = _ref.slots,
      slots = _ref$slots === void 0 ? {} : _ref$slots,
      attrs = _ref.attrs;

  var _a;

  var configProvider = inject('configProvider', defaultConfigProvider);
  var getPrefixCls = configProvider.getPrefixCls,
      direction = configProvider.direction;

  var _b = _extends(_extends({}, props), attrs),
      customizePrefixCls = _b.prefixCls,
      _b$image = _b.image,
      image = _b$image === void 0 ? defaultEmptyImg : _b$image,
      _b$description = _b.description,
      description = _b$description === void 0 ? ((_a = slots.description) === null || _a === void 0 ? void 0 : _a.call(slots)) || undefined : _b$description,
      imageStyle = _b.imageStyle,
      _b$class = _b.class,
      className = _b$class === void 0 ? '' : _b$class,
      restProps = __rest(_b, ["prefixCls", "image", "description", "imageStyle", "class"]);

  return _createVNode(LocaleReceiver, {
    "componentName": "Empty",
    "children": function children(locale) {
      var _classNames;

      var prefixCls = getPrefixCls('empty', customizePrefixCls);
      var des = typeof description !== 'undefined' ? description : locale.description;
      var alt = typeof des === 'string' ? des : 'empty';
      var imageNode = null;

      if (typeof image === 'string') {
        imageNode = _createVNode("img", {
          "alt": alt,
          "src": image
        }, null);
      } else {
        imageNode = image;
      }

      return _createVNode("div", _objectSpread({
        "class": classNames(prefixCls, className, (_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-normal"), image === simpleEmptyImg), _defineProperty(_classNames, "".concat(prefixCls, "-rtl"), direction === 'rtl'), _classNames))
      }, restProps), [_createVNode("div", {
        "class": "".concat(prefixCls, "-image"),
        "style": imageStyle
      }, [imageNode]), des && _createVNode("p", {
        "class": "".concat(prefixCls, "-description")
      }, [des]), slots.default && _createVNode("div", {
        "class": "".concat(prefixCls, "-footer")
      }, [filterEmpty(slots.default())])]);
    }
  }, null);
};

Empty.displayName = 'AEmpty';
Empty.PRESENTED_IMAGE_DEFAULT = defaultEmptyImg;
Empty.PRESENTED_IMAGE_SIMPLE = simpleEmptyImg;
Empty.inheritAttrs = false;
Empty.props = {
  prefixCls: PropTypes.string,
  image: PropTypes.any,
  description: PropTypes.any,
  imageStyle: PropTypes.object
};
export default withInstall(Empty);