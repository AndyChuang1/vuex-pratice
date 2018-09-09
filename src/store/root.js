import * as rootTypes from './rootTypes'


export const state = {
    loading: false,
    token:'',
    lang:'en'
}

export const actions = {

    loadingState({commit},isloading){

        commit(rootTypes.LOADING,isloading)
    }

}

export const mutations={
    [rootTypes.LOADING](state, isloading){
        state.loading=isloading
    }
}

// export default {
//     state,
//     actions,
//     mutations
// }