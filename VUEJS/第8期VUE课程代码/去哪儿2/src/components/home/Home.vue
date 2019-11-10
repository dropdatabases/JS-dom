<template>
    <div class="home">
      <home-header></home-header>
      <home-swiper :swiperList="swiperList"></home-swiper>
      <home-nav :imgsList="iconList"></home-nav>
      <home-favourite :favList="recommendList"></home-favourite>
      <home-weekend :weekendList="weekendList"></home-weekend>
    </div>
</template>

<script>
  import {getHome} from '@/api'

  import HomeHeader from './base/Header'
  import HomeSwiper from './base/Swiper'
  import HomeNav from './base/Nav'
  import HomeFavourite from './base/Favourite'
  import HomeWeekend from './base/Weekend'
  export default {
      name:'Home',
      components:{
        HomeHeader,
        HomeSwiper,
        HomeNav,
        HomeFavourite,
        HomeWeekend
      },
      data(){
        return {
          iconList:[],
          recommendList:[],
          swiperList:[],
          weekendList:[]
        }
      },
      created(){
        this.getData()
      },
      methods:{
          async getData(){
            let {iconList,recommendList,swiperList,weekendList} = await getHome()
            this.iconList = iconList
            this.recommendList = recommendList
            this.swiperList = swiperList
            this.weekendList = weekendList
          }
      }
  }
</script>

<style scoped>

</style>
