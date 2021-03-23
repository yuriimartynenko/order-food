import { actionTree, mutationTree, getterTree } from 'typed-vuex'
import { homeViewService } from './home.service'

import { IFoods } from '@/types'

const state = () => ({
  foods: [],
  selectedFoods: []
})

const mutations = mutationTree(state, {
  SET_FOODS (state, payload) {
    state.foods = payload
  },

  SET_SELECTED_FOODS (state: { selectedFoods: IFoods[] }, payload: IFoods) {
    state.selectedFoods = [...state.selectedFoods, payload]
  },

  SET_QUANTITY_FOODS (state: any, payload: IFoods) {
    state.selectedFoods.quantity = payload
  },

  REMOVE_PRODUCT_FROM_CART (state: { selectedFoods: IFoods[] }, id: number) {
    const record: IFoods | undefined = state.selectedFoods.find((element: IFoods) => element.id === id)
    state.selectedFoods.splice(state.selectedFoods.indexOf(record as IFoods), 1)
  }
})

const actions = actionTree({ state, mutations }, {
  addNewItem ({ state, commit }, payload: { id: number; value: number | undefined }) {
    const isDuplicateFood: any = state.selectedFoods.find((item: IFoods) => item.id === payload.id)
    const foundFood: any = state.foods.find((item: IFoods) => item.id === payload.id)
    if (isDuplicateFood) {
      foundFood.quantity = payload.value ? isDuplicateFood.quantity + payload.value : isDuplicateFood.quantity + 1
      commit('SET_QUANTITY_FOODS', foundFood.quantity)
    } else {
      foundFood.quantity = payload.value ? payload.value : foundFood.quantity
      commit('SET_SELECTED_FOODS', foundFood)
    }
  },

  async fetchFoods ({ commit }) {
    return homeViewService.getFoods().then((data) => {
      commit('SET_FOODS', data)
    })
  }
})

const getters = getterTree(state, {
  cartValue: (state) =>
    state.selectedFoods.reduce(
      (currentAmount, cart: IFoods) => currentAmount + cart.quantity * cart.price,
      0
    ),
  totalCart: (state) => state.selectedFoods.reduce((currentQuantiy, cart: IFoods) => currentQuantiy + cart.quantity, 0)
})
export const homeStore = {
  namespaced: true,

  state,
  mutations,
  actions,
  getters
}
