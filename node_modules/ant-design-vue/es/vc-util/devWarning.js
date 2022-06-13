import devWarning, { resetWarned } from './warning';
export { resetWarned };
export default (function (valid, component, message) {
  devWarning(valid, "[ant-design-vue: ".concat(component, "] ").concat(message));
});