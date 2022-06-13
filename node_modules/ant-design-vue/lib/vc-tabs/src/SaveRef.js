"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vueTypes = _interopRequireDefault(require("../../_util/vue-types"));

var _default = {
  props: {
    children: _vueTypes.default.func.def(function () {
      return null;
    })
  },
  methods: {
    getRef: function getRef(name) {
      return this[name];
    },
    saveRef: function saveRef(name) {
      var _this = this;

      return function (node) {
        if (node) {
          _this[name] = node;
        }
      };
    }
  },
  render: function render() {
    var _this2 = this;

    // 每次都new一个新的function，避免子节点不能重新渲染
    var saveRef = function saveRef(name) {
      return _this2.saveRef(name);
    };

    var getRef = function getRef(name) {
      return _this2.getRef(name);
    };

    return this.children(saveRef, getRef);
  }
};
exports.default = _default;