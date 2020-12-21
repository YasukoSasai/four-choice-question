import axios from 'axios'

export default {
  data(){
    return{
      colref: null,
      questionNumber: 0,
      explanationFlag: false,
      resultFlag: null,
      numOfCorrect: 0,
      rateOfCorrect:0,
      numOfClick: 0,
      isPush: false,
      questions:null
    }
  },
  computed: {
    UrlParamOfQuestionNumber () {
      return this.$route.params.questionNumber
    }
  },
  created(){
    var hostName = document.location.hostname;
    console.log(hostName)
    var host = 'localhost'
    if(hostName != 'localhost'){
      host = '3.15.222.210'
    }
    // バックエンド(spring boot)のRestful APIを実行しthis.questionsにresponse.data配列を格納
    // responseのresponse.dataをthis.questionに代入してフロンで使えるようにしている（this viewインスタンス）
    axios.get(`http://${host}:3000/g_questions`) 
      .then(response => {
        console.log(response)
        console.log(response.data[1])
        this.questions = response.data
        console.log(1)
        console.log(this)
        console.log(2)
    })
  },
  methods:{
    
    scrollToElement() {  
      var element = document.getElementById("target");
      element.scrollIntoView();
      element.scrollIntoView(false);
      element.scrollIntoView({block: "end"});
      element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    }, 
    check(selected){
      if(!this.isPush) this.numOfClick++
      this.explanationFlag = true;
      let answer = this.questions[this.UrlParamOfQuestionNumber - 1].answer
      if(selected === answer){
        this.resultFlag = true
        if(!this.isPush) this.numOfCorrect++
        this.isPush = true
      }else{
        this.resultFlag = false
        this.isPush = true
      }
      this.scrollToElement()
    },
    nextQuestion(){
      this.explanationFlag = false;
      if (this.UrlParamOfQuestionNumber == (this.questions.length)){
        this.questionNumber = 0
        this.numOfCorrect = 0
        alert("もう問題はありません...はじめの問題に戻ります。")
        this.$router.push("/question/1")
        this.isPush = false
      }else{
        this.questionNumber++
        this.$router.push(`/question/${Number(this.UrlParamOfQuestionNumber)+1}`)
        // this.$route.push("/question/3")
        this.isPush = false
      }
      window.scrollTo( 0, 0 );
    }
  },
  filters: {
    rounding(value){
      return Math.round(value)
    }
  }
}