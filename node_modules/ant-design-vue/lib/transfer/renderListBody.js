"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _raf = _interopRequireDefault(require("../_util/raf"));

var _ListItem = _interopRequireDefault(require("./ListItem"));

var _vueTypes = _interopRequireWildcard(require("../_util/vue-types"));

var _propsUtil = require("../_util/props-util");

var _transition = require("../_util/transition");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var ListBody = (0, _vue.defineComponent)({
  name: 'ListBody',
  inheritAttrs: false,
  props: {
    prefixCls: _vueTypes.default.string,
    filteredRenderItems: _vueTypes.default.array.def([]),
    lazy: (0, _vueTypes.withUndefined)(_vueTypes.default.oneOfType([_vueTypes.default.looseBool, _vueTypes.default.object])),
    selectedKeys: _vueTypes.default.array,
    disabled: _vueTypes.default.looseBool,
    onItemSelect: _vueTypes.default.func,
    onItemSelectAll: _vueTypes.default.func,
    onScroll: _vueTypes.default.func
  },
  setup: function setup() {
    return {
      mountId: null,
      lazyId: null
    };
  },
  data: function data() {
    return {
      mounted: false
    };
  },
  computed: {
    itemsLength: function itemsLength() {
      return this.filteredRenderItems ? this.filteredRenderItems.length : 0;
    }
  },
  watch: {
    itemsLength: function itemsLength() {
      var _this = this;

      (0, _vue.nextTick)(function () {
        var lazy = _this.$props.lazy;

        if (lazy !== false) {
          var container = (0, _propsUtil.findDOMNode)(_this);

          _raf.default.cancel(_this.lazyId);

          _this.lazyId = (0, _raf.default)(function () {
            if (container) {
              var scrollEvent = new Event('scroll', {
                bubbles: true
              });
              container.dispatchEvent(scrollEvent);
            }
          });
        }
      });
    }
  },
  mounted: function mounted() {
    var _this2 = this;

    this.mountId = (0, _raf.default)(function () {
      _this2.mounted = true;
    });
  },
  beforeUnmount: function beforeUnmount() {
    _raf.default.cancel(this.mountId);

    _raf.default.cancel(this.lazyId);
  },
  methods: {
    handleItemSelect: function handleItemSelect(item) {
      var selectedKeys = this.$props.selectedKeys;
      var checked = selectedKeys.indexOf(item.key) >= 0;
      this.$emit('itemSelect', item.key, !checked);
    },
    handleScroll: function handleScroll(e) {
      this.$emit('scroll', e);
    }
  },
  render: function render() {
    var _this3 = this;

    var mounted = this.$data.mounted;
    var _this$$props = this.$props,
        prefixCls = _this$$props.prefixCls,
        filteredRenderItems = _this$$props.filteredRenderItems,
        lazy = _this$$props.lazy,
        selectedKeys = _this$$props.selectedKeys,
        globalDisabled = _this$$props.disabled;
    var items = filteredRenderItems.map(function (_ref) {
      var renderedEl = _ref.renderedEl,
          renderedText = _ref.renderedText,
          item = _ref.item;
      var disabled = item.disabled;
      var checked = selectedKeys.indexOf(item.key) >= 0;
      return (0, _vue.createVNode)(_ListItem.default, {
        "disabled": globalDisabled || disabled,
        "key": item.key,
        "item": item,
        "lazy": lazy,
        "renderedText": renderedText,
        "renderedEl": renderedEl,
        "checked": checked,
        "prefixCls": prefixCls,
        "onClick": _this3.handleItemSelect
      }, null);
    });
    var transitionProps = (0, _transition.getTransitionGroupProps)(mounted ? "".concat(prefixCls, "-content-item-highlight") : '', {
      tag: 'ul',
      class: "".concat(prefixCls, "-content"),
      onScroll: this.handleScroll
    });
    return (0, _vue.createVNode)(_transition.TransitionGroup, transitionProps, {
      default: function _default() {
        return [items];
      }
    });
  }
});

var _default2 = function _default2(props) {
  return (0, _vue.createVNode)(ListBody, props, null);
};

exports.default = _default2;