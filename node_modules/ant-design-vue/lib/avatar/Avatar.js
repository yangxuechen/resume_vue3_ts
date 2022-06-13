"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.avatarProps = void 0;

var _vue = require("vue");

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _type = require("../_util/type");

var _propsUtil = require("../_util/props-util");

var _vueTypes = _interopRequireDefault(require("../_util/vue-types"));

var _useBreakpoint = _interopRequireDefault(require("../_util/hooks/useBreakpoint"));

var _responsiveObserve = require("../_util/responsiveObserve");

var _useConfigInject2 = _interopRequireDefault(require("../_util/hooks/useConfigInject"));

var _vcResizeObserver = _interopRequireDefault(require("../vc-resize-observer"));

var _useSize = require("../_util/hooks/useSize");

var avatarProps = {
  prefixCls: _vueTypes.default.string,
  shape: _vueTypes.default.oneOf((0, _type.tuple)('circle', 'square')).def('circle'),
  size: {
    type: [Number, String, Object],
    default: function _default() {
      return 'default';
    }
  },
  src: _vueTypes.default.string,

  /** Srcset of image avatar */
  srcset: _vueTypes.default.string,
  icon: _vueTypes.default.VNodeChild,
  alt: _vueTypes.default.string,
  gap: _vueTypes.default.number,
  draggable: _vueTypes.default.bool,
  loadError: {
    type: Function
  }
};
exports.avatarProps = avatarProps;
var Avatar = (0, _vue.defineComponent)({
  name: 'AAvatar',
  inheritAttrs: false,
  props: avatarProps,
  slots: ['icon'],
  setup: function setup(props, _ref) {
    var slots = _ref.slots,
        attrs = _ref.attrs;
    var isImgExist = (0, _vue.ref)(true);
    var isMounted = (0, _vue.ref)(false);
    var scale = (0, _vue.ref)(1);
    var avatarChildrenRef = (0, _vue.ref)(null);
    var avatarNodeRef = (0, _vue.ref)(null);

    var _useConfigInject = (0, _useConfigInject2.default)('avatar', props),
        prefixCls = _useConfigInject.prefixCls;

    var groupSize = (0, _useSize.useInjectSize)();
    var screens = (0, _useBreakpoint.default)();
    var responsiveSize = (0, _vue.computed)(function () {
      if ((0, _typeof2.default)(props.size) !== 'object') {
        return undefined;
      }

      var currentBreakpoint = _responsiveObserve.responsiveArray.find(function (screen) {
        return screens.value[screen];
      });

      var currentSize = props.size[currentBreakpoint];
      return currentSize;
    });

    var responsiveSizeStyle = function responsiveSizeStyle(hasIcon) {
      if (responsiveSize.value) {
        return {
          width: "".concat(responsiveSize.value, "px"),
          height: "".concat(responsiveSize.value, "px"),
          lineHeight: "".concat(responsiveSize.value, "px"),
          fontSize: "".concat(hasIcon ? responsiveSize.value / 2 : 18, "px")
        };
      }

      return {};
    };

    var setScaleParam = function setScaleParam() {
      if (!avatarChildrenRef.value || !avatarNodeRef.value) {
        return;
      }

      var childrenWidth = avatarChildrenRef.value.offsetWidth; // offsetWidth avoid affecting be transform scale

      var nodeWidth = avatarNodeRef.value.offsetWidth; // denominator is 0 is no meaning

      if (childrenWidth !== 0 && nodeWidth !== 0) {
        var _props$gap = props.gap,
            gap = _props$gap === void 0 ? 4 : _props$gap;

        if (gap * 2 < nodeWidth) {
          scale.value = nodeWidth - gap * 2 < childrenWidth ? (nodeWidth - gap * 2) / childrenWidth : 1;
        }
      }
    };

    var handleImgLoadError = function handleImgLoadError() {
      var loadError = props.loadError;
      var errorFlag = loadError === null || loadError === void 0 ? void 0 : loadError();

      if (errorFlag !== false) {
        isImgExist.value = false;
      }
    };

    (0, _vue.watch)(function () {
      return props.src;
    }, function () {
      (0, _vue.nextTick)(function () {
        isImgExist.value = true;
        scale.value = 1;
      });
    });
    (0, _vue.watch)(function () {
      return props.gap;
    }, function () {
      (0, _vue.nextTick)(function () {
        setScaleParam();
      });
    });
    (0, _vue.onMounted)(function () {
      (0, _vue.nextTick)(function () {
        setScaleParam();
        isMounted.value = true;
      });
    });
    return function () {
      var _classString;

      var _a;

      var shape = props.shape,
          customSize = props.size,
          src = props.src,
          alt = props.alt,
          srcset = props.srcset,
          draggable = props.draggable;
      var icon = (0, _propsUtil.getPropsSlot)(slots, props, 'icon');
      var pre = prefixCls.value;
      var size = customSize === 'default' ? groupSize.value : customSize;
      var classString = (_classString = {}, (0, _defineProperty2.default)(_classString, "".concat(attrs.class), !!attrs.class), (0, _defineProperty2.default)(_classString, pre, true), (0, _defineProperty2.default)(_classString, "".concat(pre, "-lg"), size === 'large'), (0, _defineProperty2.default)(_classString, "".concat(pre, "-sm"), size === 'small'), (0, _defineProperty2.default)(_classString, "".concat(pre, "-").concat(shape), shape), (0, _defineProperty2.default)(_classString, "".concat(pre, "-image"), src && isImgExist.value), (0, _defineProperty2.default)(_classString, "".concat(pre, "-icon"), icon), _classString);
      var sizeStyle = typeof size === 'number' ? {
        width: "".concat(size, "px"),
        height: "".concat(size, "px"),
        lineHeight: "".concat(size, "px"),
        fontSize: icon ? "".concat(size / 2, "px") : '18px'
      } : {};
      var children = (_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots);
      var childrenToRender;

      if (src && isImgExist.value) {
        childrenToRender = (0, _vue.createVNode)("img", {
          "draggable": draggable,
          "src": src,
          "srcset": srcset,
          "onError": handleImgLoadError,
          "alt": alt
        }, null);
      } else if (icon) {
        childrenToRender = icon;
      } else if (isMounted.value || scale.value !== 1) {
        var transformString = "scale(".concat(scale.value, ") translateX(-50%)");
        var childrenStyle = {
          msTransform: transformString,
          WebkitTransform: transformString,
          transform: transformString
        };
        var sizeChildrenStyle = typeof size === 'number' ? {
          lineHeight: "".concat(size, "px")
        } : {};
        childrenToRender = (0, _vue.createVNode)(_vcResizeObserver.default, {
          "onResize": setScaleParam
        }, {
          default: function _default() {
            return [(0, _vue.createVNode)("span", {
              "class": "".concat(pre, "-string"),
              "ref": avatarChildrenRef,
              "style": (0, _extends2.default)((0, _extends2.default)({}, sizeChildrenStyle), childrenStyle)
            }, [children])];
          }
        });
      } else {
        childrenToRender = (0, _vue.createVNode)("span", {
          "class": "".concat(pre, "-string"),
          "ref": avatarChildrenRef,
          "style": {
            opacity: 0
          }
        }, [children]);
      }

      return (0, _vue.createVNode)("span", (0, _objectSpread2.default)((0, _objectSpread2.default)({}, attrs), {}, {
        "ref": avatarNodeRef,
        "class": classString,
        "style": (0, _extends2.default)((0, _extends2.default)((0, _extends2.default)({}, sizeStyle), responsiveSizeStyle(!!icon)), attrs.style)
      }), [childrenToRender]);
    };
  }
});
var _default2 = Avatar;
exports.default = _default2;