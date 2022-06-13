"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _vueTypes = _interopRequireDefault(require("../../_util/vue-types"));

var _BaseMixin = _interopRequireDefault(require("../../_util/BaseMixin"));

var _addEventListener = _interopRequireDefault(require("../../vc-util/Dom/addEventListener"));

var _propsUtil = require("../../_util/props-util");

var _warning = _interopRequireDefault(require("../../_util/warning"));

var _debounce = _interopRequireDefault(require("lodash/debounce"));

var _throttle = _interopRequireDefault(require("lodash/throttle"));

var _parentScroll = _interopRequireDefault(require("./utils/parentScroll"));

var _inViewport = _interopRequireDefault(require("./utils/inViewport"));

var lazyLoadProps = {
  debounce: _vueTypes.default.looseBool,
  elementType: _vueTypes.default.string,
  height: _vueTypes.default.oneOfType([_vueTypes.default.string, _vueTypes.default.number]),
  offset: _vueTypes.default.number,
  offsetBottom: _vueTypes.default.number,
  offsetHorizontal: _vueTypes.default.number,
  offsetLeft: _vueTypes.default.number,
  offsetRight: _vueTypes.default.number,
  offsetTop: _vueTypes.default.number,
  offsetVertical: _vueTypes.default.number,
  threshold: _vueTypes.default.number,
  throttle: _vueTypes.default.number,
  width: _vueTypes.default.oneOfType([_vueTypes.default.string, _vueTypes.default.number])
};

var _default2 = (0, _vue.defineComponent)({
  name: 'LazyLoad',
  mixins: [_BaseMixin.default],
  inheritAttrs: false,
  props: (0, _propsUtil.initDefaultProps)(lazyLoadProps, {
    elementType: 'div',
    debounce: true,
    offset: 0,
    offsetBottom: 0,
    offsetHorizontal: 0,
    offsetLeft: 0,
    offsetRight: 0,
    offsetTop: 0,
    offsetVertical: 0,
    throttle: 250
  }),
  data: function data() {
    if (this.throttle > 0) {
      if (this.debounce) {
        this.lazyLoadHandler = (0, _debounce.default)(this.lazyLoadHandler, this.throttle);
      } else {
        this.lazyLoadHandler = (0, _throttle.default)(this.lazyLoadHandler, this.throttle);
      }
    }

    return {
      visible: false
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.$nextTick(function () {
      (0, _vue.watchEffect)(function () {
        if (!_this.visible) {
          _this.lazyLoadHandler(_this.$props);
        }
      });

      var eventNode = _this.getEventNode();

      if (_this.lazyLoadHandler.flush) {
        _this.lazyLoadHandler.flush();
      }

      _this.resizeHander = (0, _addEventListener.default)(window, 'resize', _this.lazyLoadHandler);
      _this.scrollHander = (0, _addEventListener.default)(eventNode, 'scroll', _this.lazyLoadHandler);
    });
  },
  beforeUnmount: function beforeUnmount() {
    if (this.lazyLoadHandler.cancel) {
      this.lazyLoadHandler.cancel();
    }

    this.detachListeners();
  },
  methods: {
    getEventNode: function getEventNode() {
      return (0, _parentScroll.default)((0, _propsUtil.findDOMNode)(this));
    },
    getOffset: function getOffset() {
      var _this$$props = this.$props,
          offset = _this$$props.offset,
          offsetVertical = _this$$props.offsetVertical,
          offsetHorizontal = _this$$props.offsetHorizontal,
          offsetTop = _this$$props.offsetTop,
          offsetBottom = _this$$props.offsetBottom,
          offsetLeft = _this$$props.offsetLeft,
          offsetRight = _this$$props.offsetRight,
          threshold = _this$$props.threshold;

      var _offsetAll = threshold || offset;

      var _offsetVertical = offsetVertical || _offsetAll;

      var _offsetHorizontal = offsetHorizontal || _offsetAll;

      return {
        top: offsetTop || _offsetVertical,
        bottom: offsetBottom || _offsetVertical,
        left: offsetLeft || _offsetHorizontal,
        right: offsetRight || _offsetHorizontal
      };
    },
    lazyLoadHandler: function lazyLoadHandler() {
      var _this2 = this;

      if (!this._.isMounted) {
        return;
      }

      var offset = this.getOffset();
      var node = (0, _propsUtil.findDOMNode)(this);
      var eventNode = this.getEventNode();

      if ((0, _inViewport.default)(node, eventNode, offset)) {
        this.setState({
          visible: true
        }, function () {
          _this2.__emit('contentVisible');
        });
        this.detachListeners();
      }
    },
    detachListeners: function detachListeners() {
      this.resizeHander && this.resizeHander.remove();
      this.scrollHander && this.scrollHander.remove();
    }
  },
  render: function render() {
    var children = (0, _propsUtil.getSlot)(this);

    if (children.length !== 1) {
      (0, _warning.default)(false, 'lazyLoad组件只能包含一个子元素');
      return null;
    }

    var _this$$props2 = this.$props,
        height = _this$$props2.height,
        width = _this$$props2.width,
        ElementType = _this$$props2.elementType;
    var visible = this.visible;
    var className = this.$attrs.class;
    var elStyles = {
      height: typeof height === 'number' ? height + 'px' : height,
      width: typeof width === 'number' ? width + 'px' : width
    };
    var elClasses = (0, _defineProperty2.default)({
      LazyLoad: true,
      'is-visible': visible
    }, className, className);
    return (0, _vue.createVNode)(ElementType, {
      "class": elClasses,
      "style": elStyles
    }, {
      default: function _default() {
        return [visible ? children[0] : null];
      }
    });
  }
});

exports.default = _default2;