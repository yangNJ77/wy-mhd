<template>
  <div class="page-gengxin">
    <header class="view-header">
      <ul class="bar-list">
        <li class="topbar-item">
          <span class="date-item">周二</span>
        </li>

        <li class="topbar-item">
          <span class="date-item">周二</span>
        </li>
        <li class="topbar-item">
          <span class="date-item">周三</span>
        </li>
        <li class="topbar-item">
          <span class="date-item">周四</span>
        </li>
        <li class="topbar-item">
          <span class="date-item">周五</span>
        </li>
        <li class="topbar-item">
          <span class="date-item">昨天</span>
        </li>
        <li class="topbar-item active">
          <span class="date-item">今天</span>
        </li>
      </ul>
    </header>

    <!-- 内容 -->
    <ViveBody></ViveBody>
  </div>
</template>

<script>
import ViveBody from './components/IndexVive'
export default {
  name: 'Gengxing',

  components: {
    ViveBody
  }
}
</script>

<style lang='scss' scoped>
.view-header{
  width: 100%;
  height: 44px;
  .bar-list{
    width: 100%;
    height: 100%;
    background: #fc6976;
    display: flex;
    flex-direction: row;
    justify-content:center;

    .topbar-item{
      height: 44px;
      line-height: 44px;
      width: 14%;
      text-align: center;
      .date-item{
        font-size: 14px;
        color: #fff;
        z-index: 20;
      }
    }
  }
}
</style>
