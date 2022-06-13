"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _vueTypes = _interopRequireDefault(require("../_util/vue-types"));

var _vcCascader = _interopRequireDefault(require("../vc-cascader"));

var _arrayTreeFilter = _interopRequireDefault(require("array-tree-filter"));

var _classNames4 = _interopRequireDefault(require("../_util/classNames"));

var _omit = _interopRequireDefault(require("omit.js"));

var _KeyCode = _interopRequireDefault(require("../_util/KeyCode"));

var _input = _interopRequireDefault(require("../input"));

var _CloseCircleFilled = _interopRequireDefault(require("@ant-design/icons-vue/lib/icons/CloseCircleFilled"));

var _DownOutlined = _interopRequireDefault(require("@ant-design/icons-vue/lib/icons/DownOutlined"));

var _RightOutlined = _interopRequireDefault(require("@ant-design/icons-vue/lib/icons/RightOutlined"));

var _RedoOutlined = _interopRequireDefault(require("@ant-design/icons-vue/lib/icons/RedoOutlined"));

var _propsUtil = require("../_util/props-util");

var _BaseMixin = _interopRequireDefault(require("../_util/BaseMixin"));

var _vnode = require("../_util/vnode");

var _warning = _interopRequireDefault(require("../_util/warning"));

var _configProvider = require("../config-provider");

var _type = require("../_util/type");

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

// const ShowSearchType = PropTypes.shape({
//   filter: PropTypes.func,
//   render: PropTypes.func,
//   sort: PropTypes.func,
//   matchInputWidth: PropTypes.looseBool,
//   limit: withUndefined(PropTypes.oneOfType([Boolean, Number])),
// }).loose;
function noop() {}

var cascaderProps = {
  /** 可选项数据源 */
  options: {
    type: Array,
    default: []
  },

  /** 默认的选中项 */
  defaultValue: _vueTypes.default.array,

  /** 指定选中项 */
  value: _vueTypes.default.array,

  /** 选择完成后的回调 */
  // onChange?: (value: string[], selectedOptions?: CascaderOptionType[]) => void;

  /** 选择后展示的渲染函数 */
  displayRender: _vueTypes.default.func,
  transitionName: _vueTypes.default.string.def('slide-up'),
  popupStyle: _vueTypes.default.object.def(function () {
    return {};
  }),

  /** 自定义浮层类名 */
  popupClassName: _vueTypes.default.string,

  /** 浮层预设位置：`bottomLeft` `bottomRight` `topLeft` `topRight` */
  popupPlacement: _vueTypes.default.oneOf((0, _type.tuple)('bottomLeft', 'bottomRight', 'topLeft', 'topRight')).def('bottomLeft'),

  /** 输入框占位文本*/
  placeholder: _vueTypes.default.string.def('Please select'),

  /** 输入框大小，可选 `large` `default` `small` */
  size: _vueTypes.default.oneOf((0, _type.tuple)('large', 'default', 'small')),

  /** 禁用*/
  disabled: _vueTypes.default.looseBool.def(false),

  /** 是否支持清除*/
  allowClear: _vueTypes.default.looseBool.def(true),
  showSearch: {
    type: [Boolean, Object],
    default: undefined
  },
  notFoundContent: _vueTypes.default.VNodeChild,
  loadData: _vueTypes.default.func,

  /** 次级菜单的展开方式，可选 'click' 和 'hover' */
  expandTrigger: _vueTypes.default.oneOf((0, _type.tuple)('click', 'hover')),

  /** 当此项为 true 时，点选每级菜单选项值都会发生变化 */
  changeOnSelect: _vueTypes.default.looseBool,

  /** 浮层可见变化时回调 */
  // onPopupVisibleChange?: (popupVisible: boolean) => void;
  prefixCls: _vueTypes.default.string,
  inputPrefixCls: _vueTypes.default.string,
  getPopupContainer: _vueTypes.default.func,
  popupVisible: _vueTypes.default.looseBool,
  fieldNames: {
    type: Object
  },
  autofocus: _vueTypes.default.looseBool,
  suffixIcon: _vueTypes.default.VNodeChild,
  showSearchRender: _vueTypes.default.any,
  onChange: _vueTypes.default.func,
  onPopupVisibleChange: _vueTypes.default.func,
  onFocus: _vueTypes.default.func,
  onBlur: _vueTypes.default.func,
  onSearch: _vueTypes.default.func,
  'onUpdate:value': _vueTypes.default.func
}; // We limit the filtered item count by default

var defaultLimit = 50;

function defaultFilterOption(inputValue, path, names) {
  return path.some(function (option) {
    return option[names.label].indexOf(inputValue) > -1;
  });
}

function defaultSortFilteredOption(a, b, inputValue, names) {
  function callback(elem) {
    return elem[names.label].indexOf(inputValue) > -1;
  }

  return a.findIndex(callback) - b.findIndex(callback);
}

function getFilledFieldNames(props) {
  var fieldNames = props.fieldNames || {};
  var names = {
    children: fieldNames.children || 'children',
    label: fieldNames.label || 'label',
    value: fieldNames.value || 'value'
  };
  return names;
}

function flattenTree(options, props) {
  var ancestor = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  var names = getFilledFieldNames(props);
  var flattenOptions = [];
  var childrenName = names.children;
  options.forEach(function (option) {
    var path = ancestor.concat(option);

    if (props.changeOnSelect || !option[childrenName] || !option[childrenName].length) {
      flattenOptions.push(path);
    }

    if (option[childrenName]) {
      flattenOptions = flattenOptions.concat(flattenTree(option[childrenName], props, path));
    }
  });
  return flattenOptions;
}

var defaultDisplayRender = function defaultDisplayRender(_ref) {
  var labels = _ref.labels;
  return labels.join(' / ');
};

var Cascader = (0, _vue.defineComponent)({
  name: 'ACascader',
  mixins: [_BaseMixin.default],
  inheritAttrs: false,
  props: cascaderProps,
  setup: function setup() {
    return {
      configProvider: (0, _vue.inject)('configProvider', _configProvider.defaultConfigProvider),
      localeData: (0, _vue.inject)('localeData', {}),
      cachedOptions: [],
      popupRef: undefined,
      input: undefined
    };
  },
  data: function data() {
    var _this$$props = this.$props,
        value = _this$$props.value,
        defaultValue = _this$$props.defaultValue,
        popupVisible = _this$$props.popupVisible,
        showSearch = _this$$props.showSearch,
        options = _this$$props.options;
    return {
      sValue: value || defaultValue || [],
      inputValue: '',
      inputFocused: false,
      sPopupVisible: popupVisible,
      flattenOptions: showSearch ? flattenTree(options, this.$props) : undefined
    };
  },
  watch: {
    value: function value(val) {
      this.setState({
        sValue: val || []
      });
    },
    popupVisible: function popupVisible(val) {
      this.setState({
        sPopupVisible: val
      });
    },
    options: function options(val) {
      if (this.showSearch) {
        this.setState({
          flattenOptions: flattenTree(val, this.$props)
        });
      }
    }
  },
  // model: {
  //   prop: 'value',
  //   event: 'change',
  // },
  created: function created() {
    (0, _vue.provide)('savePopupRef', this.savePopupRef);
  },
  methods: {
    savePopupRef: function savePopupRef(ref) {
      this.popupRef = ref;
    },
    highlightKeyword: function highlightKeyword(str, keyword, prefixCls) {
      return str.split(keyword).map(function (node, index) {
        return index === 0 ? node : [(0, _vue.createVNode)("span", {
          "class": "".concat(prefixCls, "-menu-item-keyword")
        }, [keyword]), node];
      });
    },
    defaultRenderFilteredOption: function defaultRenderFilteredOption(opt) {
      var _this = this;

      var inputValue = opt.inputValue,
          path = opt.path,
          prefixCls = opt.prefixCls,
          names = opt.names;
      return path.map(function (option, index) {
        var label = option[names.label];
        var node = label.indexOf(inputValue) > -1 ? _this.highlightKeyword(label, inputValue, prefixCls) : label;
        return index === 0 ? node : [' / ', node];
      });
    },
    saveInput: function saveInput(node) {
      this.input = node;
    },
    handleChange: function handleChange(value, selectedOptions) {
      this.setState({
        inputValue: ''
      });

      if (selectedOptions[0].__IS_FILTERED_OPTION) {
        var unwrappedValue = value[0];
        var unwrappedSelectedOptions = selectedOptions[0].path;
        this.setValue(unwrappedValue, unwrappedSelectedOptions);
        return;
      }

      this.setValue(value, selectedOptions);
    },
    handlePopupVisibleChange: function handlePopupVisibleChange(popupVisible) {
      if (!(0, _propsUtil.hasProp)(this, 'popupVisible')) {
        this.setState(function (state) {
          return {
            sPopupVisible: popupVisible,
            inputFocused: popupVisible,
            inputValue: popupVisible ? state.inputValue : ''
          };
        });
      }

      this.$emit('popupVisibleChange', popupVisible);
    },
    handleInputFocus: function handleInputFocus(e) {
      this.$emit('focus', e);
    },
    handleInputBlur: function handleInputBlur(e) {
      this.setState({
        inputFocused: false
      });
      this.$emit('blur', e);
    },
    handleInputClick: function handleInputClick(e) {
      var inputFocused = this.inputFocused,
          sPopupVisible = this.sPopupVisible; // Prevent `Trigger` behavior.

      if (inputFocused || sPopupVisible) {
        e.stopPropagation();

        if (e.nativeEvent && e.nativeEvent.stopImmediatePropagation) {
          e.nativeEvent.stopImmediatePropagation();
        }
      }
    },
    handleKeyDown: function handleKeyDown(e) {
      if (e.keyCode === _KeyCode.default.BACKSPACE || e.keyCode === _KeyCode.default.SPACE) {
        e.stopPropagation();
      }
    },
    handleInputChange: function handleInputChange(e) {
      var inputValue = e.target.value;
      this.setState({
        inputValue: inputValue
      });
      this.$emit('search', inputValue);
    },
    setValue: function setValue(value) {
      var selectedOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

      if (!(0, _propsUtil.hasProp)(this, 'value')) {
        this.setState({
          sValue: value
        });
      }

      this.$emit('update:value', value);
      this.$emit('change', value, selectedOptions);
    },
    getLabel: function getLabel() {
      var options = this.options;
      var names = getFilledFieldNames(this.$props);
      var displayRender = (0, _propsUtil.getComponent)(this, 'displayRender', {}, false) || defaultDisplayRender;
      var value = this.sValue;
      var unwrappedValue = Array.isArray(value[0]) ? value[0] : value;
      var selectedOptions = (0, _arrayTreeFilter.default)(options, function (o, level) {
        return o[names.value] === unwrappedValue[level];
      }, {
        childrenKeyName: names.children
      });
      var labels = selectedOptions.map(function (o) {
        return o[names.label];
      });
      return displayRender({
        labels: labels,
        selectedOptions: selectedOptions
      });
    },
    clearSelection: function clearSelection(e) {
      e.preventDefault();
      e.stopPropagation();

      if (!this.inputValue) {
        this.setValue([]);
        this.handlePopupVisibleChange(false);
      } else {
        this.setState({
          inputValue: ''
        });
      }
    },
    generateFilteredOptions: function generateFilteredOptions(prefixCls, renderEmpty) {
      var _ref3;

      var showSearch = this.showSearch,
          notFoundContent = this.notFoundContent;
      var names = getFilledFieldNames(this.$props);
      var _showSearch$filter = showSearch.filter,
          filter = _showSearch$filter === void 0 ? defaultFilterOption : _showSearch$filter,
          _showSearch$sort = showSearch.sort,
          sort = _showSearch$sort === void 0 ? defaultSortFilteredOption : _showSearch$sort,
          _showSearch$limit = showSearch.limit,
          limit = _showSearch$limit === void 0 ? defaultLimit : _showSearch$limit;
      var render = showSearch.render || (0, _propsUtil.getComponent)(this, 'showSearchRender') || this.defaultRenderFilteredOption;
      var _this$$data = this.$data,
          _this$$data$flattenOp = _this$$data.flattenOptions,
          flattenOptions = _this$$data$flattenOp === void 0 ? [] : _this$$data$flattenOp,
          inputValue = _this$$data.inputValue; // Limit the filter if needed

      var filtered;

      if (limit > 0) {
        filtered = [];
        var matchCount = 0; // Perf optimization to filter items only below the limit

        flattenOptions.some(function (path) {
          var match = filter(inputValue, path, names);

          if (match) {
            filtered.push(path);
            matchCount += 1;
          }

          return matchCount >= limit;
        });
      } else {
        (0, _warning.default)(typeof limit !== 'number', 'Cascader', "'limit' of showSearch in Cascader should be positive number or false.");
        filtered = flattenOptions.filter(function (path) {
          return filter(inputValue, path, names);
        });
      }

      filtered.sort(function (a, b) {
        return sort(a, b, inputValue, names);
      });

      if (filtered.length > 0) {
        return filtered.map(function (path) {
          var _ref2;

          return _ref2 = {
            __IS_FILTERED_OPTION: true,
            path: path
          }, (0, _defineProperty2.default)(_ref2, names.label, render({
            inputValue: inputValue,
            path: path,
            prefixCls: prefixCls,
            names: names
          })), (0, _defineProperty2.default)(_ref2, names.value, path.map(function (o) {
            return o[names.value];
          })), (0, _defineProperty2.default)(_ref2, "disabled", path.some(function (o) {
            return !!o.disabled;
          })), _ref2;
        });
      }

      return [(_ref3 = {}, (0, _defineProperty2.default)(_ref3, names.label, notFoundContent || renderEmpty('Cascader')), (0, _defineProperty2.default)(_ref3, names.value, 'ANT_CASCADER_NOT_FOUND'), (0, _defineProperty2.default)(_ref3, "disabled", true), _ref3)];
    },
    focus: function focus() {
      this.input && this.input.focus();
    },
    blur: function blur() {
      this.input && this.input.blur();
    }
  },
  render: function render() {
    var _classNames, _classNames2, _classNames3;

    var sPopupVisible = this.sPopupVisible,
        inputValue = this.inputValue,
        configProvider = this.configProvider,
        localeData = this.localeData;
    var _this$$data2 = this.$data,
        value = _this$$data2.sValue,
        inputFocused = _this$$data2.inputFocused;
    var props = (0, _propsUtil.getOptionProps)(this);
    var suffixIcon = (0, _propsUtil.getComponent)(this, 'suffixIcon');
    suffixIcon = Array.isArray(suffixIcon) ? suffixIcon[0] : suffixIcon;
    var getContextPopupContainer = configProvider.getPopupContainer;

    var _a = props,
        customizePrefixCls = _a.prefixCls,
        customizeInputPrefixCls = _a.inputPrefixCls,
        _a$placeholder = _a.placeholder,
        placeholder = _a$placeholder === void 0 ? localeData.placeholder : _a$placeholder,
        size = _a.size,
        disabled = _a.disabled,
        allowClear = _a.allowClear,
        _a$showSearch = _a.showSearch,
        showSearch = _a$showSearch === void 0 ? false : _a$showSearch,
        notFoundContent = _a.notFoundContent,
        otherProps = __rest(_a, ["prefixCls", "inputPrefixCls", "placeholder", "size", "disabled", "allowClear", "showSearch", "notFoundContent"]);

    var _splitAttrs = (0, _propsUtil.splitAttrs)(this.$attrs),
        onEvents = _splitAttrs.onEvents,
        extraAttrs = _splitAttrs.extraAttrs;

    var className = extraAttrs.class,
        style = extraAttrs.style,
        restAttrs = __rest(extraAttrs, ["class", "style"]);

    var getPrefixCls = this.configProvider.getPrefixCls;
    var renderEmpty = this.configProvider.renderEmpty;
    var prefixCls = getPrefixCls('cascader', customizePrefixCls);
    var inputPrefixCls = getPrefixCls('input', customizeInputPrefixCls);
    var sizeCls = (0, _classNames4.default)((_classNames = {}, (0, _defineProperty2.default)(_classNames, "".concat(inputPrefixCls, "-lg"), size === 'large'), (0, _defineProperty2.default)(_classNames, "".concat(inputPrefixCls, "-sm"), size === 'small'), _classNames));
    var clearIcon = allowClear && !disabled && value.length > 0 || inputValue ? (0, _vue.createVNode)(_CloseCircleFilled.default, {
      "class": "".concat(prefixCls, "-picker-clear"),
      "onClick": this.clearSelection,
      "key": "clear-icon"
    }, null) : null;
    var arrowCls = (0, _classNames4.default)((_classNames2 = {}, (0, _defineProperty2.default)(_classNames2, "".concat(prefixCls, "-picker-arrow"), true), (0, _defineProperty2.default)(_classNames2, "".concat(prefixCls, "-picker-arrow-expand"), sPopupVisible), _classNames2));
    var pickerCls = (0, _classNames4.default)(className, "".concat(prefixCls, "-picker"), (_classNames3 = {}, (0, _defineProperty2.default)(_classNames3, "".concat(prefixCls, "-picker-with-value"), inputValue), (0, _defineProperty2.default)(_classNames3, "".concat(prefixCls, "-picker-disabled"), disabled), (0, _defineProperty2.default)(_classNames3, "".concat(prefixCls, "-picker-").concat(size), !!size), (0, _defineProperty2.default)(_classNames3, "".concat(prefixCls, "-picker-show-search"), !!showSearch), (0, _defineProperty2.default)(_classNames3, "".concat(prefixCls, "-picker-focused"), inputFocused), _classNames3)); // Fix bug of https://github.com/facebook/react/pull/5004
    // and https://fb.me/react-unknown-prop

    var tempInputProps = (0, _omit.default)(otherProps, ['popupStyle', 'options', 'popupPlacement', 'transitionName', 'displayRender', 'changeOnSelect', 'expandTrigger', 'popupVisible', 'getPopupContainer', 'loadData', 'popupClassName', 'filterOption', 'renderFilteredOption', 'sortFilteredOption', 'notFoundContent', 'defaultValue', 'fieldNames', 'onChange', 'onPopupVisibleChange', 'onFocus', 'onBlur', 'onSearch', 'onUpdate:value']);
    var options = props.options;
    var names = getFilledFieldNames(this.$props);

    if (options && options.length > 0) {
      if (inputValue) {
        options = this.generateFilteredOptions(prefixCls, renderEmpty);
      }
    } else {
      var _ref4;

      options = [(_ref4 = {}, (0, _defineProperty2.default)(_ref4, names.label, notFoundContent || renderEmpty('Cascader')), (0, _defineProperty2.default)(_ref4, names.value, 'ANT_CASCADER_NOT_FOUND'), (0, _defineProperty2.default)(_ref4, "disabled", true), _ref4)];
    } // Dropdown menu should keep previous status until it is fully closed.


    if (!sPopupVisible) {
      options = this.cachedOptions;
    } else {
      this.cachedOptions = options;
    }

    var dropdownMenuColumnStyle = {};
    var isNotFound = (options || []).length === 1 && options[0].value === 'ANT_CASCADER_NOT_FOUND';

    if (isNotFound) {
      dropdownMenuColumnStyle.height = 'auto'; // Height of one row.
    } // The default value of `matchInputWidth` is `true`


    var resultListMatchInputWidth = showSearch.matchInputWidth !== false;

    if (resultListMatchInputWidth && (inputValue || isNotFound) && this.input) {
      dropdownMenuColumnStyle.width = (0, _propsUtil.findDOMNode)(this.input.input).offsetWidth + 'px';
    } // showSearch时，focus、blur在input上触发，反之在ref='picker'上触发


    var inputProps = (0, _extends2.default)((0, _extends2.default)((0, _extends2.default)({}, restAttrs), tempInputProps), {
      prefixCls: inputPrefixCls,
      placeholder: value && value.length > 0 ? undefined : placeholder,
      value: inputValue,
      disabled: disabled,
      readonly: !showSearch,
      autocomplete: 'off',
      class: "".concat(prefixCls, "-input ").concat(sizeCls),
      onFocus: this.handleInputFocus,
      onClick: showSearch ? this.handleInputClick : noop,
      onBlur: showSearch ? this.handleInputBlur : props.onBlur,
      onKeydown: this.handleKeyDown,
      onChange: showSearch ? this.handleInputChange : noop
    });
    var children = (0, _propsUtil.getSlot)(this);
    var inputIcon = suffixIcon && ((0, _propsUtil.isValidElement)(suffixIcon) ? (0, _vnode.cloneElement)(suffixIcon, {
      class: "".concat(prefixCls, "-picker-arrow")
    }) : (0, _vue.createVNode)("span", {
      "class": "".concat(prefixCls, "-picker-arrow")
    }, [suffixIcon])) || (0, _vue.createVNode)(_DownOutlined.default, {
      "class": arrowCls
    }, null);
    var input = children.length ? children : (0, _vue.createVNode)("span", {
      "class": pickerCls,
      "style": style
    }, [(0, _vue.createVNode)("span", {
      "class": "".concat(prefixCls, "-picker-label")
    }, [this.getLabel()]), (0, _vue.createVNode)(_input.default, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, inputProps), {}, {
      "ref": this.saveInput
    }), null), clearIcon, inputIcon]);
    var expandIcon = (0, _vue.createVNode)(_RightOutlined.default, null, null);
    var loadingIcon = (0, _vue.createVNode)("span", {
      "class": "".concat(prefixCls, "-menu-item-loading-icon")
    }, [(0, _vue.createVNode)(_RedoOutlined.default, {
      "spin": true
    }, null)]);
    var getPopupContainer = props.getPopupContainer || getContextPopupContainer;
    var cascaderProps = (0, _extends2.default)((0, _extends2.default)((0, _extends2.default)((0, _extends2.default)({}, props), {
      getPopupContainer: getPopupContainer,
      options: options,
      prefixCls: prefixCls,
      value: value,
      popupVisible: sPopupVisible,
      dropdownMenuColumnStyle: dropdownMenuColumnStyle,
      expandIcon: expandIcon,
      loadingIcon: loadingIcon
    }), onEvents), {
      onPopupVisibleChange: this.handlePopupVisibleChange,
      onChange: this.handleChange
    });
    return (0, _vue.createVNode)(_vcCascader.default, cascaderProps, {
      default: function _default() {
        return [input];
      }
    });
  }
});

var _default2 = (0, _type.withInstall)(Cascader);

exports.default = _default2;