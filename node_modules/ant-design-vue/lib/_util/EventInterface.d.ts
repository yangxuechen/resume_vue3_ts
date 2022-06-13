export declare type FocusEventHandler = (e: FocusEvent) => void;
export declare type MouseEventHandler = (e: MouseEvent) => void;
export declare type KeyboardEventHandler = (e: KeyboardEvent) => void;
export declare type ChangeEvent = Event & {
    target: {
        value?: string | undefined;
    };
};
export declare type EventHandler = (...args: any[]) => void;
