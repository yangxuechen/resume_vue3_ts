"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vueTypes = _interopRequireDefault(require("../_util/vue-types"));

function IDialogPropTypes() {
  return {
    keyboard: _vueTypes.default.looseBool,
    mask: _vueTypes.default.looseBool,
    afterClose: _vueTypes.default.func,
    // onClose: PropTypes. (e: SyntheticEvent<HTMLDivElement>) =>any,
    closable: _vueTypes.default.looseBool,
    maskClosable: _vueTypes.default.looseBool,
    visible: _vueTypes.default.looseBool,
    destroyOnClose: _vueTypes.default.looseBool,
    mousePosition: _vueTypes.default.shape({
      x: _vueTypes.default.number,
      y: _vueTypes.default.number
    }).loose,
    title: _vueTypes.default.any,
    footer: _vueTypes.default.any,
    transitionName: _vueTypes.default.string,
    maskTransitionName: _vueTypes.default.string,
    animation: _vueTypes.default.any,
    maskAnimation: _vueTypes.default.any,
    wrapStyle: _vueTypes.default.object,
    bodyStyle: _vueTypes.default.object,
    maskStyle: _vueTypes.default.object,
    prefixCls: _vueTypes.default.string,
    wrapClassName: _vueTypes.default.string,
    width: _vueTypes.default.oneOfType([_vueTypes.default.string, _vueTypes.default.number]),
    height: _vueTypes.default.oneOfType([_vueTypes.default.string, _vueTypes.default.number]),
    zIndex: _vueTypes.default.number,
    bodyProps: _vueTypes.default.any,
    maskProps: _vueTypes.default.any,
    wrapProps: _vueTypes.default.any,
    getContainer: _vueTypes.default.any,
    dialogStyle: _vueTypes.default.object,
    dialogClass: _vueTypes.default.string,
    closeIcon: _vueTypes.default.any,
    forceRender: _vueTypes.default.looseBool,
    getOpenCount: _vueTypes.default.func,
    // https://github.com/ant-design/ant-design/issues/19771
    // https://github.com/react-component/dialog/issues/95
    focusTriggerAfterClose: _vueTypes.default.looseBool,
    onClose: _vueTypes.default.func
  };
}

var _default = IDialogPropTypes;
exports.default = _default;