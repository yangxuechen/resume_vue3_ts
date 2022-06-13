import _extends from "@babel/runtime/helpers/esm/extends";

/**
 * Created by Andrey Gayvoronsky on 13/04/16.
 */
import CalendarLocale from '../../vc-calendar/src/locale/ru_RU';
import TimePickerLocale from '../../time-picker/locale/ru_RU';
var locale = {
  lang: _extends({
    placeholder: 'Выберите дату',
    rangePlaceholder: ['Начальная дата', 'Конечная дата']
  }, CalendarLocale),
  timePickerLocale: _extends({}, TimePickerLocale)
}; // All settings at:
// https://github.com/vueComponent/ant-design-vue/blob/master/components/date-picker/locale/example.json

export default locale;