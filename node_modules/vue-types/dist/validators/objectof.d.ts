import { Prop, VueProp, InferType } from '../types';
export default function objectOf<T extends VueProp<any> | Prop<any>>(type: T): import("../types").VueTypeDef<{
    [key: string]: InferType<T>;
}>;
