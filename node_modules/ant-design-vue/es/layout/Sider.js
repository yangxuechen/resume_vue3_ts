import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _extends from "@babel/runtime/helpers/esm/extends";
import { createVNode as _createVNode } from "vue";
import classNames from '../_util/classNames';
import { inject, defineComponent, ref, watch, onMounted, onBeforeUnmount, provide } from 'vue';
import PropTypes from '../_util/vue-types';
import { tuple } from '../_util/type';
import initDefaultProps from '../_util/props-util/initDefaultProps';
import isNumeric from '../_util/isNumeric';
import BarsOutlined from '@ant-design/icons-vue/BarsOutlined';
import RightOutlined from '@ant-design/icons-vue/RightOutlined';
import LeftOutlined from '@ant-design/icons-vue/LeftOutlined';
import useConfigInject from '../_util/hooks/useConfigInject';
import { SiderCollapsedKey, SiderHookProviderKey } from './injectionKey';
var dimensionMaxMap = {
  xs: '479.98px',
  sm: '575.98px',
  md: '767.98px',
  lg: '991.98px',
  xl: '1199.98px',
  xxl: '1599.98px'
};
export var siderProps = {
  prefixCls: PropTypes.string,
  collapsible: PropTypes.looseBool,
  collapsed: PropTypes.looseBool,
  defaultCollapsed: PropTypes.looseBool,
  reverseArrow: PropTypes.looseBool,
  zeroWidthTriggerStyle: PropTypes.style,
  trigger: PropTypes.VNodeChild,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  collapsedWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  breakpoint: PropTypes.oneOf(tuple('xs', 'sm', 'md', 'lg', 'xl', 'xxl')),
  theme: PropTypes.oneOf(tuple('light', 'dark')).def('dark'),
  onBreakpoint: Function,
  onCollapse: Function
};

var generateId = function () {
  var i = 0;
  return function () {
    var prefix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    i += 1;
    return "".concat(prefix).concat(i);
  };
}();

export default defineComponent({
  name: 'ALayoutSider',
  inheritAttrs: false,
  props: initDefaultProps(siderProps, {
    collapsible: false,
    defaultCollapsed: false,
    reverseArrow: false,
    width: 200,
    collapsedWidth: 80
  }),
  emits: ['breakpoint', 'update:collapsed', 'collapse'],
  setup: function setup(props, _ref) {
    var emit = _ref.emit,
        attrs = _ref.attrs,
        slots = _ref.slots;

    var _useConfigInject = useConfigInject('layout-sider', props),
        prefixCls = _useConfigInject.prefixCls;

    var siderHook = inject(SiderHookProviderKey, undefined);
    var collapsed = ref(!!(props.collapsed !== undefined ? props.collapsed : props.defaultCollapsed));
    var below = ref(false);
    watch(function () {
      return props.collapsed;
    }, function () {
      collapsed.value = !!props.collapsed;
    });
    provide(SiderCollapsedKey, collapsed);

    var handleSetCollapsed = function handleSetCollapsed(value, type) {
      if (props.collapsed === undefined) {
        collapsed.value = value;
      }

      emit('update:collapsed', value);
      emit('collapse', value, type);
    }; // ========================= Responsive =========================


    var responsiveHandlerRef = ref(function (mql) {
      below.value = mql.matches;
      emit('breakpoint', mql.matches);

      if (collapsed.value !== mql.matches) {
        handleSetCollapsed(mql.matches, 'responsive');
      }
    });
    var mql;

    function responsiveHandler(mql) {
      return responsiveHandlerRef.value(mql);
    }

    var uniqueId = generateId('ant-sider-');
    onMounted(function () {
      if (typeof window !== 'undefined') {
        var _window = window,
            matchMedia = _window.matchMedia;

        if (matchMedia && props.breakpoint && props.breakpoint in dimensionMaxMap) {
          mql = matchMedia("(max-width: ".concat(dimensionMaxMap[props.breakpoint], ")"));

          try {
            mql.addEventListener('change', responsiveHandler);
          } catch (error) {
            mql.addListener(responsiveHandler);
          }

          responsiveHandler(mql);
        }
      }

      siderHook && siderHook.addSider(uniqueId);
    });
    onBeforeUnmount(function () {
      try {
        mql === null || mql === void 0 ? void 0 : mql.removeEventListener('change', responsiveHandler);
      } catch (error) {
        mql === null || mql === void 0 ? void 0 : mql.removeListener(responsiveHandler);
      }

      siderHook && siderHook.removeSider(uniqueId);
    });

    var toggle = function toggle() {
      handleSetCollapsed(!collapsed.value, 'clickTrigger');
    };

    return function () {
      var _classNames;

      var _a;

      var pre = prefixCls.value;
      var collapsedWidth = props.collapsedWidth,
          width = props.width,
          reverseArrow = props.reverseArrow,
          zeroWidthTriggerStyle = props.zeroWidthTriggerStyle,
          trigger = props.trigger,
          collapsible = props.collapsible,
          theme = props.theme;
      var rawWidth = collapsed.value ? collapsedWidth : width; // use "px" as fallback unit for width

      var siderWidth = isNumeric(rawWidth) ? "".concat(rawWidth, "px") : String(rawWidth); // special trigger when collapsedWidth == 0

      var zeroWidthTrigger = parseFloat(String(collapsedWidth || 0)) === 0 ? _createVNode("span", {
        "onClick": toggle,
        "class": classNames("".concat(pre, "-zero-width-trigger"), "".concat(pre, "-zero-width-trigger-").concat(reverseArrow ? 'right' : 'left')),
        "style": zeroWidthTriggerStyle
      }, [trigger || _createVNode(BarsOutlined, null, null)]) : null;
      var iconObj = {
        expanded: reverseArrow ? _createVNode(RightOutlined, null, null) : _createVNode(LeftOutlined, null, null),
        collapsed: reverseArrow ? _createVNode(LeftOutlined, null, null) : _createVNode(RightOutlined, null, null)
      };
      var status = collapsed.value ? 'collapsed' : 'expanded';
      var defaultTrigger = iconObj[status];
      var triggerDom = trigger !== null ? zeroWidthTrigger || _createVNode("div", {
        "class": "".concat(pre, "-trigger"),
        "onClick": toggle,
        "style": {
          width: siderWidth
        }
      }, [trigger || defaultTrigger]) : null;

      var divStyle = _extends(_extends({}, attrs.style), {
        flex: "0 0 ".concat(siderWidth),
        maxWidth: siderWidth,
        minWidth: siderWidth,
        width: siderWidth
      });

      var siderCls = classNames(pre, "".concat(pre, "-").concat(theme), (_classNames = {}, _defineProperty(_classNames, "".concat(pre, "-collapsed"), !!collapsed.value), _defineProperty(_classNames, "".concat(pre, "-has-trigger"), collapsible && trigger !== null && !zeroWidthTrigger), _defineProperty(_classNames, "".concat(pre, "-below"), !!below.value), _defineProperty(_classNames, "".concat(pre, "-zero-width"), parseFloat(siderWidth) === 0), _classNames), attrs.class);
      return _createVNode("aside", _objectSpread(_objectSpread({}, attrs), {}, {
        "class": siderCls,
        "style": divStyle,
        "ref": ref
      }), [_createVNode("div", {
        "class": "".concat(pre, "-children")
      }, [(_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots)]), collapsible || below.value && zeroWidthTrigger ? triggerDom : null]);
    };
  }
});