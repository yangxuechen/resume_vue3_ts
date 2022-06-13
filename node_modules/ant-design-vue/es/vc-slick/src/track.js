import _extends from "@babel/runtime/helpers/esm/extends";
import { createVNode as _createVNode } from "vue";
import { createVNode } from 'vue';
import classnames from '../../_util/classNames';
import { cloneElement } from '../../_util/vnode';
import { flattenChildren } from '../../_util/props-util';
import { lazyStartIndex, lazyEndIndex, getPreClones } from './utils/innerSliderUtils'; // given specifications/props for a slide, fetch all the classes that need to be applied to the slide

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
  var startIndex = lazyStartIndex(spec);
  var endIndex = lazyEndIndex(spec);
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
      child = createVNode('div');
    }

    var childStyle = getSlideStyle(_extends(_extends({}, spec), {
      index: index
    }));
    var slideClass = child.props.class || '';
    var slideClasses = getSlideClasses(_extends(_extends({}, spec), {
      index: index
    })); // push a cloned element of the desired slide

    slides.push(cloneElement(child, {
      key: 'original' + getKey(child, index),
      tabindex: '-1',
      'data-index': index,
      'aria-hidden': !slideClasses['slick-active'],
      class: classnames(slideClasses, slideClass),
      style: _extends(_extends({
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

      if (preCloneNo <= getPreClones(spec) && childrenCount !== spec.slidesToShow) {
        key = -preCloneNo;

        if (key >= startIndex) {
          child = elem;
        }

        slideClasses = getSlideClasses(_extends(_extends({}, spec), {
          index: key
        }));
        preCloneSlides.push(cloneElement(child, {
          key: 'precloned' + getKey(child, key),
          class: classnames(slideClasses, slideClass),
          tabindex: '-1',
          'data-index': key,
          'aria-hidden': !slideClasses['slick-active'],
          style: _extends(_extends({}, child.props.style || {}), childStyle),
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

        slideClasses = getSlideClasses(_extends(_extends({}, spec), {
          index: key
        }));
        postCloneSlides.push(cloneElement(child, {
          key: 'postcloned' + getKey(child, key),
          tabindex: '-1',
          'data-index': key,
          'aria-hidden': !slideClasses['slick-active'],
          class: classnames(slideClasses, slideClass),
          style: _extends(_extends({}, child.props.style || {}), childStyle),
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
  var slides = renderSlides(attrs, flattenChildren(slots === null || slots === void 0 ? void 0 : slots.default()));
  var onMouseenter = attrs.onMouseenter,
      onMouseover = attrs.onMouseover,
      onMouseleave = attrs.onMouseleave;
  var mouseEvents = {
    onMouseenter: onMouseenter,
    onMouseover: onMouseover,
    onMouseleave: onMouseleave
  };

  var trackProps = _extends({
    class: 'slick-track',
    style: attrs.trackStyle
  }, mouseEvents);

  return _createVNode("div", trackProps, [slides]);
};

Track.inheritAttrs = false;
export default Track;