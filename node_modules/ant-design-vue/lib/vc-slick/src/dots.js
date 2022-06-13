"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classNames = _interopRequireDefault(require("../../_util/classNames"));

var _vnode = require("../../_util/vnode");

var getDotCount = function getDotCount(spec) {
  var dots;

  if (spec.infinite) {
    dots = Math.ceil(spec.slideCount / spec.slidesToScroll);
  } else {
    dots = Math.ceil((spec.slideCount - spec.slidesToShow) / spec.slidesToScroll) + 1;
  }

  return dots;
};

var Dots = function Dots(_, _ref) {
  var attrs = _ref.attrs;
  var slideCount = attrs.slideCount,
      slidesToScroll = attrs.slidesToScroll,
      slidesToShow = attrs.slidesToShow,
      infinite = attrs.infinite,
      currentSlide = attrs.currentSlide,
      appendDots = attrs.appendDots,
      customPaging = attrs.customPaging,
      clickHandler = attrs.clickHandler,
      dotsClass = attrs.dotsClass,
      onMouseenter = attrs.onMouseenter,
      onMouseover = attrs.onMouseover,
      onMouseleave = attrs.onMouseleave;
  var dotCount = getDotCount({
    slideCount: slideCount,
    slidesToScroll: slidesToScroll,
    slidesToShow: slidesToShow,
    infinite: infinite
  }); // Apply join & split to Array to pre-fill it for IE8
  //
  // Credit: http://stackoverflow.com/a/13735425/1849458

  var mouseEvents = {
    onMouseenter: onMouseenter,
    onMouseover: onMouseover,
    onMouseleave: onMouseleave
  };
  var dots = Array.apply(null, Array(dotCount + 1).join('0').split('')).map(function (x, i) {
    var leftBound = i * slidesToScroll;
    var rightBound = i * slidesToScroll + (slidesToScroll - 1);
    var className = (0, _classNames.default)({
      'slick-active': currentSlide >= leftBound && currentSlide <= rightBound
    });
    var dotOptions = {
      message: 'dots',
      index: i,
      slidesToScroll: slidesToScroll,
      currentSlide: currentSlide
    };

    function onClick(e) {
      // In Autoplay the focus stays on clicked button even after transition
      // to next slide. That only goes away by click somewhere outside
      if (e) {
        e.preventDefault();
      }

      clickHandler(dotOptions);
    }

    return (0, _vue.createVNode)("li", {
      "key": i,
      "class": className
    }, [(0, _vnode.cloneElement)(customPaging({
      i: i
    }), {
      onClick: onClick
    })]);
  });
  return (0, _vnode.cloneElement)(appendDots({
    dots: dots
  }), (0, _extends2.default)({
    class: dotsClass
  }, mouseEvents));
};

Dots.inheritAttrs = false;
var _default = Dots;
exports.default = _default;