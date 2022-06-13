import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import { createVNode as _createVNode } from "vue";
import PropTypes, { withUndefined } from '../_util/vue-types';
import { getOptionProps, getComponent } from '../_util/props-util';
import BaseMixin from '../_util/BaseMixin';
import { defineComponent } from 'vue';

function isString(str) {
  return typeof str === 'string';
}

function noop() {}

export default defineComponent({
  name: 'Step',
  mixins: [BaseMixin],
  props: {
    prefixCls: PropTypes.string,
    wrapperStyle: PropTypes.object,
    itemWidth: PropTypes.string,
    active: PropTypes.looseBool,
    disabled: PropTypes.looseBool,
    status: PropTypes.string,
    iconPrefix: PropTypes.string,
    icon: PropTypes.any,
    adjustMarginRight: PropTypes.string,
    stepNumber: PropTypes.string,
    stepIndex: PropTypes.number,
    description: PropTypes.any,
    title: PropTypes.any,
    subTitle: PropTypes.any,
    progressDot: withUndefined(PropTypes.oneOfType([PropTypes.looseBool, PropTypes.func])),
    tailContent: PropTypes.any,
    icons: PropTypes.shape({
      finish: PropTypes.any,
      error: PropTypes.any
    }).loose,
    onClick: PropTypes.func,
    onStepClick: PropTypes.func
  },
  methods: {
    onItemClick: function onItemClick() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      this.__emit.apply(this, ['click'].concat(args));

      this.__emit('stepClick', this.stepIndex);
    },
    renderIconNode: function renderIconNode() {
      var _iconClassName;

      var _getOptionProps = getOptionProps(this),
          prefixCls = _getOptionProps.prefixCls,
          stepNumber = _getOptionProps.stepNumber,
          status = _getOptionProps.status,
          iconPrefix = _getOptionProps.iconPrefix,
          icons = _getOptionProps.icons,
          progressDot = _getOptionProps.progressDot;

      var icon = getComponent(this, 'icon');
      var title = getComponent(this, 'title');
      var description = getComponent(this, 'description');
      var iconNode;
      var iconClassName = (_iconClassName = {}, _defineProperty(_iconClassName, "".concat(prefixCls, "-icon"), true), _defineProperty(_iconClassName, "".concat(iconPrefix, "icon"), true), _defineProperty(_iconClassName, "".concat(iconPrefix, "icon-").concat(icon), icon && isString(icon)), _defineProperty(_iconClassName, "".concat(iconPrefix, "icon-check"), !icon && status === 'finish' && icons && !icons.finish), _defineProperty(_iconClassName, "".concat(iconPrefix, "icon-close"), !icon && status === 'error' && icons && !icons.error), _iconClassName);

      var iconDot = _createVNode("span", {
        "class": "".concat(prefixCls, "-icon-dot")
      }, null); // `progressDot` enjoy the highest priority


      if (progressDot) {
        if (typeof progressDot === 'function') {
          iconNode = _createVNode("span", {
            "class": "".concat(prefixCls, "-icon")
          }, [progressDot({
            index: stepNumber - 1,
            status: status,
            title: title,
            description: description,
            prefixCls: prefixCls
          })]);
        } else {
          iconNode = _createVNode("span", {
            "class": "".concat(prefixCls, "-icon")
          }, [iconDot]);
        }
      } else if (icon && !isString(icon)) {
        iconNode = _createVNode("span", {
          "class": "".concat(prefixCls, "-icon")
        }, [icon]);
      } else if (icons && icons.finish && status === 'finish') {
        iconNode = _createVNode("span", {
          "class": "".concat(prefixCls, "-icon")
        }, [icons.finish]);
      } else if (icons && icons.error && status === 'error') {
        iconNode = _createVNode("span", {
          "class": "".concat(prefixCls, "-icon")
        }, [icons.error]);
      } else if (icon || status === 'finish' || status === 'error') {
        iconNode = _createVNode("span", {
          "class": iconClassName
        }, null);
      } else {
        iconNode = _createVNode("span", {
          "class": "".concat(prefixCls, "-icon")
        }, [stepNumber]);
      }

      return iconNode;
    }
  },
  render: function render() {
    var _classString;

    var _getOptionProps2 = getOptionProps(this),
        prefixCls = _getOptionProps2.prefixCls,
        itemWidth = _getOptionProps2.itemWidth,
        active = _getOptionProps2.active,
        _getOptionProps2$stat = _getOptionProps2.status,
        status = _getOptionProps2$stat === void 0 ? 'wait' : _getOptionProps2$stat,
        tailContent = _getOptionProps2.tailContent,
        adjustMarginRight = _getOptionProps2.adjustMarginRight,
        disabled = _getOptionProps2.disabled,
        onClick = _getOptionProps2.onClick,
        onStepClick = _getOptionProps2.onStepClick;

    var title = getComponent(this, 'title');
    var subTitle = getComponent(this, 'subTitle');
    var description = getComponent(this, 'description');
    var classString = (_classString = {}, _defineProperty(_classString, "".concat(prefixCls, "-item"), true), _defineProperty(_classString, "".concat(prefixCls, "-item-").concat(status), true), _defineProperty(_classString, "".concat(prefixCls, "-item-custom"), getComponent(this, 'icon')), _defineProperty(_classString, "".concat(prefixCls, "-item-active"), active), _defineProperty(_classString, "".concat(prefixCls, "-item-disabled"), disabled === true), _classString);
    var stepProps = {
      class: classString
    };
    var stepItemStyle = {};

    if (itemWidth) {
      stepItemStyle.width = itemWidth;
    }

    if (adjustMarginRight) {
      stepItemStyle.marginRight = adjustMarginRight;
    }

    var accessibilityProps = {
      onClick: onClick || noop
    };

    if (onStepClick && !disabled) {
      accessibilityProps.role = 'button';
      accessibilityProps.tabindex = 0;
      accessibilityProps.onClick = this.onItemClick;
    }

    return _createVNode("div", _objectSpread(_objectSpread({}, stepProps), {}, {
      "style": stepItemStyle
    }), [_createVNode("div", _objectSpread(_objectSpread({}, accessibilityProps), {}, {
      "class": "".concat(prefixCls, "-item-container")
    }), [_createVNode("div", {
      "class": "".concat(prefixCls, "-item-tail")
    }, [tailContent]), _createVNode("div", {
      "class": "".concat(prefixCls, "-item-icon")
    }, [this.renderIconNode()]), _createVNode("div", {
      "class": "".concat(prefixCls, "-item-content")
    }, [_createVNode("div", {
      "class": "".concat(prefixCls, "-item-title")
    }, [title, subTitle && _createVNode("div", {
      "title": subTitle,
      "class": "".concat(prefixCls, "-item-subtitle")
    }, [subTitle])]), description && _createVNode("div", {
      "class": "".concat(prefixCls, "-item-description")
    }, [description])])])]);
  }
});