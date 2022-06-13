import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _extends from "@babel/runtime/helpers/esm/extends";
import { withDirectives as _withDirectives, vShow as _vShow, createVNode as _createVNode } from "vue";
import PanelContent from './PanelContent';
import { initDefaultProps, getComponent, getSlot } from '../../_util/props-util';
import { panelProps } from './commonProps';
import { defineComponent } from 'vue';
import BaseMixin from '../../_util/BaseMixin';
import Transition from '../../_util/transition';
export default defineComponent({
  name: 'Panel',
  mixins: [BaseMixin],
  props: initDefaultProps(panelProps(), {
    showArrow: true,
    isActive: false,
    destroyInactivePanel: false,
    headerClass: '',
    forceRender: false
  }),
  methods: {
    handleItemClick: function handleItemClick() {
      this.__emit('itemClick', this.panelKey);
    },
    handleKeyPress: function handleKeyPress(e) {
      if (e.key === 'Enter' || e.keyCode === 13 || e.which === 13) {
        this.handleItemClick();
      }
    }
  },
  render: function render() {
    var _headerCls,
        _itemCls,
        _this = this;

    var _this$$props = this.$props,
        prefixCls = _this$$props.prefixCls,
        headerClass = _this$$props.headerClass,
        isActive = _this$$props.isActive,
        showArrow = _this$$props.showArrow,
        destroyInactivePanel = _this$$props.destroyInactivePanel,
        disabled = _this$$props.disabled,
        openAnimation = _this$$props.openAnimation,
        accordion = _this$$props.accordion,
        forceRender = _this$$props.forceRender,
        expandIcon = _this$$props.expandIcon,
        extra = _this$$props.extra;

    var transitionProps = _extends({
      appear: true,
      css: false
    }, openAnimation);

    var headerCls = (_headerCls = {}, _defineProperty(_headerCls, "".concat(prefixCls, "-header"), true), _defineProperty(_headerCls, headerClass, headerClass), _headerCls);
    var header = getComponent(this, 'header');
    var itemCls = (_itemCls = {}, _defineProperty(_itemCls, "".concat(prefixCls, "-item"), true), _defineProperty(_itemCls, "".concat(prefixCls, "-item-active"), isActive), _defineProperty(_itemCls, "".concat(prefixCls, "-item-disabled"), disabled), _itemCls);

    var icon = _createVNode("i", {
      "class": "arrow"
    }, null);

    if (showArrow && typeof expandIcon === 'function') {
      icon = expandIcon(this.$props);
    }

    var panelContent = _withDirectives(_createVNode(PanelContent, {
      "prefixCls": prefixCls,
      "isActive": isActive,
      "destroyInactivePanel": destroyInactivePanel,
      "forceRender": forceRender,
      "role": accordion ? 'tabpanel' : null
    }, {
      default: function _default() {
        return [getSlot(_this)];
      }
    }), [[_vShow, isActive]]);

    return _createVNode("div", {
      "class": itemCls,
      "role": "tablist"
    }, [_createVNode("div", {
      "class": headerCls,
      "onClick": this.handleItemClick,
      "onKeypress": this.handleKeyPress,
      "role": accordion ? 'tab' : 'button',
      "tabindex": disabled ? -1 : 0,
      "aria-expanded": isActive
    }, [showArrow && icon, header, extra && _createVNode("div", {
      "class": "".concat(prefixCls, "-extra")
    }, [extra])]), _createVNode(Transition, transitionProps, {
      default: function _default() {
        return [panelContent];
      }
    })]);
  }
});