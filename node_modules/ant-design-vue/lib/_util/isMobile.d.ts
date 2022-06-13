export default defaultResult;
declare namespace defaultResult {
    export { isMobile };
    export namespace apple {
        const phone: boolean;
        const ipod: any;
        const tablet: boolean;
        const device: boolean;
    }
    export namespace amazon {
        const phone_1: any;
        export { phone_1 as phone };
        const tablet_1: any;
        export { tablet_1 as tablet };
        const device_1: any;
        export { device_1 as device };
    }
    export namespace android {
        const phone_2: any;
        export { phone_2 as phone };
        const tablet_2: any;
        export { tablet_2 as tablet };
        const device_2: any;
        export { device_2 as device };
    }
    export namespace windows {
        const phone_3: any;
        export { phone_3 as phone };
        const tablet_3: any;
        export { tablet_3 as tablet };
        const device_3: any;
        export { device_3 as device };
    }
    export namespace other {
        export const blackberry: any;
        export const blackberry10: any;
        export const opera: any;
        export const firefox: any;
        export const chrome: any;
        const device_4: any;
        export { device_4 as device };
    }
    export const any: any;
    const phone_4: any;
    export { phone_4 as phone };
    const tablet_4: any;
    export { tablet_4 as tablet };
}
declare function isMobile(userAgent: any): {
    apple: {
        phone: boolean;
        ipod: any;
        tablet: boolean;
        device: boolean;
    };
    amazon: {
        phone: any;
        tablet: any;
        device: any;
    };
    android: {
        phone: any;
        tablet: any;
        device: any;
    };
    windows: {
        phone: any;
        tablet: any;
        device: any;
    };
    other: {
        blackberry: any;
        blackberry10: any;
        opera: any;
        firefox: any;
        chrome: any;
        device: any;
    };
    any: any;
    phone: any;
    tablet: any;
};
