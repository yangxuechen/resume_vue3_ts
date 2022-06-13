"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _vueTypes = _interopRequireDefault(require("../../_util/vue-types"));

var _vcTrigger = _interopRequireDefault(require("../../vc-trigger"));

var _util = require("./util");

var _classNames2 = _interopRequireDefault(require("../../_util/classNames"));

var _propsUtil = require("../../_util/props-util");

var BUILT_IN_PLACEMENTS = {
  bottomLeft: {
    points: ['tl', 'bl'],
    offset: [0, 4],
    overflow: {
      adjustX: 0,
      adjustY: 1
    },
    ignoreShake: true
  },
  topLeft: {
    points: ['bl', 'tl'],
    offset: [0, -4],
    overflow: {
      adjustX: 0,
      adjustY: 1
    },
    ignoreShake: true
  }
};
var SelectTrigger = {
  name: 'SelectTrigger',
  inheritAttrs: false,
  props: {
    // Pass by outside user props
    disabled: _vueTypes.default.looseBool,
    showSearch: _vueTypes.default.looseBool,
    prefixCls: _vueTypes.default.string,
    dropdownPopupAlign: _vueTypes.default.object,
    dropdownClassName: _vueTypes.default.string,
    dropdownStyle: _vueTypes.default.object,
    transitionName: _vueTypes.default.string,
    animation: _vueTypes.default.string,
    getPopupContainer: _vueTypes.default.func,
    dropdownMatchSelectWidth: _vueTypes.default.looseBool,
    // Pass by Select
    isMultiple: _vueTypes.default.looseBool,
    dropdownPrefixCls: _vueTypes.default.string,
    dropdownVisibleChange: _vueTypes.default.func,
    popupElement: _vueTypes.default.any,
    open: _vueTypes.default.looseBool
  },
  created: function created() {
    this.triggerRef = (0, _util.createRef)();
  },
  methods: {
    getDropdownTransitionName: function getDropdownTransitionName() {
      var _this$$props = this.$props,
          transitionName = _this$$props.transitionName,
          animation = _this$$props.animation,
          dropdownPrefixCls = _this$$props.dropdownPrefixCls;

      if (!transitionName && animation) {
        return "".concat(dropdownPrefixCls, "-").concat(animation);
      }

      return transitionName;
    },
    forcePopupAlign: function forcePopupAlign() {
      var $trigger = this.triggerRef.current;

      if ($trigger) {
        $trigger.forcePopupAlign();
      }
    }
  },
  render: function render() {
    var _classNames,
        _this = this;

    var _this$$props2 = this.$props,
        disabled = _this$$props2.disabled,
        isMultiple = _this$$props2.isMultiple,
        dropdownPopupAlign = _this$$props2.dropdownPopupAlign,
        dropdownMatchSelectWidth = _this$$props2.dropdownMatchSelectWidth,
        dropdownClassName = _this$$props2.dropdownClassName,
        dropdownStyle = _this$$props2.dropdownStyle,
        dropdownVisibleChange = _this$$props2.dropdownVisibleChange,
        getPopupContainer = _this$$props2.getPopupContainer,
        dropdownPrefixCls = _this$$props2.dropdownPrefixCls,
        popupElement = _this$$props2.popupElement,
        open = _this$$props2.open; // TODO: [Legacy] Use new action when trigger fixed: https://github.com/react-component/trigger/pull/86
    // When false do nothing with the width
    // ref: https://github.com/ant-design/ant-design/issues/10927

    var stretch;

    if (dropdownMatchSelectWidth !== false) {
      stretch = dropdownMatchSelectWidth ? 'width' : 'minWidth';
    }

    return (0, _vue.createVNode)(_vcTrigger.default, {
      "ref": this.triggerRef,
      "action": disabled ? [] : ['click'],
      "popupPlacement": "bottomLeft",
      "builtinPlacements": BUILT_IN_PLACEMENTS,
      "popupAlign": dropdownPopupAlign,
      "prefixCls": dropdownPrefixCls,
      "popupTransitionName": this.getDropdownTransitionName(),
      "onPopupVisibleChange": dropdownVisibleChange,
      "popup": popupElement,
      "popupVisible": open,
      "getPopupContainer": getPopupContainer,
      "stretch": stretch,
      "popupClassName": (0, _classNames2.default)(dropdownClassName, (_classNames = {}, (0, _defineProperty2.default)(_classNames, "".concat(dropdownPrefixCls, "--multiple"), isMultiple), (0, _defineProperty2.default)(_classNames, "".concat(dropdownPrefixCls, "--single"), !isMultiple), _classNames)),
      "popupStyle": dropdownStyle
    }, {
      default: function _default() {
        return [(0, _propsUtil.getSlot)(_this)];
      }
    });
  }
};
var _default2 = SelectTrigger;
exports.default = _default2;