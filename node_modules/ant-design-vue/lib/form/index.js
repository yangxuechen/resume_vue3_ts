"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "formProps", {
  enumerable: true,
  get: function get() {
    return _Form.formProps;
  }
});
Object.defineProperty(exports, "FormItem", {
  enumerable: true,
  get: function get() {
    return _FormItem.default;
  }
});
Object.defineProperty(exports, "formItemProps", {
  enumerable: true,
  get: function get() {
    return _FormItem.formItemProps;
  }
});
Object.defineProperty(exports, "useForm", {
  enumerable: true,
  get: function get() {
    return _useForm.default;
  }
});
exports.default = void 0;

var _Form = _interopRequireWildcard(require("./Form"));

var _FormItem = _interopRequireWildcard(require("./FormItem"));

var _useForm = _interopRequireDefault(require("./useForm"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/* istanbul ignore next */
_Form.default.install = function (app) {
  app.component(_Form.default.name, _Form.default);
  app.component(_Form.default.Item.name, _Form.default.Item);
  return app;
};

var _default = _Form.default;
exports.default = _default;