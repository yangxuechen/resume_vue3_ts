"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "CheckableTag", {
  enumerable: true,
  get: function get() {
    return _CheckableTag.default;
  }
});
exports.default = void 0;

var _vue = require("vue");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classNames2 = _interopRequireDefault(require("../_util/classNames"));

var _vueTypes = _interopRequireDefault(require("../_util/vue-types"));

var _CloseOutlined = _interopRequireDefault(require("@ant-design/icons-vue/lib/icons/CloseOutlined"));

var _wave = _interopRequireDefault(require("../_util/wave"));

var _colors = require("../_util/colors");

var _CheckableTag = _interopRequireDefault(require("./CheckableTag"));

var _useConfigInject2 = _interopRequireDefault(require("../_util/hooks/useConfigInject"));

var PresetColorRegex = new RegExp("^(".concat(_colors.PresetColorTypes.join('|'), ")(-inverse)?$"));
var PresetStatusColorRegex = new RegExp("^(".concat(_colors.PresetStatusColorTypes.join('|'), ")$"));
var tagProps = {
  prefixCls: _vueTypes.default.string,
  color: {
    type: String
  },
  closable: _vueTypes.default.looseBool.def(false),
  closeIcon: _vueTypes.default.VNodeChild,
  visible: _vueTypes.default.looseBool,
  onClose: {
    type: Function
  },
  icon: _vueTypes.default.VNodeChild
};
var Tag = (0, _vue.defineComponent)({
  name: 'ATag',
  props: tagProps,
  emits: ['update:visible', 'close'],
  slots: ['closeIcon', 'icon'],
  setup: function setup(props, _ref) {
    var slots = _ref.slots,
        emit = _ref.emit,
        attrs = _ref.attrs;

    var _useConfigInject = (0, _useConfigInject2.default)('tag', props),
        prefixCls = _useConfigInject.prefixCls,
        direction = _useConfigInject.direction;

    var visible = (0, _vue.ref)(true);
    (0, _vue.watchEffect)(function () {
      if (props.visible !== undefined) {
        visible.value = props.visible;
      }
    });

    var handleCloseClick = function handleCloseClick(e) {
      e.stopPropagation();
      emit('update:visible', false);
      emit('close', e);

      if (e.defaultPrevented) {
        return;
      }

      if (props.visible === undefined) {
        visible.value = false;
      }
    };

    var isPresetColor = (0, _vue.computed)(function () {
      var color = props.color;

      if (!color) {
        return false;
      }

      return PresetColorRegex.test(color) || PresetStatusColorRegex.test(color);
    });
    var tagClassName = (0, _vue.computed)(function () {
      var _classNames;

      return (0, _classNames2.default)(prefixCls.value, (_classNames = {}, (0, _defineProperty2.default)(_classNames, "".concat(prefixCls.value, "-").concat(props.color), isPresetColor.value), (0, _defineProperty2.default)(_classNames, "".concat(prefixCls.value, "-has-color"), props.color && !isPresetColor.value), (0, _defineProperty2.default)(_classNames, "".concat(prefixCls.value, "-hidden"), !visible.value), (0, _defineProperty2.default)(_classNames, "".concat(prefixCls.value, "-rtl"), direction.value === 'rtl'), _classNames));
    });
    return function () {
      var _a, _b, _c;

      var _props$icon = props.icon,
          icon = _props$icon === void 0 ? (_a = slots.icon) === null || _a === void 0 ? void 0 : _a.call(slots) : _props$icon,
          color = props.color,
          _props$closeIcon = props.closeIcon,
          closeIcon = _props$closeIcon === void 0 ? (_b = slots.closeIcon) === null || _b === void 0 ? void 0 : _b.call(slots) : _props$closeIcon,
          _props$closable = props.closable,
          closable = _props$closable === void 0 ? false : _props$closable;

      var renderCloseIcon = function renderCloseIcon() {
        if (closable) {
          return closeIcon ? (0, _vue.createVNode)("div", {
            "class": "".concat(prefixCls.value, "-close-icon"),
            "onClick": handleCloseClick
          }, [closeIcon]) : (0, _vue.createVNode)(_CloseOutlined.default, {
            "class": "".concat(prefixCls.value, "-close-icon"),
            "onClick": handleCloseClick
          }, null);
        }

        return null;
      };

      var tagStyle = {
        backgroundColor: color && !isPresetColor.value ? color : undefined
      };
      var iconNode = icon || null;
      var children = (_c = slots.default) === null || _c === void 0 ? void 0 : _c.call(slots);
      var kids = iconNode ? (0, _vue.createVNode)(_vue.Fragment, null, [iconNode, (0, _vue.createVNode)("span", null, [children])]) : children;
      var isNeedWave = ('onClick' in attrs);
      var tagNode = (0, _vue.createVNode)("span", {
        "class": tagClassName.value,
        "style": tagStyle
      }, [kids, renderCloseIcon()]);
      return isNeedWave ? (0, _vue.createVNode)(_wave.default, null, {
        default: function _default() {
          return [tagNode];
        }
      }) : tagNode;
    };
  }
});
Tag.CheckableTag = _CheckableTag.default;

Tag.install = function (app) {
  app.component(Tag.name, Tag);
  app.component(_CheckableTag.default.name, _CheckableTag.default);
  return app;
};

var _default2 = Tag;
exports.default = _default2;