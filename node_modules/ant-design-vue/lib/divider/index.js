"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.dividerProps = void 0;

var _vue = require("vue");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _propsUtil = require("../_util/props-util");

var _configProvider = require("../config-provider");

var _type = require("../_util/type");

var dividerProps = {
  prefixCls: String,
  type: {
    type: String,
    default: 'horizontal'
  },
  dashed: {
    type: Boolean,
    default: false
  },
  orientation: {
    type: String,
    default: 'center'
  },
  plain: {
    type: Boolean,
    default: false
  }
};
exports.dividerProps = dividerProps;
var Divider = (0, _vue.defineComponent)({
  name: 'ADivider',
  props: dividerProps,
  setup: function setup(props, _ref) {
    var slots = _ref.slots;
    var configProvider = (0, _vue.inject)('configProvider', _configProvider.defaultConfigProvider);
    var prefixClsRef = (0, _vue.computed)(function () {
      return configProvider.getPrefixCls('divider', props.prefixCls);
    });
    var classString = (0, _vue.computed)(function () {
      var _ref2;

      var type = props.type,
          dashed = props.dashed,
          plain = props.plain;
      var prefixCls = prefixClsRef.value;
      return _ref2 = {}, (0, _defineProperty2.default)(_ref2, prefixCls, true), (0, _defineProperty2.default)(_ref2, "".concat(prefixCls, "-").concat(type), true), (0, _defineProperty2.default)(_ref2, "".concat(prefixCls, "-dashed"), !!dashed), (0, _defineProperty2.default)(_ref2, "".concat(prefixCls, "-plain"), !!plain), (0, _defineProperty2.default)(_ref2, "".concat(prefixCls, "-rtl"), configProvider.direction === 'rtl'), _ref2;
    });
    var orientationPrefix = (0, _vue.computed)(function () {
      return props.orientation.length > 0 ? '-' + props.orientation : props.orientation;
    });
    return function () {
      var _a;

      var children = (0, _propsUtil.flattenChildren)((_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots));
      return (0, _vue.createVNode)("div", {
        "class": [classString.value, children.length ? "".concat(prefixClsRef.value, "-with-text ").concat(prefixClsRef.value, "-with-text").concat(orientationPrefix.value) : ''],
        "role": "separator"
      }, [children.length ? (0, _vue.createVNode)("span", {
        "class": "".concat(prefixClsRef.value, "-inner-text")
      }, [children]) : null]);
    };
  }
});

var _default = (0, _type.withInstall)(Divider);

exports.default = _default;