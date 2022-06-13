export default animation;
declare function animation(prefixCls: any): {
    onEnter(node: any, done: any): {
        stop(): void;
    };
    onLeave(node: any, done: any): {
        stop(): void;
    };
};
