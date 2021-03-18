<template>
  <div class="max-w-980 mx-auto mb-4">
    <div class="">
      <form class="flex flex-col w-full max-w-sm mx-auto">
        <div>
          <input v-model="email" class="flex-1 appearance-none
          border border-transparent w-full py-2 px-4 bg-white
          text-gray-700 placeholder-gray-400 shadow-md rounded-lg text-base
          focus:outline-none focus:ring-2 focus:ring-green-500
          focus:border-transparent" type="email"
                 placeholder="Your email"
                 @blur="isValidEmail"
          >
          <p class="text-red-500 text-sm">{{ emailError }}</p>
        </div>
        <div class="my-4">
          <input v-model="password" class="flex-1 appearance-none
          border border-transparent w-full py-2 px-4 bg-white
          text-gray-700 placeholder-gray-400 shadow-md rounded-lg text-base
          focus:outline-none focus:ring-2 focus:ring-green-500
          focus:border-transparent" type="password" placeholder="Your password"
                 @blur="isValidPassword"
          >
          <p class="text-red-500 text-sm">{{ passwordError }}</p>
        </div>
        <button class="flex-shrink-0 bg-green-eucalyptus
      text-white text-base font-semibold py-2 px-4 rounded-lg
        shadow-md hover:bg-green-500
        focus:outline-none focus:ring-2 focus:ring-green-500
        focus:ring-offset-2 focus:ring-offset-purple-200" type="button" @click="doLogin"
        >
          Login
        </button>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { vuex } from '@/store'
import { router } from '@/router'

import useAuth from '@/hooks/auth'

export default defineComponent({
  name: 'Login',

  setup () {
    const { isValidEmail, isValidPassword, email, password, emailError, passwordError } = useAuth()

    const doLogin = () => {
      if (!isValidEmail() || !isValidPassword()) return
      const payload = { email: email.value, password: password.value }
      vuex.authStore.login(payload).then(() => {
        router.push('/')
      })
    }

    return {
      doLogin,
      email,
      password,
      emailError,
      passwordError,
      isValidEmail,
      isValidPassword
    }
  }
})
</script>
