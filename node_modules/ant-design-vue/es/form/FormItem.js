import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _extends from "@babel/runtime/helpers/esm/extends";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import { createVNode as _createVNode } from "vue";
import { watch } from 'vue';
import { defineComponent, computed, nextTick, ref, watchEffect, onBeforeUnmount } from 'vue';
import cloneDeep from 'lodash-es/cloneDeep';
import PropTypes from '../_util/vue-types';
import Row from '../grid/Row';
import { isValidElement, flattenChildren, filterEmpty } from '../_util/props-util';
import BaseMixin from '../_util/BaseMixin';
import { cloneElement } from '../_util/vnode';
import { validateRules as validateRulesUtil } from './utils/validateUtil';
import { getNamePath } from './utils/valueUtil';
import { toArray } from './utils/typeUtil';
import { warning } from '../vc-util/warning';
import find from 'lodash-es/find';
import { tuple } from '../_util/type';
import useConfigInject from '../_util/hooks/useConfigInject';
import { useInjectForm } from './context';
import FormItemLabel from './FormItemLabel';
import FormItemInput from './FormItemInput';
var ValidateStatuses = tuple('success', 'warning', 'error', 'validating', '');

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

export var formItemProps = {
  id: PropTypes.string,
  htmlFor: PropTypes.string,
  prefixCls: PropTypes.string,
  label: PropTypes.VNodeChild,
  help: PropTypes.VNodeChild,
  extra: PropTypes.VNodeChild,
  labelCol: {
    type: Object
  },
  wrapperCol: {
    type: Object
  },
  hasFeedback: PropTypes.looseBool.def(false),
  colon: PropTypes.looseBool,
  labelAlign: PropTypes.oneOf(tuple('left', 'right')),
  prop: {
    type: [String, Number, Array]
  },
  name: {
    type: [String, Number, Array]
  },
  rules: PropTypes.oneOfType([Array, Object]),
  autoLink: PropTypes.looseBool.def(true),
  required: PropTypes.looseBool,
  validateFirst: PropTypes.looseBool,
  validateStatus: PropTypes.oneOf(tuple('', 'success', 'warning', 'error', 'validating')),
  validateTrigger: {
    type: [String, Array]
  },
  messageVariables: {
    type: Object
  },
  hidden: Boolean
};
var indexGuid = 0;
export default defineComponent({
  name: 'AFormItem',
  mixins: [BaseMixin],
  inheritAttrs: false,
  __ANT_NEW_FORM_ITEM: true,
  props: formItemProps,
  slots: ['help', 'label', 'extra'],
  setup: function setup(props, _ref) {
    var slots = _ref.slots,
        attrs = _ref.attrs,
        expose = _ref.expose;
    warning(props.prop === undefined, "`prop` is deprecated. Please use `name` instead.");
    var eventKey = "form-item-".concat(++indexGuid);

    var _useConfigInject = useConfigInject('form', props),
        prefixCls = _useConfigInject.prefixCls;

    var formContext = useInjectForm();
    var fieldName = computed(function () {
      return props.name || props.prop;
    });
    var errors = ref([]);
    var validateDisabled = ref(false);
    var domErrorVisible = ref(false);
    var inputRef = ref();
    var namePath = computed(function () {
      var val = fieldName.value;
      return getNamePath(val);
    });
    var fieldId = computed(function () {
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
    var fieldValue = computed(function () {
      var model = formContext.model.value;

      if (!model || !fieldName.value) {
        return;
      }

      return getPropByPath(model, namePath.value, true).v;
    });
    var initialValue = ref(cloneDeep(fieldValue.value));
    var mergedValidateTrigger = computed(function () {
      var validateTrigger = props.validateTrigger !== undefined ? props.validateTrigger : formContext.validateTrigger.value;
      validateTrigger = validateTrigger === undefined ? 'change' : validateTrigger;
      return toArray(validateTrigger);
    });
    var rulesRef = computed(function () {
      var formRules = formContext.rules.value;
      var selfRules = props.rules;
      var requiredRule = props.required !== undefined ? {
        required: !!props.required,
        trigger: mergedValidateTrigger.value
      } : [];
      var prop = getPropByPath(formRules, namePath.value);
      formRules = formRules ? prop.o[prop.k] || prop.v : [];
      var rules = [].concat(selfRules || formRules || []);

      if (find(rules, function (rule) {
        return rule.required;
      })) {
        return rules;
      } else {
        return rules.concat(requiredRule);
      }
    });
    var isRequired = computed(function () {
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
    var validateState = ref();
    watchEffect(function () {
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

          var triggerList = toArray(trigger || mergedValidateTrigger.value);
          return triggerList.includes(triggerName);
        });
      }

      if (!filteredRules.length) {
        return Promise.resolve();
      }

      var promise = validateRulesUtil(namePath.value, fieldValue.value, filteredRules, options, validateFirst, messageVariables);
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


      nextTick(function () {
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
    watch(fieldName, function (val) {
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
    onBeforeUnmount(function () {
      formContext.removeField(eventKey);
    }); // const onHelpAnimEnd = (_key: string, helpShow: boolean) => {
    //   this.helpShow = helpShow;
    //   if (!helpShow) {
    //     this.$forceUpdate();
    //   }
    // };

    var itemClassName = computed(function () {
      var _ref3;

      return _ref3 = {}, _defineProperty(_ref3, "".concat(prefixCls.value, "-item"), true), _defineProperty(_ref3, "".concat(prefixCls.value, "-item-has-feedback"), validateState.value && props.hasFeedback), _defineProperty(_ref3, "".concat(prefixCls.value, "-item-has-success"), validateState.value === 'success'), _defineProperty(_ref3, "".concat(prefixCls.value, "-item-has-warning"), validateState.value === 'warning'), _defineProperty(_ref3, "".concat(prefixCls.value, "-item-has-error"), validateState.value === 'error'), _defineProperty(_ref3, "".concat(prefixCls.value, "-item-is-validating"), validateState.value === 'validating'), _defineProperty(_ref3, "".concat(prefixCls.value, "-item-hidden"), props.hidden), _ref3;
    });
    return function () {
      var _a, _b, _c, _d, _e, _f;

      var help = (_a = props.help) !== null && _a !== void 0 ? _a : slots.help ? filterEmpty(slots.help()) : null;
      var children = flattenChildren((_b = slots.default) === null || _b === void 0 ? void 0 : _b.call(slots));
      var firstChildren = children[0];

      if (fieldName.value && props.autoLink && isValidElement(firstChildren)) {
        var originalEvents = firstChildren.props || {};
        var originalBlur = originalEvents.onBlur;
        var originalChange = originalEvents.onChange;
        firstChildren = cloneElement(firstChildren, _extends(_extends({}, fieldId.value ? {
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

      return _createVNode(Row, _objectSpread(_objectSpread({}, attrs), {}, {
        "class": [itemClassName.value, domErrorVisible.value || !!help ? "".concat(prefixCls.value, "-item-with-help") : '', attrs.class],
        "key": "row"
      }), {
        default: function _default() {
          return [_createVNode(FormItemLabel, _objectSpread(_objectSpread({}, props), {}, {
            "htmlFor": fieldId.value,
            "required": isRequired.value,
            "requiredMark": formContext.requiredMark.value,
            "prefixCls": prefixCls.value,
            "onClick": onLabelClick,
            "label": (_c = props.label) !== null && _c !== void 0 ? _c : (_d = slots.label) === null || _d === void 0 ? void 0 : _d.call(slots)
          }), null), _createVNode(FormItemInput, _objectSpread(_objectSpread({}, props), {}, {
            "errors": help !== undefined && help !== null ? toArray(help) : errors.value,
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