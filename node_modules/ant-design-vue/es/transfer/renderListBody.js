import { createVNode as _createVNode } from "vue";
import { defineComponent, nextTick } from 'vue';
import raf from '../_util/raf';
import ListItem from './ListItem';
import PropTypes, { withUndefined } from '../_util/vue-types';
import { findDOMNode } from '../_util/props-util';
import { getTransitionGroupProps, TransitionGroup } from '../_util/transition';
var ListBody = defineComponent({
  name: 'ListBody',
  inheritAttrs: false,
  props: {
    prefixCls: PropTypes.string,
    filteredRenderItems: PropTypes.array.def([]),
    lazy: withUndefined(PropTypes.oneOfType([PropTypes.looseBool, PropTypes.object])),
    selectedKeys: PropTypes.array,
    disabled: PropTypes.looseBool,
    onItemSelect: PropTypes.func,
    onItemSelectAll: PropTypes.func,
    onScroll: PropTypes.func
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

      nextTick(function () {
        var lazy = _this.$props.lazy;

        if (lazy !== false) {
          var container = findDOMNode(_this);
          raf.cancel(_this.lazyId);
          _this.lazyId = raf(function () {
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

    this.mountId = raf(function () {
      _this2.mounted = true;
    });
  },
  beforeUnmount: function beforeUnmount() {
    raf.cancel(this.mountId);
    raf.cancel(this.lazyId);
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
      return _createVNode(ListItem, {
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
    var transitionProps = getTransitionGroupProps(mounted ? "".concat(prefixCls, "-content-item-highlight") : '', {
      tag: 'ul',
      class: "".concat(prefixCls, "-content"),
      onScroll: this.handleScroll
    });
    return _createVNode(TransitionGroup, transitionProps, {
      default: function _default() {
        return [items];
      }
    });
  }
});
export default (function (props) {
  return _createVNode(ListBody, props, null);
});