<template>
  <div class="APIGetter">
    <h1>{{ msg }}</h1>
    <div class="row">
      <div v-if="!Loading&&AirList.length>0" class="alert alert-success" role="alert">

        總共 {{AirList.length}} 筆資料

      </div>

      <div v-else-if="AirList.length<0" class="alert alert-danger" style="width:100%">
        查無此資料
      </div>
      <div class="input-group">
        <h3 class="mr-2">Type : </h3>
        <select class="" id="inputGroupSelect" @change="optionChange($event)" v-model="type">
          <option selected>All</option>
          <option v-for="(option,index) in typeOption" :value=option :key="index">{{option}}</option>
        </select>
        <input type="text" class="form-control" placeholder="Search" v-model="keywords">
        <div class="input-group-append">
          <button class="btn btn-outline-secondary" type="button" @click="SearchGo()">Go</button>
        </div>
      </div>

      <div class="cardC col-md-4 col-12 mb-2" v-for="statement in AirList" :key="statement.index">
        <div class="card">
          <div class="card-header">
            <h2>{{statement.Category}}</h2>
            <span class="badge badge-secondary">{{statement.Unit}}</span>

          </div>

          <div class="card-body">
            <h3 class="card-title">{{statement.Title.slice(0,31)}}</h3>
            <p class="card-text">{{statement.Content.slice(0,50)}} .....</p>
            <a :href=statement.OriginalURL class="btn btn-primary" target="_blank">More</a>
          </div>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "APIGetter",
  data() {
    return {
      msg: "APIGetter",
      typeOption: ["講堂", "研習", "展覽", "留學資訊", "其他"],
      keywords:'',
      type:'All'
    };
  },
  computed: {
    ...mapGetters({
      AirList: "getAirList",
      Loading: "getLoading"
    })
  },
  methods: {
    ...mapActions(["actionGetAPI", "typeChange",
    "keywordsChange"]),
    optionChange({ target: { value } }) {
      //解構賦值
      console.log(value);
      this.typeChange(value);
    },
    SearchGo (){
      this.keywordsChange(this.keywords)

    }
  },
  created() {
    this.actionGetAPI();
    this.typeChange(this.type);
    this.keywordsChange(this.keywords)
  },
  mounted() {},
 
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h2 {
  font-weight: 700;
}
.cardC:nth-child(-n + 5) {
  margin-top: 1rem;
}
.alert-success {
  position: fixed;
  bottom: 0;
  right: 0;
  z-index: 10;
  animation: fadeinout 4s linear;
  opacity: 0;
}

@keyframes fadeinout {
  50% {
    opacity: 1;
  }
}
</style>
