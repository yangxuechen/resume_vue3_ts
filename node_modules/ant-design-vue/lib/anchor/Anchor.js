"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _vueTypes = _interopRequireDefault(require("../_util/vue-types"));

var _classNames2 = _interopRequireDefault(require("../_util/classNames"));

var _addEventListener = _interopRequireDefault(require("../vc-util/Dom/addEventListener"));

var _affix = _interopRequireDefault(require("../affix"));

var _scrollTo = _interopRequireDefault(require("../_util/scrollTo"));

var _getScroll = _interopRequireDefault(require("../_util/getScroll"));

var _useConfigInject2 = _interopRequireDefault(require("../_util/hooks/useConfigInject"));

var _context = _interopRequireDefault(require("./context"));

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
  prefixCls: _vueTypes.default.string,
  offsetTop: _vueTypes.default.number,
  bounds: _vueTypes.default.number,
  affix: _vueTypes.default.looseBool.def(true),
  showInkInFixed: _vueTypes.default.looseBool.def(false),
  getContainer: _vueTypes.default.func.def(getDefaultContainer),
  wrapperClass: _vueTypes.default.string,
  wrapperStyle: _vueTypes.default.style,
  getCurrentAnchor: _vueTypes.default.func,
  targetOffset: _vueTypes.default.number,
  onChange: _vueTypes.default.func,
  onClick: _vueTypes.default.func
};

var _default2 = (0, _vue.defineComponent)({
  name: 'AAnchor',
  inheritAttrs: false,
  props: anchorProps,
  emits: ['change', 'click'],
  setup: function setup(props, _ref) {
    var emit = _ref.emit,
        attrs = _ref.attrs,
        slots = _ref.slots,
        expose = _ref.expose;

    var _useConfigInject = (0, _useConfigInject2.default)('anchor', props),
        prefixCls = _useConfigInject.prefixCls,
        getTargetContainer = _useConfigInject.getTargetContainer,
        direction = _useConfigInject.direction;

    var inkNodeRef = (0, _vue.ref)();
    var anchorRef = (0, _vue.ref)();
    var state = (0, _vue.reactive)({
      links: [],
      scrollContainer: null,
      scrollEvent: null,
      animating: false
    });
    var activeLink = (0, _vue.ref)(null);
    var getContainer = (0, _vue.computed)(function () {
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
      var scrollTop = (0, _getScroll.default)(container, true);
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
      (0, _scrollTo.default)(y, {
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

    (0, _context.default)({
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
    (0, _vue.onMounted)(function () {
      (0, _vue.nextTick)(function () {
        var container = getContainer.value();
        state.scrollContainer = container;
        state.scrollEvent = (0, _addEventListener.default)(state.scrollContainer, 'scroll', handleScroll);
        handleScroll();
      });
    });
    (0, _vue.onBeforeUnmount)(function () {
      if (state.scrollEvent) {
        state.scrollEvent.remove();
      }
    });
    (0, _vue.onUpdated)(function () {
      if (state.scrollEvent) {
        var currentContainer = getContainer.value();

        if (state.scrollContainer !== currentContainer) {
          state.scrollContainer = currentContainer;
          state.scrollEvent.remove();
          state.scrollEvent = (0, _addEventListener.default)(state.scrollContainer, 'scroll', handleScroll);
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
      var inkClass = (0, _classNames2.default)("".concat(pre, "-ink-ball"), {
        visible: activeLink.value
      });
      var wrapperClass = (0, _classNames2.default)(props.wrapperClass, "".concat(pre, "-wrapper"), (0, _defineProperty2.default)({}, "".concat(pre, "-rtl"), direction.value === 'rtl'));
      var anchorClass = (0, _classNames2.default)(pre, {
        fixed: !affix && !showInkInFixed
      });
      var wrapperStyle = (0, _extends2.default)({
        maxHeight: offsetTop ? "calc(100vh - ".concat(offsetTop, "px)") : '100vh'
      }, props.wrapperStyle);
      var anchorContent = (0, _vue.createVNode)("div", {
        "class": wrapperClass,
        "style": wrapperStyle,
        "ref": anchorRef
      }, [(0, _vue.createVNode)("div", {
        "class": anchorClass
      }, [(0, _vue.createVNode)("div", {
        "class": "".concat(pre, "-ink")
      }, [(0, _vue.createVNode)("span", {
        "class": inkClass,
        "ref": inkNodeRef
      }, null)]), (_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots)])]);
      return !affix ? anchorContent : (0, _vue.createVNode)(_affix.default, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, attrs), {}, {
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

exports.default = _default2;