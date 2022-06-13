"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _Col = _interopRequireDefault(require("../grid/Col"));

var _context = require("./context");

var _LocaleReceiver = require("../locale-provider/LocaleReceiver");

var _default3 = _interopRequireDefault(require("../locale/default"));

var _classNames2 = _interopRequireDefault(require("../_util/classNames"));

var FormItemLabel = function FormItemLabel(props, _ref) {
  var _classNames;

  var slots = _ref.slots,
      emit = _ref.emit,
      attrs = _ref.attrs;

  var _a, _b, _c, _d, _e;

  var _Object$assign = (0, _extends2.default)((0, _extends2.default)({}, props), attrs),
      prefixCls = _Object$assign.prefixCls,
      htmlFor = _Object$assign.htmlFor,
      labelCol = _Object$assign.labelCol,
      labelAlign = _Object$assign.labelAlign,
      colon = _Object$assign.colon,
      required = _Object$assign.required,
      requiredMark = _Object$assign.requiredMark;

  var _useLocaleReceiver = (0, _LocaleReceiver.useLocaleReceiver)('Form'),
      _useLocaleReceiver2 = (0, _slicedToArray2.default)(_useLocaleReceiver, 1),
      formLocale = _useLocaleReceiver2[0];

  var label = (_a = props.label) !== null && _a !== void 0 ? _a : (_b = slots.label) === null || _b === void 0 ? void 0 : _b.call(slots);
  if (!label) return null;

  var _useInjectForm = (0, _context.useInjectForm)(),
      vertical = _useInjectForm.vertical,
      contextLabelAlign = _useInjectForm.labelAlign,
      contextLabelCol = _useInjectForm.labelCol,
      contextColon = _useInjectForm.colon;

  var mergedLabelCol = labelCol || (contextLabelCol === null || contextLabelCol === void 0 ? void 0 : contextLabelCol.value) || {};
  var mergedLabelAlign = labelAlign || (contextLabelAlign === null || contextLabelAlign === void 0 ? void 0 : contextLabelAlign.value);
  var labelClsBasic = "".concat(prefixCls, "-item-label");
  var labelColClassName = (0, _classNames2.default)(labelClsBasic, mergedLabelAlign === 'left' && "".concat(labelClsBasic, "-left"), mergedLabelCol.class);
  var labelChildren = label; // Keep label is original where there should have no colon

  var computedColon = colon === true || (contextColon === null || contextColon === void 0 ? void 0 : contextColon.value) !== false && colon !== false;
  var haveColon = computedColon && !vertical.value; // Remove duplicated user input colon

  if (haveColon && typeof label === 'string' && label.trim() !== '') {
    labelChildren = label.replace(/[:|：]\s*$/, '');
  }

  labelChildren = (0, _vue.createVNode)(_vue.Fragment, null, [labelChildren, (_c = slots.tooltip) === null || _c === void 0 ? void 0 : _c.call(slots, {
    class: "".concat(prefixCls, "-item-tooltip")
  })]); // Add required mark if optional

  if (requiredMark === 'optional' && !required) {
    labelChildren = (0, _vue.createVNode)(_vue.Fragment, null, [labelChildren, (0, _vue.createVNode)("span", {
      "class": "".concat(prefixCls, "-item-optional")
    }, [((_d = formLocale.value) === null || _d === void 0 ? void 0 : _d.optional) || ((_e = _default3.default.Form) === null || _e === void 0 ? void 0 : _e.optional)])]);
  }

  var labelClassName = (0, _classNames2.default)((_classNames = {}, (0, _defineProperty2.default)(_classNames, "".concat(prefixCls, "-item-required"), required), (0, _defineProperty2.default)(_classNames, "".concat(prefixCls, "-item-required-mark-optional"), requiredMark === 'optional'), (0, _defineProperty2.default)(_classNames, "".concat(prefixCls, "-item-no-colon"), !computedColon), _classNames));
  return (0, _vue.createVNode)(_Col.default, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, mergedLabelCol), {}, {
    "class": labelColClassName
  }), {
    default: function _default() {
      return [(0, _vue.createVNode)("label", {
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
var _default2 = FormItemLabel;
exports.default = _default2;