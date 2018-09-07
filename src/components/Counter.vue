<template>
  <div class="hello">
    <select id='selection' v-model="selection" @change="SelectChanged($event)">
      <option v-for="option in 10" :key="option.index" :value="option">{{option}}</option>

    </select>
    <h1>Count: {{ count }}</h1>
    <button type="button" class="btn btn-outline-primary" @click="actionIncrease">+++</button>
    <button type="button" class="btn btn-outline-primary" @click="actionDecrease">---</button>

  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

let obj = {
  website: "pjchender",
  country: "Taiwan"
}//解購賦值




export default {
  name: "Counter",
  data() {
    return {
      msg: "Counter",
      selection: "1"
    };
  },
  computed: {
    ...mapGetters({
      count: "getCount"
    })
  },
  methods: {
    ...mapActions(["actionIncrease", "actionDecrease", "ChangeNum"]),

    callAction() {
      this.actionIncrease();
      //`this.actionIncrease()` to `this.$store.dispatch('actionIncrease')` directly
      //如要使用 this.actionName(payload) 的 方式必需先mapAction
    },
    SelectChanged(event) {
      //Slection change event 變化執行動作
      // this.$store.dispatch('ChangeNum', parseInt(event.target.value));
      this.ChangeNum(parseInt(event.target.value)); 
    }
  },
  watch: {
    // selection(val){
    //   //Slection 綁定值變化觸發動作
    //   this.$store.dispatch('ChangeNum', val);
    // }
  },
  mounted({website}=obj){
    console.log(website)
    //解購賦值
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
