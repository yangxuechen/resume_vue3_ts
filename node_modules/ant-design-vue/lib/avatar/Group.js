"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _vnode = require("../_util/vnode");

var _Avatar = _interopRequireWildcard(require("./Avatar"));

var _popover = _interopRequireDefault(require("../popover"));

var _vueTypes = _interopRequireDefault(require("../_util/vue-types"));

var _propsUtil = require("../_util/props-util");

var _type = require("../_util/type");

var _useConfigInject2 = _interopRequireDefault(require("../_util/hooks/useConfigInject"));

var _useSize = _interopRequireDefault(require("../_util/hooks/useSize"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var groupProps = {
  prefixCls: _vueTypes.default.string,
  maxCount: _vueTypes.default.number,
  maxStyle: {
    type: Object,
    default: function _default() {
      return {};
    }
  },
  maxPopoverPlacement: _vueTypes.default.oneOf((0, _type.tuple)('top', 'bottom')).def('top'),

  /*
   * Size of avatar, options: `large`, `small`, `default`
   * or a custom number size
   * */
  size: _Avatar.avatarProps.size
};
var Group = (0, _vue.defineComponent)({
  name: 'AAvatarGroup',
  inheritAttrs: false,
  props: groupProps,
  setup: function setup(props, _ref) {
    var slots = _ref.slots,
        attrs = _ref.attrs;

    var _useConfigInject = (0, _useConfigInject2.default)('avatar-group', props),
        prefixCls = _useConfigInject.prefixCls,
        direction = _useConfigInject.direction;

    (0, _useSize.default)(props);
    return function () {
      var _cls;

      var _props$maxPopoverPlac = props.maxPopoverPlacement,
          maxPopoverPlacement = _props$maxPopoverPlac === void 0 ? 'top' : _props$maxPopoverPlac,
          maxCount = props.maxCount,
          maxStyle = props.maxStyle;
      var cls = (_cls = {}, (0, _defineProperty2.default)(_cls, prefixCls.value, true), (0, _defineProperty2.default)(_cls, "".concat(prefixCls.value, "-rtl"), direction.value === 'rtl'), (0, _defineProperty2.default)(_cls, "".concat(attrs.class), !!attrs.class), _cls);
      var children = (0, _propsUtil.getPropsSlot)(slots, props);
      var childrenWithProps = (0, _propsUtil.flattenChildren)(children).map(function (child, index) {
        return (0, _vnode.cloneElement)(child, {
          key: "avatar-key-".concat(index)
        });
      });
      var numOfChildren = childrenWithProps.length;

      if (maxCount && maxCount < numOfChildren) {
        var childrenShow = childrenWithProps.slice(0, maxCount);
        var childrenHidden = childrenWithProps.slice(maxCount, numOfChildren);
        childrenShow.push((0, _vue.createVNode)(_popover.default, {
          "key": "avatar-popover-key",
          "content": childrenHidden,
          "trigger": "hover",
          "placement": maxPopoverPlacement,
          "overlayClassName": "".concat(prefixCls.value, "-popover")
        }, {
          default: function _default() {
            return [(0, _vue.createVNode)(_Avatar.default, {
              "style": maxStyle
            }, {
              default: function _default() {
                return ["+".concat(numOfChildren - maxCount)];
              }
            })];
          }
        }));
        return (0, _vue.createVNode)("div", (0, _objectSpread2.default)((0, _objectSpread2.default)({}, attrs), {}, {
          "class": cls,
          "style": attrs.style
        }), [childrenShow]);
      }

      return (0, _vue.createVNode)("div", (0, _objectSpread2.default)((0, _objectSpread2.default)({}, attrs), {}, {
        "class": cls,
        "style": attrs.style
      }), [childrenWithProps]);
    };
  }
});
var _default2 = Group;
exports.default = _default2;