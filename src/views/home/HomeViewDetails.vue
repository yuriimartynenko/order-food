<template>
  <div class="max-w-980 mx-auto">
    <el-row>
      <el-col class="mb-4">
        <el-card :body-style="{ padding: '0px' }" class="card-wrapper">
          <img
            :src="foundItem.image"
            class="image w-1/4"
          >
          <div style="padding: 14px;">
            <span class="font-bold">{{ foundItem.name }} ${{ foundItem.price }}</span>
            <p>{{ foundItem.description }}</p>
            <div class="flex items-center gap-2">
              Quantity: <el-input-number v-model="count" size="mini" :min="1" />
              <el-button type="text" class="button" @click.stop="addNewItem(foundItem, count)">Buy</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from 'vue'
import { router } from '@/router'
import { vuex } from '@/store'

import { IFoods } from '@/types'
import addNewFood from '@/hooks/add-new-food'

export default defineComponent({
  name: 'HomeViewDetails',
  setup () {
    const count = ref(1)
    const foundItem = computed(() => {
      const foods = vuex.homeStore.foods
      if (!foods.length) {
        vuex.homeStore.fetchFoods()
      }

      return foods.find((item: IFoods) => item.id === +router.currentRoute.value.params.id) || []
    })

    const { addNewItem } = addNewFood()

    return {
      foundItem,
      count,
      addNewItem
    }
  }
})
</script>

<style>
.card-wrapper .el-card .el-card__body {
  display: flex;
}
</style>
