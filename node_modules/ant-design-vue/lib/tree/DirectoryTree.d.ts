import type { VNode } from 'vue';
import type { CheckEvent, ExpendEvent, SelectEvent } from './Tree';
export interface DirectoryTreeState {
    _expandedKeys?: (string | number)[];
    _selectedKeys?: (string | number)[];
}
declare const _default: import("vue").DefineComponent<{
    expandAction: import("vue-types").VueTypeDef<string | boolean>;
    showLine: import("vue-types").VueTypeValidableDef<boolean>;
    multiple: import("vue-types").VueTypeValidableDef<boolean>;
    autoExpandParent: import("vue-types").VueTypeValidableDef<boolean>;
    checkStrictly: import("vue-types").VueTypeValidableDef<boolean>;
    checkable: import("vue-types").VueTypeValidableDef<boolean>;
    disabled: import("vue-types").VueTypeValidableDef<boolean>;
    defaultExpandAll: import("vue-types").VueTypeValidableDef<boolean>;
    defaultExpandParent: import("vue-types").VueTypeValidableDef<boolean>;
    defaultExpandedKeys: import("vue-types").VueTypeDef<(string | number)[]>;
    expandedKeys: import("vue-types").VueTypeDef<(string | number)[]>;
    checkedKeys: import("vue-types").VueTypeDef<(string | number)[] | {
        checked: import("vue-types/dist/types").DefaultFactory<(string | number)[]>;
        halfChecked: import("vue-types/dist/types").DefaultFactory<(string | number)[]>;
    }>;
    defaultCheckedKeys: import("vue-types").VueTypeDef<(string | number)[]>;
    selectedKeys: import("vue-types").VueTypeDef<(string | number)[]>;
    defaultSelectedKeys: import("vue-types").VueTypeDef<(string | number)[]>;
    selectable: import("vue-types").VueTypeValidableDef<boolean>;
    filterAntTreeNode: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    loadData: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    loadedKeys: import("vue-types").VueTypeDef<(string | number)[]>;
    draggable: import("vue-types").VueTypeValidableDef<boolean>;
    showIcon: import("vue-types").VueTypeValidableDef<boolean>;
    icon: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    switcherIcon: import("vue-types").VueTypeValidableDef<any>;
    prefixCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    filterTreeNode: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    openAnimation: import("vue-types").VueTypeValidableDef<any>;
    treeData: {
        type: import("vue").PropType<import("./Tree").TreeDataItem[]>;
    };
    replaceFields: import("vue-types").VueTypeValidableDef<{
        [key: string]: any;
    }> & {
        default: () => {
            [key: string]: any;
        };
    };
    blockNode: import("vue-types").VueTypeValidableDef<boolean>;
    onExpand: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    onCheck: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    onSelect: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    onClick: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    onDoubleclick: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    onDblclick: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    'onUpdate:selectedKeys': import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    'onUpdate:checkedKeys': import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    'onUpdate:expandedKeys': import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
}, {
    children: any;
    onDebounceExpand: any;
    tree: any;
    lastSelectedKey: string;
    cachedSelectedKeys: any[];
    configProvider: {
        getTargetContainer?: () => HTMLElement;
        getPopupContainer?: (triggerNode: HTMLElement) => HTMLElement;
        prefixCls?: string;
        getPrefixCls?: (suffixCls?: string, customizePrefixCls?: string) => string;
        renderEmpty?: typeof import("../config-provider/renderEmpty").default;
        transformCellText?: (tableProps: import("../table/interface").TransformCellTextProps) => any;
        csp?: unknown;
        autoInsertSpaceInButton?: boolean;
        locale?: {
            locale: string;
            Pagination?: {
                constructor: Function;
                toString: () => string;
                toLocaleString: () => string;
                valueOf: () => Object;
                hasOwnProperty: (v: PropertyKey) => boolean;
                isPrototypeOf: (v: Object) => boolean;
                propertyIsEnumerable: (v: PropertyKey) => boolean;
            };
            DatePicker?: {
                constructor: Function;
                toString: () => string;
                toLocaleString: () => string;
                valueOf: () => Object;
                hasOwnProperty: (v: PropertyKey) => boolean;
                isPrototypeOf: (v: Object) => boolean;
                propertyIsEnumerable: (v: PropertyKey) => boolean;
            };
            TimePicker?: {
                constructor: Function;
                toString: () => string;
                toLocaleString: () => string;
                valueOf: () => Object;
                hasOwnProperty: (v: PropertyKey) => boolean;
                isPrototypeOf: (v: Object) => boolean;
                propertyIsEnumerable: (v: PropertyKey) => boolean;
            };
            Calendar?: {
                constructor: Function;
                toString: () => string;
                toLocaleString: () => string;
                valueOf: () => Object;
                hasOwnProperty: (v: PropertyKey) => boolean;
                isPrototypeOf: (v: Object) => boolean;
                propertyIsEnumerable: (v: PropertyKey) => boolean;
            };
            Table?: {
                constructor: Function;
                toString: () => string;
                toLocaleString: () => string;
                valueOf: () => Object;
                hasOwnProperty: (v: PropertyKey) => boolean;
                isPrototypeOf: (v: Object) => boolean;
                propertyIsEnumerable: (v: PropertyKey) => boolean;
            };
            Modal?: {
                okText: string;
                cancelText: string;
                justOkText: string;
            };
            Popconfirm?: {
                constructor: Function;
                toString: () => string;
                toLocaleString: () => string;
                valueOf: () => Object;
                hasOwnProperty: (v: PropertyKey) => boolean;
                isPrototypeOf: (v: Object) => boolean;
                propertyIsEnumerable: (v: PropertyKey) => boolean;
            };
            Transfer?: {
                constructor: Function;
                toString: () => string;
                toLocaleString: () => string;
                valueOf: () => Object;
                hasOwnProperty: (v: PropertyKey) => boolean;
                isPrototypeOf: (v: Object) => boolean;
                propertyIsEnumerable: (v: PropertyKey) => boolean;
            };
            Select?: {
                constructor: Function;
                toString: () => string;
                toLocaleString: () => string;
                valueOf: () => Object;
                hasOwnProperty: (v: PropertyKey) => boolean;
                isPrototypeOf: (v: Object) => boolean;
                propertyIsEnumerable: (v: PropertyKey) => boolean;
            };
            Upload?: {
                constructor: Function;
                toString: () => string;
                toLocaleString: () => string;
                valueOf: () => Object;
                hasOwnProperty: (v: PropertyKey) => boolean;
                isPrototypeOf: (v: Object) => boolean;
                propertyIsEnumerable: (v: PropertyKey) => boolean;
            };
            Form?: {
                optional?: string;
                defaultValidateMessages: {
                    default?: string | (() => string);
                    required?: string | (() => string);
                    enum?: string | (() => string);
                    whitespace?: string | (() => string);
                    date?: {
                        format?: string | (() => string);
                        parse?: string | (() => string);
                        invalid?: string | (() => string);
                    };
                    types?: {
                        string?: string | (() => string);
                        method?: string | (() => string);
                        array?: string | (() => string);
                        object?: string | (() => string);
                        number?: string | (() => string);
                        date?: string | (() => string);
                        boolean?: string | (() => string);
                        integer?: string | (() => string);
                        float?: string | (() => string);
                        regexp?: string | (() => string);
                        email?: string | (() => string);
                        url?: string | (() => string);
                        hex?: string | (() => string);
                    };
                    string?: {
                        len?: string | (() => string);
                        min?: string | (() => string);
                        max?: string | (() => string);
                        range?: string | (() => string);
                    };
                    number?: {
                        len?: string | (() => string);
                        min?: string | (() => string);
                        max?: string | (() => string);
                        range?: string | (() => string);
                    };
                    array?: {
                        len?: string | (() => string);
                        min?: string | (() => string);
                        max?: string | (() => string);
                        range?: string | (() => string);
                    };
                    pattern?: {
                        mismatch?: string | (() => string);
                    };
                };
            };
            Image?: {
                preview: string;
            };
        };
        pageHeader?: {
            ghost: boolean;
        };
        componentSize?: import("../config-provider").SizeType;
        direction?: "ltr" | "rtl";
        space?: {
            size: number | import("../config-provider").SizeType;
        };
        virtual?: boolean;
        dropdownMatchSelectWidth?: boolean;
        form?: unknown;
    };
}, {
    _expandedKeys: any[] | (string | number)[];
    _selectedKeys: any[] | (string | number)[];
}, {}, {
    handleExpand(expandedKeys: (string | number)[], info: ExpendEvent): any;
    handleClick(event: MouseEvent, node: VNode): void;
    handleDoubleClick(event: MouseEvent, node: VNode): void;
    hanldeSelect(keys: (string | number)[], event: SelectEvent): void;
    setTreeRef(node: VNode): void;
    expandFolderNode(event: MouseEvent, node: {
        isLeaf: boolean;
    } & VNode): void;
    setUncontrolledState(state: unknown): void;
    handleCheck(checkedObj: (string | number)[], eventObj: CheckEvent): void;
}, {
    methods: {
        setState(state: {}, callback: any): void;
        __emit(...args: any[]): void;
    };
}, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    expandAction?: unknown;
    showLine?: unknown;
    multiple?: unknown;
    autoExpandParent?: unknown;
    checkStrictly?: unknown;
    checkable?: unknown;
    disabled?: unknown;
    defaultExpandAll?: unknown;
    defaultExpandParent?: unknown;
    defaultExpandedKeys?: unknown;
    expandedKeys?: unknown;
    checkedKeys?: unknown;
    defaultCheckedKeys?: unknown;
    selectedKeys?: unknown;
    defaultSelectedKeys?: unknown;
    selectable?: unknown;
    filterAntTreeNode?: unknown;
    loadData?: unknown;
    loadedKeys?: unknown;
    draggable?: unknown;
    showIcon?: unknown;
    icon?: unknown;
    switcherIcon?: unknown;
    prefixCls?: unknown;
    filterTreeNode?: unknown;
    openAnimation?: unknown;
    treeData?: unknown;
    replaceFields?: unknown;
    blockNode?: unknown;
    onExpand?: unknown;
    onCheck?: unknown;
    onSelect?: unknown;
    onClick?: unknown;
    onDoubleclick?: unknown;
    onDblclick?: unknown;
    'onUpdate:selectedKeys'?: unknown;
    'onUpdate:checkedKeys'?: unknown;
    'onUpdate:expandedKeys'?: unknown;
} & {
    prefixCls: string;
    replaceFields: {
        [key: string]: any;
    };
} & {
    icon?: (...args: any[]) => any;
    onClick?: (...args: any[]) => any;
    onDblclick?: (...args: any[]) => any;
    onSelect?: (...args: any[]) => any;
    multiple?: boolean;
    disabled?: boolean;
    onExpand?: (...args: any[]) => any;
    selectedKeys?: (string | number)[];
    selectable?: boolean;
    "onUpdate:selectedKeys"?: (...args: any[]) => any;
    showIcon?: boolean;
    draggable?: boolean;
    loadData?: (...args: any[]) => any;
    openAnimation?: any;
    checkedKeys?: (string | number)[] | {
        checked: import("vue-types/dist/types").DefaultFactory<(string | number)[]>;
        halfChecked: import("vue-types/dist/types").DefaultFactory<(string | number)[]>;
    };
    treeData?: import("./Tree").TreeDataItem[];
    expandedKeys?: (string | number)[];
    autoExpandParent?: boolean;
    loadedKeys?: (string | number)[];
    checkable?: boolean;
    blockNode?: boolean;
    showLine?: boolean;
    checkStrictly?: boolean;
    defaultExpandAll?: boolean;
    defaultExpandParent?: boolean;
    defaultExpandedKeys?: (string | number)[];
    defaultCheckedKeys?: (string | number)[];
    defaultSelectedKeys?: (string | number)[];
    filterAntTreeNode?: (...args: any[]) => any;
    switcherIcon?: any;
    filterTreeNode?: (...args: any[]) => any;
    onCheck?: (...args: any[]) => any;
    onDoubleclick?: (...args: any[]) => any;
    "onUpdate:checkedKeys"?: (...args: any[]) => any;
    "onUpdate:expandedKeys"?: (...args: any[]) => any;
    expandAction?: string | boolean;
}>, {
    icon: (...args: any[]) => any;
    prefixCls: string;
    onClick: (...args: any[]) => any;
    onDblclick: (...args: any[]) => any;
    onSelect: (...args: any[]) => any;
    onExpand: (...args: any[]) => any;
    "onUpdate:selectedKeys": (...args: any[]) => any;
    loadData: (...args: any[]) => any;
    filterAntTreeNode: (...args: any[]) => any;
    filterTreeNode: (...args: any[]) => any;
    replaceFields: {
        [key: string]: any;
    };
    onCheck: (...args: any[]) => any;
    onDoubleclick: (...args: any[]) => any;
    "onUpdate:checkedKeys": (...args: any[]) => any;
    "onUpdate:expandedKeys": (...args: any[]) => any;
}>;
export default _default;
