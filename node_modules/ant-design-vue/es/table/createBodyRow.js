import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _extends from "@babel/runtime/helpers/esm/extends";
import { createVNode as _createVNode } from "vue";
import PropTypes from '../_util/vue-types';
import { computed, defineComponent } from 'vue';
import { getSlot } from '../_util/props-util';
import omit from 'omit.js';
var BodyRowProps = {
  store: PropTypes.object,
  rowKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  prefixCls: PropTypes.string
};
export default function createBodyRow() {
  var Component = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'tr';
  var BodyRow = defineComponent({
    name: 'BodyRow',
    inheritAttrs: false,
    props: BodyRowProps,
    setup: function setup(props) {
      return {
        selected: computed(function () {
          var _a;

          return ((_a = props.store) === null || _a === void 0 ? void 0 : _a.selectedRowKeys.indexOf(props.rowKey)) >= 0;
        })
      };
    },
    render: function render() {
      var _className,
          _this = this;

      var rowProps = omit(_extends(_extends({}, this.$props), this.$attrs), ['prefixCls', 'rowKey', 'store', 'class']);
      var className = (_className = {}, _defineProperty(_className, "".concat(this.prefixCls, "-row-selected"), this.selected), _defineProperty(_className, this.$attrs.class, !!this.$attrs.class), _className);
      return _createVNode(Component, _objectSpread({
        "class": className
      }, rowProps), {
        default: function _default() {
          return [getSlot(_this)];
        }
      });
    }
  });
  return BodyRow;
}