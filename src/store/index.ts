import { createStore } from 'vuex'
import {
  homeStore,
  authStore,
  alertStore
} from './modules'
import { useAccessor } from 'typed-vuex'

const storePattern = {
  modules: {
    homeStore,
    authStore,
    alertStore
  }
}

export const store = createStore(storePattern)
export const vuex = useAccessor(store, storePattern)
