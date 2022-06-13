import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import { createVNode as _createVNode } from "vue";
import PropTypes from '../../_util/vue-types';
import { getSlot } from '../../_util/props-util';
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'PanelContent',
  props: {
    prefixCls: PropTypes.string,
    isActive: PropTypes.looseBool,
    destroyInactivePanel: PropTypes.looseBool,
    forceRender: PropTypes.looseBool,
    role: PropTypes.any
  },
  data: function data() {
    return {
      _isActive: undefined
    };
  },
  render: function render() {
    var _contentCls;

    this._isActive = this.forceRender || this._isActive || this.isActive;

    if (!this._isActive) {
      return null;
    }

    var _this$$props = this.$props,
        prefixCls = _this$$props.prefixCls,
        isActive = _this$$props.isActive,
        destroyInactivePanel = _this$$props.destroyInactivePanel,
        forceRender = _this$$props.forceRender,
        role = _this$$props.role;
    var contentCls = (_contentCls = {}, _defineProperty(_contentCls, "".concat(prefixCls, "-content"), true), _defineProperty(_contentCls, "".concat(prefixCls, "-content-active"), isActive), _contentCls);
    var child = !forceRender && !isActive && destroyInactivePanel ? null : _createVNode("div", {
      "class": "".concat(prefixCls, "-content-box")
    }, [getSlot(this)]);
    return _createVNode("div", {
      "class": contentCls,
      "role": role
    }, [child]);
  }
});