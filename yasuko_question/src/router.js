import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/Home/Index.vue";
import Question from "@/components/Question/Index.vue";

Vue.use(Router);

export default new Router({
  mode:"history",
  routes:[
    {
      path: '/', 
      components: Home 
    }, 
    {
      path: '/question', 
      components: Question
    }
  ]
});
