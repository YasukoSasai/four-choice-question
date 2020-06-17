<template>
  <div>
    <Header></Header>
    <router-view></router-view>
    <Footer></Footer> 
  </div>
</template>

<script>
import Header from "@/components/Header/Index.vue";
import Footer from "@/components/Footer/Index.vue";

export default {
  components:{
    Header,
    Footer
  }
};
</script>

<style></style>