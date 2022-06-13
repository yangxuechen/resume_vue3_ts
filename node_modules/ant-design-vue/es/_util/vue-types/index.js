import { createTypes } from 'vue-types';
var PropTypes = createTypes({
  func: undefined,
  bool: undefined,
  string: undefined,
  number: undefined,
  array: undefined,
  object: undefined,
  integer: undefined
});
PropTypes.extend([{
  name: 'looseBool',
  getter: true,
  type: Boolean,
  default: undefined
}, {
  name: 'style',
  getter: true,
  type: [String, Object],
  default: undefined
}, {
  name: 'VNodeChild',
  getter: true,
  type: null
}]);
export function withUndefined(type) {
  type.default = undefined;
  return type;
}
export default PropTypes;