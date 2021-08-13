<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
   <!-- <button @click="count()">Counter {{this.$store.state.count}}</button> -->
   <input type="text" v-model="text" ><button @click="addTodo">Add</button>
   <ul v-for="(todo ,index) in todos" :key="index">
     <li>{{todo}}<button @click="removeTodo(index)">Remove</button></li>
   </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data(){
    return{
      text:''
    }
  },
  computed:{
todos: function(){
  return this.$store.state.todos
}
  },
  methods:{
    removeTodo(index){
console.log(index)
this.$store.dispatch('removeToDo',index)
    },
    addTodo(){

this.$store.dispatch('addToDo',this.text)
this.text = ''
    },
    count(){
      debugger
      this.$store.dispatch('incs',10)

// console.log( this.$store.state.count) 
    }
  },
  beforeCreate(){console.log("beforeCreate hook call")},
  beforeMount(){console.log("beforeMount hook call")},
  beforeDestroy(){console.log("beforeDestroy hook call")},
  created(){
console.log("created hook call")
  },
  mounted(){
   console.log("mounted hook call") 
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

h3 {
  margin: 40px 0 0;
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
