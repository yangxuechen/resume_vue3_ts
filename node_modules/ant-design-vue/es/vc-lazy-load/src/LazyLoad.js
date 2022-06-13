import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import { createVNode as _createVNode } from "vue";
import PropTypes from '../../_util/vue-types';
import BaseMixin from '../../_util/BaseMixin';
import addEventListener from '../../vc-util/Dom/addEventListener';
import { initDefaultProps, findDOMNode, getSlot } from '../../_util/props-util';
import warning from '../../_util/warning';
import debounce from 'lodash-es/debounce';
import throttle from 'lodash-es/throttle';
import parentScroll from './utils/parentScroll';
import inViewport from './utils/inViewport';
import { watchEffect, defineComponent } from 'vue';
var lazyLoadProps = {
  debounce: PropTypes.looseBool,
  elementType: PropTypes.string,
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  offset: PropTypes.number,
  offsetBottom: PropTypes.number,
  offsetHorizontal: PropTypes.number,
  offsetLeft: PropTypes.number,
  offsetRight: PropTypes.number,
  offsetTop: PropTypes.number,
  offsetVertical: PropTypes.number,
  threshold: PropTypes.number,
  throttle: PropTypes.number,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
export default defineComponent({
  name: 'LazyLoad',
  mixins: [BaseMixin],
  inheritAttrs: false,
  props: initDefaultProps(lazyLoadProps, {
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
        this.lazyLoadHandler = debounce(this.lazyLoadHandler, this.throttle);
      } else {
        this.lazyLoadHandler = throttle(this.lazyLoadHandler, this.throttle);
      }
    }

    return {
      visible: false
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.$nextTick(function () {
      watchEffect(function () {
        if (!_this.visible) {
          _this.lazyLoadHandler(_this.$props);
        }
      });

      var eventNode = _this.getEventNode();

      if (_this.lazyLoadHandler.flush) {
        _this.lazyLoadHandler.flush();
      }

      _this.resizeHander = addEventListener(window, 'resize', _this.lazyLoadHandler);
      _this.scrollHander = addEventListener(eventNode, 'scroll', _this.lazyLoadHandler);
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
      return parentScroll(findDOMNode(this));
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
      var node = findDOMNode(this);
      var eventNode = this.getEventNode();

      if (inViewport(node, eventNode, offset)) {
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
    var children = getSlot(this);

    if (children.length !== 1) {
      warning(false, 'lazyLoad组件只能包含一个子元素');
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

    var elClasses = _defineProperty({
      LazyLoad: true,
      'is-visible': visible
    }, className, className);

    return _createVNode(ElementType, {
      "class": elClasses,
      "style": elStyles
    }, {
      default: function _default() {
        return [visible ? children[0] : null];
      }
    });
  }
});