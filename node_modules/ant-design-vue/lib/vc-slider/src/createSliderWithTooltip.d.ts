export default function createSliderWithTooltip(Component: any): {
    name: string;
    inheritAttrs: boolean;
    mixins: any[];
    props: any;
    data(): {
        visibles: {};
    };
    methods: {
        handleTooltipVisibleChange(index: any, visible: any): void;
        handleWithTooltip({ value, dragging, index, disabled, ...restProps }: {
            [x: string]: any;
            value: any;
            dragging: any;
            index: any;
            disabled: any;
        }): JSX.Element;
    };
    render(): JSX.Element;
};
