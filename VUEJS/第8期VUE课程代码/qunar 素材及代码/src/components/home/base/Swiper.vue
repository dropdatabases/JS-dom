<template>
    <div class="swiper">
      <swiper :options="swiperOption">
        <!-- slides -->
        <swiper-slide>
          <img class='swiper-img' src="http://img1.qunarzz.com/piao/fusion/1706/b8/a8e8ff02b094c802.jpg_750x200_ddaec8e5.jpg" alt="">
        </swiper-slide>
        <swiper-slide>
          <img class='swiper-img' src="http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/87a224d0349d94a11e97f31aa1aba4f5.jpg_750x200_1f78af87.jpg" alt="">
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>
</template>

<script>
    export default {
        name:"HomeSwiper",
        data() {
            return {
              swiperOption: {
                pagination: {
                  el: '.swiper-pagination'
                }
              }
            }
        }
    }
</script>
<style lang="stylus" scoped>
.swiper >>> .swiper-pagination-bullet-active
    background-color:#fff
.swiper
  height:2.19rem
  .swiper-container
    height:100%
    .swiper-img
      width:100%
</style>
