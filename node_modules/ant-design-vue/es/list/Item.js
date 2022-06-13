import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import { createVNode as _createVNode } from "vue";

var __rest = this && this.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

import PropTypes from '../_util/vue-types';
import classNames from '../_util/classNames';
import { isStringElement, isEmptyElement, flattenChildren } from '../_util/props-util';
import { Col } from '../grid';
import { cloneElement } from '../_util/vnode';
import { defineComponent, inject, ref } from 'vue';
import ItemMeta from './ItemMeta';
import useConfigInject from '../_util/hooks/useConfigInject';
import { ListContextKey } from './contextKey';
export var ListItemProps = {
  prefixCls: PropTypes.string,
  extra: PropTypes.any,
  actions: PropTypes.array,
  grid: PropTypes.any,
  colStyle: PropTypes.style
};
export default defineComponent({
  name: 'AListItem',
  inheritAttrs: false,
  Meta: ItemMeta,
  props: ListItemProps,
  slots: ['actions', 'extra'],
  setup: function setup(props, _ref) {
    var slots = _ref.slots,
        attrs = _ref.attrs;

    var _inject = inject(ListContextKey, {
      grid: ref(),
      itemLayout: ref()
    }),
        itemLayout = _inject.itemLayout,
        grid = _inject.grid;

    var _useConfigInject = useConfigInject('list', props),
        prefixCls = _useConfigInject.prefixCls;

    var isItemContainsTextNodeAndNotSingular = function isItemContainsTextNodeAndNotSingular() {
      var _a;

      var children = ((_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots)) || [];
      var result;
      children.forEach(function (element) {
        if (isStringElement(element) && !isEmptyElement(element)) {
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
      var actions = (_d = props.actions) !== null && _d !== void 0 ? _d : flattenChildren((_e = slots.actions) === null || _e === void 0 ? void 0 : _e.call(slots));
      actions = actions && !Array.isArray(actions) ? [actions] : actions;

      var actionsContent = actions && actions.length > 0 && _createVNode("ul", {
        "class": "".concat(pre, "-item-action"),
        "key": "actions"
      }, [actions.map(function (action, i) {
        return _createVNode("li", {
          "key": "".concat(pre, "-item-action-").concat(i)
        }, [action, i !== actions.length - 1 && _createVNode("em", {
          "class": "".concat(pre, "-item-action-split")
        }, null)]);
      })]);

      var Element = grid.value ? 'div' : 'li';

      var itemChildren = _createVNode(Element, _objectSpread(_objectSpread({}, restAttrs), {}, {
        "class": classNames("".concat(pre, "-item"), _defineProperty({}, "".concat(pre, "-item-no-flex"), !isFlexMode()), className)
      }), {
        default: function _default() {
          return [itemLayout.value === 'vertical' && extra ? [_createVNode("div", {
            "class": "".concat(pre, "-item-main"),
            "key": "content"
          }, [children, actionsContent]), _createVNode("div", {
            "class": "".concat(pre, "-item-extra"),
            "key": "extra"
          }, [extra])] : [children, actionsContent, cloneElement(extra, {
            key: 'extra'
          })]];
        }
      });

      return grid.value ? _createVNode(Col, {
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