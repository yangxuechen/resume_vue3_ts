import { Prop, VueProp, InferType } from '../types';
export default function oneOfType<U extends VueProp<any> | Prop<any>, V = InferType<U>>(arr: U[]): import("../types").VueTypeDef<V>;
