<template>
  <div class="page-home">
    <router-view />
    <footer class="view-footer">
      <div class="footer-nav">
        <ul class="nav-list">
          <li class="item">
            <a href="#" title="发现">
              <figure class="figure">
                <i class="icon-manhuaquan"></i>
                <figcaption class="text">发现</figcaption>
              </figure>
            </a>
          </li>
          <li class="item">
            <a href="#" title="更新">
              <figure class="figure">
                <i class="icon-gengxin"></i>
                <figcaption class="text">更新</figcaption>
              </figure>
            </a>
          </li>
          <li class="item home active">
            <a href="#" title="首页" rel="nofollow">
              <figure class="figure">
                <i class="icon-tuijian_ball"></i>
                <figcaption class="text">首页</figcaption>
              </figure>
            </a>
          </li>
          <li class="item">
            <a href="#" title="书架" rel="nofollow">
              <figure class="figure">
                <i class="icon-shujia"></i>
                <figcaption class="text">书架</figcaption>
              </figure>
            </a>
          </li>
          <li class="item">
            <a href="#" title="我的" rel="nofollow">
              <figure class="figure">
                <i class="icon-myself"></i>
                <figcaption class="text">我的</figcaption>
              </figure>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'home'
}
</script>

<style lang="scss" scoped>
.page-home {
  display: flex;
  flex-direction: column;
  height: 100%;
  .footer-nav{
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 50;
    width: 100%;
    height: 52px;
    background: cornsilk;
    .nav-list{
      display: flex;
      flex-direction:row;
      justify-content : center;
      .item{
        height: 100%;
        width: 19%;
        text-align: center;
      }
    }
  }
}
</style>
