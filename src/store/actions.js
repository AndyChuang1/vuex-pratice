import Vue from 'vue';

export const actionIncrease = ({ commit }) => {
    
    commit('Increase');
}

export const actionDecrease = ({ commit }) => {
    
    commit('Decrease');
}

export const ChangeNum = ({ commit },val) => {
    
    commit('ChangeNum',val);
}