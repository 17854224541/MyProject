// 导入vue
import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'

// 导入全局样式
import '@/styles/index.scss'
import 'normalize.css/normalize.css'

// 导入element-UI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// elementui内部组件翻译
import enLocale from 'element-ui/lib/locale/lang/en'
import zhCNLocale from 'element-ui/lib/locale/lang/zh-CN'
import zhTWLocale from 'element-ui/lib/locale/lang/zh-TW'

// 导入全局组件
import Layout from './components/layout'

Vue.config.productionTip = false
Vue.use(ElementUI, {  })
Vue.component('Layout', Layout)

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
