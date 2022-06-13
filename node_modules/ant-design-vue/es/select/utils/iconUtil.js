import { createVNode as _createVNode } from "vue";
import DownOutlined from '@ant-design/icons-vue/DownOutlined';
import LoadingOutlined from '@ant-design/icons-vue/LoadingOutlined';
import CheckOutlined from '@ant-design/icons-vue/CheckOutlined';
import CloseOutlined from '@ant-design/icons-vue/CloseOutlined';
import CloseCircleFilled from '@ant-design/icons-vue/CloseCircleFilled';
import SearchOutlined from '@ant-design/icons-vue/SearchOutlined';
export default function getIcons(props) {
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
    mergedClearIcon = _createVNode(CloseCircleFilled, null, null);
  } // Arrow item icon


  var mergedSuffixIcon = null;

  if (suffixIcon !== undefined) {
    mergedSuffixIcon = suffixIcon;
  } else if (loading) {
    mergedSuffixIcon = _createVNode(LoadingOutlined, {
      "spin": true
    }, null);
  } else {
    var iconCls = "".concat(prefixCls, "-suffix");

    mergedSuffixIcon = function mergedSuffixIcon(_ref) {
      var open = _ref.open,
          showSearch = _ref.showSearch;

      if (open && showSearch) {
        return _createVNode(SearchOutlined, {
          "class": iconCls
        }, null);
      }

      return _createVNode(DownOutlined, {
        "class": iconCls
      }, null);
    };
  } // Checked item icon


  var mergedItemIcon = null;

  if (menuItemSelectedIcon !== undefined) {
    mergedItemIcon = menuItemSelectedIcon;
  } else if (multiple) {
    mergedItemIcon = _createVNode(CheckOutlined, null, null);
  } else {
    mergedItemIcon = null;
  }

  var mergedRemoveIcon = null;

  if (removeIcon !== undefined) {
    mergedRemoveIcon = removeIcon;
  } else {
    mergedRemoveIcon = _createVNode(CloseOutlined, null, null);
  }

  return {
    clearIcon: mergedClearIcon,
    suffixIcon: mergedSuffixIcon,
    itemIcon: mergedItemIcon,
    removeIcon: mergedRemoveIcon
  };
}