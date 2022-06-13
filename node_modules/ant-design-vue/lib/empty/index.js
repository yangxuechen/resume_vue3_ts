"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classNames2 = _interopRequireDefault(require("../_util/classNames"));

var _configProvider = require("../config-provider");

var _LocaleReceiver = _interopRequireDefault(require("../locale-provider/LocaleReceiver"));

var _empty = _interopRequireDefault(require("./empty"));

var _simple = _interopRequireDefault(require("./simple"));

var _propsUtil = require("../_util/props-util");

var _vueTypes = _interopRequireDefault(require("../_util/vue-types"));

var _type = require("../_util/type");

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

var defaultEmptyImg = (0, _vue.createVNode)(_empty.default, null, null);
var simpleEmptyImg = (0, _vue.createVNode)(_simple.default, null, null);

var Empty = function Empty(props, _ref) {
  var _ref$slots = _ref.slots,
      slots = _ref$slots === void 0 ? {} : _ref$slots,
      attrs = _ref.attrs;

  var _a;

  var configProvider = (0, _vue.inject)('configProvider', _configProvider.defaultConfigProvider);
  var getPrefixCls = configProvider.getPrefixCls,
      direction = configProvider.direction;

  var _b = (0, _extends2.default)((0, _extends2.default)({}, props), attrs),
      customizePrefixCls = _b.prefixCls,
      _b$image = _b.image,
      image = _b$image === void 0 ? defaultEmptyImg : _b$image,
      _b$description = _b.description,
      description = _b$description === void 0 ? ((_a = slots.description) === null || _a === void 0 ? void 0 : _a.call(slots)) || undefined : _b$description,
      imageStyle = _b.imageStyle,
      _b$class = _b.class,
      className = _b$class === void 0 ? '' : _b$class,
      restProps = __rest(_b, ["prefixCls", "image", "description", "imageStyle", "class"]);

  return (0, _vue.createVNode)(_LocaleReceiver.default, {
    "componentName": "Empty",
    "children": function children(locale) {
      var _classNames;

      var prefixCls = getPrefixCls('empty', customizePrefixCls);
      var des = typeof description !== 'undefined' ? description : locale.description;
      var alt = typeof des === 'string' ? des : 'empty';
      var imageNode = null;

      if (typeof image === 'string') {
        imageNode = (0, _vue.createVNode)("img", {
          "alt": alt,
          "src": image
        }, null);
      } else {
        imageNode = image;
      }

      return (0, _vue.createVNode)("div", (0, _objectSpread2.default)({
        "class": (0, _classNames2.default)(prefixCls, className, (_classNames = {}, (0, _defineProperty2.default)(_classNames, "".concat(prefixCls, "-normal"), image === simpleEmptyImg), (0, _defineProperty2.default)(_classNames, "".concat(prefixCls, "-rtl"), direction === 'rtl'), _classNames))
      }, restProps), [(0, _vue.createVNode)("div", {
        "class": "".concat(prefixCls, "-image"),
        "style": imageStyle
      }, [imageNode]), des && (0, _vue.createVNode)("p", {
        "class": "".concat(prefixCls, "-description")
      }, [des]), slots.default && (0, _vue.createVNode)("div", {
        "class": "".concat(prefixCls, "-footer")
      }, [(0, _propsUtil.filterEmpty)(slots.default())])]);
    }
  }, null);
};

Empty.displayName = 'AEmpty';
Empty.PRESENTED_IMAGE_DEFAULT = defaultEmptyImg;
Empty.PRESENTED_IMAGE_SIMPLE = simpleEmptyImg;
Empty.inheritAttrs = false;
Empty.props = {
  prefixCls: _vueTypes.default.string,
  image: _vueTypes.default.any,
  description: _vueTypes.default.any,
  imageStyle: _vueTypes.default.object
};

var _default = (0, _type.withInstall)(Empty);

exports.default = _default;