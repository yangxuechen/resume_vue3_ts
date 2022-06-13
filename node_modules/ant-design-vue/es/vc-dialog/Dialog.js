import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _extends from "@babel/runtime/helpers/esm/extends";
import { withDirectives as _withDirectives, vShow as _vShow, createVNode as _createVNode } from "vue";
import { defineComponent, provide } from 'vue';
import { initDefaultProps, getSlot, findDOMNode } from '../_util/props-util';
import KeyCode from '../_util/KeyCode';
import contains from '../vc-util/Dom/contains';
import LazyRenderBox from './LazyRenderBox';
import BaseMixin from '../_util/BaseMixin';
import { getTransitionProps, Transition } from '../_util/transition';
import _switchScrollingEffect from '../_util/switchScrollingEffect';
import getDialogPropTypes from './IDialogPropTypes';
import warning from '../_util/warning';
var IDialogPropTypes = getDialogPropTypes();
var uuid = 0;

function noop() {}

function getScroll(w, top) {
  var ret = w["page".concat(top ? 'Y' : 'X', "Offset")];
  var method = "scroll".concat(top ? 'Top' : 'Left');

  if (typeof ret !== 'number') {
    var d = w.document;
    ret = d.documentElement[method];

    if (typeof ret !== 'number') {
      ret = d.body[method];
    }
  }

  return ret;
}

function setTransformOrigin(node, value) {
  var style = node.style;
  ['Webkit', 'Moz', 'Ms', 'ms'].forEach(function (prefix) {
    style["".concat(prefix, "TransformOrigin")] = value;
  });
  style["transformOrigin"] = value;
}

function offset(el) {
  var rect = el.getBoundingClientRect();
  var pos = {
    left: rect.left,
    top: rect.top
  };
  var doc = el.ownerDocument;
  var w = doc.defaultView || doc.parentWindow;
  pos.left += getScroll(w);
  pos.top += getScroll(w, true);
  return pos;
}

var cacheOverflow = {};
export default defineComponent({
  name: 'VcDialog',
  mixins: [BaseMixin],
  inheritAttrs: false,
  props: initDefaultProps(IDialogPropTypes, {
    mask: true,
    visible: false,
    keyboard: true,
    closable: true,
    maskClosable: true,
    destroyOnClose: false,
    prefixCls: 'rc-dialog',
    getOpenCount: function getOpenCount() {
      return null;
    },
    focusTriggerAfterClose: true
  }),
  data: function data() {
    warning(!this.dialogClass, 'Modal', 'dialogClass is deprecated, please use class instead.');
    warning(!this.dialogStyle, 'Modal', 'dialogStyle is deprecated, please use style instead.');
    return {
      inTransition: false,
      titleId: "rcDialogTitle".concat(uuid++),
      dialogMouseDown: undefined
    };
  },
  watch: {
    visible: function visible(val) {
      var _this = this;

      this.$nextTick(function () {
        _this.updatedCallback(!val);
      });
    }
  },
  created: function created() {
    provide('dialogContext', this);
  },
  mounted: function mounted() {
    var _this2 = this;

    this.$nextTick(function () {
      _this2.updatedCallback(false); // if forceRender is true, set element style display to be none;


      if ((_this2.forceRender || _this2.getContainer === false && !_this2.visible) && _this2.$refs.wrap) {
        _this2.$refs.wrap.style.display = 'none';
      }
    });
  },
  beforeUnmount: function beforeUnmount() {
    var visible = this.visible,
        getOpenCount = this.getOpenCount;

    if ((visible || this.inTransition) && !getOpenCount()) {
      this.switchScrollingEffect();
    }

    clearTimeout(this.timeoutId);
  },
  methods: {
    // 对外暴露的 api 不要更改名称或删除
    getDialogWrap: function getDialogWrap() {
      return this.$refs.wrap;
    },
    updatedCallback: function updatedCallback(visible) {
      var mousePosition = this.mousePosition;
      var mask = this.mask,
          focusTriggerAfterClose = this.focusTriggerAfterClose;

      if (this.visible) {
        // first show
        if (!visible) {
          this.openTime = Date.now(); // this.lastOutSideFocusNode = document.activeElement

          this.switchScrollingEffect(); // this.$refs.wrap.focus()

          this.tryFocus();
          var dialogNode = findDOMNode(this.$refs.dialog);

          if (mousePosition) {
            var elOffset = offset(dialogNode);
            setTransformOrigin(dialogNode, "".concat(mousePosition.x - elOffset.left, "px ").concat(mousePosition.y - elOffset.top, "px"));
          } else {
            setTransformOrigin(dialogNode, '');
          }
        }
      } else if (visible) {
        this.inTransition = true;

        if (mask && this.lastOutSideFocusNode && focusTriggerAfterClose) {
          try {
            this.lastOutSideFocusNode.focus();
          } catch (e) {
            this.lastOutSideFocusNode = null;
          }

          this.lastOutSideFocusNode = null;
        }
      }
    },
    tryFocus: function tryFocus() {
      if (!contains(this.$refs.wrap, document.activeElement)) {
        this.lastOutSideFocusNode = document.activeElement;
        this.$refs.sentinelStart.focus();
      }
    },
    onAnimateLeave: function onAnimateLeave() {
      var afterClose = this.afterClose; // need demo?
      // https://github.com/react-component/dialog/pull/28

      if (this.$refs.wrap) {
        this.$refs.wrap.style.display = 'none';
      }

      this.inTransition = false;
      this.switchScrollingEffect();

      if (afterClose) {
        afterClose();
      }
    },
    onDialogMouseDown: function onDialogMouseDown() {
      this.dialogMouseDown = true;
    },
    onMaskMouseUp: function onMaskMouseUp() {
      var _this3 = this;

      if (this.dialogMouseDown) {
        this.timeoutId = setTimeout(function () {
          _this3.dialogMouseDown = false;
        }, 0);
      }
    },
    onMaskClick: function onMaskClick(e) {
      // android trigger click on open (fastclick??)
      if (Date.now() - this.openTime < 300) {
        return;
      }

      if (e.target === e.currentTarget && !this.dialogMouseDown) {
        this.close(e);
      }
    },
    onKeydown: function onKeydown(e) {
      var props = this.$props;

      if (props.keyboard && e.keyCode === KeyCode.ESC) {
        e.stopPropagation();
        this.close(e);
        return;
      } // keep focus inside dialog


      if (props.visible) {
        if (e.keyCode === KeyCode.TAB) {
          var activeElement = document.activeElement;
          var sentinelStart = this.$refs.sentinelStart;

          if (e.shiftKey) {
            if (activeElement === sentinelStart) {
              this.$refs.sentinelEnd.focus();
            }
          } else if (activeElement === this.$refs.sentinelEnd) {
            sentinelStart.focus();
          }
        }
      }
    },
    getDialogElement: function getDialogElement() {
      var _this4 = this;

      var closable = this.closable,
          prefixCls = this.prefixCls,
          width = this.width,
          height = this.height,
          title = this.title,
          tempFooter = this.footer,
          bodyStyle = this.bodyStyle,
          visible = this.visible,
          bodyProps = this.bodyProps,
          forceRender = this.forceRender,
          closeIcon = this.closeIcon,
          _this$dialogStyle = this.dialogStyle,
          dialogStyle = _this$dialogStyle === void 0 ? {} : _this$dialogStyle,
          _this$dialogClass = this.dialogClass,
          dialogClass = _this$dialogClass === void 0 ? '' : _this$dialogClass;

      var dest = _extends({}, dialogStyle);

      if (width !== undefined) {
        dest.width = typeof width === 'number' ? "".concat(width, "px") : width;
      }

      if (height !== undefined) {
        dest.height = typeof height === 'number' ? "".concat(height, "px") : height;
      }

      var footer;

      if (tempFooter) {
        footer = _createVNode("div", {
          "key": "footer",
          "class": "".concat(prefixCls, "-footer"),
          "ref": "footer"
        }, [tempFooter]);
      }

      var header;

      if (title) {
        header = _createVNode("div", {
          "key": "header",
          "class": "".concat(prefixCls, "-header"),
          "ref": "header"
        }, [_createVNode("div", {
          "class": "".concat(prefixCls, "-title"),
          "id": this.titleId
        }, [title])]);
      }

      var closer;

      if (closable) {
        closer = _createVNode("button", {
          "type": "button",
          "key": "close",
          "onClick": this.close || noop,
          "aria-label": "Close",
          "class": "".concat(prefixCls, "-close")
        }, [closeIcon || _createVNode("span", {
          "class": "".concat(prefixCls, "-close-x")
        }, null)]);
      }

      var _this$$attrs = this.$attrs,
          stl = _this$$attrs.style,
          className = _this$$attrs.class;

      var style = _extends(_extends({}, stl), dest);

      var sentinelStyle = {
        width: 0,
        height: 0,
        overflow: 'hidden'
      };
      var cls = [prefixCls, className, dialogClass];
      var transitionName = this.getTransitionName();

      var dialogElement = _withDirectives(_createVNode(LazyRenderBox, {
        "key": "dialog-element",
        "role": "document",
        "ref": "dialog",
        "style": style,
        "class": cls,
        "forceRender": forceRender,
        "onMousedown": this.onDialogMouseDown
      }, {
        default: function _default() {
          return [_createVNode("div", {
            "tabindex": 0,
            "ref": "sentinelStart",
            "style": sentinelStyle,
            "aria-hidden": "true"
          }, null), _createVNode("div", {
            "class": "".concat(prefixCls, "-content")
          }, [closer, header, _createVNode("div", _objectSpread({
            "key": "body",
            "class": "".concat(prefixCls, "-body"),
            "style": bodyStyle,
            "ref": "body"
          }, bodyProps), [getSlot(_this4)]), footer]), _createVNode("div", {
            "tabindex": 0,
            "ref": "sentinelEnd",
            "style": sentinelStyle,
            "aria-hidden": "true"
          }, null)];
        }
      }), [[_vShow, visible]]);

      var dialogTransitionProps = getTransitionProps(transitionName, {
        onAfterLeave: this.onAnimateLeave
      });
      return _createVNode(Transition, _objectSpread({
        "key": "dialog"
      }, dialogTransitionProps), {
        default: function _default() {
          return [visible || !_this4.destroyOnClose ? dialogElement : null];
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
    getWrapStyle: function getWrapStyle() {
      return _extends(_extends({}, this.getZIndexStyle()), this.wrapStyle);
    },
    getMaskStyle: function getMaskStyle() {
      return _extends(_extends({}, this.getZIndexStyle()), this.maskStyle);
    },
    getMaskElement: function getMaskElement() {
      var props = this.$props;
      var maskElement;

      if (props.mask) {
        var maskTransition = this.getMaskTransitionName();

        var tempMaskElement = _withDirectives(_createVNode(LazyRenderBox, _objectSpread({
          "style": this.getMaskStyle(),
          "key": "mask",
          "class": "".concat(props.prefixCls, "-mask")
        }, props.maskProps || {}), null), [[_vShow, props.visible]]);

        if (maskTransition) {
          var maskTransitionProps = getTransitionProps(maskTransition);
          maskElement = _createVNode(Transition, _objectSpread({
            "key": "mask"
          }, maskTransitionProps), {
            default: function _default() {
              return [tempMaskElement];
            }
          });
        } else {
          maskElement = tempMaskElement;
        }
      }

      return maskElement;
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

      if (!transitionName && animation) {
        transitionName = "".concat(props.prefixCls, "-").concat(animation);
      }

      return transitionName;
    },
    // setScrollbar() {
    //   if (this.bodyIsOverflowing && this.scrollbarWidth !== undefined) {
    //     document.body.style.paddingRight = `${this.scrollbarWidth}px`;
    //   }
    // },
    switchScrollingEffect: function switchScrollingEffect() {
      var getOpenCount = this.getOpenCount;
      var openCount = getOpenCount();

      if (openCount === 1) {
        if (cacheOverflow.hasOwnProperty('overflowX')) {
          return;
        }

        cacheOverflow = {
          overflowX: document.body.style.overflowX,
          overflowY: document.body.style.overflowY,
          overflow: document.body.style.overflow
        };

        _switchScrollingEffect(); // Must be set after switchScrollingEffect


        document.body.style.overflow = 'hidden';
      } else if (!openCount) {
        // IE browser doesn't merge overflow style, need to set it separately
        // https://github.com/ant-design/ant-design/issues/19393
        if (cacheOverflow.overflow !== undefined) {
          document.body.style.overflow = cacheOverflow.overflow;
        }

        if (cacheOverflow.overflowX !== undefined) {
          document.body.style.overflowX = cacheOverflow.overflowX;
        }

        if (cacheOverflow.overflowY !== undefined) {
          document.body.style.overflowY = cacheOverflow.overflowY;
        }

        cacheOverflow = {};

        _switchScrollingEffect(true);
      }
    },
    // removeScrollingEffect() {
    //   const { getOpenCount } = this;
    //   const openCount = getOpenCount();
    //   if (openCount !== 0) {
    //     return;
    //   }
    //   document.body.style.overflow = '';
    //   switchScrollingEffect(true);
    //   // this.resetAdjustments();
    // },
    close: function close(e) {
      this.__emit('close', e);
    }
  },
  render: function render() {
    var prefixCls = this.prefixCls,
        maskClosable = this.maskClosable,
        visible = this.visible,
        wrapClassName = this.wrapClassName,
        title = this.title,
        wrapProps = this.wrapProps;
    var style = this.getWrapStyle(); // clear hide display
    // and only set display after async anim, not here for hide

    if (visible) {
      style.display = null;
    }

    return _createVNode("div", {
      "class": "".concat(prefixCls, "-root")
    }, [this.getMaskElement(), _createVNode("div", _objectSpread({
      "tabindex": -1,
      "onKeydown": this.onKeydown,
      "class": "".concat(prefixCls, "-wrap ").concat(wrapClassName || ''),
      "ref": "wrap",
      "onClick": maskClosable ? this.onMaskClick : noop,
      "onMouseup": maskClosable ? this.onMaskMouseUp : noop,
      "role": "dialog",
      "aria-labelledby": title ? this.titleId : null,
      "style": style
    }, wrapProps), [this.getDialogElement()])]);
  }
});