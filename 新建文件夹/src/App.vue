<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>

import { mapActions , mapGetters } from 'vuex'

export default {
  name: 'App',
  computed:{
    myname(){
      return this.$store.state.app.device
    }
  },
  methods:{
    myclick(){
      this.$store.dispatch('app/toggleSideBar')
    }
  }
}
</script>
