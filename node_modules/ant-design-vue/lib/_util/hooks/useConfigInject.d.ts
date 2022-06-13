import type { RequiredMark } from '../../form/Form';
import type { ComputedRef, UnwrapRef, VNodeChild } from 'vue';
import type { ConfigProviderProps, Direction, SizeType } from '../../config-provider';
declare const _default: (name: string, props: Record<any, any>) => {
    configProvider: UnwrapRef<ConfigProviderProps>;
    prefixCls: ComputedRef<string>;
    direction: ComputedRef<Direction>;
    size: ComputedRef<SizeType>;
    getTargetContainer: ComputedRef<() => HTMLElement>;
    space: ComputedRef<{
        size: SizeType | number;
    }>;
    pageHeader: ComputedRef<{
        ghost: boolean;
    }>;
    form?: ComputedRef<{
        requiredMark?: RequiredMark;
    }>;
    autoInsertSpaceInButton: ComputedRef<Boolean>;
    renderEmpty?: ComputedRef<(componentName?: string) => VNodeChild | JSX.Element>;
};
export default _default;
