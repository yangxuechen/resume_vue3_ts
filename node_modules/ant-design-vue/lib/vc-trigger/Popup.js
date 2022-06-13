"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _vueTypes = _interopRequireDefault(require("../_util/vue-types"));

var _vcAlign = _interopRequireDefault(require("../vc-align"));

var _PopupInner = _interopRequireDefault(require("./PopupInner"));

var _LazyRenderBox = _interopRequireDefault(require("./LazyRenderBox"));

var _BaseMixin = _interopRequireDefault(require("../_util/BaseMixin"));

var _utils = require("./utils");

var _propsUtil = require("../_util/props-util");

var _transition = require("../_util/transition");

var _default2 = {
  name: 'VCTriggerPopup',
  mixins: [_BaseMixin.default],
  inheritAttrs: false,
  props: {
    visible: _vueTypes.default.looseBool,
    getClassNameFromAlign: _vueTypes.default.func,
    getRootDomNode: _vueTypes.default.func,
    align: _vueTypes.default.any,
    destroyPopupOnHide: _vueTypes.default.looseBool,
    prefixCls: _vueTypes.default.string,
    getContainer: _vueTypes.default.func,
    transitionName: _vueTypes.default.string,
    animation: _vueTypes.default.any,
    maskAnimation: _vueTypes.default.string,
    maskTransitionName: _vueTypes.default.string,
    mask: _vueTypes.default.looseBool,
    zIndex: _vueTypes.default.number,
    popupClassName: _vueTypes.default.any,
    popupStyle: _vueTypes.default.object.def(function () {
      return {};
    }),
    stretch: _vueTypes.default.string,
    point: _vueTypes.default.shape({
      pageX: _vueTypes.default.number,
      pageY: _vueTypes.default.number
    }).loose
  },
  data: function data() {
    this.domEl = null;
    this.currentAlignClassName = undefined;
    this.transitionProps = {};
    this.savePopupRef = _utils.saveRef.bind(this, 'popupInstance');
    this.saveAlignRef = _utils.saveRef.bind(this, 'alignInstance');
    return {
      // Used for stretch
      stretchChecked: false,
      targetWidth: undefined,
      targetHeight: undefined
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.$nextTick(function () {
      _this.rootNode = _this.getPopupDomNode();

      _this.setStretchSize();
    });
  },
  // 如添加会导致动画失效，如放开会导致快速输入时闪动 https://github.com/vueComponent/ant-design-vue/issues/1327，
  // 目前方案是保留动画，闪动问题(动画多次执行)进一步定位
  // beforeUpdate() {
  //   if (this.domEl && this.domEl.rcEndListener) {
  //     this.domEl.rcEndListener();
  //     this.domEl = null;
  //   }
  // },
  updated: function updated() {
    var _this2 = this;

    this.$nextTick(function () {
      _this2.setStretchSize();
    });
  },
  methods: {
    onAlign: function onAlign(popupDomNode, align) {
      var props = this.$props;
      var currentAlignClassName = props.getClassNameFromAlign(align); // FIX: https://github.com/react-component/trigger/issues/56
      // FIX: https://github.com/react-component/tooltip/issues/79

      if (this.currentAlignClassName !== currentAlignClassName) {
        this.currentAlignClassName = currentAlignClassName;
        popupDomNode.className = this.getClassName(currentAlignClassName, popupDomNode.className);
      }

      var onaAlign = this.$attrs.onaAlign;
      onaAlign && onaAlign(popupDomNode, align);
    },
    // Record size if stretch needed
    setStretchSize: function setStretchSize() {
      var _this$$props = this.$props,
          stretch = _this$$props.stretch,
          getRootDomNode = _this$$props.getRootDomNode,
          visible = _this$$props.visible;
      var _this$$data = this.$data,
          stretchChecked = _this$$data.stretchChecked,
          targetHeight = _this$$data.targetHeight,
          targetWidth = _this$$data.targetWidth;

      if (!stretch || !visible) {
        if (stretchChecked) {
          this.setState({
            stretchChecked: false
          });
        }

        return;
      }

      var $ele = getRootDomNode();
      if (!$ele) return;
      var height = $ele.offsetHeight;
      var width = $ele.offsetWidth;

      if (targetHeight !== height || targetWidth !== width || !stretchChecked) {
        this.setState({
          stretchChecked: true,
          targetHeight: height,
          targetWidth: width
        });
      }
    },
    getPopupDomNode: function getPopupDomNode() {
      return (0, _propsUtil.findDOMNode)(this.popupInstance);
    },
    getTargetElement: function getTargetElement() {
      return this.$props.getRootDomNode();
    },
    // `target` on `rc-align` can accept as a function to get the bind element or a point.
    // ref: https://www.npmjs.com/package/rc-align
    getAlignTarget: function getAlignTarget() {
      var point = this.$props.point;

      if (point) {
        return point;
      }

      return this.getTargetElement;
    },
    getMaskTransitionName: function getMaskTransitionName() {
      var props = this.$props;
      var transitionName = props.maskTransitionName;
      var animation = props.maskAnimation;

      if (!transitionName && animation) {
        transitionName = "".concat(props.prefixCls, "-").concat(animation);
      }

      return transitionName;
    },
    getTransitionName: function getTransitionName() {
      var props = this.$props;
      var transitionName = props.transitionName;
      var animation = props.animation;

      if (!transitionName) {
        if (typeof animation === 'string') {
          transitionName = "".concat(animation);
        } else if (animation && animation.props && animation.props.name) {
          transitionName = animation.props.name;
        }
      }

      return transitionName;
    },
    getClassName: function getClassName(currentAlignClassName) {
      var _this3 = this;

      var originClassName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      // 保留动画 class
      var enterActiveClass = [];

      if (this.transitionProps) {
        Object.keys(this.transitionProps).forEach(function (k) {
          if (typeof _this3.transitionProps[k] === 'string') {
            enterActiveClass.push.apply(enterActiveClass, (0, _toConsumableArray2.default)(_this3.transitionProps[k].split(' ')));
          }
        });
      }

      var classNames = originClassName.split(' ').filter(function (c) {
        return enterActiveClass.indexOf(c) !== -1;
      }).join(' ');
      return "".concat(this.$props.prefixCls, " ").concat(this.$attrs.class || '', " ").concat(this.$props.popupClassName, " ").concat(currentAlignClassName, " ").concat(classNames);
    },
    getPopupElement: function getPopupElement() {
      var _this4 = this;

      var _a, _b;

      var savePopupRef = this.savePopupRef;
      var props = this.$props,
          $attrs = this.$attrs,
          $slots = this.$slots,
          getTransitionName = this.getTransitionName;
      var _this$$data2 = this.$data,
          stretchChecked = _this$$data2.stretchChecked,
          targetHeight = _this$$data2.targetHeight,
          targetWidth = _this$$data2.targetWidth;
      var _$attrs$style = $attrs.style,
          style = _$attrs$style === void 0 ? {} : _$attrs$style;
      var onEvents = (0, _propsUtil.splitAttrs)($attrs).onEvents;
      var align = props.align,
          visible = props.visible,
          prefixCls = props.prefixCls,
          animation = props.animation,
          popupStyle = props.popupStyle,
          getClassNameFromAlign = props.getClassNameFromAlign,
          destroyPopupOnHide = props.destroyPopupOnHide,
          stretch = props.stretch;
      var className = this.getClassName(this.currentAlignClassName || getClassNameFromAlign(align)); // const hiddenClassName = `${prefixCls}-hidden`

      if (!visible) {
        this.currentAlignClassName = null;
      }

      var sizeStyle = {};

      if (stretch) {
        // Stretch with target
        if (stretch.indexOf('height') !== -1) {
          sizeStyle.height = typeof targetHeight === 'number' ? "".concat(targetHeight, "px") : targetHeight;
        } else if (stretch.indexOf('minHeight') !== -1) {
          sizeStyle.minHeight = typeof targetHeight === 'number' ? "".concat(targetHeight, "px") : targetHeight;
        }

        if (stretch.indexOf('width') !== -1) {
          sizeStyle.width = typeof targetWidth === 'number' ? "".concat(targetWidth, "px") : targetWidth;
        } else if (stretch.indexOf('minWidth') !== -1) {
          sizeStyle.minWidth = typeof targetWidth === 'number' ? "".concat(targetWidth, "px") : targetWidth;
        } // Delay force align to makes ui smooth


        if (!stretchChecked) {
          // sizeStyle.visibility = 'hidden'
          setTimeout(function () {
            if (_this4.alignInstance) {
              _this4.alignInstance.forceAlign();
            }
          }, 0);
        }
      }

      var popupInnerProps = (0, _extends2.default)((0, _extends2.default)({
        prefixCls: prefixCls,
        visible: visible,
        // hiddenClassName,
        class: className
      }, onEvents), {
        ref: savePopupRef,
        style: (0, _extends2.default)((0, _extends2.default)((0, _extends2.default)((0, _extends2.default)({}, sizeStyle), popupStyle), style), this.getZIndexStyle())
      });
      var transitionName = getTransitionName();
      var useTransition = !!transitionName;
      var transitionProps = (0, _transition.getTransitionProps)(transitionName);

      if ((0, _typeof2.default)(animation) === 'object') {
        useTransition = true;
        transitionProps = (0, _extends2.default)((0, _extends2.default)({}, transitionProps), animation);
      }

      if (!useTransition) {
        transitionProps = {};
      }

      this.transitionProps = transitionProps;

      if (destroyPopupOnHide) {
        return (0, _vue.createVNode)(_transition.Transition, transitionProps, {
          default: function _default() {
            return [visible ? (0, _vue.createVNode)(_vcAlign.default, {
              "target": _this4.getAlignTarget(),
              "key": "popup",
              "ref": _this4.saveAlignRef,
              "monitorWindowResize": true,
              "align": align,
              "onAlign": _this4.onAlign
            }, {
              default: function _default() {
                return [(0, _vue.createVNode)(_PopupInner.default, popupInnerProps, {
                  default: function _default() {
                    return [(_a = $slots.default) === null || _a === void 0 ? void 0 : _a.call($slots)];
                  }
                })];
              }
            }) : null];
          }
        });
      }

      return (0, _vue.createVNode)(_transition.Transition, transitionProps, {
        default: function _default() {
          return [(0, _vue.withDirectives)((0, _vue.createVNode)(_vcAlign.default, {
            "target": _this4.getAlignTarget(),
            "key": "popup",
            "ref": _this4.saveAlignRef,
            "monitorWindowResize": true,
            "disabled": !visible,
            "align": align,
            "onAlign": _this4.onAlign
          }, {
            default: function _default() {
              return [(0, _vue.createVNode)(_PopupInner.default, popupInnerProps, {
                default: function _default() {
                  return [(_b = $slots.default) === null || _b === void 0 ? void 0 : _b.call($slots)];
                }
              })];
            }
          }), [[_vue.vShow, visible]])];
        }
      });
    },
    getZIndexStyle: function getZIndexStyle() {
      var style = {};
      var props = this.$props;

      if (props.zIndex !== undefined) {
        style.zIndex = props.zIndex;
      }

      return style;
    },
    getMaskElement: function getMaskElement() {
      var props = this.$props;
      var maskElement = null;

      if (props.mask) {
        var maskTransition = this.getMaskTransitionName();
        maskElement = (0, _vue.withDirectives)((0, _vue.createVNode)(_LazyRenderBox.default, {
          "style": this.getZIndexStyle(),
          "key": "mask",
          "class": "".concat(props.prefixCls, "-mask"),
          "visible": props.visible
        }, null), [[_vue.vShow, props.visible]]);

        if (maskTransition) {
          var _maskElement = function () {
            return maskElement;
          }();

          maskElement = (0, _vue.createVNode)(_transition.Transition, {
            "appear": true,
            "name": maskTransition
          }, {
            default: function _default() {
              return [_maskElement];
            }
          });
        }
      }

      return maskElement;
    }
  },
  render: function render() {
    var getMaskElement = this.getMaskElement,
        getPopupElement = this.getPopupElement;
    return (0, _vue.createVNode)("div", null, [getMaskElement(), getPopupElement()]);
  }
};
exports.default = _default2;