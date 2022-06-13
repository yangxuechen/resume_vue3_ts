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

import { inject, provide, nextTick, defineComponent } from 'vue';
import classnames from '../_util/classNames';
import omit from 'omit.js';
import VcDrawer from '../vc-drawer/src';
import PropTypes from '../_util/vue-types';
import BaseMixin from '../_util/BaseMixin';
import CloseOutlined from '@ant-design/icons-vue/CloseOutlined';
import { getComponent, getOptionProps } from '../_util/props-util';
import { defaultConfigProvider } from '../config-provider';
import { tuple, withInstall } from '../_util/type';
var PlacementTypes = tuple('top', 'right', 'bottom', 'left');
var Drawer = defineComponent({
  name: 'ADrawer',
  mixins: [BaseMixin],
  inheritAttrs: false,
  props: {
    closable: PropTypes.looseBool.def(true),
    destroyOnClose: PropTypes.looseBool,
    getContainer: PropTypes.any,
    maskClosable: PropTypes.looseBool.def(true),
    mask: PropTypes.looseBool.def(true),
    maskStyle: PropTypes.object,
    wrapStyle: PropTypes.object,
    bodyStyle: PropTypes.object,
    headerStyle: PropTypes.object,
    drawerStyle: PropTypes.object,
    title: PropTypes.VNodeChild,
    visible: PropTypes.looseBool,
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).def(256),
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).def(256),
    zIndex: PropTypes.number,
    prefixCls: PropTypes.string,
    placement: PropTypes.oneOf(PlacementTypes).def('right'),
    level: PropTypes.any.def(null),
    wrapClassName: PropTypes.string,
    handle: PropTypes.VNodeChild,
    afterVisibleChange: PropTypes.func,
    keyboard: PropTypes.looseBool.def(true),
    onClose: PropTypes.func,
    'onUpdate:visible': PropTypes.func
  },
  setup: function setup(props) {
    var configProvider = inject('configProvider', defaultConfigProvider);
    return {
      configProvider: configProvider,
      destroyClose: false,
      preVisible: props.visible,
      parentDrawer: inject('parentDrawer', null)
    };
  },
  data: function data() {
    return {
      sPush: false
    };
  },
  beforeCreate: function beforeCreate() {
    provide('parentDrawer', this);
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

    nextTick(function () {
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
      return _extends({
        zIndex: zIndex,
        transform: push ? this.getPushTransform(placement) : undefined
      }, wrapStyle);
    },
    renderHeader: function renderHeader(prefixCls) {
      var _this$$props2 = this.$props,
          closable = _this$$props2.closable,
          headerStyle = _this$$props2.headerStyle;
      var title = getComponent(this, 'title');

      if (!title && !closable) {
        return null;
      }

      var headerClassName = title ? "".concat(prefixCls, "-header") : "".concat(prefixCls, "-header-no-title");
      return _createVNode("div", {
        "class": headerClassName,
        "style": headerStyle
      }, [title && _createVNode("div", {
        "class": "".concat(prefixCls, "-title")
      }, [title]), closable ? this.renderCloseIcon(prefixCls) : null]);
    },
    renderCloseIcon: function renderCloseIcon(prefixCls) {
      var closable = this.closable;
      return closable && _createVNode("button", {
        "key": "closer",
        "onClick": this.close,
        "aria-label": "Close",
        "class": "".concat(prefixCls, "-close")
      }, [_createVNode(CloseOutlined, null, null)]);
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

      return _createVNode("div", {
        "class": "".concat(prefixCls, "-wrapper-body"),
        "style": _extends(_extends({}, containerStyle), drawerStyle),
        "onTransitionend": this.onDestroyTransitionEnd
      }, [this.renderHeader(prefixCls), _createVNode("div", {
        "key": "body",
        "class": "".concat(prefixCls, "-body"),
        "style": bodyStyle
      }, [(_b = (_a = this.$slots).default) === null || _b === void 0 ? void 0 : _b.call(_a)])]);
    }
  },
  render: function render() {
    var _classnames,
        _this3 = this;

    var props = getOptionProps(this);

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

    var handler = getComponent(this, 'handle') || false;
    var getPrefixCls = this.configProvider.getPrefixCls;
    var prefixCls = getPrefixCls('drawer', customizePrefixCls);
    var className = this.$attrs.class;

    var vcDrawerProps = _extends(_extends(_extends(_extends(_extends({}, this.$attrs), omit(rest, ['closable', 'destroyOnClose', 'drawerStyle', 'headerStyle', 'bodyStyle', 'title', 'push', 'visible', 'getPopupContainer', 'rootPrefixCls', 'getPrefixCls', 'renderEmpty', 'csp', 'pageHeader', 'autoInsertSpaceInButton'])), {
      onClose: this.close,
      handler: handler
    }), offsetStyle), {
      prefixCls: prefixCls,
      open: visible,
      showMask: mask,
      placement: placement,
      class: classnames((_classnames = {}, _defineProperty(_classnames, className, !!className), _defineProperty(_classnames, wrapClassName, !!wrapClassName), _defineProperty(_classnames, haveMask, !!haveMask), _classnames)),
      wrapStyle: this.getRcDrawerStyle(),
      ref: 'vcDrawer'
    });

    return _createVNode(VcDrawer, vcDrawerProps, {
      default: function _default() {
        return [_this3.renderBody(prefixCls)];
      }
    });
  }
});
export default withInstall(Drawer);