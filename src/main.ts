import { createApp } from 'vue'
import App from '@/App.vue'
import { element } from '@/plugins/element'

import { router } from '@/router'
import { store } from '@/store'

import '@/assets/styles/main.scss'

export const app = createApp(App)
app
  .use(store)
  .use(router)
  .use(element)

router.isReady().then(() => {
  app.mount('#app')
})
