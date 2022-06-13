"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _PanelContent = _interopRequireDefault(require("./PanelContent"));

var _propsUtil = require("../../_util/props-util");

var _commonProps = require("./commonProps");

var _BaseMixin = _interopRequireDefault(require("../../_util/BaseMixin"));

var _transition = _interopRequireDefault(require("../../_util/transition"));

var _default2 = (0, _vue.defineComponent)({
  name: 'Panel',
  mixins: [_BaseMixin.default],
  props: (0, _propsUtil.initDefaultProps)((0, _commonProps.panelProps)(), {
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
    var transitionProps = (0, _extends2.default)({
      appear: true,
      css: false
    }, openAnimation);
    var headerCls = (_headerCls = {}, (0, _defineProperty2.default)(_headerCls, "".concat(prefixCls, "-header"), true), (0, _defineProperty2.default)(_headerCls, headerClass, headerClass), _headerCls);
    var header = (0, _propsUtil.getComponent)(this, 'header');
    var itemCls = (_itemCls = {}, (0, _defineProperty2.default)(_itemCls, "".concat(prefixCls, "-item"), true), (0, _defineProperty2.default)(_itemCls, "".concat(prefixCls, "-item-active"), isActive), (0, _defineProperty2.default)(_itemCls, "".concat(prefixCls, "-item-disabled"), disabled), _itemCls);
    var icon = (0, _vue.createVNode)("i", {
      "class": "arrow"
    }, null);

    if (showArrow && typeof expandIcon === 'function') {
      icon = expandIcon(this.$props);
    }

    var panelContent = (0, _vue.withDirectives)((0, _vue.createVNode)(_PanelContent.default, {
      "prefixCls": prefixCls,
      "isActive": isActive,
      "destroyInactivePanel": destroyInactivePanel,
      "forceRender": forceRender,
      "role": accordion ? 'tabpanel' : null
    }, {
      default: function _default() {
        return [(0, _propsUtil.getSlot)(_this)];
      }
    }), [[_vue.vShow, isActive]]);
    return (0, _vue.createVNode)("div", {
      "class": itemCls,
      "role": "tablist"
    }, [(0, _vue.createVNode)("div", {
      "class": headerCls,
      "onClick": this.handleItemClick,
      "onKeypress": this.handleKeyPress,
      "role": accordion ? 'tab' : 'button',
      "tabindex": disabled ? -1 : 0,
      "aria-expanded": isActive
    }, [showArrow && icon, header, extra && (0, _vue.createVNode)("div", {
      "class": "".concat(prefixCls, "-extra")
    }, [extra])]), (0, _vue.createVNode)(_transition.default, transitionProps, {
      default: function _default() {
        return [panelContent];
      }
    })]);
  }
});

exports.default = _default2;