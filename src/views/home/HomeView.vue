<template>
  <div class="max-w-980 mx-auto">
    <div class="flex flex-wrap">
      <div v-for="item in items" :key="item.id" class="mb-3 max-w-1/3 item">
        <div class="flex flex-col relative border border-grey-200 mx-2 p-3">
          <div class="w-full h-0 relative p-2" style="padding-top: 100%">
            <img :src="item.image" alt=""
                 class="absolute
                top-0 left-0 w-full h-full
                object-contain p-3 transform hover:scale-105 duration-150 ease-in-out"
            >
          </div>
          <div class="card-body">
            <h5 class="card-title text-green-eucalyptus">
              <button class="font-medium focus:outline-none" @click="goToItem(item.id)">{{ item.name }}</button>
            </h5>
            <p class="card-text truncate text-xs">
              {{ item.description }}
            </p>
            <div class="flex justify-between my-2">
              <p class="col-6 lead">${{ item.price }}</p>
              <p class="col-6">
                <button
                  class="bg-green-eucalyptus
                    active:bg-green-700 py-1 px-2 text-sm text-white rounded focus:outline-none"
                  @click="addNewItem(item)"
                >
                  Add to cart
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { vuex } from '@/store'
import { router } from '@/router'

import addNewFood from '@/hooks/add-new-food'

export default defineComponent({
  name: 'HomeView',
  title: 'Order food',

  setup () {
    const { addNewItem } = addNewFood()

    const goToItem = (id: string) => {
      router.push({ path: `/details/${id}` })
    }

    const items = computed(() => {
      const foods = vuex.homeStore.foods
      if (!foods.length) {
        vuex.homeStore.fetchFoods()
      }
      return foods
    })

    return {
      addNewItem,
      items,
      goToItem
    }
  }
})
</script>
