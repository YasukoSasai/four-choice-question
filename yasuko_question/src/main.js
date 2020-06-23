import Vue from 'vue'
import App from "@/components/App/Index.vue";
import Vuetify from 'vuetify'
import "vuetify/dist/vuetify.min.css";
import router from './router'

import firebase from 'firebase'


const firebaseConfig = {
  apiKey: "AIzaSyA19l8pnb8Fk1e_1iKqVV4ibqJFf1VvNqs",
  authDomain: "y-question.firebaseapp.com",
  databaseURL: "https://y-question.firebaseio.com",
  projectId: "y-question",
  storageBucket: "y-question.appspot.com",
  messagingSenderId: "898183518714",
  appId: "1:898183518714:web:0ce832a5c3092ea6bc6c43"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

Vue.use(Vuetify)

export const db = firebase.firestore()

Vue.config.productionTip = false;

new Vue({
  Vuetify,
  router,
  render: h => h(App),
}).$mount('#app')
