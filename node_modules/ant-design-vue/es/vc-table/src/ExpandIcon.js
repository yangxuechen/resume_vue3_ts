import { createVNode as _createVNode } from "vue";
import PropTypes from '../../_util/vue-types';
import BaseMixin from '../../_util/BaseMixin';
export default {
  name: 'ExpandIcon',
  mixins: [BaseMixin],
  inheritAttrs: false,
  props: {
    record: PropTypes.object,
    prefixCls: PropTypes.string,
    expandable: PropTypes.any,
    expanded: PropTypes.looseBool,
    needIndentSpaced: PropTypes.looseBool
  },
  methods: {
    onExpand: function onExpand(e) {
      this.__emit('expand', this.record, e);
    }
  },
  render: function render() {
    var expandable = this.expandable,
        prefixCls = this.prefixCls,
        onExpand = this.onExpand,
        needIndentSpaced = this.needIndentSpaced,
        expanded = this.expanded;

    if (expandable) {
      var expandClassName = expanded ? 'expanded' : 'collapsed';
      return _createVNode("span", {
        "class": "".concat(prefixCls, "-expand-icon ").concat(prefixCls, "-").concat(expandClassName),
        "onClick": onExpand
      }, null);
    }

    if (needIndentSpaced) {
      return _createVNode("span", {
        "class": "".concat(prefixCls, "-expand-icon ").concat(prefixCls, "-spaced")
      }, null);
    }

    return null;
  }
};