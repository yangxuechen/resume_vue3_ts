import _extends from "@babel/runtime/helpers/esm/extends";

var initDefaultProps = function initDefaultProps(types, defaultProps) {
  var propTypes = _extends({}, types);

  Object.keys(defaultProps).forEach(function (k) {
    var prop = propTypes[k];

    if (prop) {
      prop.default = defaultProps[k];
    } else {
      throw new Error("not have ".concat(k, " prop"));
    }
  });
  return propTypes;
};

export default initDefaultProps;