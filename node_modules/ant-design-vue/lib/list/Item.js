"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ListItemProps = void 0;

var _vue = require("vue");

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _vueTypes = _interopRequireDefault(require("../_util/vue-types"));

var _classNames2 = _interopRequireDefault(require("../_util/classNames"));

var _propsUtil = require("../_util/props-util");

var _grid = require("../grid");

var _vnode = require("../_util/vnode");

var _ItemMeta = _interopRequireDefault(require("./ItemMeta"));

var _useConfigInject2 = _interopRequireDefault(require("../_util/hooks/useConfigInject"));

var _contextKey = require("./contextKey");

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

var ListItemProps = {
  prefixCls: _vueTypes.default.string,
  extra: _vueTypes.default.any,
  actions: _vueTypes.default.array,
  grid: _vueTypes.default.any,
  colStyle: _vueTypes.default.style
};
exports.ListItemProps = ListItemProps;

var _default2 = (0, _vue.defineComponent)({
  name: 'AListItem',
  inheritAttrs: false,
  Meta: _ItemMeta.default,
  props: ListItemProps,
  slots: ['actions', 'extra'],
  setup: function setup(props, _ref) {
    var slots = _ref.slots,
        attrs = _ref.attrs;

    var _inject = (0, _vue.inject)(_contextKey.ListContextKey, {
      grid: (0, _vue.ref)(),
      itemLayout: (0, _vue.ref)()
    }),
        itemLayout = _inject.itemLayout,
        grid = _inject.grid;

    var _useConfigInject = (0, _useConfigInject2.default)('list', props),
        prefixCls = _useConfigInject.prefixCls;

    var isItemContainsTextNodeAndNotSingular = function isItemContainsTextNodeAndNotSingular() {
      var _a;

      var children = ((_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots)) || [];
      var result;
      children.forEach(function (element) {
        if ((0, _propsUtil.isStringElement)(element) && !(0, _propsUtil.isEmptyElement)(element)) {
          result = true;
        }
      });
      return result && children.length > 1;
    };

    var isFlexMode = function isFlexMode() {
      var _a, _b;

      var extra = (_a = props.extra) !== null && _a !== void 0 ? _a : (_b = slots.extra) === null || _b === void 0 ? void 0 : _b.call(slots);

      if (itemLayout.value === 'vertical') {
        return !!extra;
      }

      return !isItemContainsTextNodeAndNotSingular();
    };

    return function () {
      var _a, _b, _c, _d, _e;

      var className = attrs.class,
          restAttrs = __rest(attrs, ["class"]);

      var pre = prefixCls.value;
      var extra = (_a = props.extra) !== null && _a !== void 0 ? _a : (_b = slots.extra) === null || _b === void 0 ? void 0 : _b.call(slots);
      var children = (_c = slots.default) === null || _c === void 0 ? void 0 : _c.call(slots);
      var actions = (_d = props.actions) !== null && _d !== void 0 ? _d : (0, _propsUtil.flattenChildren)((_e = slots.actions) === null || _e === void 0 ? void 0 : _e.call(slots));
      actions = actions && !Array.isArray(actions) ? [actions] : actions;
      var actionsContent = actions && actions.length > 0 && (0, _vue.createVNode)("ul", {
        "class": "".concat(pre, "-item-action"),
        "key": "actions"
      }, [actions.map(function (action, i) {
        return (0, _vue.createVNode)("li", {
          "key": "".concat(pre, "-item-action-").concat(i)
        }, [action, i !== actions.length - 1 && (0, _vue.createVNode)("em", {
          "class": "".concat(pre, "-item-action-split")
        }, null)]);
      })]);
      var Element = grid.value ? 'div' : 'li';
      var itemChildren = (0, _vue.createVNode)(Element, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, restAttrs), {}, {
        "class": (0, _classNames2.default)("".concat(pre, "-item"), (0, _defineProperty2.default)({}, "".concat(pre, "-item-no-flex"), !isFlexMode()), className)
      }), {
        default: function _default() {
          return [itemLayout.value === 'vertical' && extra ? [(0, _vue.createVNode)("div", {
            "class": "".concat(pre, "-item-main"),
            "key": "content"
          }, [children, actionsContent]), (0, _vue.createVNode)("div", {
            "class": "".concat(pre, "-item-extra"),
            "key": "extra"
          }, [extra])] : [children, actionsContent, (0, _vnode.cloneElement)(extra, {
            key: 'extra'
          })]];
        }
      });
      return grid.value ? (0, _vue.createVNode)(_grid.Col, {
        "flex": 1,
        "style": props.colStyle
      }, {
        default: function _default() {
          return [itemChildren];
        }
      }) : itemChildren;
    };
  }
});

exports.default = _default2;