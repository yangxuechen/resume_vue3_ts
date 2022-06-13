"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.formItemProps = void 0;

var _vue = require("vue");

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _cloneDeep = _interopRequireDefault(require("lodash/cloneDeep"));

var _vueTypes = _interopRequireDefault(require("../_util/vue-types"));

var _Row = _interopRequireDefault(require("../grid/Row"));

var _propsUtil = require("../_util/props-util");

var _BaseMixin = _interopRequireDefault(require("../_util/BaseMixin"));

var _vnode = require("../_util/vnode");

var _validateUtil = require("./utils/validateUtil");

var _valueUtil = require("./utils/valueUtil");

var _typeUtil = require("./utils/typeUtil");

var _warning = require("../vc-util/warning");

var _find = _interopRequireDefault(require("lodash/find"));

var _type = require("../_util/type");

var _useConfigInject2 = _interopRequireDefault(require("../_util/hooks/useConfigInject"));

var _context = require("./context");

var _FormItemLabel = _interopRequireDefault(require("./FormItemLabel"));

var _FormItemInput = _interopRequireDefault(require("./FormItemInput"));

var ValidateStatuses = (0, _type.tuple)('success', 'warning', 'error', 'validating', '');

function getPropByPath(obj, namePathList, strict) {
  var tempObj = obj;
  var keyArr = namePathList;
  var i = 0;

  try {
    for (var len = keyArr.length; i < len - 1; ++i) {
      if (!tempObj && !strict) break;
      var key = keyArr[i];

      if (key in tempObj) {
        tempObj = tempObj[key];
      } else {
        if (strict) {
          throw Error('please transfer a valid name path to form item!');
        }

        break;
      }
    }

    if (strict && !tempObj) {
      throw Error('please transfer a valid name path to form item!');
    }
  } catch (error) {
    console.error('please transfer a valid name path to form item!');
  }

  return {
    o: tempObj,
    k: keyArr[i],
    v: tempObj ? tempObj[keyArr[i]] : undefined
  };
}

var formItemProps = {
  id: _vueTypes.default.string,
  htmlFor: _vueTypes.default.string,
  prefixCls: _vueTypes.default.string,
  label: _vueTypes.default.VNodeChild,
  help: _vueTypes.default.VNodeChild,
  extra: _vueTypes.default.VNodeChild,
  labelCol: {
    type: Object
  },
  wrapperCol: {
    type: Object
  },
  hasFeedback: _vueTypes.default.looseBool.def(false),
  colon: _vueTypes.default.looseBool,
  labelAlign: _vueTypes.default.oneOf((0, _type.tuple)('left', 'right')),
  prop: {
    type: [String, Number, Array]
  },
  name: {
    type: [String, Number, Array]
  },
  rules: _vueTypes.default.oneOfType([Array, Object]),
  autoLink: _vueTypes.default.looseBool.def(true),
  required: _vueTypes.default.looseBool,
  validateFirst: _vueTypes.default.looseBool,
  validateStatus: _vueTypes.default.oneOf((0, _type.tuple)('', 'success', 'warning', 'error', 'validating')),
  validateTrigger: {
    type: [String, Array]
  },
  messageVariables: {
    type: Object
  },
  hidden: Boolean
};
exports.formItemProps = formItemProps;
var indexGuid = 0;

var _default2 = (0, _vue.defineComponent)({
  name: 'AFormItem',
  mixins: [_BaseMixin.default],
  inheritAttrs: false,
  __ANT_NEW_FORM_ITEM: true,
  props: formItemProps,
  slots: ['help', 'label', 'extra'],
  setup: function setup(props, _ref) {
    var slots = _ref.slots,
        attrs = _ref.attrs,
        expose = _ref.expose;
    (0, _warning.warning)(props.prop === undefined, "`prop` is deprecated. Please use `name` instead.");
    var eventKey = "form-item-".concat(++indexGuid);

    var _useConfigInject = (0, _useConfigInject2.default)('form', props),
        prefixCls = _useConfigInject.prefixCls;

    var formContext = (0, _context.useInjectForm)();
    var fieldName = (0, _vue.computed)(function () {
      return props.name || props.prop;
    });
    var errors = (0, _vue.ref)([]);
    var validateDisabled = (0, _vue.ref)(false);
    var domErrorVisible = (0, _vue.ref)(false);
    var inputRef = (0, _vue.ref)();
    var namePath = (0, _vue.computed)(function () {
      var val = fieldName.value;
      return (0, _valueUtil.getNamePath)(val);
    });
    var fieldId = (0, _vue.computed)(function () {
      var id = props.id;

      if (id) {
        return id;
      } else if (!namePath.value.length) {
        return undefined;
      } else {
        var formName = formContext.name.value;
        var mergedId = namePath.value.join('_');
        return formName ? "".concat(formName, "_").concat(mergedId) : mergedId;
      }
    });
    var fieldValue = (0, _vue.computed)(function () {
      var model = formContext.model.value;

      if (!model || !fieldName.value) {
        return;
      }

      return getPropByPath(model, namePath.value, true).v;
    });
    var initialValue = (0, _vue.ref)((0, _cloneDeep.default)(fieldValue.value));
    var mergedValidateTrigger = (0, _vue.computed)(function () {
      var validateTrigger = props.validateTrigger !== undefined ? props.validateTrigger : formContext.validateTrigger.value;
      validateTrigger = validateTrigger === undefined ? 'change' : validateTrigger;
      return (0, _typeUtil.toArray)(validateTrigger);
    });
    var rulesRef = (0, _vue.computed)(function () {
      var formRules = formContext.rules.value;
      var selfRules = props.rules;
      var requiredRule = props.required !== undefined ? {
        required: !!props.required,
        trigger: mergedValidateTrigger.value
      } : [];
      var prop = getPropByPath(formRules, namePath.value);
      formRules = formRules ? prop.o[prop.k] || prop.v : [];
      var rules = [].concat(selfRules || formRules || []);

      if ((0, _find.default)(rules, function (rule) {
        return rule.required;
      })) {
        return rules;
      } else {
        return rules.concat(requiredRule);
      }
    });
    var isRequired = (0, _vue.computed)(function () {
      var rules = rulesRef.value;
      var isRequired = false;

      if (rules && rules.length) {
        rules.every(function (rule) {
          if (rule.required) {
            isRequired = true;
            return false;
          }

          return true;
        });
      }

      return isRequired || props.required;
    });
    var validateState = (0, _vue.ref)();
    (0, _vue.watchEffect)(function () {
      validateState.value = props.validateStatus;
    });

    var validateRules = function validateRules(options) {
      var _props$validateFirst = props.validateFirst,
          validateFirst = _props$validateFirst === void 0 ? false : _props$validateFirst,
          messageVariables = props.messageVariables;

      var _ref2 = options || {},
          triggerName = _ref2.triggerName;

      var filteredRules = rulesRef.value;

      if (triggerName) {
        filteredRules = filteredRules.filter(function (rule) {
          var trigger = rule.trigger;

          if (!trigger && !mergedValidateTrigger.value.length) {
            return true;
          }

          var triggerList = (0, _typeUtil.toArray)(trigger || mergedValidateTrigger.value);
          return triggerList.includes(triggerName);
        });
      }

      if (!filteredRules.length) {
        return Promise.resolve();
      }

      var promise = (0, _validateUtil.validateRules)(namePath.value, fieldValue.value, filteredRules, options, validateFirst, messageVariables);
      validateState.value = 'validating';
      errors.value = [];
      promise.catch(function (e) {
        return e;
      }).then(function () {
        var results = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

        if (validateState.value === 'validating') {
          var res = results.filter(function (result) {
            return result && result.errors.length;
          });
          validateState.value = res.length ? 'error' : 'success';
          errors.value = res.map(function (r) {
            return r.errors;
          });
        }
      });
      return promise;
    };

    var onFieldBlur = function onFieldBlur() {
      validateRules({
        triggerName: 'blur'
      });
    };

    var onFieldChange = function onFieldChange() {
      if (validateDisabled.value) {
        validateDisabled.value = false;
        return;
      }

      validateRules({
        triggerName: 'change'
      });
    };

    var clearValidate = function clearValidate() {
      validateState.value = '';
      validateDisabled.value = false;
      errors.value = [];
    };

    var resetField = function resetField() {
      validateState.value = '';
      validateDisabled.value = true;
      errors.value = [];
      var model = formContext.model.value || {};
      var value = fieldValue.value;
      var prop = getPropByPath(model, namePath.value, true);

      if (Array.isArray(value)) {
        prop.o[prop.k] = [].concat(initialValue.value);
      } else {
        prop.o[prop.k] = initialValue.value;
      } // reset validateDisabled after onFieldChange triggered


      (0, _vue.nextTick)(function () {
        validateDisabled.value = false;
      });
    };

    var onLabelClick = function onLabelClick() {
      var id = fieldId.value;

      if (!id || !inputRef.value) {
        return;
      }

      var control = inputRef.value.$el.querySelector("[id=\"".concat(id, "\"]"));

      if (control && control.focus) {
        control.focus();
      }
    };

    expose({
      onFieldBlur: onFieldBlur,
      onFieldChange: onFieldChange,
      clearValidate: clearValidate,
      resetField: resetField
    });
    var registered = false;
    (0, _vue.watch)(fieldName, function (val) {
      if (val) {
        if (!registered) {
          registered = true;
          formContext.addField(eventKey, {
            fieldValue: fieldValue,
            fieldId: fieldId,
            fieldName: fieldName,
            resetField: resetField,
            clearValidate: clearValidate,
            namePath: namePath,
            validateRules: validateRules,
            rules: rulesRef
          });
        }
      } else {
        registered = false;
        formContext.removeField(eventKey);
      }
    }, {
      immediate: true
    });
    (0, _vue.onBeforeUnmount)(function () {
      formContext.removeField(eventKey);
    }); // const onHelpAnimEnd = (_key: string, helpShow: boolean) => {
    //   this.helpShow = helpShow;
    //   if (!helpShow) {
    //     this.$forceUpdate();
    //   }
    // };

    var itemClassName = (0, _vue.computed)(function () {
      var _ref3;

      return _ref3 = {}, (0, _defineProperty2.default)(_ref3, "".concat(prefixCls.value, "-item"), true), (0, _defineProperty2.default)(_ref3, "".concat(prefixCls.value, "-item-has-feedback"), validateState.value && props.hasFeedback), (0, _defineProperty2.default)(_ref3, "".concat(prefixCls.value, "-item-has-success"), validateState.value === 'success'), (0, _defineProperty2.default)(_ref3, "".concat(prefixCls.value, "-item-has-warning"), validateState.value === 'warning'), (0, _defineProperty2.default)(_ref3, "".concat(prefixCls.value, "-item-has-error"), validateState.value === 'error'), (0, _defineProperty2.default)(_ref3, "".concat(prefixCls.value, "-item-is-validating"), validateState.value === 'validating'), (0, _defineProperty2.default)(_ref3, "".concat(prefixCls.value, "-item-hidden"), props.hidden), _ref3;
    });
    return function () {
      var _a, _b, _c, _d, _e, _f;

      var help = (_a = props.help) !== null && _a !== void 0 ? _a : slots.help ? (0, _propsUtil.filterEmpty)(slots.help()) : null;
      var children = (0, _propsUtil.flattenChildren)((_b = slots.default) === null || _b === void 0 ? void 0 : _b.call(slots));
      var firstChildren = children[0];

      if (fieldName.value && props.autoLink && (0, _propsUtil.isValidElement)(firstChildren)) {
        var originalEvents = firstChildren.props || {};
        var originalBlur = originalEvents.onBlur;
        var originalChange = originalEvents.onChange;
        firstChildren = (0, _vnode.cloneElement)(firstChildren, (0, _extends2.default)((0, _extends2.default)({}, fieldId.value ? {
          id: fieldId.value
        } : undefined), {
          onBlur: function onBlur() {
            if (Array.isArray(originalChange)) {
              for (var i = 0, l = originalChange.length; i < l; i++) {
                originalBlur[i].apply(originalBlur, arguments);
              }
            } else if (originalBlur) {
              originalBlur.apply(void 0, arguments);
            }

            onFieldBlur();
          },
          onChange: function onChange() {
            if (Array.isArray(originalChange)) {
              for (var i = 0, l = originalChange.length; i < l; i++) {
                originalChange[i].apply(originalChange, arguments);
              }
            } else if (originalChange) {
              originalChange.apply(void 0, arguments);
            }

            onFieldChange();
          }
        }));
      }

      return (0, _vue.createVNode)(_Row.default, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, attrs), {}, {
        "class": [itemClassName.value, domErrorVisible.value || !!help ? "".concat(prefixCls.value, "-item-with-help") : '', attrs.class],
        "key": "row"
      }), {
        default: function _default() {
          return [(0, _vue.createVNode)(_FormItemLabel.default, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, props), {}, {
            "htmlFor": fieldId.value,
            "required": isRequired.value,
            "requiredMark": formContext.requiredMark.value,
            "prefixCls": prefixCls.value,
            "onClick": onLabelClick,
            "label": (_c = props.label) !== null && _c !== void 0 ? _c : (_d = slots.label) === null || _d === void 0 ? void 0 : _d.call(slots)
          }), null), (0, _vue.createVNode)(_FormItemInput.default, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, props), {}, {
            "errors": help !== undefined && help !== null ? (0, _typeUtil.toArray)(help) : errors.value,
            "prefixCls": prefixCls.value,
            "status": validateState.value,
            "onDomErrorVisibleChange": function onDomErrorVisibleChange(v) {
              return domErrorVisible.value = v;
            },
            "validateStatus": validateState.value,
            "ref": inputRef,
            "help": help,
            "extra": (_e = props.extra) !== null && _e !== void 0 ? _e : (_f = slots.extra) === null || _f === void 0 ? void 0 : _f.call(slots)
          }), {
            default: function _default() {
              return [[firstChildren, children.slice(1)]];
            }
          })];
        }
      });
    };
  }
});

exports.default = _default2;