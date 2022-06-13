import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _extends from "@babel/runtime/helpers/esm/extends";
import { createVNode as _createVNode, resolveDirective as _resolveDirective } from "vue";
import { computed, defineComponent, ref } from 'vue';
import omit from 'omit.js';
import classNames from '../_util/classNames';
import RcSelect, { Option, OptGroup, BaseProps } from '../vc-select';
import getIcons from './utils/iconUtil';
import PropTypes from '../_util/vue-types';
import { tuple } from '../_util/type';
import useConfigInject from '../_util/hooks/useConfigInject';
export var SelectProps = function SelectProps() {
  return _extends(_extends({}, omit(BaseProps(), ['inputIcon', 'mode', 'getInputElement', 'backfill', 'class', 'style'])), {
    value: {
      type: [Array, Object, String, Number]
    },
    defaultValue: {
      type: [Array, Object, String, Number]
    },
    notFoundContent: PropTypes.VNodeChild,
    suffixIcon: PropTypes.VNodeChild,
    itemIcon: PropTypes.VNodeChild,
    size: PropTypes.oneOf(tuple('small', 'middle', 'large', 'default')),
    mode: PropTypes.oneOf(tuple('multiple', 'tags', 'SECRET_COMBOBOX_MODE_DO_NOT_USE')),
    bordered: PropTypes.looseBool.def(true),
    transitionName: PropTypes.string.def('slide-up'),
    choiceTransitionName: PropTypes.string.def('')
  });
};
var Select = defineComponent({
  name: 'ASelect',
  Option: Option,
  OptGroup: OptGroup,
  inheritAttrs: false,
  props: SelectProps(),
  SECRET_COMBOBOX_MODE_DO_NOT_USE: 'SECRET_COMBOBOX_MODE_DO_NOT_USE',
  emits: ['change', 'update:value'],
  slots: ['notFoundContent', 'suffixIcon', 'itemIcon', 'removeIcon', 'clearIcon', 'dropdownRender', 'option'],
  setup: function setup(props, _ref) {
    var attrs = _ref.attrs,
        emit = _ref.emit,
        slots = _ref.slots,
        expose = _ref.expose;
    var selectRef = ref(null);

    var focus = function focus() {
      if (selectRef.value) {
        selectRef.value.focus();
      }
    };

    var blur = function blur() {
      if (selectRef.value) {
        selectRef.value.blur();
      }
    };

    var mode = computed(function () {
      var mode = props.mode;

      if (mode === 'combobox') {
        return undefined;
      }

      if (mode === Select.SECRET_COMBOBOX_MODE_DO_NOT_USE) {
        return 'combobox';
      }

      return mode;
    });

    var _useConfigInject = useConfigInject('select', props),
        prefixCls = _useConfigInject.prefixCls,
        direction = _useConfigInject.direction,
        configProvider = _useConfigInject.configProvider;

    var mergedClassName = computed(function () {
      var _classNames;

      return classNames((_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls.value, "-lg"), props.size === 'large'), _defineProperty(_classNames, "".concat(prefixCls.value, "-sm"), props.size === 'small'), _defineProperty(_classNames, "".concat(prefixCls.value, "-rtl"), direction.value === 'rtl'), _defineProperty(_classNames, "".concat(prefixCls.value, "-borderless"), !props.bordered), _classNames));
    });

    var triggerChange = function triggerChange() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      emit('update:value', args[0]);
      emit.apply(void 0, ['change'].concat(args));
    };

    expose({
      blur: blur,
      focus: focus
    });
    return function () {
      var _a;

      var notFoundContent = props.notFoundContent,
          _props$listHeight = props.listHeight,
          listHeight = _props$listHeight === void 0 ? 256 : _props$listHeight,
          _props$listItemHeight = props.listItemHeight,
          listItemHeight = _props$listItemHeight === void 0 ? 24 : _props$listItemHeight,
          getPopupContainer = props.getPopupContainer,
          dropdownClassName = props.dropdownClassName,
          virtual = props.virtual,
          dropdownMatchSelectWidth = props.dropdownMatchSelectWidth;
      var renderEmpty = configProvider.renderEmpty,
          getContextPopupContainer = configProvider.getPopupContainer;
      var isMultiple = mode.value === 'multiple' || mode.value === 'tags'; // ===================== Empty =====================

      var mergedNotFound;

      if (notFoundContent !== undefined) {
        mergedNotFound = notFoundContent;
      } else if (slots.notFoundContent) {
        mergedNotFound = slots.notFoundContent();
      } else if (mode.value === 'combobox') {
        mergedNotFound = null;
      } else {
        mergedNotFound = renderEmpty('Select');
      } // ===================== Icons =====================


      var _getIcons = getIcons(_extends(_extends({}, props), {
        multiple: isMultiple,
        prefixCls: prefixCls.value
      }), slots),
          suffixIcon = _getIcons.suffixIcon,
          itemIcon = _getIcons.itemIcon,
          removeIcon = _getIcons.removeIcon,
          clearIcon = _getIcons.clearIcon;

      var selectProps = omit(props, ['prefixCls', 'suffixIcon', 'itemIcon', 'removeIcon', 'clearIcon', 'size', 'bordered']);
      var rcSelectRtlDropDownClassName = classNames(dropdownClassName, _defineProperty({}, "".concat(prefixCls.value, "-dropdown-").concat(direction.value), direction.value === 'rtl'));
      return _createVNode(RcSelect, _objectSpread(_objectSpread(_objectSpread({
        "ref": selectRef,
        "virtual": virtual,
        "dropdownMatchSelectWidth": dropdownMatchSelectWidth
      }, selectProps), attrs), {}, {
        "listHeight": listHeight,
        "listItemHeight": listItemHeight,
        "mode": mode.value,
        "prefixCls": prefixCls.value,
        "direction": direction.value,
        "inputIcon": suffixIcon,
        "menuItemSelectedIcon": itemIcon,
        "removeIcon": removeIcon,
        "clearIcon": clearIcon,
        "notFoundContent": mergedNotFound,
        "class": [mergedClassName.value, attrs.class],
        "getPopupContainer": getPopupContainer || getContextPopupContainer,
        "dropdownClassName": rcSelectRtlDropDownClassName,
        "onChange": triggerChange,
        "dropdownRender": selectProps.dropdownRender || slots.dropdownRender
      }), {
        default: function _default() {
          return [(_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots)];
        },
        option: slots.option
      });
    };
  }
});
/* istanbul ignore next */

Select.install = function (app) {
  app.component(Select.name, Select);
  app.component(Select.Option.displayName, Select.Option);
  app.component(Select.OptGroup.displayName, Select.OptGroup);
  return app;
};

export var SelectOption = Select.Option;
export var SelectOptGroup = Select.OptGroup;
export default Select;