import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _extends from "@babel/runtime/helpers/esm/extends";
import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { createTextVNode as _createTextVNode, createVNode as _createVNode, resolveDirective as _resolveDirective } from "vue";

/**
 * To match accessibility requirement, we always provide an input in the component.
 * Other element will not set `tabindex` to avoid `onBlur` sequence problem.
 * For focused select, we set `aria-live="polite"` to update the accessibility content.
 *
 * ref:
 * - keyboard: https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/listbox_role#Keyboard_interactions
 */
var __rest = this && this.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

import KeyCode from '../_util/KeyCode';
import classNames from '../_util/classNames';
import Selector from './Selector';
import SelectTrigger from './SelectTrigger';
import { INTERNAL_PROPS_MARK } from './interface/generator';
import { toInnerValue, toOuterValues, removeLastEnabledValue, getUUID } from './utils/commonUtil';
import TransBtn from './TransBtn';
import useLock from './hooks/useLock';
import useDelayReset from './hooks/useDelayReset';
import { getSeparatedContent } from './utils/valueUtil';
import useSelectTriggerControl from './hooks/useSelectTriggerControl';
import useCacheDisplayValue from './hooks/useCacheDisplayValue';
import useCacheOptions from './hooks/useCacheOptions';
import { computed, defineComponent, onBeforeUnmount, onMounted, provide, ref, watch, watchEffect } from 'vue';
import createRef from '../_util/createRef';
import PropTypes, { withUndefined } from '../_util/vue-types';
import initDefaultProps from '../_util/props-util/initDefaultProps';
import warning from '../_util/warning';
import isMobile from '../vc-util/isMobile';
var DEFAULT_OMIT_PROPS = ['children', 'removeIcon', 'placeholder', 'autofocus', 'maxTagCount', 'maxTagTextLength', 'maxTagPlaceholder', 'choiceTransitionName', 'onInputKeyDown', 'tabindex'];
export var BaseProps = function BaseProps() {
  return {
    prefixCls: PropTypes.string,
    id: PropTypes.string,
    class: PropTypes.string,
    style: PropTypes.any,
    // Options
    options: PropTypes.array,
    mode: PropTypes.string,
    // Value
    value: PropTypes.any,
    defaultValue: PropTypes.any,
    labelInValue: PropTypes.looseBool,
    // Search
    inputValue: PropTypes.string,
    searchValue: PropTypes.string,
    optionFilterProp: PropTypes.string,

    /**
     * In Select, `false` means do nothing.
     * In TreeSelect, `false` will highlight match item.
     * It's by design.
     */
    filterOption: PropTypes.any,
    filterSort: PropTypes.func,
    showSearch: PropTypes.looseBool,
    autoClearSearchValue: PropTypes.looseBool,
    onSearch: PropTypes.func,
    onClear: PropTypes.func,
    // Icons
    allowClear: PropTypes.looseBool,
    clearIcon: PropTypes.VNodeChild,
    showArrow: PropTypes.looseBool,
    inputIcon: PropTypes.VNodeChild,
    removeIcon: PropTypes.VNodeChild,
    menuItemSelectedIcon: PropTypes.VNodeChild,
    // Dropdown
    open: PropTypes.looseBool,
    defaultOpen: PropTypes.looseBool,
    listHeight: PropTypes.number,
    listItemHeight: PropTypes.number,
    dropdownStyle: PropTypes.object,
    dropdownClassName: PropTypes.string,
    dropdownMatchSelectWidth: withUndefined(PropTypes.oneOfType([Boolean, Number])),
    virtual: PropTypes.looseBool,
    dropdownRender: PropTypes.func,
    dropdownAlign: PropTypes.any,
    animation: PropTypes.string,
    transitionName: PropTypes.string,
    getPopupContainer: PropTypes.func,
    direction: PropTypes.string,
    // Others
    disabled: PropTypes.looseBool,
    loading: PropTypes.looseBool,
    autofocus: PropTypes.looseBool,
    defaultActiveFirstOption: PropTypes.looseBool,
    notFoundContent: PropTypes.VNodeChild,
    placeholder: PropTypes.VNodeChild,
    backfill: PropTypes.looseBool,
    getInputElement: PropTypes.func,
    optionLabelProp: PropTypes.string,
    maxTagTextLength: PropTypes.number,
    maxTagCount: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    maxTagPlaceholder: PropTypes.any,
    tokenSeparators: PropTypes.arrayOf(PropTypes.string),
    tagRender: PropTypes.func,
    showAction: PropTypes.array,
    tabindex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    // Events
    onKeyup: PropTypes.func,
    onKeydown: PropTypes.func,
    onPopupScroll: PropTypes.func,
    onDropdownVisibleChange: PropTypes.func,
    onSelect: PropTypes.func,
    onDeselect: PropTypes.func,
    onInputKeyDown: {
      type: Function
    },
    onClick: PropTypes.func,
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
    onFocus: PropTypes.func,
    onMousedown: PropTypes.func,
    onMouseenter: PropTypes.func,
    onMouseleave: PropTypes.func,
    // Motion
    choiceTransitionName: PropTypes.string,
    // Internal props

    /**
     * Only used in current version for internal event process.
     * Do not use in production environment.
     */
    internalProps: PropTypes.object,
    children: PropTypes.array
  };
};
/**
 * This function is in internal usage.
 * Do not use it in your prod env since we may refactor this.
 */

export default function generateSelector(config) {
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
  var Select = defineComponent({
    name: 'Select',
    slots: ['option'],
    props: initDefaultProps(BaseProps(), {}),
    setup: function setup(props) {
      var _a;

      var useInternalProps = computed(function () {
        return props.internalProps && props.internalProps.mark === INTERNAL_PROPS_MARK;
      });
      warning(props.optionFilterProp !== 'children', 'Select', 'optionFilterProp not support children, please use label instead');
      var containerRef = ref(null);
      var triggerRef = ref(null);
      var selectorRef = ref(null);
      var listRef = ref(null);
      var tokenWithEnter = computed(function () {
        return (props.tokenSeparators || []).some(function (tokenSeparator) {
          return ['\n', '\r\n'].includes(tokenSeparator);
        });
      });
      /** Used for component focused management */

      var _useDelayReset = useDelayReset(),
          _useDelayReset2 = _slicedToArray(_useDelayReset, 3),
          mockFocused = _useDelayReset2[0],
          setMockFocused = _useDelayReset2[1],
          cancelSetMockFocused = _useDelayReset2[2];

      var mergedId = computed(function () {
        return props.id || "rc_select_".concat(getUUID());
      }); // optionLabelProp

      var mergedOptionLabelProp = computed(function () {
        var mergedOptionLabelProp = props.optionLabelProp;

        if (mergedOptionLabelProp === undefined) {
          mergedOptionLabelProp = props.options ? 'label' : 'children';
        }

        return mergedOptionLabelProp;
      }); // labelInValue

      var mergedLabelInValue = computed(function () {
        return props.mode === 'combobox' ? false : props.labelInValue;
      });
      var isMultiple = computed(function () {
        return props.mode === 'tags' || props.mode === 'multiple';
      });
      var mergedShowSearch = computed(function () {
        return props.showSearch !== undefined ? props.showSearch : isMultiple.value || props.mode === 'combobox';
      });
      var mobile = ref(false);
      onMounted(function () {
        mobile.value = isMobile();
      }); // ============================== Ref ===============================

      var selectorDomRef = createRef();
      var innerSearchValue = ref('');

      var setInnerSearchValue = function setInnerSearchValue(val) {
        innerSearchValue.value = val;
      };

      var mergedValue = ref(props.value !== undefined ? props.value : props.defaultValue);
      watch(function () {
        return props.value;
      }, function () {
        mergedValue.value = props.value;
        innerSearchValue.value = '';
      }); // ============================= Value ==============================

      /** Unique raw values */

      var mergedRawValueArr = computed(function () {
        return toInnerValue(mergedValue.value, {
          labelInValue: mergedLabelInValue.value,
          combobox: props.mode === 'combobox'
        });
      });
      var mergedRawValue = computed(function () {
        return mergedRawValueArr.value[0];
      });
      var mergedValueMap = computed(function () {
        return mergedRawValueArr.value[1];
      });
      /** We cache a set of raw values to speed up check */

      var rawValues = computed(function () {
        return new Set(mergedRawValue.value);
      }); // ============================= Option =============================
      // Set by option list active, it will merge into search input when mode is `combobox`

      var activeValue = ref(null);

      var setActiveValue = function setActiveValue(val) {
        activeValue.value = val;
      };

      var mergedSearchValue = computed(function () {
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
      var mergedOptions = computed(function () {
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
      var mergedFlattenOptions = computed(function () {
        return flattenOptions(mergedOptions.value, props);
      });
      var getValueOption = useCacheOptions(mergedFlattenOptions); // Display options for OptionList

      var displayOptions = computed(function () {
        if (!mergedSearchValue.value || !mergedShowSearch.value) {
          return _toConsumableArray(mergedOptions.value);
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
          return _toConsumableArray(filteredOptions).sort(props.filterSort);
        }

        return filteredOptions;
      });
      var displayFlattenOptions = computed(function () {
        return flattenOptions(displayOptions.value, props);
      });
      onMounted(function () {
        watch(mergedSearchValue, function () {
          if (listRef.value && listRef.value.scrollTo) {
            listRef.value.scrollTo(0);
          }
        }, {
          flush: 'post',
          immediate: true
        });
      }); // ============================ Selector ============================

      var displayValues = computed(function () {
        var tmpValues = mergedRawValue.value.map(function (val) {
          var valueOptions = getValueOption([val]);
          var displayValue = getLabeledValue(val, {
            options: valueOptions,
            prevValueMap: mergedValueMap.value,
            labelInValue: mergedLabelInValue.value,
            optionLabelProp: mergedOptionLabelProp.value
          });
          return _extends(_extends({}, displayValue), {
            disabled: isValueDisabled(val, valueOptions)
          });
        });

        if (!props.mode && tmpValues.length === 1 && tmpValues[0].value === null && tmpValues[0].label === null) {
          return [];
        }

        return tmpValues;
      }); // Polyfill with cache label

      displayValues = useCacheDisplayValue(displayValues);

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


      var prevValueOptions = ref([]);

      var setPrevValueOptions = function setPrevValueOptions(val) {
        prevValueOptions.value = val;
      };

      var triggerChange = function triggerChange(newRawValues) {
        if (useInternalProps.value && props.internalProps && props.internalProps.skipTriggerChange) {
          return;
        }

        var newRawValuesOptions = getValueOption(newRawValues);
        var outValues = toOuterValues(Array.from(newRawValues), {
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
            var clone = _extends({}, option);

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
        onInternalSelect(newValue, _extends(_extends({}, info), {
          source: 'option'
        }));
      };

      var onInternalSelectionSelect = function onInternalSelectionSelect(newValue, info) {
        onInternalSelect(newValue, _extends(_extends({}, info), {
          source: 'selection'
        }));
      }; // ============================== Open ==============================


      var initOpen = props.open !== undefined ? props.open : props.defaultOpen;
      var innerOpen = ref(initOpen);
      var mergedOpen = ref(initOpen);

      var setInnerOpen = function setInnerOpen(val) {
        innerOpen.value = props.open !== undefined ? props.open : val;
        mergedOpen.value = innerOpen.value;
      };

      watch(function () {
        return props.open;
      }, function () {
        setInnerOpen(props.open);
      }); // Not trigger `open` in `combobox` when `notFoundContent` is empty

      var emptyListContent = computed(function () {
        return !props.notFoundContent && !displayOptions.value.length;
      });
      watchEffect(function () {
        mergedOpen.value = innerOpen.value;

        if (props.disabled || emptyListContent.value && mergedOpen.value && props.mode === 'combobox') {
          mergedOpen.value = false;
        }
      });
      var triggerOpen = computed(function () {
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

      useSelectTriggerControl([containerRef, triggerRef], triggerOpen, onToggleOpen); // ============================= Search =============================

      var triggerSearch = function triggerSearch(searchText, fromTyping, isCompositing) {
        var ret = true;
        var newSearchText = searchText;
        var preSearchValue = mergedSearchValue.value;
        setActiveValue(null); // Check if match the `tokenSeparators`

        var patchLabels = isCompositing ? null : getSeparatedContent(searchText, props.tokenSeparators);
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

          var newRawValues = Array.from(new Set([].concat(_toConsumableArray(mergedRawValue.value), _toConsumableArray(patchRawValues))));
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

        var newRawValues = Array.from(new Set([].concat(_toConsumableArray(mergedRawValue.value), [searchText])));
        triggerChange(newRawValues);
        newRawValues.forEach(function (newRawValue) {
          triggerSelect(newRawValue, true, 'input');
        });
        setInnerSearchValue('');
      }; // Close dropdown when disabled change


      watch(function () {
        return props.disabled;
      }, function () {
        if (innerOpen.value && !!props.disabled) {
          setInnerOpen(false);
        }
      }, {
        immediate: true
      }); // Close will clean up single mode search text

      watch(mergedOpen, function () {
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

      var _useLock = useLock(),
          _useLock2 = _slicedToArray(_useLock, 2),
          getClearLock = _useLock2[0],
          setClearLock = _useLock2[1]; // KeyDown


      var onInternalKeyDown = function onInternalKeyDown(event) {
        var clearLock = getClearLock();
        var which = event.which;

        if (which === KeyCode.ENTER) {
          // Do not submit form when type in the input
          if (props.mode !== 'combobox') {
            event.preventDefault();
          } // We only manage open state here, close logic should handle by list component


          if (!mergedOpen.value) {
            onToggleOpen(true);
          }
        }

        setClearLock(!!mergedSearchValue.value); // Remove value by `backspace`

        if (which === KeyCode.BACKSPACE && !clearLock && isMultiple.value && !mergedSearchValue.value && mergedRawValue.value.length) {
          var removeInfo = removeLastEnabledValue(displayValues.value, mergedRawValue.value);

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


      var focusRef = ref(false);

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
            triggerChange(Array.from(new Set([].concat(_toConsumableArray(mergedRawValue.value), [searchVal]))));
          } else if (props.mode === 'multiple') {
            // `multiple` mode only clean the search value but not trigger event
            setInnerSearchValue('');
          }
        }

        if (props.onBlur) {
          props.onBlur(arguments.length <= 0 ? undefined : arguments[0]);
        }
      };

      provide('VCSelectContainerEvent', {
        focus: onContainerFocus,
        blur: onContainerBlur
      });
      var activeTimeoutIds = [];
      onMounted(function () {
        activeTimeoutIds.forEach(function (timeoutId) {
          return window.clearTimeout(timeoutId);
        });
        activeTimeoutIds.splice(0, activeTimeoutIds.length);
      });
      onBeforeUnmount(function () {
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


      var accessibilityIndex = ref(0);
      var mergedDefaultActiveFirstOption = computed(function () {
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


      var containerWidth = ref(null);
      onMounted(function () {
        watch(triggerOpen, function () {
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

      var popupNode = _createVNode(OptionList, {
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
        clearNode = _createVNode(TransBtn, {
          "class": "".concat(prefixCls, "-clear"),
          "onMousedown": onClearMouseDown,
          "customizeIcon": clearIcon
        }, {
          default: function _default() {
            return [_createTextVNode("\xD7")];
          }
        });
      } // ============================= Arrow ==============================


      var mergedShowArrow = showArrow !== undefined ? showArrow : loading || !isMultiple && mode !== 'combobox';
      var arrowNode;

      if (mergedShowArrow) {
        arrowNode = _createVNode(TransBtn, {
          "class": classNames("".concat(prefixCls, "-arrow"), _defineProperty({}, "".concat(prefixCls, "-arrow-loading"), loading)),
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


      var mergedClassName = classNames(prefixCls, className, (_classNames2 = {}, _defineProperty(_classNames2, "".concat(prefixCls, "-focused"), mockFocused), _defineProperty(_classNames2, "".concat(prefixCls, "-multiple"), isMultiple), _defineProperty(_classNames2, "".concat(prefixCls, "-single"), !isMultiple), _defineProperty(_classNames2, "".concat(prefixCls, "-allow-clear"), allowClear), _defineProperty(_classNames2, "".concat(prefixCls, "-show-arrow"), mergedShowArrow), _defineProperty(_classNames2, "".concat(prefixCls, "-disabled"), disabled), _defineProperty(_classNames2, "".concat(prefixCls, "-loading"), loading), _defineProperty(_classNames2, "".concat(prefixCls, "-open"), mergedOpen), _defineProperty(_classNames2, "".concat(prefixCls, "-customize-input"), customizeInputElement), _defineProperty(_classNames2, "".concat(prefixCls, "-show-search"), mergedShowSearch), _classNames2));
      return _createVNode("div", _objectSpread(_objectSpread({
        "class": mergedClassName
      }, domProps), {}, {
        "ref": "containerRef",
        "onMousedown": onInternalMouseDown,
        "onKeydown": onInternalKeyDown,
        "onKeyup": onInternalKeyUp
      }), [mockFocused && !mergedOpen && _createVNode("span", {
        "style": {
          width: 0,
          height: 0,
          display: 'flex',
          overflow: 'hidden',
          opacity: 0
        },
        "aria-live": "polite"
      }, ["".concat(mergedRawValue.join(', '))]), _createVNode(SelectTrigger, {
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
          return [_createVNode(Selector, _objectSpread(_objectSpread({}, _this.$props), {}, {
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