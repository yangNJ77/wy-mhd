<template>
  <div class="vive-bady">
    <!-- 搜素小图标 -->
    <div class="btn-search">
      <i class="ift-search"></i>
    </div>
    <!-- 轮播图 -->
    <Swiper class="my-swiper" :autoplay='5000' v-if="bannerList.length > 0">
      <SwiperItem v-for="item in bannerList" :key="item.id">
        <img :src="item.imageurl" alt />
      </SwiperItem>
    </Swiper>

    <!-- 菜单 -->
    <IndexMenu></IndexMenu>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from '@/components/Swiper'
import { getBanner } from '@/api/cartoon'
import IndexMenu from './components/IndexMenu'

export default {
  name: 'HomeItem',

  components: {
    Swiper,
    SwiperItem,
    IndexMenu
  },

  data () {
    // 数据考虑 -》data？ props？ computed？ state？ getter？
    // 数据的格式 -》string? obj? number? array?
    return {
      bannerList: []
    }
  },

  created () {
    getBanner().then(res => {
      if (res.code === 200) {
        this.bannerList = res.info
      } else {
        // 不OK 就报错
        // TODO 目前先使用 alert 后面可以去用 vant 组件中 组件
        alert(res.code_msg)
      }
    }).catch(err => {
      console.log(err)
      alert('网络异常 请稍后重试')
    })
  }
}
</script>
<style lang='scss' scoped>
.vive-bady{
  height: 100%;
  .btn-search{
    width: 30px;
    height: 30px;
    background-color:pink;
    border-radius: 50%;
    position: absolute;
    right: 15px;
    top: 15px;
    z-index: 10;
    text-align: center;

    .ift-search{
      display: inline-block;
      width: 20px;
      height: 20px;
      background-image: url(../../../../public/icon/sousu.png);
      background-repeat: no-repeat;
      background-size: 100%;
      z-index: 100;
      line-height: 30px;
      margin-top: 4px;
    }
  }
  .my-swiper img{
  width: 100%;
  }
}

</style>
