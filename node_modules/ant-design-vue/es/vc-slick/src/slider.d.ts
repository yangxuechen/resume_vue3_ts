declare var _default: import("vue").DefineComponent<{
    accessibility: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
    adaptiveHeight: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
    afterChange: import("vue-types").VueTypeValidableDef<any> & {
        default: any;
    };
    arrows: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
    autoplay: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
    autoplaySpeed: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    } & {
        default: number;
    };
    beforeChange: import("vue-types").VueTypeValidableDef<any> & {
        default: any;
    };
    centerMode: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
    centerPadding: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    cssEase: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    dots: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
    dotsClass: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    draggable: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
    unslick: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
    easing: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    edgeFriction: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    } & {
        default: number;
    };
    fade: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
    focusOnSelect: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
    infinite: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
    initialSlide: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    } & {
        default: number;
    };
    lazyLoad: import("vue-types").VueTypeValidableDef<any> & {
        default: any;
    };
    verticalSwiping: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
    asNavFor: import("vue-types").VueTypeValidableDef<any> & {
        default: any;
    };
    pauseOnDotsHover: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
    pauseOnFocus: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
    pauseOnHover: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
    responsive: import("vue-types").VueTypeValidableDef<unknown[]> & {
        default: () => unknown[];
    };
    rows: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    } & {
        default: number;
    };
    rtl: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
    slide: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    slidesPerRow: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    } & {
        default: number;
    };
    slidesToScroll: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    } & {
        default: number;
    };
    slidesToShow: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    } & {
        default: number;
    };
    speed: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    } & {
        default: number;
    };
    swipe: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
    swipeEvent: import("vue-types").VueTypeValidableDef<any> & {
        default: any;
    };
    swipeToSlide: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
    touchMove: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
    touchThreshold: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    } & {
        default: number;
    };
    useCSS: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
    useTransform: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
    variableWidth: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
    vertical: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
    waitForAnimate: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
    children: import("vue-types").VueTypeValidableDef<unknown[]> & {
        default: () => unknown[];
    };
    __propsSymbol__: import("vue-types").VueTypeValidableDef<any>;
}, any, {
    breakpoint: any;
}, {}, {
    innerSliderRefHandler(ref: any): void;
    media(query: any, handler: any): void;
    slickPrev(): void;
    slickNext(): void;
    slickGoTo(slide: any, dontAnimate?: boolean): void;
    slickPause(): void;
    slickPlay(): void;
}, {
    methods: {
        setState(state: {}, callback: any): void;
        __emit(...args: any[]): void;
    };
}, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    accessibility?: unknown;
    adaptiveHeight?: unknown;
    afterChange?: unknown;
    arrows?: unknown;
    autoplay?: unknown;
    autoplaySpeed?: unknown;
    beforeChange?: unknown;
    centerMode?: unknown;
    centerPadding?: unknown;
    cssEase?: unknown;
    dots?: unknown;
    dotsClass?: unknown;
    draggable?: unknown;
    unslick?: unknown;
    easing?: unknown;
    edgeFriction?: unknown;
    fade?: unknown;
    focusOnSelect?: unknown;
    infinite?: unknown;
    initialSlide?: unknown;
    lazyLoad?: unknown;
    verticalSwiping?: unknown;
    asNavFor?: unknown;
    pauseOnDotsHover?: unknown;
    pauseOnFocus?: unknown;
    pauseOnHover?: unknown;
    responsive?: unknown;
    rows?: unknown;
    rtl?: unknown;
    slide?: unknown;
    slidesPerRow?: unknown;
    slidesToScroll?: unknown;
    slidesToShow?: unknown;
    speed?: unknown;
    swipe?: unknown;
    swipeEvent?: unknown;
    swipeToSlide?: unknown;
    touchMove?: unknown;
    touchThreshold?: unknown;
    useCSS?: unknown;
    useTransform?: unknown;
    variableWidth?: unknown;
    vertical?: unknown;
    waitForAnimate?: unknown;
    children?: unknown;
    __propsSymbol__?: unknown;
} & {
    children: unknown[];
    rtl: boolean;
    infinite: boolean;
    vertical: boolean;
    responsive: unknown[];
    fade: boolean;
    draggable: boolean;
    dots: boolean;
    autoplay: boolean;
    easing: string;
    accessibility: boolean;
    pauseOnHover: boolean;
    adaptiveHeight: boolean;
    arrows: boolean;
    autoplaySpeed: number;
    centerMode: boolean;
    centerPadding: string;
    cssEase: string;
    dotsClass: string;
    focusOnSelect: boolean;
    initialSlide: number;
    slide: string;
    slidesToShow: number;
    slidesToScroll: number;
    speed: number;
    swipe: boolean;
    swipeToSlide: boolean;
    touchMove: boolean;
    touchThreshold: number;
    variableWidth: boolean;
    useCSS: boolean;
    verticalSwiping: boolean;
    unslick: boolean;
    edgeFriction: number;
    pauseOnDotsHover: boolean;
    pauseOnFocus: boolean;
    rows: number;
    slidesPerRow: number;
    useTransform: boolean;
    waitForAnimate: boolean;
} & {
    beforeChange?: any;
    afterChange?: any;
    lazyLoad?: any;
    asNavFor?: any;
    swipeEvent?: any;
    __propsSymbol__?: any;
}>, {
    children: unknown[];
    rtl: boolean;
    infinite: boolean;
    vertical: boolean;
    responsive: unknown[];
    fade: boolean;
    draggable: boolean;
    dots: boolean;
    autoplay: boolean;
    easing: string;
    beforeChange: any;
    afterChange: any;
    accessibility: boolean;
    pauseOnHover: boolean;
    adaptiveHeight: boolean;
    arrows: boolean;
    autoplaySpeed: number;
    centerMode: boolean;
    centerPadding: string;
    cssEase: string;
    dotsClass: string;
    focusOnSelect: boolean;
    initialSlide: number;
    lazyLoad: any;
    slide: string;
    slidesToShow: number;
    slidesToScroll: number;
    speed: number;
    swipe: boolean;
    swipeToSlide: boolean;
    touchMove: boolean;
    touchThreshold: number;
    variableWidth: boolean;
    useCSS: boolean;
    verticalSwiping: boolean;
    unslick: boolean;
    edgeFriction: number;
    asNavFor: any;
    pauseOnDotsHover: boolean;
    pauseOnFocus: boolean;
    rows: number;
    slidesPerRow: number;
    swipeEvent: any;
    useTransform: boolean;
    waitForAnimate: boolean;
}>;
export default _default;
