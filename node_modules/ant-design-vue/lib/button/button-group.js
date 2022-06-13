"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.buttonGroupProps = void 0;

var _vue = require("vue");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _propsUtil = require("../_util/props-util");

var _vueTypes = _interopRequireDefault(require("../_util/vue-types"));

var _useConfigInject2 = _interopRequireDefault(require("../_util/hooks/useConfigInject"));

var buttonGroupProps = {
  prefixCls: _vueTypes.default.string,
  size: {
    type: String
  }
};
exports.buttonGroupProps = buttonGroupProps;

var _default = (0, _vue.defineComponent)({
  name: 'AButtonGroup',
  props: buttonGroupProps,
  setup: function setup(props, _ref) {
    var slots = _ref.slots;

    var _useConfigInject = (0, _useConfigInject2.default)('btn-group', props),
        prefixCls = _useConfigInject.prefixCls,
        direction = _useConfigInject.direction;

    var classes = (0, _vue.computed)(function () {
      var _ref2;

      var size = props.size; // large => lg
      // small => sm

      var sizeCls = '';

      switch (size) {
        case 'large':
          sizeCls = 'lg';
          break;

        case 'small':
          sizeCls = 'sm';
          break;

        default:
          break;
      }

      return _ref2 = {}, (0, _defineProperty2.default)(_ref2, "".concat(prefixCls.value), true), (0, _defineProperty2.default)(_ref2, "".concat(prefixCls.value, "-").concat(sizeCls), sizeCls), (0, _defineProperty2.default)(_ref2, "".concat(prefixCls.value, "-rtl"), direction.value === 'rtl'), _ref2;
    });
    return function () {
      var _a;

      return (0, _vue.createVNode)("div", {
        "class": classes.value
      }, [(0, _propsUtil.flattenChildren)((_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots))]);
    };
  }
});

exports.default = _default;