import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _extends from "@babel/runtime/helpers/esm/extends";
import { createVNode as _createVNode } from "vue";
import { computed, defineComponent } from 'vue';
import classNames from '../_util/classNames';
import PropTypes from '../_util/vue-types';
import { tuple } from '../_util/type';
import initDefaultProps from '../_util/props-util/initDefaultProps';
import useConfigInject from '../_util/hooks/useConfigInject';
import Element, { skeletonElementProps } from './Element';
export var avatarProps = initDefaultProps(_extends(_extends({}, skeletonElementProps()), {
  shape: PropTypes.oneOf(tuple('circle', 'square'))
}), {
  size: 'large'
});
var SkeletonAvatar = defineComponent({
  name: 'ASkeletonAvatar',
  props: avatarProps,
  setup: function setup(props) {
    var _useConfigInject = useConfigInject('skeleton', props),
        prefixCls = _useConfigInject.prefixCls;

    var cls = computed(function () {
      return classNames(prefixCls.value, "".concat(prefixCls.value, "-element"), _defineProperty({}, "".concat(prefixCls.value, "-active"), props.active));
    });
    return function () {
      return _createVNode("div", {
        "class": cls.value
      }, [_createVNode(Element, _objectSpread(_objectSpread({}, props), {}, {
        "prefixCls": "".concat(prefixCls.value, "-avatar")
      }), null)]);
    };
  }
});
export default SkeletonAvatar;