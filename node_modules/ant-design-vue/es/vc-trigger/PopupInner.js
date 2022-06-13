import { createVNode as _createVNode } from "vue";
import PropTypes from '../_util/vue-types';
import LazyRenderBox from './LazyRenderBox';
export default {
  props: {
    hiddenClassName: PropTypes.string.def(''),
    prefixCls: PropTypes.string,
    visible: PropTypes.looseBool
  },
  render: function render() {
    var _this = this;

    var _a, _b;

    var _this$$props = this.$props,
        prefixCls = _this$$props.prefixCls,
        visible = _this$$props.visible,
        hiddenClassName = _this$$props.hiddenClassName;
    return _createVNode("div", {
      "class": !visible ? hiddenClassName : ''
    }, [_createVNode(LazyRenderBox, {
      "class": "".concat(prefixCls, "-content"),
      "visible": visible
    }, {
      default: function _default() {
        return [(_b = (_a = _this.$slots).default) === null || _b === void 0 ? void 0 : _b.call(_a)];
      }
    })]);
  }
};