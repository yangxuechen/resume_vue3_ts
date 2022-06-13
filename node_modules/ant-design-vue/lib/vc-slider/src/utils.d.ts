export function isEventFromHandle(e: any, handles: any): boolean;
export function isValueOutOfRange(value: any, { min, max }: {
    min: any;
    max: any;
}): boolean;
export function isNotTouchEvent(e: any): boolean;
export function getClosestPoint(val: any, { marks, step, min, max }: {
    marks: any;
    step: any;
    min: any;
    max: any;
}): number;
export function getPrecision(step: any): number;
export function getMousePosition(vertical: any, e: any): number;
export function getTouchPosition(vertical: any, e: any): number;
export function getHandleCenterPosition(vertical: any, handle: any): any;
export function ensureValueInRange(val: any, { max, min }: {
    max: any;
    min: any;
}): any;
export function ensureValuePrecision(val: any, props: any): number;
export function pauseEvent(e: any): void;
export function calculateNextValue(func: any, value: any, props: any): any;
export function getKeyboardValueMutator(e: any, vertical: any, reverse: any): (value: any, props: any) => any;
