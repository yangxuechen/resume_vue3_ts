import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _extends from "@babel/runtime/helpers/esm/extends";
import { createVNode as _createVNode } from "vue";
import classNames from '../../../../_util/classNames';
import PropTypes from '../../../../_util/vue-types';
import { toTitle, UNSELECTABLE_ATTRIBUTE, UNSELECTABLE_STYLE } from '../../util';
import { getComponent } from '../../../../_util/props-util';
import BaseMixin from '../../../../_util/BaseMixin';
var Selection = {
  mixins: [BaseMixin],
  inheritAttrs: false,
  props: {
    prefixCls: PropTypes.string,
    maxTagTextLength: PropTypes.number,
    // onRemove: PropTypes.func,
    label: PropTypes.any,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    removeIcon: PropTypes.any
  },
  methods: {
    onRemove: function onRemove(event) {
      var value = this.$props.value;

      this.__emit('remove', event, value);

      event.stopPropagation();
    }
  },
  render: function render() {
    var _this$$props = this.$props,
        prefixCls = _this$$props.prefixCls,
        maxTagTextLength = _this$$props.maxTagTextLength,
        label = _this$$props.label,
        value = _this$$props.value;
    var content = label || value;

    if (maxTagTextLength && typeof content === 'string' && content.length > maxTagTextLength) {
      content = "".concat(content.slice(0, maxTagTextLength), "...");
    }

    var _this$$attrs = this.$attrs,
        className = _this$$attrs.class,
        style = _this$$attrs.style,
        onRemove = _this$$attrs.onRemove;
    return _createVNode("span", _objectSpread(_objectSpread({
      "style": _extends(_extends({}, UNSELECTABLE_STYLE), style)
    }, UNSELECTABLE_ATTRIBUTE), {}, {
      "role": "menuitem",
      "class": classNames("".concat(prefixCls, "-selection-item"), className),
      "title": toTitle(label)
    }), [_createVNode("span", {
      "class": "".concat(prefixCls, "-selection-item-content")
    }, [content]), onRemove && _createVNode("span", {
      "class": "".concat(prefixCls, "-selection-item-remove"),
      "onClick": this.onRemove
    }, [getComponent(this, 'removeIcon')])]);
  }
};
export default Selection;