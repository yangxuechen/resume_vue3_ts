import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _typeof from "@babel/runtime/helpers/esm/typeof";
import _extends from "@babel/runtime/helpers/esm/extends";
import { createVNode as _createVNode } from "vue";
import { defineComponent, inject } from 'vue';
import VcTooltip from '../vc-tooltip';
import classNames from '../_util/classNames';
import _getPlacements from './placements';
import PropTypes from '../_util/vue-types';
import { PresetColorTypes } from '../_util/colors';
import { hasProp, getComponent, getStyle, filterEmpty, getSlot, isValidElement } from '../_util/props-util';
import { cloneElement } from '../_util/vnode';
import { defaultConfigProvider } from '../config-provider';
import abstractTooltipProps from './abstractTooltipProps';

var splitObject = function splitObject(obj, keys) {
  var picked = {};

  var omitted = _extends({}, obj);

  keys.forEach(function (key) {
    if (obj && key in obj) {
      picked[key] = obj[key];
      delete omitted[key];
    }
  });
  return {
    picked: picked,
    omitted: omitted
  };
};

var props = abstractTooltipProps();
var PresetColorRegex = new RegExp("^(".concat(PresetColorTypes.join('|'), ")(-inverse)?$"));

var tooltipProps = _extends(_extends({}, props), {
  title: PropTypes.VNodeChild
});

export default defineComponent({
  name: 'ATooltip',
  inheritAttrs: false,
  props: tooltipProps,
  emits: ['update:visible', 'visibleChange'],
  setup: function setup() {
    return {
      configProvider: inject('configProvider', defaultConfigProvider)
    };
  },
  data: function data() {
    return {
      sVisible: !!this.$props.visible || !!this.$props.defaultVisible
    };
  },
  watch: {
    visible: function visible(val) {
      this.sVisible = val;
    }
  },
  methods: {
    handleVisibleChange: function handleVisibleChange(visible) {
      if (!hasProp(this, 'visible')) {
        this.sVisible = this.isNoTitle() ? false : visible;
      }

      if (!this.isNoTitle()) {
        this.$emit('update:visible', visible);
        this.$emit('visibleChange', visible);
      }
    },
    getPopupDomNode: function getPopupDomNode() {
      return this.$refs.tooltip.getPopupDomNode();
    },
    getPlacements: function getPlacements() {
      var _this$$props = this.$props,
          builtinPlacements = _this$$props.builtinPlacements,
          arrowPointAtCenter = _this$$props.arrowPointAtCenter,
          autoAdjustOverflow = _this$$props.autoAdjustOverflow;
      return builtinPlacements || _getPlacements({
        arrowPointAtCenter: arrowPointAtCenter,
        verticalArrowShift: 8,
        autoAdjustOverflow: autoAdjustOverflow
      });
    },
    // Fix Tooltip won't hide at disabled button
    // mouse events don't trigger at disabled button in Chrome
    // https://github.com/react-component/tooltip/issues/18
    getDisabledCompatibleChildren: function getDisabledCompatibleChildren(ele) {
      if ((_typeof(ele.type) === 'object' && (ele.type.__ANT_BUTTON === true || ele.type.__ANT_SWITCH === true || ele.type.__ANT_CHECKBOX === true) || ele.type === 'button') && ele.props && (ele.props.disabled || ele.props.disabled === '')) {
        // Pick some layout related style properties up to span
        // Prevent layout bugs like https://github.com/ant-design/ant-design/issues/5254
        var _splitObject = splitObject(getStyle(ele), ['position', 'left', 'right', 'top', 'bottom', 'float', 'display', 'zIndex']),
            picked = _splitObject.picked,
            omitted = _splitObject.omitted;

        var spanStyle = _extends(_extends({
          display: 'inline-block'
        }, picked), {
          cursor: 'not-allowed',
          width: ele.props && ele.props.block ? '100%' : null
        });

        var buttonStyle = _extends(_extends({}, omitted), {
          pointerEvents: 'none'
        });

        var child = cloneElement(ele, {
          style: buttonStyle
        }, true);
        return _createVNode("span", {
          "style": spanStyle
        }, [child]);
      }

      return ele;
    },
    isNoTitle: function isNoTitle() {
      var title = getComponent(this, 'title');
      return !title && title !== 0;
    },
    getOverlay: function getOverlay() {
      var title = getComponent(this, 'title');

      if (title === 0) {
        return title;
      }

      return title || '';
    },
    // 动态设置动画点
    onPopupAlign: function onPopupAlign(domNode, align) {
      var placements = this.getPlacements(); // 当前返回的位置

      var placement = Object.keys(placements).filter(function (key) {
        return placements[key].points[0] === align.points[0] && placements[key].points[1] === align.points[1];
      })[0];

      if (!placement) {
        return;
      } // 根据当前坐标设置动画点


      var rect = domNode.getBoundingClientRect();
      var transformOrigin = {
        top: '50%',
        left: '50%'
      };

      if (placement.indexOf('top') >= 0 || placement.indexOf('Bottom') >= 0) {
        transformOrigin.top = "".concat(rect.height - align.offset[1], "px");
      } else if (placement.indexOf('Top') >= 0 || placement.indexOf('bottom') >= 0) {
        transformOrigin.top = "".concat(-align.offset[1], "px");
      }

      if (placement.indexOf('left') >= 0 || placement.indexOf('Right') >= 0) {
        transformOrigin.left = "".concat(rect.width - align.offset[0], "px");
      } else if (placement.indexOf('right') >= 0 || placement.indexOf('Left') >= 0) {
        transformOrigin.left = "".concat(-align.offset[0], "px");
      }

      domNode.style.transformOrigin = "".concat(transformOrigin.left, " ").concat(transformOrigin.top);
    }
  },
  render: function render() {
    var _classNames;

    var $props = this.$props,
        $data = this.$data,
        $attrs = this.$attrs;
    var customizePrefixCls = $props.prefixCls,
        openClassName = $props.openClassName,
        getPopupContainer = $props.getPopupContainer,
        color = $props.color,
        overlayClassName = $props.overlayClassName;
    var getContextPopupContainer = this.configProvider.getPopupContainer;
    var getPrefixCls = this.configProvider.getPrefixCls;
    var prefixCls = getPrefixCls('tooltip', customizePrefixCls);
    var children = this.children || filterEmpty(getSlot(this));
    children = children.length === 1 ? children[0] : children;
    var sVisible = $data.sVisible; // Hide tooltip when there is no title

    if (!hasProp(this, 'visible') && this.isNoTitle()) {
      sVisible = false;
    }

    if (!children) {
      return null;
    }

    var child = this.getDisabledCompatibleChildren(isValidElement(children) ? children : _createVNode("span", null, [children]));
    var childCls = classNames((_classNames = {}, _defineProperty(_classNames, openClassName || "".concat(prefixCls, "-open"), sVisible), _defineProperty(_classNames, child.props && child.props.class, child.props && child.props.class), _classNames));
    var customOverlayClassName = classNames(overlayClassName, _defineProperty({}, "".concat(prefixCls, "-").concat(color), color && PresetColorRegex.test(color)));
    var formattedOverlayInnerStyle;
    var arrowContentStyle;

    if (color && !PresetColorRegex.test(color)) {
      formattedOverlayInnerStyle = {
        backgroundColor: color
      };
      arrowContentStyle = {
        backgroundColor: color
      };
    }

    var vcTooltipProps = _extends(_extends(_extends({}, $attrs), $props), {
      prefixCls: prefixCls,
      getTooltipContainer: getPopupContainer || getContextPopupContainer,
      builtinPlacements: this.getPlacements(),
      overlay: this.getOverlay(),
      visible: sVisible,
      ref: 'tooltip',
      overlayClassName: customOverlayClassName,
      overlayInnerStyle: formattedOverlayInnerStyle,
      arrowContent: _createVNode("span", {
        "class": "".concat(prefixCls, "-arrow-content"),
        "style": arrowContentStyle
      }, null),
      onVisibleChange: this.handleVisibleChange,
      onPopupAlign: this.onPopupAlign
    });

    return _createVNode(VcTooltip, vcTooltipProps, {
      default: function _default() {
        return [sVisible ? cloneElement(child, {
          class: childCls
        }) : child];
      }
    });
  }
});