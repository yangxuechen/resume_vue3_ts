"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.pageHeaderProps = void 0;

var _vue = require("vue");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _vueTypes = _interopRequireDefault(require("../_util/vue-types"));

var _propsUtil = require("../_util/props-util");

var _ArrowLeftOutlined = _interopRequireDefault(require("@ant-design/icons-vue/lib/icons/ArrowLeftOutlined"));

var _ArrowRightOutlined = _interopRequireDefault(require("@ant-design/icons-vue/lib/icons/ArrowRightOutlined"));

var _breadcrumb = _interopRequireDefault(require("../breadcrumb"));

var _avatar = _interopRequireDefault(require("../avatar"));

var _transButton = _interopRequireDefault(require("../_util/transButton"));

var _LocaleReceiver = _interopRequireDefault(require("../locale-provider/LocaleReceiver"));

var _type = require("../_util/type");

var _useConfigInject2 = _interopRequireDefault(require("../_util/hooks/useConfigInject"));

var _classNames2 = _interopRequireDefault(require("../_util/classNames"));

var _vcResizeObserver = _interopRequireDefault(require("../vc-resize-observer"));

var pageHeaderProps = {
  backIcon: _vueTypes.default.VNodeChild,
  prefixCls: _vueTypes.default.string,
  title: _vueTypes.default.VNodeChild,
  subTitle: _vueTypes.default.VNodeChild,
  breadcrumb: _vueTypes.default.object,
  tags: _vueTypes.default.any,
  footer: _vueTypes.default.VNodeChild,
  extra: _vueTypes.default.VNodeChild,
  avatar: _vueTypes.default.object,
  ghost: _vueTypes.default.looseBool,
  onBack: _vueTypes.default.func
};
exports.pageHeaderProps = pageHeaderProps;
var PageHeader = (0, _vue.defineComponent)({
  name: 'APageHeader',
  props: pageHeaderProps,
  emits: ['back'],
  slots: ['backIcon', 'avatar', 'breadcrumb', 'title', 'subTitle', 'tags', 'extra', 'footer'],
  setup: function setup(props, _ref) {
    var emit = _ref.emit,
        slots = _ref.slots;

    var _useConfigInject = (0, _useConfigInject2.default)('page-header', props),
        prefixCls = _useConfigInject.prefixCls,
        direction = _useConfigInject.direction,
        pageHeader = _useConfigInject.pageHeader;

    var compact = (0, _vue.ref)(false);

    var onResize = function onResize(_ref2) {
      var width = _ref2.width;
      compact.value = width < 768;
    };

    var ghost = (0, _vue.computed)(function () {
      var _a, _b, _c;

      return (_c = (_a = props.ghost) !== null && _a !== void 0 ? _a : (_b = pageHeader.value) === null || _b === void 0 ? void 0 : _b.ghost) !== null && _c !== void 0 ? _c : true;
    });

    var getBackIcon = function getBackIcon() {
      var _a, _b, _c;

      return (_c = (_a = props.backIcon) !== null && _a !== void 0 ? _a : (_b = slots.backIcon) === null || _b === void 0 ? void 0 : _b.call(slots)) !== null && _c !== void 0 ? _c : direction.value === 'rtl' ? (0, _vue.createVNode)(_ArrowRightOutlined.default, null, null) : (0, _vue.createVNode)(_ArrowLeftOutlined.default, null, null);
    };

    var renderBack = function renderBack(backIcon) {
      if (!backIcon || !props.onBack) {
        return null;
      }

      return (0, _vue.createVNode)(_LocaleReceiver.default, {
        "componentName": "PageHeader",
        "children": function children(_ref3) {
          var back = _ref3.back;
          return (0, _vue.createVNode)("div", {
            "class": "".concat(prefixCls.value, "-back")
          }, [(0, _vue.createVNode)(_transButton.default, {
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

      return props.breadcrumb ? (0, _vue.createVNode)(_breadcrumb.default, props.breadcrumb, null) : (_a = slots.breadcrumb) === null || _a === void 0 ? void 0 : _a.call(slots);
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
      return (0, _vue.createVNode)("div", {
        "class": headingPrefixCls
      }, [hasTitle && (0, _vue.createVNode)("div", {
        "class": "".concat(headingPrefixCls, "-left")
      }, [backIconDom, avatar ? (0, _vue.createVNode)(_avatar.default, avatar, null) : (_j = slots.avatar) === null || _j === void 0 ? void 0 : _j.call(slots), title && (0, _vue.createVNode)("span", {
        "class": "".concat(headingPrefixCls, "-title"),
        "title": typeof title === 'string' ? title : undefined
      }, [title]), subTitle && (0, _vue.createVNode)("span", {
        "class": "".concat(headingPrefixCls, "-sub-title"),
        "title": typeof subTitle === 'string' ? subTitle : undefined
      }, [subTitle]), tags && (0, _vue.createVNode)("span", {
        "class": "".concat(headingPrefixCls, "-tags")
      }, [tags])]), extra && (0, _vue.createVNode)("span", {
        "class": "".concat(headingPrefixCls, "-extra")
      }, [extra])]);
    };

    var renderFooter = function renderFooter() {
      var _a, _b;

      var footer = (_a = props.footer) !== null && _a !== void 0 ? _a : (0, _propsUtil.filterEmpty)((_b = slots.footer) === null || _b === void 0 ? void 0 : _b.call(slots));
      return (0, _propsUtil.isEmptyContent)(footer) ? null : (0, _vue.createVNode)("div", {
        "class": "".concat(prefixCls.value, "-footer")
      }, [footer]);
    };

    var renderChildren = function renderChildren(children) {
      return (0, _vue.createVNode)("div", {
        "class": "".concat(prefixCls.value, "-content")
      }, [children]);
    };

    return function () {
      var _classNames;

      var _a, _b;

      var hasBreadcrumb = ((_a = props.breadcrumb) === null || _a === void 0 ? void 0 : _a.routes) || slots.breadcrumb;
      var hasFooter = props.footer || slots.footer;
      var children = (0, _propsUtil.flattenChildren)((_b = slots.default) === null || _b === void 0 ? void 0 : _b.call(slots));
      var className = (0, _classNames2.default)(prefixCls.value, (_classNames = {
        'has-breadcrumb': hasBreadcrumb,
        'has-footer': hasFooter
      }, (0, _defineProperty2.default)(_classNames, "".concat(prefixCls.value, "-ghost"), ghost.value), (0, _defineProperty2.default)(_classNames, "".concat(prefixCls.value, "-rtl"), direction.value === 'rtl'), (0, _defineProperty2.default)(_classNames, "".concat(prefixCls.value, "-compact"), compact.value), _classNames));
      return (0, _vue.createVNode)(_vcResizeObserver.default, {
        "onResize": onResize
      }, {
        default: function _default() {
          return [(0, _vue.createVNode)("div", {
            "class": className
          }, [renderBreadcrumb(), renderTitle(), children.length ? renderChildren(children) : null, renderFooter()])];
        }
      });
    };
  }
});

var _default2 = (0, _type.withInstall)(PageHeader);

exports.default = _default2;