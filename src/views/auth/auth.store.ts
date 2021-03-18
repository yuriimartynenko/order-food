import { actionTree, getterTree, mutationTree } from 'typed-vuex'

import { authService } from './auth.service'

const state = () => ({
  accessToken: localStorage.getItem('token') || null,
  userId: localStorage.getItem('userId') || null,
  userName: '',
  userEmail: ''
})

const mutations = mutationTree(state, {
  SET_ACCESS_TOKEN (state, payload) {
    state.accessToken = payload
  },

  SET_USER_PROFILE (state, payload) {
    state.userEmail = payload.email
    state.userName = payload.nickname
  },

  SET_USER_USER_ID (state, payload) {
    state.userId = payload
  },

  REMOVE_AUTH_STATE (state) {
    state.accessToken = null
    state.userId = null
    localStorage.removeItem('token')
    localStorage.removeItem('userId')
  }
})

const actions = actionTree({ state, mutations }, {
  async signUp ({ commit, dispatch }, payload) {
    const res = await authService.signUp(payload)
    if (!res) return

    dispatch('setUserData', { authData: payload, data: res })
    commit('SET_USER_PROFILE', { nickname: payload.nickname, email: res.email })
    commit('SET_USER_USER_ID', res.localId)
    commit('SET_ACCESS_TOKEN', res.idToken)
  },

  async login ({ commit, dispatch }, payload) {
    const res = await authService.login(payload)
    if (!res) return

    commit('SET_USER_PROFILE', { token: res.idToken, userId: res.localId })
    commit('SET_USER_USER_ID', res.localId)
    commit('SET_ACCESS_TOKEN', res.idToken)

    localStorage.setItem('token', res.idToken)
    localStorage.setItem('userId', res.localId)

    dispatch('getUser')
  },

  async setUserData ({ commit }, { authData, data }) {
    const userData = { email: authData.email, nickname: authData.nickname }
    await authService.setUser(data.localId, authData)

    commit('SET_USER_PROFILE', userData)

    localStorage.setItem('token', data.idToken)
    localStorage.setItem('userId', data.localId)
  },

  autoLogin ({ state, dispatch }) {
    if (!state.accessToken) return

    dispatch('getUser')
  },

  async getUser ({ state, commit }) {
    const res = await authService.getUser(state.userId)
    if (!res) return

    const user = Object.values(res)
    commit('SET_USER_PROFILE', user[0])
  }
})

const getters = getterTree(state, {
  isLoggedIn: (state) => {
    if (!!state.accessToken && !!state.userId) return true
  }
})

export const authStore = {
  namespaced: true,

  state,
  mutations,
  actions,
  getters
}
