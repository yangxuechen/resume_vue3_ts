"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _vueTypes = _interopRequireDefault(require("../_util/vue-types"));

var _button = _interopRequireDefault(require("../button"));

var _BaseMixin = _interopRequireDefault(require("../_util/BaseMixin"));

var _buttonTypes = require("../button/buttonTypes");

var _propsUtil = require("../_util/props-util");

var ActionButtonProps = {
  type: {
    type: String
  },
  actionFn: _vueTypes.default.func,
  closeModal: _vueTypes.default.func,
  autofocus: _vueTypes.default.looseBool,
  buttonProps: _vueTypes.default.object
};

var _default2 = (0, _vue.defineComponent)({
  mixins: [_BaseMixin.default],
  props: ActionButtonProps,
  setup: function setup() {
    return {
      timeoutId: undefined
    };
  },
  data: function data() {
    return {
      loading: false
    };
  },
  mounted: function mounted() {
    var _this = this;

    if (this.autofocus) {
      this.timeoutId = setTimeout(function () {
        return (0, _propsUtil.findDOMNode)(_this).focus();
      });
    }
  },
  beforeUnmount: function beforeUnmount() {
    clearTimeout(this.timeoutId);
  },
  methods: {
    onClick: function onClick() {
      var _this2 = this;

      var actionFn = this.actionFn,
          closeModal = this.closeModal;

      if (actionFn) {
        var ret;

        if (actionFn.length) {
          ret = actionFn(closeModal);
        } else {
          ret = actionFn();

          if (!ret) {
            closeModal();
          }
        }

        if (ret && ret.then) {
          this.setState({
            loading: true
          });
          ret.then(function () {
            // It's unnecessary to set loading=false, for the Modal will be unmounted after close.
            // this.setState({ loading: false });
            closeModal.apply(void 0, arguments);
          }, function (e) {
            // Emit error when catch promise reject
            // eslint-disable-next-line no-console
            console.error(e); // See: https://github.com/ant-design/ant-design/issues/6183

            _this2.setState({
              loading: false
            });
          });
        }
      } else {
        closeModal();
      }
    }
  },
  render: function render() {
    var _this3 = this;

    var type = this.type,
        loading = this.loading,
        buttonProps = this.buttonProps;
    var props = (0, _extends2.default)((0, _extends2.default)((0, _extends2.default)({}, (0, _buttonTypes.convertLegacyProps)(type)), {
      onClick: this.onClick,
      loading: loading
    }), buttonProps);
    return (0, _vue.createVNode)(_button.default, props, {
      default: function _default() {
        return [(0, _propsUtil.getSlot)(_this3)];
      }
    });
  }
});

exports.default = _default2;