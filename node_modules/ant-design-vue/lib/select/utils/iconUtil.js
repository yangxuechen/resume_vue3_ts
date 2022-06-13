"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getIcons;

var _vue = require("vue");

var _DownOutlined = _interopRequireDefault(require("@ant-design/icons-vue/lib/icons/DownOutlined"));

var _LoadingOutlined = _interopRequireDefault(require("@ant-design/icons-vue/lib/icons/LoadingOutlined"));

var _CheckOutlined = _interopRequireDefault(require("@ant-design/icons-vue/lib/icons/CheckOutlined"));

var _CloseOutlined = _interopRequireDefault(require("@ant-design/icons-vue/lib/icons/CloseOutlined"));

var _CloseCircleFilled = _interopRequireDefault(require("@ant-design/icons-vue/lib/icons/CloseCircleFilled"));

var _SearchOutlined = _interopRequireDefault(require("@ant-design/icons-vue/lib/icons/SearchOutlined"));

function getIcons(props) {
  var slots = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var loading = props.loading,
      multiple = props.multiple,
      prefixCls = props.prefixCls;
  var suffixIcon = props.suffixIcon || slots.suffixIcon && slots.suffixIcon();
  var clearIcon = props.clearIcon || slots.clearIcon && slots.clearIcon();
  var menuItemSelectedIcon = props.menuItemSelectedIcon || slots.menuItemSelectedIcon && slots.menuItemSelectedIcon();
  var removeIcon = props.removeIcon || slots.removeIcon && slots.removeIcon(); // Clear Icon

  var mergedClearIcon = clearIcon;

  if (!clearIcon) {
    mergedClearIcon = (0, _vue.createVNode)(_CloseCircleFilled.default, null, null);
  } // Arrow item icon


  var mergedSuffixIcon = null;

  if (suffixIcon !== undefined) {
    mergedSuffixIcon = suffixIcon;
  } else if (loading) {
    mergedSuffixIcon = (0, _vue.createVNode)(_LoadingOutlined.default, {
      "spin": true
    }, null);
  } else {
    var iconCls = "".concat(prefixCls, "-suffix");

    mergedSuffixIcon = function mergedSuffixIcon(_ref) {
      var open = _ref.open,
          showSearch = _ref.showSearch;

      if (open && showSearch) {
        return (0, _vue.createVNode)(_SearchOutlined.default, {
          "class": iconCls
        }, null);
      }

      return (0, _vue.createVNode)(_DownOutlined.default, {
        "class": iconCls
      }, null);
    };
  } // Checked item icon


  var mergedItemIcon = null;

  if (menuItemSelectedIcon !== undefined) {
    mergedItemIcon = menuItemSelectedIcon;
  } else if (multiple) {
    mergedItemIcon = (0, _vue.createVNode)(_CheckOutlined.default, null, null);
  } else {
    mergedItemIcon = null;
  }

  var mergedRemoveIcon = null;

  if (removeIcon !== undefined) {
    mergedRemoveIcon = removeIcon;
  } else {
    mergedRemoveIcon = (0, _vue.createVNode)(_CloseOutlined.default, null, null);
  }

  return {
    clearIcon: mergedClearIcon,
    suffixIcon: mergedSuffixIcon,
    itemIcon: mergedItemIcon,
    removeIcon: mergedRemoveIcon
  };
}