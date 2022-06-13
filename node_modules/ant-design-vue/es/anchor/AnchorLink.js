import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import { createVNode as _createVNode } from "vue";
import { defineComponent, nextTick, onBeforeUnmount, onMounted, watch } from 'vue';
import PropTypes from '../_util/vue-types';
import { getPropsSlot } from '../_util/props-util';
import classNames from '../_util/classNames';
import useConfigInject from '../_util/hooks/useConfigInject';
import { useInjectAnchor } from './context';
var anchorLinkProps = {
  prefixCls: PropTypes.string,
  href: PropTypes.string.def('#'),
  title: PropTypes.VNodeChild,
  target: PropTypes.string
};
export default defineComponent({
  name: 'AAnchorLink',
  props: anchorLinkProps,
  slots: ['title'],
  setup: function setup(props, _ref) {
    var slots = _ref.slots;
    var mergedTitle = null;

    var _useInjectAnchor = useInjectAnchor(),
        contextHandleClick = _useInjectAnchor.handleClick,
        scrollTo = _useInjectAnchor.scrollTo,
        unregisterLink = _useInjectAnchor.unregisterLink,
        registerLink = _useInjectAnchor.registerLink,
        activeLink = _useInjectAnchor.activeLink;

    var _useConfigInject = useConfigInject('anchor', props),
        prefixCls = _useConfigInject.prefixCls;

    var handleClick = function handleClick(e) {
      var href = props.href;
      contextHandleClick(e, {
        title: mergedTitle,
        href: href
      });
      scrollTo(href);
    };

    watch(function () {
      return props.href;
    }, function (val, oldVal) {
      nextTick(function () {
        unregisterLink(oldVal);
        registerLink(val);
      });
    });
    onMounted(function () {
      registerLink(props.href);
    });
    onBeforeUnmount(function () {
      unregisterLink(props.href);
    });
    return function () {
      var _a;

      var href = props.href,
          target = props.target;
      var pre = prefixCls.value;
      var title = getPropsSlot(slots, props, 'title');
      mergedTitle = title;
      var active = activeLink.value === href;
      var wrapperClassName = classNames("".concat(pre, "-link"), _defineProperty({}, "".concat(pre, "-link-active"), active));
      var titleClassName = classNames("".concat(pre, "-link-title"), _defineProperty({}, "".concat(pre, "-link-title-active"), active));
      return _createVNode("div", {
        "class": wrapperClassName
      }, [_createVNode("a", {
        "class": titleClassName,
        "href": href,
        "title": typeof title === 'string' ? title : '',
        "target": target,
        "onClick": handleClick
      }, [title]), (_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots)]);
    };
  }
});