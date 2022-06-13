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

var _propsUtil = require("../../_util/props-util");

var _innerSliderUtils = require("./utils/innerSliderUtils");

// given specifications/props for a slide, fetch all the classes that need to be applied to the slide
var getSlideClasses = function getSlideClasses(spec) {
  var slickActive, slickCenter;
  var centerOffset, index;

  if (spec.rtl) {
    index = spec.slideCount - 1 - spec.index;
  } else {
    index = spec.index;
  }

  var slickCloned = index < 0 || index >= spec.slideCount;

  if (spec.centerMode) {
    centerOffset = Math.floor(spec.slidesToShow / 2);
    slickCenter = (index - spec.currentSlide) % spec.slideCount === 0;

    if (index > spec.currentSlide - centerOffset - 1 && index <= spec.currentSlide + centerOffset) {
      slickActive = true;
    }
  } else {
    slickActive = spec.currentSlide <= index && index < spec.currentSlide + spec.slidesToShow;
  }

  var slickCurrent = index === spec.currentSlide;
  return {
    'slick-slide': true,
    'slick-active': slickActive,
    'slick-center': slickCenter,
    'slick-cloned': slickCloned,
    'slick-current': slickCurrent // dubious in case of RTL

  };
};

var getSlideStyle = function getSlideStyle(spec) {
  var style = {};

  if (spec.variableWidth === undefined || spec.variableWidth === false) {
    style.width = spec.slideWidth + (typeof spec.slideWidth === 'number' ? 'px' : '');
  }

  if (spec.fade) {
    style.position = 'relative';

    if (spec.vertical) {
      style.top = -spec.index * parseInt(spec.slideHeight) + 'px';
    } else {
      style.left = -spec.index * parseInt(spec.slideWidth) + 'px';
    }

    style.opacity = spec.currentSlide === spec.index ? 1 : 0;
    style.transition = 'opacity ' + spec.speed + 'ms ' + spec.cssEase + ', ' + 'visibility ' + spec.speed + 'ms ' + spec.cssEase;
    style.WebkitTransition = 'opacity ' + spec.speed + 'ms ' + spec.cssEase + ', ' + 'visibility ' + spec.speed + 'ms ' + spec.cssEase;
  }

  return style;
};

var getKey = function getKey(child, fallbackKey) {
  return child.key || child.key === 0 && '0' || fallbackKey;
};

var renderSlides = function renderSlides(spec, children) {
  var key;
  var slides = [];
  var preCloneSlides = [];
  var postCloneSlides = [];
  var childrenCount = children.length;
  var startIndex = (0, _innerSliderUtils.lazyStartIndex)(spec);
  var endIndex = (0, _innerSliderUtils.lazyEndIndex)(spec);
  children.forEach(function (elem, index) {
    var child;
    var childOnClickOptions = {
      message: 'children',
      index: index,
      slidesToScroll: spec.slidesToScroll,
      currentSlide: spec.currentSlide
    }; // in case of lazyLoad, whether or not we want to fetch the slide

    if (!spec.lazyLoad || spec.lazyLoad && spec.lazyLoadedList.indexOf(index) >= 0) {
      child = elem;
    } else {
      child = (0, _vue.createVNode)('div');
    }

    var childStyle = getSlideStyle((0, _extends2.default)((0, _extends2.default)({}, spec), {
      index: index
    }));
    var slideClass = child.props.class || '';
    var slideClasses = getSlideClasses((0, _extends2.default)((0, _extends2.default)({}, spec), {
      index: index
    })); // push a cloned element of the desired slide

    slides.push((0, _vnode.cloneElement)(child, {
      key: 'original' + getKey(child, index),
      tabindex: '-1',
      'data-index': index,
      'aria-hidden': !slideClasses['slick-active'],
      class: (0, _classNames.default)(slideClasses, slideClass),
      style: (0, _extends2.default)((0, _extends2.default)({
        outline: 'none'
      }, child.props.style || {}), childStyle),
      onClick: function onClick() {
        // child.props && child.props.onClick && child.props.onClick(e)
        if (spec.focusOnSelect) {
          spec.focusOnSelect(childOnClickOptions);
        }
      }
    })); // if slide needs to be precloned or postcloned

    if (spec.infinite && spec.fade === false) {
      var preCloneNo = childrenCount - index;

      if (preCloneNo <= (0, _innerSliderUtils.getPreClones)(spec) && childrenCount !== spec.slidesToShow) {
        key = -preCloneNo;

        if (key >= startIndex) {
          child = elem;
        }

        slideClasses = getSlideClasses((0, _extends2.default)((0, _extends2.default)({}, spec), {
          index: key
        }));
        preCloneSlides.push((0, _vnode.cloneElement)(child, {
          key: 'precloned' + getKey(child, key),
          class: (0, _classNames.default)(slideClasses, slideClass),
          tabindex: '-1',
          'data-index': key,
          'aria-hidden': !slideClasses['slick-active'],
          style: (0, _extends2.default)((0, _extends2.default)({}, child.props.style || {}), childStyle),
          onClick: function onClick() {
            // child.props && child.props.onClick && child.props.onClick(e)
            if (spec.focusOnSelect) {
              spec.focusOnSelect(childOnClickOptions);
            }
          }
        }));
      }

      if (childrenCount !== spec.slidesToShow) {
        key = childrenCount + index;

        if (key < endIndex) {
          child = elem;
        }

        slideClasses = getSlideClasses((0, _extends2.default)((0, _extends2.default)({}, spec), {
          index: key
        }));
        postCloneSlides.push((0, _vnode.cloneElement)(child, {
          key: 'postcloned' + getKey(child, key),
          tabindex: '-1',
          'data-index': key,
          'aria-hidden': !slideClasses['slick-active'],
          class: (0, _classNames.default)(slideClasses, slideClass),
          style: (0, _extends2.default)((0, _extends2.default)({}, child.props.style || {}), childStyle),
          onClick: function onClick() {
            // child.props && child.props.onClick && child.props.onClick(e)
            if (spec.focusOnSelect) {
              spec.focusOnSelect(childOnClickOptions);
            }
          }
        }));
      }
    }
  });

  if (spec.rtl) {
    return preCloneSlides.concat(slides, postCloneSlides).reverse();
  } else {
    return preCloneSlides.concat(slides, postCloneSlides);
  }
};

var Track = function Track(_, _ref) {
  var attrs = _ref.attrs,
      slots = _ref.slots;
  var slides = renderSlides(attrs, (0, _propsUtil.flattenChildren)(slots === null || slots === void 0 ? void 0 : slots.default()));
  var onMouseenter = attrs.onMouseenter,
      onMouseover = attrs.onMouseover,
      onMouseleave = attrs.onMouseleave;
  var mouseEvents = {
    onMouseenter: onMouseenter,
    onMouseover: onMouseover,
    onMouseleave: onMouseleave
  };
  var trackProps = (0, _extends2.default)({
    class: 'slick-track',
    style: attrs.trackStyle
  }, mouseEvents);
  return (0, _vue.createVNode)("div", trackProps, [slides]);
};

Track.inheritAttrs = false;
var _default = Track;
exports.default = _default;