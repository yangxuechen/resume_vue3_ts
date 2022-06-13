"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _vcResizeObserver = _interopRequireDefault(require("../vc-resize-observer"));

var _classNames = _interopRequireDefault(require("../_util/classNames"));

var _vueTypes = _interopRequireDefault(require("../_util/vue-types"));

var _context = require("./context");

var _Item = _interopRequireDefault(require("./Item"));

var _RawItem = _interopRequireDefault(require("./RawItem"));

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

var RESPONSIVE = 'responsive';
var INVALIDATE = 'invalidate';

function defaultRenderRest(omittedItems) {
  return "+ ".concat(omittedItems.length, " ...");
}

var Overflow = (0, _vue.defineComponent)({
  name: 'Overflow',
  inheritAttrs: false,
  props: {
    prefixCls: String,
    data: Array,
    itemKey: [String, Number, Function],

    /** Used for `responsive`. It will limit render node to avoid perf issue */
    itemWidth: {
      type: Number,
      default: 10
    },
    renderItem: Function,

    /** @private Do not use in your production. Render raw node that need wrap Item by developer self */
    renderRawItem: Function,
    maxCount: [Number, String],
    renderRest: Function,

    /** @private Do not use in your production. Render raw node that need wrap Item by developer self */
    renderRawRest: Function,
    suffix: _vueTypes.default.any,
    component: String,
    itemComponent: _vueTypes.default.any,

    /** @private This API may be refactor since not well design */
    onVisibleChange: Function,

    /** When set to `full`, ssr will render full items by default and remove at client side */
    ssr: String
  },
  emits: ['visibleChange'],
  setup: function setup(props, _ref) {
    var attrs = _ref.attrs,
        emit = _ref.emit;
    var fullySSR = (0, _vue.computed)(function () {
      return props.ssr === 'full';
    });
    var containerWidth = (0, _vue.ref)(null);
    var mergedContainerWidth = (0, _vue.computed)(function () {
      return containerWidth.value || 0;
    });
    var itemWidths = (0, _vue.ref)(new Map());
    var prevRestWidth = (0, _vue.ref)(0);
    var restWidth = (0, _vue.ref)(0);
    var suffixWidth = (0, _vue.ref)(0);
    var suffixFixedStart = (0, _vue.ref)(null);
    var displayCount = (0, _vue.ref)(null);
    var mergedDisplayCount = (0, _vue.computed)(function () {
      if (displayCount.value === null && fullySSR.value) {
        return Number.MAX_SAFE_INTEGER;
      }

      return displayCount.value || 0;
    });
    var restReady = (0, _vue.ref)(false);
    var itemPrefixCls = (0, _vue.computed)(function () {
      return "".concat(props.prefixCls, "-item");
    }); // Always use the max width to avoid blink

    var mergedRestWidth = (0, _vue.computed)(function () {
      return Math.max(prevRestWidth.value, restWidth.value);
    }); // ================================= Data =================================

    var isResponsive = (0, _vue.computed)(function () {
      return !!(props.data.length && props.maxCount === RESPONSIVE);
    });
    var invalidate = (0, _vue.computed)(function () {
      return props.maxCount === INVALIDATE;
    });
    /**
     * When is `responsive`, we will always render rest node to get the real width of it for calculation
     */

    var showRest = (0, _vue.computed)(function () {
      return isResponsive.value || typeof props.maxCount === 'number' && props.data.length > props.maxCount;
    });
    var mergedData = (0, _vue.computed)(function () {
      var items = props.data;

      if (isResponsive.value) {
        if (containerWidth.value === null && fullySSR.value) {
          items = props.data;
        } else {
          items = props.data.slice(0, Math.min(props.data.length, mergedContainerWidth.value / props.itemWidth));
        }
      } else if (typeof props.maxCount === 'number') {
        items = props.data.slice(0, props.maxCount);
      }

      return items;
    });
    var omittedItems = (0, _vue.computed)(function () {
      if (isResponsive.value) {
        return props.data.slice(mergedDisplayCount.value + 1);
      }

      return props.data.slice(mergedData.value.length);
    }); // ================================= Item =================================

    var getKey = function getKey(item, index) {
      var _a, _b;

      if (typeof props.itemKey === 'function') {
        return props.itemKey(item);
      }

      return (_b = props.itemKey && ((_a = item) === null || _a === void 0 ? void 0 : _a[props.itemKey])) !== null && _b !== void 0 ? _b : index;
    };

    var mergedRenderItem = (0, _vue.computed)(function () {
      return props.renderItem || function (item) {
        return item;
      };
    });

    var updateDisplayCount = function updateDisplayCount(count, notReady) {
      displayCount.value = count;

      if (!notReady) {
        restReady.value = count < props.data.length - 1;
        emit('visibleChange', count);
      }
    }; // ================================= Size =================================


    var onOverflowResize = function onOverflowResize(_, element) {
      containerWidth.value = element.clientWidth;
    };

    var registerSize = function registerSize(key, width) {
      var clone = new Map(itemWidths.value);

      if (width === null) {
        clone.delete(key);
      } else {
        clone.set(key, width);
      }

      itemWidths.value = clone;
    };

    var registerOverflowSize = function registerOverflowSize(_, width) {
      prevRestWidth.value = restWidth.value;
      restWidth.value = width;
    };

    var registerSuffixSize = function registerSuffixSize(_, width) {
      suffixWidth.value = width;
    }; // ================================ Effect ================================


    var getItemWidth = function getItemWidth(index) {
      return itemWidths.value.get(getKey(mergedData.value[index], index));
    };

    (0, _vue.watch)([mergedContainerWidth, itemWidths, restWidth, suffixWidth, function () {
      return props.itemKey;
    }, mergedData], function () {
      if (mergedContainerWidth.value && mergedRestWidth.value && mergedData.value) {
        var totalWidth = suffixWidth.value;
        var len = mergedData.value.length;
        var lastIndex = len - 1; // When data count change to 0, reset this since not loop will reach

        if (!len) {
          updateDisplayCount(0);
          suffixFixedStart.value = null;
          return;
        }

        for (var i = 0; i < len; i += 1) {
          var currentItemWidth = getItemWidth(i); // Break since data not ready

          if (currentItemWidth === undefined) {
            updateDisplayCount(i - 1, true);
            break;
          } // Find best match


          totalWidth += currentItemWidth;

          if ( // Only one means `totalWidth` is the final width
          lastIndex === 0 && totalWidth <= mergedContainerWidth.value || i === lastIndex - 1 && totalWidth + getItemWidth(lastIndex) <= mergedContainerWidth.value) {
            // Additional check if match the end
            updateDisplayCount(lastIndex);
            suffixFixedStart.value = null;
            break;
          } else if (totalWidth + mergedRestWidth.value > mergedContainerWidth.value) {
            // Can not hold all the content to show rest
            updateDisplayCount(i - 1);
            suffixFixedStart.value = totalWidth - currentItemWidth - suffixWidth.value + restWidth.value;
            break;
          }
        }

        if (props.suffix && getItemWidth(0) + suffixWidth.value > mergedContainerWidth.value) {
          suffixFixedStart.value = null;
        }
      }
    });
    return function () {
      // ================================ Render ================================
      var displayRest = restReady.value && !!omittedItems.value.length;
      var itemComponent = props.itemComponent,
          renderRawItem = props.renderRawItem,
          renderRawRest = props.renderRawRest,
          renderRest = props.renderRest,
          _props$prefixCls = props.prefixCls,
          prefixCls = _props$prefixCls === void 0 ? 'rc-overflow' : _props$prefixCls,
          suffix = props.suffix,
          _props$component = props.component,
          Component = _props$component === void 0 ? 'div' : _props$component;

      var className = attrs.class,
          style = attrs.style,
          restAttrs = __rest(attrs, ["class", "style"]);

      var suffixStyle = {};

      if (suffixFixedStart.value !== null && isResponsive.value) {
        suffixStyle = {
          position: 'absolute',
          left: "".concat(suffixFixedStart.value, "px"),
          top: 0
        };
      }

      var itemSharedProps = {
        prefixCls: itemPrefixCls.value,
        responsive: isResponsive.value,
        component: itemComponent,
        invalidate: invalidate.value
      }; // >>>>> Choice render fun by `renderRawItem`

      var internalRenderItemNode = renderRawItem ? function (item, index) {
        var key = getKey(item, index);
        return (0, _vue.createVNode)(_context.OverflowContextProvider, {
          "key": key,
          "value": (0, _extends2.default)((0, _extends2.default)({}, itemSharedProps), {
            order: index,
            item: item,
            itemKey: key,
            registerSize: registerSize,
            display: index <= mergedDisplayCount.value
          })
        }, {
          default: function _default() {
            return [renderRawItem(item, index)];
          }
        });
      } : function (item, index) {
        var key = getKey(item, index);
        return (0, _vue.createVNode)(_Item.default, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, itemSharedProps), {}, {
          "order": index,
          "key": key,
          "item": item,
          "renderItem": mergedRenderItem.value,
          "itemKey": key,
          "registerSize": registerSize,
          "display": index <= mergedDisplayCount.value
        }), null);
      }; // >>>>> Rest node

      var restNode;
      var restContextProps = {
        order: displayRest ? mergedDisplayCount.value : Number.MAX_SAFE_INTEGER,
        className: "".concat(itemPrefixCls.value, "-rest"),
        registerSize: registerOverflowSize,
        display: displayRest
      };

      if (!renderRawRest) {
        var mergedRenderRest = renderRest || defaultRenderRest;
        restNode = (0, _vue.createVNode)(_Item.default, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, itemSharedProps), restContextProps), {
          default: function _default() {
            return [typeof mergedRenderRest === 'function' ? mergedRenderRest(omittedItems.value) : mergedRenderRest];
          }
        });
      } else if (renderRawRest) {
        restNode = (0, _vue.createVNode)(_context.OverflowContextProvider, {
          "value": (0, _extends2.default)((0, _extends2.default)({}, itemSharedProps), restContextProps)
        }, {
          default: function _default() {
            return [renderRawRest(omittedItems.value)];
          }
        });
      }

      var overflowNode = (0, _vue.createVNode)(Component, (0, _objectSpread2.default)({
        "class": (0, _classNames.default)(!invalidate.value && prefixCls, className),
        "style": style
      }, restAttrs), {
        default: function _default() {
          return [mergedData.value.map(internalRenderItemNode), showRest.value ? restNode : null, suffix && (0, _vue.createVNode)(_Item.default, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, itemSharedProps), {}, {
            "order": mergedDisplayCount.value,
            "class": "".concat(itemPrefixCls.value, "-suffix"),
            "registerSize": registerSuffixSize,
            "display": true,
            "style": suffixStyle
          }), {
            default: function _default() {
              return [suffix];
            }
          })];
        }
      }); // 使用 disabled  避免结构不一致 导致子组件 rerender

      return (0, _vue.createVNode)(_vcResizeObserver.default, {
        "disabled": !isResponsive.value,
        "onResize": onOverflowResize
      }, {
        default: function _default() {
          return [overflowNode];
        }
      });
    };
  }
});
Overflow.Item = _RawItem.default;
Overflow.RESPONSIVE = RESPONSIVE;
Overflow.INVALIDATE = INVALIDATE;
var _default2 = Overflow;
exports.default = _default2;