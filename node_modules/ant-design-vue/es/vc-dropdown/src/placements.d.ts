export namespace placements {
    namespace topLeft {
        export const points: string[];
        export { autoAdjustOverflow as overflow };
        export const offset: number[];
        export { targetOffset };
    }
    namespace topCenter {
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
    namespace bottomLeft {
        const points_3: string[];
        export { points_3 as points };
        export { autoAdjustOverflow as overflow };
        const offset_3: number[];
        export { offset_3 as offset };
        export { targetOffset };
    }
    namespace bottomCenter {
        const points_4: string[];
        export { points_4 as points };
        export { autoAdjustOverflow as overflow };
        const offset_4: number[];
        export { offset_4 as offset };
        export { targetOffset };
    }
    namespace bottomRight {
        const points_5: string[];
        export { points_5 as points };
        export { autoAdjustOverflow as overflow };
        const offset_5: number[];
        export { offset_5 as offset };
        export { targetOffset };
    }
}
export default placements;
declare namespace autoAdjustOverflow {
    const adjustX: number;
    const adjustY: number;
}
declare const targetOffset: number[];
