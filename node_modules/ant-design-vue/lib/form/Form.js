"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.formProps = void 0;

var _vue = require("vue");

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _vueTypes = _interopRequireDefault(require("../_util/vue-types"));

var _classNames2 = _interopRequireDefault(require("../_util/classNames"));

var _warning = _interopRequireDefault(require("../_util/warning"));

var _FormItem = _interopRequireDefault(require("./FormItem"));

var _valueUtil = require("./utils/valueUtil");

var _messages = require("./utils/messages");

var _asyncUtil = require("./utils/asyncUtil");

var _typeUtil = require("./utils/typeUtil");

var _isEqual = _interopRequireDefault(require("lodash/isEqual"));

var _scrollIntoViewIfNeeded = _interopRequireDefault(require("scroll-into-view-if-needed"));

var _initDefaultProps = _interopRequireDefault(require("../_util/props-util/initDefaultProps"));

var _type = require("../_util/type");

var _useSize = require("../_util/hooks/useSize");

var _useConfigInject2 = _interopRequireDefault(require("../_util/hooks/useConfigInject"));

var _context = require("./context");

var _useForm = _interopRequireDefault(require("./useForm"));

var formProps = {
  layout: _vueTypes.default.oneOf((0, _type.tuple)('horizontal', 'inline', 'vertical')),
  labelCol: {
    type: Object
  },
  wrapperCol: {
    type: Object
  },
  colon: _vueTypes.default.looseBool,
  labelAlign: _vueTypes.default.oneOf((0, _type.tuple)('left', 'right')),
  prefixCls: _vueTypes.default.string,
  requiredMark: {
    type: [String, Boolean],
    default: undefined
  },

  /** @deprecated Will warning in future branch. Pls use `requiredMark` instead. */
  hideRequiredMark: _vueTypes.default.looseBool,
  model: _vueTypes.default.object,
  rules: {
    type: Object
  },
  validateMessages: _vueTypes.default.object,
  validateOnRuleChange: _vueTypes.default.looseBool,
  // 提交失败自动滚动到第一个错误字段
  scrollToFirstError: {
    type: [Boolean, Object]
  },
  onSubmit: _vueTypes.default.func,
  onFinish: _vueTypes.default.func,
  onFinishFailed: _vueTypes.default.func,
  name: _vueTypes.default.string,
  validateTrigger: {
    type: [String, Array]
  },
  size: {
    type: String
  }
};
exports.formProps = formProps;

function isEqualName(name1, name2) {
  return (0, _isEqual.default)((0, _typeUtil.toArray)(name1), (0, _typeUtil.toArray)(name2));
}

var Form = (0, _vue.defineComponent)({
  name: 'AForm',
  inheritAttrs: false,
  props: (0, _initDefaultProps.default)(formProps, {
    layout: 'horizontal',
    hideRequiredMark: false,
    colon: true
  }),
  Item: _FormItem.default,
  useForm: _useForm.default,
  emits: ['finishFailed', 'submit', 'finish'],
  setup: function setup(props, _ref) {
    var emit = _ref.emit,
        slots = _ref.slots,
        expose = _ref.expose,
        attrs = _ref.attrs;
    var size = (0, _useSize.useInjectSize)(props);

    var _useConfigInject = (0, _useConfigInject2.default)('form', props),
        prefixCls = _useConfigInject.prefixCls,
        direction = _useConfigInject.direction,
        contextForm = _useConfigInject.form;

    var requiredMark = (0, _vue.computed)(function () {
      return props.requiredMark === '' || props.requiredMark;
    });
    var mergedRequiredMark = (0, _vue.computed)(function () {
      var _a;

      if (requiredMark.value !== undefined) {
        return requiredMark.value;
      }

      if (contextForm && ((_a = contextForm.value) === null || _a === void 0 ? void 0 : _a.requiredMark) !== undefined) {
        return contextForm.value.requiredMark;
      }

      if (props.hideRequiredMark) {
        return false;
      }

      return true;
    });
    var formClassName = (0, _vue.computed)(function () {
      var _classNames;

      return (0, _classNames2.default)(prefixCls.value, (_classNames = {}, (0, _defineProperty2.default)(_classNames, "".concat(prefixCls.value, "-").concat(props.layout), true), (0, _defineProperty2.default)(_classNames, "".concat(prefixCls.value, "-hide-required-mark"), mergedRequiredMark.value === false), (0, _defineProperty2.default)(_classNames, "".concat(prefixCls.value, "-rtl"), direction.value === 'rtl'), (0, _defineProperty2.default)(_classNames, "".concat(prefixCls.value, "-").concat(size.value), size.value), _classNames));
    });
    var lastValidatePromise = (0, _vue.ref)();
    var fields = {};

    var addField = function addField(eventKey, field) {
      fields[eventKey] = field;
    };

    var removeField = function removeField(eventKey) {
      delete fields[eventKey];
    };

    var getFieldsByNameList = function getFieldsByNameList(nameList) {
      var provideNameList = !!nameList;
      var namePathList = provideNameList ? (0, _typeUtil.toArray)(nameList).map(_valueUtil.getNamePath) : [];

      if (!provideNameList) {
        return Object.values(fields);
      } else {
        return Object.values(fields).filter(function (field) {
          return namePathList.findIndex(function (namePath) {
            return isEqualName(namePath, field.fieldName.value);
          }) > -1;
        });
      }
    };

    var resetFields = function resetFields(name) {
      if (!props.model) {
        (0, _warning.default)(false, 'Form', 'model is required for resetFields to work.');
        return;
      }

      getFieldsByNameList(name).forEach(function (field) {
        field.resetField();
      });
    };

    var clearValidate = function clearValidate(name) {
      getFieldsByNameList(name).forEach(function (field) {
        field.clearValidate();
      });
    };

    var handleFinishFailed = function handleFinishFailed(errorInfo) {
      var scrollToFirstError = props.scrollToFirstError;
      emit('finishFailed', errorInfo);

      if (scrollToFirstError && errorInfo.errorFields.length) {
        var scrollToFieldOptions = {};

        if ((0, _typeof2.default)(scrollToFirstError) === 'object') {
          scrollToFieldOptions = scrollToFirstError;
        }

        scrollToField(errorInfo.errorFields[0].name, scrollToFieldOptions);
      }
    };

    var validate = function validate() {
      return validateField.apply(void 0, arguments);
    };

    var scrollToField = function scrollToField(name) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var fields = getFieldsByNameList(name);

      if (fields.length) {
        var fieldId = fields[0].fieldId.value;
        var node = fieldId ? document.getElementById(fieldId) : null;

        if (node) {
          (0, _scrollIntoViewIfNeeded.default)(node, (0, _extends2.default)({
            scrollMode: 'if-needed',
            block: 'nearest'
          }, options));
        }
      }
    }; // eslint-disable-next-line no-unused-vars


    var getFieldsValue = function getFieldsValue() {
      var nameList = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      var values = {};
      Object.values(fields).forEach(function (_ref2) {
        var fieldName = _ref2.fieldName,
            fieldValue = _ref2.fieldValue;
        values[fieldName.value] = fieldValue.value;
      });

      if (nameList === true) {
        return values;
      } else {
        var res = {};
        (0, _typeUtil.toArray)(nameList).forEach(function (namePath) {
          return res[namePath] = values[namePath];
        });
        return res;
      }
    };

    var validateFields = function validateFields(nameList, options) {
      (0, _warning.default)(!(nameList instanceof Function), 'Form', 'validateFields/validateField/validate not support callback, please use promise instead');

      if (!props.model) {
        (0, _warning.default)(false, 'Form', 'model is required for validateFields to work.');
        return Promise.reject('Form `model` is required for validateFields to work.');
      }

      var provideNameList = !!nameList;
      var namePathList = provideNameList ? (0, _typeUtil.toArray)(nameList).map(_valueUtil.getNamePath) : []; // Collect result in promise list

      var promiseList = [];
      Object.values(fields).forEach(function (field) {
        var _a; // Add field if not provide `nameList`


        if (!provideNameList) {
          namePathList.push(field.namePath.value);
        } // Skip if without rule


        if (!((_a = field.rules) === null || _a === void 0 ? void 0 : _a.value.length)) {
          return;
        }

        var fieldNamePath = field.namePath.value; // Add field validate rule in to promise list

        if (!provideNameList || (0, _valueUtil.containsNamePath)(namePathList, fieldNamePath)) {
          var promise = field.validateRules((0, _extends2.default)({
            validateMessages: (0, _extends2.default)((0, _extends2.default)({}, _messages.defaultValidateMessages), props.validateMessages)
          }, options)); // Wrap promise with field

          promiseList.push(promise.then(function () {
            return {
              name: fieldNamePath,
              errors: [],
              warnings: []
            };
          }).catch(function (ruleErrors) {
            var mergedErrors = [];
            var mergedWarnings = [];
            ruleErrors.forEach(function (_ref3) {
              var warningOnly = _ref3.rule.warningOnly,
                  errors = _ref3.errors;

              if (warningOnly) {
                mergedWarnings.push.apply(mergedWarnings, (0, _toConsumableArray2.default)(errors));
              } else {
                mergedErrors.push.apply(mergedErrors, (0, _toConsumableArray2.default)(errors));
              }
            });

            if (mergedErrors.length) {
              return Promise.reject({
                name: fieldNamePath,
                errors: mergedErrors,
                warnings: mergedWarnings
              });
            }

            return {
              name: fieldNamePath,
              errors: mergedErrors,
              warnings: mergedWarnings
            };
          }));
        }
      });
      var summaryPromise = (0, _asyncUtil.allPromiseFinish)(promiseList);
      lastValidatePromise.value = summaryPromise;
      var returnPromise = summaryPromise.then(function () {
        if (lastValidatePromise.value === summaryPromise) {
          return Promise.resolve(getFieldsValue(namePathList));
        }

        return Promise.reject([]);
      }).catch(function (results) {
        var errorList = results.filter(function (result) {
          return result && result.errors.length;
        });
        return Promise.reject({
          values: getFieldsValue(namePathList),
          errorFields: errorList,
          outOfDate: lastValidatePromise.value !== summaryPromise
        });
      }); // Do not throw in console

      returnPromise.catch(function (e) {
        return e;
      });
      return returnPromise;
    };

    var validateField = function validateField() {
      return validateFields.apply(void 0, arguments);
    };

    var handleSubmit = function handleSubmit(e) {
      e.preventDefault();
      e.stopPropagation();
      emit('submit', e);

      if (props.model) {
        var res = validateFields();
        res.then(function (values) {
          emit('finish', values);
        }).catch(function (errors) {
          handleFinishFailed(errors);
        });
      }
    };

    expose({
      resetFields: resetFields,
      clearValidate: clearValidate,
      validateFields: validateFields,
      getFieldsValue: getFieldsValue,
      validate: validate,
      scrollToField: scrollToField
    });
    (0, _context.useProvideForm)({
      model: (0, _vue.computed)(function () {
        return props.model;
      }),
      name: (0, _vue.computed)(function () {
        return props.name;
      }),
      labelAlign: (0, _vue.computed)(function () {
        return props.labelAlign;
      }),
      labelCol: (0, _vue.computed)(function () {
        return props.labelCol;
      }),
      wrapperCol: (0, _vue.computed)(function () {
        return props.wrapperCol;
      }),
      vertical: (0, _vue.computed)(function () {
        return props.layout === 'vertical';
      }),
      colon: (0, _vue.computed)(function () {
        return props.colon;
      }),
      requiredMark: mergedRequiredMark,
      validateTrigger: (0, _vue.computed)(function () {
        return props.validateTrigger;
      }),
      rules: (0, _vue.computed)(function () {
        return props.rules;
      }),
      addField: addField,
      removeField: removeField
    });
    (0, _vue.watch)(function () {
      return props.rules;
    }, function () {
      if (props.validateOnRuleChange) {
        validateFields();
      }
    });
    return function () {
      var _a;

      return (0, _vue.createVNode)("form", (0, _objectSpread2.default)((0, _objectSpread2.default)({}, attrs), {}, {
        "onSubmit": handleSubmit,
        "class": [formClassName.value, attrs.class]
      }), [(_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots)]);
    };
  }
});
var _default = Form;
exports.default = _default;