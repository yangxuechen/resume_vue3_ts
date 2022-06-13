import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import { createVNode as _createVNode } from "vue";
import { defineComponent, computed } from 'vue';
import PropTypes from '../_util/vue-types';
import { tuple } from '../_util/type';
import CheckCircleFilled from '@ant-design/icons-vue/CheckCircleFilled';
import CloseCircleFilled from '@ant-design/icons-vue/CloseCircleFilled';
import ExclamationCircleFilled from '@ant-design/icons-vue/ExclamationCircleFilled';
import WarningFilled from '@ant-design/icons-vue/WarningFilled';
import noFound from './noFound';
import serverError from './serverError';
import unauthorized from './unauthorized';
import useConfigInject from '../_util/hooks/useConfigInject';
import classNames from '../_util/classNames';
export var IconMap = {
  success: CheckCircleFilled,
  error: CloseCircleFilled,
  info: ExclamationCircleFilled,
  warning: WarningFilled
};
export var ExceptionMap = {
  '404': noFound,
  '500': serverError,
  '403': unauthorized
}; // ExceptionImageMap keys

var ExceptionStatus = Object.keys(ExceptionMap);
export var resultProps = {
  prefixCls: PropTypes.string,
  icon: PropTypes.any,
  status: PropTypes.oneOf(tuple('success', 'error', 'info', 'warning', '404', '403', '500')).def('info'),
  title: PropTypes.any,
  subTitle: PropTypes.any,
  extra: PropTypes.any
};

var renderIcon = function renderIcon(prefixCls, _ref) {
  var status = _ref.status,
      icon = _ref.icon;

  if (ExceptionStatus.includes("".concat(status))) {
    var SVGComponent = ExceptionMap[status];
    return _createVNode("div", {
      "class": "".concat(prefixCls, "-icon ").concat(prefixCls, "-image")
    }, [_createVNode(SVGComponent, null, null)]);
  }

  var IconComponent = IconMap[status];

  var iconNode = icon || _createVNode(IconComponent, null, null);

  return _createVNode("div", {
    "class": "".concat(prefixCls, "-icon")
  }, [iconNode]);
};

var renderExtra = function renderExtra(prefixCls, extra) {
  return extra && _createVNode("div", {
    "class": "".concat(prefixCls, "-extra")
  }, [extra]);
};

var Result = defineComponent({
  name: 'AResult',
  props: resultProps,
  slots: ['title', 'subTitle', 'icon', 'extra'],
  setup: function setup(props, _ref2) {
    var slots = _ref2.slots;

    var _useConfigInject = useConfigInject('result', props),
        prefixCls = _useConfigInject.prefixCls,
        direction = _useConfigInject.direction;

    var className = computed(function () {
      return classNames(prefixCls.value, "".concat(prefixCls.value, "-").concat(props.status), _defineProperty({}, "".concat(prefixCls.value, "-rtl"), direction.value === 'rtl'));
    });
    return function () {
      var _a, _b, _c, _d, _e, _f, _g, _h;

      var title = (_a = props.title) !== null && _a !== void 0 ? _a : (_b = slots.title) === null || _b === void 0 ? void 0 : _b.call(slots);
      var subTitle = (_c = props.subTitle) !== null && _c !== void 0 ? _c : (_d = slots.subTitle) === null || _d === void 0 ? void 0 : _d.call(slots);
      var icon = (_e = props.icon) !== null && _e !== void 0 ? _e : (_f = slots.icon) === null || _f === void 0 ? void 0 : _f.call(slots);
      var extra = (_g = props.extra) !== null && _g !== void 0 ? _g : (_h = slots.extra) === null || _h === void 0 ? void 0 : _h.call(slots);
      var pre = prefixCls.value;
      return _createVNode("div", {
        "class": className.value
      }, [renderIcon(pre, {
        status: props.status,
        icon: icon
      }), _createVNode("div", {
        "class": "".concat(pre, "-title")
      }, [title]), subTitle && _createVNode("div", {
        "class": "".concat(pre, "-subtitle")
      }, [subTitle]), renderExtra(pre, extra), slots.default && _createVNode("div", {
        "class": "".concat(pre, "-content")
      }, [slots.default()])]);
    };
  }
});
/* add resource */

Result.PRESENTED_IMAGE_403 = ExceptionMap[403];
Result.PRESENTED_IMAGE_404 = ExceptionMap[404];
Result.PRESENTED_IMAGE_500 = ExceptionMap[500];
/* istanbul ignore next */

Result.install = function (app) {
  app.component(Result.name, Result);
  return app;
};

export default Result;