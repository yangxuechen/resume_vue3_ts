"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _vueTypes = _interopRequireDefault(require("../_util/vue-types"));

var _propsUtil = require("../_util/props-util");

var _classNames3 = _interopRequireDefault(require("../_util/classNames"));

var _useConfigInject2 = _interopRequireDefault(require("../_util/hooks/useConfigInject"));

var _context = require("./context");

var anchorLinkProps = {
  prefixCls: _vueTypes.default.string,
  href: _vueTypes.default.string.def('#'),
  title: _vueTypes.default.VNodeChild,
  target: _vueTypes.default.string
};

var _default = (0, _vue.defineComponent)({
  name: 'AAnchorLink',
  props: anchorLinkProps,
  slots: ['title'],
  setup: function setup(props, _ref) {
    var slots = _ref.slots;
    var mergedTitle = null;

    var _useInjectAnchor = (0, _context.useInjectAnchor)(),
        contextHandleClick = _useInjectAnchor.handleClick,
        scrollTo = _useInjectAnchor.scrollTo,
        unregisterLink = _useInjectAnchor.unregisterLink,
        registerLink = _useInjectAnchor.registerLink,
        activeLink = _useInjectAnchor.activeLink;

    var _useConfigInject = (0, _useConfigInject2.default)('anchor', props),
        prefixCls = _useConfigInject.prefixCls;

    var handleClick = function handleClick(e) {
      var href = props.href;
      contextHandleClick(e, {
        title: mergedTitle,
        href: href
      });
      scrollTo(href);
    };

    (0, _vue.watch)(function () {
      return props.href;
    }, function (val, oldVal) {
      (0, _vue.nextTick)(function () {
        unregisterLink(oldVal);
        registerLink(val);
      });
    });
    (0, _vue.onMounted)(function () {
      registerLink(props.href);
    });
    (0, _vue.onBeforeUnmount)(function () {
      unregisterLink(props.href);
    });
    return function () {
      var _a;

      var href = props.href,
          target = props.target;
      var pre = prefixCls.value;
      var title = (0, _propsUtil.getPropsSlot)(slots, props, 'title');
      mergedTitle = title;
      var active = activeLink.value === href;
      var wrapperClassName = (0, _classNames3.default)("".concat(pre, "-link"), (0, _defineProperty2.default)({}, "".concat(pre, "-link-active"), active));
      var titleClassName = (0, _classNames3.default)("".concat(pre, "-link-title"), (0, _defineProperty2.default)({}, "".concat(pre, "-link-title-active"), active));
      return (0, _vue.createVNode)("div", {
        "class": wrapperClassName
      }, [(0, _vue.createVNode)("a", {
        "class": titleClassName,
        "href": href,
        "title": typeof title === 'string' ? title : '',
        "target": target,
        "onClick": handleClick
      }, [title]), (_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots)]);
    };
  }
});

exports.default = _default;