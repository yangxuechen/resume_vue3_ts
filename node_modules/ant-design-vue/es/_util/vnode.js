import _typeof from "@babel/runtime/helpers/esm/typeof";
import _extends from "@babel/runtime/helpers/esm/extends";
import { filterEmpty } from './props-util';
import { cloneVNode } from 'vue';
import warning from './warning';
export function cloneElement(vnode) {
  var nodeProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var override = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  var mergeRef = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var ele = vnode;

  if (Array.isArray(vnode)) {
    ele = filterEmpty(vnode)[0];
  }

  if (!ele) {
    return null;
  }

  var node = cloneVNode(ele, nodeProps, mergeRef); // cloneVNode内部是合并属性，这里改成覆盖属性

  node.props = override ? _extends(_extends({}, node.props), nodeProps) : node.props;
  warning(_typeof(node.props.class) !== 'object', 'class must be string');
  return node;
}
export function cloneVNodes(vnodes) {
  var nodeProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var override = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  return vnodes.map(function (vnode) {
    return cloneElement(vnode, nodeProps, override);
  });
}