<template>
  <div class="home">
    <Head></Head>
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
<style>
.home {
  height: 100%;
}
</style>
