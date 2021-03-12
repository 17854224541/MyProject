
import { removeToken } from '@/utils/auth'

const state = {
  name: '',
  avatar: '',
  roles:[]
}

const mutations = {
  SET_NAME: (state, name) => {
    state.name = name
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar
  },
  SET_ROLES: (state, roles) => {
    state.roles = roles
  }
}

const actions = {

  setUserInfo({ commit },userInfo) {
    commit('SET_ROLES', userInfo.roles)
    commit('SET_NAME', userInfo.name)
    commit('SET_AVATAR', userInfo.avatar)
  },

  //退出登录
  logout({ commit }) {
    commit('SET_ROLES', [])
    commit('SET_NAME', '')
    commit('SET_AVATAR', '')
    removeToken()  //清空本地token
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

