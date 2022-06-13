import _extends from "@babel/runtime/helpers/esm/extends";
import { createVNode as _createVNode } from "vue";

var __rest = this && this.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

import { defineComponent } from 'vue';
import { getOptionProps, getSlot } from '../_util/props-util';
import Upload from './Upload';
import { UploadProps } from './interface';
export default defineComponent({
  name: 'AUploadDragger',
  inheritAttrs: false,
  props: UploadProps,
  render: function render() {
    var _this = this;

    var props = getOptionProps(this);

    var height = props.height,
        restProps = __rest(props, ["height"]);

    var _a = this.$attrs,
        style = _a.style,
        restAttrs = __rest(_a, ["style"]);

    var draggerProps = _extends(_extends(_extends({}, restProps), restAttrs), {
      type: 'drag',
      style: _extends(_extends({}, style), {
        height: height
      })
    });

    return _createVNode(Upload, draggerProps, {
      default: function _default() {
        return [getSlot(_this)];
      }
    });
  }
});