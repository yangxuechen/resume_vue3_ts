import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _extends from "@babel/runtime/helpers/esm/extends";
import { createVNode as _createVNode } from "vue";
import debounce from 'lodash-es/debounce';
import ResizeObserver from 'resize-observer-polyfill';
import PropTypes from '../../_util/vue-types';
import BaseMixin from '../../_util/BaseMixin';
import { getComponent, getSlot } from '../../_util/props-util';
import { setTransform, isTransform3dSupported } from './utils';
export default {
  name: 'ScrollableTabBarNode',
  mixins: [BaseMixin],
  inheritAttrs: false,
  props: {
    activeKey: PropTypes.any,
    getRef: PropTypes.func.def(function () {}),
    saveRef: PropTypes.func.def(function () {}),
    tabBarPosition: PropTypes.oneOf(['left', 'right', 'top', 'bottom']).def('left'),
    prefixCls: PropTypes.string.def(''),
    scrollAnimated: PropTypes.looseBool.def(true),
    navWrapper: PropTypes.func.def(function (arg) {
      return arg;
    }),
    prevIcon: PropTypes.any,
    nextIcon: PropTypes.any,
    direction: PropTypes.string
  },
  data: function data() {
    this.offset = 0;
    this.prevProps = _extends({}, this.$props);
    return {
      next: false,
      prev: false
    };
  },
  watch: {
    tabBarPosition: function tabBarPosition() {
      var _this = this;

      this.tabBarPositionChange = true;
      this.$nextTick(function () {
        _this.setOffset(0);
      });
    }
  },
  mounted: function mounted() {
    var _this2 = this;

    this.$nextTick(function () {
      _this2.updatedCal();

      _this2.debouncedResize = debounce(function () {
        _this2.setNextPrev();

        _this2.scrollToActiveTab();
      }, 200);
      _this2.resizeObserver = new ResizeObserver(_this2.debouncedResize);

      _this2.resizeObserver.observe(_this2.$props.getRef('container'));
    });
  },
  updated: function updated() {
    var _this3 = this;

    this.$nextTick(function () {
      _this3.updatedCal(_this3.prevProps);

      _this3.prevProps = _extends({}, _this3.$props);
    });
  },
  beforeUnmount: function beforeUnmount() {
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
    }

    if (this.debouncedResize && this.debouncedResize.cancel) {
      this.debouncedResize.cancel();
    }
  },
  methods: {
    updatedCal: function updatedCal(prevProps) {
      var _this4 = this;

      var props = this.$props;

      if (prevProps && prevProps.tabBarPosition !== props.tabBarPosition) {
        this.setOffset(0);
        return;
      } // wait next, prev show hide


      if (this.isNextPrevShown(this.$data) !== this.isNextPrevShown(this.setNextPrev())) {
        this.$forceUpdate();
        this.$nextTick(function () {
          _this4.scrollToActiveTab();
        });
      } else if (!prevProps || props.activeKey !== prevProps.activeKey) {
        // can not use props.activeKey
        this.scrollToActiveTab();
      }
    },
    setNextPrev: function setNextPrev() {
      var navNode = this.$props.getRef('nav');
      var navTabsContainer = this.$props.getRef('navTabsContainer');
      var navNodeWH = this.getScrollWH(navTabsContainer || navNode); // Add 1px to fix `offsetWidth` with decimal in Chrome not correct handle
      // https://github.com/ant-design/ant-design/issues/13423

      var containerWH = this.getOffsetWH(this.$props.getRef('container')) + 1;
      var navWrapNodeWH = this.getOffsetWH(this.$props.getRef('navWrap'));
      var offset = this.offset;
      var minOffset = containerWH - navNodeWH;
      var next = this.next,
          prev = this.prev;

      if (minOffset >= 0) {
        next = false;
        this.setOffset(0, false);
        offset = 0;
      } else if (minOffset < offset) {
        next = true;
      } else {
        next = false; // Fix https://github.com/ant-design/ant-design/issues/8861
        // Test with container offset which is stable
        // and set the offset of the nav wrap node

        var realOffset = navWrapNodeWH - navNodeWH;
        this.setOffset(realOffset, false);
        offset = realOffset;
      }

      if (offset < 0) {
        prev = true;
      } else {
        prev = false;
      }

      this.setNext(next);
      this.setPrev(prev);
      return {
        next: next,
        prev: prev
      };
    },
    getOffsetWH: function getOffsetWH(node) {
      var tabBarPosition = this.$props.tabBarPosition;
      var prop = 'offsetWidth';

      if (tabBarPosition === 'left' || tabBarPosition === 'right') {
        prop = 'offsetHeight';
      }

      return node[prop];
    },
    getScrollWH: function getScrollWH(node) {
      var tabBarPosition = this.tabBarPosition;
      var prop = 'scrollWidth';

      if (tabBarPosition === 'left' || tabBarPosition === 'right') {
        prop = 'scrollHeight';
      }

      return node[prop];
    },
    getOffsetLT: function getOffsetLT(node) {
      var tabBarPosition = this.$props.tabBarPosition;
      var prop = 'left';

      if (tabBarPosition === 'left' || tabBarPosition === 'right') {
        prop = 'top';
      }

      return node.getBoundingClientRect()[prop];
    },
    setOffset: function setOffset(offset) {
      var checkNextPrev = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var target = Math.min(0, offset);

      if (this.offset !== target) {
        this.offset = target;
        var navOffset = {};
        var tabBarPosition = this.$props.tabBarPosition;
        var navStyle = this.$props.getRef('nav').style;
        var transformSupported = isTransform3dSupported(navStyle);

        if (tabBarPosition === 'left' || tabBarPosition === 'right') {
          if (transformSupported) {
            navOffset = {
              value: "translate3d(0,".concat(target, "px,0)")
            };
          } else {
            navOffset = {
              name: 'top',
              value: "".concat(target, "px")
            };
          }
        } else if (transformSupported) {
          if (this.$props.direction === 'rtl') {
            target = -target;
          }

          navOffset = {
            value: "translate3d(".concat(target, "px,0,0)")
          };
        } else {
          navOffset = {
            name: 'left',
            value: "".concat(target, "px")
          };
        }

        if (transformSupported) {
          setTransform(navStyle, navOffset.value);
        } else {
          navStyle[navOffset.name] = navOffset.value;
        }

        if (checkNextPrev) {
          this.setNextPrev();
        }
      }
    },
    setPrev: function setPrev(v) {
      if (this.prev !== v) {
        this.prev = v;
      }
    },
    setNext: function setNext(v) {
      if (this.next !== v) {
        this.next = v;
      }
    },
    isNextPrevShown: function isNextPrevShown(state) {
      if (state) {
        return state.next || state.prev;
      }

      return this.next || this.prev;
    },
    prevTransitionEnd: function prevTransitionEnd(e) {
      if (e.propertyName !== 'opacity') {
        return;
      }

      var container = this.$props.getRef('container');
      this.scrollToActiveTab({
        target: container,
        currentTarget: container
      });
    },
    scrollToActiveTab: function scrollToActiveTab(e) {
      var activeTab = this.$props.getRef('activeTab');
      var navWrap = this.$props.getRef('navWrap');

      if (e && e.target !== e.currentTarget || !activeTab) {
        return;
      } // when not scrollable or enter scrollable first time, don't emit scrolling


      var needToSroll = this.isNextPrevShown() && this.lastNextPrevShown;
      this.lastNextPrevShown = this.isNextPrevShown();

      if (!needToSroll) {
        return;
      }

      var activeTabWH = this.getScrollWH(activeTab);
      var navWrapNodeWH = this.getOffsetWH(navWrap);
      var offset = this.offset;
      var wrapOffset = this.getOffsetLT(navWrap);
      var activeTabOffset = this.getOffsetLT(activeTab);

      if (wrapOffset > activeTabOffset) {
        offset += wrapOffset - activeTabOffset;
        this.setOffset(offset);
      } else if (wrapOffset + navWrapNodeWH < activeTabOffset + activeTabWH) {
        offset -= activeTabOffset + activeTabWH - (wrapOffset + navWrapNodeWH);
        this.setOffset(offset);
      }
    },
    prevClick: function prevClick(e) {
      this.__emit('prevClick', e);

      var navWrapNode = this.$props.getRef('navWrap');
      var navWrapNodeWH = this.getOffsetWH(navWrapNode);
      var offset = this.offset;
      this.setOffset(offset + navWrapNodeWH);
    },
    nextClick: function nextClick(e) {
      this.__emit('nextClick', e);

      var navWrapNode = this.$props.getRef('navWrap');
      var navWrapNodeWH = this.getOffsetWH(navWrapNode);
      var offset = this.offset;
      this.setOffset(offset - navWrapNodeWH);
    }
  },
  render: function render() {
    var _ref, _ref2, _navClasses, _ref3;

    var next = this.next,
        prev = this.prev;
    var _this$$props = this.$props,
        prefixCls = _this$$props.prefixCls,
        scrollAnimated = _this$$props.scrollAnimated,
        navWrapper = _this$$props.navWrapper;
    var prevIcon = getComponent(this, 'prevIcon');
    var nextIcon = getComponent(this, 'nextIcon');
    var showNextPrev = prev || next;

    var prevButton = _createVNode("span", {
      "onClick": prev && this.prevClick,
      "unselectable": "unselectable",
      "class": (_ref = {}, _defineProperty(_ref, "".concat(prefixCls, "-tab-prev"), 1), _defineProperty(_ref, "".concat(prefixCls, "-tab-btn-disabled"), !prev), _defineProperty(_ref, "".concat(prefixCls, "-tab-arrow-show"), showNextPrev), _ref),
      "onTransitionend": this.prevTransitionEnd
    }, [prevIcon || _createVNode("span", {
      "class": "".concat(prefixCls, "-tab-prev-icon")
    }, null)]);

    var nextButton = _createVNode("span", {
      "onClick": next && this.nextClick,
      "unselectable": "unselectable",
      "class": (_ref2 = {}, _defineProperty(_ref2, "".concat(prefixCls, "-tab-next"), 1), _defineProperty(_ref2, "".concat(prefixCls, "-tab-btn-disabled"), !next), _defineProperty(_ref2, "".concat(prefixCls, "-tab-arrow-show"), showNextPrev), _ref2)
    }, [nextIcon || _createVNode("span", {
      "class": "".concat(prefixCls, "-tab-next-icon")
    }, null)]);

    var navClassName = "".concat(prefixCls, "-nav");
    var navClasses = (_navClasses = {}, _defineProperty(_navClasses, navClassName, true), _defineProperty(_navClasses, scrollAnimated ? "".concat(navClassName, "-animated") : "".concat(navClassName, "-no-animated"), true), _navClasses);
    return _createVNode("div", {
      "class": (_ref3 = {}, _defineProperty(_ref3, "".concat(prefixCls, "-nav-container"), 1), _defineProperty(_ref3, "".concat(prefixCls, "-nav-container-scrolling"), showNextPrev), _ref3),
      "key": "container",
      "ref": this.saveRef('container')
    }, [prevButton, nextButton, _createVNode("div", {
      "class": "".concat(prefixCls, "-nav-wrap"),
      "ref": this.saveRef('navWrap')
    }, [_createVNode("div", {
      "class": "".concat(prefixCls, "-nav-scroll")
    }, [_createVNode("div", {
      "class": navClasses,
      "ref": this.saveRef('nav')
    }, [navWrapper(getSlot(this))])])])]);
  }
};