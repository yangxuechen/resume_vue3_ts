import type { Plugin } from 'vue';
import DirectoryTree from './DirectoryTree';
export declare const TreeNode: any;
export { DirectoryTree };
declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
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
        }> & Omit<Readonly<{
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
        }> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "icon" | "prefixCls" | "onClick" | "onDblclick" | "onSelect" | "onExpand" | "onUpdate:selectedKeys" | "loadData" | "filterAntTreeNode" | "filterTreeNode" | "replaceFields" | "onCheck" | "onDoubleclick" | "onUpdate:checkedKeys" | "onUpdate:expandedKeys">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: import("vue").Slot;
        }>;
        $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>;
        $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>;
        $emit: (event: string, ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<{
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
        }>, {
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
            renderSwitcherIcon(prefixCls: string, switcherIcon: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>, { isLeaf, loading, expanded }: {
                isLeaf: any;
                loading: any;
                expanded: any;
            }): import("vue").VNode<any, any, {
                [key: string]: any;
            }>;
            updateTreeData(treeData: import("./Tree").TreeDataItem[]): ({
                icon: any;
                switcherIcon: any;
                title: any;
                dataRef: import("./Tree").TreeDataItem;
                key: any;
                class: string;
                style: import("vue").CSSProperties;
                isLeaf?: boolean;
                selectable?: boolean;
                children?: import("./Tree").TreeDataItem[];
                disableCheckbox?: boolean;
                disabled?: boolean;
                checkable?: boolean;
            } | {
                children: any;
                icon: any;
                switcherIcon: any;
                title: any;
                dataRef: import("./Tree").TreeDataItem;
                key: any;
                class: string;
                style: import("vue").CSSProperties;
                isLeaf?: boolean;
                selectable?: boolean;
                disableCheckbox?: boolean;
                disabled?: boolean;
                checkable?: boolean;
            })[];
            setTreeRef(node: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>): void;
            handleCheck(checkedObj: (string | number)[], eventObj: import("./Tree").CheckEvent): void;
            handleExpand(expandedKeys: (string | number)[], eventObj: import("./Tree").ExpendEvent): void;
            handleSelect(selectedKeys: (string | number)[], eventObj: import("./Tree").SelectEvent): void;
        }, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
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
        }> & {
            beforeCreate?: (() => void) | (() => void)[];
            created?: (() => void) | (() => void)[];
            beforeMount?: (() => void) | (() => void)[];
            mounted?: (() => void) | (() => void)[];
            beforeUpdate?: (() => void) | (() => void)[];
            updated?: (() => void) | (() => void)[];
            activated?: (() => void) | (() => void)[];
            deactivated?: (() => void) | (() => void)[];
            beforeDestroy?: (() => void) | (() => void)[];
            beforeUnmount?: (() => void) | (() => void)[];
            destroyed?: (() => void) | (() => void)[];
            unmounted?: (() => void) | (() => void)[];
            renderTracked?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[];
            renderTriggered?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[];
            errorCaptured?: ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>, info: string) => boolean | void)[];
        };
        $forceUpdate: () => void;
        $nextTick: typeof import("vue").nextTick;
        $watch(source: string | Function, cb: Function, options?: import("vue").WatchOptions<boolean>): import("vue").WatchStopHandle;
    } & Readonly<{
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
    }> & import("vue").ShallowUnwrapRef<{
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
    }> & {} & {} & {
        renderSwitcherIcon(prefixCls: string, switcherIcon: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>, { isLeaf, loading, expanded }: {
            isLeaf: any;
            loading: any;
            expanded: any;
        }): import("vue").VNode<any, any, {
            [key: string]: any;
        }>;
        updateTreeData(treeData: import("./Tree").TreeDataItem[]): ({
            icon: any;
            switcherIcon: any;
            title: any;
            dataRef: import("./Tree").TreeDataItem;
            key: any;
            class: string;
            style: import("vue").CSSProperties;
            isLeaf?: boolean;
            selectable?: boolean;
            children?: import("./Tree").TreeDataItem[];
            disableCheckbox?: boolean;
            disabled?: boolean;
            checkable?: boolean;
        } | {
            children: any;
            icon: any;
            switcherIcon: any;
            title: any;
            dataRef: import("./Tree").TreeDataItem;
            key: any;
            class: string;
            style: import("vue").CSSProperties;
            isLeaf?: boolean;
            selectable?: boolean;
            disableCheckbox?: boolean;
            disabled?: boolean;
            checkable?: boolean;
        })[];
        setTreeRef(node: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>): void;
        handleCheck(checkedObj: (string | number)[], eventObj: import("./Tree").CheckEvent): void;
        handleExpand(expandedKeys: (string | number)[], eventObj: import("./Tree").ExpendEvent): void;
        handleSelect(selectedKeys: (string | number)[], eventObj: import("./Tree").SelectEvent): void;
    } & import("vue").ComponentCustomProperties;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<{
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
}>, {
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
    renderSwitcherIcon(prefixCls: string, switcherIcon: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>, { isLeaf, loading, expanded }: {
        isLeaf: any;
        loading: any;
        expanded: any;
    }): import("vue").VNode<any, any, {
        [key: string]: any;
    }>;
    updateTreeData(treeData: import("./Tree").TreeDataItem[]): ({
        icon: any;
        switcherIcon: any;
        title: any;
        dataRef: import("./Tree").TreeDataItem;
        key: any;
        class: string;
        style: import("vue").CSSProperties;
        isLeaf?: boolean;
        selectable?: boolean;
        children?: import("./Tree").TreeDataItem[];
        disableCheckbox?: boolean;
        disabled?: boolean;
        checkable?: boolean;
    } | {
        children: any;
        icon: any;
        switcherIcon: any;
        title: any;
        dataRef: import("./Tree").TreeDataItem;
        key: any;
        class: string;
        style: import("vue").CSSProperties;
        isLeaf?: boolean;
        selectable?: boolean;
        disableCheckbox?: boolean;
        disabled?: boolean;
        checkable?: boolean;
    })[];
    setTreeRef(node: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>): void;
    handleCheck(checkedObj: (string | number)[], eventObj: import("./Tree").CheckEvent): void;
    handleExpand(expandedKeys: (string | number)[], eventObj: import("./Tree").ExpendEvent): void;
    handleSelect(selectedKeys: (string | number)[], eventObj: import("./Tree").SelectEvent): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
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
}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Plugin & {
    readonly TreeNode: any;
    readonly DirectoryTree: typeof DirectoryTree;
};
export default _default;
