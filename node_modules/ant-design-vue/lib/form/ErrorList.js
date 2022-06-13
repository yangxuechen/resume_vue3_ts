"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _context = require("./context");

var _classNames2 = _interopRequireDefault(require("../_util/classNames"));

var _transition = _interopRequireWildcard(require("../_util/transition"));

var _useConfigInject2 = _interopRequireDefault(require("../_util/hooks/useConfigInject"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var _default2 = (0, _vue.defineComponent)({
  name: 'ErrorList',
  props: ['errors', 'help', 'onDomErrorVisibleChange'],
  setup: function setup(props) {
    var _useConfigInject = (0, _useConfigInject2.default)('', props),
        rootPrefixCls = _useConfigInject.prefixCls;

    var _useInjectFormItemPre = (0, _context.useInjectFormItemPrefix)(),
        prefixCls = _useInjectFormItemPre.prefixCls,
        status = _useInjectFormItemPre.status;

    var visible = (0, _vue.ref)(!!(props.errors && props.errors.length));
    var innerStatus = (0, _vue.ref)(status.value);
    var timeout = (0, _vue.ref)();
    var cacheErrors = (0, _vue.ref)((0, _toConsumableArray2.default)(props.errors));
    (0, _vue.watch)([function () {
      return (0, _toConsumableArray2.default)(props.errors);
    }, function () {
      return props.help;
    }], function (newValues) {
      window.clearTimeout(timeout.value);

      if (props.help) {
        visible.value = !!(props.errors && props.errors.length);

        if (visible.value) {
          cacheErrors.value = newValues[0];
        }
      } else {
        timeout.value = window.setTimeout(function () {
          visible.value = !!(props.errors && props.errors.length);

          if (visible.value) {
            cacheErrors.value = newValues[0];
          }
        });
      }
    });
    (0, _vue.onBeforeUnmount)(function () {
      window.clearTimeout(timeout.value);
    }); // Memo status in same visible

    (0, _vue.watch)([visible, status], function () {
      if (visible.value && status.value) {
        innerStatus.value = status.value;
      }
    });
    (0, _vue.watch)(visible, function () {
      var _a;

      if (visible.value) {
        (_a = props.onDomErrorVisibleChange) === null || _a === void 0 ? void 0 : _a.call(props, true);
      }
    }, {
      immediate: true,
      flush: 'post'
    });
    return function () {
      var _a;

      var baseClassName = "".concat(prefixCls.value, "-item-explain");
      var transitionProps = (0, _transition.getTransitionProps)("".concat(rootPrefixCls.value, "-show-help"), {
        onAfterLeave: function onAfterLeave() {
          var _a;

          (_a = props.onDomErrorVisibleChange) === null || _a === void 0 ? void 0 : _a.call(props, false);
        }
      });
      return (0, _vue.createVNode)(_transition.default, transitionProps, {
        default: function _default() {
          return [visible.value ? (0, _vue.createVNode)("div", {
            "class": (0, _classNames2.default)(baseClassName, (0, _defineProperty2.default)({}, "".concat(baseClassName, "-").concat(innerStatus.value), innerStatus.value)),
            "key": "help"
          }, [(_a = cacheErrors.value) === null || _a === void 0 ? void 0 : _a.map(function (error, index) {
            return (0, _vue.createVNode)("div", {
              "key": index,
              "role": "alert"
            }, [error]);
          })]) : null];
        }
      });
    };
  }
});

exports.default = _default2;