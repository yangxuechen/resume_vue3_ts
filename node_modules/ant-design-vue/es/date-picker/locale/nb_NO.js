import _extends from "@babel/runtime/helpers/esm/extends";
import CalendarLocale from '../../vc-calendar/src/locale/nb_NO';
import TimePickerLocale from '../../time-picker/locale/nb_NO'; // Merge into a locale object

var locale = {
  lang: _extends({
    placeholder: 'Velg dato',
    rangePlaceholder: ['Startdato', 'Sluttdato']
  }, CalendarLocale),
  timePickerLocale: _extends({}, TimePickerLocale)
}; // All settings at:
// https://github.com/vueComponent/ant-design-vue/blob/master/components/date-picker/locale/example.json

export default locale;