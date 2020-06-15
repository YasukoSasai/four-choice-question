import Vue from 'vue'
import App0 from "./App.vue";
// import App from "@/components/App/Index.vue";
import Vuetify from 'vuetify'
import "vuetify/dist/vuetify.min.css";

Vue.use(Vuetify)

Vue.config.productionTip = false

new Vue({
  render: h => h(App0),
}).$mount('#app')
