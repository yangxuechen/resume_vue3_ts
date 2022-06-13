import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import { createVNode as _createVNode } from "vue";
import { defineComponent } from 'vue';
import PropsTypes from '../_util/vue-types';
import { flattenChildren } from '../_util/props-util';
import { withInstall } from '../_util/type';
import useConfigInject from '../_util/hooks/useConfigInject';
export var commentProps = {
  actions: PropsTypes.array,

  /** The element to display as the comment author. */
  author: PropsTypes.VNodeChild,

  /** The element to display as the comment avatar - generally an antd Avatar */
  avatar: PropsTypes.VNodeChild,

  /** The main content of the comment */
  content: PropsTypes.VNodeChild,

  /** Comment prefix defaults to '.ant-comment' */
  prefixCls: PropsTypes.string,

  /** A datetime element containing the time to be displayed */
  datetime: PropsTypes.VNodeChild
};
var Comment = defineComponent({
  name: 'AComment',
  props: commentProps,
  slots: ['actions', 'author', 'avatar', 'content', 'datetime'],
  setup: function setup(props, _ref) {
    var slots = _ref.slots;

    var _useConfigInject = useConfigInject('comment', props),
        prefixCls = _useConfigInject.prefixCls,
        direction = _useConfigInject.direction;

    var renderNested = function renderNested(prefixCls, children) {
      return _createVNode("div", {
        "class": "".concat(prefixCls, "-nested")
      }, [children]);
    };

    var getAction = function getAction(actions) {
      if (!actions || !actions.length) {
        return null;
      }

      var actionList = actions.map(function (action, index) {
        return _createVNode("li", {
          "key": "action-".concat(index)
        }, [action]);
      });
      return actionList;
    };

    return function () {
      var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;

      var pre = prefixCls.value;
      var actions = (_a = props.actions) !== null && _a !== void 0 ? _a : (_b = slots.actions) === null || _b === void 0 ? void 0 : _b.call(slots);
      var author = (_c = props.author) !== null && _c !== void 0 ? _c : (_d = slots.author) === null || _d === void 0 ? void 0 : _d.call(slots);
      var avatar = (_e = props.avatar) !== null && _e !== void 0 ? _e : (_f = slots.avatar) === null || _f === void 0 ? void 0 : _f.call(slots);
      var content = (_g = props.content) !== null && _g !== void 0 ? _g : (_h = slots.content) === null || _h === void 0 ? void 0 : _h.call(slots);
      var datetime = (_j = props.datetime) !== null && _j !== void 0 ? _j : (_k = slots.datetime) === null || _k === void 0 ? void 0 : _k.call(slots);

      var avatarDom = _createVNode("div", {
        "class": "".concat(pre, "-avatar")
      }, [typeof avatar === 'string' ? _createVNode("img", {
        "src": avatar,
        "alt": "comment-avatar"
      }, null) : avatar]);

      var actionDom = actions ? _createVNode("ul", {
        "class": "".concat(pre, "-actions")
      }, [getAction(Array.isArray(actions) ? actions : [actions])]) : null;

      var authorContent = _createVNode("div", {
        "class": "".concat(pre, "-content-author")
      }, [author && _createVNode("span", {
        "class": "".concat(pre, "-content-author-name")
      }, [author]), datetime && _createVNode("span", {
        "class": "".concat(pre, "-content-author-time")
      }, [datetime])]);

      var contentDom = _createVNode("div", {
        "class": "".concat(pre, "-content")
      }, [authorContent, _createVNode("div", {
        "class": "".concat(pre, "-content-detail")
      }, [content]), actionDom]);

      var comment = _createVNode("div", {
        "class": "".concat(pre, "-inner")
      }, [avatarDom, contentDom]);

      var children = flattenChildren((_l = slots.default) === null || _l === void 0 ? void 0 : _l.call(slots));
      return _createVNode("div", {
        "class": [pre, _defineProperty({}, "".concat(pre, "-rtl"), direction.value === 'rtl')]
      }, [comment, children && children.length ? renderNested(pre, children) : null]);
    };
  }
});
export default withInstall(Comment);