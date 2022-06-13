import { Constructor } from '../types';
export default function instanceOf<C extends Constructor>(instanceConstructor: C): import("../types").VueTypeDef<InstanceType<C>>;
