import _extends from "@babel/runtime/helpers/esm/extends";
import CalendarLocale from '../../vc-calendar/src/locale/ca_ES';
import TimePickerLocale from '../../time-picker/locale/ca_ES'; // Merge into a locale object

var locale = {
  lang: _extends({
    placeholder: 'Seleccionar data',
    rangePlaceholder: ['Data inicial', 'Data final']
  }, CalendarLocale),
  timePickerLocale: _extends({}, TimePickerLocale)
}; // All settings at:
// https://github.com/vueComponent/ant-design-vue/blob/master/components/date-picker/locale/example.json

export default locale;