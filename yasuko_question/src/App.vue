<template>
  <div id="app">
    <!-- <div v-for="(question, key) in questions" v-bind:key=key>
      {{ question.question }}<br>
      <button v-for="(item, key) in question.choices" v-bind:key=key @click="check(key, question.answer)">
        {{ item }}
      </button>
      <br><br><br>
    </div>  -->
    <div>
      {{ questions[this.questionNumber].question }}
    </div>
    <button v-for="(item, key) in questions[this.questionNumber].choices" v-bind:key=key @click="check(key, questions[questionNumber].answer)">
        {{ item }}
    </button>
    <div v-if="explanationFlag">
      解説: {{ questions[this.questionNumber].explanation }}
    </div>
    <br><br><br>
    <button @click="nextQuestino()">次の問題へ</button> 
  </div>
</template>
<script>

export default {
  name: 'App',
  data(){
    return{
      questionNumber: 0,
      explanationFlag: false,
      questions:[
        {
          question: "私の出身地は？",
          choices: ["新潟", "大阪", "宮城", "アメリカ"],
          answer: 0,
          explanation: "新潟出身だからです。"
        },
        {
          question: "私の好きな食べ物は？",
          choices: ["油", "アイス", "刺身", "コーヒーゼリー"],
          answer: 2,
          explanation: "刺身はうまいからです。"
        }
      ]
    }
  },
  methods:{
    check(selected, answer){
      this.explanationFlag = true;
      ( selected === answer )? alert("大正解！！") : alert("不正解…")
    },
    nextQuestino(){
      this.explanationFlag = false;
      if (this.questionNumber == (this.questions.length - 1)){
        this.questionNumber = 0
        alert("もう問題はありません...はじめの問題に戻ります。")
      }else{
        this.questionNumber++
      }
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
