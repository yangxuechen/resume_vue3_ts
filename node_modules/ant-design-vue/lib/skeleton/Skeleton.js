"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof3 = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.skeletonProps = void 0;

var _vue = require("vue");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _classNames2 = _interopRequireDefault(require("../_util/classNames"));

var _vueTypes = _interopRequireWildcard(require("../_util/vue-types"));

var _propsUtil = require("../_util/props-util");

var _Avatar = require("./Avatar");

var _Title = _interopRequireWildcard(require("./Title"));

var _Paragraph = _interopRequireWildcard(require("./Paragraph"));

var _omit = _interopRequireDefault(require("omit.js"));

var _useConfigInject2 = _interopRequireDefault(require("../_util/hooks/useConfigInject"));

var _Element = _interopRequireDefault(require("./Element"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof3(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var skeletonProps = {
  active: _vueTypes.default.looseBool,
  loading: _vueTypes.default.looseBool,
  prefixCls: _vueTypes.default.string,
  avatar: (0, _vueTypes.withUndefined)(_vueTypes.default.oneOfType([_vueTypes.default.string, _vueTypes.default.shape((0, _omit.default)(_Avatar.avatarProps, ['active'])).loose, _vueTypes.default.looseBool])),
  title: (0, _vueTypes.withUndefined)(_vueTypes.default.oneOfType([_vueTypes.default.looseBool, _vueTypes.default.string, _vueTypes.default.shape(_Title.skeletonTitleProps).loose])),
  paragraph: (0, _vueTypes.withUndefined)(_vueTypes.default.oneOfType([_vueTypes.default.looseBool, _vueTypes.default.string, _vueTypes.default.shape(_Paragraph.skeletonParagraphProps).loose]))
};
exports.skeletonProps = skeletonProps;

function getComponentProps(prop) {
  if (prop && (0, _typeof2.default)(prop) === 'object') {
    return prop;
  }

  return {};
}

function getAvatarBasicProps(hasTitle, hasParagraph) {
  if (hasTitle && !hasParagraph) {
    // Square avatar
    return {
      size: 'large',
      shape: 'square'
    };
  }

  return {
    size: 'large',
    shape: 'circle'
  };
}

function getTitleBasicProps(hasAvatar, hasParagraph) {
  if (!hasAvatar && hasParagraph) {
    return {
      width: '38%'
    };
  }

  if (hasAvatar && hasParagraph) {
    return {
      width: '50%'
    };
  }

  return {};
}

function getParagraphBasicProps(hasAvatar, hasTitle) {
  var basicProps = {}; // Width

  if (!hasAvatar || !hasTitle) {
    basicProps.width = '61%';
  } // Rows


  if (!hasAvatar && hasTitle) {
    basicProps.rows = 3;
  } else {
    basicProps.rows = 2;
  }

  return basicProps;
}

var Skeleton = (0, _vue.defineComponent)({
  name: 'ASkeleton',
  props: (0, _propsUtil.initDefaultProps)(skeletonProps, {
    avatar: false,
    title: true,
    paragraph: true
  }),
  setup: function setup(props, _ref) {
    var slots = _ref.slots;

    var _useConfigInject = (0, _useConfigInject2.default)('skeleton', props),
        prefixCls = _useConfigInject.prefixCls,
        direction = _useConfigInject.direction;

    return function () {
      var _a;

      var loading = props.loading,
          avatar = props.avatar,
          title = props.title,
          paragraph = props.paragraph,
          active = props.active,
          round = props.round;
      var pre = prefixCls.value;

      if (loading || props.loading === undefined) {
        var _classNames;

        var hasAvatar = !!avatar || avatar === '';
        var hasTitle = !!title || title === '';
        var hasParagraph = !!paragraph || paragraph === ''; // Avatar

        var avatarNode;

        if (hasAvatar) {
          var _avatarProps = (0, _extends2.default)((0, _extends2.default)({
            prefixCls: "".concat(pre, "-avatar")
          }, getAvatarBasicProps(hasTitle, hasParagraph)), getComponentProps(avatar));

          avatarNode = (0, _vue.createVNode)("div", {
            "class": "".concat(pre, "-header")
          }, [(0, _vue.createVNode)(_Element.default, _avatarProps, null)]);
        }

        var contentNode;

        if (hasTitle || hasParagraph) {
          // Title
          var $title;

          if (hasTitle) {
            var titleProps = (0, _extends2.default)((0, _extends2.default)({
              prefixCls: "".concat(pre, "-title")
            }, getTitleBasicProps(hasAvatar, hasParagraph)), getComponentProps(title));
            $title = (0, _vue.createVNode)(_Title.default, titleProps, null);
          } // Paragraph


          var paragraphNode;

          if (hasParagraph) {
            var paragraphProps = (0, _extends2.default)((0, _extends2.default)({
              prefixCls: "".concat(pre, "-paragraph")
            }, getParagraphBasicProps(hasAvatar, hasTitle)), getComponentProps(paragraph));
            paragraphNode = (0, _vue.createVNode)(_Paragraph.default, paragraphProps, null);
          }

          contentNode = (0, _vue.createVNode)("div", {
            "class": "".concat(pre, "-content")
          }, [$title, paragraphNode]);
        }

        var cls = (0, _classNames2.default)(pre, (_classNames = {}, (0, _defineProperty2.default)(_classNames, "".concat(pre, "-with-avatar"), hasAvatar), (0, _defineProperty2.default)(_classNames, "".concat(pre, "-active"), active), (0, _defineProperty2.default)(_classNames, "".concat(pre, "-rtl"), direction.value === 'rtl'), (0, _defineProperty2.default)(_classNames, "".concat(pre, "-round"), round), _classNames));
        return (0, _vue.createVNode)("div", {
          "class": cls
        }, [avatarNode, contentNode]);
      }

      return (_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots);
    };
  }
});
var _default = Skeleton;
exports.default = _default;