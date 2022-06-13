"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _vueTypes = _interopRequireDefault(require("../_util/vue-types"));

var _propsUtil = require("../_util/props-util");

var _dropdown = _interopRequireDefault(require("../dropdown/dropdown"));

var _DownOutlined = _interopRequireDefault(require("@ant-design/icons-vue/lib/icons/DownOutlined"));

var _useConfigInject2 = _interopRequireDefault(require("../_util/hooks/useConfigInject"));

var breadcrumbItemProps = {
  prefixCls: _vueTypes.default.string,
  href: _vueTypes.default.string,
  separator: _vueTypes.default.any,
  overlay: _vueTypes.default.any
};

var _default2 = (0, _vue.defineComponent)({
  name: 'ABreadcrumbItem',
  __ANT_BREADCRUMB_ITEM: true,
  props: breadcrumbItemProps,
  slots: ['separator', 'overlay'],
  setup: function setup(props, _ref) {
    var slots = _ref.slots;

    var _useConfigInject = (0, _useConfigInject2.default)('breadcrumb', props),
        prefixCls = _useConfigInject.prefixCls;
    /**
     * if overlay is have
     * Wrap a DropDown
     */


    var renderBreadcrumbNode = function renderBreadcrumbNode(breadcrumbItem, prefixCls) {
      var overlay = (0, _propsUtil.getPropsSlot)(slots, props, 'overlay');

      if (overlay) {
        return (0, _vue.createVNode)(_dropdown.default, {
          "overlay": overlay,
          "placement": "bottomCenter"
        }, {
          default: function _default() {
            return [(0, _vue.createVNode)("span", {
              "class": "".concat(prefixCls, "-overlay-link")
            }, [breadcrumbItem, (0, _vue.createVNode)(_DownOutlined.default, null, null)])];
          }
        });
      }

      return breadcrumbItem;
    };

    return function () {
      var _a;

      var separator = (_a = (0, _propsUtil.getPropsSlot)(slots, props, 'separator')) !== null && _a !== void 0 ? _a : '/';
      var children = (0, _propsUtil.getPropsSlot)(slots, props);
      var link;

      if (props.href !== undefined) {
        link = (0, _vue.createVNode)("a", {
          "class": "".concat(prefixCls.value, "-link")
        }, [children]);
      } else {
        link = (0, _vue.createVNode)("span", {
          "class": "".concat(prefixCls.value, "-link")
        }, [children]);
      } // wrap to dropDown


      link = renderBreadcrumbNode(link, prefixCls.value);

      if (children) {
        return (0, _vue.createVNode)("span", null, [link, separator && (0, _vue.createVNode)("span", {
          "class": "".concat(prefixCls.value, "-separator")
        }, [separator])]);
      }

      return null;
    };
  }
});

exports.default = _default2;