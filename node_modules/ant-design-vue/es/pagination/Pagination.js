import _extends from "@babel/runtime/helpers/esm/extends";
import { createTextVNode as _createTextVNode, createVNode as _createVNode } from "vue";

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

import { defineComponent, inject } from 'vue';
import LeftOutlined from '@ant-design/icons-vue/LeftOutlined';
import RightOutlined from '@ant-design/icons-vue/RightOutlined';
import DoubleLeftOutlined from '@ant-design/icons-vue/DoubleLeftOutlined';
import DoubleRightOutlined from '@ant-design/icons-vue/DoubleRightOutlined';
import { tuple } from '../_util/type';
import PropTypes, { withUndefined } from '../_util/vue-types';
import VcSelect from '../select';
import MiniSelect from './MiniSelect';
import LocaleReceiver from '../locale-provider/LocaleReceiver';
import { getOptionProps } from '../_util/props-util';
import VcPagination from '../vc-pagination';
import enUS from '../vc-pagination/locale/en_US';
import { defaultConfigProvider } from '../config-provider';
import classNames from '../_util/classNames';
export var paginationProps = function paginationProps() {
  return {
    total: PropTypes.number,
    defaultCurrent: PropTypes.number,
    disabled: PropTypes.looseBool,
    current: PropTypes.number,
    defaultPageSize: PropTypes.number,
    pageSize: PropTypes.number,
    hideOnSinglePage: PropTypes.looseBool,
    showSizeChanger: PropTypes.looseBool,
    pageSizeOptions: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string])),
    buildOptionText: PropTypes.func,
    showSizeChange: PropTypes.func,
    showQuickJumper: withUndefined(PropTypes.oneOfType([PropTypes.looseBool, PropTypes.object])),
    showTotal: PropTypes.any,
    size: PropTypes.string,
    simple: PropTypes.looseBool,
    locale: PropTypes.object,
    prefixCls: PropTypes.string,
    selectPrefixCls: PropTypes.string,
    itemRender: PropTypes.func,
    role: PropTypes.string,
    showLessItems: PropTypes.looseBool,
    onChange: PropTypes.func,
    onShowSizeChange: PropTypes.func,
    'onUpdate:current': PropTypes.func,
    'onUpdate:pageSize': PropTypes.func
  };
};
export var paginationConfig = function paginationConfig() {
  return _extends(_extends({}, paginationProps()), {
    position: PropTypes.oneOf(tuple('top', 'bottom', 'both'))
  });
};
export default defineComponent({
  name: 'APagination',
  inheritAttrs: false,
  props: _extends({}, paginationProps()),
  emits: ['change', 'showSizeChange', 'update:current', 'update:pageSize'],
  setup: function setup() {
    return {
      configProvider: inject('configProvider', defaultConfigProvider)
    };
  },
  methods: {
    getIconsProps: function getIconsProps(prefixCls) {
      var prevIcon = _createVNode("a", {
        "class": "".concat(prefixCls, "-item-link")
      }, [_createVNode(LeftOutlined, null, null)]);

      var nextIcon = _createVNode("a", {
        "class": "".concat(prefixCls, "-item-link")
      }, [_createVNode(RightOutlined, null, null)]);

      var jumpPrevIcon = _createVNode("a", {
        "class": "".concat(prefixCls, "-item-link")
      }, [_createVNode("div", {
        "class": "".concat(prefixCls, "-item-container")
      }, [_createVNode(DoubleLeftOutlined, {
        "class": "".concat(prefixCls, "-item-link-icon")
      }, null), _createVNode("span", {
        "class": "".concat(prefixCls, "-item-ellipsis")
      }, [_createTextVNode("\u2022\u2022\u2022")])])]);

      var jumpNextIcon = _createVNode("a", {
        "class": "".concat(prefixCls, "-item-link")
      }, [_createVNode("div", {
        "class": "".concat(prefixCls, "-item-container")
      }, [_createVNode(DoubleRightOutlined, {
        "class": "".concat(prefixCls, "-item-link-icon")
      }, null), _createVNode("span", {
        "class": "".concat(prefixCls, "-item-ellipsis")
      }, [_createTextVNode("\u2022\u2022\u2022")])])]);

      return {
        prevIcon: prevIcon,
        nextIcon: nextIcon,
        jumpPrevIcon: jumpPrevIcon,
        jumpNextIcon: jumpNextIcon
      };
    },
    renderPagination: function renderPagination(contextLocale) {
      var _a = getOptionProps(this),
          customizePrefixCls = _a.prefixCls,
          customizeSelectPrefixCls = _a.selectPrefixCls,
          buildOptionText = _a.buildOptionText,
          size = _a.size,
          customLocale = _a.locale,
          restProps = __rest(_a, ["prefixCls", "selectPrefixCls", "buildOptionText", "size", "locale"]);

      var getPrefixCls = this.configProvider.getPrefixCls;
      var prefixCls = getPrefixCls('pagination', customizePrefixCls);
      var selectPrefixCls = getPrefixCls('select', customizeSelectPrefixCls);
      var isSmall = size === 'small';

      var paginationProps = _extends(_extends(_extends(_extends(_extends({
        prefixCls: prefixCls,
        selectPrefixCls: selectPrefixCls
      }, restProps), this.getIconsProps(prefixCls)), {
        selectComponentClass: isSmall ? MiniSelect : VcSelect,
        locale: _extends(_extends({}, contextLocale), customLocale),
        buildOptionText: buildOptionText || this.$slots.buildOptionText
      }), this.$attrs), {
        class: classNames({
          mini: isSmall
        }, this.$attrs.class),
        itemRender: this.itemRender || this.$slots.itemRender
      });

      return _createVNode(VcPagination, paginationProps, null);
    }
  },
  render: function render() {
    return _createVNode(LocaleReceiver, {
      "componentName": "Pagination",
      "defaultLocale": enUS,
      "children": this.renderPagination
    }, null);
  }
});