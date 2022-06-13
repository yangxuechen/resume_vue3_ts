import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
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

import { defineComponent, inject } from 'vue';
import PropTypes from '../_util/vue-types';
import debounce from 'lodash-es/debounce';
import hasProp, { getComponent } from '../_util/props-util';
import { defaultConfigProvider } from '../config-provider';
import warning from '../_util/warning';
import classNames from '../_util/classNames';
import SlickCarousel from '../vc-slick/src';
import { tuple, withInstall } from '../_util/type'; // Carousel

export var CarouselProps = {
  effect: PropTypes.oneOf(tuple('scrollx', 'fade')),
  dots: PropTypes.looseBool.def(true),
  vertical: PropTypes.looseBool,
  autoplay: PropTypes.looseBool,
  easing: PropTypes.string,
  beforeChange: PropTypes.func,
  afterChange: PropTypes.func,
  // style: PropTypes.React.CSSProperties,
  prefixCls: PropTypes.string,
  accessibility: PropTypes.looseBool,
  nextArrow: PropTypes.VNodeChild,
  prevArrow: PropTypes.VNodeChild,
  pauseOnHover: PropTypes.looseBool,
  // className: PropTypes.string,
  adaptiveHeight: PropTypes.looseBool,
  arrows: PropTypes.looseBool.def(false),
  autoplaySpeed: PropTypes.number,
  centerMode: PropTypes.looseBool,
  centerPadding: PropTypes.string,
  cssEase: PropTypes.string,
  dotsClass: PropTypes.string,
  draggable: PropTypes.looseBool.def(false),
  fade: PropTypes.looseBool,
  focusOnSelect: PropTypes.looseBool,
  infinite: PropTypes.looseBool,
  initialSlide: PropTypes.number,
  lazyLoad: PropTypes.looseBool,
  rtl: PropTypes.looseBool,
  slide: PropTypes.string,
  slidesToShow: PropTypes.number,
  slidesToScroll: PropTypes.number,
  speed: PropTypes.number,
  swipe: PropTypes.looseBool,
  swipeToSlide: PropTypes.looseBool,
  touchMove: PropTypes.looseBool,
  touchThreshold: PropTypes.number,
  variableWidth: PropTypes.looseBool,
  useCSS: PropTypes.looseBool,
  slickGoTo: PropTypes.number,
  responsive: PropTypes.array,
  dotPosition: PropTypes.oneOf(tuple('top', 'bottom', 'left', 'right')),
  verticalSwiping: PropTypes.looseBool.def(false)
};
var Carousel = defineComponent({
  name: 'ACarousel',
  inheritAttrs: false,
  props: CarouselProps,
  setup: function setup() {
    return {
      configProvider: inject('configProvider', defaultConfigProvider),
      slick: undefined,
      innerSlider: undefined
    };
  },
  beforeMount: function beforeMount() {
    this.onWindowResized = debounce(this.onWindowResized, 500, {
      leading: false
    });
  },
  mounted: function mounted() {
    if (hasProp(this, 'vertical')) {
      warning(!this.vertical, 'Carousel', '`vertical` is deprecated, please use `dotPosition` instead.');
    }

    var autoplay = this.autoplay;

    if (autoplay) {
      window.addEventListener('resize', this.onWindowResized);
    } // https://github.com/ant-design/ant-design/issues/7191


    this.innerSlider = this.slick && this.slick.innerSlider;
  },
  beforeUnmount: function beforeUnmount() {
    var autoplay = this.autoplay;

    if (autoplay) {
      window.removeEventListener('resize', this.onWindowResized);
      this.onWindowResized.cancel();
    }
  },
  methods: {
    getDotPosition: function getDotPosition() {
      if (this.dotPosition) {
        return this.dotPosition;
      }

      if (hasProp(this, 'vertical')) {
        return this.vertical ? 'right' : 'bottom';
      }

      return 'bottom';
    },
    saveSlick: function saveSlick(node) {
      this.slick = node;
    },
    onWindowResized: function onWindowResized() {
      // Fix https://github.com/ant-design/ant-design/issues/2550
      var autoplay = this.autoplay;

      if (autoplay && this.slick && this.slick.innerSlider && this.slick.innerSlider.autoPlay) {
        this.slick.innerSlider.autoPlay();
      }
    },
    next: function next() {
      this.slick.slickNext();
    },
    prev: function prev() {
      this.slick.slickPrev();
    },
    goTo: function goTo(slide) {
      var dontAnimate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      this.slick.slickGoTo(slide, dontAnimate);
    }
  },
  render: function render() {
    var _classNames2;

    var props = _extends({}, this.$props);

    var $slots = this.$slots;

    if (props.effect === 'fade') {
      props.fade = true;
    }

    var _a = this.$attrs,
        cls = _a.class,
        style = _a.style,
        restAttrs = __rest(_a, ["class", "style"]);

    var getPrefixCls = this.configProvider.getPrefixCls;
    var className = getPrefixCls('carousel', props.prefixCls);
    var dotsClass = 'slick-dots';
    var dotPosition = this.getDotPosition();
    props.vertical = dotPosition === 'left' || dotPosition === 'right';
    props.dotsClass = classNames("".concat(dotsClass), "".concat(dotsClass, "-").concat(dotPosition || 'bottom'), _defineProperty({}, "".concat(props.dotsClass), !!props.dotsClass));
    className = classNames((_classNames2 = {}, _defineProperty(_classNames2, cls, !!cls), _defineProperty(_classNames2, className, !!className), _defineProperty(_classNames2, "".concat(className, "-vertical"), props.vertical), _classNames2));

    var SlickCarouselProps = _extends(_extends(_extends({}, props), restAttrs), {
      nextArrow: getComponent(this, 'nextArrow'),
      prevArrow: getComponent(this, 'prevArrow')
    });

    return _createVNode("div", {
      "class": className,
      "style": style
    }, [_createVNode(SlickCarousel, _objectSpread({
      "ref": this.saveSlick
    }, SlickCarouselProps), $slots)]);
  }
});
export default withInstall(Carousel);