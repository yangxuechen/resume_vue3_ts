import { createVNode as _createVNode } from "vue";
import DateTHead from './DateTHead';
import DateTBody from './DateTBody';

var DateTable = function DateTable(_, _ref) {
  var attrs = _ref.attrs;
  var prefixCls = attrs.prefixCls;
  return _createVNode("table", {
    "class": "".concat(prefixCls, "-table"),
    "cellspacing": "0",
    "role": "grid"
  }, [_createVNode(DateTHead, attrs, null), _createVNode(DateTBody, attrs, null)]);
};

DateTable.inheritAttrs = false;
export default DateTable;