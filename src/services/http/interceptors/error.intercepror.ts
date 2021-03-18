import { AxiosError } from 'axios'
import { vuex } from '@/store'

export const errorInterceptor = async (error: AxiosError) => {
  // global error handler
  if (error.response) {
    vuex.alertStore.SET_ALERT_STATUS(true)
    vuex.alertStore.SET_MESSAGE(error.response.data.error.message)
    vuex.alertStore.SET_TIMEOUT(3000)
    vuex.alertStore.SET_THEME('failed')
  }
  return Promise.reject(error)
}
