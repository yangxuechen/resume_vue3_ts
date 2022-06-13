"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _vue = require("vue");

var _cloneDeep = _interopRequireDefault(require("lodash/cloneDeep"));

var _intersection = _interopRequireDefault(require("lodash/intersection"));

var _isEqual = _interopRequireDefault(require("lodash/isEqual"));

var _debounce = _interopRequireDefault(require("lodash/debounce"));

var _omit = _interopRequireDefault(require("lodash/omit"));

var _validateUtil = require("./utils/validateUtil");

var _messages = require("./utils/messages");

var _asyncUtil = require("./utils/asyncUtil");

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
  var initialModel = (0, _cloneDeep.default)((0, _vue.unref)(modelRef));
  var validateInfos = (0, _vue.reactive)({});
  var rulesKeys = (0, _vue.computed)(function () {
    return rulesRef ? Object.keys((0, _vue.unref)(rulesRef)) : [];
  });
  (0, _vue.watch)(rulesKeys, function () {
    var newValidateInfos = {};
    rulesKeys.value.forEach(function (key) {
      newValidateInfos[key] = validateInfos[key] || {
        autoLink: false,
        required: isRequired((0, _vue.unref)(rulesRef)[key])
      };
      delete validateInfos[key];
    });

    for (var key in validateInfos) {
      if (Object.prototype.hasOwnProperty.call(validateInfos, key)) {
        delete validateInfos[key];
      }
    }

    (0, _extends2.default)(validateInfos, newValidateInfos);
  }, {
    immediate: true
  });

  var resetFields = function resetFields(newValues) {
    (0, _extends2.default)((0, _vue.unref)(modelRef), (0, _extends2.default)((0, _extends2.default)({}, (0, _cloneDeep.default)(initialModel)), newValues));
    (0, _vue.nextTick)(function () {
      Object.keys(validateInfos).forEach(function (key) {
        validateInfos[key] = {
          autoLink: false,
          required: isRequired((0, _vue.unref)(rulesRef)[key])
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
        return (0, _intersection.default)(triggerList, trigger).length;
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
      var prop = getPropByPath((0, _vue.unref)(modelRef), name, strict);
      if (!prop.isValid) return "continue";
      values[name] = prop.v;
      var rules = filterRules((0, _vue.unref)(rulesRef)[name], toArray(option && option.trigger));

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
              mergedWarnings.push.apply(mergedWarnings, (0, _toConsumableArray2.default)(errors));
            } else {
              mergedErrors.push.apply(mergedErrors, (0, _toConsumableArray2.default)(errors));
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

    var summaryPromise = (0, _asyncUtil.allPromiseFinish)(promiseList);
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
    var promise = (0, _validateUtil.validateRules)([name], value, rules, (0, _extends2.default)({
      validateMessages: _messages.defaultValidateMessages
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
      validateInfos[key] && (0, _extends2.default)(validateInfos[key], {
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

      if (isFirstValidation || !(0, _isEqual.default)(prop.v, oldProp.v)) {
        names.push(key);
      }
    });
    validate(names, {
      trigger: 'change'
    });
    isFirstTime = false;
    oldModel = (0, _cloneDeep.default)(model);
  };

  var debounceOptions = options === null || options === void 0 ? void 0 : options.debounce;
  (0, _vue.watch)(modelRef, debounceOptions && debounceOptions.wait ? (0, _debounce.default)(modelFn, debounceOptions.wait, (0, _omit.default)(debounceOptions, ['wait'])) : modelFn, {
    immediate: options && !!options.immediate,
    deep: true
  });
  (0, _vue.watch)(rulesRef, function () {
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

var _default = useForm;
exports.default = _default;