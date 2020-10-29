// import firebase from '@/firebase/firestore'
import firebase from "firebase";
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
      questions:[]
    }
  },
  created(){
    var hostName = document.location.hostname;
    var host = 'localhost'
    if(hostName != 'localhost'){
      host = '3.15.222.210'
    }
    // バックエンド(spring boot)のRestful APIを実行しthis.questionsにresponse.data配列を格納
    axios.get(`http://${host}:3000/g_questions`)
      .then(response => {
        console.log(response)
        console.log(response.data[1])
        this.questions = response.data
    })
  },
  mounted(){
    this.colref = firebase.firestore().collection("memos"); // "memos"という名前のコレクションへの参照を作成
    this.questionsDB = firebase.firestore().collection("questionsDB"); // "memos"という名前のコレクションへの参照を作成
  },
  methods:{

    addQuestions(){
      for(var i=0; i<this.questions.length; i++){

        var data = this.questions[i]
        // addの引数に保存したいデータを渡す
        this.questionsDB.add(data).then(function(docRef) {
         // 正常にデータ保存できた時の処理
         console.log("Document written with ID: ", docRef.id);
     }).catch(function(error) {
         // エラー発生時の処理
         console.error("Error adding document: ", error);
     });
      }
    },
    readQuestions(){
      this.questionsDB.onSnapshot(function (querySnapshot) {
        var todos = [];
        querySnapshot.forEach(function (doc) {
          var data = doc.data();
          data.id = doc.id;
          // firestoreの内のデータをtodosに格納
          todos.push(data);
        });
        this.questions = todos
        console.log(this.questions)
    });
  },

    sendItem(data){
      // addの引数に保存したいデータを渡す
      this.colref.add(data).then(function(docRef) {
           // 正常にデータ保存できた時の処理
           console.log("Document written with ID: ", docRef.id);
       }).catch(function(error) {
           // エラー発生時の処理
           console.error("Error adding document: ", error);
       });
    },
    readItem(){
      this.colref.onSnapshot(function (querySnapshot) {
        var todos = [];
        querySnapshot.forEach(function (doc) {
          var data = doc.data();
          data.id = doc.id;
          // firestoreの内のデータをtodosに格納
          todos.push(data);
        });
        console.log(todos)
      });
    },
    scrollToElement() {  
      var element = document.getElementById("target");
      element.scrollIntoView();
      element.scrollIntoView(false);
      element.scrollIntoView({block: "end"});
      element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    }, 
    check(selected, answer){
      if(!this.isPush) this.numOfClick++
      this.explanationFlag = true;
      if(selected === answer){
        this.resultFlag = true
        if(!this.isPush) this.numOfCorrect++
        this.isPush = true
      }else{
        this.resultFlag = false
        this.isPush = true
      }
      this.scrollToElement()

      const data = {
        questionNumber: this.questionNumber + 1,
        answerNumber: answer,
        selectedNumber: selected,
        result: this.resultFlag
      }

      this.sendItem(data)
    },
    nextQuestion(){
      this.explanationFlag = false;
      if (this.questionNumber == (this.questions.length - 1)){
        this.questionNumber = 0
        this.numOfCorrect = 0
        alert("もう問題はありません...はじめの問題に戻ります。")
        this.isPush = false
      }else{
        this.questionNumber++
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