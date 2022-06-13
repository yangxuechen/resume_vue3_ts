import type { VNode, PropType, CSSProperties } from 'vue';
export interface TreeDataItem {
    key?: string | number;
    title?: string;
    isLeaf?: boolean;
    selectable?: boolean;
    children?: TreeDataItem[];
    disableCheckbox?: boolean;
    disabled?: boolean;
    class?: string;
    style?: CSSProperties;
    checkable?: boolean;
    icon?: VNode;
    slots?: Record<string, string>;
    switcherIcon?: VNode;
    [key: string]: any;
}
interface DefaultEvent {
    nativeEvent: MouseEvent;
    node: Record<string, any>;
}
export interface CheckEvent extends DefaultEvent {
    checked: boolean;
    checkedNodes: Array<Record<string, any>>;
    checkedNodesPositions: {
        node: Record<string, any>;
        pos: string | number;
    }[];
    event: string;
    halfCheckedKeys: (string | number)[];
}
export interface ExpendEvent extends DefaultEvent {
    expanded: boolean;
}
export interface SelectEvent extends DefaultEvent {
    event: string;
    selected: boolean;
    selectedNodes: Array<Record<string, any>>;
}
export interface TreeDragEvent {
    event: DragEvent;
    expandedKeys: (string | number)[];
    node: Record<string, any>;
}
export interface DropEvent {
    dragNode: Record<string, any>;
    dragNodesKeys: (string | number)[];
    dropPosition: number;
    dropToGap: boolean;
    event: DragEvent;
    node: Record<string, any>;
}
declare function TreeProps(): {
    showLine: import("vue-types").VueTypeValidableDef<boolean>;
    /** 是否支持多选 */
    multiple: import("vue-types").VueTypeValidableDef<boolean>;
    /** 是否自动展开父节点 */
    autoExpandParent: import("vue-types").VueTypeValidableDef<boolean>;
    /** checkable状态下节点选择完全受控（父子节点选中状态不再关联）*/
    checkStrictly: import("vue-types").VueTypeValidableDef<boolean>;
    /** 是否支持选中 */
    checkable: import("vue-types").VueTypeValidableDef<boolean>;
    /** 是否禁用树 */
    disabled: import("vue-types").VueTypeValidableDef<boolean>;
    /** 默认展开所有树节点 */
    defaultExpandAll: import("vue-types").VueTypeValidableDef<boolean>;
    /** 默认展开对应树节点 */
    defaultExpandParent: import("vue-types").VueTypeValidableDef<boolean>;
    /** 默认展开指定的树节点 */
    defaultExpandedKeys: import("vue-types").VueTypeDef<(string | number)[]>;
    /** （受控）展开指定的树节点 */
    expandedKeys: import("vue-types").VueTypeDef<(string | number)[]>;
    /** （受控）选中复选框的树节点 */
    checkedKeys: import("vue-types").VueTypeDef<(string | number)[] | {
        checked: import("vue-types/dist/types").DefaultFactory<(string | number)[]>;
        halfChecked: import("vue-types/dist/types").DefaultFactory<(string | number)[]>;
    }>;
    /** 默认选中复选框的树节点 */
    defaultCheckedKeys: import("vue-types").VueTypeDef<(string | number)[]>;
    /** （受控）设置选中的树节点 */
    selectedKeys: import("vue-types").VueTypeDef<(string | number)[]>;
    /** 默认选中的树节点 */
    defaultSelectedKeys: import("vue-types").VueTypeDef<(string | number)[]>;
    selectable: import("vue-types").VueTypeValidableDef<boolean>;
    /** filter some AntTreeNodes as you need. it should return true */
    filterAntTreeNode: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    /** 异步加载数据 */
    loadData: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    loadedKeys: import("vue-types").VueTypeDef<(string | number)[]>;
    /** 响应右键点击 */
    /** 设置节点可拖拽（IE>8）*/
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
        type: PropType<TreeDataItem[]>;
    };
    /**
     * @default{title,key,children}
     * 替换treeNode中 title,key,children字段为treeData中对应的字段
     */
    replaceFields: import("vue-types").VueTypeValidableDef<{
        [key: string]: any;
    }> & {
        default: () => {
            [key: string]: any;
        };
    };
    blockNode: import("vue-types").VueTypeValidableDef<boolean>;
    /** 展开/收起节点时触发 */
    onExpand: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    /** 点击复选框触发 */
    onCheck: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    /** 点击树节点触发 */
    onSelect: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    /** 单击树节点触发 */
    onClick: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    /** 双击树节点触发 */
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
};
export { TreeProps };
declare const _default: import("vue").DefineComponent<{
    showLine: import("vue-types").VueTypeValidableDef<boolean>;
    /** 是否支持多选 */
    multiple: import("vue-types").VueTypeValidableDef<boolean>;
    /** 是否自动展开父节点 */
    autoExpandParent: import("vue-types").VueTypeValidableDef<boolean>;
    /** checkable状态下节点选择完全受控（父子节点选中状态不再关联）*/
    checkStrictly: import("vue-types").VueTypeValidableDef<boolean>;
    /** 是否支持选中 */
    checkable: import("vue-types").VueTypeValidableDef<boolean>;
    /** 是否禁用树 */
    disabled: import("vue-types").VueTypeValidableDef<boolean>;
    /** 默认展开所有树节点 */
    defaultExpandAll: import("vue-types").VueTypeValidableDef<boolean>;
    /** 默认展开对应树节点 */
    defaultExpandParent: import("vue-types").VueTypeValidableDef<boolean>;
    /** 默认展开指定的树节点 */
    defaultExpandedKeys: import("vue-types").VueTypeDef<(string | number)[]>;
    /** （受控）展开指定的树节点 */
    expandedKeys: import("vue-types").VueTypeDef<(string | number)[]>;
    /** （受控）选中复选框的树节点 */
    checkedKeys: import("vue-types").VueTypeDef<(string | number)[] | {
        checked: import("vue-types/dist/types").DefaultFactory<(string | number)[]>;
        halfChecked: import("vue-types/dist/types").DefaultFactory<(string | number)[]>;
    }>;
    /** 默认选中复选框的树节点 */
    defaultCheckedKeys: import("vue-types").VueTypeDef<(string | number)[]>;
    /** （受控）设置选中的树节点 */
    selectedKeys: import("vue-types").VueTypeDef<(string | number)[]>;
    /** 默认选中的树节点 */
    defaultSelectedKeys: import("vue-types").VueTypeDef<(string | number)[]>;
    selectable: import("vue-types").VueTypeValidableDef<boolean>;
    /** filter some AntTreeNodes as you need. it should return true */
    filterAntTreeNode: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    /** 异步加载数据 */
    loadData: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    loadedKeys: import("vue-types").VueTypeDef<(string | number)[]>;
    /** 响应右键点击 */
    /** 设置节点可拖拽（IE>8）*/
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
        type: PropType<TreeDataItem[]>;
    };
    /**
     * @default{title,key,children}
     * 替换treeNode中 title,key,children字段为treeData中对应的字段
     */
    replaceFields: import("vue-types").VueTypeValidableDef<{
        [key: string]: any;
    }> & {
        default: () => {
            [key: string]: any;
        };
    };
    blockNode: import("vue-types").VueTypeValidableDef<boolean>;
    /** 展开/收起节点时触发 */
    onExpand: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    /** 点击复选框触发 */
    onCheck: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    /** 点击树节点触发 */
    onSelect: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    /** 单击树节点触发 */
    onClick: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    /** 双击树节点触发 */
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
    tree: any;
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
}, unknown, {}, {
    renderSwitcherIcon(prefixCls: string, switcherIcon: VNode, { isLeaf, loading, expanded }: {
        isLeaf: any;
        loading: any;
        expanded: any;
    }): VNode<any, any, {
        [key: string]: any;
    }>;
    updateTreeData(treeData: TreeDataItem[]): ({
        icon: any;
        switcherIcon: any;
        title: any;
        dataRef: TreeDataItem;
        key: any;
        class: string;
        style: CSSProperties;
        isLeaf?: boolean;
        selectable?: boolean;
        children?: TreeDataItem[];
        disableCheckbox?: boolean;
        disabled?: boolean;
        checkable?: boolean;
    } | {
        children: any;
        icon: any;
        switcherIcon: any;
        title: any;
        dataRef: TreeDataItem;
        key: any;
        class: string;
        style: CSSProperties;
        isLeaf?: boolean;
        selectable?: boolean;
        disableCheckbox?: boolean;
        disabled?: boolean;
        checkable?: boolean;
    })[];
    setTreeRef(node: VNode): void;
    handleCheck(checkedObj: (number | string)[], eventObj: CheckEvent): void;
    handleExpand(expandedKeys: (number | string)[], eventObj: ExpendEvent): void;
    handleSelect(selectedKeys: (number | string)[], eventObj: SelectEvent): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
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
    treeData?: TreeDataItem[];
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
