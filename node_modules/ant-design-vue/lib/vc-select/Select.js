"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

var _OptionList = _interopRequireDefault(require("./OptionList"));

var _Option = _interopRequireDefault(require("./Option"));

var _OptGroup = _interopRequireDefault(require("./OptGroup"));

var _legacyUtil = require("./utils/legacyUtil");

var _valueUtil = require("./utils/valueUtil");

var _generate = _interopRequireDefault(require("./generate"));

var _warningPropsUtil = _interopRequireDefault(require("./utils/warningPropsUtil"));

var _omit = _interopRequireDefault(require("lodash/omit"));

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
var RefSelect = (0, _generate.default)({
  prefixCls: 'rc-select',
  components: {
    optionList: _OptionList.default
  },
  convertChildrenToData: _legacyUtil.convertChildrenToData,
  flattenOptions: _valueUtil.flattenOptions,
  getLabeledValue: _valueUtil.getLabeledValue,
  filterOptions: _valueUtil.filterOptions,
  isValueDisabled: _valueUtil.isValueDisabled,
  findValueOption: _valueUtil.findValueOption,
  warningProps: _warningPropsUtil.default,
  fillOptionsWithMissingValue: _valueUtil.fillOptionsWithMissingValue
});
var Select = (0, _vue.defineComponent)({
  setup: function setup(props, _ref) {
    var attrs = _ref.attrs,
        expose = _ref.expose,
        slots = _ref.slots;
    var selectRef = (0, _vue.ref)(null);
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

      return (0, _vue.createVNode)(RefSelect, (0, _objectSpread2.default)((0, _objectSpread2.default)((0, _objectSpread2.default)({
        "ref": selectRef
      }, props), attrs), {}, {
        "children": ((_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots)) || []
      }), slots);
    };
  }
});
Select.inheritAttrs = false;
Select.props = (0, _omit.default)(RefSelect.props, ['children']);
Select.Option = _Option.default;
Select.OptGroup = _OptGroup.default;
var _default = Select;
exports.default = _default;