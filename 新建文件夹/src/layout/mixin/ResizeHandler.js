import store from '@/store'

const { body } = document

const WIDTH = 992 //默认给个992

export default {
  watch: {
    $route() {
      //监听路由地址 移动设备下 点击侧边栏选择菜单之后 再收起侧边栏
      // if (this.device === 'mobile' && this.sidebar.opened) {
      //   store.dispatch('app/closeSideBar')
      // }
      if (this.sidebar) {
        if (this.device === 'mobile' && this.sidebar.opened) {
          store.dispatch('app/closeSideBar')
        }
      }
    }
  },
  beforeMount() {
    window.addEventListener('resize', this.$_resizeHandler)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.$_resizeHandler)
  },
  mounted() {
    //初始化的时候
    const isMobile = this.$_isMobile()
    //如果是移动设备 切换到移动设备 关闭侧边栏
    if (isMobile) {
      store.dispatch('app/toggleDevice', 'mobile')
      store.dispatch('app/closeSideBar')
    }
  },
  methods: {
    $_isMobile() {
      const rect = body.getBoundingClientRect()
      return rect.width - 1 < WIDTH
    },
    $_resizeHandler() {
      if (!document.hidden) {
        const isMobile = this.$_isMobile()
        store.dispatch('app/toggleDevice', isMobile ? 'mobile' : 'desktop')

        if (isMobile) {
          store.dispatch('app/closeSideBar')
        }
      }
    }
  }
}
