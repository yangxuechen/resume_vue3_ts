import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _extends from "@babel/runtime/helpers/esm/extends";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import { createVNode as _createVNode } from "vue";
import { defineComponent, nextTick, onBeforeUnmount, onMounted, onUpdated, reactive, ref, computed } from 'vue';
import PropTypes from '../_util/vue-types';
import classNames from '../_util/classNames';
import addEventListener from '../vc-util/Dom/addEventListener';
import Affix from '../affix';
import scrollTo from '../_util/scrollTo';
import getScroll from '../_util/getScroll';
import useConfigInject from '../_util/hooks/useConfigInject';
import useProvideAnchor from './context';

function getDefaultContainer() {
  return window;
}

function getOffsetTop(element, container) {
  if (!element.getClientRects().length) {
    return 0;
  }

  var rect = element.getBoundingClientRect();

  if (rect.width || rect.height) {
    if (container === window) {
      container = element.ownerDocument.documentElement;
      return rect.top - container.clientTop;
    }

    return rect.top - container.getBoundingClientRect().top;
  }

  return rect.top;
}

var sharpMatcherRegx = /#(\S+)$/;
var anchorProps = {
  prefixCls: PropTypes.string,
  offsetTop: PropTypes.number,
  bounds: PropTypes.number,
  affix: PropTypes.looseBool.def(true),
  showInkInFixed: PropTypes.looseBool.def(false),
  getContainer: PropTypes.func.def(getDefaultContainer),
  wrapperClass: PropTypes.string,
  wrapperStyle: PropTypes.style,
  getCurrentAnchor: PropTypes.func,
  targetOffset: PropTypes.number,
  onChange: PropTypes.func,
  onClick: PropTypes.func
};
export default defineComponent({
  name: 'AAnchor',
  inheritAttrs: false,
  props: anchorProps,
  emits: ['change', 'click'],
  setup: function setup(props, _ref) {
    var emit = _ref.emit,
        attrs = _ref.attrs,
        slots = _ref.slots,
        expose = _ref.expose;

    var _useConfigInject = useConfigInject('anchor', props),
        prefixCls = _useConfigInject.prefixCls,
        getTargetContainer = _useConfigInject.getTargetContainer,
        direction = _useConfigInject.direction;

    var inkNodeRef = ref();
    var anchorRef = ref();
    var state = reactive({
      links: [],
      scrollContainer: null,
      scrollEvent: null,
      animating: false
    });
    var activeLink = ref(null);
    var getContainer = computed(function () {
      var getContainer = props.getContainer;
      return getContainer || getTargetContainer.value || getDefaultContainer;
    }); // func...

    var getCurrentAnchor = function getCurrentAnchor() {
      var offsetTop = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var bounds = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 5;
      var linkSections = [];
      var container = getContainer.value();
      state.links.forEach(function (link) {
        var sharpLinkMatch = sharpMatcherRegx.exec(link.toString());

        if (!sharpLinkMatch) {
          return;
        }

        var target = document.getElementById(sharpLinkMatch[1]);

        if (target) {
          var top = getOffsetTop(target, container);

          if (top < offsetTop + bounds) {
            linkSections.push({
              link: link,
              top: top
            });
          }
        }
      });

      if (linkSections.length) {
        var maxSection = linkSections.reduce(function (prev, curr) {
          return curr.top > prev.top ? curr : prev;
        });
        return maxSection.link;
      }

      return '';
    };

    var setCurrentActiveLink = function setCurrentActiveLink(link) {
      var getCurrentAnchor = props.getCurrentAnchor;

      if (activeLink.value === link) {
        return;
      }

      activeLink.value = typeof getCurrentAnchor === 'function' ? getCurrentAnchor() : link;
      emit('change', link);
    };

    var handleScrollTo = function handleScrollTo(link) {
      var offsetTop = props.offsetTop,
          getContainer = props.getContainer,
          targetOffset = props.targetOffset;
      setCurrentActiveLink(link);
      var container = getContainer();
      var scrollTop = getScroll(container, true);
      var sharpLinkMatch = sharpMatcherRegx.exec(link);

      if (!sharpLinkMatch) {
        return;
      }

      var targetElement = document.getElementById(sharpLinkMatch[1]);

      if (!targetElement) {
        return;
      }

      var eleOffsetTop = getOffsetTop(targetElement, container);
      var y = scrollTop + eleOffsetTop;
      y -= targetOffset !== undefined ? targetOffset : offsetTop || 0;
      state.animating = true;
      scrollTo(y, {
        callback: function callback() {
          state.animating = false;
        },
        getContainer: getContainer
      });
    };

    expose({
      scrollTo: handleScrollTo
    });

    var handleScroll = function handleScroll() {
      if (state.animating) {
        return;
      }

      var offsetTop = props.offsetTop,
          bounds = props.bounds,
          targetOffset = props.targetOffset;
      var currentActiveLink = getCurrentAnchor(targetOffset !== undefined ? targetOffset : offsetTop || 0, bounds);
      setCurrentActiveLink(currentActiveLink);
    };

    var updateInk = function updateInk() {
      var linkNode = anchorRef.value.getElementsByClassName("".concat(prefixCls.value, "-link-title-active"))[0];

      if (linkNode) {
        inkNodeRef.value.style.top = "".concat(linkNode.offsetTop + linkNode.clientHeight / 2 - 4.5, "px");
      }
    };

    useProvideAnchor({
      registerLink: function registerLink(link) {
        if (!state.links.includes(link)) {
          state.links.push(link);
        }
      },
      unregisterLink: function unregisterLink(link) {
        var index = state.links.indexOf(link);

        if (index !== -1) {
          state.links.splice(index, 1);
        }
      },
      activeLink: activeLink,
      scrollTo: handleScrollTo,
      handleClick: function handleClick(e, info) {
        emit('click', e, info);
      }
    });
    onMounted(function () {
      nextTick(function () {
        var container = getContainer.value();
        state.scrollContainer = container;
        state.scrollEvent = addEventListener(state.scrollContainer, 'scroll', handleScroll);
        handleScroll();
      });
    });
    onBeforeUnmount(function () {
      if (state.scrollEvent) {
        state.scrollEvent.remove();
      }
    });
    onUpdated(function () {
      if (state.scrollEvent) {
        var currentContainer = getContainer.value();

        if (state.scrollContainer !== currentContainer) {
          state.scrollContainer = currentContainer;
          state.scrollEvent.remove();
          state.scrollEvent = addEventListener(state.scrollContainer, 'scroll', handleScroll);
          handleScroll();
        }
      }

      updateInk();
    });
    return function () {
      var _a;

      var offsetTop = props.offsetTop,
          affix = props.affix,
          showInkInFixed = props.showInkInFixed;
      var pre = prefixCls.value;
      var inkClass = classNames("".concat(pre, "-ink-ball"), {
        visible: activeLink.value
      });
      var wrapperClass = classNames(props.wrapperClass, "".concat(pre, "-wrapper"), _defineProperty({}, "".concat(pre, "-rtl"), direction.value === 'rtl'));
      var anchorClass = classNames(pre, {
        fixed: !affix && !showInkInFixed
      });

      var wrapperStyle = _extends({
        maxHeight: offsetTop ? "calc(100vh - ".concat(offsetTop, "px)") : '100vh'
      }, props.wrapperStyle);

      var anchorContent = _createVNode("div", {
        "class": wrapperClass,
        "style": wrapperStyle,
        "ref": anchorRef
      }, [_createVNode("div", {
        "class": anchorClass
      }, [_createVNode("div", {
        "class": "".concat(pre, "-ink")
      }, [_createVNode("span", {
        "class": inkClass,
        "ref": inkNodeRef
      }, null)]), (_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots)])]);

      return !affix ? anchorContent : _createVNode(Affix, _objectSpread(_objectSpread({}, attrs), {}, {
        "offsetTop": offsetTop,
        "target": getContainer.value
      }), {
        default: function _default() {
          return [anchorContent];
        }
      });
    };
  }
});