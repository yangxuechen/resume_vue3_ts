import { Prop, VueProp, InferType } from '../types';
export default function arrayOf<T extends VueProp<any> | Prop<any>>(type: T): import("../types").VueTypeDef<InferType<T>[]>;
