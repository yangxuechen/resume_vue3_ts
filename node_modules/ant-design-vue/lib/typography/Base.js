"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.baseProps = void 0;

var _vue = require("vue");

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _omit = _interopRequireDefault(require("omit.js"));

var _LocaleReceiver = _interopRequireDefault(require("../locale-provider/LocaleReceiver"));

var _warning = _interopRequireDefault(require("../_util/warning"));

var _transButton = _interopRequireDefault(require("../_util/transButton"));

var _raf = _interopRequireDefault(require("../_util/raf"));

var _styleChecker = _interopRequireDefault(require("../_util/styleChecker"));

var _Editable = _interopRequireDefault(require("./Editable"));

var _util = _interopRequireDefault(require("./util"));

var _vueTypes = _interopRequireDefault(require("../_util/vue-types"));

var _Typography = _interopRequireDefault(require("./Typography"));

var _vcResizeObserver = _interopRequireDefault(require("../vc-resize-observer"));

var _tooltip = _interopRequireDefault(require("../tooltip"));

var _copyToClipboard = _interopRequireDefault(require("../_util/copy-to-clipboard"));

var _CheckOutlined = _interopRequireDefault(require("@ant-design/icons-vue/lib/icons/CheckOutlined"));

var _CopyOutlined = _interopRequireDefault(require("@ant-design/icons-vue/lib/icons/CopyOutlined"));

var _EditOutlined = _interopRequireDefault(require("@ant-design/icons-vue/lib/icons/EditOutlined"));

var _useConfigInject2 = _interopRequireDefault(require("../_util/hooks/useConfigInject"));

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

var isLineClampSupport = (0, _styleChecker.default)('webkitLineClamp');
var isTextOverflowSupport = (0, _styleChecker.default)('textOverflow');
var ELLIPSIS_STR = '...';
var Base = (0, _vue.defineComponent)({
  name: 'Base',
  inheritAttrs: false,
  emits: ['update:content'],
  setup: function setup(props, _ref) {
    var slots = _ref.slots,
        attrs = _ref.attrs,
        emit = _ref.emit;

    var _useConfigInject = (0, _useConfigInject2.default)('typography', props),
        prefixCls = _useConfigInject.prefixCls;

    var state = (0, _vue.reactive)({
      edit: false,
      copied: false,
      ellipsisText: '',
      ellipsisContent: null,
      isEllipsis: false,
      expanded: false,
      clientRendered: false,
      //locale
      expandStr: '',
      copyStr: '',
      copiedStr: '',
      editStr: '',
      copyId: undefined,
      rafId: undefined,
      prevProps: undefined,
      originContent: ''
    });
    var contentRef = (0, _vue.ref)();
    var editIcon = (0, _vue.ref)();
    var ellipsis = (0, _vue.computed)(function () {
      var ellipsis = props.ellipsis;
      if (!ellipsis) return {};
      return (0, _extends2.default)({
        rows: 1,
        expandable: false
      }, (0, _typeof2.default)(ellipsis) === 'object' ? ellipsis : null);
    });
    (0, _vue.onMounted)(function () {
      state.clientRendered = true;
    });
    (0, _vue.onBeforeUnmount)(function () {
      window.clearTimeout(state.copyId);

      _raf.default.cancel(state.rafId);
    });
    (0, _vue.watch)([function () {
      return ellipsis.value.rows;
    }, function () {
      return props.content;
    }], function () {
      (0, _vue.nextTick)(function () {
        resizeOnNextFrame();
      });
    }, {
      flush: 'post',
      deep: true,
      immediate: true
    });
    (0, _vue.watchEffect)(function () {
      if (props.content === undefined) {
        (0, _warning.default)(!props.editable, 'Typography', 'When `editable` is enabled, please use `content` instead of children');
        (0, _warning.default)(!props.ellipsis, 'Typography', 'When `ellipsis` is enabled, please use `content` instead of children');
      }
    });

    function getChildrenText() {
      var _a, _b;

      return props.ellipsis || props.editable ? props.content : (_b = (_a = contentRef.value) === null || _a === void 0 ? void 0 : _a.$el) === null || _b === void 0 ? void 0 : _b.innerText;
    } // =============== Expand ===============


    function onExpandClick(e) {
      var onExpand = ellipsis.value.onExpand;
      state.expanded = true;
      onExpand === null || onExpand === void 0 ? void 0 : onExpand(e);
    } // ================ Edit ================


    function onEditClick(e) {
      e.preventDefault();
      state.originContent = props.content;
      triggerEdit(true);
    }

    function onEditChange(value) {
      onContentChange(value);
      triggerEdit(false);
    }

    function onContentChange(value) {
      var onChange = editable.value.onChange;

      if (value !== props.content) {
        emit('update:content', value);
        onChange === null || onChange === void 0 ? void 0 : onChange(value);
      }
    }

    function onEditCancel() {
      var _a, _b;

      (_b = (_a = editable.value).onCancel) === null || _b === void 0 ? void 0 : _b.call(_a);
      triggerEdit(false);
    } // ================ Copy ================


    function onCopyClick(e) {
      e.preventDefault();
      var copyable = props.copyable;
      var copyConfig = (0, _extends2.default)({}, (0, _typeof2.default)(copyable) === 'object' ? copyable : null);

      if (copyConfig.text === undefined) {
        copyConfig.text = getChildrenText();
      }

      (0, _copyToClipboard.default)(copyConfig.text || '');
      state.copied = true;
      (0, _vue.nextTick)(function () {
        if (copyConfig.onCopy) {
          copyConfig.onCopy();
        }

        state.copyId = window.setTimeout(function () {
          state.copied = false;
        }, 3000);
      });
    }

    var editable = (0, _vue.computed)(function () {
      var editable = props.editable;
      if (!editable) return {
        editing: state.edit
      };
      return (0, _extends2.default)({
        editing: state.edit
      }, (0, _typeof2.default)(editable) === 'object' ? editable : null);
    });

    function triggerEdit(edit) {
      var onStart = editable.value.onStart;

      if (edit && onStart) {
        onStart();
      }

      state.edit = edit;
      (0, _vue.nextTick)(function () {
        var _a;

        if (!edit) {
          (_a = editIcon.value) === null || _a === void 0 ? void 0 : _a.focus();
        }
      });
    } // ============== Ellipsis ==============


    function resizeOnNextFrame() {
      _raf.default.cancel(state.rafId);

      state.rafId = (0, _raf.default)(function () {
        // Do not bind `syncEllipsis`. It need for test usage on prototype
        syncEllipsis();
      });
    }

    var canUseCSSEllipsis = (0, _vue.computed)(function () {
      var _ellipsis$value = ellipsis.value,
          rows = _ellipsis$value.rows,
          expandable = _ellipsis$value.expandable,
          suffix = _ellipsis$value.suffix,
          onEllipsis = _ellipsis$value.onEllipsis,
          tooltip = _ellipsis$value.tooltip;
      if (suffix || tooltip) return false; // Can't use css ellipsis since we need to provide the place for button

      if (props.editable || props.copyable || expandable || onEllipsis) {
        return false;
      }

      if (rows === 1) {
        return isTextOverflowSupport;
      }

      return isLineClampSupport;
    });

    var syncEllipsis = function syncEllipsis() {
      var _a, _b;

      var ellipsisText = state.ellipsisText,
          isEllipsis = state.isEllipsis;
      var _ellipsis$value2 = ellipsis.value,
          rows = _ellipsis$value2.rows,
          suffix = _ellipsis$value2.suffix,
          onEllipsis = _ellipsis$value2.onEllipsis;
      if (!rows || rows < 0 || !((_a = contentRef.value) === null || _a === void 0 ? void 0 : _a.$el) || state.expanded || props.content === undefined) return; // Do not measure if css already support ellipsis

      if (canUseCSSEllipsis.value) return;

      var _measure = (0, _util.default)((_b = contentRef.value) === null || _b === void 0 ? void 0 : _b.$el, {
        rows: rows,
        suffix: suffix
      }, props.content, renderOperations(true), ELLIPSIS_STR),
          content = _measure.content,
          text = _measure.text,
          ell = _measure.ellipsis;

      if (ellipsisText !== text || state.isEllipsis !== ell) {
        state.ellipsisText = text;
        state.ellipsisContent = content;
        state.isEllipsis = ell;

        if (isEllipsis !== ell && onEllipsis) {
          onEllipsis(ell);
        }
      }
    };

    function wrapperDecorations(_ref2, content) {
      var mark = _ref2.mark,
          code = _ref2.code,
          underline = _ref2.underline,
          del = _ref2.delete,
          strong = _ref2.strong,
          keyboard = _ref2.keyboard;
      var currentContent = content;

      function wrap(needed, Tag) {
        if (!needed) return;

        var _currentContent = function () {
          return currentContent;
        }();

        currentContent = (0, _vue.createVNode)(Tag, null, {
          default: function _default() {
            return [_currentContent];
          }
        });
      }

      wrap(strong, 'strong');
      wrap(underline, 'u');
      wrap(del, 'del');
      wrap(code, 'code');
      wrap(mark, 'mark');
      wrap(keyboard, 'kbd');
      return currentContent;
    }

    function renderExpand(forceRender) {
      var _ellipsis$value3 = ellipsis.value,
          expandable = _ellipsis$value3.expandable,
          symbol = _ellipsis$value3.symbol;
      if (!expandable) return null; // force render expand icon for measure usage or it will cause dead loop

      if (!forceRender && (state.expanded || !state.isEllipsis)) return null;
      var expandContent = (slots.ellipsisSymbol ? slots.ellipsisSymbol() : symbol) || state.expandStr;
      return (0, _vue.createVNode)("a", {
        "key": "expand",
        "class": "".concat(prefixCls.value, "-expand"),
        "onClick": onExpandClick,
        "aria-label": state.expandStr
      }, [expandContent]);
    }

    function renderEdit() {
      if (!props.editable) return;
      var tooltip = props.editable.tooltip;
      var icon = slots.editableIcon ? slots.editableIcon() : (0, _vue.createVNode)(_EditOutlined.default, {
        "role": "button"
      }, null);
      var title = slots.editableTooltip ? slots.editableTooltip() : state.editStr;
      var ariaLabel = typeof title === 'string' ? title : '';
      return (0, _vue.createVNode)(_tooltip.default, {
        "key": "edit",
        "title": tooltip === false ? '' : title
      }, {
        default: function _default() {
          return [(0, _vue.createVNode)(_transButton.default, {
            "ref": editIcon,
            "class": "".concat(prefixCls.value, "-edit"),
            "onClick": onEditClick,
            "aria-label": ariaLabel
          }, {
            default: function _default() {
              return [icon];
            }
          })];
        }
      });
    }

    function renderCopy() {
      if (!props.copyable) return;
      var tooltip = props.copyable.tooltip;
      var defaultTitle = state.copied ? state.copiedStr : state.copyStr;
      var title = slots.copyableTooltip ? slots.copyableTooltip({
        copied: state.copied
      }) : defaultTitle;
      var ariaLabel = typeof title === 'string' ? title : '';
      var defaultIcon = state.copied ? (0, _vue.createVNode)(_CheckOutlined.default, null, null) : (0, _vue.createVNode)(_CopyOutlined.default, null, null);
      var icon = slots.copyableIcon ? slots.copyableIcon({
        copied: !!state.copied
      }) : defaultIcon;
      return (0, _vue.createVNode)(_tooltip.default, {
        "key": "copy",
        "title": tooltip === false ? '' : title
      }, {
        default: function _default() {
          return [(0, _vue.createVNode)(_transButton.default, {
            "class": ["".concat(prefixCls.value, "-copy"), (0, _defineProperty2.default)({}, "".concat(prefixCls.value, "-copy-success"), state.copied)],
            "onClick": onCopyClick,
            "aria-label": ariaLabel
          }, {
            default: function _default() {
              return [icon];
            }
          })];
        }
      });
    }

    function renderEditInput() {
      var className = attrs.class,
          style = attrs.style;
      var _editable$value = editable.value,
          maxlength = _editable$value.maxlength,
          autoSize = _editable$value.autoSize,
          onEnd = _editable$value.onEnd;
      return (0, _vue.createVNode)(_Editable.default, {
        "class": className,
        "style": style,
        "prefixCls": prefixCls.value,
        "value": props.content,
        "originContent": state.originContent,
        "maxlength": maxlength,
        "autoSize": autoSize,
        "onSave": onEditChange,
        "onChange": onContentChange,
        "onCancel": onEditCancel,
        "onEnd": onEnd
      }, null);
    }

    function renderOperations(forceRenderExpanded) {
      return [renderExpand(forceRenderExpanded), renderEdit(), renderCopy()].filter(function (node) {
        return node;
      });
    }

    return function () {
      var _a;

      var editing = editable.value.editing;

      var _children = props.ellipsis || props.editable ? props.content !== undefined ? props.content : (_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots) : slots.default ? slots.default() : props.content;

      if (editing) {
        return renderEditInput();
      }

      return (0, _vue.createVNode)(_LocaleReceiver.default, {
        "componentName": "Text",
        "children": function children(locale) {
          var _ref4;

          var _a = (0, _extends2.default)((0, _extends2.default)({}, props), attrs),
              type = _a.type,
              disabled = _a.disabled,
              content = _a.content,
              className = _a.class,
              style = _a.style,
              restProps = __rest(_a, ["type", "disabled", "content", "class", "style"]);

          var _ellipsis$value4 = ellipsis.value,
              rows = _ellipsis$value4.rows,
              suffix = _ellipsis$value4.suffix,
              tooltip = _ellipsis$value4.tooltip;
          var edit = locale.edit,
              copyStr = locale.copy,
              copied = locale.copied,
              expand = locale.expand;
          state.editStr = edit;
          state.copyStr = copyStr;
          state.copiedStr = copied;
          state.expandStr = expand;
          var textProps = (0, _omit.default)(restProps, ['prefixCls', 'editable', 'copyable', 'ellipsis', 'mark', 'code', 'delete', 'underline', 'strong', 'keyboard']);
          var cssEllipsis = canUseCSSEllipsis.value;
          var cssTextOverflow = rows === 1 && cssEllipsis;
          var cssLineClamp = rows && rows > 1 && cssEllipsis;
          var textNode = _children;
          var ariaLabel; // Only use js ellipsis when css ellipsis not support

          if (rows && state.isEllipsis && !state.expanded && !cssEllipsis) {
            var _title = restProps.title;
            var restContent = _title || '';

            if (!_title && (typeof _children === 'string' || typeof _children === 'number')) {
              restContent = String(_children);
            } // show rest content as title on symbol


            restContent = restContent === null || restContent === void 0 ? void 0 : restContent.slice(String(state.ellipsisContent || '').length); // We move full content to outer element to avoid repeat read the content by accessibility

            textNode = (0, _vue.createVNode)(_vue.Fragment, null, [(0, _vue.toRaw)(state.ellipsisContent), (0, _vue.createVNode)("span", {
              "title": restContent,
              "aria-hidden": "true"
            }, [ELLIPSIS_STR]), suffix]);
          } else {
            textNode = (0, _vue.createVNode)(_vue.Fragment, null, [_children, suffix]);
          }

          textNode = wrapperDecorations(props, textNode);
          var showTooltip = tooltip && rows && state.isEllipsis && !state.expanded && !cssEllipsis;
          var title = slots.ellipsisTooltip ? slots.ellipsisTooltip() : tooltip;
          return (0, _vue.createVNode)(_vcResizeObserver.default, {
            "onResize": resizeOnNextFrame,
            "disabled": !rows
          }, {
            default: function _default() {
              return [(0, _vue.createVNode)(_Typography.default, (0, _objectSpread2.default)({
                "ref": contentRef,
                "class": [(_ref4 = {}, (0, _defineProperty2.default)(_ref4, "".concat(prefixCls.value, "-").concat(type), type), (0, _defineProperty2.default)(_ref4, "".concat(prefixCls.value, "-disabled"), disabled), (0, _defineProperty2.default)(_ref4, "".concat(prefixCls.value, "-ellipsis"), rows), (0, _defineProperty2.default)(_ref4, "".concat(prefixCls.value, "-single-line"), rows === 1), (0, _defineProperty2.default)(_ref4, "".concat(prefixCls.value, "-ellipsis-single-line"), cssTextOverflow), (0, _defineProperty2.default)(_ref4, "".concat(prefixCls.value, "-ellipsis-multiple-line"), cssLineClamp), _ref4), className],
                "style": (0, _extends2.default)((0, _extends2.default)({}, style), {
                  WebkitLineClamp: cssLineClamp ? rows : undefined
                }),
                "aria-label": ariaLabel
              }, textProps), {
                default: function _default() {
                  return [showTooltip ? (0, _vue.createVNode)(_tooltip.default, {
                    "title": tooltip === true ? _children : title
                  }, {
                    default: function _default() {
                      return [(0, _vue.createVNode)("span", null, [textNode])];
                    }
                  }) : textNode, renderOperations()];
                }
              })];
            }
          });
        }
      }, null);
    };
  }
});

var baseProps = function baseProps() {
  return {
    editable: _vueTypes.default.oneOfType([_vueTypes.default.looseBool, _vueTypes.default.object]),
    copyable: _vueTypes.default.oneOfType([_vueTypes.default.looseBool, _vueTypes.default.object]),
    prefixCls: _vueTypes.default.string,
    component: _vueTypes.default.string,
    type: _vueTypes.default.oneOf(['secondary', 'success', 'danger', 'warning']),
    disabled: _vueTypes.default.looseBool,
    ellipsis: _vueTypes.default.oneOfType([_vueTypes.default.looseBool, _vueTypes.default.object]),
    code: _vueTypes.default.looseBool,
    mark: _vueTypes.default.looseBool,
    underline: _vueTypes.default.looseBool,
    delete: _vueTypes.default.looseBool,
    strong: _vueTypes.default.looseBool,
    keyboard: _vueTypes.default.looseBool,
    content: _vueTypes.default.string
  };
};

exports.baseProps = baseProps;
Base.props = baseProps();
var _default2 = Base;
exports.default = _default2;