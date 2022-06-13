import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _extends from "@babel/runtime/helpers/esm/extends";
import { createVNode as _createVNode } from "vue";

var __rest = this && this.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

import { nextTick, defineComponent } from 'vue';
import classNames from '../../_util/classNames';
import PropTypes, { withUndefined } from '../../_util/vue-types';
import BaseMixin from '../../_util/BaseMixin';
import { getOptionProps, hasProp, initDefaultProps } from '../../_util/props-util';
export default defineComponent({
  name: 'Checkbox',
  mixins: [BaseMixin],
  inheritAttrs: false,
  props: initDefaultProps({
    prefixCls: PropTypes.string,
    name: PropTypes.string,
    id: PropTypes.string,
    type: PropTypes.string,
    defaultChecked: withUndefined(PropTypes.oneOfType([PropTypes.number, PropTypes.looseBool])),
    checked: withUndefined(PropTypes.oneOfType([PropTypes.number, PropTypes.looseBool])),
    disabled: PropTypes.looseBool,
    // onFocus: PropTypes.func,
    // onBlur: PropTypes.func,
    // onChange: PropTypes.func,
    // onClick: PropTypes.func,
    tabindex: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    readonly: PropTypes.looseBool,
    autofocus: PropTypes.looseBool,
    value: PropTypes.any
  }, {
    prefixCls: 'rc-checkbox',
    type: 'checkbox',
    defaultChecked: false
  }),
  data: function data() {
    var checked = hasProp(this, 'checked') ? this.checked : this.defaultChecked;
    return {
      sChecked: checked
    };
  },
  watch: {
    checked: function checked(val) {
      this.sChecked = val;
    }
  },
  mounted: function mounted() {
    var _this = this;

    nextTick(function () {
      if (process.env.NODE_ENV === 'test') {
        if (_this.autofocus) {
          _this.$refs.input && _this.$refs.input.focus();
        }
      }
    });
  },
  methods: {
    focus: function focus() {
      this.$refs.input.focus();
    },
    blur: function blur() {
      this.$refs.input.blur();
    },
    handleChange: function handleChange(e) {
      var props = getOptionProps(this);

      if (props.disabled) {
        return;
      }

      if (!('checked' in props)) {
        this.sChecked = e.target.checked;
      }

      e.shiftKey = this.eventShiftKey;
      var eventObj = {
        target: _extends(_extends({}, props), {
          checked: e.target.checked
        }),
        stopPropagation: function stopPropagation() {
          e.stopPropagation();
        },
        preventDefault: function preventDefault() {
          e.preventDefault();
        },
        nativeEvent: e
      }; // fix https://github.com/vueComponent/ant-design-vue/issues/3047
      // 受控模式下维持现有状态

      if ('checked' in props) {
        this.$refs.input.checked = props.checked;
      }

      this.__emit('change', eventObj);

      this.eventShiftKey = false;
    },
    onClick: function onClick(e) {
      this.__emit('click', e); // onChange没能获取到shiftKey，使用onClick hack


      this.eventShiftKey = e.shiftKey;
    }
  },
  render: function render() {
    var _classNames;

    var _a = getOptionProps(this),
        prefixCls = _a.prefixCls,
        name = _a.name,
        id = _a.id,
        type = _a.type,
        disabled = _a.disabled,
        readonly = _a.readonly,
        tabindex = _a.tabindex,
        autofocus = _a.autofocus,
        value = _a.value,
        others = __rest(_a, ["prefixCls", "name", "id", "type", "disabled", "readonly", "tabindex", "autofocus", "value"]);

    var _this$$attrs = this.$attrs,
        className = _this$$attrs.class,
        onFocus = _this$$attrs.onFocus,
        onBlur = _this$$attrs.onBlur;
    var globalProps = Object.keys(_extends(_extends({}, others), this.$attrs)).reduce(function (prev, key) {
      if (key.substr(0, 5) === 'aria-' || key.substr(0, 5) === 'data-' || key === 'role') {
        prev[key] = others[key];
      }

      return prev;
    }, {});
    var sChecked = this.sChecked;
    var classString = classNames(prefixCls, className, (_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-checked"), sChecked), _defineProperty(_classNames, "".concat(prefixCls, "-disabled"), disabled), _classNames));

    var inputProps = _extends(_extends({
      name: name,
      id: id,
      type: type,
      readonly: readonly,
      disabled: disabled,
      tabindex: tabindex,
      class: "".concat(prefixCls, "-input"),
      checked: !!sChecked,
      autofocus: autofocus,
      value: value
    }, globalProps), {
      onChange: this.handleChange,
      onClick: this.onClick,
      onFocus: onFocus,
      onBlur: onBlur
    });

    return _createVNode("span", {
      "class": classString
    }, [_createVNode("input", _objectSpread({
      "ref": "input"
    }, inputProps), null), _createVNode("span", {
      "class": "".concat(prefixCls, "-inner")
    }, null)]);
  }
});