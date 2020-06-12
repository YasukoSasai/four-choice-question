<template>
  <div id="app">
      <div class="question-parts">
        {{ questions[this.questionNumber].question }}
      </div>
      <div 
        class="question-container"
        v-for="(item, key) in questions[this.questionNumber].choices" 
        v-bind:key=key 
      >
        <v-btn class="choice-button" depressed small color="#F06292" dark @click="check(key, questions[questionNumber].answer)">
          {{key + 1}}
        </v-btn>
        <div class="choice-txt" @click="check(key, questions[questionNumber].answer)">
          {{ item }} 
        </div>
    </div>
    <div v-if="explanationFlag" style="padding-top:30px;">
      解説: {{ questions[this.questionNumber].explanation}}
    </div>
    <br><br>
    <v-btn class="next-button" @click="nextQuestino()" color="#EC407A" dark >
        次の問題へ
    </v-btn>
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
        },
        {
          question: "ITIL 2011 editionによれば，サービス・パッケージの説明として，適切なものはどれか。",
          choices: [
            "コアサービス，実現サービス及び強化サービスの組合せで構成された，特定の種類の顧客ニーズへのソリューションを提供する複数のサービスの集まりである。",
            "サービス・パイプライン，サービス・カタログ及び廃止済みサービスで構成された，サービス・プロバイダによって管理されている全てのサービスである。",
            "成果物，価格，連絡先などが内容として含まれた，稼働中の全てのITサービスに関する情報を格納するデータベース又は構造化された文書である。", 
            "ハードウェア，ソフトウェア，ライセンス，文書などで構成された，稼働中のITサービスに対して承認された変更を実施するためのコンポーネントの集合である。", 
            ],
          answer: 0,
          explanation: "<h2>分類：セキュリティ</h2><br><p>設問の例「10月31日の場合は、4月30日以降のデータについて、指定日の状態にファイルを復元できるようにする」ために何本の磁気テープが必要かを考えてみます。指定日のデータを復元するには、指定日の月初に取ったフルバックアップと、毎日記録する差分バックアップ用の磁気テープの2本が必要になります。4月，5月，…，10月までには全部で7つの月が存在します。各月についてフル用と差分用で2本の磁気テープが必要になるので、少なくとも(7×2＝)14本の磁気テープが必要になります。<p>"
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
  color: #2c3e50;
  background: #FCE4EC;
  width:670px;
  margin: 60px auto 0;
  padding:30px;
}

.question-parts{
  width:600px;
  margin:0 auto;
}

.choice-button{
  margin: 10px;
}

.question-container{
  margin-top: 20px;
  display: flex;
  justify-content: flex-start;

}

.choice-txt{
  margin: auto 0 auto 10px;
  background: #F8BBD0;
  width:80%;
  padding:10px;
  border-radius: 5px;
  word-break: normal;
}

.next-button{
  text-align: right;
}
</style>
