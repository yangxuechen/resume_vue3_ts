import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _extends from "@babel/runtime/helpers/esm/extends";
import { computed } from 'vue';
import { reactive, watch, nextTick, unref } from 'vue';
import cloneDeep from 'lodash-es/cloneDeep';
import intersection from 'lodash-es/intersection';
import isEqual from 'lodash-es/isEqual';
import debounce from 'lodash-es/debounce';
import omit from 'lodash-es/omit';
import { validateRules } from './utils/validateUtil';
import { defaultValidateMessages } from './utils/messages';
import { allPromiseFinish } from './utils/asyncUtil';

function isRequired(rules) {
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

  return isRequired;
}

function toArray(value) {
  if (value === undefined || value === null) {
    return [];
  }

  return Array.isArray(value) ? value : [value];
}

function getPropByPath(obj, path, strict) {
  var tempObj = obj;
  path = path.replace(/\[(\w+)\]/g, '.$1');
  path = path.replace(/^\./, '');
  var keyArr = path.split('.');
  var i = 0;

  for (var len = keyArr.length; i < len - 1; ++i) {
    if (!tempObj && !strict) break;
    var key = keyArr[i];

    if (key in tempObj) {
      tempObj = tempObj[key];
    } else {
      if (strict) {
        throw new Error('please transfer a valid name path to validate!');
      }

      break;
    }
  }

  return {
    o: tempObj,
    k: keyArr[i],
    v: tempObj ? tempObj[keyArr[i]] : null,
    isValid: tempObj && keyArr[i] in tempObj
  };
}

function useForm(modelRef, rulesRef, options) {
  var initialModel = cloneDeep(unref(modelRef));
  var validateInfos = reactive({});
  var rulesKeys = computed(function () {
    return rulesRef ? Object.keys(unref(rulesRef)) : [];
  });
  watch(rulesKeys, function () {
    var newValidateInfos = {};
    rulesKeys.value.forEach(function (key) {
      newValidateInfos[key] = validateInfos[key] || {
        autoLink: false,
        required: isRequired(unref(rulesRef)[key])
      };
      delete validateInfos[key];
    });

    for (var key in validateInfos) {
      if (Object.prototype.hasOwnProperty.call(validateInfos, key)) {
        delete validateInfos[key];
      }
    }

    _extends(validateInfos, newValidateInfos);
  }, {
    immediate: true
  });

  var resetFields = function resetFields(newValues) {
    _extends(unref(modelRef), _extends(_extends({}, cloneDeep(initialModel)), newValues));

    nextTick(function () {
      Object.keys(validateInfos).forEach(function (key) {
        validateInfos[key] = {
          autoLink: false,
          required: isRequired(unref(rulesRef)[key])
        };
      });
    });
  };

  var filterRules = function filterRules() {
    var rules = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var trigger = arguments.length > 1 ? arguments[1] : undefined;

    if (!trigger.length) {
      return rules;
    } else {
      return rules.filter(function (rule) {
        var triggerList = toArray(rule.trigger || 'change');
        return intersection(triggerList, trigger).length;
      });
    }
  };

  var lastValidatePromise = null;

  var validateFields = function validateFields(names) {
    var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var strict = arguments.length > 2 ? arguments[2] : undefined;
    // Collect result in promise list
    var promiseList = [];
    var values = {};

    var _loop = function _loop(i) {
      var name = names[i];
      var prop = getPropByPath(unref(modelRef), name, strict);
      if (!prop.isValid) return "continue";
      values[name] = prop.v;
      var rules = filterRules(unref(rulesRef)[name], toArray(option && option.trigger));

      if (rules.length) {
        promiseList.push(validateField(name, prop.v, rules, option || {}).then(function () {
          return {
            name: name,
            errors: [],
            warnings: []
          };
        }).catch(function (ruleErrors) {
          var mergedErrors = [];
          var mergedWarnings = [];
          ruleErrors.forEach(function (_ref) {
            var warningOnly = _ref.rule.warningOnly,
                errors = _ref.errors;

            if (warningOnly) {
              mergedWarnings.push.apply(mergedWarnings, _toConsumableArray(errors));
            } else {
              mergedErrors.push.apply(mergedErrors, _toConsumableArray(errors));
            }
          });

          if (mergedErrors.length) {
            return Promise.reject({
              name: name,
              errors: mergedErrors,
              warnings: mergedWarnings
            });
          }

          return {
            name: name,
            errors: mergedErrors,
            warnings: mergedWarnings
          };
        }));
      }
    };

    for (var i = 0; i < names.length; i++) {
      var _ret = _loop(i);

      if (_ret === "continue") continue;
    }

    var summaryPromise = allPromiseFinish(promiseList);
    lastValidatePromise = summaryPromise;
    var returnPromise = summaryPromise.then(function () {
      if (lastValidatePromise === summaryPromise) {
        return Promise.resolve(values);
      }

      return Promise.reject([]);
    }).catch(function (results) {
      var errorList = results.filter(function (result) {
        return result && result.errors.length;
      });
      return Promise.reject({
        values: values,
        errorFields: errorList,
        outOfDate: lastValidatePromise !== summaryPromise
      });
    }); // Do not throw in console

    returnPromise.catch(function (e) {
      return e;
    });
    return returnPromise;
  };

  var validateField = function validateField(name, value, rules) {
    var option = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    var promise = validateRules([name], value, rules, _extends({
      validateMessages: defaultValidateMessages
    }, option), !!option.validateFirst);

    if (!validateInfos[name]) {
      return promise.catch(function (e) {
        return e;
      });
    }

    validateInfos[name].validateStatus = 'validating';
    promise.catch(function (e) {
      return e;
    }).then(function () {
      var results = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

      if (validateInfos[name].validateStatus === 'validating') {
        var res = results.filter(function (result) {
          return result && result.errors.length;
        });
        validateInfos[name].validateStatus = res.length ? 'error' : 'success';
        validateInfos[name].help = res.length ? res.map(function (r) {
          return r.errors;
        }) : '';
      }
    });
    return promise;
  };

  var validate = function validate(names, option) {
    var keys = [];
    var strict = true;

    if (!names) {
      strict = false;
      keys = rulesKeys.value;
    } else if (Array.isArray(names)) {
      keys = names;
    } else {
      keys = [names];
    }

    var promises = validateFields(keys, option || {}, strict); // Do not throw in console

    promises.catch(function (e) {
      return e;
    });
    return promises;
  };

  var clearValidate = function clearValidate(names) {
    var keys = [];

    if (!names) {
      keys = rulesKeys.value;
    } else if (Array.isArray(names)) {
      keys = names;
    } else {
      keys = [names];
    }

    keys.forEach(function (key) {
      validateInfos[key] && _extends(validateInfos[key], {
        validateStatus: '',
        help: ''
      });
    });
  };

  var mergeValidateInfo = function mergeValidateInfo(items) {
    var info = {
      autoLink: false
    };
    var help = [];
    var infos = Array.isArray(items) ? items : [items];

    for (var i = 0; i < infos.length; i++) {
      var arg = infos[i];

      if ((arg === null || arg === void 0 ? void 0 : arg.validateStatus) === 'error') {
        info.validateStatus = 'error';
        arg.help && help.push(arg.help);
      }

      info.required = info.required || (arg === null || arg === void 0 ? void 0 : arg.required);
    }

    info.help = help;
    return info;
  };

  var oldModel = initialModel;
  var isFirstTime = true;

  var modelFn = function modelFn(model) {
    var names = [];
    rulesKeys.value.forEach(function (key) {
      var prop = getPropByPath(model, key, false);
      var oldProp = getPropByPath(oldModel, key, false);
      var isFirstValidation = isFirstTime && (options === null || options === void 0 ? void 0 : options.immediate) && prop.isValid;

      if (isFirstValidation || !isEqual(prop.v, oldProp.v)) {
        names.push(key);
      }
    });
    validate(names, {
      trigger: 'change'
    });
    isFirstTime = false;
    oldModel = cloneDeep(model);
  };

  var debounceOptions = options === null || options === void 0 ? void 0 : options.debounce;
  watch(modelRef, debounceOptions && debounceOptions.wait ? debounce(modelFn, debounceOptions.wait, omit(debounceOptions, ['wait'])) : modelFn, {
    immediate: options && !!options.immediate,
    deep: true
  });
  watch(rulesRef, function () {
    if (options && options.validateOnRuleChange) {
      validate();
    }
  }, {
    deep: true
  });
  return {
    modelRef: modelRef,
    rulesRef: rulesRef,
    initialModel: initialModel,
    validateInfos: validateInfos,
    resetFields: resetFields,
    validate: validate,
    validateField: validateField,
    mergeValidateInfo: mergeValidateInfo,
    clearValidate: clearValidate
  };
}

export default useForm;