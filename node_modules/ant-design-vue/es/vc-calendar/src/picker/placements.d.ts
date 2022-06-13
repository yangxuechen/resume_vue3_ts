export default placements;
declare namespace placements {
    namespace bottomLeft {
        export const points: string[];
        export { autoAdjustOverflow as overflow };
        export const offset: number[];
        export { targetOffset };
    }
    namespace bottomRight {
        const points_1: string[];
        export { points_1 as points };
        export { autoAdjustOverflow as overflow };
        const offset_1: number[];
        export { offset_1 as offset };
        export { targetOffset };
    }
    namespace topRight {
        const points_2: string[];
        export { points_2 as points };
        export { autoAdjustOverflow as overflow };
        const offset_2: number[];
        export { offset_2 as offset };
        export { targetOffset };
    }
    namespace topLeft {
        const points_3: string[];
        export { points_3 as points };
        export { autoAdjustOverflow as overflow };
        const offset_3: number[];
        export { offset_3 as offset };
        export { targetOffset };
    }
}
declare namespace autoAdjustOverflow {
    const adjustX: number;
    const adjustY: number;
}
declare const targetOffset: number[];
