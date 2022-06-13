import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _extends from "@babel/runtime/helpers/esm/extends";
import { createVNode as _createVNode, createTextVNode as _createTextVNode } from "vue";
import classnames from '../../_util/classNames';
import { cloneElement } from '../../_util/vnode';
import { canGoNext } from './utils/innerSliderUtils';

function noop() {}

function handler(options, handle, e) {
  if (e) {
    e.preventDefault();
  }

  handle(options, e);
}

var PrevArrow = function PrevArrow(_, _ref) {
  var attrs = _ref.attrs;
  var clickHandler = attrs.clickHandler,
      infinite = attrs.infinite,
      currentSlide = attrs.currentSlide,
      slideCount = attrs.slideCount,
      slidesToShow = attrs.slidesToShow;
  var prevClasses = {
    'slick-arrow': true,
    'slick-prev': true
  };

  var prevHandler = function prevHandler(e) {
    handler({
      message: 'previous'
    }, clickHandler, e);
  };

  if (!infinite && (currentSlide === 0 || slideCount <= slidesToShow)) {
    prevClasses['slick-disabled'] = true;
    prevHandler = noop;
  }

  var prevArrowProps = {
    key: '0',
    'data-role': 'none',
    class: prevClasses,
    style: {
      display: 'block'
    },
    onClick: prevHandler
  };
  var customProps = {
    currentSlide: currentSlide,
    slideCount: slideCount
  };
  var prevArrow;

  if (attrs.prevArrow) {
    prevArrow = cloneElement(attrs.prevArrow(_extends(_extends({}, prevArrowProps), customProps)), {
      key: '0',
      class: prevClasses,
      style: {
        display: 'block'
      },
      onClick: prevHandler
    }, false);
  } else {
    prevArrow = _createVNode("button", _objectSpread({
      "key": "0",
      "type": "button"
    }, prevArrowProps), [' ', _createTextVNode("Previous")]);
  }

  return prevArrow;
};

PrevArrow.inheritAttrs = false;

var NextArrow = function NextArrow(_, _ref2) {
  var attrs = _ref2.attrs;
  var clickHandler = attrs.clickHandler,
      currentSlide = attrs.currentSlide,
      slideCount = attrs.slideCount;
  var nextClasses = {
    'slick-arrow': true,
    'slick-next': true
  };

  var nextHandler = function nextHandler(e) {
    handler({
      message: 'next'
    }, clickHandler, e);
  };

  if (!canGoNext(attrs)) {
    nextClasses['slick-disabled'] = true;
    nextHandler = noop;
  }

  var nextArrowProps = {
    key: '1',
    'data-role': 'none',
    class: classnames(nextClasses),
    style: {
      display: 'block'
    },
    onClick: nextHandler
  };
  var customProps = {
    currentSlide: currentSlide,
    slideCount: slideCount
  };
  var nextArrow;

  if (attrs.nextArrow) {
    nextArrow = cloneElement(attrs.nextArrow(_extends(_extends({}, nextArrowProps), customProps)), {
      key: '1',
      class: classnames(nextClasses),
      style: {
        display: 'block'
      },
      onClick: nextHandler
    }, false);
  } else {
    nextArrow = _createVNode("button", _objectSpread({
      "key": "1",
      "type": "button"
    }, nextArrowProps), [' ', _createTextVNode("Next")]);
  }

  return nextArrow;
};

NextArrow.inheritAttrs = false;
export { PrevArrow, NextArrow };