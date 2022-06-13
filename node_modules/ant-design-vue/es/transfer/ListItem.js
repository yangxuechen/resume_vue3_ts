import _extends from "@babel/runtime/helpers/esm/extends";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import { createVNode as _createVNode } from "vue";
import PropTypes, { withUndefined } from '../_util/vue-types';
import classNames from '../_util/classNames';
import Lazyload from '../vc-lazy-load';
import Checkbox from '../checkbox';
import { defineComponent } from 'vue';

function noop() {}

export default defineComponent({
  name: 'ListItem',
  inheritAttrs: false,
  props: {
    renderedText: PropTypes.any,
    renderedEl: PropTypes.any,
    item: PropTypes.any,
    lazy: withUndefined(PropTypes.oneOfType([PropTypes.looseBool, PropTypes.object])),
    checked: PropTypes.looseBool,
    prefixCls: PropTypes.string,
    disabled: PropTypes.looseBool,
    onClick: PropTypes.func
  },
  render: function render() {
    var _classNames,
        _this = this;

    var _this$$props = this.$props,
        renderedText = _this$$props.renderedText,
        renderedEl = _this$$props.renderedEl,
        item = _this$$props.item,
        lazy = _this$$props.lazy,
        checked = _this$$props.checked,
        disabled = _this$$props.disabled,
        prefixCls = _this$$props.prefixCls;
    var className = classNames((_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-content-item"), true), _defineProperty(_classNames, "".concat(prefixCls, "-content-item-disabled"), disabled || item.disabled), _classNames));
    var title;

    if (typeof renderedText === 'string' || typeof renderedText === 'number') {
      title = String(renderedText);
    }

    var listItem = _createVNode("li", {
      "class": className,
      "title": title,
      "onClick": disabled || item.disabled ? noop : function () {
        _this.$emit('click', item);
      }
    }, [_createVNode(Checkbox, {
      "checked": checked,
      "disabled": disabled || item.disabled
    }, null), _createVNode("span", {
      "class": "".concat(prefixCls, "-content-item-text")
    }, [renderedEl])]);

    var children = null;

    if (lazy) {
      var lazyProps = _extends({
        height: 32,
        offset: 500,
        throttle: 0,
        debounce: false
      }, lazy);

      children = _createVNode(Lazyload, lazyProps, {
        default: function _default() {
          return [listItem];
        }
      });
    } else {
      children = listItem;
    }

    return children;
  }
});