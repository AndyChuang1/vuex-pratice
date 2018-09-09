import Vue from 'vue';
import Vuex from 'vuex';
import * as getters from './getters';
import count from './modules/count'
import API from './modules/API'
import {state,actions,mutations} from './root'


Vue.use(Vuex);
console.log(state)
export default new Vuex.Store({
    //root
    state,
    actions,
    mutations,
    getters,
    modules: {
        count,
        API
    },
    strict: true


})

// const moduleA = {
//     state: { ... },
//     mutations: { ... },
//     actions: { ... },
//     getters: { ... }
//   }

