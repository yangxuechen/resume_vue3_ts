"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _wave = _interopRequireDefault(require("../_util/wave"));

var _buttonTypes = _interopRequireDefault(require("./buttonTypes"));

var _LoadingOutlined = _interopRequireDefault(require("@ant-design/icons-vue/lib/icons/LoadingOutlined"));

var _propsUtil = require("../_util/props-util");

var _useConfigInject2 = _interopRequireDefault(require("../_util/hooks/useConfigInject"));

var _devWarning = _interopRequireDefault(require("../vc-util/devWarning"));

var rxTwoCNChar = /^[\u4e00-\u9fa5]{2}$/;
var isTwoCNChar = rxTwoCNChar.test.bind(rxTwoCNChar);
var props = (0, _buttonTypes.default)();

function isUnborderedButtonType(type) {
  return type === 'text' || type === 'link';
}

var _default2 = (0, _vue.defineComponent)({
  name: 'AButton',
  inheritAttrs: false,
  __ANT_BUTTON: true,
  props: props,
  slots: ['icon'],
  emits: ['click'],
  setup: function setup(props, _ref) {
    var slots = _ref.slots,
        attrs = _ref.attrs,
        emit = _ref.emit;

    var _useConfigInject = (0, _useConfigInject2.default)('btn', props),
        prefixCls = _useConfigInject.prefixCls,
        autoInsertSpaceInButton = _useConfigInject.autoInsertSpaceInButton,
        direction = _useConfigInject.direction;

    var buttonNodeRef = (0, _vue.ref)(null);
    var delayTimeoutRef = (0, _vue.ref)(undefined);
    var isNeedInserted = false;
    var innerLoading = (0, _vue.ref)(false);
    var hasTwoCNChar = (0, _vue.ref)(false);
    var autoInsertSpace = (0, _vue.computed)(function () {
      return autoInsertSpaceInButton.value !== false;
    }); // =============== Update Loading ===============

    var loadingOrDelay = (0, _vue.computed)(function () {
      return (0, _typeof2.default)(props.loading) === 'object' && props.loading.delay ? props.loading.delay || true : !!props.loading;
    });
    (0, _vue.watch)(loadingOrDelay, function (val) {
      clearTimeout(delayTimeoutRef.value);

      if (typeof loadingOrDelay.value === 'number') {
        delayTimeoutRef.value = window.setTimeout(function () {
          innerLoading.value = val;
        }, loadingOrDelay.value);
      } else {
        innerLoading.value = val;
      }
    }, {
      immediate: true
    });
    var classes = (0, _vue.computed)(function () {
      var _ref2;

      var type = props.type,
          shape = props.shape,
          size = props.size,
          ghost = props.ghost,
          block = props.block,
          danger = props.danger;
      var pre = prefixCls.value; // large => lg
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

      return _ref2 = {}, (0, _defineProperty2.default)(_ref2, "".concat(pre), true), (0, _defineProperty2.default)(_ref2, "".concat(pre, "-").concat(type), type), (0, _defineProperty2.default)(_ref2, "".concat(pre, "-").concat(shape), shape), (0, _defineProperty2.default)(_ref2, "".concat(pre, "-").concat(sizeCls), sizeCls), (0, _defineProperty2.default)(_ref2, "".concat(pre, "-loading"), innerLoading.value), (0, _defineProperty2.default)(_ref2, "".concat(pre, "-background-ghost"), ghost && !isUnborderedButtonType(type)), (0, _defineProperty2.default)(_ref2, "".concat(pre, "-two-chinese-chars"), hasTwoCNChar.value && autoInsertSpace.value), (0, _defineProperty2.default)(_ref2, "".concat(pre, "-block"), block), (0, _defineProperty2.default)(_ref2, "".concat(pre, "-dangerous"), !!danger), (0, _defineProperty2.default)(_ref2, "".concat(pre, "-rtl"), direction.value === 'rtl'), _ref2;
    });

    var fixTwoCNChar = function fixTwoCNChar() {
      // Fix for HOC usage like <FormatMessage />
      var node = buttonNodeRef.value;

      if (!node || autoInsertSpaceInButton.value === false) {
        return;
      }

      var buttonText = node.textContent;

      if (isNeedInserted && isTwoCNChar(buttonText)) {
        if (!hasTwoCNChar.value) {
          hasTwoCNChar.value = true;
        }
      } else if (hasTwoCNChar.value) {
        hasTwoCNChar.value = false;
      }
    };

    var handleClick = function handleClick(event) {
      // https://github.com/ant-design/ant-design/issues/30207
      if (innerLoading.value || props.disabled) {
        event.preventDefault();
        return;
      }

      emit('click', event);
    };

    var insertSpace = function insertSpace(child, needInserted) {
      var SPACE = needInserted ? ' ' : '';

      if (child.type === _vue.Text) {
        var text = child.children.trim();

        if (isTwoCNChar(text)) {
          text = text.split('').join(SPACE);
        }

        return (0, _vue.createVNode)("span", null, [text]);
      }

      return child;
    };

    (0, _vue.watchEffect)(function () {
      (0, _devWarning.default)(!(props.ghost && isUnborderedButtonType(props.type)), 'Button', "`link` or `text` button can't be a `ghost` button.");
    });
    (0, _vue.onMounted)(fixTwoCNChar);
    (0, _vue.onUpdated)(fixTwoCNChar);
    (0, _vue.onBeforeUnmount)(function () {
      delayTimeoutRef.value && clearTimeout(delayTimeoutRef.value);
    });
    return function () {
      var children = (0, _propsUtil.flattenChildren)((0, _propsUtil.getPropsSlot)(slots, props));
      var icon = (0, _propsUtil.getPropsSlot)(slots, props, 'icon');
      isNeedInserted = children.length === 1 && !icon && !isUnborderedButtonType(props.type);
      var type = props.type,
          htmlType = props.htmlType,
          disabled = props.disabled,
          href = props.href,
          title = props.title,
          target = props.target;
      var iconType = innerLoading.value ? 'loading' : icon;
      var buttonProps = (0, _extends2.default)((0, _extends2.default)({}, attrs), {
        title: title,
        disabled: disabled,
        class: [classes.value, attrs.class, (0, _defineProperty2.default)({}, "".concat(prefixCls.value, "-icon-only"), children.length === 0 && !!iconType)],
        onClick: handleClick
      });
      var iconNode = innerLoading.value ? (0, _vue.createVNode)(_LoadingOutlined.default, null, null) : icon;
      var kids = children.map(function (child) {
        return insertSpace(child, isNeedInserted && autoInsertSpace.value);
      });

      if (href !== undefined) {
        return (0, _vue.createVNode)("a", (0, _objectSpread2.default)((0, _objectSpread2.default)({}, buttonProps), {}, {
          "href": href,
          "target": target,
          "ref": buttonNodeRef
        }), [iconNode, kids]);
      }

      var buttonNode = (0, _vue.createVNode)("button", (0, _objectSpread2.default)((0, _objectSpread2.default)({}, buttonProps), {}, {
        "ref": buttonNodeRef,
        "type": htmlType
      }), [iconNode, kids]);

      if (isUnborderedButtonType(type)) {
        return buttonNode;
      }

      return (0, _vue.createVNode)(_wave.default, {
        "ref": "wave"
      }, {
        default: function _default() {
          return [buttonNode];
        }
      });
    };
  }
});

exports.default = _default2;