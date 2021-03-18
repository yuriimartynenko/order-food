<template>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { vuex } from '@/store'

export default defineComponent({
  name: 'App',

  setup () {
    vuex.authStore.autoLogin()
  }
})
</script>

<style>
html, body {
  height: 100%;
}
#app {
  display: flex;
  flex-direction: column;
  min-height: 100%;
}
</style>
