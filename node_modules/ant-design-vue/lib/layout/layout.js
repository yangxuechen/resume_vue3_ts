"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.basicProps = void 0;

var _vue = require("vue");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _vueTypes = _interopRequireDefault(require("../_util/vue-types"));

var _classNames2 = _interopRequireDefault(require("../_util/classNames"));

var _useConfigInject3 = _interopRequireDefault(require("../_util/hooks/useConfigInject"));

var _injectionKey = require("./injectionKey");

var basicProps = {
  prefixCls: _vueTypes.default.string,
  hasSider: _vueTypes.default.looseBool,
  tagName: _vueTypes.default.string
};
exports.basicProps = basicProps;

function generator(_ref) {
  var suffixCls = _ref.suffixCls,
      tagName = _ref.tagName,
      name = _ref.name;
  return function (BasicComponent) {
    var Adapter = (0, _vue.defineComponent)({
      name: name,
      props: basicProps,
      setup: function setup(props, _ref2) {
        var slots = _ref2.slots;

        var _useConfigInject = (0, _useConfigInject3.default)(suffixCls, props),
            prefixCls = _useConfigInject.prefixCls;

        return function () {
          var _a;

          var basicComponentProps = (0, _extends2.default)((0, _extends2.default)({}, props), {
            prefixCls: prefixCls.value,
            tagName: tagName
          });
          return (0, _vue.createVNode)(BasicComponent, basicComponentProps, {
            default: function _default() {
              return [(_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots)];
            }
          });
        };
      }
    });
    return Adapter;
  };
}

var Basic = (0, _vue.defineComponent)({
  props: basicProps,
  setup: function setup(props, _ref3) {
    var slots = _ref3.slots;
    return function () {
      var _a;

      return (0, _vue.createVNode)(props.tagName, {
        class: props.prefixCls
      }, (_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots));
    };
  }
});
var BasicLayout = (0, _vue.defineComponent)({
  props: basicProps,
  setup: function setup(props, _ref4) {
    var slots = _ref4.slots;

    var _useConfigInject2 = (0, _useConfigInject3.default)('', props),
        direction = _useConfigInject2.direction;

    var siders = (0, _vue.ref)([]);
    var siderHookProvider = {
      addSider: function addSider(id) {
        siders.value = [].concat((0, _toConsumableArray2.default)(siders.value), [id]);
      },
      removeSider: function removeSider(id) {
        siders.value = siders.value.filter(function (currentId) {
          return currentId !== id;
        });
      }
    };
    (0, _vue.provide)(_injectionKey.SiderHookProviderKey, siderHookProvider);
    return function () {
      var _classNames;

      var _a;

      var prefixCls = props.prefixCls,
          hasSider = props.hasSider,
          tagName = props.tagName;
      var divCls = (0, _classNames2.default)(prefixCls, (_classNames = {}, (0, _defineProperty2.default)(_classNames, "".concat(prefixCls, "-has-sider"), typeof hasSider === 'boolean' ? hasSider : siders.value.length > 0), (0, _defineProperty2.default)(_classNames, "".concat(prefixCls, "-rtl"), direction.value === 'rtl'), _classNames));
      return (0, _vue.createVNode)(tagName, {
        class: divCls
      }, (_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots));
    };
  }
});
var Layout = generator({
  suffixCls: 'layout',
  tagName: 'section',
  name: 'ALayout'
})(BasicLayout);
var Header = generator({
  suffixCls: 'layout-header',
  tagName: 'header',
  name: 'ALayoutHeader'
})(Basic);
var Footer = generator({
  suffixCls: 'layout-footer',
  tagName: 'footer',
  name: 'ALayoutFooter'
})(Basic);
var Content = generator({
  suffixCls: 'layout-content',
  tagName: 'main',
  name: 'ALayoutContent'
})(Basic);
Layout.Header = Header;
Layout.Footer = Footer;
Layout.Content = Content;
var _default2 = Layout;
exports.default = _default2;