import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _extends from "@babel/runtime/helpers/esm/extends";
import { createVNode as _createVNode } from "vue";
import Dialog from './Dialog';
import getDialogPropTypes from './IDialogPropTypes';
import Portal from '../_util/PortalWrapper';
import { getSlot } from '../_util/props-util';
import { defineComponent } from 'vue';
var IDialogPropTypes = getDialogPropTypes();
var DialogWrap = defineComponent({
  inheritAttrs: false,
  props: _extends(_extends({}, IDialogPropTypes), {
    visible: IDialogPropTypes.visible.def(false)
  }),
  render: function render() {
    var _this = this;

    var _this$$props = this.$props,
        visible = _this$$props.visible,
        getContainer = _this$$props.getContainer,
        forceRender = _this$$props.forceRender;

    var dialogProps = _extends(_extends(_extends({}, this.$props), this.$attrs), {
      ref: '_component',
      key: 'dialog'
    }); // 渲染在当前 dom 里；


    if (getContainer === false) {
      return _createVNode(Dialog, _objectSpread(_objectSpread({}, dialogProps), {}, {
        "getOpenCount": function getOpenCount() {
          return 2;
        }
      }), {
        default: function _default() {
          return [getSlot(_this)];
        }
      });
    }

    return _createVNode(Portal, {
      "visible": visible,
      "forceRender": forceRender,
      "getContainer": getContainer,
      "children": function children(childProps) {
        dialogProps = _extends(_extends({}, dialogProps), childProps);
        return _createVNode(Dialog, dialogProps, {
          default: function _default() {
            return [getSlot(_this)];
          }
        });
      }
    }, null);
  }
});
export default DialogWrap;