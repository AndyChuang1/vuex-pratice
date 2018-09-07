import Vue from 'vue';
import axios from 'axios'


export const actionIncrease = (context) => {
    console.log(context)
    context.commit('Increase');
    //context為Obj，包含{state, getters,commit}等等属性，使用ES6的Obj的*解構賦值*可以簡化寫法。
}

export const actionDecrease = ({ commit }) => {

    commit('Decrease');
}

export const ChangeNum = ({ commit }, val) => {

    commit('ChangeNum', val);
}

export const AIRList = ({ commit }) => {

    axios
        .get('http://opendata.khcc.gov.tw/public/OD_ksml_news.ashx')
        .then(function (response) {
            console.log(response)
          let data = response.data;
            commit('GetAIRList', data);
        })
        .catch(function (error) {
            console.log(error);
        });



}