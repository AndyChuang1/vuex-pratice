<template>
    <div class="hello mt-2">
      <h1>{{ msg }}</h1>
      <div class="row">
        <table class="table ">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
              <th scope="col">
                Quantity
              </th>
              <th scope="col">Cancel</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(cart,index) in CarttList" :key='index'>
              <th scope="row">{{index+1}}</th>
              <td>{{cart.title}}</td>
              <td>{{cart.price}}</td>
              <td>
                <select @change="change($event,cart.title)">
                  <option v-for="(n,index) in 10" :key='index' :value=n>{{n}} </option>
                </select>
              </td>
              <td>
                <a @click="cancel">
                  <svg style="height: 25px; width: 25px;">
                    <image xlink:href="../assets/cancle.svg" />
                  </svg>
                </a>
              </td>
            </tr>
          </tbody>
        </table>

      </div>
      <div class="row justify-content-end">
        <div class="col-4">
          <h2>總計：{{total}} 元</h2>
        </div>
      </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "ShoppingCart",
  data() {
    return {
      msg: "ShoppingCart"
    };
  },
  computed: {
    ...mapGetters({
      CarttList: "getShoppingCart",
      total: "getCartPriceTotal"
    })
  },
  methods: {
    ...mapActions({
      cancel: "cancelCart",
      changeQun: "addQun"
    }),
    change(event, title) {
      const num = parseInt(event.target.value);
      const payload = {
        title: title,
        num: num
      };
      this.changeQun(payload);
    }
  },
  created(){
    console.log('not working')
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
image {
  cursor: pointer;
}
</style>
