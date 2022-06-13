import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import { createVNode as _createVNode } from "vue";
import { defineComponent, ref, computed } from 'vue';
import PropTypes from '../_util/vue-types';
import { filterEmpty, flattenChildren, isEmptyContent } from '../_util/props-util';
import ArrowLeftOutlined from '@ant-design/icons-vue/ArrowLeftOutlined';
import ArrowRightOutlined from '@ant-design/icons-vue/ArrowRightOutlined';
import Breadcrumb from '../breadcrumb';
import Avatar from '../avatar';
import TransButton from '../_util/transButton';
import LocaleReceiver from '../locale-provider/LocaleReceiver';
import { withInstall } from '../_util/type';
import useConfigInject from '../_util/hooks/useConfigInject';
import classNames from '../_util/classNames';
import ResizeObserver from '../vc-resize-observer';
export var pageHeaderProps = {
  backIcon: PropTypes.VNodeChild,
  prefixCls: PropTypes.string,
  title: PropTypes.VNodeChild,
  subTitle: PropTypes.VNodeChild,
  breadcrumb: PropTypes.object,
  tags: PropTypes.any,
  footer: PropTypes.VNodeChild,
  extra: PropTypes.VNodeChild,
  avatar: PropTypes.object,
  ghost: PropTypes.looseBool,
  onBack: PropTypes.func
};
var PageHeader = defineComponent({
  name: 'APageHeader',
  props: pageHeaderProps,
  emits: ['back'],
  slots: ['backIcon', 'avatar', 'breadcrumb', 'title', 'subTitle', 'tags', 'extra', 'footer'],
  setup: function setup(props, _ref) {
    var emit = _ref.emit,
        slots = _ref.slots;

    var _useConfigInject = useConfigInject('page-header', props),
        prefixCls = _useConfigInject.prefixCls,
        direction = _useConfigInject.direction,
        pageHeader = _useConfigInject.pageHeader;

    var compact = ref(false);

    var onResize = function onResize(_ref2) {
      var width = _ref2.width;
      compact.value = width < 768;
    };

    var ghost = computed(function () {
      var _a, _b, _c;

      return (_c = (_a = props.ghost) !== null && _a !== void 0 ? _a : (_b = pageHeader.value) === null || _b === void 0 ? void 0 : _b.ghost) !== null && _c !== void 0 ? _c : true;
    });

    var getBackIcon = function getBackIcon() {
      var _a, _b, _c;

      return (_c = (_a = props.backIcon) !== null && _a !== void 0 ? _a : (_b = slots.backIcon) === null || _b === void 0 ? void 0 : _b.call(slots)) !== null && _c !== void 0 ? _c : direction.value === 'rtl' ? _createVNode(ArrowRightOutlined, null, null) : _createVNode(ArrowLeftOutlined, null, null);
    };

    var renderBack = function renderBack(backIcon) {
      if (!backIcon || !props.onBack) {
        return null;
      }

      return _createVNode(LocaleReceiver, {
        "componentName": "PageHeader",
        "children": function children(_ref3) {
          var back = _ref3.back;
          return _createVNode("div", {
            "class": "".concat(prefixCls.value, "-back")
          }, [_createVNode(TransButton, {
            "onClick": function onClick(e) {
              emit('back', e);
            },
            "class": "".concat(prefixCls.value, "-back-button"),
            "aria-label": back
          }, {
            default: function _default() {
              return [backIcon];
            }
          })]);
        }
      }, null);
    };

    var renderBreadcrumb = function renderBreadcrumb() {
      var _a;

      return props.breadcrumb ? _createVNode(Breadcrumb, props.breadcrumb, null) : (_a = slots.breadcrumb) === null || _a === void 0 ? void 0 : _a.call(slots);
    };

    var renderTitle = function renderTitle() {
      var _a, _b, _c, _d, _e, _f, _g, _h, _j;

      var avatar = props.avatar;
      var title = (_a = props.title) !== null && _a !== void 0 ? _a : (_b = slots.title) === null || _b === void 0 ? void 0 : _b.call(slots);
      var subTitle = (_c = props.subTitle) !== null && _c !== void 0 ? _c : (_d = slots.subTitle) === null || _d === void 0 ? void 0 : _d.call(slots);
      var tags = (_e = props.tags) !== null && _e !== void 0 ? _e : (_f = slots.tags) === null || _f === void 0 ? void 0 : _f.call(slots);
      var extra = (_g = props.extra) !== null && _g !== void 0 ? _g : (_h = slots.extra) === null || _h === void 0 ? void 0 : _h.call(slots);
      var headingPrefixCls = "".concat(prefixCls.value, "-heading");
      var hasHeading = title || subTitle || tags || extra; // If there is nothing, return a null

      if (!hasHeading) {
        return null;
      }

      var backIcon = getBackIcon();
      var backIconDom = renderBack(backIcon);
      var hasTitle = backIconDom || avatar || hasHeading;
      return _createVNode("div", {
        "class": headingPrefixCls
      }, [hasTitle && _createVNode("div", {
        "class": "".concat(headingPrefixCls, "-left")
      }, [backIconDom, avatar ? _createVNode(Avatar, avatar, null) : (_j = slots.avatar) === null || _j === void 0 ? void 0 : _j.call(slots), title && _createVNode("span", {
        "class": "".concat(headingPrefixCls, "-title"),
        "title": typeof title === 'string' ? title : undefined
      }, [title]), subTitle && _createVNode("span", {
        "class": "".concat(headingPrefixCls, "-sub-title"),
        "title": typeof subTitle === 'string' ? subTitle : undefined
      }, [subTitle]), tags && _createVNode("span", {
        "class": "".concat(headingPrefixCls, "-tags")
      }, [tags])]), extra && _createVNode("span", {
        "class": "".concat(headingPrefixCls, "-extra")
      }, [extra])]);
    };

    var renderFooter = function renderFooter() {
      var _a, _b;

      var footer = (_a = props.footer) !== null && _a !== void 0 ? _a : filterEmpty((_b = slots.footer) === null || _b === void 0 ? void 0 : _b.call(slots));
      return isEmptyContent(footer) ? null : _createVNode("div", {
        "class": "".concat(prefixCls.value, "-footer")
      }, [footer]);
    };

    var renderChildren = function renderChildren(children) {
      return _createVNode("div", {
        "class": "".concat(prefixCls.value, "-content")
      }, [children]);
    };

    return function () {
      var _classNames;

      var _a, _b;

      var hasBreadcrumb = ((_a = props.breadcrumb) === null || _a === void 0 ? void 0 : _a.routes) || slots.breadcrumb;
      var hasFooter = props.footer || slots.footer;
      var children = flattenChildren((_b = slots.default) === null || _b === void 0 ? void 0 : _b.call(slots));
      var className = classNames(prefixCls.value, (_classNames = {
        'has-breadcrumb': hasBreadcrumb,
        'has-footer': hasFooter
      }, _defineProperty(_classNames, "".concat(prefixCls.value, "-ghost"), ghost.value), _defineProperty(_classNames, "".concat(prefixCls.value, "-rtl"), direction.value === 'rtl'), _defineProperty(_classNames, "".concat(prefixCls.value, "-compact"), compact.value), _classNames));
      return _createVNode(ResizeObserver, {
        "onResize": onResize
      }, {
        default: function _default() {
          return [_createVNode("div", {
            "class": className
          }, [renderBreadcrumb(), renderTitle(), children.length ? renderChildren(children) : null, renderFooter()])];
        }
      });
    };
  }
});
export default withInstall(PageHeader);