import { user } from './modules/user';
import { app} from './modules/app'
import { createStore } from 'vuex';

export default createStore({
    state: {},
    mutations: {},
    actions: {},
    modules: {
        user,
        app
    },
});