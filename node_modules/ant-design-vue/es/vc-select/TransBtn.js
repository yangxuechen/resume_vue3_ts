import { createVNode as _createVNode } from "vue";
import PropTypes from '../_util/vue-types';

var TransBtn = function TransBtn(props, _ref) {
  var slots = _ref.slots;

  var _a;

  var className = props.class,
      customizeIcon = props.customizeIcon,
      customizeIconProps = props.customizeIconProps,
      _onMousedown = props.onMousedown,
      onClick = props.onClick;
  var icon;

  if (typeof customizeIcon === 'function') {
    icon = customizeIcon(customizeIconProps);
  } else {
    icon = customizeIcon;
  }

  return _createVNode("span", {
    "class": className,
    "onMousedown": function onMousedown(event) {
      event.preventDefault();

      if (_onMousedown) {
        _onMousedown(event);
      }
    },
    "style": {
      userSelect: 'none',
      WebkitUserSelect: 'none'
    },
    "unselectable": "on",
    "onClick": onClick,
    "aria-hidden": true
  }, [icon !== undefined ? icon : _createVNode("span", {
    "class": className.split(/\s+/).map(function (cls) {
      return "".concat(cls, "-icon");
    })
  }, [(_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots)])]);
};

TransBtn.inheritAttrs = false;
TransBtn.displayName = 'TransBtn';
TransBtn.props = {
  class: PropTypes.string,
  customizeIcon: PropTypes.any,
  customizeIconProps: PropTypes.any,
  onMousedown: PropTypes.func,
  onClick: PropTypes.func
};
export default TransBtn;