import { AllowedComponentProps } from 'vue';
import { ComponentCustomProps } from 'vue';
import { ComponentOptionsMixin } from 'vue';
import { DefineComponent } from 'vue';
import Sortable from 'sortablejs';
import { VNodeProps } from 'vue';

declare interface OpenObject {
    [key: string]: any;
}

export declare const VueDraggableNext: DefineComponent<    {
options: ObjectConstructor;
list: {
type: ArrayConstructor;
required: boolean;
default: null;
};
noTransitionOnDrag: {
type: BooleanConstructor;
default: boolean;
};
clone: {
type: FunctionConstructor;
default: (original: any) => any;
};
tag: {
type: StringConstructor;
default: string;
};
move: {
type: FunctionConstructor;
default: null;
};
componentData: {
type: ObjectConstructor;
required: boolean;
default: null;
};
component: {
type: StringConstructor;
default: null;
};
modelValue: {
type: ArrayConstructor;
required: boolean;
default: null;
};
}, unknown, {
transitionMode: boolean;
noneFunctionalComponentMode: boolean;
headerOffset: number;
footerOffset: number;
_sortable: Sortable;
visibleIndexes: number[];
context: OpenObject | null;
}, {
realList(): OpenObject[] | OpenObject;
}, {
getTag(): any;
updateOptions(newOptionValue: OpenObject): void;
getChildrenNodes(): any;
computeIndexes(): void;
getUnderlyingVm(htmlElt: HTMLElement): {
index: number;
element: any;
} | null;
emitChanges(evt: OpenObject): void;
alterList(onList: any): void;
spliceList(): void;
updatePosition(oldIndex: number, newIndex: number): void;
getVmIndex(domIndex: number): number;
getComponent(): any;
resetTransitionData(index: number): void;
onDragStart(evt: OpenObject): void;
onDragAdd(evt: OpenObject): void;
onDragRemove(evt: OpenObject): void;
onDragUpdate(evt: any): void;
updateProperty(evt: any, propertyName: any): void;
onDragMove(evt: any, originalEvent: any): any;
onDragEnd(): void;
getTrargetedComponent(htmElement: any): any;
getRelatedContextFromMoveEvent({ to, related }: any): any;
computeFutureIndex(relatedContext: any, evt: any): any;
}, ComponentOptionsMixin, ComponentOptionsMixin, string[], string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<{
options?: unknown;
list?: unknown;
noTransitionOnDrag?: unknown;
clone?: unknown;
tag?: unknown;
move?: unknown;
componentData?: unknown;
component?: unknown;
modelValue?: unknown;
} & {
move: Function;
list: unknown[];
noTransitionOnDrag: boolean;
clone: Function;
tag: string;
componentData: Record<string, any>;
component: string;
modelValue: unknown[];
} & {
options?: Record<string, any> | undefined;
}> & {}, {
move: Function;
list: unknown[];
noTransitionOnDrag: boolean;
clone: Function;
tag: string;
componentData: Record<string, any>;
component: string;
modelValue: unknown[];
}>;

export { }
