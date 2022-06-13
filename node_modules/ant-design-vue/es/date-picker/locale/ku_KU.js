import _extends from "@babel/runtime/helpers/esm/extends";
import CalendarLocale from '../../vc-calendar/src/locale/ku_KU';
import TimePickerLocale from '../../time-picker/locale/ku_KU'; // Merge into a locale object

var locale = {
  lang: _extends({
    placeholder: 'هەڵبژاردنی ڕێکەوت',
    rangePlaceholder: ['دەستپێکی ڕێکەوت', 'کوتایی ڕێکەوت']
  }, CalendarLocale),
  timePickerLocale: _extends({}, TimePickerLocale)
}; // All settings at:
// https://github.com/vueComponent/ant-design-vue/blob/master/components/date-picker/locale/example.json

export default locale;