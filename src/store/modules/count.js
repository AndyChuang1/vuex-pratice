const types = {
    INCREASE: 'Increase',
    DECREASE: 'Decrease',
    ChangeNum: 'ChangeNum'
  }

const state = {
    count: 0,
    num: 1,
};

const getters = { getCount: state => { return state.count } }

const actions = {
    actionIncrease  (context) {
        console.log(context)
        context.commit(types.INCREASE);
        //context為Obj，包含{state, getters,commit}等等属性，使用ES6的Obj的*解構賦值*可以簡化寫法。
    },
    actionDecrease  ({ commit }) {

        commit(types.DECREASE);
    },

    ChangeNum ({ commit }, val)  {

        commit(types.ChangeNum, val);
    },

}

const mutations = {

    [types.INCREASE](state) {
        state.count += state.num
    },
    [types.DECREASE](state) {
        state.count -= state.num
    },
    [types.ChangeNum](state, n) {
        state.num = n;
    },
}

export default {
    state,
    getters,
    actions,
    mutations
  }