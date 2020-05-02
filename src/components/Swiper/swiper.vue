<template>
  <div class="page-homeitem">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <!--
        <div class="swiper-slide">Slide 1</div>
        <div class="swiper-slide">Slide 2</div>
        <div class="swiper-slide">Slide 3</div>
        -->
        <slot />
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
      <div class="btn-search"><i class="ift-search"></i></div>
    </div>
  </div>
</template>

<script>
// 引入 Swiper 核心 与 Swiper 的样式
import Swiper from 'swiper'
import 'swiper/css/swiper.css'

export default {
  name: 'Swiper',

  props: {
    autoplay: {
      type: Number,
      default: 0
    },
    loop: {
      type: Boolean,
      default: true
    }

  },

  mounted () {
    /* eslint-disable */
    new Swiper('.swiper-container',{
      // 如果需要分页器
      pagination: {
        el: '.swiper-pagination',
      },

      autoplay: this.autoplay ? {
        delay: this.autoplay,
        stopOnLastSlide: false,
        disableOnInteraction: true,

      } : false,

      loop : this.loop,

    })
    /* eslint-enable */
  }
}
</script>

<style lang='scss'>
.swiper-container{
  width: 100%;
  height: 250px;
}
.swiper-pagination-bullet-active{
  background-color: red;
}

</style>
