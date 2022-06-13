"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vueTypes = _interopRequireDefault(require("../../_util/vue-types"));

var defaultProps = {
  accessibility: _vueTypes.default.looseBool.def(true),
  // 自定义高度
  adaptiveHeight: _vueTypes.default.looseBool.def(false),
  afterChange: _vueTypes.default.any.def(null),
  arrows: _vueTypes.default.looseBool.def(true),
  autoplay: _vueTypes.default.looseBool.def(false),
  autoplaySpeed: _vueTypes.default.number.def(3000),
  beforeChange: _vueTypes.default.any.def(null),
  centerMode: _vueTypes.default.looseBool.def(false),
  centerPadding: _vueTypes.default.string.def('50px'),
  cssEase: _vueTypes.default.string.def('ease'),
  dots: _vueTypes.default.looseBool.def(false),
  dotsClass: _vueTypes.default.string.def('slick-dots'),
  draggable: _vueTypes.default.looseBool.def(true),
  unslick: _vueTypes.default.looseBool.def(false),
  easing: _vueTypes.default.string.def('linear'),
  edgeFriction: _vueTypes.default.number.def(0.35),
  fade: _vueTypes.default.looseBool.def(false),
  focusOnSelect: _vueTypes.default.looseBool.def(false),
  infinite: _vueTypes.default.looseBool.def(true),
  initialSlide: _vueTypes.default.number.def(0),
  lazyLoad: _vueTypes.default.any.def(null),
  verticalSwiping: _vueTypes.default.looseBool.def(false),
  asNavFor: _vueTypes.default.any.def(null),
  // 圆点hover是否暂停
  pauseOnDotsHover: _vueTypes.default.looseBool.def(false),
  // focus是否暂停
  pauseOnFocus: _vueTypes.default.looseBool.def(false),
  // hover是否暂停
  pauseOnHover: _vueTypes.default.looseBool.def(true),
  responsive: _vueTypes.default.array,
  rows: _vueTypes.default.number.def(1),
  rtl: _vueTypes.default.looseBool.def(false),
  slide: _vueTypes.default.string.def('div'),
  slidesPerRow: _vueTypes.default.number.def(1),
  slidesToScroll: _vueTypes.default.number.def(1),
  slidesToShow: _vueTypes.default.number.def(1),
  speed: _vueTypes.default.number.def(500),
  swipe: _vueTypes.default.looseBool.def(true),
  swipeEvent: _vueTypes.default.any.def(null),
  swipeToSlide: _vueTypes.default.looseBool.def(false),
  touchMove: _vueTypes.default.looseBool.def(true),
  touchThreshold: _vueTypes.default.number.def(5),
  useCSS: _vueTypes.default.looseBool.def(true),
  useTransform: _vueTypes.default.looseBool.def(true),
  variableWidth: _vueTypes.default.looseBool.def(false),
  vertical: _vueTypes.default.looseBool.def(false),
  waitForAnimate: _vueTypes.default.looseBool.def(true),
  children: _vueTypes.default.array,
  __propsSymbol__: _vueTypes.default.any
};
var _default = defaultProps;
exports.default = _default;