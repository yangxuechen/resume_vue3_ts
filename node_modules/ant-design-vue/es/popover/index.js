import _extends from "@babel/runtime/helpers/esm/extends";
import { createVNode as _createVNode } from "vue";
import { defineComponent, inject } from 'vue';
import Tooltip from '../tooltip';
import abstractTooltipProps from '../tooltip/abstractTooltipProps';
import PropTypes from '../_util/vue-types';
import { getOptionProps, getComponent, getSlot } from '../_util/props-util';
import { defaultConfigProvider } from '../config-provider';
import { withInstall } from '../_util/type';
var props = abstractTooltipProps();
var Popover = defineComponent({
  name: 'APopover',
  props: _extends(_extends({}, props), {
    prefixCls: PropTypes.string,
    transitionName: PropTypes.string.def('zoom-big'),
    content: PropTypes.any,
    title: PropTypes.any
  }),
  setup: function setup() {
    return {
      configProvider: inject('configProvider', defaultConfigProvider)
    };
  },
  methods: {
    getPopupDomNode: function getPopupDomNode() {
      return this.$refs.tooltip.getPopupDomNode();
    }
  },
  render: function render() {
    var _this = this;

    var title = this.title,
        customizePrefixCls = this.prefixCls,
        $slots = this.$slots;
    var getPrefixCls = this.configProvider.getPrefixCls;
    var prefixCls = getPrefixCls('popover', customizePrefixCls);
    var props = getOptionProps(this);
    delete props.title;
    delete props.content;

    var tooltipProps = _extends(_extends({}, props), {
      prefixCls: prefixCls,
      ref: 'tooltip',
      title: _createVNode("div", null, [(title || $slots.title) && _createVNode("div", {
        "class": "".concat(prefixCls, "-title")
      }, [getComponent(this, 'title')]), _createVNode("div", {
        "class": "".concat(prefixCls, "-inner-content")
      }, [getComponent(this, 'content')])])
    });

    return _createVNode(Tooltip, tooltipProps, {
      default: function _default() {
        return [getSlot(_this)];
      }
    });
  }
});
export default withInstall(Popover);