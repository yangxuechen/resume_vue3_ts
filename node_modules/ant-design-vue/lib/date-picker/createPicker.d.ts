import type { DefineComponent } from 'vue';
import moment from 'moment';
export interface PickerProps {
    value?: moment.Moment;
    open?: boolean;
    prefixCls?: string;
}
export interface PickerState {
    sOpen?: boolean;
    sValue?: moment.Moment | null;
    showDate?: moment.Moment | null;
}
export default function createPicker<P>(TheCalendar: DefineComponent<P>, props: any, name: string): any;
