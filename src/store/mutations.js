import Vue from 'vue'

// state
export const state = {
    count: 0,
    num:1
  };



export const mutations={

    Increase(state){
        state.count += state.num
    },
    Decrease(state){
        state.count -=state.num
    },
    ChangeNum(state,n){
        state.num = n;
    }
}