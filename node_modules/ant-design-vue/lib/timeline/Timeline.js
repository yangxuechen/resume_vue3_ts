"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.timelineProps = void 0;

var _vue = require("vue");

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classNames2 = _interopRequireDefault(require("../_util/classNames"));

var _vueTypes = _interopRequireDefault(require("../_util/vue-types"));

var _propsUtil = require("../_util/props-util");

var _initDefaultProps = _interopRequireDefault(require("../_util/props-util/initDefaultProps"));

var _TimelineItem = _interopRequireDefault(require("./TimelineItem"));

var _LoadingOutlined = _interopRequireDefault(require("@ant-design/icons-vue/lib/icons/LoadingOutlined"));

var _configProvider = require("../config-provider");

var _type = require("../_util/type");

var timelineProps = {
  prefixCls: _vueTypes.default.string,

  /** 指定最后一个幽灵节点是否存在或内容 */
  pending: _vueTypes.default.any,
  pendingDot: _vueTypes.default.string,
  reverse: _vueTypes.default.looseBool,
  mode: _vueTypes.default.oneOf((0, _type.tuple)('left', 'alternate', 'right', ''))
};
exports.timelineProps = timelineProps;

var _default2 = (0, _vue.defineComponent)({
  name: 'ATimeline',
  props: (0, _initDefaultProps.default)(timelineProps, {
    reverse: false,
    mode: ''
  }),
  setup: function setup() {
    return {
      configProvider: (0, _vue.inject)('configProvider', _configProvider.defaultConfigProvider)
    };
  },
  render: function render() {
    var _classNames;

    var _a, _b;

    var _getOptionProps = (0, _propsUtil.getOptionProps)(this),
        customizePrefixCls = _getOptionProps.prefixCls,
        reverse = _getOptionProps.reverse,
        mode = _getOptionProps.mode;

    var getPrefixCls = this.configProvider.getPrefixCls;
    var prefixCls = getPrefixCls('timeline', customizePrefixCls);
    var pendingDot = (0, _propsUtil.getComponent)(this, 'pendingDot');
    var pending = (0, _propsUtil.getComponent)(this, 'pending');
    var pendingNode = typeof pending === 'boolean' ? null : pending;
    var classString = (0, _classNames2.default)(prefixCls, (_classNames = {}, (0, _defineProperty2.default)(_classNames, "".concat(prefixCls, "-pending"), !!pending), (0, _defineProperty2.default)(_classNames, "".concat(prefixCls, "-reverse"), !!reverse), (0, _defineProperty2.default)(_classNames, "".concat(prefixCls, "-").concat(mode), !!mode), _classNames));
    var children = (0, _propsUtil.filterEmpty)((_b = (_a = this.$slots).default) === null || _b === void 0 ? void 0 : _b.call(_a)); // // Remove falsy items
    // const falsylessItems = filterEmpty(this.$slots.default)
    // const items = falsylessItems.map((item, idx) => {
    //   return cloneElement(item, {
    //     props: {
    //       last: falsylessItems.length - 1 === idx,
    //     },
    //   })
    // })

    var pendingItem = pending ? (0, _vue.createVNode)(_TimelineItem.default, {
      "pending": !!pending,
      "dot": pendingDot || (0, _vue.createVNode)(_LoadingOutlined.default, null, null)
    }, {
      default: function _default() {
        return [pendingNode];
      }
    }) : null;
    var timeLineItems = reverse ? [pendingItem].concat((0, _toConsumableArray2.default)(children.reverse())) : [].concat((0, _toConsumableArray2.default)(children), [pendingItem]);

    var getPositionCls = function getPositionCls(ele, idx) {
      var eleProps = (0, _propsUtil.getPropsData)(ele);

      if (mode === 'alternate') {
        if (eleProps.position === 'right') return "".concat(prefixCls, "-item-right");
        if (eleProps.position === 'left') return "".concat(prefixCls, "-item-left");
        return idx % 2 === 0 ? "".concat(prefixCls, "-item-left") : "".concat(prefixCls, "-item-right");
      }

      if (mode === 'left') return "".concat(prefixCls, "-item-left");
      if (mode === 'right') return "".concat(prefixCls, "-item-right");
      if (eleProps.position === 'right') return "".concat(prefixCls, "-item-right");
      return '';
    }; // Remove falsy items


    var truthyItems = timeLineItems.filter(function (item) {
      return !!item;
    });
    var itemsCount = truthyItems.length;
    var lastCls = "".concat(prefixCls, "-item-last");
    var items = truthyItems.map(function (ele, idx) {
      var pendingClass = idx === itemsCount - 2 ? lastCls : '';
      var readyClass = idx === itemsCount - 1 ? lastCls : '';
      return (0, _vue.cloneVNode)(ele, {
        class: (0, _classNames2.default)([!reverse && !!pending ? pendingClass : readyClass, getPositionCls(ele, idx)])
      });
    });
    return (0, _vue.createVNode)("ul", {
      "class": classString
    }, [items]);
  }
});

exports.default = _default2;