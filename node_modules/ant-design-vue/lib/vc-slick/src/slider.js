"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _json2mq = _interopRequireDefault(require("../../_util/json2mq"));

var _BaseMixin = _interopRequireDefault(require("../../_util/BaseMixin"));

var _vnode = require("../../_util/vnode");

var _innerSlider = _interopRequireDefault(require("./inner-slider"));

var _defaultProps = _interopRequireDefault(require("./default-props"));

var _innerSliderUtils = require("./utils/innerSliderUtils");

var _propsUtil = require("../../_util/props-util");

var _default = (0, _vue.defineComponent)({
  name: 'Slider',
  mixins: [_BaseMixin.default],
  inheritAttrs: false,
  props: (0, _extends2.default)({}, _defaultProps.default),
  data: function data() {
    this._responsiveMediaHandlers = [];
    return {
      breakpoint: null
    };
  },
  // handles responsive breakpoints
  beforeMount: function beforeMount() {
    var _this = this;

    if (this.responsive) {
      var breakpoints = this.responsive.map(function (breakpt) {
        return breakpt.breakpoint;
      }); // sort them in increasing order of their numerical value

      breakpoints.sort(function (x, y) {
        return x - y;
      });
      breakpoints.forEach(function (breakpoint, index) {
        // media query for each breakpoint
        var bQuery;

        if (index === 0) {
          bQuery = (0, _json2mq.default)({
            minWidth: 0,
            maxWidth: breakpoint
          });
        } else {
          bQuery = (0, _json2mq.default)({
            minWidth: breakpoints[index - 1] + 1,
            maxWidth: breakpoint
          });
        } // when not using server side rendering


        (0, _innerSliderUtils.canUseDOM)() && _this.media(bQuery, function () {
          _this.setState({
            breakpoint: breakpoint
          });
        });
      }); // Register media query for full screen. Need to support resize from small to large
      // convert javascript object to media query string

      var query = (0, _json2mq.default)({
        minWidth: breakpoints.slice(-1)[0]
      });
      (0, _innerSliderUtils.canUseDOM)() && this.media(query, function () {
        _this.setState({
          breakpoint: null
        });
      });
    }
  },
  beforeUnmount: function beforeUnmount() {
    this._responsiveMediaHandlers.forEach(function (obj) {
      obj.mql.removeListener(obj.listener);
    });
  },
  methods: {
    innerSliderRefHandler: function innerSliderRefHandler(ref) {
      this.innerSlider = ref;
    },
    media: function media(query, handler) {
      // javascript handler for  css media query
      var mql = window.matchMedia(query);

      var listener = function listener(_ref) {
        var matches = _ref.matches;

        if (matches) {
          handler();
        }
      };

      mql.addListener(listener);
      listener(mql);

      this._responsiveMediaHandlers.push({
        mql: mql,
        query: query,
        listener: listener
      });
    },
    slickPrev: function slickPrev() {
      this.innerSlider.slickPrev();
    },
    slickNext: function slickNext() {
      this.innerSlider.slickNext();
    },
    slickGoTo: function slickGoTo(slide) {
      var dontAnimate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      this.innerSlider.slickGoTo(slide, dontAnimate);
    },
    slickPause: function slickPause() {
      this.innerSlider.pause('paused');
    },
    slickPlay: function slickPlay() {
      this.innerSlider.handleAutoPlay('play');
    }
  },
  render: function render() {
    var _this2 = this;

    var _a;

    var settings;
    var newProps;

    if (this.breakpoint) {
      newProps = this.responsive.filter(function (resp) {
        return resp.breakpoint === _this2.breakpoint;
      });
      settings = newProps[0].settings === 'unslick' ? 'unslick' : (0, _extends2.default)((0, _extends2.default)({}, this.$props), newProps[0].settings);
    } else {
      settings = (0, _extends2.default)({}, this.$props);
    } // force scrolling by one if centerMode is on


    if (settings.centerMode) {
      if (settings.slidesToScroll > 1 && process.env.NODE_ENV !== 'production') {
        console.warn("slidesToScroll should be equal to 1 in centerMode, you are using ".concat(settings.slidesToScroll));
      }

      settings.slidesToScroll = 1;
    } // force showing one slide and scrolling by one if the fade mode is on


    if (settings.fade) {
      if (settings.slidesToShow > 1 && process.env.NODE_ENV !== 'production') {
        console.warn("slidesToShow should be equal to 1 when fade is true, you're using ".concat(settings.slidesToShow));
      }

      if (settings.slidesToScroll > 1 && process.env.NODE_ENV !== 'production') {
        console.warn("slidesToScroll should be equal to 1 when fade is true, you're using ".concat(settings.slidesToScroll));
      }

      settings.slidesToShow = 1;
      settings.slidesToScroll = 1;
    } // makes sure that children is an array, even when there is only 1 child


    var children = (0, _propsUtil.getSlot)(this) || []; // Children may contain false or null, so we should filter them
    // children may also contain string filled with spaces (in certain cases where we use jsx strings)

    children = children.filter(function (child) {
      if (typeof child === 'string') {
        return !!child.trim();
      }

      return !!child;
    }); // rows and slidesPerRow logic is handled here

    if (settings.variableWidth && (settings.rows > 1 || settings.slidesPerRow > 1)) {
      console.warn("variableWidth is not supported in case of rows > 1 or slidesPerRow > 1");
      settings.variableWidth = false;
    }

    var newChildren = [];
    var currentWidth = null;

    for (var i = 0; i < children.length; i += settings.rows * settings.slidesPerRow) {
      var newSlide = [];

      for (var j = i; j < i + settings.rows * settings.slidesPerRow; j += settings.slidesPerRow) {
        var row = [];

        for (var k = j; k < j + settings.slidesPerRow; k += 1) {
          if (settings.variableWidth && ((_a = children[k].props) === null || _a === void 0 ? void 0 : _a.style)) {
            currentWidth = children[k].props.style.width;
          }

          if (k >= children.length) break;
          row.push((0, _vnode.cloneElement)(children[k], {
            key: 100 * i + 10 * j + k,
            tabindex: -1,
            style: {
              width: "".concat(100 / settings.slidesPerRow, "%"),
              display: 'inline-block'
            }
          }));
        }

        newSlide.push((0, _vue.createVNode)("div", {
          "key": 10 * i + j
        }, [row]));
      }

      if (settings.variableWidth) {
        newChildren.push((0, _vue.createVNode)("div", {
          "key": i,
          "style": {
            width: currentWidth
          }
        }, [newSlide]));
      } else {
        newChildren.push((0, _vue.createVNode)("div", {
          "key": i
        }, [newSlide]));
      }
    }

    if (settings === 'unslick') {
      var className = 'regular slider ' + (this.className || '');
      return (0, _vue.createVNode)("div", {
        "class": className
      }, [newChildren]);
    } else if (newChildren.length <= settings.slidesToShow) {
      settings.unslick = true;
    }

    var sliderProps = (0, _extends2.default)((0, _extends2.default)((0, _extends2.default)({}, this.$attrs), settings), {
      children: newChildren,
      ref: this.innerSliderRefHandler
    });
    return (0, _vue.createVNode)(_innerSlider.default, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, sliderProps), {}, {
      "__propsSymbol__": []
    }), this.$slots);
  }
});

exports.default = _default;