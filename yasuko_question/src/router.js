import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/App/Home.vue";
import Index from "@/components/App/Index.vue";

// const Home = ()=> import(/* webpackChunkName: "Home" */ "@/components/App/Home.vue");
// const Index = ()=> import(/* webpackChunkName: "Index" */ "@/components/App/Index.vue");

Vue.use(Router);

export default new Router({
  // mode:"history",
  routes:[
    {
      path:'/', components: Home 
    }, 
    {
      path:'/index', 
      components:Index
    }
      
  ]
});
