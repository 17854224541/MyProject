<template>
  <section class="main">
    <transition name="fade-transform" mode="out-in">
      <router-view v-bind:device="device" :key="key"></router-view>
    </transition>
  </section>
</template>

<script>
import * as defaultSetting from '../../utils/defaultSetting'
export default {
  name: 'Main',
  props:{
    device:null
  },
  computed: {
    key() {
      return this.$route.fullPath
    }
  }
}
</script>

<style lang="scss" scoped>
  .main {
    min-height: calc(100vh - 50px);
    width: 100%;
    position: relative;
    overflow: hidden;
  }
</style>
