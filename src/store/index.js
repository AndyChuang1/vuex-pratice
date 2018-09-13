import Vue from 'vue';
import Vuex from 'vuex';
import * as getters from './getters';
import count from './modules/count'
import API from './modules/API'
import shop from './modules/shop'
import {state,actions,mutations} from './root'
//import root from './root'

Vue.use(Vuex);
//console.log(root)
export default new Vuex.Store({
    // ...root,
    state,
    actions,
    mutations,
    getters,
    modules: {
        count,
        API,
        shop

    },
    strict: true


})

// const moduleA = {
//     state: { ... },
//     mutations: { ... },
//     actions: { ... },
//     getters: { ... }
//   }

