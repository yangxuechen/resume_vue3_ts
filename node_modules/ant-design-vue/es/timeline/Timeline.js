import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import { createVNode as _createVNode } from "vue";
import { inject, cloneVNode, defineComponent } from 'vue';
import classNames from '../_util/classNames';
import PropTypes from '../_util/vue-types';
import { getOptionProps, getPropsData, filterEmpty, getComponent } from '../_util/props-util';
import initDefaultProps from '../_util/props-util/initDefaultProps';
import TimelineItem from './TimelineItem';
import LoadingOutlined from '@ant-design/icons-vue/LoadingOutlined';
import { defaultConfigProvider } from '../config-provider';
import { tuple } from '../_util/type';
export var timelineProps = {
  prefixCls: PropTypes.string,

  /** 指定最后一个幽灵节点是否存在或内容 */
  pending: PropTypes.any,
  pendingDot: PropTypes.string,
  reverse: PropTypes.looseBool,
  mode: PropTypes.oneOf(tuple('left', 'alternate', 'right', ''))
};
export default defineComponent({
  name: 'ATimeline',
  props: initDefaultProps(timelineProps, {
    reverse: false,
    mode: ''
  }),
  setup: function setup() {
    return {
      configProvider: inject('configProvider', defaultConfigProvider)
    };
  },
  render: function render() {
    var _classNames;

    var _a, _b;

    var _getOptionProps = getOptionProps(this),
        customizePrefixCls = _getOptionProps.prefixCls,
        reverse = _getOptionProps.reverse,
        mode = _getOptionProps.mode;

    var getPrefixCls = this.configProvider.getPrefixCls;
    var prefixCls = getPrefixCls('timeline', customizePrefixCls);
    var pendingDot = getComponent(this, 'pendingDot');
    var pending = getComponent(this, 'pending');
    var pendingNode = typeof pending === 'boolean' ? null : pending;
    var classString = classNames(prefixCls, (_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-pending"), !!pending), _defineProperty(_classNames, "".concat(prefixCls, "-reverse"), !!reverse), _defineProperty(_classNames, "".concat(prefixCls, "-").concat(mode), !!mode), _classNames));
    var children = filterEmpty((_b = (_a = this.$slots).default) === null || _b === void 0 ? void 0 : _b.call(_a)); // // Remove falsy items
    // const falsylessItems = filterEmpty(this.$slots.default)
    // const items = falsylessItems.map((item, idx) => {
    //   return cloneElement(item, {
    //     props: {
    //       last: falsylessItems.length - 1 === idx,
    //     },
    //   })
    // })

    var pendingItem = pending ? _createVNode(TimelineItem, {
      "pending": !!pending,
      "dot": pendingDot || _createVNode(LoadingOutlined, null, null)
    }, {
      default: function _default() {
        return [pendingNode];
      }
    }) : null;
    var timeLineItems = reverse ? [pendingItem].concat(_toConsumableArray(children.reverse())) : [].concat(_toConsumableArray(children), [pendingItem]);

    var getPositionCls = function getPositionCls(ele, idx) {
      var eleProps = getPropsData(ele);

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
      return cloneVNode(ele, {
        class: classNames([!reverse && !!pending ? pendingClass : readyClass, getPositionCls(ele, idx)])
      });
    });
    return _createVNode("ul", {
      "class": classString
    }, [items]);
  }
});