declare namespace _default {
    const name: string;
    const inheritAttrs: boolean;
    const props: {
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
    };
    const mixins: {
        methods: {
            setState(state: {}, callback: any): void;
            __emit(...args: any[]): void;
        };
    }[];
    function data(): {
        currentSlide: any;
        slideCount: any;
        animating: boolean;
        autoplaying: any;
        currentDirection: number;
        currentLeft: any;
        direction: number;
        dragging: boolean;
        edgeDragged: boolean;
        initialized: boolean;
        lazyLoadedList: any[];
        listHeight: any;
        listWidth: any;
        scrolling: boolean;
        slideHeight: any;
        slideWidth: any;
        swipeLeft: any;
        swiped: boolean;
        swiping: boolean;
        touchObject: {
            startX: number;
            startY: number;
            curX: number;
            curY: number;
        };
        trackStyle: {};
        trackWidth: number;
    };
    function data(): {
        currentSlide: any;
        slideCount: any;
        animating: boolean;
        autoplaying: any;
        currentDirection: number;
        currentLeft: any;
        direction: number;
        dragging: boolean;
        edgeDragged: boolean;
        initialized: boolean;
        lazyLoadedList: any[];
        listHeight: any;
        listWidth: any;
        scrolling: boolean;
        slideHeight: any;
        slideWidth: any;
        swipeLeft: any;
        swiped: boolean;
        swiping: boolean;
        touchObject: {
            startX: number;
            startY: number;
            curX: number;
            curY: number;
        };
        trackStyle: {};
        trackWidth: number;
    };
    namespace methods {
        function listRefHandler(ref: any): void;
        function listRefHandler(ref: any): void;
        function trackRefHandler(ref: any): void;
        function trackRefHandler(ref: any): void;
        function adaptHeight(): void;
        function adaptHeight(): void;
        function onWindowResized(setTrackStyle: any): void;
        function onWindowResized(setTrackStyle: any): void;
        function resizeWindow(setTrackStyle?: boolean): void;
        function resizeWindow(setTrackStyle?: boolean): void;
        function updateState(spec: any, setTrackStyle: any, callback: any): void;
        function updateState(spec: any, setTrackStyle: any, callback: any): void;
        function ssrInit(): void;
        function ssrInit(): void;
        function checkImagesLoad(): void;
        function checkImagesLoad(): void;
        function progressiveLazyLoad(): void;
        function progressiveLazyLoad(): void;
        function slideHandler(index: any, dontAnimate?: boolean): void;
        function slideHandler(index: any, dontAnimate?: boolean): void;
        function changeSlide(options: any, dontAnimate?: boolean): void;
        function changeSlide(options: any, dontAnimate?: boolean): void;
        function clickHandler(e: any): void;
        function clickHandler(e: any): void;
        function keyHandler(e: any): void;
        function keyHandler(e: any): void;
        function selectHandler(options: any): void;
        function selectHandler(options: any): void;
        function disableBodyScroll(): void;
        function disableBodyScroll(): void;
        function enableBodyScroll(): void;
        function enableBodyScroll(): void;
        function swipeStart(e: any): void;
        function swipeStart(e: any): void;
        function swipeMove(e: any): void;
        function swipeMove(e: any): void;
        function swipeEnd(e: any): void;
        function swipeEnd(e: any): void;
        function slickPrev(): void;
        function slickPrev(): void;
        function slickNext(): void;
        function slickNext(): void;
        function slickGoTo(slide: any, dontAnimate?: boolean): string;
        function slickGoTo(slide: any, dontAnimate?: boolean): string;
        function play(): boolean;
        function play(): boolean;
        function handleAutoPlay(playType: any): void;
        function handleAutoPlay(playType: any): void;
        function pause(pauseType: any): void;
        function pause(pauseType: any): void;
        function onDotsOver(): void;
        function onDotsOver(): void;
        function onDotsLeave(): void;
        function onDotsLeave(): void;
        function onTrackOver(): void;
        function onTrackOver(): void;
        function onTrackLeave(): void;
        function onTrackLeave(): void;
        function onSlideFocus(): void;
        function onSlideFocus(): void;
        function onSlideBlur(): void;
        function onSlideBlur(): void;
        function customPaging({ i }: {
            i: any;
        }): JSX.Element;
        function customPaging({ i }: {
            i: any;
        }): JSX.Element;
        function appendDots({ dots }: {
            dots: any;
        }): JSX.Element;
        function appendDots({ dots }: {
            dots: any;
        }): JSX.Element;
    }
    function beforeMount(): void;
    function beforeMount(): void;
    function mounted(): void;
    function mounted(): void;
    function beforeUnmount(): void;
    function beforeUnmount(): void;
    function updated(): void;
    function updated(): void;
    namespace watch {
        function __propsSymbol__(): void;
        function __propsSymbol__(): void;
    }
    function render(): JSX.Element;
    function render(): JSX.Element;
}
export default _default;
