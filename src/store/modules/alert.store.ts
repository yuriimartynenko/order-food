import { actionTree, mutationTree } from 'typed-vuex'

const state = () => ({
  isAlert: false,
  message: '',
  theme: 'success',
  timeout: 3000,
  isDelay: false
})

const mutations = mutationTree(state, {
  SET_ALERT_STATUS (state: any, payload: boolean) {
    state.isAlert = payload
  },

  SET_MESSAGE (state, payload: string) {
    state.message = payload
  },

  SET_THEME (state, payload: string) {
    state.theme = payload
  },

  SET_TIMEOUT (state, payload: number) {
    state.timeout = payload
  }
})

const actions = actionTree({ state, mutations }, {})

export const alertStore = {
  namespaced: true,

  state,
  mutations,
  actions
}
