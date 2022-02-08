<template>
  <div class="home">
    <div class="head">
      <img src="../assets/logo.png" alt class="logo" />
      <el-menu
        :default-active="activeIndex"
        class="nav"
        mode="horizontal"
        @select="handleSelect"
      >
        <el-menu-item index="1">首页</el-menu-item>
        <el-sub-menu index="2">
          <template #title>关于我们</template>
          <el-menu-item index="2-1">企业文化</el-menu-item>
          <el-menu-item index="2-2">社会责任</el-menu-item>
          <el-menu-item index="2-3">加入我们</el-menu-item>
          <el-menu-item index="2-2">联系我们</el-menu-item>
          <el-menu-item index="2-3">透明度报告</el-menu-item>
        </el-sub-menu>
        <el-menu-item index="3">新闻动态</el-menu-item>
        <el-menu-item index="4">创作服务平台</el-menu-item>
        <el-menu-item index="4">开放平台</el-menu-item>
        <el-menu-item index="4">相关业务</el-menu-item>
        <el-menu-item index="4">认证与合作</el-menu-item>
      </el-menu>
      <!-- <ul>
        <li>首页</li>
        <li>
          关于我们
          <div class="about_list" v-show="true">
            <div>企业文化</div>
            <div>社会责任</div>
            <div>加入我们</div>
            <div>联系我们</div>
            <div>透明度报告</div>
          </div>
        </li>
        <li>新闻动态</li>
        <li>创作服务平台</li>
        <li>开放平台</li>
        <li>
          相关业务
          <div class="product_list" v-show="false">
            <div>抖音直播</div>
            <div>系列产品</div>
          </div>
        </li>
        <li>
          认证与合作
          <div class="business_list" v-show="false">
            <div>身份认证</div>
            <div>机构入驻</div>
            <div>企业合作</div>
            <div>电商入驻</div>
          </div>
        </li>
        <li></li>
      </ul>-->
    </div>
  </div>
</template>
<script setup>

</script>
<style>
.home {
  height: 100%;
}
.home > .head {
  padding: 0;
  height: 120px;
  border: 1px solid #f0f0f0;
}
.logo {
  height: 60px;
  margin: 30px 100px;
  float: left;
}
.nav {
  height: 120px;
  margin-left: 200px;
  left: 500px;
  font-size: 20px;
}
.el-menu--horizontal>.el-sub-menu .el-sub-menu__title{
  font-size: 20px;
}
.el-menu--horizontal>.el-menu-item{
  font-size: 20px;
}
.el-menu--horizontal > .el-menu-item {
  border-bottom: none;
  height: 1rem;
  line-height: 0.5rem;
  text-align: center;
}
.el-menu--horizontal > .el-menu-item.is-active {
  border-bottom: none;
}
/* ul {
  height: 100px;
  float: right;
}
li {
  margin: 0 45px;
  font-size: 20px;
  line-height: 120px;
  color: #000;
  position: relative;
}
li:hover {
  font-weight: bold;
  cursor: pointer;
}
.about_list {
  position: absolute;
  top: 120px;
} */
</style>
