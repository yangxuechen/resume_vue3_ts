export interface StickyOffsets {
    left: readonly number[];
    right: readonly number[];
    isSticky?: boolean;
}
export declare type FixedType = 'left' | 'right' | boolean;
export interface FixedInfo {
    fixLeft: number | false;
    fixRight: number | false;
    lastFixLeft: boolean;
    firstFixRight: boolean;
    lastFixRight: boolean;
    firstFixLeft: boolean;
    isSticky: boolean;
}
export declare function getCellFixedInfo(colStart: number, colEnd: number, columns: readonly {
    fixed?: FixedType;
}[], stickyOffsets: StickyOffsets, direction: 'ltr' | 'rtl'): FixedInfo;
