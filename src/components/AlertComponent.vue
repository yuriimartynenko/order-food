<template>
  <div
    class="flex items-center fixed top-0 left-1/2
  text-white h-12 z-10 px-8 transform -translate-x-2/4 translate-y-0"
    :class="[theme === 'success'? 'bg-green-eucalyptus' : 'bg-red-700']"
  >
    <div class="absolute top-0 right-0 p-1 cursor-pointer text-white font-bold" @click="closeAlert">x</div>
    {{ message }}
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onUnmounted } from 'vue'

import { vuex } from '@/store'

export default defineComponent({
  name: 'AlertComponent',

  setup () {
    const theme = computed(() => vuex.alertStore.theme)
    const message = computed(() => vuex.alertStore.message)
    const timeout = computed(() => vuex.alertStore.timeout)

    const closeAlert = () => {
      vuex.alertStore.SET_ALERT_STATUS(false)
    }

    const timer = setTimeout(() => {
      vuex.alertStore.SET_ALERT_STATUS(false)
    }, timeout.value)

    onUnmounted(() => {
      clearTimeout(timer)
    })

    return { theme, message, closeAlert }
  }
})
</script>
