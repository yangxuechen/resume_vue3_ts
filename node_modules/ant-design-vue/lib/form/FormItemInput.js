"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _LoadingOutlined = _interopRequireDefault(require("@ant-design/icons-vue/lib/icons/LoadingOutlined"));

var _CloseCircleFilled = _interopRequireDefault(require("@ant-design/icons-vue/lib/icons/CloseCircleFilled"));

var _CheckCircleFilled = _interopRequireDefault(require("@ant-design/icons-vue/lib/icons/CheckCircleFilled"));

var _ExclamationCircleFilled = _interopRequireDefault(require("@ant-design/icons-vue/lib/icons/ExclamationCircleFilled"));

var _Col = _interopRequireDefault(require("../grid/Col"));

var _context = require("./context");

var _ErrorList = _interopRequireDefault(require("./ErrorList"));

var _classNames = _interopRequireDefault(require("../_util/classNames"));

var iconMap = {
  success: _CheckCircleFilled.default,
  warning: _ExclamationCircleFilled.default,
  error: _CloseCircleFilled.default,
  validating: _LoadingOutlined.default
};
var FormItemInput = (0, _vue.defineComponent)({
  slots: ['help', 'extra', 'errors'],
  inheritAttrs: false,
  props: ['prefixCls', 'errors', 'hasFeedback', 'validateStatus', 'onDomErrorVisibleChange', 'wrapperCol', 'help', 'extra', 'status'],
  setup: function setup(props, _ref) {
    var slots = _ref.slots;
    var formContext = (0, _context.useInjectForm)();
    var contextWrapperCol = formContext.wrapperCol; // Pass to sub FormItem should not with col info

    var subFormContext = (0, _extends2.default)({}, formContext);
    delete subFormContext.labelCol;
    delete subFormContext.wrapperCol;
    (0, _context.useProvideForm)(subFormContext);
    (0, _context.useProvideFormItemPrefix)({
      prefixCls: (0, _vue.computed)(function () {
        return props.prefixCls;
      }),
      status: (0, _vue.computed)(function () {
        return props.status;
      })
    });
    (0, _vue.onUnmounted)(function () {
      props.onDomErrorVisibleChange(false);
    });
    return function () {
      var _a, _b, _c, _d;

      var prefixCls = props.prefixCls,
          wrapperCol = props.wrapperCol,
          _props$help = props.help,
          help = _props$help === void 0 ? (_a = slots.help) === null || _a === void 0 ? void 0 : _a.call(slots) : _props$help,
          _props$errors = props.errors,
          errors = _props$errors === void 0 ? (_b = slots.errors) === null || _b === void 0 ? void 0 : _b.call(slots) : _props$errors,
          onDomErrorVisibleChange = props.onDomErrorVisibleChange,
          hasFeedback = props.hasFeedback,
          validateStatus = props.validateStatus,
          _props$extra = props.extra,
          extra = _props$extra === void 0 ? (_c = slots.extra) === null || _c === void 0 ? void 0 : _c.call(slots) : _props$extra;
      var baseClassName = "".concat(prefixCls, "-item");
      var mergedWrapperCol = wrapperCol || (contextWrapperCol === null || contextWrapperCol === void 0 ? void 0 : contextWrapperCol.value) || {};
      var className = (0, _classNames.default)("".concat(baseClassName, "-control"), mergedWrapperCol.class); // Should provides additional icon if `hasFeedback`

      var IconNode = validateStatus && iconMap[validateStatus];
      var icon = hasFeedback && IconNode ? (0, _vue.createVNode)("span", {
        "class": "".concat(baseClassName, "-children-icon")
      }, [(0, _vue.createVNode)(IconNode, null, null)]) : null;
      var inputDom = (0, _vue.createVNode)("div", {
        "class": "".concat(baseClassName, "-control-input")
      }, [(0, _vue.createVNode)("div", {
        "class": "".concat(baseClassName, "-control-input-content")
      }, [(_d = slots.default) === null || _d === void 0 ? void 0 : _d.call(slots)]), icon]);
      var errorListDom = (0, _vue.createVNode)(_ErrorList.default, {
        "errors": errors,
        "help": help,
        "onDomErrorVisibleChange": onDomErrorVisibleChange
      }, null); // If extra = 0, && will goes wrong
      // 0&&error -> 0

      var extraDom = extra ? (0, _vue.createVNode)("div", {
        "class": "".concat(baseClassName, "-extra")
      }, [extra]) : null;
      return (0, _vue.createVNode)(_Col.default, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, mergedWrapperCol), {}, {
        "class": className
      }), {
        default: function _default() {
          return [inputDom, errorListDom, extraDom];
        }
      });
    };
  }
});
var _default2 = FormItemInput;
exports.default = _default2;