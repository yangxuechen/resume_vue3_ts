interface PlacementsConfig {
    arrowPointAtCenter: boolean;
    arrowWidth?: number;
    verticalArrowShift?: number;
    horizontalArrowShift?: number;
    autoAdjustOverflow?: boolean | Object;
}
export declare function getOverflowOptions(autoAdjustOverflow: boolean | Object): {
    adjustX: number;
    adjustY: number;
};
export default function getPlacements(config: PlacementsConfig): {
    left: {
        points: string[];
        offset: number[];
    };
    right: {
        points: string[];
        offset: number[];
    };
    top: {
        points: string[];
        offset: number[];
    };
    bottom: {
        points: string[];
        offset: number[];
    };
    topLeft: {
        points: string[];
        offset: number[];
    };
    leftTop: {
        points: string[];
        offset: number[];
    };
    topRight: {
        points: string[];
        offset: number[];
    };
    rightTop: {
        points: string[];
        offset: number[];
    };
    bottomRight: {
        points: string[];
        offset: number[];
    };
    rightBottom: {
        points: string[];
        offset: number[];
    };
    bottomLeft: {
        points: string[];
        offset: number[];
    };
    leftBottom: {
        points: string[];
        offset: number[];
    };
};
export {};
