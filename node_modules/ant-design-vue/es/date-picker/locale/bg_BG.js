import _extends from "@babel/runtime/helpers/esm/extends";
import CalendarLocale from '../../vc-calendar/src/locale/bg_BG';
import TimePickerLocale from '../../time-picker/locale/bg_BG'; // Merge into a locale object

var locale = {
  lang: _extends({
    placeholder: 'Избор на дата',
    rangePlaceholder: ['Начална', 'Крайна']
  }, CalendarLocale),
  timePickerLocale: _extends({}, TimePickerLocale)
}; // All settings at:
// https://github.com/vueComponent/ant-design-vue/blob/master/components/date-picker/locale/example.json

export default locale;