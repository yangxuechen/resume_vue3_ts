import { computed, inject } from 'vue';
import { defaultConfigProvider } from '../../config-provider';
export default (function (name, props) {
  var configProvider = inject('configProvider', defaultConfigProvider);
  var prefixCls = computed(function () {
    return configProvider.getPrefixCls(name, props.prefixCls);
  });
  return prefixCls;
});