import type { App } from 'vue';
import { default as version } from './version';
export * from './components';
export declare const install: (app: App) => App<any>;
export { version };
declare const _default: {
    version: any;
    install: (app: App<any>) => App<any>;
};
export default _default;
