<template>
  <div class="flex-content">
    <HeaderComponent />
    <transition name="fade">
      <AlertComponent v-if="isAlert" />
    </transition>
    <router-view />
  </div>
  <FooterComponent />
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'

import HeaderComponent from '@/components/HeaderComponent.vue'
import AlertComponent from '@/components/AlertComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'

import { vuex } from '@/store'

export default defineComponent({
  name: 'DefaultLayout',
  components: {
    HeaderComponent,
    AlertComponent,
    FooterComponent
  },

  setup () {
    const isAlert = computed(() => vuex.alertStore.isAlert)

    return { isAlert }
  }
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
