"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classNames = _interopRequireDefault(require("../_util/classNames"));

var _omit = _interopRequireDefault(require("omit.js"));

var _src = _interopRequireDefault(require("../vc-drawer/src"));

var _vueTypes = _interopRequireDefault(require("../_util/vue-types"));

var _BaseMixin = _interopRequireDefault(require("../_util/BaseMixin"));

var _CloseOutlined = _interopRequireDefault(require("@ant-design/icons-vue/lib/icons/CloseOutlined"));

var _propsUtil = require("../_util/props-util");

var _configProvider = require("../config-provider");

var _type = require("../_util/type");

var __rest = void 0 && (void 0).__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

var PlacementTypes = (0, _type.tuple)('top', 'right', 'bottom', 'left');
var Drawer = (0, _vue.defineComponent)({
  name: 'ADrawer',
  mixins: [_BaseMixin.default],
  inheritAttrs: false,
  props: {
    closable: _vueTypes.default.looseBool.def(true),
    destroyOnClose: _vueTypes.default.looseBool,
    getContainer: _vueTypes.default.any,
    maskClosable: _vueTypes.default.looseBool.def(true),
    mask: _vueTypes.default.looseBool.def(true),
    maskStyle: _vueTypes.default.object,
    wrapStyle: _vueTypes.default.object,
    bodyStyle: _vueTypes.default.object,
    headerStyle: _vueTypes.default.object,
    drawerStyle: _vueTypes.default.object,
    title: _vueTypes.default.VNodeChild,
    visible: _vueTypes.default.looseBool,
    width: _vueTypes.default.oneOfType([_vueTypes.default.string, _vueTypes.default.number]).def(256),
    height: _vueTypes.default.oneOfType([_vueTypes.default.string, _vueTypes.default.number]).def(256),
    zIndex: _vueTypes.default.number,
    prefixCls: _vueTypes.default.string,
    placement: _vueTypes.default.oneOf(PlacementTypes).def('right'),
    level: _vueTypes.default.any.def(null),
    wrapClassName: _vueTypes.default.string,
    handle: _vueTypes.default.VNodeChild,
    afterVisibleChange: _vueTypes.default.func,
    keyboard: _vueTypes.default.looseBool.def(true),
    onClose: _vueTypes.default.func,
    'onUpdate:visible': _vueTypes.default.func
  },
  setup: function setup(props) {
    var configProvider = (0, _vue.inject)('configProvider', _configProvider.defaultConfigProvider);
    return {
      configProvider: configProvider,
      destroyClose: false,
      preVisible: props.visible,
      parentDrawer: (0, _vue.inject)('parentDrawer', null)
    };
  },
  data: function data() {
    return {
      sPush: false
    };
  },
  beforeCreate: function beforeCreate() {
    (0, _vue.provide)('parentDrawer', this);
  },
  mounted: function mounted() {
    // fix: delete drawer in child and re-render, no push started.
    // <Drawer>{show && <Drawer />}</Drawer>
    var visible = this.visible;

    if (visible && this.parentDrawer) {
      this.parentDrawer.push();
    }
  },
  updated: function updated() {
    var _this = this;

    (0, _vue.nextTick)(function () {
      if (_this.preVisible !== _this.visible && _this.parentDrawer) {
        if (_this.visible) {
          _this.parentDrawer.push();
        } else {
          _this.parentDrawer.pull();
        }
      }

      _this.preVisible = _this.visible;
    });
  },
  beforeUnmount: function beforeUnmount() {
    // unmount drawer in child, clear push.
    if (this.parentDrawer) {
      this.parentDrawer.pull();
    }
  },
  methods: {
    domFocus: function domFocus() {
      if (this.$refs.vcDrawer) {
        this.$refs.vcDrawer.domFocus();
      }
    },
    close: function close(e) {
      this.$emit('update:visible', false);
      this.$emit('close', e);
    },
    // onMaskClick(e) {
    //   if (!this.maskClosable) {
    //     return;
    //   }
    //   this.close(e);
    // },
    push: function push() {
      this.setState({
        sPush: true
      });
    },
    pull: function pull() {
      var _this2 = this;

      this.setState({
        sPush: false
      }, function () {
        _this2.domFocus();
      });
    },
    onDestroyTransitionEnd: function onDestroyTransitionEnd() {
      var isDestroyOnClose = this.getDestroyOnClose();

      if (!isDestroyOnClose) {
        return;
      }

      if (!this.visible) {
        this.destroyClose = true;
        this.$forceUpdate();
      }
    },
    getDestroyOnClose: function getDestroyOnClose() {
      return this.destroyOnClose && !this.visible;
    },
    // get drawar push width or height
    getPushTransform: function getPushTransform(placement) {
      if (placement === 'left' || placement === 'right') {
        return "translateX(".concat(placement === 'left' ? 180 : -180, "px)");
      }

      if (placement === 'top' || placement === 'bottom') {
        return "translateY(".concat(placement === 'top' ? 180 : -180, "px)");
      }
    },
    getRcDrawerStyle: function getRcDrawerStyle() {
      var _this$$props = this.$props,
          zIndex = _this$$props.zIndex,
          placement = _this$$props.placement,
          wrapStyle = _this$$props.wrapStyle;
      var push = this.$data.sPush;
      return (0, _extends2.default)({
        zIndex: zIndex,
        transform: push ? this.getPushTransform(placement) : undefined
      }, wrapStyle);
    },
    renderHeader: function renderHeader(prefixCls) {
      var _this$$props2 = this.$props,
          closable = _this$$props2.closable,
          headerStyle = _this$$props2.headerStyle;
      var title = (0, _propsUtil.getComponent)(this, 'title');

      if (!title && !closable) {
        return null;
      }

      var headerClassName = title ? "".concat(prefixCls, "-header") : "".concat(prefixCls, "-header-no-title");
      return (0, _vue.createVNode)("div", {
        "class": headerClassName,
        "style": headerStyle
      }, [title && (0, _vue.createVNode)("div", {
        "class": "".concat(prefixCls, "-title")
      }, [title]), closable ? this.renderCloseIcon(prefixCls) : null]);
    },
    renderCloseIcon: function renderCloseIcon(prefixCls) {
      var closable = this.closable;
      return closable && (0, _vue.createVNode)("button", {
        "key": "closer",
        "onClick": this.close,
        "aria-label": "Close",
        "class": "".concat(prefixCls, "-close")
      }, [(0, _vue.createVNode)(_CloseOutlined.default, null, null)]);
    },
    // render drawer body dom
    renderBody: function renderBody(prefixCls) {
      var _a, _b;

      if (this.destroyClose && !this.visible) {
        return null;
      }

      this.destroyClose = false;
      var _this$$props3 = this.$props,
          bodyStyle = _this$$props3.bodyStyle,
          drawerStyle = _this$$props3.drawerStyle;
      var containerStyle = {};
      var isDestroyOnClose = this.getDestroyOnClose();

      if (isDestroyOnClose) {
        // Increase the opacity transition, delete children after closing.
        containerStyle.opacity = 0;
        containerStyle.transition = 'opacity .3s';
      }

      return (0, _vue.createVNode)("div", {
        "class": "".concat(prefixCls, "-wrapper-body"),
        "style": (0, _extends2.default)((0, _extends2.default)({}, containerStyle), drawerStyle),
        "onTransitionend": this.onDestroyTransitionEnd
      }, [this.renderHeader(prefixCls), (0, _vue.createVNode)("div", {
        "key": "body",
        "class": "".concat(prefixCls, "-body"),
        "style": bodyStyle
      }, [(_b = (_a = this.$slots).default) === null || _b === void 0 ? void 0 : _b.call(_a)])]);
    }
  },
  render: function render() {
    var _classnames,
        _this3 = this;

    var props = (0, _propsUtil.getOptionProps)(this);

    var customizePrefixCls = props.prefixCls,
        width = props.width,
        height = props.height,
        visible = props.visible,
        placement = props.placement,
        wrapClassName = props.wrapClassName,
        mask = props.mask,
        rest = __rest(props, ["prefixCls", "width", "height", "visible", "placement", "wrapClassName", "mask"]);

    var haveMask = mask ? '' : 'no-mask';
    var offsetStyle = {};

    if (placement === 'left' || placement === 'right') {
      offsetStyle.width = typeof width === 'number' ? "".concat(width, "px") : width;
    } else {
      offsetStyle.height = typeof height === 'number' ? "".concat(height, "px") : height;
    }

    var handler = (0, _propsUtil.getComponent)(this, 'handle') || false;
    var getPrefixCls = this.configProvider.getPrefixCls;
    var prefixCls = getPrefixCls('drawer', customizePrefixCls);
    var className = this.$attrs.class;
    var vcDrawerProps = (0, _extends2.default)((0, _extends2.default)((0, _extends2.default)((0, _extends2.default)((0, _extends2.default)({}, this.$attrs), (0, _omit.default)(rest, ['closable', 'destroyOnClose', 'drawerStyle', 'headerStyle', 'bodyStyle', 'title', 'push', 'visible', 'getPopupContainer', 'rootPrefixCls', 'getPrefixCls', 'renderEmpty', 'csp', 'pageHeader', 'autoInsertSpaceInButton'])), {
      onClose: this.close,
      handler: handler
    }), offsetStyle), {
      prefixCls: prefixCls,
      open: visible,
      showMask: mask,
      placement: placement,
      class: (0, _classNames.default)((_classnames = {}, (0, _defineProperty2.default)(_classnames, className, !!className), (0, _defineProperty2.default)(_classnames, wrapClassName, !!wrapClassName), (0, _defineProperty2.default)(_classnames, haveMask, !!haveMask), _classnames)),
      wrapStyle: this.getRcDrawerStyle(),
      ref: 'vcDrawer'
    });
    return (0, _vue.createVNode)(_src.default, vcDrawerProps, {
      default: function _default() {
        return [_this3.renderBody(prefixCls)];
      }
    });
  }
});

var _default2 = (0, _type.withInstall)(Drawer);

exports.default = _default2;