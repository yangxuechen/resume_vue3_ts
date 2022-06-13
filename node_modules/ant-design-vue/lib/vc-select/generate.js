"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = generateSelector;
exports.BaseProps = void 0;

var _vue = require("vue");

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _KeyCode = _interopRequireDefault(require("../_util/KeyCode"));

var _classNames3 = _interopRequireDefault(require("../_util/classNames"));

var _Selector = _interopRequireDefault(require("./Selector"));

var _SelectTrigger = _interopRequireDefault(require("./SelectTrigger"));

var _generator = require("./interface/generator");

var _commonUtil = require("./utils/commonUtil");

var _TransBtn = _interopRequireDefault(require("./TransBtn"));

var _useLock3 = _interopRequireDefault(require("./hooks/useLock"));

var _useDelayReset3 = _interopRequireDefault(require("./hooks/useDelayReset"));

var _valueUtil = require("./utils/valueUtil");

var _useSelectTriggerControl = _interopRequireDefault(require("./hooks/useSelectTriggerControl"));

var _useCacheDisplayValue = _interopRequireDefault(require("./hooks/useCacheDisplayValue"));

var _useCacheOptions = _interopRequireDefault(require("./hooks/useCacheOptions"));

var _createRef = _interopRequireDefault(require("../_util/createRef"));

var _vueTypes = _interopRequireWildcard(require("../_util/vue-types"));

var _initDefaultProps = _interopRequireDefault(require("../_util/props-util/initDefaultProps"));

var _warning = _interopRequireDefault(require("../_util/warning"));

var _isMobile = _interopRequireDefault(require("../vc-util/isMobile"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * To match accessibility requirement, we always provide an input in the component.
 * Other element will not set `tabindex` to avoid `onBlur` sequence problem.
 * For focused select, we set `aria-live="polite"` to update the accessibility content.
 *
 * ref:
 * - keyboard: https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/listbox_role#Keyboard_interactions
 */
var __rest = void 0 && (void 0).__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

var DEFAULT_OMIT_PROPS = ['children', 'removeIcon', 'placeholder', 'autofocus', 'maxTagCount', 'maxTagTextLength', 'maxTagPlaceholder', 'choiceTransitionName', 'onInputKeyDown', 'tabindex'];

var BaseProps = function BaseProps() {
  return {
    prefixCls: _vueTypes.default.string,
    id: _vueTypes.default.string,
    class: _vueTypes.default.string,
    style: _vueTypes.default.any,
    // Options
    options: _vueTypes.default.array,
    mode: _vueTypes.default.string,
    // Value
    value: _vueTypes.default.any,
    defaultValue: _vueTypes.default.any,
    labelInValue: _vueTypes.default.looseBool,
    // Search
    inputValue: _vueTypes.default.string,
    searchValue: _vueTypes.default.string,
    optionFilterProp: _vueTypes.default.string,

    /**
     * In Select, `false` means do nothing.
     * In TreeSelect, `false` will highlight match item.
     * It's by design.
     */
    filterOption: _vueTypes.default.any,
    filterSort: _vueTypes.default.func,
    showSearch: _vueTypes.default.looseBool,
    autoClearSearchValue: _vueTypes.default.looseBool,
    onSearch: _vueTypes.default.func,
    onClear: _vueTypes.default.func,
    // Icons
    allowClear: _vueTypes.default.looseBool,
    clearIcon: _vueTypes.default.VNodeChild,
    showArrow: _vueTypes.default.looseBool,
    inputIcon: _vueTypes.default.VNodeChild,
    removeIcon: _vueTypes.default.VNodeChild,
    menuItemSelectedIcon: _vueTypes.default.VNodeChild,
    // Dropdown
    open: _vueTypes.default.looseBool,
    defaultOpen: _vueTypes.default.looseBool,
    listHeight: _vueTypes.default.number,
    listItemHeight: _vueTypes.default.number,
    dropdownStyle: _vueTypes.default.object,
    dropdownClassName: _vueTypes.default.string,
    dropdownMatchSelectWidth: (0, _vueTypes.withUndefined)(_vueTypes.default.oneOfType([Boolean, Number])),
    virtual: _vueTypes.default.looseBool,
    dropdownRender: _vueTypes.default.func,
    dropdownAlign: _vueTypes.default.any,
    animation: _vueTypes.default.string,
    transitionName: _vueTypes.default.string,
    getPopupContainer: _vueTypes.default.func,
    direction: _vueTypes.default.string,
    // Others
    disabled: _vueTypes.default.looseBool,
    loading: _vueTypes.default.looseBool,
    autofocus: _vueTypes.default.looseBool,
    defaultActiveFirstOption: _vueTypes.default.looseBool,
    notFoundContent: _vueTypes.default.VNodeChild,
    placeholder: _vueTypes.default.VNodeChild,
    backfill: _vueTypes.default.looseBool,
    getInputElement: _vueTypes.default.func,
    optionLabelProp: _vueTypes.default.string,
    maxTagTextLength: _vueTypes.default.number,
    maxTagCount: _vueTypes.default.oneOfType([_vueTypes.default.number, _vueTypes.default.string]),
    maxTagPlaceholder: _vueTypes.default.any,
    tokenSeparators: _vueTypes.default.arrayOf(_vueTypes.default.string),
    tagRender: _vueTypes.default.func,
    showAction: _vueTypes.default.array,
    tabindex: _vueTypes.default.oneOfType([_vueTypes.default.number, _vueTypes.default.string]),
    // Events
    onKeyup: _vueTypes.default.func,
    onKeydown: _vueTypes.default.func,
    onPopupScroll: _vueTypes.default.func,
    onDropdownVisibleChange: _vueTypes.default.func,
    onSelect: _vueTypes.default.func,
    onDeselect: _vueTypes.default.func,
    onInputKeyDown: {
      type: Function
    },
    onClick: _vueTypes.default.func,
    onChange: _vueTypes.default.func,
    onBlur: _vueTypes.default.func,
    onFocus: _vueTypes.default.func,
    onMousedown: _vueTypes.default.func,
    onMouseenter: _vueTypes.default.func,
    onMouseleave: _vueTypes.default.func,
    // Motion
    choiceTransitionName: _vueTypes.default.string,
    // Internal props

    /**
     * Only used in current version for internal event process.
     * Do not use in production environment.
     */
    internalProps: _vueTypes.default.object,
    children: _vueTypes.default.array
  };
};
/**
 * This function is in internal usage.
 * Do not use it in your prod env since we may refactor this.
 */


exports.BaseProps = BaseProps;

function generateSelector(config) {
  var defaultPrefixCls = config.prefixCls,
      OptionList = config.components.optionList,
      convertChildrenToData = config.convertChildrenToData,
      flattenOptions = config.flattenOptions,
      getLabeledValue = config.getLabeledValue,
      filterOptions = config.filterOptions,
      isValueDisabled = config.isValueDisabled,
      findValueOption = config.findValueOption,
      warningProps = config.warningProps,
      fillOptionsWithMissingValue = config.fillOptionsWithMissingValue,
      omitDOMProps = config.omitDOMProps;
  var Select = (0, _vue.defineComponent)({
    name: 'Select',
    slots: ['option'],
    props: (0, _initDefaultProps.default)(BaseProps(), {}),
    setup: function setup(props) {
      var _a;

      var useInternalProps = (0, _vue.computed)(function () {
        return props.internalProps && props.internalProps.mark === _generator.INTERNAL_PROPS_MARK;
      });
      (0, _warning.default)(props.optionFilterProp !== 'children', 'Select', 'optionFilterProp not support children, please use label instead');
      var containerRef = (0, _vue.ref)(null);
      var triggerRef = (0, _vue.ref)(null);
      var selectorRef = (0, _vue.ref)(null);
      var listRef = (0, _vue.ref)(null);
      var tokenWithEnter = (0, _vue.computed)(function () {
        return (props.tokenSeparators || []).some(function (tokenSeparator) {
          return ['\n', '\r\n'].includes(tokenSeparator);
        });
      });
      /** Used for component focused management */

      var _useDelayReset = (0, _useDelayReset3.default)(),
          _useDelayReset2 = (0, _slicedToArray2.default)(_useDelayReset, 3),
          mockFocused = _useDelayReset2[0],
          setMockFocused = _useDelayReset2[1],
          cancelSetMockFocused = _useDelayReset2[2];

      var mergedId = (0, _vue.computed)(function () {
        return props.id || "rc_select_".concat((0, _commonUtil.getUUID)());
      }); // optionLabelProp

      var mergedOptionLabelProp = (0, _vue.computed)(function () {
        var mergedOptionLabelProp = props.optionLabelProp;

        if (mergedOptionLabelProp === undefined) {
          mergedOptionLabelProp = props.options ? 'label' : 'children';
        }

        return mergedOptionLabelProp;
      }); // labelInValue

      var mergedLabelInValue = (0, _vue.computed)(function () {
        return props.mode === 'combobox' ? false : props.labelInValue;
      });
      var isMultiple = (0, _vue.computed)(function () {
        return props.mode === 'tags' || props.mode === 'multiple';
      });
      var mergedShowSearch = (0, _vue.computed)(function () {
        return props.showSearch !== undefined ? props.showSearch : isMultiple.value || props.mode === 'combobox';
      });
      var mobile = (0, _vue.ref)(false);
      (0, _vue.onMounted)(function () {
        mobile.value = (0, _isMobile.default)();
      }); // ============================== Ref ===============================

      var selectorDomRef = (0, _createRef.default)();
      var innerSearchValue = (0, _vue.ref)('');

      var setInnerSearchValue = function setInnerSearchValue(val) {
        innerSearchValue.value = val;
      };

      var mergedValue = (0, _vue.ref)(props.value !== undefined ? props.value : props.defaultValue);
      (0, _vue.watch)(function () {
        return props.value;
      }, function () {
        mergedValue.value = props.value;
        innerSearchValue.value = '';
      }); // ============================= Value ==============================

      /** Unique raw values */

      var mergedRawValueArr = (0, _vue.computed)(function () {
        return (0, _commonUtil.toInnerValue)(mergedValue.value, {
          labelInValue: mergedLabelInValue.value,
          combobox: props.mode === 'combobox'
        });
      });
      var mergedRawValue = (0, _vue.computed)(function () {
        return mergedRawValueArr.value[0];
      });
      var mergedValueMap = (0, _vue.computed)(function () {
        return mergedRawValueArr.value[1];
      });
      /** We cache a set of raw values to speed up check */

      var rawValues = (0, _vue.computed)(function () {
        return new Set(mergedRawValue.value);
      }); // ============================= Option =============================
      // Set by option list active, it will merge into search input when mode is `combobox`

      var activeValue = (0, _vue.ref)(null);

      var setActiveValue = function setActiveValue(val) {
        activeValue.value = val;
      };

      var mergedSearchValue = (0, _vue.computed)(function () {
        var mergedSearchValue = innerSearchValue.value;

        if (props.mode === 'combobox' && mergedValue.value !== undefined) {
          mergedSearchValue = mergedValue.value;
        } else if (props.searchValue !== undefined) {
          mergedSearchValue = props.searchValue;
        } else if (props.inputValue) {
          mergedSearchValue = props.inputValue;
        }

        return mergedSearchValue;
      });
      var mergedOptions = (0, _vue.computed)(function () {
        var newOptions = props.options;

        if (newOptions === undefined) {
          newOptions = convertChildrenToData(props.children);
        }
        /**
         * `tags` should fill un-list item.
         * This is not cool here since TreeSelect do not need this
         */


        if (props.mode === 'tags' && fillOptionsWithMissingValue) {
          newOptions = fillOptionsWithMissingValue(newOptions, mergedValue.value, mergedOptionLabelProp.value, props.labelInValue);
        }

        return newOptions || [];
      });
      var mergedFlattenOptions = (0, _vue.computed)(function () {
        return flattenOptions(mergedOptions.value, props);
      });
      var getValueOption = (0, _useCacheOptions.default)(mergedFlattenOptions); // Display options for OptionList

      var displayOptions = (0, _vue.computed)(function () {
        if (!mergedSearchValue.value || !mergedShowSearch.value) {
          return (0, _toConsumableArray2.default)(mergedOptions.value);
        }

        var _props$optionFilterPr = props.optionFilterProp,
            optionFilterProp = _props$optionFilterPr === void 0 ? 'value' : _props$optionFilterPr,
            mode = props.mode,
            filterOption = props.filterOption;
        var filteredOptions = filterOptions(mergedSearchValue.value, mergedOptions.value, {
          optionFilterProp: optionFilterProp,
          filterOption: mode === 'combobox' && filterOption === undefined ? function () {
            return true;
          } : filterOption
        });

        if (mode === 'tags' && filteredOptions.every(function (opt) {
          return opt[optionFilterProp] !== mergedSearchValue.value;
        })) {
          filteredOptions.unshift({
            value: mergedSearchValue.value,
            label: mergedSearchValue.value,
            key: '__RC_SELECT_TAG_PLACEHOLDER__'
          });
        }

        if (props.filterSort && Array.isArray(filteredOptions)) {
          return (0, _toConsumableArray2.default)(filteredOptions).sort(props.filterSort);
        }

        return filteredOptions;
      });
      var displayFlattenOptions = (0, _vue.computed)(function () {
        return flattenOptions(displayOptions.value, props);
      });
      (0, _vue.onMounted)(function () {
        (0, _vue.watch)(mergedSearchValue, function () {
          if (listRef.value && listRef.value.scrollTo) {
            listRef.value.scrollTo(0);
          }
        }, {
          flush: 'post',
          immediate: true
        });
      }); // ============================ Selector ============================

      var displayValues = (0, _vue.computed)(function () {
        var tmpValues = mergedRawValue.value.map(function (val) {
          var valueOptions = getValueOption([val]);
          var displayValue = getLabeledValue(val, {
            options: valueOptions,
            prevValueMap: mergedValueMap.value,
            labelInValue: mergedLabelInValue.value,
            optionLabelProp: mergedOptionLabelProp.value
          });
          return (0, _extends2.default)((0, _extends2.default)({}, displayValue), {
            disabled: isValueDisabled(val, valueOptions)
          });
        });

        if (!props.mode && tmpValues.length === 1 && tmpValues[0].value === null && tmpValues[0].label === null) {
          return [];
        }

        return tmpValues;
      }); // Polyfill with cache label

      displayValues = (0, _useCacheDisplayValue.default)(displayValues);

      var triggerSelect = function triggerSelect(newValue, isSelect, source) {
        var newValueOption = getValueOption([newValue]);
        var outOption = findValueOption([newValue], newValueOption)[0];
        var _props$internalProps = props.internalProps,
            internalProps = _props$internalProps === void 0 ? {} : _props$internalProps;

        if (!internalProps.skipTriggerSelect) {
          // Skip trigger `onSelect` or `onDeselect` if configured
          var selectValue = mergedLabelInValue.value ? getLabeledValue(newValue, {
            options: newValueOption,
            prevValueMap: mergedValueMap.value,
            labelInValue: mergedLabelInValue.value,
            optionLabelProp: mergedOptionLabelProp.value
          }) : newValue;

          if (isSelect && props.onSelect) {
            props.onSelect(selectValue, outOption);
          } else if (!isSelect && props.onDeselect) {
            props.onDeselect(selectValue, outOption);
          }
        } // Trigger internal event


        if (useInternalProps.value) {
          if (isSelect && internalProps.onRawSelect) {
            internalProps.onRawSelect(newValue, outOption, source);
          } else if (!isSelect && internalProps.onRawDeselect) {
            internalProps.onRawDeselect(newValue, outOption, source);
          }
        }
      }; // We need cache options here in case user update the option list


      var prevValueOptions = (0, _vue.ref)([]);

      var setPrevValueOptions = function setPrevValueOptions(val) {
        prevValueOptions.value = val;
      };

      var triggerChange = function triggerChange(newRawValues) {
        if (useInternalProps.value && props.internalProps && props.internalProps.skipTriggerChange) {
          return;
        }

        var newRawValuesOptions = getValueOption(newRawValues);
        var outValues = (0, _commonUtil.toOuterValues)(Array.from(newRawValues), {
          labelInValue: mergedLabelInValue.value,
          options: newRawValuesOptions,
          getLabeledValue: getLabeledValue,
          prevValueMap: mergedValueMap.value,
          optionLabelProp: mergedOptionLabelProp.value
        });
        var outValue = isMultiple.value ? outValues : outValues[0]; // Skip trigger if prev & current value is both empty

        if (props.onChange && (mergedRawValue.value.length !== 0 || outValues.length !== 0)) {
          var outOptions = findValueOption(newRawValues, newRawValuesOptions, {
            prevValueOptions: prevValueOptions.value
          }); // We will cache option in case it removed by ajax

          setPrevValueOptions(outOptions.map(function (option, index) {
            var clone = (0, _extends2.default)({}, option);
            Object.defineProperty(clone, '_INTERNAL_OPTION_VALUE_', {
              get: function get() {
                return newRawValues[index];
              }
            });
            return clone;
          }));
          props.onChange(outValue, isMultiple.value ? outOptions : outOptions[0]);
        }

        mergedValue.value = outValue;
      };

      var onInternalSelect = function onInternalSelect(newValue, _ref) {
        var selected = _ref.selected,
            source = _ref.source;
        var _props$autoClearSearc = props.autoClearSearchValue,
            autoClearSearchValue = _props$autoClearSearc === void 0 ? true : _props$autoClearSearc;

        if (props.disabled) {
          return;
        }

        var newRawValue;

        if (isMultiple.value) {
          newRawValue = new Set(mergedRawValue.value);

          if (selected) {
            newRawValue.add(newValue);
          } else {
            newRawValue.delete(newValue);
          }
        } else {
          newRawValue = new Set();
          newRawValue.add(newValue);
        } // Multiple always trigger change and single should change if value changed


        if (isMultiple.value || !isMultiple.value && Array.from(mergedRawValue.value)[0] !== newValue) {
          triggerChange(Array.from(newRawValue));
        } // Trigger `onSelect`. Single mode always trigger select


        triggerSelect(newValue, !isMultiple.value || selected, source); // Clean search value if single or configured

        if (props.mode === 'combobox') {
          setInnerSearchValue(String(newValue));
          setActiveValue('');
        } else if (!isMultiple.value || autoClearSearchValue) {
          setInnerSearchValue('');
          setActiveValue('');
        }
      };

      var onInternalOptionSelect = function onInternalOptionSelect(newValue, info) {
        onInternalSelect(newValue, (0, _extends2.default)((0, _extends2.default)({}, info), {
          source: 'option'
        }));
      };

      var onInternalSelectionSelect = function onInternalSelectionSelect(newValue, info) {
        onInternalSelect(newValue, (0, _extends2.default)((0, _extends2.default)({}, info), {
          source: 'selection'
        }));
      }; // ============================== Open ==============================


      var initOpen = props.open !== undefined ? props.open : props.defaultOpen;
      var innerOpen = (0, _vue.ref)(initOpen);
      var mergedOpen = (0, _vue.ref)(initOpen);

      var setInnerOpen = function setInnerOpen(val) {
        innerOpen.value = props.open !== undefined ? props.open : val;
        mergedOpen.value = innerOpen.value;
      };

      (0, _vue.watch)(function () {
        return props.open;
      }, function () {
        setInnerOpen(props.open);
      }); // Not trigger `open` in `combobox` when `notFoundContent` is empty

      var emptyListContent = (0, _vue.computed)(function () {
        return !props.notFoundContent && !displayOptions.value.length;
      });
      (0, _vue.watchEffect)(function () {
        mergedOpen.value = innerOpen.value;

        if (props.disabled || emptyListContent.value && mergedOpen.value && props.mode === 'combobox') {
          mergedOpen.value = false;
        }
      });
      var triggerOpen = (0, _vue.computed)(function () {
        return emptyListContent.value ? false : mergedOpen.value;
      });

      var onToggleOpen = function onToggleOpen(newOpen) {
        var nextOpen = newOpen !== undefined ? newOpen : !mergedOpen.value;

        if (innerOpen.value !== nextOpen && !props.disabled) {
          setInnerOpen(nextOpen);

          if (props.onDropdownVisibleChange) {
            props.onDropdownVisibleChange(nextOpen);
          }
        }
      };

      (0, _useSelectTriggerControl.default)([containerRef, triggerRef], triggerOpen, onToggleOpen); // ============================= Search =============================

      var triggerSearch = function triggerSearch(searchText, fromTyping, isCompositing) {
        var ret = true;
        var newSearchText = searchText;
        var preSearchValue = mergedSearchValue.value;
        setActiveValue(null); // Check if match the `tokenSeparators`

        var patchLabels = isCompositing ? null : (0, _valueUtil.getSeparatedContent)(searchText, props.tokenSeparators);
        var patchRawValues = patchLabels;

        if (props.mode === 'combobox') {
          // Only typing will trigger onChange
          if (fromTyping) {
            triggerChange([newSearchText]);
          }
        } else if (patchLabels) {
          newSearchText = '';

          if (props.mode !== 'tags') {
            patchRawValues = patchLabels.map(function (label) {
              var item = mergedFlattenOptions.value.find(function (_ref2) {
                var data = _ref2.data;
                return data[mergedOptionLabelProp.value] === label;
              });
              return item ? item.data.value : null;
            }).filter(function (val) {
              return val !== null;
            });
          }

          var newRawValues = Array.from(new Set([].concat((0, _toConsumableArray2.default)(mergedRawValue.value), (0, _toConsumableArray2.default)(patchRawValues))));
          triggerChange(newRawValues);
          newRawValues.forEach(function (newRawValue) {
            triggerSelect(newRawValue, true, 'input');
          }); // Should close when paste finish

          onToggleOpen(false); // Tell Selector that break next actions

          ret = false;
        }

        setInnerSearchValue(newSearchText);

        if (props.onSearch && preSearchValue !== newSearchText) {
          props.onSearch(newSearchText);
        }

        return ret;
      }; // Only triggered when menu is closed & mode is tags
      // If menu is open, OptionList will take charge
      // If mode isn't tags, press enter is not meaningful when you can't see any option


      var onSearchSubmit = function onSearchSubmit(searchText) {
        // prevent empty tags from appearing when you click the Enter button
        if (!searchText || !searchText.trim()) {
          return;
        }

        var newRawValues = Array.from(new Set([].concat((0, _toConsumableArray2.default)(mergedRawValue.value), [searchText])));
        triggerChange(newRawValues);
        newRawValues.forEach(function (newRawValue) {
          triggerSelect(newRawValue, true, 'input');
        });
        setInnerSearchValue('');
      }; // Close dropdown when disabled change


      (0, _vue.watch)(function () {
        return props.disabled;
      }, function () {
        if (innerOpen.value && !!props.disabled) {
          setInnerOpen(false);
        }
      }, {
        immediate: true
      }); // Close will clean up single mode search text

      (0, _vue.watch)(mergedOpen, function () {
        if (!mergedOpen.value && !isMultiple.value && props.mode !== 'combobox') {
          triggerSearch('', false, false);
        }
      }, {
        immediate: true
      }); // ============================ Keyboard ============================

      /**
       * We record input value here to check if can press to clean up by backspace
       * - null: Key is not down, this is reset by key up
       * - true: Search text is empty when first time backspace down
       * - false: Search text is not empty when first time backspace down
       */

      var _useLock = (0, _useLock3.default)(),
          _useLock2 = (0, _slicedToArray2.default)(_useLock, 2),
          getClearLock = _useLock2[0],
          setClearLock = _useLock2[1]; // KeyDown


      var onInternalKeyDown = function onInternalKeyDown(event) {
        var clearLock = getClearLock();
        var which = event.which;

        if (which === _KeyCode.default.ENTER) {
          // Do not submit form when type in the input
          if (props.mode !== 'combobox') {
            event.preventDefault();
          } // We only manage open state here, close logic should handle by list component


          if (!mergedOpen.value) {
            onToggleOpen(true);
          }
        }

        setClearLock(!!mergedSearchValue.value); // Remove value by `backspace`

        if (which === _KeyCode.default.BACKSPACE && !clearLock && isMultiple.value && !mergedSearchValue.value && mergedRawValue.value.length) {
          var removeInfo = (0, _commonUtil.removeLastEnabledValue)(displayValues.value, mergedRawValue.value);

          if (removeInfo.removedValue !== null) {
            triggerChange(removeInfo.values);
            triggerSelect(removeInfo.removedValue, false, 'input');
          }
        }

        if (mergedOpen.value && listRef.value) {
          listRef.value.onKeydown(event);
        }

        if (props.onKeydown) {
          props.onKeydown(event);
        }
      }; // KeyUp


      var onInternalKeyUp = function onInternalKeyUp(event) {
        if (mergedOpen.value && listRef.value) {
          listRef.value.onKeyup(event);
        }

        if (props.onKeyup) {
          props.onKeyup(event);
        }
      }; // ========================== Focus / Blur ==========================

      /** Record real focus status */


      var focusRef = (0, _vue.ref)(false);

      var onContainerFocus = function onContainerFocus() {
        setMockFocused(true);

        if (!props.disabled) {
          if (props.onFocus && !focusRef.value) {
            props.onFocus(arguments.length <= 0 ? undefined : arguments[0]);
          } // `showAction` should handle `focus` if set


          if (props.showAction && props.showAction.includes('focus')) {
            onToggleOpen(true);
          }
        }

        focusRef.value = true;
      };

      var onContainerBlur = function onContainerBlur() {
        setMockFocused(false, function () {
          focusRef.value = false;
          onToggleOpen(false);
        });

        if (props.disabled) {
          return;
        }

        var searchVal = mergedSearchValue.value;

        if (searchVal) {
          // `tags` mode should move `searchValue` into values
          if (props.mode === 'tags') {
            triggerSearch('', false, false);
            triggerChange(Array.from(new Set([].concat((0, _toConsumableArray2.default)(mergedRawValue.value), [searchVal]))));
          } else if (props.mode === 'multiple') {
            // `multiple` mode only clean the search value but not trigger event
            setInnerSearchValue('');
          }
        }

        if (props.onBlur) {
          props.onBlur(arguments.length <= 0 ? undefined : arguments[0]);
        }
      };

      (0, _vue.provide)('VCSelectContainerEvent', {
        focus: onContainerFocus,
        blur: onContainerBlur
      });
      var activeTimeoutIds = [];
      (0, _vue.onMounted)(function () {
        activeTimeoutIds.forEach(function (timeoutId) {
          return window.clearTimeout(timeoutId);
        });
        activeTimeoutIds.splice(0, activeTimeoutIds.length);
      });
      (0, _vue.onBeforeUnmount)(function () {
        activeTimeoutIds.forEach(function (timeoutId) {
          return window.clearTimeout(timeoutId);
        });
        activeTimeoutIds.splice(0, activeTimeoutIds.length);
      });

      var onInternalMouseDown = function onInternalMouseDown(event) {
        var target = event.target;
        var popupElement = triggerRef.value && triggerRef.value.getPopupElement(); // We should give focus back to selector if clicked item is not focusable

        if (popupElement && popupElement.contains(target)) {
          var timeoutId = window.setTimeout(function () {
            var index = activeTimeoutIds.indexOf(timeoutId);

            if (index !== -1) {
              activeTimeoutIds.splice(index, 1);
            }

            cancelSetMockFocused();

            if (!mobile.value && !popupElement.contains(document.activeElement)) {
              selectorRef.value.focus();
            }
          });
          activeTimeoutIds.push(timeoutId);
        }

        if (props.onMousedown) {
          props.onMousedown(event);
        }
      }; // ========================= Accessibility ==========================


      var accessibilityIndex = (0, _vue.ref)(0);
      var mergedDefaultActiveFirstOption = (0, _vue.computed)(function () {
        return props.defaultActiveFirstOption !== undefined ? props.defaultActiveFirstOption : props.mode !== 'combobox';
      });

      var onActiveValue = function onActiveValue(active, index) {
        var _ref3 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
            _ref3$source = _ref3.source,
            source = _ref3$source === void 0 ? 'keyboard' : _ref3$source;

        accessibilityIndex.value = index;

        if (props.backfill && props.mode === 'combobox' && active !== null && source === 'keyboard') {
          setActiveValue(String(active));
        }
      }; // ============================= Popup ==============================


      var containerWidth = (0, _vue.ref)(null);
      (0, _vue.onMounted)(function () {
        (0, _vue.watch)(triggerOpen, function () {
          if (triggerOpen.value) {
            var newWidth = Math.ceil(containerRef.value.offsetWidth);

            if (containerWidth.value !== newWidth) {
              containerWidth.value = newWidth;
            }
          }
        }, {
          immediate: true
        });
      });

      var focus = function focus() {
        selectorRef.value.focus();
      };

      var blur = function blur() {
        selectorRef.value.blur();
      };

      return {
        focus: focus,
        blur: blur,
        scrollTo: (_a = listRef.value) === null || _a === void 0 ? void 0 : _a.scrollTo,
        tokenWithEnter: tokenWithEnter,
        mockFocused: mockFocused,
        mergedId: mergedId,
        containerWidth: containerWidth,
        onActiveValue: onActiveValue,
        accessibilityIndex: accessibilityIndex,
        mergedDefaultActiveFirstOption: mergedDefaultActiveFirstOption,
        onInternalMouseDown: onInternalMouseDown,
        onContainerFocus: onContainerFocus,
        onContainerBlur: onContainerBlur,
        onInternalKeyDown: onInternalKeyDown,
        isMultiple: isMultiple,
        mergedOpen: mergedOpen,
        displayOptions: displayOptions,
        displayFlattenOptions: displayFlattenOptions,
        rawValues: rawValues,
        onInternalOptionSelect: onInternalOptionSelect,
        onToggleOpen: onToggleOpen,
        mergedSearchValue: mergedSearchValue,
        useInternalProps: useInternalProps,
        triggerChange: triggerChange,
        triggerSearch: triggerSearch,
        mergedRawValue: mergedRawValue,
        mergedShowSearch: mergedShowSearch,
        onInternalKeyUp: onInternalKeyUp,
        triggerOpen: triggerOpen,
        mergedOptions: mergedOptions,
        onInternalSelectionSelect: onInternalSelectionSelect,
        selectorDomRef: selectorDomRef,
        displayValues: displayValues,
        activeValue: activeValue,
        onSearchSubmit: onSearchSubmit,
        containerRef: containerRef,
        listRef: listRef,
        triggerRef: triggerRef,
        selectorRef: selectorRef
      };
    },
    methods: {
      // We need force update here since popup dom is render async
      onPopupMouseEnter: function onPopupMouseEnter() {
        this.$forceUpdate();
      }
    },
    render: function render() {
      var _classNames2,
          _this = this;

      var tokenWithEnter = this.tokenWithEnter,
          mockFocused = this.mockFocused,
          mergedId = this.mergedId,
          containerWidth = this.containerWidth,
          onActiveValue = this.onActiveValue,
          accessibilityIndex = this.accessibilityIndex,
          mergedDefaultActiveFirstOption = this.mergedDefaultActiveFirstOption,
          onInternalMouseDown = this.onInternalMouseDown,
          onInternalKeyDown = this.onInternalKeyDown,
          isMultiple = this.isMultiple,
          mergedOpen = this.mergedOpen,
          displayOptions = this.displayOptions,
          displayFlattenOptions = this.displayFlattenOptions,
          rawValues = this.rawValues,
          onInternalOptionSelect = this.onInternalOptionSelect,
          onToggleOpen = this.onToggleOpen,
          mergedSearchValue = this.mergedSearchValue,
          onPopupMouseEnter = this.onPopupMouseEnter,
          useInternalProps = this.useInternalProps,
          triggerChange = this.triggerChange,
          triggerSearch = this.triggerSearch,
          mergedRawValue = this.mergedRawValue,
          mergedShowSearch = this.mergedShowSearch,
          onInternalKeyUp = this.onInternalKeyUp,
          triggerOpen = this.triggerOpen,
          mergedOptions = this.mergedOptions,
          onInternalSelectionSelect = this.onInternalSelectionSelect,
          selectorDomRef = this.selectorDomRef,
          displayValues = this.displayValues,
          activeValue = this.activeValue,
          onSearchSubmit = this.onSearchSubmit,
          slots = this.$slots;

      var _a = this.$props,
          _a$prefixCls = _a.prefixCls,
          prefixCls = _a$prefixCls === void 0 ? defaultPrefixCls : _a$prefixCls,
          className = _a.class,
          id = _a.id,
          open = _a.open,
          defaultOpen = _a.defaultOpen,
          options = _a.options,
          children = _a.children,
          mode = _a.mode,
          value = _a.value,
          defaultValue = _a.defaultValue,
          labelInValue = _a.labelInValue,
          showSearch = _a.showSearch,
          inputValue = _a.inputValue,
          searchValue = _a.searchValue,
          filterOption = _a.filterOption,
          optionFilterProp = _a.optionFilterProp,
          autoClearSearchValue = _a.autoClearSearchValue,
          onSearch = _a.onSearch,
          allowClear = _a.allowClear,
          clearIcon = _a.clearIcon,
          showArrow = _a.showArrow,
          inputIcon = _a.inputIcon,
          menuItemSelectedIcon = _a.menuItemSelectedIcon,
          disabled = _a.disabled,
          loading = _a.loading,
          defaultActiveFirstOption = _a.defaultActiveFirstOption,
          _a$notFoundContent = _a.notFoundContent,
          notFoundContent = _a$notFoundContent === void 0 ? 'Not Found' : _a$notFoundContent,
          optionLabelProp = _a.optionLabelProp,
          backfill = _a.backfill,
          getInputElement = _a.getInputElement,
          getPopupContainer = _a.getPopupContainer,
          _a$listHeight = _a.listHeight,
          listHeight = _a$listHeight === void 0 ? 200 : _a$listHeight,
          _a$listItemHeight = _a.listItemHeight,
          listItemHeight = _a$listItemHeight === void 0 ? 20 : _a$listItemHeight,
          animation = _a.animation,
          transitionName = _a.transitionName,
          virtual = _a.virtual,
          dropdownStyle = _a.dropdownStyle,
          dropdownClassName = _a.dropdownClassName,
          dropdownMatchSelectWidth = _a.dropdownMatchSelectWidth,
          dropdownRender = _a.dropdownRender,
          dropdownAlign = _a.dropdownAlign,
          showAction = _a.showAction,
          direction = _a.direction,
          tokenSeparators = _a.tokenSeparators,
          tagRender = _a.tagRender,
          onPopupScroll = _a.onPopupScroll,
          onDropdownVisibleChange = _a.onDropdownVisibleChange,
          onFocus = _a.onFocus,
          onBlur = _a.onBlur,
          onKeyup = _a.onKeyup,
          onKeydown = _a.onKeydown,
          onMousedown = _a.onMousedown,
          onChange = _a.onChange,
          onSelect = _a.onSelect,
          onDeselect = _a.onDeselect,
          onClear = _a.onClear,
          _a$internalProps = _a.internalProps,
          internalProps = _a$internalProps === void 0 ? {} : _a$internalProps,
          restProps = __rest(_a, ["prefixCls", "class", "id", "open", "defaultOpen", "options", "children", "mode", "value", "defaultValue", "labelInValue", "showSearch", "inputValue", "searchValue", "filterOption", "optionFilterProp", "autoClearSearchValue", "onSearch", "allowClear", "clearIcon", "showArrow", "inputIcon", "menuItemSelectedIcon", "disabled", "loading", "defaultActiveFirstOption", "notFoundContent", "optionLabelProp", "backfill", "getInputElement", "getPopupContainer", "listHeight", "listItemHeight", "animation", "transitionName", "virtual", "dropdownStyle", "dropdownClassName", "dropdownMatchSelectWidth", "dropdownRender", "dropdownAlign", "showAction", "direction", "tokenSeparators", "tagRender", "onPopupScroll", "onDropdownVisibleChange", "onFocus", "onBlur", "onKeyup", "onKeydown", "onMousedown", "onChange", "onSelect", "onDeselect", "onClear", "internalProps"]); // ============================= Input ==============================
      // Only works in `combobox`


      var customizeInputElement = mode === 'combobox' && getInputElement && getInputElement() || null;
      var domProps = omitDOMProps ? omitDOMProps(restProps) : restProps;
      DEFAULT_OMIT_PROPS.forEach(function (prop) {
        delete domProps[prop];
      });
      var popupNode = (0, _vue.createVNode)(OptionList, {
        "ref": "listRef",
        "prefixCls": prefixCls,
        "id": mergedId,
        "open": mergedOpen,
        "childrenAsData": !options,
        "options": displayOptions,
        "flattenOptions": displayFlattenOptions,
        "multiple": isMultiple,
        "values": rawValues,
        "height": listHeight,
        "itemHeight": listItemHeight,
        "onSelect": onInternalOptionSelect,
        "onToggleOpen": onToggleOpen,
        "onActiveValue": onActiveValue,
        "defaultActiveFirstOption": mergedDefaultActiveFirstOption,
        "notFoundContent": notFoundContent,
        "onScroll": onPopupScroll,
        "searchValue": mergedSearchValue,
        "menuItemSelectedIcon": menuItemSelectedIcon,
        "virtual": virtual !== false && dropdownMatchSelectWidth !== false,
        "onMouseenter": onPopupMouseEnter
      }, {
        option: slots.option
      }); // ============================= Clear ==============================

      var clearNode;

      var onClearMouseDown = function onClearMouseDown() {
        // Trigger internal `onClear` event
        if (useInternalProps && internalProps.onClear) {
          internalProps.onClear();
        }

        if (onClear) {
          onClear();
        }

        triggerChange([]);
        triggerSearch('', false, false);
      };

      if (!disabled && allowClear && (mergedRawValue.length || mergedSearchValue)) {
        clearNode = (0, _vue.createVNode)(_TransBtn.default, {
          "class": "".concat(prefixCls, "-clear"),
          "onMousedown": onClearMouseDown,
          "customizeIcon": clearIcon
        }, {
          default: function _default() {
            return [(0, _vue.createTextVNode)("\xD7")];
          }
        });
      } // ============================= Arrow ==============================


      var mergedShowArrow = showArrow !== undefined ? showArrow : loading || !isMultiple && mode !== 'combobox';
      var arrowNode;

      if (mergedShowArrow) {
        arrowNode = (0, _vue.createVNode)(_TransBtn.default, {
          "class": (0, _classNames3.default)("".concat(prefixCls, "-arrow"), (0, _defineProperty2.default)({}, "".concat(prefixCls, "-arrow-loading"), loading)),
          "customizeIcon": inputIcon,
          "customizeIconProps": {
            loading: loading,
            searchValue: mergedSearchValue,
            open: mergedOpen,
            focused: mockFocused,
            showSearch: mergedShowSearch
          }
        }, null);
      } // ============================ Warning =============================


      if (process.env.NODE_ENV !== 'production' && warningProps) {
        warningProps(this.$props);
      } // ============================= Render =============================


      var mergedClassName = (0, _classNames3.default)(prefixCls, className, (_classNames2 = {}, (0, _defineProperty2.default)(_classNames2, "".concat(prefixCls, "-focused"), mockFocused), (0, _defineProperty2.default)(_classNames2, "".concat(prefixCls, "-multiple"), isMultiple), (0, _defineProperty2.default)(_classNames2, "".concat(prefixCls, "-single"), !isMultiple), (0, _defineProperty2.default)(_classNames2, "".concat(prefixCls, "-allow-clear"), allowClear), (0, _defineProperty2.default)(_classNames2, "".concat(prefixCls, "-show-arrow"), mergedShowArrow), (0, _defineProperty2.default)(_classNames2, "".concat(prefixCls, "-disabled"), disabled), (0, _defineProperty2.default)(_classNames2, "".concat(prefixCls, "-loading"), loading), (0, _defineProperty2.default)(_classNames2, "".concat(prefixCls, "-open"), mergedOpen), (0, _defineProperty2.default)(_classNames2, "".concat(prefixCls, "-customize-input"), customizeInputElement), (0, _defineProperty2.default)(_classNames2, "".concat(prefixCls, "-show-search"), mergedShowSearch), _classNames2));
      return (0, _vue.createVNode)("div", (0, _objectSpread2.default)((0, _objectSpread2.default)({
        "class": mergedClassName
      }, domProps), {}, {
        "ref": "containerRef",
        "onMousedown": onInternalMouseDown,
        "onKeydown": onInternalKeyDown,
        "onKeyup": onInternalKeyUp
      }), [mockFocused && !mergedOpen && (0, _vue.createVNode)("span", {
        "style": {
          width: 0,
          height: 0,
          display: 'flex',
          overflow: 'hidden',
          opacity: 0
        },
        "aria-live": "polite"
      }, ["".concat(mergedRawValue.join(', '))]), (0, _vue.createVNode)(_SelectTrigger.default, {
        "ref": "triggerRef",
        "disabled": disabled,
        "prefixCls": prefixCls,
        "visible": triggerOpen,
        "popupElement": popupNode,
        "containerWidth": containerWidth,
        "animation": animation,
        "transitionName": transitionName,
        "dropdownStyle": dropdownStyle,
        "dropdownClassName": dropdownClassName,
        "direction": direction,
        "dropdownMatchSelectWidth": dropdownMatchSelectWidth,
        "dropdownRender": dropdownRender,
        "dropdownAlign": dropdownAlign,
        "getPopupContainer": getPopupContainer,
        "empty": !mergedOptions.length,
        "getTriggerDOMNode": function getTriggerDOMNode() {
          return selectorDomRef.current;
        }
      }, {
        default: function _default() {
          return [(0, _vue.createVNode)(_Selector.default, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, _this.$props), {}, {
            "domRef": selectorDomRef,
            "prefixCls": prefixCls,
            "inputElement": customizeInputElement,
            "ref": "selectorRef",
            "id": mergedId,
            "showSearch": mergedShowSearch,
            "mode": mode,
            "accessibilityIndex": accessibilityIndex,
            "multiple": isMultiple,
            "tagRender": tagRender,
            "values": displayValues,
            "open": mergedOpen,
            "onToggleOpen": onToggleOpen,
            "searchValue": mergedSearchValue,
            "activeValue": activeValue,
            "onSearch": triggerSearch,
            "onSearchSubmit": onSearchSubmit,
            "onSelect": onInternalSelectionSelect,
            "tokenWithEnter": tokenWithEnter
          }), null)];
        }
      }), arrowNode, clearNode]);
    }
  });
  return Select;
}