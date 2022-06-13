"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.listItemMetaProps = void 0;

var _vue = require("vue");

var _useConfigInject2 = _interopRequireDefault(require("../_util/hooks/useConfigInject"));

var _vueTypes = _interopRequireDefault(require("../_util/vue-types"));

var listItemMetaProps = {
  avatar: _vueTypes.default.any,
  description: _vueTypes.default.any,
  prefixCls: _vueTypes.default.string,
  title: _vueTypes.default.any
};
exports.listItemMetaProps = listItemMetaProps;

var _default = (0, _vue.defineComponent)({
  name: 'AListItemMeta',
  props: listItemMetaProps,
  displayName: 'AListItemMeta',
  __ANT_LIST_ITEM_META: true,
  slots: ['avatar', 'description', 'title'],
  setup: function setup(props, _ref) {
    var slots = _ref.slots;

    var _useConfigInject = (0, _useConfigInject2.default)('list', props),
        prefixCls = _useConfigInject.prefixCls;

    return function () {
      var _a, _b, _c, _d, _e, _f;

      var classString = "".concat(prefixCls.value, "-item-meta");
      var title = (_a = props.title) !== null && _a !== void 0 ? _a : (_b = slots.title) === null || _b === void 0 ? void 0 : _b.call(slots);
      var description = (_c = props.description) !== null && _c !== void 0 ? _c : (_d = slots.description) === null || _d === void 0 ? void 0 : _d.call(slots);
      var avatar = (_e = props.avatar) !== null && _e !== void 0 ? _e : (_f = slots.avatar) === null || _f === void 0 ? void 0 : _f.call(slots);
      var content = (0, _vue.createVNode)("div", {
        "class": "".concat(prefixCls.value, "-item-meta-content")
      }, [title && (0, _vue.createVNode)("h4", {
        "class": "".concat(prefixCls.value, "-item-meta-title")
      }, [title]), description && (0, _vue.createVNode)("div", {
        "class": "".concat(prefixCls.value, "-item-meta-description")
      }, [description])]);
      return (0, _vue.createVNode)("div", {
        "class": classString
      }, [avatar && (0, _vue.createVNode)("div", {
        "class": "".concat(prefixCls.value, "-item-meta-avatar")
      }, [avatar]), (title || description) && content]);
    };
  }
});

exports.default = _default;