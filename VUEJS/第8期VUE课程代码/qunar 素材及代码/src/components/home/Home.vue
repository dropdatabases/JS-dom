<template>
    <div class="home">
      <home-header></home-header>
      <home-swiper></home-swiper>
      <home-nav></home-nav>
    </div>
</template>

<script>
  import HomeHeader from './base/Header'
  import HomeSwiper from './base/Swiper'
  import HomeNav from './base/Nav'
  export default {
      name:'Home',
      components:{
        HomeHeader,
        HomeSwiper,
        HomeNav
      }
  }
</script>

<style scoped>

</style>
