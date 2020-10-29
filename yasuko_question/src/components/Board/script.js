// import firebase from "firebase";
import axios from 'axios'

export default {
  data(){
    return{
      insertQuestionObj: {},
      questionNumber: null,
      question: "",
      choice1: "",
      choice2: "",
      choice3: "",
      choice4: "",
      answer: null,
      explanation: ""
    }
  },
  created(){
  },
  mounted(){
  },
  methods:{
    async insertQuestion(){
      var hostName = document.location.hostname;
      var host = 'localhost'
      if(hostName != 'localhost'){
        host = '3.15.222.210'
      }
         //JSONデータを送信(axiosはデフォルトでJSONを送信)

    //   var data = {
    //     "questionNumber": 10,
    //        "question": "（ア）に最もよくあてはまる選択肢を 1 つ選べ。ニューラルネットワークは高い表現力を持つ反面,過学習をしやすいという性質を持つため,それを改善させる方法が多数考考案されている。例えば,学習の際に一部のノードを無効化する（ア）,一部の層の出力を正規化する（イ）,データの水増しをしてデータの不足を補う（ウ）,パラメータのノルムにペナルティを課す（エ）などがそれに当たる。",
    //        "choices": [
    //            "バッチ正規化",
    //            "ドロップアウト",
    //            "データ拡張.",
    //            "L2正則化"
    //        ],
    //        "answer": 1,
    //        "explanation": "<p>正解は2である。</P><br><p>バッチ正規化：一部の層の出力を正規化する。</p><br><p>ドロップアウト：学習の際に一部のノードを無効化する。</p><br><p>データ拡張：データの水増しをしてデータの不足を補う。</p><br><p>L2正則化：パラメータのノルムにペナルティを課す。</p>"
    //    };
        this.insertQuestionObj = {
            "questionNumber": this.questionNumber,
            "question": this.question,
            "choices": [this.choice1, this.choice2, this.choice3, this.choice4],
            "answer": this.answer,
            "explanation": this.explanation
        }
        console.log(this.insertQuestionObj)
        await axios.post(`http://${host}:3000/insert_gQuestions`, this.insertQuestionObj);
    }
  }
}