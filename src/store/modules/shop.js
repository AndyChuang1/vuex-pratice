import { stat } from "fs";

const types ={
    ADD_CART :'ADD_CART',
    Cancel_Cart :'CammcelCart',
    ADD_QUN :'ADD_QUN'
}

const state = {
    products:[
        {
            title: ' Sandwich',
            image: 'http://www.w3schools.com/w3images/sandwich.jpg',
            price: 155
          },
          {
            title: 'Steak',
            image: 'http://www.w3schools.com/w3images/steak.jpg',
            price: 1380
          },
          {
            title: 'Cherries',
            image: 'http://www.w3schools.com/w3images/cherries.jpg',
            price: 499
          },
          {
            title: ' Vegetable Pasta',
            image: 'http://www.w3schools.com/w3images/wine.jpg',
            price: 790
          },
          
    ],
    shoppingCart:[]
}

const getters ={
    getProducts: state => state.products,
    getShoppingCartTotal: state => state.shoppingCart.length,
    getShoppingCart: state => state.shoppingCart,
    getCartPriceTotal: state => state.shoppingCart.reduce((a, b) => a + b.price*b.quantity, 0 ),
}

const actions = {
    addCart ({ commit },id){
        commit(types.ADD_CART,id)
        console.log(types.ADD_CART)
    },
    cancelCart({commit},id){
        commit(types.Cancel_Cart,id)
    },
    addQun({commit},payload){
        //payload = {title:XXX,num:XXX}
        commit(types.ADD_QUN,payload)
        
    }
}

const mutations = {
    [types.ADD_CART](state,id){
        const product = state.products.find(item=>item.title === id)
        const samproductFilter = state.shoppingCart.filter(item=>item.title == id)
        
        if (samproductFilter.length==0){
            state.shoppingCart.push(
                {
                    title:product.title,
                    price:product.price,
                    quantity:1
                }
            )
        }
        
    },

    [types.Cancel_Cart](state,title){
        const cartIndex = state.shoppingCart.findIndex(item=>item.title===title);
        state.shoppingCart.splice(cartIndex,1);

    },
    [types.ADD_QUN](state,{title,num}){
        //使用destruction 解構傳進來的payload
        const cartIndex = state.shoppingCart.findIndex(item=>item.title==title);
        state.shoppingCart[cartIndex].quantity=num;
    }
}

export default {
    state,
    getters,
    actions,
    mutations
  }