<template>
  <div class="navbar">

    <!-- 收起 弹出小图标 -->
    <div class="hamburger-container" style="padding: 0 15px;" @click="toggleSideBar">
      <svg
        :class="{'is-active':isActive}"
        class="hamburger"
        viewBox="0 0 1024 1024"
        xmlns="http://www.w3.org/2000/svg"
        width="64"
        height="64"
      >
        <path d="M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM142.4 642.1L298.7 519a8.84 8.84 0 0 0 0-13.9L142.4 381.9c-5.8-4.6-14.4-.5-14.4 6.9v246.3a8.9 8.9 0 0 0 14.4 7z" />
      </svg>
    </div>

    <!-- 面包屑 -->
    <div class="breadcrumb-container">
      <el-breadcrumb class="app-breadcrumb" separator="/">
        <transition-group name="breadcrumb">
          <el-breadcrumb-item v-for="(item,index) in levelList" :key="item.path">
            <!-- 面包屑中的最后一个元素不能点击 span -->
            <span v-if="index==levelList.length-1" class="no-redirect">{{ item.meta.title }}</span>
            <!-- 点击跳转到对应模块 a标签 -->
            <a v-else @click.prevent="handleLink(item)">{{ item.meta.title }}</a>
          </el-breadcrumb-item>
        </transition-group>
      </el-breadcrumb>
    </div>

    <!-- 个人信息菜单 -->
    <div class="right-menu">
      <el-dropdown class="avatar-container" trigger="click">
        <div class="avatar-wrapper">
          <img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3374292560,529909612&fm=26&gp=0.jpg" alt="">
          <i class="el-icon-caret-bottom" />
        </div>
        <el-dropdown-menu slot="dropdown" class="user-dropdown">
          <el-dropdown-item>
            <span style="display:block;" @click="logout">退出登录</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>

import pathToRegexp from 'path-to-regexp'
import * as defaultSetting from '../../../utils/defaultSetting'

export default {
  data() {
    return {
      levelList: null,
    }
  },
  computed: {
    isActive() {
      return this.$store.state.app.sidebar.opened
    }
  },
  watch: {
    $route() {
      this.getBreadcrumb()
    }
  },
  created() {
    this.getBreadcrumb()
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch('app/toggleSideBar')
    },

    logout() {
      this.$store.dispatch('user/logout')
      this.$router.push(`/adminlogin?redirect=${this.$route.fullPath}`);
    },

    getBreadcrumb() {
      // 过滤掉没有标签属性的路由 返回一个数组
      let matched = this.$route.matched.filter(item => item.meta && item.meta.title)

      // 查看当前路由是否第一个是Users 不是的话加上
      const first = matched[0]
      if (!this.isDashboard(first)) {
        matched = [{ path: '/admin', meta: { title: '首页' }}].concat(matched)
      }

      // 拿到当前路由数组
      this.levelList = matched
    },

    isDashboard(route) {
      const name = route && route.name
      if (!name) {
        return false
      }
      return name.trim().toLocaleLowerCase() === 'Users'.toLocaleLowerCase()
    },

    pathCompile(path) {
      const { params } = this.$route
      var toPath = pathToRegexp.compile(path)
      return toPath(params)
    },

    // 点击路由跳转
    handleLink(item) {
      const { redirect, path, meta } = item
      if (redirect) {
        this.$router.push(redirect)
        return
      }
      this.$router.push(this.pathCompile(path))
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  height: 50px;
  overflow: hidden;
  position: relative;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0,21,41,.08);

  .hamburger-container {
    line-height: 46px;
    height: 100%;
    float: left;
    cursor: pointer;
    transition: background .3s;
    -webkit-tap-highlight-color:transparent;

    &:hover {
      background: rgba(0, 0, 0, 0.15);
    }

    .hamburger {
      display: inline-block;
      vertical-align: middle;
      width: 20px;
      height: 20px;
    }
    .is-active {
      transform: rotate(180deg);
    }
  }

  .breadcrumb-container {
    float: left;

    .app-breadcrumb.el-breadcrumb {
      display: inline-block;
      font-size: 14px;
      line-height: 50px;
      margin-left: 8px;

      .no-redirect {
        color: #97a8be;
        cursor: text;
      }
    }
  }

  .right-menu {
    float: right;
    height: 100%;
    line-height: 50px;

    &:focus {
      outline: none;
    }

    .avatar-container {
      margin-right: 50px;

      .avatar-wrapper {
        margin-top: 5px;

        img{
          display: block;
          width: 40px;
          height: 40px;
          background-color: lightgray;
          border-radius: 20px;
        }

        .el-icon-caret-bottom {
          cursor: pointer;
          position: absolute;
          right: -20px;
          top: 20px;
          font-size: 12px;
        }
      }
    }
  }

  .language-change {
    width: 100px;
    margin-right: 20px;
    cursor: pointer;
  }
}
</style>
