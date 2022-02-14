<template>
  <div class="home">
    <Head class="head"></Head>
    <div>
      <router-view></router-view>
    </div>
    <Footer></Footer>
  </div>
</template>
<script >
import Head from './head.vue'
import Footer from './fotter.vue'
export default {
  components: {
    Head,
    Footer
  }
}

</script>
<style scoped>
.home {
  height: 100%;
}
.head{
  width: 100%;
  position: fixed;
  top:0;
  z-index: 99;
  background: #fff;
}
</style>
