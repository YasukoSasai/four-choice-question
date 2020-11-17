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
      console.log(hostName)
      var host = 'localhost'
      if(hostName != 'localhost'){
        host = '3.15.222.210'
      }
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