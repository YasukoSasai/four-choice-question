<template>
  <div id="app">
    <div v-for="(question, key) in questions" v-bind:key=key>
      {{ question.question }}<br>
      <button v-for="(item, key) in question.choices" v-bind:key=key @click="check(key, question.answer)">
        {{ item }}
      </button>
      <br><br><br>
    </div>   
  </div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return{
      questions:[
        {
          question: "私の出身地は？",
          choices: ["新潟", "大阪", "宮城", "アメリカ"],
          answer: 0
        },
        {
          question: "私の好きな食べ物は？",
          choices: ["油", "アイス", "刺身", "コーヒーゼリー"],
          answer: 2
        }
      ]
    }
  },
  methods:{
    check(selected, answer){
      ( selected === answer )? alert("大正解！！") : alert("不正解…")
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
