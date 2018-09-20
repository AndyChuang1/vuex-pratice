import axios from 'axios'
import * as rootTypes from '../rootTypes'
const types = {
    GETAPILIST: 'GetAPI',
    TYPECHANGE: 'TYPECHANGE',
    KEYWORDS:'KEYWORDS'
}

const state = {
    AirList: [],
    type: "All",
    keywords:''
}

const getters =
    {
        getAirList: state => {
            let Opendata = state.AirList
            if (state.type !== 'All') {
                Opendata =  Opendata.filter(item=>item.Category===state.type)
            }
            if (state.type!==''){

                Opendata = Opendata.filter(item=> JSON.stringify(item).indexOf(state.keywords)!=-1)


            }
            return Opendata;

        }
    }

const actions = {
    actionGetAPI({ commit }) {
        commit(rootTypes.LOADING, true);
        axios
            .get('http://opendata.khcc.gov.tw/public/OD_ksml_news.ashx')
            .then(function (response) {
                let data = response.data;
                //console.log(data)
                commit(types.GETAPILIST, data);
                commit(rootTypes.LOADING, false);
            })
            .catch(function (error) {
                console.log(error);
            });
    },
    typeChange({ commit }, val) {
        commit(types.TYPECHANGE, val)

    },
    keywordsChange({commit},keywords){
        commit(types.KEYWORDS,keywords)

    }
}

const mutations = {
    [types.GETAPILIST](state, data) {
        state.AirList = data
    },
    [types.TYPECHANGE](state, val) {
        state.type = val
    },
    [types.KEYWORDS](state,keywords){
        state.keywords = keywords
    }
}

export default {
    state,
    getters,
    actions,
    mutations

}