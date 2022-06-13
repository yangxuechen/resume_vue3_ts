export declare const CarouselProps: {
    effect: import("vue-types").VueTypeDef<"fade" | "scrollx">;
    dots: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
    vertical: import("vue-types").VueTypeValidableDef<boolean>;
    autoplay: import("vue-types").VueTypeValidableDef<boolean>;
    easing: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    beforeChange: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    afterChange: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    prefixCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    accessibility: import("vue-types").VueTypeValidableDef<boolean>;
    nextArrow: import("vue-types").VueTypeValidableDef<import("../_util/type").VueNode>;
    prevArrow: import("vue-types").VueTypeValidableDef<import("../_util/type").VueNode>;
    pauseOnHover: import("vue-types").VueTypeValidableDef<boolean>;
    adaptiveHeight: import("vue-types").VueTypeValidableDef<boolean>;
    arrows: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
    autoplaySpeed: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
    centerMode: import("vue-types").VueTypeValidableDef<boolean>;
    centerPadding: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    cssEase: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    dotsClass: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    draggable: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
    fade: import("vue-types").VueTypeValidableDef<boolean>;
    focusOnSelect: import("vue-types").VueTypeValidableDef<boolean>;
    infinite: import("vue-types").VueTypeValidableDef<boolean>;
    initialSlide: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
    lazyLoad: import("vue-types").VueTypeValidableDef<boolean>;
    rtl: import("vue-types").VueTypeValidableDef<boolean>;
    slide: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    slidesToShow: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
    slidesToScroll: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
    speed: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
    swipe: import("vue-types").VueTypeValidableDef<boolean>;
    swipeToSlide: import("vue-types").VueTypeValidableDef<boolean>;
    touchMove: import("vue-types").VueTypeValidableDef<boolean>;
    touchThreshold: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
    variableWidth: import("vue-types").VueTypeValidableDef<boolean>;
    useCSS: import("vue-types").VueTypeValidableDef<boolean>;
    slickGoTo: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
    responsive: import("vue-types").VueTypeValidableDef<unknown[]> & {
        default: () => unknown[];
    };
    dotPosition: import("vue-types").VueTypeDef<"left" | "right" | "bottom" | "top">;
    verticalSwiping: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
};
declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            prefixCls: string;
            responsive: unknown[];
            draggable: boolean;
            dots: boolean;
            easing: string;
            beforeChange: (...args: any[]) => any;
            afterChange: (...args: any[]) => any;
            arrows: boolean;
            autoplaySpeed: number;
            centerPadding: string;
            cssEase: string;
            dotsClass: string;
            initialSlide: number;
            slide: string;
            slidesToShow: number;
            slidesToScroll: number;
            speed: number;
            touchThreshold: number;
            slickGoTo: number;
            verticalSwiping: boolean;
        }> & Omit<Readonly<{
            effect?: unknown;
            dots?: unknown;
            vertical?: unknown;
            autoplay?: unknown;
            easing?: unknown;
            beforeChange?: unknown;
            afterChange?: unknown;
            prefixCls?: unknown;
            accessibility?: unknown;
            nextArrow?: unknown;
            prevArrow?: unknown;
            pauseOnHover?: unknown;
            adaptiveHeight?: unknown;
            arrows?: unknown;
            autoplaySpeed?: unknown;
            centerMode?: unknown;
            centerPadding?: unknown;
            cssEase?: unknown;
            dotsClass?: unknown;
            draggable?: unknown;
            fade?: unknown;
            focusOnSelect?: unknown;
            infinite?: unknown;
            initialSlide?: unknown;
            lazyLoad?: unknown;
            rtl?: unknown;
            slide?: unknown;
            slidesToShow?: unknown;
            slidesToScroll?: unknown;
            speed?: unknown;
            swipe?: unknown;
            swipeToSlide?: unknown;
            touchMove?: unknown;
            touchThreshold?: unknown;
            variableWidth?: unknown;
            useCSS?: unknown;
            slickGoTo?: unknown;
            responsive?: unknown;
            dotPosition?: unknown;
            verticalSwiping?: unknown;
        } & {
            prefixCls: string;
            responsive: unknown[];
            draggable: boolean;
            dots: boolean;
            easing: string;
            arrows: boolean;
            autoplaySpeed: number;
            centerPadding: string;
            cssEase: string;
            dotsClass: string;
            initialSlide: number;
            slide: string;
            slidesToShow: number;
            slidesToScroll: number;
            speed: number;
            touchThreshold: number;
            slickGoTo: number;
            verticalSwiping: boolean;
        } & {
            rtl?: boolean;
            infinite?: boolean;
            vertical?: boolean;
            fade?: boolean;
            effect?: "fade" | "scrollx";
            autoplay?: boolean;
            beforeChange?: (...args: any[]) => any;
            afterChange?: (...args: any[]) => any;
            accessibility?: boolean;
            nextArrow?: import("../_util/type").VueNode;
            prevArrow?: import("../_util/type").VueNode;
            pauseOnHover?: boolean;
            adaptiveHeight?: boolean;
            centerMode?: boolean;
            focusOnSelect?: boolean;
            lazyLoad?: boolean;
            swipe?: boolean;
            swipeToSlide?: boolean;
            touchMove?: boolean;
            variableWidth?: boolean;
            useCSS?: boolean;
            dotPosition?: "left" | "right" | "bottom" | "top";
        }> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "prefixCls" | "responsive" | "draggable" | "dots" | "easing" | "beforeChange" | "afterChange" | "arrows" | "autoplaySpeed" | "centerPadding" | "cssEase" | "dotsClass" | "initialSlide" | "slide" | "slidesToShow" | "slidesToScroll" | "speed" | "touchThreshold" | "slickGoTo" | "verticalSwiping">;
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
            effect?: unknown;
            dots?: unknown;
            vertical?: unknown;
            autoplay?: unknown;
            easing?: unknown;
            beforeChange?: unknown;
            afterChange?: unknown;
            prefixCls?: unknown;
            accessibility?: unknown;
            nextArrow?: unknown;
            prevArrow?: unknown;
            pauseOnHover?: unknown;
            adaptiveHeight?: unknown;
            arrows?: unknown;
            autoplaySpeed?: unknown;
            centerMode?: unknown;
            centerPadding?: unknown;
            cssEase?: unknown;
            dotsClass?: unknown;
            draggable?: unknown;
            fade?: unknown;
            focusOnSelect?: unknown;
            infinite?: unknown;
            initialSlide?: unknown;
            lazyLoad?: unknown;
            rtl?: unknown;
            slide?: unknown;
            slidesToShow?: unknown;
            slidesToScroll?: unknown;
            speed?: unknown;
            swipe?: unknown;
            swipeToSlide?: unknown;
            touchMove?: unknown;
            touchThreshold?: unknown;
            variableWidth?: unknown;
            useCSS?: unknown;
            slickGoTo?: unknown;
            responsive?: unknown;
            dotPosition?: unknown;
            verticalSwiping?: unknown;
        } & {
            prefixCls: string;
            responsive: unknown[];
            draggable: boolean;
            dots: boolean;
            easing: string;
            arrows: boolean;
            autoplaySpeed: number;
            centerPadding: string;
            cssEase: string;
            dotsClass: string;
            initialSlide: number;
            slide: string;
            slidesToShow: number;
            slidesToScroll: number;
            speed: number;
            touchThreshold: number;
            slickGoTo: number;
            verticalSwiping: boolean;
        } & {
            rtl?: boolean;
            infinite?: boolean;
            vertical?: boolean;
            fade?: boolean;
            effect?: "fade" | "scrollx";
            autoplay?: boolean;
            beforeChange?: (...args: any[]) => any;
            afterChange?: (...args: any[]) => any;
            accessibility?: boolean;
            nextArrow?: import("../_util/type").VueNode;
            prevArrow?: import("../_util/type").VueNode;
            pauseOnHover?: boolean;
            adaptiveHeight?: boolean;
            centerMode?: boolean;
            focusOnSelect?: boolean;
            lazyLoad?: boolean;
            swipe?: boolean;
            swipeToSlide?: boolean;
            touchMove?: boolean;
            variableWidth?: boolean;
            useCSS?: boolean;
            dotPosition?: "left" | "right" | "bottom" | "top";
        }>, {
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
            slick: any;
            innerSlider: any;
        }, unknown, {}, {
            getDotPosition(): any;
            saveSlick(node: HTMLElement): void;
            onWindowResized(): void;
            next(): void;
            prev(): void;
            goTo(slide: number, dontAnimate?: boolean): void;
        }, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
            prefixCls: string;
            responsive: unknown[];
            draggable: boolean;
            dots: boolean;
            easing: string;
            beforeChange: (...args: any[]) => any;
            afterChange: (...args: any[]) => any;
            arrows: boolean;
            autoplaySpeed: number;
            centerPadding: string;
            cssEase: string;
            dotsClass: string;
            initialSlide: number;
            slide: string;
            slidesToShow: number;
            slidesToScroll: number;
            speed: number;
            touchThreshold: number;
            slickGoTo: number;
            verticalSwiping: boolean;
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
        effect?: unknown;
        dots?: unknown;
        vertical?: unknown;
        autoplay?: unknown;
        easing?: unknown;
        beforeChange?: unknown;
        afterChange?: unknown;
        prefixCls?: unknown;
        accessibility?: unknown;
        nextArrow?: unknown;
        prevArrow?: unknown;
        pauseOnHover?: unknown;
        adaptiveHeight?: unknown;
        arrows?: unknown;
        autoplaySpeed?: unknown;
        centerMode?: unknown;
        centerPadding?: unknown;
        cssEase?: unknown;
        dotsClass?: unknown;
        draggable?: unknown;
        fade?: unknown;
        focusOnSelect?: unknown;
        infinite?: unknown;
        initialSlide?: unknown;
        lazyLoad?: unknown;
        rtl?: unknown;
        slide?: unknown;
        slidesToShow?: unknown;
        slidesToScroll?: unknown;
        speed?: unknown;
        swipe?: unknown;
        swipeToSlide?: unknown;
        touchMove?: unknown;
        touchThreshold?: unknown;
        variableWidth?: unknown;
        useCSS?: unknown;
        slickGoTo?: unknown;
        responsive?: unknown;
        dotPosition?: unknown;
        verticalSwiping?: unknown;
    } & {
        prefixCls: string;
        responsive: unknown[];
        draggable: boolean;
        dots: boolean;
        easing: string;
        arrows: boolean;
        autoplaySpeed: number;
        centerPadding: string;
        cssEase: string;
        dotsClass: string;
        initialSlide: number;
        slide: string;
        slidesToShow: number;
        slidesToScroll: number;
        speed: number;
        touchThreshold: number;
        slickGoTo: number;
        verticalSwiping: boolean;
    } & {
        rtl?: boolean;
        infinite?: boolean;
        vertical?: boolean;
        fade?: boolean;
        effect?: "fade" | "scrollx";
        autoplay?: boolean;
        beforeChange?: (...args: any[]) => any;
        afterChange?: (...args: any[]) => any;
        accessibility?: boolean;
        nextArrow?: import("../_util/type").VueNode;
        prevArrow?: import("../_util/type").VueNode;
        pauseOnHover?: boolean;
        adaptiveHeight?: boolean;
        centerMode?: boolean;
        focusOnSelect?: boolean;
        lazyLoad?: boolean;
        swipe?: boolean;
        swipeToSlide?: boolean;
        touchMove?: boolean;
        variableWidth?: boolean;
        useCSS?: boolean;
        dotPosition?: "left" | "right" | "bottom" | "top";
    }> & import("vue").ShallowUnwrapRef<{
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
        slick: any;
        innerSlider: any;
    }> & {} & {} & {
        getDotPosition(): any;
        saveSlick(node: HTMLElement): void;
        onWindowResized(): void;
        next(): void;
        prev(): void;
        goTo(slide: number, dontAnimate?: boolean): void;
    } & import("vue").ComponentCustomProperties;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<{
    effect?: unknown;
    dots?: unknown;
    vertical?: unknown;
    autoplay?: unknown;
    easing?: unknown;
    beforeChange?: unknown;
    afterChange?: unknown;
    prefixCls?: unknown;
    accessibility?: unknown;
    nextArrow?: unknown;
    prevArrow?: unknown;
    pauseOnHover?: unknown;
    adaptiveHeight?: unknown;
    arrows?: unknown;
    autoplaySpeed?: unknown;
    centerMode?: unknown;
    centerPadding?: unknown;
    cssEase?: unknown;
    dotsClass?: unknown;
    draggable?: unknown;
    fade?: unknown;
    focusOnSelect?: unknown;
    infinite?: unknown;
    initialSlide?: unknown;
    lazyLoad?: unknown;
    rtl?: unknown;
    slide?: unknown;
    slidesToShow?: unknown;
    slidesToScroll?: unknown;
    speed?: unknown;
    swipe?: unknown;
    swipeToSlide?: unknown;
    touchMove?: unknown;
    touchThreshold?: unknown;
    variableWidth?: unknown;
    useCSS?: unknown;
    slickGoTo?: unknown;
    responsive?: unknown;
    dotPosition?: unknown;
    verticalSwiping?: unknown;
} & {
    prefixCls: string;
    responsive: unknown[];
    draggable: boolean;
    dots: boolean;
    easing: string;
    arrows: boolean;
    autoplaySpeed: number;
    centerPadding: string;
    cssEase: string;
    dotsClass: string;
    initialSlide: number;
    slide: string;
    slidesToShow: number;
    slidesToScroll: number;
    speed: number;
    touchThreshold: number;
    slickGoTo: number;
    verticalSwiping: boolean;
} & {
    rtl?: boolean;
    infinite?: boolean;
    vertical?: boolean;
    fade?: boolean;
    effect?: "fade" | "scrollx";
    autoplay?: boolean;
    beforeChange?: (...args: any[]) => any;
    afterChange?: (...args: any[]) => any;
    accessibility?: boolean;
    nextArrow?: import("../_util/type").VueNode;
    prevArrow?: import("../_util/type").VueNode;
    pauseOnHover?: boolean;
    adaptiveHeight?: boolean;
    centerMode?: boolean;
    focusOnSelect?: boolean;
    lazyLoad?: boolean;
    swipe?: boolean;
    swipeToSlide?: boolean;
    touchMove?: boolean;
    variableWidth?: boolean;
    useCSS?: boolean;
    dotPosition?: "left" | "right" | "bottom" | "top";
}>, {
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
    slick: any;
    innerSlider: any;
}, unknown, {}, {
    getDotPosition(): any;
    saveSlick(node: HTMLElement): void;
    onWindowResized(): void;
    next(): void;
    prev(): void;
    goTo(slide: number, dontAnimate?: boolean): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
    prefixCls: string;
    responsive: unknown[];
    draggable: boolean;
    dots: boolean;
    easing: string;
    beforeChange: (...args: any[]) => any;
    afterChange: (...args: any[]) => any;
    arrows: boolean;
    autoplaySpeed: number;
    centerPadding: string;
    cssEase: string;
    dotsClass: string;
    initialSlide: number;
    slide: string;
    slidesToShow: number;
    slidesToScroll: number;
    speed: number;
    touchThreshold: number;
    slickGoTo: number;
    verticalSwiping: boolean;
}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("@vue/runtime-core").Plugin;
export default _default;
