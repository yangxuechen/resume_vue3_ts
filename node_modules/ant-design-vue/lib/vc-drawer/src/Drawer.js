"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classNames = _interopRequireDefault(require("../../_util/classNames"));

var _BaseMixin = _interopRequireDefault(require("../../_util/BaseMixin"));

var _propsUtil = require("../../_util/props-util");

var _getScrollBarSize = _interopRequireDefault(require("../../_util/getScrollBarSize"));

var _IDrawerPropTypes = require("./IDrawerPropTypes");

var _KeyCode = _interopRequireDefault(require("../../_util/KeyCode"));

var _utils = require("./utils");

var _supportsPassive = _interopRequireDefault(require("../../_util/supportsPassive"));

var _vnode = require("../../_util/vnode");

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

function noop() {}

var currentDrawer = {};
var windowIsUndefined = !(typeof window !== 'undefined' && window.document && window.document.createElement);
var Drawer = (0, _vue.defineComponent)({
  name: 'Drawer',
  mixins: [_BaseMixin.default],
  inheritAttrs: false,
  props: (0, _propsUtil.initDefaultProps)(_IDrawerPropTypes.IDrawerProps, {
    prefixCls: 'drawer',
    placement: 'left',
    getContainer: 'body',
    level: 'all',
    duration: '.3s',
    ease: 'cubic-bezier(0.78, 0.14, 0.15, 0.86)',
    firstEnter: false,
    showMask: true,
    handler: true,
    maskStyle: {},
    wrapperClassName: ''
  }),
  data: function data() {
    this.levelDom = [];
    this.contentDom = null;
    this.maskDom = null;
    this.handlerdom = null;
    this.mousePos = null;
    this.sFirstEnter = this.firstEnter;
    this.timeout = null;
    this.children = null;
    this.dom = null;
    this.drawerId = Number((Date.now() + Math.random()).toString().replace('.', Math.round(Math.random() * 9))).toString(16);
    var open = this.open !== undefined ? this.open : !!this.defaultOpen;
    currentDrawer[this.drawerId] = open;
    this.orignalOpen = this.open;
    this.preProps = (0, _extends2.default)({}, this.$props);
    return {
      sOpen: open,
      isOpenChange: undefined,
      passive: undefined,
      container: undefined
    };
  },
  watch: {
    open: function (_open) {
      function open(_x) {
        return _open.apply(this, arguments);
      }

      open.toString = function () {
        return _open.toString();
      };

      return open;
    }(function (val) {
      var _this = this;

      if (val !== undefined && val !== this.preProps.open) {
        this.isOpenChange = true; // 没渲染 dom 时，获取默认数据;

        if (!this.container) {
          this.getDefault(this.$props);
        }

        this.setState({
          sOpen: open
        });
      }

      this.preProps.open = val;

      if (val) {
        setTimeout(function () {
          _this.domFocus();
        });
      }
    }),
    placement: function placement(val) {
      if (val !== this.preProps.placement) {
        // test 的 bug, 有动画过场，删除 dom
        this.contentDom = null;
      }

      this.preProps.placement = val;
    },
    level: function level(val) {
      if (this.preProps.level !== val) {
        this.getParentAndLevelDom(this.$props);
      }

      this.preProps.level = val;
    }
  },
  mounted: function mounted() {
    var _this2 = this;

    (0, _vue.nextTick)(function () {
      if (!windowIsUndefined) {
        _this2.passive = _supportsPassive.default ? {
          passive: false
        } : false;
      }

      var open = _this2.getOpen();

      if (_this2.handler || open || _this2.sFirstEnter) {
        _this2.getDefault(_this2.$props);

        if (open) {
          _this2.isOpenChange = true;
          (0, _vue.nextTick)(function () {
            _this2.domFocus();
          });
        }

        _this2.$forceUpdate();
      }
    });
  },
  updated: function updated() {
    var _this3 = this;

    (0, _vue.nextTick)(function () {
      // dom 没渲染时，重走一遍。
      if (!_this3.sFirstEnter && _this3.container) {
        _this3.$forceUpdate();

        _this3.sFirstEnter = true;
      }
    });
  },
  beforeUnmount: function beforeUnmount() {
    delete currentDrawer[this.drawerId];
    delete this.isOpenChange;

    if (this.container) {
      if (this.sOpen) {
        this.setLevelDomTransform(false, true);
      }

      document.body.style.overflow = '';
    }

    this.sFirstEnter = false;
    clearTimeout(this.timeout);
  },
  methods: {
    domFocus: function domFocus() {
      if (this.dom) {
        this.dom.focus();
      }
    },
    onKeyDown: function onKeyDown(e) {
      if (e.keyCode === _KeyCode.default.ESC) {
        e.stopPropagation();

        this.__emit('close', e);
      }
    },
    onMaskTouchEnd: function onMaskTouchEnd(e) {
      this.__emit('close', e);

      this.onTouchEnd(e, true);
    },
    onIconTouchEnd: function onIconTouchEnd(e) {
      this.__emit('handleClick', e);

      this.onTouchEnd(e);
    },
    onTouchEnd: function onTouchEnd(e, close) {
      if (this.open !== undefined) {
        return;
      }

      var open = close || this.sOpen;
      this.isOpenChange = true;
      this.setState({
        sOpen: !open
      });
    },
    onWrapperTransitionEnd: function onWrapperTransitionEnd(e) {
      if (e.target === this.contentWrapper && e.propertyName.match(/transform$/)) {
        var _open2 = this.getOpen();

        this.dom.style.transition = '';

        if (!_open2 && this.getCurrentDrawerSome()) {
          document.body.style.overflowX = '';

          if (this.maskDom) {
            this.maskDom.style.left = '';
            this.maskDom.style.width = '';
          }
        }

        if (this.afterVisibleChange) {
          this.afterVisibleChange(!!_open2);
        }
      }
    },
    getDefault: function getDefault(props) {
      this.getParentAndLevelDom(props);

      if (props.getContainer || props.parent) {
        this.container = this.defaultGetContainer();
      }
    },
    getCurrentDrawerSome: function getCurrentDrawerSome() {
      return !Object.keys(currentDrawer).some(function (key) {
        return currentDrawer[key];
      });
    },
    getSelfContainer: function getSelfContainer() {
      return this.container;
    },
    getParentAndLevelDom: function getParentAndLevelDom(props) {
      var _this4 = this;

      if (windowIsUndefined) {
        return;
      }

      var level = props.level,
          getContainer = props.getContainer;
      this.levelDom = [];

      if (getContainer) {
        if (typeof getContainer === 'string') {
          var dom = document.querySelectorAll(getContainer)[0];
          this.parent = dom;
        }

        if (typeof getContainer === 'function') {
          this.parent = getContainer();
        }

        if ((0, _typeof2.default)(getContainer) === 'object' && getContainer instanceof window.HTMLElement) {
          this.parent = getContainer;
        }
      }

      if (!getContainer && this.container) {
        this.parent = this.container.parentNode;
      }

      if (level === 'all') {
        var children = Array.prototype.slice.call(this.parent.children);
        children.forEach(function (child) {
          if (child.nodeName !== 'SCRIPT' && child.nodeName !== 'STYLE' && child.nodeName !== 'LINK' && child !== _this4.container) {
            _this4.levelDom.push(child);
          }
        });
      } else if (level) {
        (0, _utils.dataToArray)(level).forEach(function (key) {
          document.querySelectorAll(key).forEach(function (item) {
            _this4.levelDom.push(item);
          });
        });
      }
    },
    setLevelDomTransform: function setLevelDomTransform(open, openTransition, placementName, value) {
      var _this5 = this;

      var _this$$props = this.$props,
          placement = _this$$props.placement,
          levelMove = _this$$props.levelMove,
          duration = _this$$props.duration,
          ease = _this$$props.ease,
          getContainer = _this$$props.getContainer;

      if (!windowIsUndefined) {
        this.levelDom.forEach(function (dom) {
          if (dom && (_this5.isOpenChange || openTransition)) {
            /* eslint no-param-reassign: "error" */
            dom.style.transition = "transform ".concat(duration, " ").concat(ease);
            (0, _utils.addEventListener)(dom, _utils.transitionEnd, _this5.trnasitionEnd);
            var levelValue = open ? value : 0;

            if (levelMove) {
              var $levelMove = (0, _utils.transformArguments)(levelMove, {
                target: dom,
                open: open
              });
              levelValue = open ? $levelMove[0] : $levelMove[1] || 0;
            }

            var $value = typeof levelValue === 'number' ? "".concat(levelValue, "px") : levelValue;
            var placementPos = placement === 'left' || placement === 'top' ? $value : "-".concat($value);
            dom.style.transform = levelValue ? "".concat(placementName, "(").concat(placementPos, ")") : '';
            dom.style.msTransform = levelValue ? "".concat(placementName, "(").concat(placementPos, ")") : '';
          }
        }); // 处理 body 滚动

        if (getContainer === 'body') {
          var eventArray = ['touchstart'];
          var domArray = [document.body, this.maskDom, this.handlerdom, this.contentDom];
          var right = document.body.scrollHeight > (window.innerHeight || document.documentElement.clientHeight) && window.innerWidth > document.body.offsetWidth ? (0, _getScrollBarSize.default)(1) : 0;
          var widthTransition = "width ".concat(duration, " ").concat(ease);
          var trannsformTransition = "transform ".concat(duration, " ").concat(ease);

          if (open && document.body.style.overflow !== 'hidden') {
            document.body.style.overflow = 'hidden';

            if (right) {
              document.body.style.position = 'relative';
              document.body.style.width = "calc(100% - ".concat(right, "px)");
              clearTimeout(this.timeout);

              if (this.dom) {
                this.dom.style.transition = 'none';

                switch (placement) {
                  case 'right':
                    this.dom.style.transform = "translateX(-".concat(right, "px)");
                    this.dom.style.msTransform = "translateX(-".concat(right, "px)");
                    break;

                  case 'top':
                  case 'bottom':
                    this.dom.style.width = "calc(100% - ".concat(right, "px)");
                    this.dom.style.transform = 'translateZ(0)';
                    break;

                  default:
                    break;
                }

                this.timeout = setTimeout(function () {
                  _this5.dom.style.transition = "".concat(trannsformTransition, ",").concat(widthTransition);
                  _this5.dom.style.width = '';
                  _this5.dom.style.transform = '';
                  _this5.dom.style.msTransform = '';
                });
              }
            } // 手机禁滚


            domArray.forEach(function (item, i) {
              if (!item) {
                return;
              }

              (0, _utils.addEventListener)(item, eventArray[i] || 'touchmove', i ? _this5.removeMoveHandler : _this5.removeStartHandler, _this5.passive);
            });
          } else if (this.getCurrentDrawerSome()) {
            document.body.style.overflow = '';

            if ((this.isOpenChange || openTransition) && right) {
              document.body.style.position = '';
              document.body.style.width = '';

              if (_utils.transitionStr) {
                document.body.style.overflowX = 'hidden';
              }

              if (placement === 'right' && this.maskDom) {
                this.maskDom.style.left = "-".concat(right, "px");
                this.maskDom.style.width = "calc(100% + ".concat(right, "px)");
              }

              clearTimeout(this.timeout);

              if (this.dom) {
                this.dom.style.transition = 'none';
                var heightTransition;

                switch (placement) {
                  case 'right':
                    {
                      this.dom.style.transform = "translateX(".concat(right, "px)");
                      this.dom.style.msTransform = "translateX(".concat(right, "px)");
                      this.dom.style.width = '100%';
                      widthTransition = "width 0s ".concat(ease, " ").concat(duration);
                      break;
                    }

                  case 'top':
                  case 'bottom':
                    {
                      this.dom.style.width = "calc(100% + ".concat(right, "px)");
                      this.dom.style.height = '100%';
                      this.dom.style.transform = 'translateZ(0)';
                      heightTransition = "height 0s ".concat(ease, " ").concat(duration);
                      break;
                    }

                  default:
                    break;
                }

                this.timeout = setTimeout(function () {
                  _this5.dom.style.transition = "".concat(trannsformTransition, ",").concat(heightTransition ? "".concat(heightTransition, ",") : '').concat(widthTransition);
                  _this5.dom.style.transform = '';
                  _this5.dom.style.msTransform = '';
                  _this5.dom.style.width = '';
                  _this5.dom.style.height = '';
                });
              }
            }

            domArray.forEach(function (item, i) {
              if (!item) {
                return;
              }

              (0, _utils.removeEventListener)(item, eventArray[i] || 'touchmove', i ? _this5.removeMoveHandler : _this5.removeStartHandler, _this5.passive);
            });
          }
        }
      }

      var onChange = this.$attrs.onChange;

      if (onChange && this.isOpenChange && this.sFirstEnter) {
        onChange(open);
        this.isOpenChange = false;
      }
    },
    getChildToRender: function getChildToRender(open) {
      var _classnames,
          _this6 = this,
          _touchEvents;

      var _this$$props2 = this.$props,
          prefixCls = _this$$props2.prefixCls,
          placement = _this$$props2.placement,
          handler = _this$$props2.handler,
          showMask = _this$$props2.showMask,
          maskStyle = _this$$props2.maskStyle,
          width = _this$$props2.width,
          height = _this$$props2.height,
          wrapStyle = _this$$props2.wrapStyle,
          keyboard = _this$$props2.keyboard,
          maskClosable = _this$$props2.maskClosable;

      var _a = this.$attrs,
          cls = _a.class,
          style = _a.style,
          restAttrs = __rest(_a, ["class", "style"]);

      var children = (0, _propsUtil.getSlot)(this);
      var wrapperClassname = (0, _classNames.default)(prefixCls, (_classnames = {}, (0, _defineProperty2.default)(_classnames, "".concat(prefixCls, "-").concat(placement), true), (0, _defineProperty2.default)(_classnames, "".concat(prefixCls, "-open"), open), (0, _defineProperty2.default)(_classnames, 'no-mask', !showMask), (0, _defineProperty2.default)(_classnames, cls, cls), _classnames));
      var isOpenChange = this.isOpenChange;
      var isHorizontal = placement === 'left' || placement === 'right';
      var placementName = "translate".concat(isHorizontal ? 'X' : 'Y'); // 百分比与像素动画不同步，第一次打用后全用像素动画。
      // const defaultValue = !this.contentDom || !level ? '100%' : `${value}px`;

      var placementPos = placement === 'left' || placement === 'top' ? '-100%' : '100%';
      var transform = open ? '' : "".concat(placementName, "(").concat(placementPos, ")");

      if (isOpenChange === undefined || isOpenChange) {
        var contentValue = this.contentDom ? this.contentDom.getBoundingClientRect()[isHorizontal ? 'width' : 'height'] : 0;
        var value = (isHorizontal ? width : height) || contentValue;
        this.setLevelDomTransform(open, false, placementName, value);
      }

      var handlerChildren;

      if (handler !== false) {
        var handlerDefalut = (0, _vue.createVNode)("div", {
          "class": "drawer-handle",
          "onClick": function onClick() {}
        }, [(0, _vue.createVNode)("i", {
          "class": "drawer-handle-icon"
        }, null)]);
        var handlerSlot = this.handler;
        var handlerSlotVnode = handlerSlot || handlerDefalut;
        var handleIconClick = handlerSlotVnode.props && handlerSlotVnode.props.onClick;
        handlerChildren = (0, _vnode.cloneElement)(handlerSlotVnode, {
          onClick: function onClick(e) {
            handleIconClick && handleIconClick(e);

            _this6.onIconTouchEnd(e);
          },
          ref: function ref(c) {
            _this6.handlerdom = c;
          }
        });
      }

      var domContProps = (0, _extends2.default)((0, _extends2.default)({}, restAttrs), {
        class: wrapperClassname,
        onTransitionend: this.onWrapperTransitionEnd,
        onKeydown: open && keyboard ? this.onKeyDown : noop,
        style: (0, _extends2.default)((0, _extends2.default)({}, wrapStyle), style)
      }); // 跑用例用

      var touchEvents = (_touchEvents = {}, (0, _defineProperty2.default)(_touchEvents, _supportsPassive.default ? 'onTouchstartPassive' : 'onTouchstart', open ? this.removeStartHandler : noop), (0, _defineProperty2.default)(_touchEvents, _supportsPassive.default ? 'onTouchmovePassive' : 'onTouchmove', open ? this.removeMoveHandler : noop), _touchEvents);
      return (0, _vue.createVNode)("div", (0, _objectSpread2.default)((0, _objectSpread2.default)({
        "ref": function ref(c) {
          _this6.dom = c;
        }
      }, domContProps), {}, {
        "tabindex": -1
      }), [showMask && (0, _vue.createVNode)("div", {
        "key": open,
        "class": "".concat(prefixCls, "-mask"),
        "onClick": maskClosable ? this.onMaskTouchEnd : noop,
        "style": maskStyle,
        "ref": function ref(c) {
          _this6.maskDom = c;
        }
      }, null), (0, _vue.createVNode)("div", {
        "class": "".concat(prefixCls, "-content-wrapper"),
        "style": {
          transform: transform,
          msTransform: transform,
          width: (0, _utils.isNumeric)(width) ? "".concat(width, "px") : width,
          height: (0, _utils.isNumeric)(height) ? "".concat(height, "px") : height
        },
        "ref": function ref(c) {
          _this6.contentWrapper = c;
        }
      }, [(0, _vue.createVNode)("div", (0, _objectSpread2.default)({
        "class": "".concat(prefixCls, "-content"),
        "ref": function ref(c) {
          _this6.contentDom = c;
        }
      }, touchEvents), [children]), handlerChildren])]);
    },
    getOpen: function getOpen() {
      return this.open !== undefined ? this.open : this.sOpen;
    },
    getTouchParentScroll: function getTouchParentScroll(root, currentTarget, differX, differY) {
      if (!currentTarget || currentTarget === document) {
        return false;
      } // root 为 drawer-content 设定了 overflow, 判断为 root 的 parent 时结束滚动；


      if (currentTarget === root.parentNode) {
        return true;
      }

      var isY = Math.max(Math.abs(differX), Math.abs(differY)) === Math.abs(differY);
      var isX = Math.max(Math.abs(differX), Math.abs(differY)) === Math.abs(differX);
      var scrollY = currentTarget.scrollHeight - currentTarget.clientHeight;
      var scrollX = currentTarget.scrollWidth - currentTarget.clientWidth;
      /**
       * <div style="height: 300px">
       *   <div style="height: 900px"></div>
       * </div>
       * 在没设定 overflow: auto 或 scroll 时，currentTarget 里获取不到 scrollTop 或 scrollLeft,
       * 预先用 scrollTo 来滚动，如果取出的值跟滚动前取出不同，则 currnetTarget 被设定了 overflow; 否则就是上面这种。
       */

      var t = currentTarget.scrollTop;
      var l = currentTarget.scrollLeft;

      if (currentTarget.scrollTo) {
        currentTarget.scrollTo(currentTarget.scrollLeft + 1, currentTarget.scrollTop + 1);
      }

      var currentT = currentTarget.scrollTop;
      var currentL = currentTarget.scrollLeft;

      if (currentTarget.scrollTo) {
        currentTarget.scrollTo(currentTarget.scrollLeft - 1, currentTarget.scrollTop - 1);
      }

      if (isY && (!scrollY || !(currentT - t) || scrollY && (currentTarget.scrollTop >= scrollY && differY < 0 || currentTarget.scrollTop <= 0 && differY > 0)) || isX && (!scrollX || !(currentL - l) || scrollX && (currentTarget.scrollLeft >= scrollX && differX < 0 || currentTarget.scrollLeft <= 0 && differX > 0))) {
        return this.getTouchParentScroll(root, currentTarget.parentNode, differX, differY);
      }

      return false;
    },
    removeStartHandler: function removeStartHandler(e) {
      if (e.touches.length > 1) {
        return;
      }

      this.startPos = {
        x: e.touches[0].clientX,
        y: e.touches[0].clientY
      };
    },
    removeMoveHandler: function removeMoveHandler(e) {
      if (e.changedTouches.length > 1) {
        return;
      }

      var currentTarget = e.currentTarget;
      var differX = e.changedTouches[0].clientX - this.startPos.x;
      var differY = e.changedTouches[0].clientY - this.startPos.y;

      if (currentTarget === this.maskDom || currentTarget === this.handlerdom || currentTarget === this.contentDom && this.getTouchParentScroll(currentTarget, e.target, differX, differY)) {
        e.preventDefault();
      }
    },
    trnasitionEnd: function trnasitionEnd(e) {
      (0, _utils.removeEventListener)(e.target, _utils.transitionEnd, this.trnasitionEnd);
      e.target.style.transition = '';
    },
    defaultGetContainer: function defaultGetContainer() {
      if (windowIsUndefined) {
        return null;
      }

      var container = document.createElement('div');
      this.parent.appendChild(container);

      if (this.wrapperClassName) {
        container.className = this.wrapperClassName;
      }

      return container;
    }
  },
  render: function render() {
    var _this7 = this;

    var _this$$props3 = this.$props,
        getContainer = _this$$props3.getContainer,
        wrapperClassName = _this$$props3.wrapperClassName,
        handler = _this$$props3.handler,
        forceRender = _this$$props3.forceRender;
    var open = this.getOpen();
    var portal = null;
    currentDrawer[this.drawerId] = open ? this.container : open;
    var children = this.getChildToRender(this.sFirstEnter ? open : false);

    if (!getContainer) {
      return (0, _vue.createVNode)("div", {
        "class": wrapperClassName,
        "ref": function ref(c) {
          _this7.container = c;
        }
      }, [children]);
    }

    if (!this.container || !open && !this.sFirstEnter) {
      return null;
    } // 如果有 handler 为内置强制渲染；


    var $forceRender = !!handler || forceRender;

    if ($forceRender || open || this.dom) {
      portal = (0, _vue.createVNode)(_vue.Teleport, {
        "to": this.getSelfContainer()
      }, {
        default: function _default() {
          return [children];
        }
      });
    }

    return portal;
  }
});
var _default2 = Drawer;
exports.default = _default2;