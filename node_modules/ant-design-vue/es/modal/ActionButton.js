import _extends from "@babel/runtime/helpers/esm/extends";
import { createVNode as _createVNode } from "vue";
import { defineComponent } from 'vue';
import PropTypes from '../_util/vue-types';
import Button from '../button';
import BaseMixin from '../_util/BaseMixin';
import { convertLegacyProps } from '../button/buttonTypes';
import { getSlot, findDOMNode } from '../_util/props-util';
var ActionButtonProps = {
  type: {
    type: String
  },
  actionFn: PropTypes.func,
  closeModal: PropTypes.func,
  autofocus: PropTypes.looseBool,
  buttonProps: PropTypes.object
};
export default defineComponent({
  mixins: [BaseMixin],
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
        return findDOMNode(_this).focus();
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

    var props = _extends(_extends(_extends({}, convertLegacyProps(type)), {
      onClick: this.onClick,
      loading: loading
    }), buttonProps);

    return _createVNode(Button, props, {
      default: function _default() {
        return [getSlot(_this3)];
      }
    });
  }
});