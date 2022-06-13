import { createVNode as _createVNode } from "vue";
import PropTypes from './vue-types';
import { defineComponent, nextTick, Teleport } from 'vue';
export default defineComponent({
  name: 'Portal',
  props: {
    getContainer: PropTypes.func.isRequired,
    children: PropTypes.any.isRequired,
    didUpdate: PropTypes.func
  },
  data: function data() {
    this._container = null;
    return {};
  },
  mounted: function mounted() {
    this.createContainer();
  },
  updated: function updated() {
    var _this = this;

    var didUpdate = this.$props.didUpdate;

    if (didUpdate) {
      nextTick(function () {
        didUpdate(_this.$props);
      });
    }
  },
  beforeUnmount: function beforeUnmount() {
    this.removeContainer();
  },
  methods: {
    createContainer: function createContainer() {
      this._container = this.$props.getContainer();
      this.$forceUpdate();
    },
    removeContainer: function removeContainer() {
      if (this._container && this._container.parentNode) {
        this._container.parentNode.removeChild(this._container);
      }
    }
  },
  render: function render() {
    var _this2 = this;

    if (this._container) {
      return _createVNode(Teleport, {
        "to": this._container
      }, {
        default: function _default() {
          return [_this2.$props.children];
        }
      });
    }

    return null;
  }
});