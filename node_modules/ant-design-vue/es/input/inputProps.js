import PropTypes from '../_util/vue-types';
export default {
  prefixCls: PropTypes.string,
  inputPrefixCls: PropTypes.string,
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  placeholder: {
    type: [String, Number]
  },
  type: PropTypes.string.def('text'),
  name: PropTypes.string,
  size: {
    type: String
  },
  disabled: PropTypes.looseBool,
  readonly: PropTypes.looseBool,
  addonBefore: PropTypes.VNodeChild,
  addonAfter: PropTypes.VNodeChild,
  prefix: PropTypes.VNodeChild,
  suffix: PropTypes.VNodeChild,
  autofocus: PropTypes.looseBool,
  allowClear: PropTypes.looseBool,
  lazy: PropTypes.looseBool.def(true),
  maxlength: PropTypes.number,
  loading: PropTypes.looseBool,
  onPressEnter: PropTypes.func,
  onKeydown: PropTypes.func,
  onKeyup: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onInput: PropTypes.func,
  'onUpdate:value': PropTypes.func
};