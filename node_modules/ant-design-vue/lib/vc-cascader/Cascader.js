"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _propsUtil = require("../_util/props-util");

var _vueTypes = _interopRequireDefault(require("../_util/vue-types"));

var _vcTrigger = _interopRequireDefault(require("../vc-trigger"));

var _Menus = _interopRequireDefault(require("./Menus"));

var _KeyCode = _interopRequireDefault(require("../_util/KeyCode"));

var _arrayTreeFilter = _interopRequireDefault(require("array-tree-filter"));

var _arrays = _interopRequireDefault(require("shallow-equal/arrays"));

var _BaseMixin = _interopRequireDefault(require("../_util/BaseMixin"));

var _vnode = require("../_util/vnode");

var _isEqual = _interopRequireDefault(require("lodash/isEqual"));

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

var BUILT_IN_PLACEMENTS = {
  bottomLeft: {
    points: ['tl', 'bl'],
    offset: [0, 4],
    overflow: {
      adjustX: 1,
      adjustY: 1
    }
  },
  topLeft: {
    points: ['bl', 'tl'],
    offset: [0, -4],
    overflow: {
      adjustX: 1,
      adjustY: 1
    }
  },
  bottomRight: {
    points: ['tr', 'br'],
    offset: [0, 4],
    overflow: {
      adjustX: 1,
      adjustY: 1
    }
  },
  topRight: {
    points: ['br', 'tr'],
    offset: [0, -4],
    overflow: {
      adjustX: 1,
      adjustY: 1
    }
  }
};

var _default2 = (0, _vue.defineComponent)({
  name: 'Cascader',
  mixins: [_BaseMixin.default],
  inheritAttrs: false,
  // model: {
  //   prop: 'value',
  //   event: 'change',
  // },
  props: {
    value: _vueTypes.default.array,
    defaultValue: _vueTypes.default.array,
    options: _vueTypes.default.array,
    // onChange: PropTypes.func,
    // onPopupVisibleChange: PropTypes.func,
    popupVisible: _vueTypes.default.looseBool,
    disabled: _vueTypes.default.looseBool.def(false),
    transitionName: _vueTypes.default.string.def(''),
    popupClassName: _vueTypes.default.string.def(''),
    popupStyle: _vueTypes.default.object.def(function () {
      return {};
    }),
    popupPlacement: _vueTypes.default.string.def('bottomLeft'),
    prefixCls: _vueTypes.default.string.def('rc-cascader'),
    dropdownMenuColumnStyle: _vueTypes.default.object,
    builtinPlacements: _vueTypes.default.object.def(BUILT_IN_PLACEMENTS),
    loadData: _vueTypes.default.func,
    changeOnSelect: _vueTypes.default.looseBool,
    // onKeyDown: PropTypes.func,
    expandTrigger: _vueTypes.default.string.def('click'),
    fieldNames: _vueTypes.default.object.def(function () {
      return {
        label: 'label',
        value: 'value',
        children: 'children'
      };
    }),
    expandIcon: _vueTypes.default.any,
    loadingIcon: _vueTypes.default.any,
    getPopupContainer: _vueTypes.default.func
  },
  data: function data() {
    var initialValue = [];
    var value = this.value,
        defaultValue = this.defaultValue,
        popupVisible = this.popupVisible;

    if ((0, _propsUtil.hasProp)(this, 'value')) {
      initialValue = value || [];
    } else if ((0, _propsUtil.hasProp)(this, 'defaultValue')) {
      initialValue = defaultValue || [];
    }

    this.children = undefined; // warning(!('filedNames' in props),
    //   '`filedNames` of Cascader is a typo usage and deprecated, please use `fieldNames` instead.');

    this.defaultFieldNames = {
      label: 'label',
      value: 'value',
      children: 'children'
    };
    return {
      sPopupVisible: popupVisible,
      sActiveValue: initialValue,
      sValue: initialValue
    };
  },
  watch: {
    value: function value(val, oldValue) {
      if (!(0, _arrays.default)(val, oldValue)) {
        var newValues = {
          sValue: val || []
        }; // allow activeValue diff from value
        // https://github.com/ant-design/ant-design/issues/2767

        if (!(0, _propsUtil.hasProp)(this, 'loadData')) {
          newValues.sActiveValue = val || [];
        }

        this.setState(newValues);
      }
    },
    popupVisible: function popupVisible(val) {
      this.setState({
        sPopupVisible: val
      });
    }
  },
  methods: {
    getPopupDOMNode: function getPopupDOMNode() {
      return this.trigger.getPopupDomNode();
    },
    getFieldName: function getFieldName(name) {
      var defaultFieldNames = this.defaultFieldNames,
          fieldNames = this.fieldNames;
      return fieldNames[name] || defaultFieldNames[name];
    },
    getFieldNames: function getFieldNames() {
      return this.fieldNames;
    },
    getCurrentLevelOptions: function getCurrentLevelOptions() {
      var _this = this;

      var _this$options = this.options,
          options = _this$options === void 0 ? [] : _this$options,
          _this$sActiveValue = this.sActiveValue,
          sActiveValue = _this$sActiveValue === void 0 ? [] : _this$sActiveValue;
      var result = (0, _arrayTreeFilter.default)(options, function (o, level) {
        return (0, _isEqual.default)(o[_this.getFieldName('value')], sActiveValue[level]);
      }, {
        childrenKeyName: this.getFieldName('children')
      });

      if (result[result.length - 2]) {
        return result[result.length - 2][this.getFieldName('children')];
      }

      return (0, _toConsumableArray2.default)(options).filter(function (o) {
        return !o.disabled;
      });
    },
    getActiveOptions: function getActiveOptions(activeValue) {
      var _this2 = this;

      return (0, _arrayTreeFilter.default)(this.options || [], function (o, level) {
        return (0, _isEqual.default)(o[_this2.getFieldName('value')], activeValue[level]);
      }, {
        childrenKeyName: this.getFieldName('children')
      });
    },
    setPopupVisible: function setPopupVisible(popupVisible) {
      if (!(0, _propsUtil.hasProp)(this, 'popupVisible')) {
        this.setState({
          sPopupVisible: popupVisible
        });
      } // sync activeValue with value when panel open


      if (popupVisible && !this.sPopupVisible) {
        this.setState({
          sActiveValue: this.sValue
        });
      }

      this.__emit('popupVisibleChange', popupVisible);
    },
    handleChange: function handleChange(options, setProps, e) {
      var _this3 = this;

      if (e.type !== 'keydown' || e.keyCode === _KeyCode.default.ENTER) {
        var value = options.map(function (o) {
          return o[_this3.getFieldName('value')];
        });

        this.__emit('change', value, options);

        this.setPopupVisible(setProps.visible);
      }
    },
    handlePopupVisibleChange: function handlePopupVisibleChange(popupVisible) {
      this.setPopupVisible(popupVisible);
    },
    handleMenuSelect: function handleMenuSelect(targetOption, menuIndex, e) {
      // Keep focused state for keyboard support
      var triggerNode = this.trigger.getRootDomNode();

      if (triggerNode && triggerNode.focus) {
        triggerNode.focus();
      }

      var changeOnSelect = this.changeOnSelect,
          loadData = this.loadData,
          expandTrigger = this.expandTrigger;

      if (!targetOption || targetOption.disabled) {
        return;
      }

      var sActiveValue = this.sActiveValue;
      sActiveValue = sActiveValue.slice(0, menuIndex + 1);
      sActiveValue[menuIndex] = targetOption[this.getFieldName('value')];
      var activeOptions = this.getActiveOptions(sActiveValue);

      if (targetOption.isLeaf === false && !targetOption[this.getFieldName('children')] && loadData) {
        if (changeOnSelect) {
          this.handleChange(activeOptions, {
            visible: true
          }, e);
        }

        this.setState({
          sActiveValue: sActiveValue
        });
        loadData(activeOptions);
        return;
      }

      var newState = {};

      if (!targetOption[this.getFieldName('children')] || !targetOption[this.getFieldName('children')].length) {
        this.handleChange(activeOptions, {
          visible: false
        }, e); // set value to activeValue when select leaf option

        newState.sValue = sActiveValue; // add e.type judgement to prevent `onChange` being triggered by mouseEnter
      } else if (changeOnSelect && (e.type === 'click' || e.type === 'keydown')) {
        if (expandTrigger === 'hover') {
          this.handleChange(activeOptions, {
            visible: false
          }, e);
        } else {
          this.handleChange(activeOptions, {
            visible: true
          }, e);
        } // set value to activeValue on every select


        newState.sValue = sActiveValue;
      }

      newState.sActiveValue = sActiveValue; //  not change the value by keyboard

      if ((0, _propsUtil.hasProp)(this, 'value') || e.type === 'keydown' && e.keyCode !== _KeyCode.default.ENTER) {
        delete newState.sValue;
      }

      this.setState(newState);
    },
    handleItemDoubleClick: function handleItemDoubleClick() {
      var changeOnSelect = this.$props.changeOnSelect;

      if (changeOnSelect) {
        this.setPopupVisible(false);
      }
    },
    handleKeyDown: function handleKeyDown(e) {
      var _this4 = this;

      var children = this.children; // https://github.com/ant-design/ant-design/issues/6717
      // Don't bind keyboard support when children specify the onKeyDown

      if (children) {
        var keydown = (0, _propsUtil.getEvents)(children).onKeydown;

        if (keydown) {
          keydown(e);
          return;
        }
      }

      var activeValue = (0, _toConsumableArray2.default)(this.sActiveValue);
      var currentLevel = activeValue.length - 1 < 0 ? 0 : activeValue.length - 1;
      var currentOptions = this.getCurrentLevelOptions();
      var currentIndex = currentOptions.map(function (o) {
        return o[_this4.getFieldName('value')];
      }).findIndex(function (val) {
        return (0, _isEqual.default)(activeValue[currentLevel], val);
      });

      if (e.keyCode !== _KeyCode.default.DOWN && e.keyCode !== _KeyCode.default.UP && e.keyCode !== _KeyCode.default.LEFT && e.keyCode !== _KeyCode.default.RIGHT && e.keyCode !== _KeyCode.default.ENTER && e.keyCode !== _KeyCode.default.SPACE && e.keyCode !== _KeyCode.default.BACKSPACE && e.keyCode !== _KeyCode.default.ESC && e.keyCode !== _KeyCode.default.TAB) {
        return;
      } // Press any keys above to reopen menu


      if (!this.sPopupVisible && e.keyCode !== _KeyCode.default.BACKSPACE && e.keyCode !== _KeyCode.default.LEFT && e.keyCode !== _KeyCode.default.RIGHT && e.keyCode !== _KeyCode.default.ESC && e.keyCode !== _KeyCode.default.TAB) {
        this.setPopupVisible(true);
        return;
      }

      if (e.keyCode === _KeyCode.default.DOWN || e.keyCode === _KeyCode.default.UP) {
        e.preventDefault();
        var nextIndex = currentIndex;

        if (nextIndex !== -1) {
          if (e.keyCode === _KeyCode.default.DOWN) {
            nextIndex += 1;
            nextIndex = nextIndex >= currentOptions.length ? 0 : nextIndex;
          } else {
            nextIndex -= 1;
            nextIndex = nextIndex < 0 ? currentOptions.length - 1 : nextIndex;
          }
        } else {
          nextIndex = 0;
        }

        activeValue[currentLevel] = currentOptions[nextIndex][this.getFieldName('value')];
      } else if (e.keyCode === _KeyCode.default.LEFT || e.keyCode === _KeyCode.default.BACKSPACE) {
        e.preventDefault();
        activeValue.splice(activeValue.length - 1, 1);
      } else if (e.keyCode === _KeyCode.default.RIGHT) {
        e.preventDefault();

        if (currentOptions[currentIndex] && currentOptions[currentIndex][this.getFieldName('children')]) {
          activeValue.push(currentOptions[currentIndex][this.getFieldName('children')][0][this.getFieldName('value')]);
        }
      } else if (e.keyCode === _KeyCode.default.ESC || e.keyCode === _KeyCode.default.TAB) {
        this.setPopupVisible(false);
        return;
      }

      if (!activeValue || activeValue.length === 0) {
        this.setPopupVisible(false);
      }

      var activeOptions = this.getActiveOptions(activeValue);
      var targetOption = activeOptions[activeOptions.length - 1];
      this.handleMenuSelect(targetOption, activeOptions.length - 1, e);

      this.__emit('keydown', e);
    },
    saveTrigger: function saveTrigger(node) {
      this.trigger = node;
    }
  },
  render: function render() {
    var $props = this.$props,
        sActiveValue = this.sActiveValue,
        handleMenuSelect = this.handleMenuSelect,
        sPopupVisible = this.sPopupVisible,
        handlePopupVisibleChange = this.handlePopupVisibleChange,
        handleKeyDown = this.handleKeyDown;

    var prefixCls = $props.prefixCls,
        transitionName = $props.transitionName,
        popupClassName = $props.popupClassName,
        _$props$options = $props.options,
        options = _$props$options === void 0 ? [] : _$props$options,
        disabled = $props.disabled,
        builtinPlacements = $props.builtinPlacements,
        popupPlacement = $props.popupPlacement,
        restProps = __rest($props, ["prefixCls", "transitionName", "popupClassName", "options", "disabled", "builtinPlacements", "popupPlacement"]); // Did not show popup when there is no options


    var menus = (0, _vue.createVNode)("div", null, null);
    var emptyMenuClassName = '';

    if (options && options.length > 0) {
      var loadingIcon = (0, _propsUtil.getComponent)(this, 'loadingIcon');
      var expandIcon = (0, _propsUtil.getComponent)(this, 'expandIcon') || '>';
      var menusProps = (0, _extends2.default)((0, _extends2.default)((0, _extends2.default)({}, $props), this.$attrs), {
        fieldNames: this.getFieldNames(),
        defaultFieldNames: this.defaultFieldNames,
        activeValue: sActiveValue,
        visible: sPopupVisible,
        loadingIcon: loadingIcon,
        expandIcon: expandIcon,
        onSelect: handleMenuSelect,
        onItemDoubleClick: this.handleItemDoubleClick
      });
      menus = (0, _vue.createVNode)(_Menus.default, menusProps, null);
    } else {
      emptyMenuClassName = " ".concat(prefixCls, "-menus-empty");
    }

    var triggerProps = (0, _extends2.default)((0, _extends2.default)((0, _extends2.default)({}, restProps), this.$attrs), {
      disabled: disabled,
      popupPlacement: popupPlacement,
      builtinPlacements: builtinPlacements,
      popupTransitionName: transitionName,
      action: disabled ? [] : ['click'],
      popupVisible: disabled ? false : sPopupVisible,
      prefixCls: "".concat(prefixCls, "-menus"),
      popupClassName: popupClassName + emptyMenuClassName,
      popup: menus,
      onPopupVisibleChange: handlePopupVisibleChange,
      ref: this.saveTrigger
    });
    var children = (0, _propsUtil.getSlot)(this);
    this.children = children;
    return (0, _vue.createVNode)(_vcTrigger.default, triggerProps, {
      default: function _default() {
        return [children && (0, _vnode.cloneElement)(children[0], {
          onKeydown: handleKeyDown,
          tabindex: disabled ? undefined : 0
        })];
      }
    });
  }
});

exports.default = _default2;