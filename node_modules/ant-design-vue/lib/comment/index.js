"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.commentProps = void 0;

var _vue = require("vue");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _vueTypes = _interopRequireDefault(require("../_util/vue-types"));

var _propsUtil = require("../_util/props-util");

var _type = require("../_util/type");

var _useConfigInject2 = _interopRequireDefault(require("../_util/hooks/useConfigInject"));

var commentProps = {
  actions: _vueTypes.default.array,

  /** The element to display as the comment author. */
  author: _vueTypes.default.VNodeChild,

  /** The element to display as the comment avatar - generally an antd Avatar */
  avatar: _vueTypes.default.VNodeChild,

  /** The main content of the comment */
  content: _vueTypes.default.VNodeChild,

  /** Comment prefix defaults to '.ant-comment' */
  prefixCls: _vueTypes.default.string,

  /** A datetime element containing the time to be displayed */
  datetime: _vueTypes.default.VNodeChild
};
exports.commentProps = commentProps;
var Comment = (0, _vue.defineComponent)({
  name: 'AComment',
  props: commentProps,
  slots: ['actions', 'author', 'avatar', 'content', 'datetime'],
  setup: function setup(props, _ref) {
    var slots = _ref.slots;

    var _useConfigInject = (0, _useConfigInject2.default)('comment', props),
        prefixCls = _useConfigInject.prefixCls,
        direction = _useConfigInject.direction;

    var renderNested = function renderNested(prefixCls, children) {
      return (0, _vue.createVNode)("div", {
        "class": "".concat(prefixCls, "-nested")
      }, [children]);
    };

    var getAction = function getAction(actions) {
      if (!actions || !actions.length) {
        return null;
      }

      var actionList = actions.map(function (action, index) {
        return (0, _vue.createVNode)("li", {
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
      var avatarDom = (0, _vue.createVNode)("div", {
        "class": "".concat(pre, "-avatar")
      }, [typeof avatar === 'string' ? (0, _vue.createVNode)("img", {
        "src": avatar,
        "alt": "comment-avatar"
      }, null) : avatar]);
      var actionDom = actions ? (0, _vue.createVNode)("ul", {
        "class": "".concat(pre, "-actions")
      }, [getAction(Array.isArray(actions) ? actions : [actions])]) : null;
      var authorContent = (0, _vue.createVNode)("div", {
        "class": "".concat(pre, "-content-author")
      }, [author && (0, _vue.createVNode)("span", {
        "class": "".concat(pre, "-content-author-name")
      }, [author]), datetime && (0, _vue.createVNode)("span", {
        "class": "".concat(pre, "-content-author-time")
      }, [datetime])]);
      var contentDom = (0, _vue.createVNode)("div", {
        "class": "".concat(pre, "-content")
      }, [authorContent, (0, _vue.createVNode)("div", {
        "class": "".concat(pre, "-content-detail")
      }, [content]), actionDom]);
      var comment = (0, _vue.createVNode)("div", {
        "class": "".concat(pre, "-inner")
      }, [avatarDom, contentDom]);
      var children = (0, _propsUtil.flattenChildren)((_l = slots.default) === null || _l === void 0 ? void 0 : _l.call(slots));
      return (0, _vue.createVNode)("div", {
        "class": [pre, (0, _defineProperty2.default)({}, "".concat(pre, "-rtl"), direction.value === 'rtl')]
      }, [comment, children && children.length ? renderNested(pre, children) : null]);
    };
  }
});

var _default = (0, _type.withInstall)(Comment);

exports.default = _default;