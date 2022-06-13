"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.panelProps = exports.collapseProps = void 0;

var _vueTypes = _interopRequireDefault(require("../../_util/vue-types"));

var collapseProps = function collapseProps() {
  return {
    prefixCls: _vueTypes.default.string,
    activeKey: _vueTypes.default.oneOfType([_vueTypes.default.string, _vueTypes.default.number, _vueTypes.default.arrayOf(_vueTypes.default.oneOfType([_vueTypes.default.string, _vueTypes.default.number]))]),
    defaultActiveKey: _vueTypes.default.oneOfType([_vueTypes.default.string, _vueTypes.default.number, _vueTypes.default.arrayOf(_vueTypes.default.oneOfType([_vueTypes.default.string, _vueTypes.default.number]))]),
    accordion: _vueTypes.default.looseBool,
    destroyInactivePanel: _vueTypes.default.looseBool,
    bordered: _vueTypes.default.looseBool,
    expandIcon: _vueTypes.default.func,
    openAnimation: _vueTypes.default.object,
    expandIconPosition: _vueTypes.default.oneOf(['left', 'right']),
    onChange: _vueTypes.default.func
  };
};

exports.collapseProps = collapseProps;

var panelProps = function panelProps() {
  return {
    openAnimation: _vueTypes.default.object,
    prefixCls: _vueTypes.default.string,
    header: _vueTypes.default.any,
    headerClass: _vueTypes.default.string,
    showArrow: _vueTypes.default.looseBool,
    isActive: _vueTypes.default.looseBool,
    destroyInactivePanel: _vueTypes.default.looseBool,
    disabled: _vueTypes.default.looseBool,
    accordion: _vueTypes.default.looseBool,
    forceRender: _vueTypes.default.looseBool,
    expandIcon: _vueTypes.default.func,
    extra: _vueTypes.default.any,
    panelKey: _vueTypes.default.any
  };
};

exports.panelProps = panelProps;