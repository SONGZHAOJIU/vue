<template>
  <div class="hello">
      <ul>
        <li v-for="item in arrList">{{item}}</li>
      </ul>
    <ul>
      <li v-for="gett in arrGetter">{{gett}}</li>
    </ul>
    <button @click="reduce()">--</button>
    <button @click="add()">++</button>

    <button @click="action()">actions 支持异步</button>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    name: 'HelloWorld',
    data () {
      return {

      }
    },
    computed:{
      ...mapGetters(['arrGetter','arrList'])
    },
    methods:{
      add:function () {
         this.$store.commit('setArrAdd',5);
      },
      reduce:function(){
        this.$store.commit('setArrReduce',3)
      },
      action:function () {
        this.$store.dispatch('increment',10);
      }
    }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
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
