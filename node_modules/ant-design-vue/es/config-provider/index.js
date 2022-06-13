import _extends from "@babel/runtime/helpers/esm/extends";
import { createVNode as _createVNode } from "vue";
import { reactive, provide, defineComponent, watch } from 'vue';
import PropTypes from '../_util/vue-types';
import defaultRenderEmpty from './renderEmpty';
import LocaleProvider, { ANT_MARK } from '../locale-provider';
import LocaleReceiver from '../locale-provider/LocaleReceiver';
import { withInstall } from '../_util/type';
export var configConsumerProps = ['getTargetContainer', 'getPopupContainer', 'rootPrefixCls', 'getPrefixCls', 'renderEmpty', 'csp', 'autoInsertSpaceInButton', 'locale', 'pageHeader'];
export var configProviderProps = {
  getTargetContainer: {
    type: Function
  },
  getPopupContainer: {
    type: Function
  },
  prefixCls: String,
  getPrefixCls: {
    type: Function
  },
  renderEmpty: {
    type: Function
  },
  transformCellText: {
    type: Function
  },
  csp: {
    type: Object
  },
  autoInsertSpaceInButton: PropTypes.looseBool,
  locale: {
    type: Object
  },
  pageHeader: {
    type: Object
  },
  componentSize: {
    type: String
  },
  direction: {
    type: String
  },
  space: {
    type: Object
  },
  virtual: PropTypes.looseBool,
  dropdownMatchSelectWidth: PropTypes.looseBool,
  form: {
    type: Object
  }
};
var ConfigProvider = defineComponent({
  name: 'AConfigProvider',
  props: configProviderProps,
  setup: function setup(props, _ref) {
    var slots = _ref.slots;

    var getPrefixCls = function getPrefixCls(suffixCls, customizePrefixCls) {
      var _props$prefixCls = props.prefixCls,
          prefixCls = _props$prefixCls === void 0 ? 'ant' : _props$prefixCls;
      if (customizePrefixCls) return customizePrefixCls;
      return suffixCls ? "".concat(prefixCls, "-").concat(suffixCls) : prefixCls;
    };

    var renderEmptyComponent = function renderEmptyComponent(name) {
      var renderEmpty = props.renderEmpty || slots.renderEmpty || defaultRenderEmpty;
      return renderEmpty(name);
    };

    var getPrefixClsWrapper = function getPrefixClsWrapper(suffixCls, customizePrefixCls) {
      var prefixCls = props.prefixCls;
      if (customizePrefixCls) return customizePrefixCls;
      var mergedPrefixCls = prefixCls || getPrefixCls('');
      return suffixCls ? "".concat(mergedPrefixCls, "-").concat(suffixCls) : mergedPrefixCls;
    };

    var configProvider = reactive(_extends(_extends({}, props), {
      getPrefixCls: getPrefixClsWrapper,
      renderEmpty: renderEmptyComponent
    }));
    Object.keys(props).forEach(function (key) {
      watch(function () {
        return props[key];
      }, function () {
        configProvider[key] = props[key];
      });
    });
    provide('configProvider', configProvider);

    var renderProvider = function renderProvider(legacyLocale) {
      var _a;

      return _createVNode(LocaleProvider, {
        "locale": props.locale || legacyLocale,
        "ANT_MARK__": ANT_MARK
      }, {
        default: function _default() {
          return [(_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots)];
        }
      });
    };

    return function () {
      return _createVNode(LocaleReceiver, {
        "children": function children(_, __, legacyLocale) {
          return renderProvider(legacyLocale);
        }
      }, null);
    };
  }
});
export var defaultConfigProvider = reactive({
  getPrefixCls: function getPrefixCls(suffixCls, customizePrefixCls) {
    if (customizePrefixCls) return customizePrefixCls;
    return suffixCls ? "ant-".concat(suffixCls) : 'ant';
  },
  renderEmpty: defaultRenderEmpty,
  direction: 'ltr'
});
export default withInstall(ConfigProvider);