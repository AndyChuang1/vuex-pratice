<template>
  <div class="APIGetter">
    <h1>{{ msg }}</h1>
    <div class="row">
      <div class="col-md-4 col-12 mb-2" v-for="statement in AirList" :key="statement.index">
        <div class="card">
          <h2 class="card-header">{{statement.Category}}</h2>
          <div class="card-body">
            <h3 class="card-title">{{statement.Title.slice(0,31)}}</h3>
            <p class="card-text">{{statement.Content.slice(0,50)}} .....</p>
            <a :href=statement.OriginalURL class="btn btn-primary">More</a>
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
      msg: "APIGetter"
    };
  },
  computed: {
    ...mapGetters({
      AirList: "getAirList"
    })
  },
  methods: {
    ...mapActions(["actionGetAPI"])
  },
  created() {},
  mounted() {
    this.actionGetAPI();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h2{
  font-weight: 700
}
</style>
