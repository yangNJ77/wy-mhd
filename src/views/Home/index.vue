<template>
  <div class="page-home">
    <router-view />
    <!-- 底部导航 begin -->
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
          <li class="item home">
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
    <!-- 底部导航 end -->
  </div>
</template>

<script>
export default {
  name: 'home'
}
</script>

<style lang="scss" scoped>
//引入公用的mixins: scss

@import "@/assets/styles/mixins.scss";

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
    @include border-top;
    // background: cornsilk;
    .nav-list{
      display: flex;
      flex-direction:row;
      justify-content : center;
      .item{
        height: 100%;
        width: 19%;
        text-align: center;
        .icon-gengxin{
          width: 32px;
          height: 32px;
          display: inline-block;
          background-image: url(../../../public/icon/faxian.png);
          background-repeat: no-repeat;
          background-size: 100%;
        }
        .icon-manhuaquan{
          width: 32px;
          height: 32px;
          display: inline-block;
          background-image: url(../../../public/icon/gengxin.png);
          background-repeat: no-repeat;
          background-size: 100%;
        }
        .icon-shujia{
          width: 32px;
          height: 32px;
          display: inline-block;
          background-image: url(../../../public/icon/shujia.png);
          background-repeat: no-repeat;
          background-size: 100%;
        }
        .icon-tuijian_ball{
          width: 32px;
          height: 32px;
          display: inline-block;
          background-image: url(../../../public/icon/shouye.png);
          background-repeat: no-repeat;
          background-size: 100%;
        }
        .icon-myself{
          width: 32px;
          height: 32px;
          display: inline-block;
          background-image: url(../../../public/icon/wode.png);
          background-repeat: no-repeat;
          background-size: 100%;
        }
        .text{
            font-size: 12px;
            color: #999;
          }
      }
    }
  }
}
</style>
