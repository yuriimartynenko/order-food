<template>
  <header class="h-12 bg-outer-space mb-4">
    <div class="h-full flex justify-between items-center max-w-980 mx-auto relative">
      <router-link class="text-white" to="/">Order food</router-link>
      <input type="search" placeholder="Search" class="rounded p-1 w-80 text-center focus:text-left
      focus:outline-none transition duration-300 ease-in-out focus:bg-grey-100"
      >
      <ul class="flex justify-between items-center w-1/4">
        <template v-if="isLoggedIn">
          <li class="text-grey-400 hover:text-grey-200 transition duration-150 ease-in-out cursor-pointer w-full">
            Profile
          </li>
          <li class="text-grey-400 hover:text-grey-200 transition duration-150 ease-in-out cursor-pointer w-full"
              @click="logout"
          >
            Logout
          </li>
        </template>
        <template v-else>
          <li class="w-full">
            <router-link class="text-grey-400 hover:text-grey-200 transition duration-150 ease-in-out" to="/auth/login">
              Login
            </router-link>
          </li>
          <li class="w-full">
            <router-link
              class="text-grey-400 hover:text-grey-200 transition duration-150 ease-in-out w-full" to="/auth/sign-up"
            >
              Sign up
            </router-link>
          </li>
        </template>
        <li
          class="cursor-pointer
          bg-green-eucalyptus active:bg-green-700 text-white p-1 w-full flex justify-around rounded"
          @click="isShowCart = !isShowCart"
        >
          Cart <div class="bg-white text-black px-2 rounded text-sm flex items-center">{{ totalCart }}</div>
        </li>
      </ul>
      <div v-if="isShowCart" class="absolute right-0 top-12 z-10 w-60 bg-outer-space text-grey-200 p-3">
        <div v-if="totalCart === 0">
          Nothing
        </div>
        <div v-else>
          <div v-for="food in selectedFoods" :key="food.id">
            {{ food.name }} x {{ food.quantity }}
          </div>
          <router-link class="text-green-500" to="/cart">
            <span @click="isShowCart = false">Shopping cart</span>
          </router-link>
        </div>
        <div class="absolute top-0 right-0 p-1 cursor-pointer text-red-500" @click="isShowCart = false">x</div>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from 'vue'
import { vuex } from '@/store'
import { router } from '@/router'

export default defineComponent({
  name: 'HeaderComponent',

  setup () {
    const isShowCart = ref(false)

    const isLoggedIn = computed(() => vuex.authStore.isLoggedIn)
    const selectedFoods = computed(() => vuex.homeStore.selectedFoods)
    const totalCart = computed(() => vuex.homeStore.totalCart)

    const logout = () => {
      vuex.authStore.REMOVE_AUTH_STATE()
      router.push('/')
    }

    return {
      isShowCart,
      isLoggedIn,
      logout,
      selectedFoods,
      totalCart
    }
  }
})
</script>
