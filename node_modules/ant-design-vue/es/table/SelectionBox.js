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

import { computed, defineComponent } from 'vue';
import Checkbox from '../checkbox';
import Radio from '../radio';
import { SelectionBoxProps } from './interface';
import BaseMixin from '../_util/BaseMixin';
import { getOptionProps } from '../_util/props-util';
export default defineComponent({
  name: 'SelectionBox',
  mixins: [BaseMixin],
  inheritAttrs: false,
  props: SelectionBoxProps,
  setup: function setup(props) {
    return {
      checked: computed(function () {
        var store = props.store,
            defaultSelection = props.defaultSelection,
            rowIndex = props.rowIndex;
        var checked = false;

        if (store.selectionDirty) {
          checked = store.selectedRowKeys.indexOf(rowIndex) >= 0;
        } else {
          checked = store.selectedRowKeys.indexOf(rowIndex) >= 0 || defaultSelection.indexOf(rowIndex) >= 0;
        }

        return checked;
      })
    };
  },
  render: function render() {
    var _a = _extends(_extends({}, getOptionProps(this)), this.$attrs),
        type = _a.type,
        rowIndex = _a.rowIndex,
        rest = __rest(_a, ["type", "rowIndex"]);

    var checked = this.checked;

    var checkboxProps = _extends({
      checked: checked
    }, rest);

    if (type === 'radio') {
      checkboxProps.value = rowIndex;
      return _createVNode(Radio, checkboxProps, null);
    }

    return _createVNode(Checkbox, checkboxProps, null);
  }
});