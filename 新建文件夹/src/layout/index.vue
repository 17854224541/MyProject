<template>
  <div class="app-wrapper">

    <div class="main-container">
      <!-- 导航组件 -->
      <div class="fixed-header">
        <Header v-bind:device="device"></Header>
      </div>
      <!-- 页面主容器组件 -->
      <Main v-bind:device="device"></Main>
    </div>
    <a @click="scrollToTop()" class="scroll-to-top-content">
      <div>
        ︿
      </div>
    </a>

  </div>
</template>

<script>

import  Header  from './components/Header'
// import  Footer  from './components/Footer'
import  Main from './components/Main'
import ResizeMixin from './mixin/ResizeHandler'

export default {
  name: 'MainLayout',
  components: {
    Header,
    // Footer,
    Main
  },
  mixins: [ResizeMixin],
  computed: {
    device() {
      return this.$store.state.app.device
    },
    classObj() {
      return {
        hideSidebar: !this.sidebar.opened,
        openSidebar: this.sidebar.opened,
        mobile: this.device === 'mobile'
      }
    }
  },
  methods: {
    handleClickOutside() {
      this.$store.dispatch('app/closeSideBar');
    },
    scrollToTop() {
      window.scrollTo(0,0);
    }
  }
}
</script>

<style lang="scss" scoped>

  @import url('//at.alicdn.com/t/font_1216258_qqh7k7sn2fd.css');
  @import "@/styles/mixin.scss";
  @import "@/styles/variables.scss";

  //layout模块下主容器
  .app-wrapper {
    @include clearfix;
    position: relative;
    height: 100%;
    width: 100%;
    &.mobile.openSidebar{
      position: fixed;
      top: 0;
    }
  }

  //右侧主容器
  .main-container {
    min-height: 100%;
    transition: margin-left .28s;
    position: relative;
  }

  //普通状态下的面包屑
  .openSidebar .fixed-header {
    position: fixed;
    top: 0;
    right: 0;
    z-index: 9;
    width: calc(100% - #{$sideBarWidth});
    transition: all 0.28s;
  }

  //关闭菜单栏状态下的面包屑
  .hideSidebar .fixed-header {
    position: fixed;
    top: 0;
    right: 0;
    z-index: 9;
    width: calc(100% - 54px);
    transition: all 0.28s;
  }

  //手机状态下的面包屑
  .mobile .fixed-header {
    position: fixed;
    top: 0;
    right: 0;
    z-index: 9;
    width: 100%;
    transition: all 0.28s;
  }

  //手机状态下的黑色蒙板
  .drawer-bg {
    background: #000;
    opacity: 0.3;
    width: 100%;
    top: 0;
    height: 100%;
    position: absolute;
    z-index: 999;
  }

  //返回顶部
  .scroll-to-top-content{
    position: fixed;
    bottom: 48px;
    right: 50px;
    width: 30px;
    height: 30px;
    background-color: #d2d0d0;
    z-index: 9;
    color: #FFFFFF;
    text-align: center;
    line-height: 25px;
    font-weight: 900;
  }

</style>
