import { createVNode as _createVNode } from "vue";

var FilterDropdownMenuWrapper = function FilterDropdownMenuWrapper(props, _ref) {
  var slots = _ref.slots;

  var _a;

  return _createVNode("div", {
    "class": props.class,
    "onClick": function onClick(e) {
      return e.stopPropagation();
    }
  }, [(_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots)]);
};

FilterDropdownMenuWrapper.inheritAttrs = false;
export default FilterDropdownMenuWrapper;