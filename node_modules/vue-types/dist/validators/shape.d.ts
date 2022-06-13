import { Prop, VueProp, VueTypeShape } from '../types';
export default function shape<T extends object>(obj: {
    [K in keyof T]: Prop<T[K]> | VueProp<T[K]>;
}): VueTypeShape<T>;
