import type { SkeletonElementProps } from './Element';
export interface SkeletonInputProps extends Omit<SkeletonElementProps, 'size' | 'shape'> {
    size?: 'large' | 'small' | 'default';
}
declare const SkeletonInput: import("vue").DefineComponent<any, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    [x: string]: any;
}> | Readonly<{
    [x: string]: unknown;
} & {
    [x: string]: any;
} & {
    [x: number]: any;
}>, {} | {
    [x: string]: any;
}>;
export default SkeletonInput;
