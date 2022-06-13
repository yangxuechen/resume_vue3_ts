export default function useColumnManager(columns: any): {
    groupedColumns: import("vue").ComputedRef<any[]>;
    isAnyColumnsFixed: import("vue").ComputedRef<any>;
    isAnyColumnsLeftFixed: import("vue").ComputedRef<any>;
    isAnyColumnsRightFixed: import("vue").ComputedRef<any>;
    leftColumns: import("vue").ComputedRef<any[]>;
    rightColumns: import("vue").ComputedRef<any[]>;
    leafColumns: import("vue").ComputedRef<any[]>;
    leftLeafColumns: import("vue").ComputedRef<any[]>;
    rightLeafColumns: import("vue").ComputedRef<any[]>;
};
