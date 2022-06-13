import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import { createVNode as _createVNode, resolveDirective as _resolveDirective } from "vue";

/**
 * To match accessibility requirement, we always provide an input in the component.
 * Other element will not set `tabIndex` to avoid `onBlur` sequence problem.
 * For focused select, we set `aria-live="polite"` to update the accessibility content.
 *
 * ref:
 * - keyboard: https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/listbox_role#Keyboard_interactions
 *
 * New api:
 * - listHeight
 * - listItemHeight
 * - component
 *
 * Remove deprecated api:
 * - multiple
 * - tags
 * - combobox
 * - firstActiveValue
 * - dropdownMenuStyle
 * - openClassName (Not list in api)
 *
 * Update:
 * - `backfill` only support `combobox` mode
 * - `combobox` mode not support `labelInValue` since it's meaningless
 * - `getInputElement` only support `combobox` mode
 * - `onChange` return OptionData instead of ReactNode
 * - `filterOption` `onChange` `onSelect` accept OptionData instead of ReactNode
 * - `combobox` mode trigger `onChange` will get `undefined` if no `value` match in Option
 * - `combobox` mode not support `optionLabelProp`
 */
import SelectOptionList from './OptionList';
import Option from './Option';
import OptGroup from './OptGroup';
import { convertChildrenToData as convertSelectChildrenToData } from './utils/legacyUtil';
import { getLabeledValue as getSelectLabeledValue, filterOptions as selectDefaultFilterOptions, isValueDisabled as isSelectValueDisabled, findValueOption as findSelectValueOption, flattenOptions, fillOptionsWithMissingValue } from './utils/valueUtil';
import generateSelector from './generate';
import warningProps from './utils/warningPropsUtil';
import { defineComponent, ref } from 'vue';
import omit from 'lodash-es/omit';
var RefSelect = generateSelector({
  prefixCls: 'rc-select',
  components: {
    optionList: SelectOptionList
  },
  convertChildrenToData: convertSelectChildrenToData,
  flattenOptions: flattenOptions,
  getLabeledValue: getSelectLabeledValue,
  filterOptions: selectDefaultFilterOptions,
  isValueDisabled: isSelectValueDisabled,
  findValueOption: findSelectValueOption,
  warningProps: warningProps,
  fillOptionsWithMissingValue: fillOptionsWithMissingValue
});
var Select = defineComponent({
  setup: function setup(props, _ref) {
    var attrs = _ref.attrs,
        expose = _ref.expose,
        slots = _ref.slots;
    var selectRef = ref(null);
    expose({
      focus: function focus() {
        var _a;

        (_a = selectRef.value) === null || _a === void 0 ? void 0 : _a.focus();
      },
      blur: function blur() {
        var _a;

        (_a = selectRef.value) === null || _a === void 0 ? void 0 : _a.blur();
      }
    });
    return function () {
      var _a;

      return _createVNode(RefSelect, _objectSpread(_objectSpread(_objectSpread({
        "ref": selectRef
      }, props), attrs), {}, {
        "children": ((_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots)) || []
      }), slots);
    };
  }
});
Select.inheritAttrs = false;
Select.props = omit(RefSelect.props, ['children']);
Select.Option = Option;
Select.OptGroup = OptGroup;
export default Select;