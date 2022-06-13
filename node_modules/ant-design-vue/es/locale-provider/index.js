import _extends from "@babel/runtime/helpers/esm/extends";
import { provide, defineComponent, reactive, watch, onUnmounted } from 'vue';
import PropTypes from '../_util/vue-types';
import moment from 'moment';
import interopDefault from '../_util/interopDefault';
import { changeConfirmLocale } from '../modal/locale';
import warning from '../_util/warning';
import { withInstall } from '../_util/type';
export var ANT_MARK = 'internalMark';

function setMomentLocale(locale) {
  if (locale && locale.locale) {
    interopDefault(moment).locale(locale.locale);
  } else {
    interopDefault(moment).locale('en');
  }
}

var LocaleProvider = defineComponent({
  name: 'ALocaleProvider',
  props: {
    locale: {
      type: Object
    },
    ANT_MARK__: PropTypes.string
  },
  setup: function setup(props, _ref) {
    var slots = _ref.slots;
    warning(props.ANT_MARK__ === ANT_MARK, 'LocaleProvider', '`LocaleProvider` is deprecated. Please use `locale` with `ConfigProvider` instead');
    var state = reactive({
      antLocale: _extends(_extends({}, props.locale), {
        exist: true
      }),
      ANT_MARK__: ANT_MARK
    });
    provide('localeData', state);
    watch(function () {
      return props.locale;
    }, function (val) {
      state.antLocale = _extends(_extends({}, val), {
        exist: true
      });
      setMomentLocale(val);
      changeConfirmLocale(val && val.Modal);
    }, {
      immediate: true
    });
    onUnmounted(function () {
      changeConfirmLocale();
    });
    return function () {
      var _a;

      return (_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots);
    };
  }
});
/* istanbul ignore next */

LocaleProvider.install = function (app) {
  app.component(LocaleProvider.name, LocaleProvider);
  return app;
};

export default withInstall(LocaleProvider);