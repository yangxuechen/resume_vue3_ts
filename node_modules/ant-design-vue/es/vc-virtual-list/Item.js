import { cloneVNode } from 'vue';

var Item = function Item(_ref, _ref2) {
  var setRef = _ref.setRef;
  var slots = _ref2.slots;

  var _a;

  var children = (_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots);
  return children && children.length ? cloneVNode(children[0], {
    ref: setRef
  }) : children;
};

Item.props = {
  setRef: {
    type: Function,
    default: function _default() {}
  }
};
export default Item;