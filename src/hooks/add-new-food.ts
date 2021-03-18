import { IFoods } from '@/types'
import { vuex } from '@/store'

export default function addNewFood () {
  const addNewItem = (item: IFoods, count?: number) => {
    vuex.homeStore.addNewItem({ id: item.id, value: count })

    vuex.alertStore.SET_ALERT_STATUS(true)
    vuex.alertStore.SET_MESSAGE(item.name + ' was successfully added to your cart')
    vuex.alertStore.SET_TIMEOUT(3000)
    vuex.alertStore.SET_THEME('success')
  }

  return {
    addNewItem
  }
}
