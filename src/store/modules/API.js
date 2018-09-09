import axios from 'axios'
import * as rootTypes from '../rootTypes'
const types = {
    GETAPILIST: 'GetAPI'
}

const state = {
    AirList: ''
}

const getters =
{
    getAirList: state => { return state.AirList }
}

const actions = {
    actionGetAPI({ commit }) {
        commit(rootTypes.LOADING, true);
        axios
            .get('http://opendata.khcc.gov.tw/public/OD_ksml_news.ashx')
            .then(function (response) {
                let data = response.data;
                commit(types.GETAPILIST, data);
                commit(rootTypes.LOADING, false);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
}

const mutations = {
    [types.GETAPILIST](state,data) {
        state.AirList = data
    }
}

export default {
    state,
    getters,
    actions,
    mutations

}