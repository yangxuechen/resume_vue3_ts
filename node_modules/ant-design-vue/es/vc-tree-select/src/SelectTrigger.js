import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import { createVNode as _createVNode } from "vue";
import PropTypes from '../../_util/vue-types';
import Trigger from '../../vc-trigger';
import { createRef } from './util';
import classNames from '../../_util/classNames';
import { getSlot } from '../../_util/props-util';
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
    disabled: PropTypes.looseBool,
    showSearch: PropTypes.looseBool,
    prefixCls: PropTypes.string,
    dropdownPopupAlign: PropTypes.object,
    dropdownClassName: PropTypes.string,
    dropdownStyle: PropTypes.object,
    transitionName: PropTypes.string,
    animation: PropTypes.string,
    getPopupContainer: PropTypes.func,
    dropdownMatchSelectWidth: PropTypes.looseBool,
    // Pass by Select
    isMultiple: PropTypes.looseBool,
    dropdownPrefixCls: PropTypes.string,
    dropdownVisibleChange: PropTypes.func,
    popupElement: PropTypes.any,
    open: PropTypes.looseBool
  },
  created: function created() {
    this.triggerRef = createRef();
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

    return _createVNode(Trigger, {
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
      "popupClassName": classNames(dropdownClassName, (_classNames = {}, _defineProperty(_classNames, "".concat(dropdownPrefixCls, "--multiple"), isMultiple), _defineProperty(_classNames, "".concat(dropdownPrefixCls, "--single"), !isMultiple), _classNames)),
      "popupStyle": dropdownStyle
    }, {
      default: function _default() {
        return [getSlot(_this)];
      }
    });
  }
};
export default SelectTrigger;