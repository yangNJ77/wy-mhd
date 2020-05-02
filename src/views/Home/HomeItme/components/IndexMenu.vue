<template>
  <div class="menu">
      <ul class="menu-warp">
        <li class="card">
          <a href="#" title="日更漫画">
            <div class="card-graph">
              <img src="//cms.samanlehua.com/cms/book/027/200/409/25934.jpg-noresize.webp" alt="日更漫画" />
            </div>
            <div class="title-tc">日更</div>
          </a>
        </li>
        <li class="card">
          <a href="#" title="分类漫画">
            <div class="card-graph">
              <img src="//cms.samanlehua.com/cms/book/027/200/409/25935.jpg-noresize.webp" alt="分类漫画" />
            </div>
            <div class="title-tc">分类</div>
          </a>
        </li>
        <li class="card">
          <a href="#" title="排行漫画">
            <div class="card-graph">
              <img src="//cms.samanlehua.com/cms/book/027/200/409/25933.jpg-noresize.webp" alt="排行漫画" />
            </div>
            <div class="title-tc">排行</div>
          </a>
        </li>
        <li class="card">
          <a href="#" title="下载app">
            <div class="card-graph">
              <img src="//cms.samanlehua.com/cms/book/027/200/409/25937.jpg-noresize.webp" alt="下载app" />
            </div>
            <div class="title-tc">下载app</div>
          </a>
        </li>
        <li class="card">
          <a href="#" title="新作漫画">
            <div class="card-graph">
              <img src="//cms.samanlehua.com/cms/book/027/200/409/25936.jpg-noresize.webp" alt="新作漫画" />
            </div>
            <div class="title-tc">新作</div>
          </a>
        </li>
      </ul>
  </div>
</template>

<script>
export default {
  name: 'IndexMenu'
}
</script>

<style lang="scss" scoped>
.menu{
  height: 100%;
  .menu-warp{
    display: flex;
    flex-direction: row;
    justify-content: center;
    .card{
      width: 19%;
      text-align: center;
      img{
        width: 40px;
        height: 40px;
      }
      .title-tc{
        color: #999;
        font-size: 14px;
        margin-top: 5px;
      }
    }
  }
}

</style>
