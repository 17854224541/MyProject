<template>
  <div :class="classObj" class="app-wrapper">
    <!-- 移动端黑色背景颜色 -->
    <div
      v-if="device==='mobile' && sidebar.opened"
      class="drawer-bg"
      @click="handleClickOutside"
    >
    </div>

    <!-- 侧边栏组件 -->
    <sidebar class="sidebar-container" />

    <div class="main-container">
      <!-- 导航组件 -->
      <div class="fixed-header">
        <navbar />
      </div>
      <!-- 页面主容器组件 -->
      <div class="app-main">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import ResizeMixin from './mixin/ResizeHandler'

export default {
  name: 'Layout',
  components: {
    Navbar,
    Sidebar
  },
  mixins: [ResizeMixin],
  computed: {
    sidebar() {
      return this.$store.state.app.sidebar
    },
    device() {
      return this.$store.state.app.device
    },
    classObj() {
      return {
        hideSidebar: !this.sidebar.opened,
        openSidebar: this.sidebar.opened,
        withoutAnimation: this.sidebar.withoutAnimation,
        mobile: this.device === 'mobile'
      }
    }
  },
  methods: {
    handleClickOutside() {
      this.$store.dispatch('app/closeSideBar', { withoutAnimation: false })
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

  .app-main {
    min-height: calc(100vh - 50px);
    width: 100%;
    position: relative;
    overflow: hidden;
    margin-top: 50px;
  }

  //移动端黑色蒙板
  .drawer-bg {
    background: #000;
    opacity: 0.3;
    width: 100%;
    top: 0;
    height: 100%;
    position: absolute;
    z-index: 999;
  }
  .main-container {
    min-height: 100%;
    transition: margin-left .28s;
    margin-left: $sideBarWidth;
    position: relative;
  }
  .fixed-header {
    position: fixed;
    top: 0;
    right: 0;
    z-index: 9;
    width: calc(100% - #{$sideBarWidth});
    transition: all 0.28s;
  }
  .hideSidebar .fixed-header {
    width: calc(100% - 54px)
  }
  .mobile .fixed-header {
    width: 100%;
  }
</style>
