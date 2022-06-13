import { createVNode as _createVNode } from "vue";
import { defineComponent } from 'vue';
import useConfigInject from '../_util/hooks/useConfigInject';
import PropTypes from '../_util/vue-types';
export var listItemMetaProps = {
  avatar: PropTypes.any,
  description: PropTypes.any,
  prefixCls: PropTypes.string,
  title: PropTypes.any
};
export default defineComponent({
  name: 'AListItemMeta',
  props: listItemMetaProps,
  displayName: 'AListItemMeta',
  __ANT_LIST_ITEM_META: true,
  slots: ['avatar', 'description', 'title'],
  setup: function setup(props, _ref) {
    var slots = _ref.slots;

    var _useConfigInject = useConfigInject('list', props),
        prefixCls = _useConfigInject.prefixCls;

    return function () {
      var _a, _b, _c, _d, _e, _f;

      var classString = "".concat(prefixCls.value, "-item-meta");
      var title = (_a = props.title) !== null && _a !== void 0 ? _a : (_b = slots.title) === null || _b === void 0 ? void 0 : _b.call(slots);
      var description = (_c = props.description) !== null && _c !== void 0 ? _c : (_d = slots.description) === null || _d === void 0 ? void 0 : _d.call(slots);
      var avatar = (_e = props.avatar) !== null && _e !== void 0 ? _e : (_f = slots.avatar) === null || _f === void 0 ? void 0 : _f.call(slots);

      var content = _createVNode("div", {
        "class": "".concat(prefixCls.value, "-item-meta-content")
      }, [title && _createVNode("h4", {
        "class": "".concat(prefixCls.value, "-item-meta-title")
      }, [title]), description && _createVNode("div", {
        "class": "".concat(prefixCls.value, "-item-meta-description")
      }, [description])]);

      return _createVNode("div", {
        "class": classString
      }, [avatar && _createVNode("div", {
        "class": "".concat(prefixCls.value, "-item-meta-avatar")
      }, [avatar]), (title || description) && content]);
    };
  }
});