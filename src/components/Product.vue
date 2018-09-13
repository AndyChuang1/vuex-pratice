<template>
  <div class="product mt-2">
    <h1>{{ msg }}</h1>
    <div class="row">
      <div class="col-lg-3 col-md-6 mb-4 mt-2" v-for="product in productList" :key="product.index">
        <div class="card h-100">
          <div class="hover">
            <img class="card-img-top" :src="product.image" alt="">
            <div class="overlay">
              <button type="button" class="btn btn-primary" @click="addCart(product.title)">Add cart</button>
            </div>
            
            
          </div>

          <div class="card-body">
            <h4 class="card-title">
              {{product.title}}
            </h4>
            <h5>NT {{product.price}} 元</h5>
          </div>

        </div>
      </div>

    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "product",
  data() {
    return {
      msg: "Product"
    };
  },
  computed: {
    ...mapGetters({
      productList: "getProducts"
    })
  },
  methods:{
    ...mapActions(['addCart']),
    action(){
      console.log('action')
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hover {
  position: relative;
  
}

.overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color:rgba(197, 197, 209, 0.76);;
  overflow: hidden;
  width: 100%;
  height: 0%;
  transition: .5s ease;
}
.btn {
  color: white;
  font-size: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
  opacity:1;
  
}

.hover:hover .overlay  {
  height: 100%;
}

</style>
