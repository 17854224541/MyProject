import axios from 'axios'
import { MessageBox, Message } from 'element-ui'
import store from '@/store'
import router from '@/router'
import { getToken } from '@/utils/auth'

// const baseUrl = process.env.VUE_APP_API_SERVER + process.env.VUE_APP_BASE_API

// 创建一个axios请求实例
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // mock时使用
  // baseURL: baseUrl, // 非mock下使用
  withCredentials: true,
  timeout: 15000 // 请求超时时间
})

// request拦截器 在这配置一些发送请求通用功能
service.interceptors.request.use(
  config => {
    config.headers['token'] = getToken()
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// respone拦截器 在这里配置一些请求完成通用功能
service.interceptors.response.use(
  response => {
    const res = response.data
    if (res.code !== 200) {
      if (res.code === 401) { // token失效
        MessageBox.confirm('请求失败了', '重新登录?', {
          confirmButtonText: '重新登录',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          store.dispatch('user/logout')
          router.push('/login')
        })
      } else if (res.code === 500) {
        Message({
          message: '网络异常，请重试',
          type: 'error',
          duration: 5 * 1000
        })
      } else {
        Message({
          message: res.message || '网络异常，请重试',
          type: 'error',
          duration: 5 * 1000
        })
      }
      return Promise.reject(res.message || 'error')
    }
    return Promise.resolve(res)
  },
  error => {
    Message({
      message: error.message || '网络异常，请重试',
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
