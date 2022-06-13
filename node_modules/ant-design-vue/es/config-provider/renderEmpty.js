import { createVNode as _createVNode } from "vue";
import { inject } from 'vue';
import Empty from '../empty';
import { defaultConfigProvider } from '.';

var RenderEmpty = function RenderEmpty(props) {
  var configProvider = inject('configProvider', defaultConfigProvider);

  var renderHtml = function renderHtml(componentName) {
    var getPrefixCls = configProvider.getPrefixCls;
    var prefix = getPrefixCls('empty');

    switch (componentName) {
      case 'Table':
      case 'List':
        return _createVNode(Empty, {
          "image": Empty.PRESENTED_IMAGE_SIMPLE
        }, null);

      case 'Select':
      case 'TreeSelect':
      case 'Cascader':
      case 'Transfer':
      case 'Mentions':
        return _createVNode(Empty, {
          "image": Empty.PRESENTED_IMAGE_SIMPLE,
          "class": "".concat(prefix, "-small")
        }, null);

      default:
        return _createVNode(Empty, null, null);
    }
  };

  return renderHtml(props.componentName);
};

function renderEmpty(componentName) {
  return _createVNode(RenderEmpty, {
    "componentName": componentName
  }, null);
}

export default renderEmpty;