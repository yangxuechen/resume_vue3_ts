import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
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

import Trigger from '../vc-trigger';
import PropTypes from '../_util/vue-types';
import { getSlot } from '../_util/props-util';
import classNames from '../_util/classNames';
import createRef from '../_util/createRef';
import { defineComponent } from 'vue';

var getBuiltInPlacements = function getBuiltInPlacements(dropdownMatchSelectWidth) {
  // Enable horizontal overflow auto-adjustment when a custom dropdown width is provided
  var adjustX = typeof dropdownMatchSelectWidth !== 'number' ? 0 : 1;
  return {
    bottomLeft: {
      points: ['tl', 'bl'],
      offset: [0, 4],
      overflow: {
        adjustX: adjustX,
        adjustY: 1
      }
    },
    bottomRight: {
      points: ['tr', 'br'],
      offset: [0, 4],
      overflow: {
        adjustX: adjustX,
        adjustY: 1
      }
    },
    topLeft: {
      points: ['bl', 'tl'],
      offset: [0, -4],
      overflow: {
        adjustX: adjustX,
        adjustY: 1
      }
    },
    topRight: {
      points: ['br', 'tr'],
      offset: [0, -4],
      overflow: {
        adjustX: adjustX,
        adjustY: 1
      }
    }
  };
};

var SelectTrigger = defineComponent({
  name: 'SelectTrigger',
  inheritAttrs: false,
  created: function created() {
    this.popupRef = createRef();
  },
  methods: {
    getPopupElement: function getPopupElement() {
      return this.popupRef.current;
    }
  },
  render: function render() {
    var _this = this;

    var _a = _extends(_extends({}, this.$props), this.$attrs),
        _a$empty = _a.empty,
        empty = _a$empty === void 0 ? false : _a$empty,
        props = __rest(_a, ["empty"]);

    var visible = props.visible,
        dropdownAlign = props.dropdownAlign,
        prefixCls = props.prefixCls,
        popupElement = props.popupElement,
        dropdownClassName = props.dropdownClassName,
        dropdownStyle = props.dropdownStyle,
        dropdownMatchSelectWidth = props.dropdownMatchSelectWidth,
        containerWidth = props.containerWidth,
        dropdownRender = props.dropdownRender,
        animation = props.animation,
        transitionName = props.transitionName,
        direction = props.direction,
        getPopupContainer = props.getPopupContainer;
    var dropdownPrefixCls = "".concat(prefixCls, "-dropdown");
    var popupNode = popupElement;

    if (dropdownRender) {
      popupNode = dropdownRender({
        menuNode: popupElement,
        props: props
      });
    }

    var builtInPlacements = getBuiltInPlacements(dropdownMatchSelectWidth);
    var mergedTransitionName = animation ? "".concat(dropdownPrefixCls, "-").concat(animation) : transitionName;

    var popupStyle = _extends({
      minWidth: "".concat(containerWidth, "px")
    }, dropdownStyle);

    if (typeof dropdownMatchSelectWidth === 'number') {
      popupStyle.width = "".concat(dropdownMatchSelectWidth, "px");
    } else if (dropdownMatchSelectWidth) {
      popupStyle.width = "".concat(containerWidth, "px");
    }

    return _createVNode(Trigger, _objectSpread(_objectSpread({}, props), {}, {
      "showAction": [],
      "hideAction": [],
      "popupPlacement": direction === 'rtl' ? 'bottomRight' : 'bottomLeft',
      "builtinPlacements": builtInPlacements,
      "prefixCls": dropdownPrefixCls,
      "popupTransitionName": mergedTransitionName,
      "popup": _createVNode("div", {
        "ref": this.popupRef
      }, [popupNode]),
      "popupAlign": dropdownAlign,
      "popupVisible": visible,
      "getPopupContainer": getPopupContainer,
      "popupClassName": classNames(dropdownClassName, _defineProperty({}, "".concat(dropdownPrefixCls, "-empty"), empty)),
      "popupStyle": popupStyle
    }), {
      default: function _default() {
        return [getSlot(_this)[0]];
      }
    });
  }
});
SelectTrigger.props = {
  dropdownAlign: PropTypes.object,
  visible: PropTypes.looseBool,
  disabled: PropTypes.looseBool,
  dropdownClassName: PropTypes.string,
  dropdownStyle: PropTypes.object,
  empty: PropTypes.looseBool,
  prefixCls: PropTypes.string,
  popupClassName: PropTypes.string,
  animation: PropTypes.string,
  transitionName: PropTypes.string,
  getPopupContainer: PropTypes.func,
  dropdownRender: PropTypes.func,
  containerWidth: PropTypes.number,
  dropdownMatchSelectWidth: PropTypes.oneOfType([Number, Boolean]).def(true),
  popupElement: PropTypes.any,
  direction: PropTypes.string,
  getTriggerDOMNode: PropTypes.func
};
export default SelectTrigger;