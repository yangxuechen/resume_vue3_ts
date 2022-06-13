import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _extends from "@babel/runtime/helpers/esm/extends";
import _regeneratorRuntime from "@babel/runtime/regenerator";

var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

import RawAsyncValidator from 'async-validator';
import { cloneVNode } from 'vue';
import { warning } from '../../vc-util/warning';
import { setValues } from './valueUtil';
import { defaultValidateMessages } from './messages';
import { isValidElement } from '../../_util/props-util'; // Remove incorrect original ts define

var AsyncValidator = RawAsyncValidator;
/**
 * Replace with template.
 *   `I'm ${name}` + { name: 'bamboo' } = I'm bamboo
 */

function replaceMessage(template, kv) {
  return template.replace(/\$\{\w+\}/g, function (str) {
    var key = str.slice(2, -1);
    return kv[key];
  });
}

function validateRule(name, value, rule, options, messageVariables) {
  return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
    var cloneRule, subRuleField, validator, messages, result, subResults, kv, fillVariableResult;
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            cloneRule = _extends({}, rule); // Bug of `async-validator`

            delete cloneRule.ruleIndex; // We should special handle array validate

            subRuleField = null;

            if (cloneRule && cloneRule.type === 'array' && cloneRule.defaultField) {
              subRuleField = cloneRule.defaultField;
              delete cloneRule.defaultField;
            }

            validator = new AsyncValidator(_defineProperty({}, name, [cloneRule]));
            messages = setValues({}, defaultValidateMessages, options.validateMessages);
            validator.messages(messages);
            result = [];
            _context.prev = 8;
            _context.next = 11;
            return Promise.resolve(validator.validate(_defineProperty({}, name, value), _extends({}, options)));

          case 11:
            _context.next = 16;
            break;

          case 13:
            _context.prev = 13;
            _context.t0 = _context["catch"](8);

            if (_context.t0.errors) {
              result = _context.t0.errors.map(function (_ref, index) {
                var message = _ref.message;
                return (// Wrap VueNode with `key`
                  isValidElement(message) ? cloneVNode(message, {
                    key: "error_".concat(index)
                  }) : message
                );
              });
            } else {
              console.error(_context.t0);
              result = [messages.default()];
            }

          case 16:
            if (!(!result.length && subRuleField)) {
              _context.next = 21;
              break;
            }

            _context.next = 19;
            return Promise.all(value.map(function (subValue, i) {
              return validateRule("".concat(name, ".").concat(i), subValue, subRuleField, options, messageVariables);
            }));

          case 19:
            subResults = _context.sent;
            return _context.abrupt("return", subResults.reduce(function (prev, errors) {
              return [].concat(_toConsumableArray(prev), _toConsumableArray(errors));
            }, []));

          case 21:
            // Replace message with variables
            kv = _extends(_extends(_extends({}, rule), {
              name: name,
              enum: (rule.enum || []).join(', ')
            }), messageVariables);
            fillVariableResult = result.map(function (error) {
              if (typeof error === 'string') {
                return replaceMessage(error, kv);
              }

              return error;
            });
            return _context.abrupt("return", fillVariableResult);

          case 24:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[8, 13]]);
  }));
}
/**
 * We use `async-validator` to validate the value.
 * But only check one value in a time to avoid namePath validate issue.
 */


export function validateRules(namePath, value, rules, options, validateFirst, messageVariables) {
  var _this = this;

  var name = namePath.join('.'); // Fill rule with context

  var filledRules = rules.map(function (currentRule, ruleIndex) {
    var originValidatorFunc = currentRule.validator;

    var cloneRule = _extends(_extends({}, currentRule), {
      ruleIndex: ruleIndex
    }); // Replace validator if needed


    if (originValidatorFunc) {
      cloneRule.validator = function (rule, val, callback) {
        var hasPromise = false; // Wrap callback only accept when promise not provided

        var wrappedCallback = function wrappedCallback() {
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          // Wait a tick to make sure return type is a promise
          Promise.resolve().then(function () {
            warning(!hasPromise, 'Your validator function has already return a promise. `callback` will be ignored.');

            if (!hasPromise) {
              callback.apply(void 0, args);
            }
          });
        }; // Get promise


        var promise = originValidatorFunc(rule, val, wrappedCallback);
        hasPromise = promise && typeof promise.then === 'function' && typeof promise.catch === 'function';
        /**
         * 1. Use promise as the first priority.
         * 2. If promise not exist, use callback with warning instead
         */

        warning(hasPromise, '`callback` is deprecated. Please return a promise instead.');

        if (hasPromise) {
          promise.then(function () {
            callback();
          }).catch(function (err) {
            callback(err || ' ');
          });
        }
      };
    }

    return cloneRule;
  }).sort(function (_ref2, _ref3) {
    var w1 = _ref2.warningOnly,
        i1 = _ref2.ruleIndex;
    var w2 = _ref3.warningOnly,
        i2 = _ref3.ruleIndex;

    if (!!w1 === !!w2) {
      // Let keep origin order
      return i1 - i2;
    }

    if (w1) {
      return 1;
    }

    return -1;
  }); // Do validate rules

  var summaryPromise;

  if (validateFirst === true) {
    // >>>>> Validate by serialization
    summaryPromise = new Promise(function (resolve, reject) {
      return __awaiter(_this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime.mark(function _callee2() {
        var i, rule, errors;
        return _regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                i = 0;

              case 1:
                if (!(i < filledRules.length)) {
                  _context2.next = 12;
                  break;
                }

                rule = filledRules[i];
                _context2.next = 5;
                return validateRule(name, value, rule, options, messageVariables);

              case 5:
                errors = _context2.sent;

                if (!errors.length) {
                  _context2.next = 9;
                  break;
                }

                reject([{
                  errors: errors,
                  rule: rule
                }]);
                return _context2.abrupt("return");

              case 9:
                i += 1;
                _context2.next = 1;
                break;

              case 12:
                /* eslint-enable */
                resolve([]);

              case 13:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));
    });
  } else {
    // >>>>> Validate by parallel
    var rulePromises = filledRules.map(function (rule) {
      return validateRule(name, value, rule, options, messageVariables).then(function (errors) {
        return {
          errors: errors,
          rule: rule
        };
      });
    });
    summaryPromise = (validateFirst ? finishOnFirstFailed(rulePromises) : finishOnAllFailed(rulePromises)).then(function (errors) {
      // Always change to rejection for Field to catch
      return Promise.reject(errors);
    });
  } // Internal catch error to avoid console error log.


  summaryPromise.catch(function (e) {
    return e;
  });
  return summaryPromise;
}

function finishOnAllFailed(rulePromises) {
  return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime.mark(function _callee3() {
    return _regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            return _context3.abrupt("return", Promise.all(rulePromises).then(function (errorsList) {
              var _ref4;

              var errors = (_ref4 = []).concat.apply(_ref4, _toConsumableArray(errorsList));

              return errors;
            }));

          case 1:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
}

function finishOnFirstFailed(rulePromises) {
  return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime.mark(function _callee4() {
    var count;
    return _regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            count = 0;
            return _context4.abrupt("return", new Promise(function (resolve) {
              rulePromises.forEach(function (promise) {
                promise.then(function (ruleError) {
                  if (ruleError.errors.length) {
                    resolve([ruleError]);
                  }

                  count += 1;

                  if (count === rulePromises.length) {
                    resolve([]);
                  }
                });
              });
            }));

          case 2:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
}