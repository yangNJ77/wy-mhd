// 引入 Swiper.vue 和 Swiper.vue
import Swiper from './swiper.vue'
import SwiperItem from './swiperItem.vue'

// 暴露
// ESM 的规范在引入时只是看上去像结构赋值
// 其实不是  需要命名暴露
export {
  Swiper,
  SwiperItem
}
