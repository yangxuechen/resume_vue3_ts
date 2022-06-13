import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _extends from "@babel/runtime/helpers/esm/extends";
import { createVNode as _createVNode } from "vue";

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

import { defineComponent, provide, withDirectives } from 'vue';
import classNames from '../../_util/classNames';
import omit from 'omit.js';
import KeyCode from '../../_util/KeyCode';
import BaseMixin from '../../_util/BaseMixin';
import { hasProp, getOptionProps, initDefaultProps } from '../../_util/props-util';
import warning from 'warning';
import { getBeforeSelectionText, getLastMeasureIndex, replaceWithMeasure, setInputSelection } from './util';
import KeywordTrigger from './KeywordTrigger';
import { vcMentionsProps, defaultProps } from './mentionsProps';
import antInput from '../../_util/antInputDirective';

function noop() {}

var Mentions = {
  name: 'Mentions',
  mixins: [BaseMixin],
  inheritAttrs: false,
  props: initDefaultProps(vcMentionsProps, defaultProps),
  created: function created() {
    this.mentionsContext = provide('mentionsContext', this);
  },
  data: function data() {
    var _this$$props = this.$props,
        _this$$props$value = _this$$props.value,
        value = _this$$props$value === void 0 ? '' : _this$$props$value,
        _this$$props$defaultV = _this$$props.defaultValue,
        defaultValue = _this$$props$defaultV === void 0 ? '' : _this$$props$defaultV;
    warning(this.$props.children, 'please children prop replace slots.default');
    return {
      _value: !hasProp(this, 'value') ? defaultValue : value,
      measuring: false,
      measureLocation: 0,
      measureText: null,
      measurePrefix: '',
      activeIndex: 0,
      isFocus: false
    };
  },
  watch: {
    value: function value(val) {
      this.$data._value = val;
    }
  },
  updated: function updated() {
    var _this = this;

    this.$nextTick(function () {
      var measuring = _this.$data.measuring; // Sync measure div top with textarea for rc-trigger usage

      if (measuring) {
        _this.$refs.measure.scrollTop = _this.$refs.textarea.scrollTop;
      }
    });
  },
  methods: {
    triggerChange: function triggerChange(value) {
      var props = getOptionProps(this);

      if (!('value' in props)) {
        this.setState({
          _value: value
        });
      } else {
        this.$forceUpdate();
      }

      this.__emit('change', value);
    },
    onChange: function onChange(_ref) {
      var _ref$target = _ref.target,
          value = _ref$target.value,
          composing = _ref$target.composing,
          isComposing = _ref.isComposing;
      if (isComposing || composing) return;
      this.triggerChange(value);
    },
    onKeyDown: function onKeyDown(event) {
      var which = event.which;
      var _this$$data = this.$data,
          activeIndex = _this$$data.activeIndex,
          measuring = _this$$data.measuring; // Skip if not measuring

      if (!measuring) {
        return;
      }

      if (which === KeyCode.UP || which === KeyCode.DOWN) {
        // Control arrow function
        var optionLen = this.getOptions().length;
        var offset = which === KeyCode.UP ? -1 : 1;
        var newActiveIndex = (activeIndex + offset + optionLen) % optionLen;
        this.setState({
          activeIndex: newActiveIndex
        });
        event.preventDefault();
      } else if (which === KeyCode.ESC) {
        this.stopMeasure();
      } else if (which === KeyCode.ENTER) {
        // Measure hit
        event.preventDefault();
        var options = this.getOptions();

        if (!options.length) {
          this.stopMeasure();
          return;
        }

        var option = options[activeIndex];
        this.selectOption(option);
      }
    },

    /**
     * When to start measure:
     * 1. When user press `prefix`
     * 2. When measureText !== prevMeasureText
     *  - If measure hit
     *  - If measuring
     *
     * When to stop measure:
     * 1. Selection is out of range
     * 2. Contains `space`
     * 3. ESC or select one
     */
    onKeyUp: function onKeyUp(event) {
      var key = event.key,
          which = event.which;
      var _this$$data2 = this.$data,
          prevMeasureText = _this$$data2.measureText,
          measuring = _this$$data2.measuring;
      var _this$$props2 = this.$props,
          _this$$props2$prefix = _this$$props2.prefix,
          prefix = _this$$props2$prefix === void 0 ? '' : _this$$props2$prefix,
          validateSearch = _this$$props2.validateSearch;
      var target = event.target;

      if (target.composing) {
        return;
      }

      var selectionStartText = getBeforeSelectionText(target);

      var _getLastMeasureIndex = getLastMeasureIndex(selectionStartText, prefix),
          measureIndex = _getLastMeasureIndex.location,
          measurePrefix = _getLastMeasureIndex.prefix; // Skip if match the white key list


      if ([KeyCode.ESC, KeyCode.UP, KeyCode.DOWN, KeyCode.ENTER].indexOf(which) !== -1) {
        return;
      }

      if (measureIndex !== -1) {
        var measureText = selectionStartText.slice(measureIndex + measurePrefix.length);
        var validateMeasure = validateSearch(measureText, this.$props);
        var matchOption = !!this.getOptions(measureText).length;

        if (validateMeasure) {
          if (key === measurePrefix || measuring || measureText !== prevMeasureText && matchOption) {
            this.startMeasure(measureText, measurePrefix, measureIndex);
          }
        } else if (measuring) {
          // Stop if measureText is invalidate
          this.stopMeasure();
        }
        /**
         * We will trigger `onSearch` to developer since they may use for async update.
         * If met `space` means user finished searching.
         */


        if (validateMeasure) {
          this.__emit('search', measureText, measurePrefix);
        }
      } else if (measuring) {
        this.stopMeasure();
      }
    },
    onInputFocus: function onInputFocus(event) {
      this.onFocus(event);
    },
    onInputBlur: function onInputBlur(event) {
      this.onBlur(event);
    },
    onDropdownFocus: function onDropdownFocus() {
      this.onFocus();
    },
    onDropdownBlur: function onDropdownBlur() {
      this.onBlur();
    },
    onFocus: function onFocus(event) {
      window.clearTimeout(this.focusId);
      var isFocus = this.$data.isFocus;

      if (!isFocus && event) {
        this.__emit('focus', event);
      }

      this.setState({
        isFocus: true
      });
    },
    onBlur: function onBlur(event) {
      var _this2 = this;

      this.focusId = window.setTimeout(function () {
        _this2.setState({
          isFocus: false
        });

        _this2.stopMeasure();

        _this2.__emit('blur', event);
      }, 100);
    },
    selectOption: function selectOption(option) {
      var _this3 = this;

      var _this$$data3 = this.$data,
          value = _this$$data3._value,
          measureLocation = _this$$data3.measureLocation,
          measurePrefix = _this$$data3.measurePrefix;
      var split = this.$props.split;
      var _option$value = option.value,
          mentionValue = _option$value === void 0 ? '' : _option$value;

      var _replaceWithMeasure = replaceWithMeasure(value, {
        measureLocation: measureLocation,
        targetText: mentionValue,
        prefix: measurePrefix,
        selectionStart: this.$refs.textarea.selectionStart,
        split: split
      }),
          text = _replaceWithMeasure.text,
          selectionLocation = _replaceWithMeasure.selectionLocation;

      this.triggerChange(text);
      this.stopMeasure(function () {
        // We need restore the selection position
        setInputSelection(_this3.$refs.textarea, selectionLocation);
      });

      this.__emit('select', option, measurePrefix);
    },
    setActiveIndex: function setActiveIndex(activeIndex) {
      this.setState({
        activeIndex: activeIndex
      });
    },
    getOptions: function getOptions(measureText) {
      var targetMeasureText = measureText || this.$data.measureText || '';
      var _this$$props3 = this.$props,
          filterOption = _this$$props3.filterOption,
          _this$$props3$childre = _this$$props3.children,
          children = _this$$props3$childre === void 0 ? [] : _this$$props3$childre;
      var list = (Array.isArray(children) ? children : [children]).map(function (item) {
        var _a, _b;

        return _extends(_extends({}, getOptionProps(item)), {
          children: (_b = (_a = item.children).default) === null || _b === void 0 ? void 0 : _b.call(_a)
        });
      }).filter(function (option) {
        /** Return all result if `filterOption` is false. */
        if (filterOption === false) {
          return true;
        }

        return filterOption(targetMeasureText, option);
      });
      return list;
    },
    startMeasure: function startMeasure(measureText, measurePrefix, measureLocation) {
      this.setState({
        measuring: true,
        measureText: measureText,
        measurePrefix: measurePrefix,
        measureLocation: measureLocation,
        activeIndex: 0
      });
    },
    stopMeasure: function stopMeasure(callback) {
      this.setState({
        measuring: false,
        measureLocation: 0,
        measureText: null
      }, callback);
    },
    focus: function focus() {
      this.$refs.textarea.focus();
    },
    blur: function blur() {
      this.$refs.textarea.blur();
    }
  },
  render: function render() {
    var _this$$data4 = this.$data,
        value = _this$$data4._value,
        measureLocation = _this$$data4.measureLocation,
        measurePrefix = _this$$data4.measurePrefix,
        measuring = _this$$data4.measuring;

    var _a = getOptionProps(this),
        prefixCls = _a.prefixCls,
        placement = _a.placement,
        transitionName = _a.transitionName,
        notFoundContent = _a.notFoundContent,
        getPopupContainer = _a.getPopupContainer,
        restProps = __rest(_a, ["prefixCls", "placement", "transitionName", "notFoundContent", "getPopupContainer"]);

    var _b = this.$attrs,
        className = _b.class,
        style = _b.style,
        otherAttrs = __rest(_b, ["class", "style"]);

    var inputProps = omit(restProps, ['value', 'defaultValue', 'prefix', 'split', 'children', 'validateSearch', 'filterOption']);
    var options = measuring ? this.getOptions() : [];

    var textareaProps = _extends(_extends(_extends({}, inputProps), otherAttrs), {
      onChange: noop,
      onSelect: noop,
      value: value,
      onInput: this.onChange,
      onBlur: this.onInputBlur,
      onKeydown: this.onKeyDown,
      onKeyup: this.onKeyUp,
      onFocus: this.onInputFocus
    });

    return _createVNode("div", {
      "class": classNames(prefixCls, className),
      "style": style
    }, [withDirectives(_createVNode("textarea", _objectSpread({
      "ref": "textarea"
    }, textareaProps), null), [[antInput]]), measuring && _createVNode("div", {
      "ref": "measure",
      "class": "".concat(prefixCls, "-measure")
    }, [value.slice(0, measureLocation), _createVNode(KeywordTrigger, {
      "prefixCls": prefixCls,
      "transitionName": transitionName,
      "placement": placement,
      "options": options,
      "visible": true,
      "getPopupContainer": getPopupContainer
    }, {
      default: function _default() {
        return [_createVNode("span", null, [measurePrefix])];
      }
    }), value.slice(measureLocation + measurePrefix.length)])]);
  }
};
export default defineComponent(Mentions);