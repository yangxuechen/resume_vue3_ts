"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.CarouselProps = void 0;

var _vue = require("vue");

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _vueTypes = _interopRequireDefault(require("../_util/vue-types"));

var _debounce = _interopRequireDefault(require("lodash/debounce"));

var _propsUtil = _interopRequireWildcard(require("../_util/props-util"));

var _configProvider = require("../config-provider");

var _warning = _interopRequireDefault(require("../_util/warning"));

var _classNames3 = _interopRequireDefault(require("../_util/classNames"));

var _src = _interopRequireDefault(require("../vc-slick/src"));

var _type = require("../_util/type");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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

// Carousel
var CarouselProps = {
  effect: _vueTypes.default.oneOf((0, _type.tuple)('scrollx', 'fade')),
  dots: _vueTypes.default.looseBool.def(true),
  vertical: _vueTypes.default.looseBool,
  autoplay: _vueTypes.default.looseBool,
  easing: _vueTypes.default.string,
  beforeChange: _vueTypes.default.func,
  afterChange: _vueTypes.default.func,
  // style: PropTypes.React.CSSProperties,
  prefixCls: _vueTypes.default.string,
  accessibility: _vueTypes.default.looseBool,
  nextArrow: _vueTypes.default.VNodeChild,
  prevArrow: _vueTypes.default.VNodeChild,
  pauseOnHover: _vueTypes.default.looseBool,
  // className: PropTypes.string,
  adaptiveHeight: _vueTypes.default.looseBool,
  arrows: _vueTypes.default.looseBool.def(false),
  autoplaySpeed: _vueTypes.default.number,
  centerMode: _vueTypes.default.looseBool,
  centerPadding: _vueTypes.default.string,
  cssEase: _vueTypes.default.string,
  dotsClass: _vueTypes.default.string,
  draggable: _vueTypes.default.looseBool.def(false),
  fade: _vueTypes.default.looseBool,
  focusOnSelect: _vueTypes.default.looseBool,
  infinite: _vueTypes.default.looseBool,
  initialSlide: _vueTypes.default.number,
  lazyLoad: _vueTypes.default.looseBool,
  rtl: _vueTypes.default.looseBool,
  slide: _vueTypes.default.string,
  slidesToShow: _vueTypes.default.number,
  slidesToScroll: _vueTypes.default.number,
  speed: _vueTypes.default.number,
  swipe: _vueTypes.default.looseBool,
  swipeToSlide: _vueTypes.default.looseBool,
  touchMove: _vueTypes.default.looseBool,
  touchThreshold: _vueTypes.default.number,
  variableWidth: _vueTypes.default.looseBool,
  useCSS: _vueTypes.default.looseBool,
  slickGoTo: _vueTypes.default.number,
  responsive: _vueTypes.default.array,
  dotPosition: _vueTypes.default.oneOf((0, _type.tuple)('top', 'bottom', 'left', 'right')),
  verticalSwiping: _vueTypes.default.looseBool.def(false)
};
exports.CarouselProps = CarouselProps;
var Carousel = (0, _vue.defineComponent)({
  name: 'ACarousel',
  inheritAttrs: false,
  props: CarouselProps,
  setup: function setup() {
    return {
      configProvider: (0, _vue.inject)('configProvider', _configProvider.defaultConfigProvider),
      slick: undefined,
      innerSlider: undefined
    };
  },
  beforeMount: function beforeMount() {
    this.onWindowResized = (0, _debounce.default)(this.onWindowResized, 500, {
      leading: false
    });
  },
  mounted: function mounted() {
    if ((0, _propsUtil.default)(this, 'vertical')) {
      (0, _warning.default)(!this.vertical, 'Carousel', '`vertical` is deprecated, please use `dotPosition` instead.');
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

      if ((0, _propsUtil.default)(this, 'vertical')) {
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

    var props = (0, _extends2.default)({}, this.$props);
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
    props.dotsClass = (0, _classNames3.default)("".concat(dotsClass), "".concat(dotsClass, "-").concat(dotPosition || 'bottom'), (0, _defineProperty2.default)({}, "".concat(props.dotsClass), !!props.dotsClass));
    className = (0, _classNames3.default)((_classNames2 = {}, (0, _defineProperty2.default)(_classNames2, cls, !!cls), (0, _defineProperty2.default)(_classNames2, className, !!className), (0, _defineProperty2.default)(_classNames2, "".concat(className, "-vertical"), props.vertical), _classNames2));
    var SlickCarouselProps = (0, _extends2.default)((0, _extends2.default)((0, _extends2.default)({}, props), restAttrs), {
      nextArrow: (0, _propsUtil.getComponent)(this, 'nextArrow'),
      prevArrow: (0, _propsUtil.getComponent)(this, 'prevArrow')
    });
    return (0, _vue.createVNode)("div", {
      "class": className,
      "style": style
    }, [(0, _vue.createVNode)(_src.default, (0, _objectSpread2.default)({
      "ref": this.saveSlick
    }, SlickCarouselProps), $slots)]);
  }
});

var _default = (0, _type.withInstall)(Carousel);

exports.default = _default;