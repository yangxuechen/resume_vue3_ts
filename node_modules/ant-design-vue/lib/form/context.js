"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useInjectFormItemPrefix = exports.useProvideFormItemPrefix = exports.FormItemPrefixContextKey = exports.useInjectForm = exports.useProvideForm = exports.FormContextKey = void 0;

var _vue = require("vue");

var FormContextKey = Symbol('formContextKey');
exports.FormContextKey = FormContextKey;

var useProvideForm = function useProvideForm(state) {
  (0, _vue.provide)(FormContextKey, state);
};

exports.useProvideForm = useProvideForm;

var useInjectForm = function useInjectForm() {
  return (0, _vue.inject)(FormContextKey, {
    labelAlign: (0, _vue.computed)(function () {
      return 'right';
    }),
    vertical: (0, _vue.computed)(function () {
      return false;
    }),
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    addField: function addField(_eventKey, _field) {},
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    removeField: function removeField(_eventKey) {},
    model: (0, _vue.computed)(function () {
      return undefined;
    }),
    rules: (0, _vue.computed)(function () {
      return undefined;
    }),
    requiredMark: (0, _vue.computed)(function () {
      return false;
    })
  });
};

exports.useInjectForm = useInjectForm;
var FormItemPrefixContextKey = Symbol('formItemPrefixContextKey');
exports.FormItemPrefixContextKey = FormItemPrefixContextKey;

var useProvideFormItemPrefix = function useProvideFormItemPrefix(state) {
  (0, _vue.provide)(FormItemPrefixContextKey, state);
};

exports.useProvideFormItemPrefix = useProvideFormItemPrefix;

var useInjectFormItemPrefix = function useInjectFormItemPrefix() {
  return (0, _vue.inject)(FormItemPrefixContextKey, {
    prefixCls: (0, _vue.computed)(function () {
      return '';
    })
  });
};

exports.useInjectFormItemPrefix = useInjectFormItemPrefix;