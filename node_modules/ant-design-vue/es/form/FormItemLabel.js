import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _extends from "@babel/runtime/helpers/esm/extends";
import { createVNode as _createVNode, Fragment as _Fragment } from "vue";
import Col from '../grid/Col';
import { useInjectForm } from './context';
import { useLocaleReceiver } from '../locale-provider/LocaleReceiver';
import defaultLocale from '../locale/default';
import classNames from '../_util/classNames';

var FormItemLabel = function FormItemLabel(props, _ref) {
  var _classNames;

  var slots = _ref.slots,
      emit = _ref.emit,
      attrs = _ref.attrs;

  var _a, _b, _c, _d, _e;

  var _Object$assign = _extends(_extends({}, props), attrs),
      prefixCls = _Object$assign.prefixCls,
      htmlFor = _Object$assign.htmlFor,
      labelCol = _Object$assign.labelCol,
      labelAlign = _Object$assign.labelAlign,
      colon = _Object$assign.colon,
      required = _Object$assign.required,
      requiredMark = _Object$assign.requiredMark;

  var _useLocaleReceiver = useLocaleReceiver('Form'),
      _useLocaleReceiver2 = _slicedToArray(_useLocaleReceiver, 1),
      formLocale = _useLocaleReceiver2[0];

  var label = (_a = props.label) !== null && _a !== void 0 ? _a : (_b = slots.label) === null || _b === void 0 ? void 0 : _b.call(slots);
  if (!label) return null;

  var _useInjectForm = useInjectForm(),
      vertical = _useInjectForm.vertical,
      contextLabelAlign = _useInjectForm.labelAlign,
      contextLabelCol = _useInjectForm.labelCol,
      contextColon = _useInjectForm.colon;

  var mergedLabelCol = labelCol || (contextLabelCol === null || contextLabelCol === void 0 ? void 0 : contextLabelCol.value) || {};
  var mergedLabelAlign = labelAlign || (contextLabelAlign === null || contextLabelAlign === void 0 ? void 0 : contextLabelAlign.value);
  var labelClsBasic = "".concat(prefixCls, "-item-label");
  var labelColClassName = classNames(labelClsBasic, mergedLabelAlign === 'left' && "".concat(labelClsBasic, "-left"), mergedLabelCol.class);
  var labelChildren = label; // Keep label is original where there should have no colon

  var computedColon = colon === true || (contextColon === null || contextColon === void 0 ? void 0 : contextColon.value) !== false && colon !== false;
  var haveColon = computedColon && !vertical.value; // Remove duplicated user input colon

  if (haveColon && typeof label === 'string' && label.trim() !== '') {
    labelChildren = label.replace(/[:|：]\s*$/, '');
  }

  labelChildren = _createVNode(_Fragment, null, [labelChildren, (_c = slots.tooltip) === null || _c === void 0 ? void 0 : _c.call(slots, {
    class: "".concat(prefixCls, "-item-tooltip")
  })]); // Add required mark if optional

  if (requiredMark === 'optional' && !required) {
    labelChildren = _createVNode(_Fragment, null, [labelChildren, _createVNode("span", {
      "class": "".concat(prefixCls, "-item-optional")
    }, [((_d = formLocale.value) === null || _d === void 0 ? void 0 : _d.optional) || ((_e = defaultLocale.Form) === null || _e === void 0 ? void 0 : _e.optional)])]);
  }

  var labelClassName = classNames((_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-item-required"), required), _defineProperty(_classNames, "".concat(prefixCls, "-item-required-mark-optional"), requiredMark === 'optional'), _defineProperty(_classNames, "".concat(prefixCls, "-item-no-colon"), !computedColon), _classNames));
  return _createVNode(Col, _objectSpread(_objectSpread({}, mergedLabelCol), {}, {
    "class": labelColClassName
  }), {
    default: function _default() {
      return [_createVNode("label", {
        "html-for": htmlFor,
        "class": labelClassName,
        "title": typeof label === 'string' ? label : '',
        "onClick": function onClick(e) {
          return emit('click', e);
        }
      }, [labelChildren])];
    }
  });
};

FormItemLabel.displayName = 'FormItemLabel';
FormItemLabel.inheritAttrs = false;
export default FormItemLabel;