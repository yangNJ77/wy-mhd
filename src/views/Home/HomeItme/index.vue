<template>
  <Swiper class="my-swiper" :autoplay='2000'>
    <SwiperItem>
      <img src="https://cms.samanlehua.com/cms/chendan/7d5c4780-7acf-11ea-b8e1-216d908441cf.jpg-noresize.webp" alt="我就是牛逼"/>
    </SwiperItem>
    <SwiperItem>
      <img src="https://cms.samanlehua.com/cms/chendan/886f51b0-8ab2-11ea-8ae7-f7ba84e6ad0b.jpg-noresize.webp" alt="我就是牛逼"/>
    </SwiperItem>
    <SwiperItem>
      <img src="https://cms.samanlehua.com/cms/chendan/cceca060-7acf-11ea-bb66-cd095c201b78.jpg-noresize.webp" alt="我就是牛逼"/>
    </SwiperItem>
    <SwiperItem>
      <img src="https://cms.samanlehua.com/cms/chendan/4d7582a0-8ab2-11ea-b4e2-adcff6c478aa.jpg-noresize.webp" alt="我就是牛逼"/>
    </SwiperItem>
  </Swiper>
</template>

<script>
import { Swiper, SwiperItem } from '@/components/Swiper'

export default {
  name: 'HomeItem',

  components: {
    Swiper,
    SwiperItem
  }
}
</script>
<style lang='scss' scoped>
.my-swiper img{
  width: 100%;
}
</style>
