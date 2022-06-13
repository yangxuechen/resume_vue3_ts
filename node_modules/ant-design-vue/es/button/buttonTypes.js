import { tuple } from '../_util/type';
import PropTypes from '../_util/vue-types';
var ButtonTypes = tuple('default', 'primary', 'ghost', 'dashed', 'link', 'text');
var ButtonShapes = tuple('circle', 'round');
var ButtonHTMLTypes = tuple('submit', 'button', 'reset');
export function convertLegacyProps(type) {
  if (type === 'danger') {
    return {
      danger: true
    };
  }

  return {
    type: type
  };
}

var buttonProps = function buttonProps() {
  return {
    prefixCls: PropTypes.string,
    type: PropTypes.oneOf(ButtonTypes),
    htmlType: PropTypes.oneOf(ButtonHTMLTypes).def('button'),
    shape: PropTypes.oneOf(ButtonShapes),
    size: {
      type: String
    },
    loading: {
      type: [Boolean, Object],
      default: function _default() {
        return false;
      }
    },
    disabled: PropTypes.looseBool,
    ghost: PropTypes.looseBool,
    block: PropTypes.looseBool,
    danger: PropTypes.looseBool,
    icon: PropTypes.VNodeChild,
    href: PropTypes.string,
    target: PropTypes.string,
    title: PropTypes.string,
    onClick: {
      type: Function
    }
  };
};

export default buttonProps;