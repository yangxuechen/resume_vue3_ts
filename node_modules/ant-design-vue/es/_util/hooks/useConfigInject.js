import { computed, inject } from 'vue';
import { defaultConfigProvider } from '../../config-provider';
export default (function (name, props) {
  var configProvider = inject('configProvider', defaultConfigProvider);
  var prefixCls = computed(function () {
    return configProvider.getPrefixCls(name, props.prefixCls);
  });
  var direction = computed(function () {
    return configProvider.direction;
  });
  var autoInsertSpaceInButton = computed(function () {
    return configProvider.autoInsertSpaceInButton;
  });
  var renderEmpty = computed(function () {
    return configProvider.renderEmpty;
  });
  var space = computed(function () {
    return configProvider.space;
  });
  var pageHeader = computed(function () {
    return configProvider.pageHeader;
  });
  var form = computed(function () {
    return configProvider.form;
  });
  var size = computed(function () {
    return props.size || configProvider.componentSize;
  });
  var getTargetContainer = computed(function () {
    return props.getTargetContainer;
  });
  return {
    configProvider: configProvider,
    prefixCls: prefixCls,
    direction: direction,
    size: size,
    getTargetContainer: getTargetContainer,
    space: space,
    pageHeader: pageHeader,
    form: form,
    autoInsertSpaceInButton: autoInsertSpaceInButton,
    renderEmpty: renderEmpty
  };
});