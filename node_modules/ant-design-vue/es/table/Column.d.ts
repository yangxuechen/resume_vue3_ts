declare const _default: import("vue").DefineComponent<{
    title: import("vue-types").VueTypeValidableDef<import("../_util/type").VueNode>;
    key: import("vue-types").VueTypeDef<string | number>;
    dataIndex: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    customRender: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    customCell: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    customHeaderCell: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    align: import("vue-types").VueTypeDef<"left" | "right" | "center">;
    ellipsis: import("vue-types").VueTypeValidableDef<boolean>;
    filters: import("vue-types").VueTypeDef<{
        text: (string | ((props: Record<string, unknown>) => string)) & string;
        value: (string | ((props: Record<string, unknown>) => string)) & string;
        children: unknown[] | (() => unknown[]);
    }[]>;
    onFilter: {
        type: import("vue").PropType<(value: any, record: any) => boolean>;
    };
    filterMultiple: import("vue-types").VueTypeValidableDef<boolean>;
    filterDropdown: import("vue-types").VueTypeValidableDef<any>;
    filterDropdownVisible: import("vue-types").VueTypeValidableDef<boolean>;
    onFilterDropdownVisibleChange: {
        type: import("vue").PropType<(visible: boolean) => void>;
    };
    sorter: import("vue-types").VueTypeDef<any>;
    defaultSortOrder: import("vue-types").VueTypeDef<"descend" | "ascend">;
    colSpan: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
    width: import("vue-types").VueTypeDef<string | number>;
    className: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    fixed: import("vue-types").VueTypeDef<boolean | "left" | "right">;
    filterIcon: import("vue-types").VueTypeValidableDef<any>;
    filteredValue: import("vue-types").VueTypeValidableDef<unknown[]> & {
        default: () => unknown[];
    };
    filtered: import("vue-types").VueTypeValidableDef<boolean>;
    defaultFilteredValue: import("vue-types").VueTypeValidableDef<unknown[]> & {
        default: () => unknown[];
    };
    sortOrder: import("vue-types").VueTypeDef<boolean | "descend" | "ascend">;
    sortDirections: import("vue-types").VueTypeValidableDef<unknown[]> & {
        default: () => unknown[];
    };
}, unknown, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    title?: unknown;
    key?: unknown;
    dataIndex?: unknown;
    customRender?: unknown;
    customCell?: unknown;
    customHeaderCell?: unknown;
    align?: unknown;
    ellipsis?: unknown;
    filters?: unknown;
    onFilter?: unknown;
    filterMultiple?: unknown;
    filterDropdown?: unknown;
    filterDropdownVisible?: unknown;
    onFilterDropdownVisibleChange?: unknown;
    sorter?: unknown;
    defaultSortOrder?: unknown;
    colSpan?: unknown;
    width?: unknown;
    className?: unknown;
    fixed?: unknown;
    filterIcon?: unknown;
    filteredValue?: unknown;
    filtered?: unknown;
    defaultFilteredValue?: unknown;
    sortOrder?: unknown;
    sortDirections?: unknown;
} & {
    className: string;
    dataIndex: string;
    colSpan: number;
    filteredValue: unknown[];
    defaultFilteredValue: unknown[];
    sortDirections: unknown[];
} & {
    title?: import("../_util/type").VueNode;
    key?: string | number;
    fixed?: boolean | "left" | "right";
    ellipsis?: boolean;
    width?: string | number;
    align?: "left" | "right" | "center";
    customRender?: (...args: any[]) => any;
    customCell?: (...args: any[]) => any;
    customHeaderCell?: (...args: any[]) => any;
    filters?: {
        text: (string | ((props: Record<string, unknown>) => string)) & string;
        value: (string | ((props: Record<string, unknown>) => string)) & string;
        children: unknown[] | (() => unknown[]);
    }[];
    onFilter?: (value: any, record: any) => boolean;
    filterMultiple?: boolean;
    filterDropdown?: any;
    filterDropdownVisible?: boolean;
    onFilterDropdownVisibleChange?: (visible: boolean) => void;
    sorter?: any;
    defaultSortOrder?: "descend" | "ascend";
    filterIcon?: any;
    filtered?: boolean;
    sortOrder?: boolean | "descend" | "ascend";
}>, {
    className: string;
    dataIndex: string;
    customRender: (...args: any[]) => any;
    customCell: (...args: any[]) => any;
    customHeaderCell: (...args: any[]) => any;
    colSpan: number;
    filteredValue: unknown[];
    defaultFilteredValue: unknown[];
    sortDirections: unknown[];
}>;
export default _default;
