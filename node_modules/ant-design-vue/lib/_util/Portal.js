"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _vueTypes = _interopRequireDefault(require("./vue-types"));

var _default2 = (0, _vue.defineComponent)({
  name: 'Portal',
  props: {
    getContainer: _vueTypes.default.func.isRequired,
    children: _vueTypes.default.any.isRequired,
    didUpdate: _vueTypes.default.func
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
      (0, _vue.nextTick)(function () {
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
      return (0, _vue.createVNode)(_vue.Teleport, {
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

exports.default = _default2;