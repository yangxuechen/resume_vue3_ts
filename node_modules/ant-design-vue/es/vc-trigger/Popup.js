import _typeof from "@babel/runtime/helpers/esm/typeof";
import _extends from "@babel/runtime/helpers/esm/extends";
import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import { withDirectives as _withDirectives, vShow as _vShow, createVNode as _createVNode } from "vue";
import PropTypes from '../_util/vue-types';
import Align from '../vc-align';
import PopupInner from './PopupInner';
import LazyRenderBox from './LazyRenderBox';
import BaseMixin from '../_util/BaseMixin';
import { saveRef } from './utils';
import { splitAttrs, findDOMNode } from '../_util/props-util';
import { getTransitionProps, Transition } from '../_util/transition';
export default {
  name: 'VCTriggerPopup',
  mixins: [BaseMixin],
  inheritAttrs: false,
  props: {
    visible: PropTypes.looseBool,
    getClassNameFromAlign: PropTypes.func,
    getRootDomNode: PropTypes.func,
    align: PropTypes.any,
    destroyPopupOnHide: PropTypes.looseBool,
    prefixCls: PropTypes.string,
    getContainer: PropTypes.func,
    transitionName: PropTypes.string,
    animation: PropTypes.any,
    maskAnimation: PropTypes.string,
    maskTransitionName: PropTypes.string,
    mask: PropTypes.looseBool,
    zIndex: PropTypes.number,
    popupClassName: PropTypes.any,
    popupStyle: PropTypes.object.def(function () {
      return {};
    }),
    stretch: PropTypes.string,
    point: PropTypes.shape({
      pageX: PropTypes.number,
      pageY: PropTypes.number
    }).loose
  },
  data: function data() {
    this.domEl = null;
    this.currentAlignClassName = undefined;
    this.transitionProps = {};
    this.savePopupRef = saveRef.bind(this, 'popupInstance');
    this.saveAlignRef = saveRef.bind(this, 'alignInstance');
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
      return findDOMNode(this.popupInstance);
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
            enterActiveClass.push.apply(enterActiveClass, _toConsumableArray(_this3.transitionProps[k].split(' ')));
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
      var onEvents = splitAttrs($attrs).onEvents;
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

      var popupInnerProps = _extends(_extends({
        prefixCls: prefixCls,
        visible: visible,
        // hiddenClassName,
        class: className
      }, onEvents), {
        ref: savePopupRef,
        style: _extends(_extends(_extends(_extends({}, sizeStyle), popupStyle), style), this.getZIndexStyle())
      });

      var transitionName = getTransitionName();
      var useTransition = !!transitionName;
      var transitionProps = getTransitionProps(transitionName);

      if (_typeof(animation) === 'object') {
        useTransition = true;
        transitionProps = _extends(_extends({}, transitionProps), animation);
      }

      if (!useTransition) {
        transitionProps = {};
      }

      this.transitionProps = transitionProps;

      if (destroyPopupOnHide) {
        return _createVNode(Transition, transitionProps, {
          default: function _default() {
            return [visible ? _createVNode(Align, {
              "target": _this4.getAlignTarget(),
              "key": "popup",
              "ref": _this4.saveAlignRef,
              "monitorWindowResize": true,
              "align": align,
              "onAlign": _this4.onAlign
            }, {
              default: function _default() {
                return [_createVNode(PopupInner, popupInnerProps, {
                  default: function _default() {
                    return [(_a = $slots.default) === null || _a === void 0 ? void 0 : _a.call($slots)];
                  }
                })];
              }
            }) : null];
          }
        });
      }

      return _createVNode(Transition, transitionProps, {
        default: function _default() {
          return [_withDirectives(_createVNode(Align, {
            "target": _this4.getAlignTarget(),
            "key": "popup",
            "ref": _this4.saveAlignRef,
            "monitorWindowResize": true,
            "disabled": !visible,
            "align": align,
            "onAlign": _this4.onAlign
          }, {
            default: function _default() {
              return [_createVNode(PopupInner, popupInnerProps, {
                default: function _default() {
                  return [(_b = $slots.default) === null || _b === void 0 ? void 0 : _b.call($slots)];
                }
              })];
            }
          }), [[_vShow, visible]])];
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
        maskElement = _withDirectives(_createVNode(LazyRenderBox, {
          "style": this.getZIndexStyle(),
          "key": "mask",
          "class": "".concat(props.prefixCls, "-mask"),
          "visible": props.visible
        }, null), [[_vShow, props.visible]]);

        if (maskTransition) {
          var _maskElement = function () {
            return maskElement;
          }();

          maskElement = _createVNode(Transition, {
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
    return _createVNode("div", null, [getMaskElement(), getPopupElement()]);
  }
};