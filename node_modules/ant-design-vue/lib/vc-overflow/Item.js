"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

var _vcResizeObserver = _interopRequireDefault(require("../vc-resize-observer"));

var _classNames = _interopRequireDefault(require("../_util/classNames"));

var _vueTypes = _interopRequireDefault(require("../_util/vue-types"));

var __rest = void 0 && (void 0).__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

var UNDEFINED = undefined;

var _default2 = (0, _vue.defineComponent)({
  name: 'Item',
  props: {
    prefixCls: String,
    item: _vueTypes.default.any,
    renderItem: Function,
    responsive: Boolean,
    itemKey: {
      type: [String, Number]
    },
    registerSize: Function,
    display: Boolean,
    order: Number,
    component: _vueTypes.default.any,
    invalidate: Boolean
  },
  setup: function setup(props, _ref) {
    var slots = _ref.slots,
        expose = _ref.expose;
    var mergedHidden = (0, _vue.computed)(function () {
      return props.responsive && !props.display;
    });
    var itemNodeRef = (0, _vue.ref)();
    expose({
      itemNodeRef: itemNodeRef
    }); // ================================ Effect ================================

    function internalRegisterSize(width) {
      props.registerSize(props.itemKey, width);
    }

    (0, _vue.onUnmounted)(function () {
      internalRegisterSize(null);
    });
    return function () {
      var _a;

      var prefixCls = props.prefixCls,
          invalidate = props.invalidate,
          item = props.item,
          renderItem = props.renderItem,
          responsive = props.responsive,
          registerSize = props.registerSize,
          itemKey = props.itemKey,
          display = props.display,
          order = props.order,
          _props$component = props.component,
          Component = _props$component === void 0 ? 'div' : _props$component,
          restProps = __rest(props, ["prefixCls", "invalidate", "item", "renderItem", "responsive", "registerSize", "itemKey", "display", "order", "component"]);

      var children = (_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots); // ================================ Render ================================

      var childNode = renderItem && item !== UNDEFINED ? renderItem(item) : children;
      var overflowStyle;

      if (!invalidate) {
        overflowStyle = {
          opacity: mergedHidden.value ? 0 : 1,
          height: mergedHidden.value ? 0 : UNDEFINED,
          overflowY: mergedHidden.value ? 'hidden' : UNDEFINED,
          order: responsive ? order : UNDEFINED,
          pointerEvents: mergedHidden.value ? 'none' : UNDEFINED,
          position: mergedHidden.value ? 'absolute' : UNDEFINED
        };
      }

      var overflowProps = {};

      if (mergedHidden.value) {
        overflowProps['aria-hidden'] = true;
      }

      var itemNode = (0, _vue.createVNode)(Component, (0, _objectSpread2.default)((0, _objectSpread2.default)((0, _objectSpread2.default)({
        "class": (0, _classNames.default)(!invalidate && prefixCls),
        "style": overflowStyle
      }, overflowProps), restProps), {}, {
        "ref": itemNodeRef
      }), {
        default: function _default() {
          return [childNode];
        }
      }); // 使用 disabled  避免结构不一致 导致子组件 rerender

      return (0, _vue.createVNode)(_vcResizeObserver.default, {
        "disabled": !responsive,
        "onResize": function onResize(_ref2) {
          var offsetWidth = _ref2.offsetWidth;
          internalRegisterSize(offsetWidth);
        }
      }, {
        default: function _default() {
          return [itemNode];
        }
      });
    };
  }
});

exports.default = _default2;